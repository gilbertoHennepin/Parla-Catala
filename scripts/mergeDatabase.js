const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'src', 'data', 'curriculum_database.json');
const outputPath = path.join(__dirname, '..', 'src', 'data', 'curriculum', 'database.ts');

if (!fs.existsSync(dbPath)) {
  console.error("Database JSON not found at", dbPath);
  process.exit(1);
}

const rawData = fs.readFileSync(dbPath, 'utf8');
const database = JSON.parse(rawData);

// Group by level and moduleName
const tiers = {};
let idCounter = 1;

database.forEach(item => {
  const { level, moduleName, scenarioType, spanishPrompt, expectedCatalanAnswer, grammarRuleTested, vocabularyHints } = item;
  
  if (!tiers[level]) {
    tiers[level] = {
      level,
      title: level === 'C2' ? 'C2 — Superior' : `Extensió ${level}`,
      description: level === 'C2' ? 'Metalinguistic & Academic Mastery' : 'Mòduls addicionals avançats',
      requiredXp: level === 'C2' ? 12000 : 0, // Doesn't matter much for existing tiers
      sectionsMap: {}
    };
  }
  
  if (!tiers[level].sectionsMap[moduleName]) {
    const sectionId = `${level.toLowerCase()}-ext-${moduleName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
    tiers[level].sectionsMap[moduleName] = {
      id: sectionId,
      title: moduleName,
      description: `Practica avançada: ${moduleName}`,
      icon: '🔥', // Default icon for database sections
      scenarios: []
    };
  }
  
  const char = { name: 'Gemma_Teacher', display: 'Gemma', role: 'Professora' };
  
  tiers[level].sectionsMap[moduleName].scenarios.push({
    id: `${tiers[level].sectionsMap[moduleName].id}-${String(idCounter++).padStart(3, '0')}`,
    type: scenarioType,
    characterName: char.name,
    characterDisplayName: char.display,
    characterRole: char.role,
    promptText: spanishPrompt,
    expectedAnswer: expectedCatalanAnswer,
    hints: vocabularyHints,
    xpReward: 25,
    explanationNote: grammarRuleTested
  });
});

// Generate TypeScript
function escapeStr(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, '\\"');
}

let tsContent = `import type { Tier } from "./types";\n\n`;

for (const level in tiers) {
  const t = tiers[level];
  tsContent += `export const extTier${level}: Tier = {\n`;
  tsContent += `  level: "${t.level}",\n`;
  tsContent += `  title: "${escapeStr(t.title)}",\n`;
  tsContent += `  description: "${escapeStr(t.description)}",\n`;
  tsContent += `  requiredXp: ${t.requiredXp},\n`;
  tsContent += `  sections: [\n`;
  
  for (const moduleName in t.sectionsMap) {
    const s = t.sectionsMap[moduleName];
    tsContent += `    {\n`;
    tsContent += `      id: "${s.id}",\n`;
    tsContent += `      title: "${escapeStr(s.title)}",\n`;
    tsContent += `      description: "${escapeStr(s.description)}",\n`;
    tsContent += `      icon: "${s.icon}",\n`;
    tsContent += `      scenarios: [\n`;
    
    for (const sc of s.scenarios) {
      tsContent += `        {\n`;
      tsContent += `          id: "${sc.id}",\n`;
      tsContent += `          type: "${sc.type}",\n`;
      tsContent += `          characterName: "${sc.characterName}",\n`;
      tsContent += `          characterDisplayName: "${sc.characterDisplayName}",\n`;
      tsContent += `          characterRole: "${sc.characterRole}",\n`;
      tsContent += `          promptText: "${escapeStr(sc.promptText)}",\n`;
      tsContent += `          expectedAnswer: "${escapeStr(sc.expectedAnswer)}",\n`;
      tsContent += `          hints: ${JSON.stringify(sc.hints)},\n`;
      tsContent += `          xpReward: ${sc.xpReward},\n`;
      tsContent += `          explanationNote: "${escapeStr(sc.explanationNote)}"\n`;
      tsContent += `        },\n`;
    }
    
    tsContent += `      ]\n    },\n`;
  }
  
  tsContent += `  ]\n};\n\n`;
}

fs.writeFileSync(outputPath, tsContent, 'utf8');
console.log(`Generated ${outputPath}`);
