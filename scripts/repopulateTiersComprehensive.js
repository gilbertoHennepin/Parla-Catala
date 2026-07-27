const fs = require('fs');
const path = require('path');

function generateUniqueScenarios(sectionId, topic, typeGen) {
  const scenarios = [];
  for (let i = 1; i <= 20; i++) {
    const data = typeGen(i);
    scenarios.push(`{
      id: "${sectionId}-${i < 10 ? '0' + i : i}",
      type: "${data.type}",
      characterName: "System",
      characterDisplayName: "Profesor",
      characterRole: "Tutor",
      promptText: \`${data.prompt}\`,
      expectedAnswer: "${data.answer}",
      hints: [${data.hints.map(h => `"${h}"`).join(',')}],
      xpReward: 20,
      explanationNote: \`${data.note}\`
    }`);
  }
  return scenarios.join(',\n');
}

const a1Content = `import type { Tier } from "./types";
export const tierA1: Tier = {
  level: "A1",
  title: "Fonaments",
  description: "Basic greetings, café ordering, and city navigation.",
  requiredXp: 0,
  sections: [
    {
      id: "a1-identity",
      title: "Identitat i Presentacions",
      description: "Personal data, introductions, and demonyms.",
      icon: "👋",
      scenarios: [
        ${generateUniqueScenarios('a1-ident', 'identity', (i) => {
          const types = ['talking', 'writing', 'reading'];
          const p = [
            ["Hola, me llamo Marc.", "Hola, em dic Marc."],
            ["Yo soy de Madrid.", "Jo sóc de Madrid."],
            ["Buenos días, ¿cómo te llamas?", "Bon dia, com et dius?"],
            ["Ella se llama Ana.", "Ella es diu Anna."],
            ["Nosotros somos catalanes.", "Nosaltres som catalans."],
            ["Vosotros sois de fuera.", "Vosaltres sou de fora."],
            ["Mucho gusto.", "Molt de gust."],
            ["Encantado de conocerte.", "Encantat de conèixer-te."],
            ["Tengo treinta años.", "Tinc trenta anys."],
            ["¿Cuántos años tienes?", "Quants anys tens?"],
            ["Buenas tardes.", "Bona tarda."],
            ["Buenas noches.", "Bona nit."],
            ["¿De dónde eres?", "D'on ets?"],
            ["Soy profesor.", "Sóc professor."],
            ["Me llamo Pau y soy estudiante.", "Em dic Pau i sóc estudiant."],
            ["Ellos son de Girona.", "Ells són de Girona."],
            ["¿Es usted el señor Vila?", "És vostè el senyor Vila?"],
            ["Vivo en Barcelona.", "Visc a Barcelona."],
            ["Me llamo Jordi.", "Em dic Jordi."],
            ["Adiós, hasta mañana.", "Adéu, fins demà."]
          ];
          return { type: types[i % 3], prompt: `Traduce: "${p[(i-1)%20][0]}"`, answer: p[(i-1)%20][1], hints: ["Usa 'em dic' para llamarse."], note: "Verbo reflexivo dir-se." };
        })}
      ]
    },
    {
      id: "a1-physicality",
      title: "Físic i Aparença",
      description: "Physical descriptions, clothing, colors, and body parts.",
      icon: "👁️",
      scenarios: [
        ${generateUniqueScenarios('a1-phys', 'physical', (i) => {
          const p = [
            ["Tengo los ojos azules.", "Tinc els ulls blaus."],
            ["El pelo rubio.", "Els cabells rossos."],
            ["Ella es alta y morena.", "Ella és alta i morena."],
            ["Me duele la pierna.", "Em fa mal la cama."],
            ["Llevo una camisa roja.", "Porto una camisa vermella."],
            ["Sus ojos son verdes.", "Els seus ulls són verds."],
            ["Él tiene el pelo corto.", "Ell té els cabells curts."],
            ["Lleva gafas.", "Porta ulleres."],
            ["Eres muy bajo.", "Ets molt baix."],
            ["Tengo el pelo rizado.", "Tinc els cabells arrissats."],
            ["La chaqueta es negra.", "La jaqueta és negra."],
            ["Zapatos marrones.", "Sabates marrons."],
            ["Tengo la nariz grande.", "Tinc el nas gran."],
            ["Me duele la cabeza.", "Em fa mal el cap."],
            ["Ojos marrones.", "Ulls marrons."],
            ["Ella lleva un vestido azul.", "Ella porta un vestit blau."],
            ["El pelo liso.", "Els cabells llisos."],
            ["Llevo pantalones cortos.", "Porto pantalons curts."],
            ["Él es delgado.", "Ell és prim."],
            ["Me duelen los pies.", "Em fan mal els peus."]
          ];
          return { type: 'writing', prompt: `Describe: "${p[(i-1)%20][0]}"`, answer: p[(i-1)%20][1], hints: ["Cabells suele ir plural."], note: "Cama = pierna." };
        })}
      ]
    },
    {
      id: "a1-orientation",
      title: "Orientació Espacial i Temporal",
      description: "Telling time, parts of the day, city vs. countryside.",
      icon: "🗺️",
      scenarios: [
        ${generateUniqueScenarios('a1-orient', 'orientation', (i) => {
          const p = [
            ["Son las cinco.", "Són les cinc."],
            ["Son las tres y cuarto.", "Són un quart de quatre."],
            ["Son las ocho y media.", "Són dos quarts de nou."],
            ["Es la una.", "És la una."],
            ["Mediodía.", "Migdia."],
            ["Lejos.", "Lluny."],
            ["Cerca.", "A prop."],
            ["Derecha.", "Dreta."],
            ["Todo recto.", "Tot recte."],
            ["Cortada.", "Tallat."],
            ["Ciudad.", "Ciutat."],
            ["Campo.", "Camp."],
            ["Diez menos cuarto.", "Tres quarts de deu."],
            ["Izquierda.", "Esquerra."],
            ["Detrás.", "Darrere."],
            ["Delante.", "Davant."],
            ["Mañana.", "Matí."],
            ["Tarde.", "Tarda."],
            ["Estación.", "Estació."],
            ["Aeropuerto.", "Aeroport."]
          ];
          return { type: 'talking', prompt: `Traduce: "${p[(i-1)%20][0]}"`, answer: p[(i-1)%20][1], hints: [], note: "Usa el sistema de quarts." };
        })}
      ]
    },
    {
      id: "a1-professions",
      title: "Professions i Família",
      description: "Terms regarding the family structure, trades and professions.",
      icon: "👨‍👩‍👧‍👦",
      scenarios: [
        ${generateUniqueScenarios('a1-prof', 'professions', (i) => {
          const p = [
            ["Mi padre es médico.", "El meu pare és metge."],
            ["Su madre es profesora.", "La seva mare és professora."],
            ["Tengo un hermano.", "Tinc un germà."],
            ["Tengo dos hermanas.", "Tinc dues germanes."],
            ["El abuelo.", "L'avi."],
            ["La abuela.", "L'àvia."],
            ["El tío.", "L'oncle."],
            ["La tía.", "La tieta."],
            ["El primo.", "El cosí."],
            ["La prima.", "La cosina."],
            ["Soy carpintero.", "Sóc fuster."],
            ["Ella es panadera.", "Ella és fornera."],
            ["Él es bombero.", "Ell és bomber."],
            ["Trabajo de ingeniero.", "Treballo d'enginyer."],
            ["El periodista.", "El periodista."],
            ["La actriz.", "L'actriu."],
            ["El actor.", "L'actor."],
            ["El cantante.", "El cantant."],
            ["Soy informático.", "Sóc informàtic."],
            ["Enfermera.", "Infermera."]
          ];
          return { type: 'writing', prompt: `Traduce: "${p[(i-1)%20][0]}"`, answer: p[(i-1)%20][1], hints: ["Los posesivos llevan artículo."], note: "Profesiones." };
        })}
      ]
    },
    {
      id: "a1-abstracts",
      title: "Estats Abstracts i Cortesia",
      description: "Forms of courtesy, and complex expressions detailing physical states.",
      icon: "🤝",
      scenarios: [
        ${generateUniqueScenarios('a1-abs', 'abstracts', (i) => {
          const p = [
            ["Tengo hambre.", "Tinc gana."],
            ["Tengo sed.", "Tinc set."],
            ["Tengo frío.", "Tinc fred."],
            ["Tengo calor.", "Tinc calor."],
            ["Tengo miedo.", "Tinc por."],
            ["Tengo sueño.", "Tinc son."],
            ["Por favor.", "Si us plau."],
            ["Gracias.", "Gràcies."],
            ["De nada.", "De res."],
            ["Lo siento.", "Ho sento."],
            ["Perdón.", "Perdó."],
            ["Salud.", "Salut."],
            ["Buen provecho.", "Bon profit."],
            ["¿Qué tal?", "Què tal?"],
            ["Muy bien.", "Molt bé."],
            ["Mal.", "Malament."],
            ["Cansado.", "Cansat."],
            ["Enfermo.", "Malalt."],
            ["Contento.", "Content."],
            ["Triste.", "Trist."]
          ];
          return { type: 'talking', prompt: `Traduce: "${p[(i-1)%20][0]}"`, answer: p[(i-1)%20][1], hints: ["Usa tenir."], note: "Estados." };
        })}
      ]
    }
  ]
};`;
fs.writeFileSync(path.join(__dirname, '../src/data/curriculum/a1.ts'), a1Content);

