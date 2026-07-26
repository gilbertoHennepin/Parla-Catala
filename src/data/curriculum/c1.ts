import type { Tier } from "./types";

export const tierC1: Tier = // =========================================================================
  {
    level: "C1",
    title: "Suficiència (C1)",
    description:
      "Produce complex, argumentative texts with absolute adequacy, cohesion, and advanced metalinguistic awareness.",
    requiredXp: 600,
    sections: [
      {
        id: "c1-debate",
        title: "Debat i Argumentació",
        description:
          "Advanced exercises in structuring arguments and participating in high-level societal debates.",
        icon: "🗣️",
        scenarios: [
          {
            id: "c1-deb-01",
            type: "writing",
            characterName: "Moderator_Lluis",
            characterDisplayName: "Lluís",
            characterRole: "Moderador de debat",
            promptText:
              'Traduce este argumento complejo: "A pesar de que el gobierno ha invertido mucho, todavía no hay suficientes recursos. En consecuencia, es necesario actuar ahora."',
            expectedAnswer:
              "Malgrat que el govern ha invertit molt, encara no hi ha prou recursos. En conseqüència, cal actuar ara.",
            hints: [
              '"A pesar de que" → "Malgrat que" (conector concesivo).',
              '"Todavía no hay suficientes" → "encara no hi ha prou".',
              '"En consecuencia" → "En conseqüència" (conector ilativo).',
              '"Es necesario actuar" → "cal actuar" (uso del verbo caldre).',
            ],
            xpReward: 50,
            explanationNote:
              'El nivel C1 exige el dominio absoluto de conectores discursivos complejos ("malgrat que", "en conseqüència") y el uso fluido de verbos defectivos impersonales muy arraigados en catalán como "caldre" (ser necesario).'
          }
        ]
      }
    ]
};
