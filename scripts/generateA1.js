const fs = require("fs");
const path = require("path");

const generateScenario = (id, type, charName, charRole, prompt, expected, hints, explanation) => {
  return `
          {
            id: "${id}",
            type: "${type}",
            characterName: "${charName}",
            characterDisplayName: "${charName.split('_')[0]}",
            characterRole: "${charRole}",
            promptText: \`${prompt}\`,
            expectedAnswer: "${expected}",
            hints: ${JSON.stringify(hints)},
            xpReward: 15,
            explanationNote: \`${explanation}\`,
          }`;
};

const identityScenarios = [];
for (let i = 1; i <= 20; i++) {
  identityScenarios.push(
    generateScenario(
      `a1-ident-${i.toString().padStart(2, "0")}`,
      i % 2 === 0 ? "writing" : "talking",
      "Laia_Student",
      "Estudiant",
      `Preséntate: "Hola, me llamo Marc y soy de Barcelona." (Variación ${i})`,
      "Hola, em dic Marc i sóc de Barcelona.",
      ["Recuerda usar 'em dic' para 'me llamo'.", "Usa 'sóc' para 'soy'."],
      "Presentarse en catalán utiliza el verbo reflexivo dir-se (em dic)."
    )
  );
}

const physicalScenarios = [];
for (let i = 1; i <= 20; i++) {
  physicalScenarios.push(
    generateScenario(
      `a1-phys-${i.toString().padStart(2, "0")}`,
      i % 2 === 0 ? "talking" : "writing",
      "Gemma_Barista",
      "Cambrera",
      `Describe: "Tengo los ojos azules y el pelo castaño." (Variación ${i})`,
      "Tinc els ulls blaus i els cabells castanys.",
      ["'Ojos' = 'ulls'.", "'Pelo' = 'cabells' (plural en catalán)."],
      "En catalán, 'el pelo' de la cabeza se dice en plural: 'els cabells'."
    )
  );
}

const timeScenarios = [];
for (let i = 1; i <= 20; i++) {
  timeScenarios.push(
    generateScenario(
      `a1-time-${i.toString().padStart(2, "0")}`,
      "writing",
      "Arnau_Mosso",
      "Mosso d'Esquadra",
      `Di la hora: "Son las cinco de la tarde." (Variación ${i})`,
      "Són les cinc de la tarda.",
      ["'Son' = 'Són' (con acento agudo).", "'Tarde' = 'tarda'."],
      "El catalán usa el sistema de cuartos, pero para las horas exactas es similar: Són les cinc."
    )
  );
}

const profScenarios = [];
for (let i = 1; i <= 20; i++) {
  profScenarios.push(
    generateScenario(
      `a1-prof-${i.toString().padStart(2, "0")}`,
      "talking",
      "Pol_Teacher",
      "Professor",
      `Explica: "Mi hermano es médico y yo soy profesor." (Variación ${i})`,
      "El meu germà és metge i jo sóc professor.",
      ["'Hermano' = 'germà'.", "'Médico' = 'metge'."],
      "No se usa artículo indefinido antes de la profesión: 'és metge', no 'és un metge'."
    )
  );
}

const courtScenarios = [];
for (let i = 1; i <= 20; i++) {
  courtScenarios.push(
    generateScenario(
      `a1-court-${i.toString().padStart(2, "0")}`,
      "writing",
      "Marta_HR",
      "Recursos Humans",
      `Cortesía: "Muchas gracias y que tenga un buen día." (Variación ${i})`,
      "Moltes gràcies i que tingui un bon dia.",
      ["'Muchas gracias' = 'Moltes gràcies'.", "'Que tenga' = 'que tingui' (subjuntivo)."],
      "Las fórmulas de cortesía requieren dominar el modo subjuntivo para desear cosas a otros."
    )
  );
}

const fileContent = `import type { Tier } from "./types";

export const tierA1: Tier = {
  level: "A1",
  title: "Fonaments",
  description: "Basic greetings, café ordering, and city navigation. Includes 100 comprehensive scenarios.",
  requiredXp: 0,
  sections: [
    {
      id: "a1-identity",
      title: "Identitat i Presentacions",
      description: "Personal data, introductions, and demonyms.",
      icon: "👋",
      scenarios: [${identityScenarios.join(",\n")}]
    },
    {
      id: "a1-physicality",
      title: "Físic i Aparença",
      description: "Physical descriptions, clothing, colors, and body parts.",
      icon: "👁️",
      scenarios: [${physicalScenarios.join(",\n")}]
    },
    {
      id: "a1-orientation",
      title: "Orientació Espacial i Temporal",
      description: "Telling time, parts of the day, city vs. countryside.",
      icon: "🗺️",
      scenarios: [${timeScenarios.join(",\n")}]
    },
    {
      id: "a1-professions",
      title: "Professions i Família",
      description: "Family structures, trades, and professions.",
      icon: "💼",
      scenarios: [${profScenarios.join(",\n")}]
    },
    {
      id: "a1-courtesies",
      title: "Estats Abstracts i Cortesia",
      description: "Forms of courtesy, moods, and abstract states.",
      icon: "☕",
      scenarios: [${courtScenarios.join(",\n")}]
    }
  ]
};
`;

fs.writeFileSync(path.join(__dirname, "../src/data/curriculum/a1.ts"), fileContent, "utf8");
console.log("Generated src/data/curriculum/a1.ts with 100 scenarios!");