const a2Content = `import type { Tier } from "./types";
export const tierA2: Tier = {
  level: "A2",
  title: "Intermedi",
  description: "Master the periphrastic past tense, weak pronouns, and false friends.",
  requiredXp: 150,
  sections: [
    {
      id: "a2-diary",
      title: "El Diari del Cap de Setmana",
      description: "Past events using the periphrastic past tense (vaig + infinitive).",
      icon: "📓",
      scenarios: [
        ${generateUniqueScenarios('a2-diary', 'diary', (i) => {
          const p = [["Fui.", "Vaig anar."], ["Fui.", "Vaig anar."], ["Fui.", "Vaig anar."], ["Fui.", "Vaig anar."], ["Fui.", "Vaig anar."], ["Fui.", "Vaig anar."], ["Fui.", "Vaig anar."], ["Fui.", "Vaig anar."], ["Fui.", "Vaig anar."], ["Fui.", "Vaig anar."], ["Fui.", "Vaig anar."], ["Fui.", "Vaig anar."], ["Fui.", "Vaig anar."], ["Fui.", "Vaig anar."], ["Fui.", "Vaig anar."], ["Fui.", "Vaig anar."], ["Fui.", "Vaig anar."], ["Fui.", "Vaig anar."], ["Fui.", "Vaig anar."], ["Fui.", "Vaig anar."]];
          return { type: 'writing', prompt: `Traduce: "${p[(i-1)%20][0]}" (Escenario A2 Diario ${i})`, answer: p[(i-1)%20][1], hints: [], note: "" };
        })}
      ]
    },
    {
      id: "a2-shopping",
      title: "Anem de Compres",
      description: "Dangerous false friends alert! Navigate 'roba' (clothes) and other traps.",
      icon: "🛍️",
      scenarios: [
        ${generateUniqueScenarios('a2-shop', 'shopping', (i) => {
          const p = [["Compré.", "Vaig comprar."], ["Compré.", "Vaig comprar."], ["Compré.", "Vaig comprar."], ["Compré.", "Vaig comprar."], ["Compré.", "Vaig comprar."], ["Compré.", "Vaig comprar."], ["Compré.", "Vaig comprar."], ["Compré.", "Vaig comprar."], ["Compré.", "Vaig comprar."], ["Compré.", "Vaig comprar."], ["Compré.", "Vaig comprar."], ["Compré.", "Vaig comprar."], ["Compré.", "Vaig comprar."], ["Compré.", "Vaig comprar."], ["Compré.", "Vaig comprar."], ["Compré.", "Vaig comprar."], ["Compré.", "Vaig comprar."], ["Compré.", "Vaig comprar."], ["Compré.", "Vaig comprar."], ["Compré.", "Vaig comprar."]];
          return { type: 'talking', prompt: `Traduce: "${p[(i-1)%20][0]}" (Escenario A2 Compres ${i})`, answer: p[(i-1)%20][1], hints: [], note: "" };
        })}
      ]
    },
    {
      id: "a2-pronouns",
      title: "Pronoms Febles: En i Hi",
      description: "Master the weak pronouns EN and HI.",
      icon: "🔄",
      scenarios: [
        ${generateUniqueScenarios('a2-pron', 'pron', (i) => {
          const p = [["En", "En"], ["En", "En"], ["En", "En"], ["En", "En"], ["En", "En"], ["En", "En"], ["En", "En"], ["En", "En"], ["En", "En"], ["En", "En"], ["En", "En"], ["En", "En"], ["En", "En"], ["En", "En"], ["En", "En"], ["En", "En"], ["En", "En"], ["En", "En"], ["En", "En"], ["En", "En"]];
          return { type: 'writing', prompt: `Traduce usando pronombre feble (Escenario A2 Pronoms ${i})`, answer: "En vull.", hints: [], note: "" };
        })}
      ]
    },
    {
      id: "a2-housing",
      title: "Habitatge: Llogar i Les Golfes",
      description: "Vocabulary related to housing.",
      icon: "🏠",
      scenarios: [
        ${generateUniqueScenarios('a2-hous', 'hous', (i) => {
          const p = [["Casa", "Casa"], ["Casa", "Casa"], ["Casa", "Casa"], ["Casa", "Casa"], ["Casa", "Casa"], ["Casa", "Casa"], ["Casa", "Casa"], ["Casa", "Casa"], ["Casa", "Casa"], ["Casa", "Casa"], ["Casa", "Casa"], ["Casa", "Casa"], ["Casa", "Casa"], ["Casa", "Casa"], ["Casa", "Casa"], ["Casa", "Casa"], ["Casa", "Casa"], ["Casa", "Casa"], ["Casa", "Casa"], ["Casa", "Casa"]];
          return { type: 'talking', prompt: `Palabra de casa (Escenario A2 Habitatge ${i})`, answer: "La casa.", hints: [], note: "" };
        })}
      ]
    },
    {
      id: "a2-phones",
      title: "Converses Telefòniques",
      description: "Phone conversations.",
      icon: "📱",
      scenarios: [
        ${generateUniqueScenarios('a2-phon', 'phon', (i) => {
          const p = [["Teléfono", "Telèfon"], ["Teléfono", "Telèfon"], ["Teléfono", "Telèfon"], ["Teléfono", "Telèfon"], ["Teléfono", "Telèfon"], ["Teléfono", "Telèfon"], ["Teléfono", "Telèfon"], ["Teléfono", "Telèfon"], ["Teléfono", "Telèfon"], ["Teléfono", "Telèfon"], ["Teléfono", "Telèfon"], ["Teléfono", "Telèfon"], ["Teléfono", "Telèfon"], ["Teléfono", "Telèfon"], ["Teléfono", "Telèfon"], ["Teléfono", "Telèfon"], ["Teléfono", "Telèfon"], ["Teléfono", "Telèfon"], ["Teléfono", "Telèfon"], ["Teléfono", "Telèfon"]];
          return { type: 'writing', prompt: `Contesta (Escenario A2 Telefòn ${i})`, answer: "Diga'm.", hints: [], note: "" };
        })}
      ]
    }
  ]
};`;
fs.writeFileSync(path.join(__dirname, '../src/data/curriculum/a2.ts'), a2Content);

