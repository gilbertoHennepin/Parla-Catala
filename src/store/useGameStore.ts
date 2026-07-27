/**
 * Game State Store (Zustand)
 *
 * Manages the user's overarching progression: current position in the
 * curriculum, XP, lives, streaks, and completed scenarios. Persists to
 * localStorage so progress survives page refreshes.
 */

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { curriculum, getAllScenarios, type Scenario } from "@/data/curriculum";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface GameState {
  /** Current tier index (0 = A1, 1 = A2, 2 = B1) */
  currentTierIndex: number;
  /** Current section index within the active tier */
  currentSectionIndex: number;
  /** Current scenario index within the active section */
  currentScenarioIndex: number;
  /** Total experience points earned */
  xp: number;
  /** Remaining lives (max 5) */
  lives: number;
  /** Consecutive days of practice */
  streakDays: number;
  /** Timestamp of last activity (ISO string) */
  lastActivityDate: string | null;
  /** Set of completed scenario IDs */
  completedScenarios: string[];
  /** Whether the app has been launched before */
  hasOnboarded: boolean;
  /** UI language preference */
  uiLanguage: "ca" | "es";
}

export interface GameActions {
  /** Submit an answer: award XP or deduct a life, then advance */
  submitAnswer: (isCorrect: boolean, xpReward: number) => void;
  /** Get the currently active scenario (or undefined if finished) */
  getCurrentScenario: () => Scenario | undefined;
  /** Get overall progress percentage (0-100) */
  getProgressPercentage: () => number;
  /** Check whether a tier is unlocked based on XP */
  isTierUnlocked: (tierIndex: number) => boolean;
  /** Navigate to a specific scenario by its ID */
  goToScenario: (scenarioId: string) => void;
  /** Navigate directly to a specific section's first scenario */
  goToSection: (tierIndex: number, sectionIndex: number) => void;
  /** Navigate to the previous scenario in the curriculum */
  goToPreviousScenario: () => void;
  /** Navigate to the next scenario (only if current is completed) */
  goToNextScenario: () => void;
  /** Reset lives to full */
  resetLives: () => void;
  /** Mark onboarding as complete */
  completeOnboarding: () => void;
  /** Full state reset */
  resetProgress: () => void;
  /** Set UI Language */
  setUiLanguage: (lang: "ca" | "es") => void;
}

// ---------------------------------------------------------------------------
// Initial state
// ---------------------------------------------------------------------------

const initialState: GameState = {
  currentTierIndex: 0,
  currentSectionIndex: 0,
  currentScenarioIndex: 0,
  xp: 0,
  lives: 5,
  streakDays: 0,
  lastActivityDate: null,
  completedScenarios: [],
  hasOnboarded: false,
  uiLanguage: "es", // Default to Spanish for beginners
};

// ---------------------------------------------------------------------------
// Store
// ---------------------------------------------------------------------------

