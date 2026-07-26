export type ScenarioType = "talking" | "writing";
export type DifficultyTier = "A1" | "A2" | "B1" | "B2" | "C1";

export interface Scenario {
  id: string;
  type: ScenarioType;
  characterName: string;
  characterDisplayName: string;
  characterRole: string;
  promptText: string;
  expectedAnswer: string;
  alternativeAnswers?: string[];
  hints: string[];
  falseFriendWarning?: string;
  xpReward: number;
  explanationNote: string;
}

export interface Section {
  id: string;
  title: string;
  description: string;
  icon: string;
  scenarios: Scenario[];
}

export interface Tier {
  level: DifficultyTier;
  title: string;
  description: string;
  requiredXp: number;
  sections: Section[];
}
