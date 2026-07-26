const fs = require('fs');
const path = require('path');

const curriculumContent = fs.readFileSync(path.join(__dirname, '../src/data/curriculum.ts'), 'utf8');

const a2Start = curriculumContent.indexOf('  // TIER A2 — INTERMEDIATE');
const b1Start = curriculumContent.indexOf('  // TIER B1 — ADVANCED');
const b2Start = curriculumContent.indexOf('  // TIER B2 — UPPER INTERMEDIATE');
const c1Start = curriculumContent.indexOf('  // TIER C1 — PROFICIENCY');
const endOfArray = curriculumContent.lastIndexOf('];');

const a2Content = curriculumContent.substring(a2Start - 83, b1Start - 83).trim().slice(0, -1);
const b1Content = curriculumContent.substring(b1Start - 83, b2Start - 83).trim().slice(0, -1);
const b2Content = curriculumContent.substring(b2Start - 83, c1Start - 83).trim().slice(0, -1);
const c1Content = curriculumContent.substring(c1Start - 83, endOfArray).trim();

const writeTier = (name, content) => {
  const fileContent = 'import type { Tier } from "./types";\n\nexport const tier' + name.toUpperCase() + ': Tier = ' + content + ';\n';
  fs.writeFileSync(path.join(__dirname, '../src/data/curriculum/' + name + '.ts'), fileContent, 'utf8');
};

writeTier('a2', a2Content);
writeTier('b1', b1Content);
writeTier('b2', b2Content);
writeTier('c1', c1Content);

const indexContent = `import type { Tier, Scenario } from "./types";
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
`;

fs.writeFileSync(path.join(__dirname, '../src/data/curriculum/index.ts'), indexContent, 'utf8');

console.log("Successfully split all tiers!");