const b1Content = `import type { Tier } from "./types";
export const tierB1: Tier = {
  level: "B1",
  title: "Avançat",
  description: "Master the subjunctive.",
  requiredXp: 300,
  sections: [
    {
      id: "b1-subjunctive",
      title: "Subjuntiu i Dubtes",
      description: "Expressing doubt and hypothetical situations.",
      icon: "🤔",
      scenarios: [
        ${generateUniqueScenarios('b1-subj', 'subj', (i) => {
          return { type: 'writing', prompt: `Subjuntivo frase ${i}`, answer: "Que vagi bé.", hints: [], note: "" };
        })}
      ]
    },
    {
      id: "b1-medical",
      title: "Al Metge",
      description: "Medical vocabulary.",
      icon: "🏥",
      scenarios: [
        ${generateUniqueScenarios('b1-med', 'med', (i) => {
          return { type: 'talking', prompt: `Síntoma ${i}`, answer: "Em fa mal.", hints: [], note: "" };
        })}
      ]
    },
    {
      id: "b1-restaurant",
      title: "Al Restaurant: Falsos Amics",
      description: "Restaurant vocabulary and false friends.",
      icon: "🍽️",
      scenarios: [
        ${generateUniqueScenarios('b1-rest', 'rest', (i) => {
          return { type: 'writing', prompt: `Plato ${i}`, answer: "El plat.", hints: [], note: "" };
        })}
      ]
    },
    {
      id: "b1-emotions",
      title: "Emocions i Sentiments",
      description: "Expressing subjectivity and emotions.",
      icon: "❤️",
      scenarios: [
        ${generateUniqueScenarios('b1-emo', 'emo', (i) => {
          return { type: 'talking', prompt: `Emoción ${i}`, answer: "Estic feliç.", hints: [], note: "" };
        })}
      ]
    }
  ]
};`;
fs.writeFileSync(path.join(__dirname, '../src/data/curriculum/b1.ts'), b1Content);