export const useGameStore = create<GameState & GameActions>()(
  persist(
    (set, get) => ({
      ...initialState,

      submitAnswer: (isCorrect: boolean, xpReward: number) => {
        const state = get();
        const scenario = state.getCurrentScenario();
        if (!scenario) return;

        const today = new Date().toISOString().split("T")[0];
        const isNewDay = state.lastActivityDate !== today;

        if (isCorrect) {
          // --- Correct answer ---
          const tier = curriculum[state.currentTierIndex];
          const section = tier?.sections[state.currentSectionIndex];
          const scenarios = section?.scenarios;

          let nextTierIndex = state.currentTierIndex;
          let nextSectionIndex = state.currentSectionIndex;
          let nextScenarioIndex = state.currentScenarioIndex + 1;

          // Advance to next section if current is exhausted
          if (scenarios && nextScenarioIndex >= scenarios.length) {
            nextScenarioIndex = 0;
            nextSectionIndex += 1;
          }

          // Advance to next tier if current is exhausted
          if (tier && nextSectionIndex >= tier.sections.length) {
            nextSectionIndex = 0;
            nextTierIndex += 1;
          }

          // Clamp to the last tier
          if (nextTierIndex >= curriculum.length) {
            nextTierIndex = curriculum.length - 1;
            // Stay at the last scenario
            nextSectionIndex = state.currentSectionIndex;
            nextScenarioIndex = state.currentScenarioIndex;
          }

          set({
            xp: state.xp + xpReward,
            currentTierIndex: nextTierIndex,
            currentSectionIndex: nextSectionIndex,
            currentScenarioIndex: nextScenarioIndex,
            completedScenarios: [
              ...state.completedScenarios,
              scenario.id,
            ],
            streakDays: isNewDay
              ? state.streakDays + 1
              : state.streakDays,
            lastActivityDate: today,
          });
        } else {
          // --- Incorrect answer ---
          set({
            lives: Math.max(0, state.lives - 1),
            lastActivityDate: today,
            streakDays: isNewDay
              ? state.streakDays + 1
              : state.streakDays,
          });
        }
      },

      getCurrentScenario: () => {
        const { currentTierIndex, currentSectionIndex, currentScenarioIndex } =
          get();
        return curriculum[currentTierIndex]?.sections[currentSectionIndex]
          ?.scenarios[currentScenarioIndex];
      },

      getProgressPercentage: () => {
        const total = getAllScenarios().length;
        const completed = get().completedScenarios.length;
        return total > 0 ? Math.round((completed / total) * 100) : 0;
      },

      isTierUnlocked: (tierIndex: number) => {
        // DEV: All tiers unlocked
        return true;
      },

      goToScenario: (scenarioId: string) => {
        for (let t = 0; t < curriculum.length; t++) {
          const tier = curriculum[t];
          for (let s = 0; s < tier.sections.length; s++) {
            const section = tier.sections[s];
            for (let sc = 0; sc < section.scenarios.length; sc++) {
              if (section.scenarios[sc].id === scenarioId) {
                set({
                  currentTierIndex: t,
                  currentSectionIndex: s,
                  currentScenarioIndex: sc,
                });
                return;
              }
            }
          }
        }
      },

      goToSection: (tierIndex: number, sectionIndex: number) => {
        set({
          currentTierIndex: tierIndex,
          currentSectionIndex: sectionIndex,
          currentScenarioIndex: 0,
        });
      },

      goToPreviousScenario: () => {
        const state = get();
        let { currentTierIndex, currentSectionIndex, currentScenarioIndex } = state;

        if (currentScenarioIndex > 0) {
          currentScenarioIndex--;
        } else if (currentSectionIndex > 0) {
          currentSectionIndex--;
          currentScenarioIndex = curriculum[currentTierIndex].sections[currentSectionIndex].scenarios.length - 1;
        } else if (currentTierIndex > 0) {
          currentTierIndex--;
          currentSectionIndex = curriculum[currentTierIndex].sections.length - 1;
          currentScenarioIndex = curriculum[currentTierIndex].sections[currentSectionIndex].scenarios.length - 1;
        } else {
          return; // Already at the very first scenario
        }

        set({ currentTierIndex, currentSectionIndex, currentScenarioIndex });
      },

      goToNextScenario: () => {
        const state = get();
        let { currentTierIndex, currentSectionIndex, currentScenarioIndex } = state;

        // Check if the current scenario is completed
        const scenario = curriculum[currentTierIndex]?.sections[currentSectionIndex]?.scenarios[currentScenarioIndex];
        if (!scenario || !state.completedScenarios.includes(scenario.id)) {
          return; // Can't skip ahead if not completed
        }

        const tier = curriculum[currentTierIndex];
        const section = tier?.sections[currentSectionIndex];

        if (currentScenarioIndex < (section?.scenarios.length ?? 0) - 1) {
          currentScenarioIndex++;
        } else if (currentSectionIndex < (tier?.sections.length ?? 0) - 1) {
          currentSectionIndex++;
          currentScenarioIndex = 0;
        } else if (currentTierIndex < curriculum.length - 1) {
          currentTierIndex++;
          currentSectionIndex = 0;
          currentScenarioIndex = 0;
        } else {
          return; // Already at the very last scenario
        }

        set({ currentTierIndex, currentSectionIndex, currentScenarioIndex });
      },

      resetLives: () => set({ lives: 5 }),

      completeOnboarding: () => set({ hasOnboarded: true }),

      resetProgress: () => set(initialState),

      setUiLanguage: (lang: "ca" | "es") => set({ uiLanguage: lang }),
    }),
    {
      name: "catalan-game-state",
    }
  )
);
