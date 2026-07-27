const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/curriculum/database.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const replacements = [
  { desc: "Identidad y Cortesía", icon: "Hand" },
  { desc: "La Familia y Artículos", icon: "Users" },
  { desc: "Comida y Bebida", icon: "Utensils" },
  { desc: "Orientación y Físico", icon: "Map" },
  { desc: "Rutina Diaria y Horas", icon: "Clock" },
  { desc: "La Ciudad y el Campo", icon: "Trees" },
  { desc: "Ser, Estar, Anar, Venir", icon: "ArrowRight" },
  { desc: "Planes de Futuro", icon: "Plane" },
  { desc: "De Compras \\(False Friends\\)", icon: "ShoppingBag" },
  { desc: "Dudas y Deseos \\(Subjuntivo\\)", icon: "Sparkles" },
  { desc: "Obligaciones y Necesidad", icon: "Lock" },
  { desc: "En el Médico", icon: "Hospital" },
  { desc: "Festividades y Tradiciones", icon: "PartyPopper" },
  { desc: "Pronombres Débiles \\(Mastery\\)", icon: "Link" },
  { desc: "Pronombres Relativos", icon: "Link" },
  { desc: "Entorno Laboral y Universidad", icon: "Briefcase" },
  { desc: "Conectores Argumentativos", icon: "BrainCircuit" },
  { desc: "Documentación Administrativa", icon: "FileText" },
  { desc: "Posesivos Formales", icon: "Handshake" },
  { desc: "Subjuntivo Imperfecto", icon: "Drama" },
  { desc: "Régimen Verbal \\(CRV\\)", icon: "Wrench" },
  { desc: "Defensa de Tesis y Debate Abstracto", icon: "MessageSquare" },
  { desc: "Formatos Textuales Específicos", icon: "BookOpen" },
  { desc: "Modismos y el Verb Fer", icon: "Zap" },
  { desc: "Derivación Léxica", icon: "Repeat" }
];

replacements.forEach(({ desc, icon }) => {
  // Regex to match the description line and the following icon line
  const regex = new RegExp(`(description:\\s*"Practica avançada:\\s*${desc}",\\s*\\n\\s*icon:\\s*)"Flame"`, 'g');
  content = content.replace(regex, `$1"${icon}"`);
});

fs.writeFileSync(filePath, content);
console.log("Replaced Flame icons in database.ts");