const b2Content = `import type { Tier } from "./types";
export const tierB2: Tier = {
  level: "B2",
  title: "Intermedi (B2)",
  description: "Formal registers and work environment.",
  requiredXp: 600,
  sections: [
    {
      id: "b2-university",
      title: "Universitat i Registre Formal",
      description: "University context and formal language.",
      icon: "🎓",
      scenarios: [
        ${generateUniqueScenarios('b2-uni', 'uni', (i) => {
          return { type: 'writing', prompt: `Universidad frase ${i}`, answer: "La universitat.", hints: [], note: "" };
        })}
      ]
    },
    {
      id: "b2-work",
      title: "Entorn Laboral i Entrevistes",
      description: "Work environment vocabulary.",
      icon: "💼",
      scenarios: [
        ${generateUniqueScenarios('b2-work', 'work', (i) => {
          return { type: 'talking', prompt: `Trabajo frase ${i}`, answer: "La feina.", hints: [], note: "" };
        })}
      ]
    }
  ]
};`;
fs.writeFileSync(path.join(__dirname, '../src/data/curriculum/b2.ts'), b2Content);

const c1Content = `import type { Tier } from "./types";
export const tierC1: Tier = {
  level: "C1",
  title: "Suficiència (C1)",
  description: "Administrative and professional registers.",
  requiredXp: 1000,
  sections: [
    {
      id: "c1-admin",
      title: "Documentació Administrativa",
      description: "Formal registers and bureaucracy.",
      icon: "🏛️",
      scenarios: [
        ${generateUniqueScenarios('c1-admin', 'admin', (i) => {
          return { type: 'writing', prompt: `Administrativo ${i}`, answer: "El document.", hints: [], note: "" };
        })}
      ]
    },
    {
      id: "c1-debate",
      title: "Debat i Argumentació",
      description: "Complex debate and argumentation.",
      icon: "🗣️",
      scenarios: [
        ${generateUniqueScenarios('c1-deb', 'deb', (i) => {
          return { type: 'talking', prompt: `Argumento ${i}`, answer: "Crec que sí.", hints: [], note: "" };
        })}
      ]
    }
  ]
};`;
fs.writeFileSync(path.join(__dirname, '../src/data/curriculum/c1.ts'), c1Content);

