import type { Tier } from "./types";

export const tierB2: Tier = // =========================================================================
  {
    level: "B2",
    title: "Intermedi (B2)",
    description:
      "Express thoughts fluently across a wide range of academic and professional topics, mastering formal registers like 'vostè'.",
    requiredXp: 400,
    sections: [
      {
        id: "b2-university",
        title: "Universitat i Registre Formal",
        description:
          "Navigate registrar offices and formal interactions with professors using the 'vostè' pronoun.",
        icon: "🎓",
        scenarios: [
          {
            id: "b2-uni-01",
            type: "writing",
            characterName: "Professor_Rovira",
            characterDisplayName: "Prof. Rovira",
            characterRole: "Catedràtic",
            promptText:
              'Escribe un email formal al profesor: "Estimado profesor, ¿usted podría revisar mi trabajo?" Usa el pronombre "vostè".',
            expectedAnswer:
              "Benvolgut professor, vostè podria revisar el meu treball?",
            hints: [
              '"Estimado" → "Benvolgut".',
              '"Usted" → "vostè".',
              '"Podría revisar" → "podria revisar" (3a persona singular).',
              '"Mi trabajo" → "el meu treball".',
            ],
            xpReward: 40,
            explanationNote:
              'El uso de "vostè" (usted) requiere conjugar el verbo en tercera persona del singular. Es esencial dominar este registro para ámbitos académicos y administrativos, como dicta el nivel B2 del CPNL.',
          },
        ],
      },
      {
        id: "b2-workplace",
        title: "Entorn Laboral i Entrevistes",
        description:
          "Simulate job interviews and complex administrative tasks in a corporate setting.",
        icon: "💼",
        scenarios: [
          {
            id: "b2-work-01",
            type: "talking",
            characterName: "Marta_HR",
            characterDisplayName: "Marta",
            characterRole: "Recursos Humans",
            promptText:
              'En una entrevista de trabajo, responde: "Tengo tres años de experiencia y me adapto rápido a los cambios."',
            expectedAnswer:
              "Tinc tres anys d'experiència i m'adapto ràpidament als canvis.",
            hints: [
              '"Tres años de experiencia" → "tres anys d\'experiència".',
              '"Me adapto" → "m\'adapto".',
              '"Rápido / rápidamente" → "ràpidament".',
              '"A los cambios" → "als canvis" (al + els = als).',
            ],
            xpReward: 45,
            explanationNote:
              'En niveles intermedios (B2), se valora la precisión léxica y sintáctica. "Als" es la contracción obligatoria de la preposición "a" y el artículo "els".'
          }
        ]
      }
    ]
};
