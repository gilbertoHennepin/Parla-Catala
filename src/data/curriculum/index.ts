import type { Tier, Scenario } from "./types";
import { tierA1 } from "./a1";
import { tierA2 } from "./a2";
import { tierB1 } from "./b1";
import { tierB2 } from "./b2";
import { tierC1 } from "./c1";

export * from "./types";

export const curriculum: Tier[] = [
  tierA1,
  tierA2,
  tierB1,
  tierB2,
  tierC1
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
