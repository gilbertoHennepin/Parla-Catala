import type { Tier, Scenario } from "./types";
import { tierA1 } from "./a1";
import { tierA2 } from "./a2";
import { tierB1 } from "./b1";
import { tierB2 } from "./b2";
import { tierC1 } from "./c1";
import { extTierA1, extTierA2, extTierB1, extTierB2, extTierC1, extTierC2 } from "./database";

export * from "./types";

// Merge database extensions into existing tiers
const mergedA1 = { ...tierA1, sections: [...tierA1.sections, ...extTierA1.sections] };
const mergedA2 = { ...tierA2, sections: [...tierA2.sections, ...extTierA2.sections] };
const mergedB1 = { ...tierB1, sections: [...tierB1.sections, ...extTierB1.sections] };
const mergedB2 = { ...tierB2, sections: [...tierB2.sections, ...extTierB2.sections] };
const mergedC1 = { ...tierC1, sections: [...tierC1.sections, ...extTierC1.sections] };

export const curriculum: Tier[] = [
  mergedA1,
  mergedA2,
  mergedB1,
  mergedB2,
  mergedC1,
  extTierC2
];

/**
 * Helper: Get all scenarios as a flat array.
 */
export function getAllScenarios(): Scenario[] {
  return curriculum.flatMap((tier) =>
    tier.sections.flatMap((section) => section.scenarios)
  );
}

/**
 * Helper: Find a scenario by its id.
 */
export function getScenarioById(id: string): Scenario | undefined {
  return getAllScenarios().find((s) => s.id === id);
}

/**
 * Helper: Get the next scenario after a given id.
 */
export function getNextScenario(currentId: string): Scenario | undefined {
  const all = getAllScenarios();
  const idx = all.findIndex((s) => s.id === currentId);
  return idx >= 0 && idx < all.length - 1 ? all[idx + 1] : undefined;
}

/**
 * Helper: Get the tier that contains a given scenario id.
 */
export function getTierForScenario(scenarioId: string): Tier | undefined {
  return curriculum.find((tier) =>
    tier.sections.some((section) =>
      section.scenarios.some((s) => s.id === scenarioId)
    )
  );
}
