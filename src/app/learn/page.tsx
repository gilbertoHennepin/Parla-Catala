/**
 * Learn Page
 *
 * Main learning interface with tier/section navigation sidebar,
 * active scenario display, and progress dashboard.
 */

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { curriculum } from "@/data/curriculum";
import { useGameStore } from "@/store/useGameStore";
import { useTranslation } from "@/lib/i18n";
import ProgressBar from "@/components/ProgressBar";
import ScenarioCard from "@/components/ScenarioCard";
import LanguageToggle from "@/components/LanguageToggle";
import VocabularyPanel from "@/components/VocabularyPanel";

type ContentTab = "exercises" | "vocabulary";

export default function LearnPage() {
  const {
    currentTierIndex,
    currentSectionIndex,
    currentScenarioIndex,
    lives,
    completedScenarios,
    submitAnswer,
    getCurrentScenario,
    isTierUnlocked,
    goToPreviousScenario,
    goToNextScenario,
  } = useGameStore();

  const { t } = useTranslation();

  // Sidebar browsing state — defaults to current curriculum position
  const [browseTier, setBrowseTier] = useState<number | null>(null);
  const [browseSection, setBrowseSection] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<ContentTab>("exercises");

  // Effective indices: sidebar browse state falls back to current position
  const activeTierIndex = browseTier ?? currentTierIndex;
  const activeSectionIndex = browseSection ?? currentSectionIndex;

  // Hydration guard: Zustand's persist middleware hydrates after first render
  const mounted = useGameStore.persist?.hasHydrated() ?? true;

  if (!mounted) {
    return (
      <div className="learn-page">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            color: "var(--text-muted)",
            fontSize: "1.1rem",
          }}
        >
          {t("nav.loading")}
        </div>
      </div>
    );
  }

  const scenario = getCurrentScenario();

  const handleComplete = (isCorrect: boolean) => {
    const currentScenario = getCurrentScenario();
    if (!currentScenario) return;
    submitAnswer(isCorrect, currentScenario.xpReward);
    // Reset browse state so sidebar follows the new current position
    setBrowseTier(null);
    setBrowseSection(null);
  };

  // Count completed scenarios in a section
  const getSectionProgress = (
    tierIndex: number,
    sectionIndex: number
  ): { completed: number; total: number } => {
    const tier = curriculum[tierIndex];
    if (!tier) return { completed: 0, total: 0 };
    const section = tier.sections[sectionIndex];
    if (!section) return { completed: 0, total: 0 };

    const total = section.scenarios.length;
    const completed = section.scenarios.filter((s) =>
      completedScenarios.includes(s.id)
    ).length;
    return { completed, total };
  };

  return (
    <div className="learn-page">
      {/* Header */}
      <header className="learn-header">
        <div className="learn-header-inner">
          <Link href="/" className="learn-logo">
            🇦🇩 <span>{t("nav.title")}</span>
          </Link>
          <div className="header-actions">
            <ProgressBar />
            <LanguageToggle />
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="learn-body">
        {/* Sidebar */}
        <aside className="learn-sidebar">
          {curriculum.map((tier, tIdx) => {
            const unlocked = isTierUnlocked(tIdx);
            const isActive = tIdx === activeTierIndex;

            return (
              <div key={tier.level}>
                <div
                  className={`tier-card ${isActive ? "active" : ""} ${
                    !unlocked ? "locked" : ""
                  }`}
                  onClick={() => {
                    if (unlocked) {
                      setBrowseTier(tIdx);
                      setBrowseSection(0);
                    }
                  }}
                >
                  <span className={`tier-level tier-level-${tier.level}`}>
                    {!unlocked && "🔒 "}
                    {tier.level}
                  </span>
                  <p className="tier-title">{t(`tier.${tier.level.toLowerCase()}.title`, undefined, tier.title)}</p>
                  <p className="tier-description">{t(`tier.${tier.level.toLowerCase()}.desc`, undefined, tier.description)}</p>
                  {tier.requiredXp > 0 && (
                    <p className="tier-xp-req">
                      {unlocked ? t("sidebar.unlocked") : t("sidebar.requires", { xp: tier.requiredXp })}
                    </p>
                  )}
                </div>

                {/* Sections within the active tier */}
                {isActive && unlocked && (
                  <div className="section-list">
                    {tier.sections.map((section, sIdx) => {
                      const progress = getSectionProgress(tIdx, sIdx);
                      const isSectionActive = sIdx === activeSectionIndex;

                      return (
                        <div
                          key={section.id}
                          className={`section-item ${
                            isSectionActive ? "active" : ""
                          }`}
                          onClick={() => setBrowseSection(sIdx)}
                        >
                          <span className="section-icon">{section.icon}</span>
                          <div>
                            <span className="section-title">
                              {t(`section.${section.id}.title`, undefined, section.title)}
                            </span>
                            <span
                              style={{
                                display: "block",
                                fontSize: "0.7rem",
                                color: "var(--text-muted)",
                              }}
                            >
                              {t("sidebar.completed", { completed: progress.completed, total: progress.total })}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </aside>

        {/* Main content */}
        <main className="learn-content">
          {/* Tab toggle: Exercises vs Vocabulary */}
          <div className="content-tab-bar">
            <button
              className={`content-tab ${activeTab === "exercises" ? "active" : ""}`}
              onClick={() => setActiveTab("exercises")}
            >
              <span className="content-tab-icon">🎯</span>
              {t("tab.exercises", undefined, "Ejercicios")}
            </button>
            <button
              className={`content-tab ${activeTab === "vocabulary" ? "active" : ""}`}
              onClick={() => setActiveTab("vocabulary")}
            >
              <span className="content-tab-icon">📖</span>
              {t("tab.vocabulary", undefined, "Vocabulario")}
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "vocabulary" ? (
              <motion.div
                key="vocab"
                style={{ width: "100%", maxWidth: "800px" }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25 }}
              >
                <VocabularyPanel tierLevel={curriculum[activeTierIndex]?.level ?? "A1"} />
              </motion.div>
            ) : (
              <motion.div
                key="exercises"
                style={{ width: "100%", maxWidth: "800px", display: "flex", flexDirection: "column", alignItems: "center" }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25 }}
              >
                {lives === 0 ? (
                  <motion.div
                    className="learn-empty-state"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <span className="empty-emoji">💔</span>
                    <h2 className="empty-title">{t("empty.lives.title")}</h2>
                    <p className="empty-subtitle">
                      {t("empty.lives.desc")}
                    </p>
                    <button
                      className="submit-btn"
                      style={{ maxWidth: 300 }}
                      onClick={() => useGameStore.getState().resetLives()}
                    >
                      {t("empty.lives.btn")}
                    </button>
                  </motion.div>
                ) : scenario ? (
                  <div style={{ width: "100%" }}>
                    <div className="scenario-nav-bar">
                      <button 
                        onClick={goToPreviousScenario} 
                        disabled={currentTierIndex === 0 && currentSectionIndex === 0 && currentScenarioIndex === 0}
                        className="nav-btn"
                      >
                        ← {t("nav.previous", undefined, "Anterior")}
                      </button>
                      <span className="nav-counter">
                        Escenari {currentScenarioIndex + 1}
                      </span>
                      <button 
                        onClick={goToNextScenario}
                        disabled={!completedScenarios.includes(scenario.id)}
                        className="nav-btn"
                      >
                        {t("nav.next", undefined, "Següent")} →
                      </button>
                    </div>
                    <AnimatePresence mode="wait">
                      <ScenarioCard
                        key={scenario.id}
                        scenario={scenario}
                        onComplete={(isCorrect) => {
                          const xp = isCorrect ? scenario.xpReward : 0;
                          submitAnswer(isCorrect, xp);
                        }}
                      />
                    </AnimatePresence>
                  </div>
                ) : (
                  <motion.div
                    className="learn-empty-state"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <span className="empty-emoji">🎓</span>
                    <h2 className="empty-title">{t("empty.done.title")}</h2>
                    <p className="empty-subtitle">
                      {t("empty.done.desc")}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
