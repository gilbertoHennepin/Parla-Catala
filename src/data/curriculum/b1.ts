import type { Tier } from "./types";

export const tierB1: Tier = // =========================================================================
  {
    level: "B1",
    title: "Avançat",
    description:
      "Navigate high-stakes false friends in medical contexts, master emotional vocabulary, and achieve fluency with complex pronoun constructions.",
    requiredXp: 400,
    sections: [
      // — Section: At the Doctor's ———————————————————————————————————
      {
        id: "b1-medical",
        title: "Al Metge",
        description:
          'Critical false friends: "cama" (leg ≠ bed), "constipat" (cold ≠ constipated). One mistake could cause real confusion!',
        icon: "🏥",
        scenarios: [
          {
            id: "b1-med-01",
            type: "talking",
            characterName: "Doctor_Soler",
            characterDisplayName: "Dr. Soler",
            characterRole: "Metge de família",
            promptText:
              'El Dr. Soler te pregunta qué te pasa. Di: "Me duele la pierna y tengo un resfriado." en catalán. ¡MÁXIMA ATENCIÓN! "Pierna" = "cama" (NO cama/bed). "Resfriado" = "constipat" (NO constipated).',
            expectedAnswer: "Em fa mal la cama i estic constipat.",
            hints: [
              '¡FALSO AMIGO CRÍTICO! "Pierna" en catalán = "cama". En español, "cama" = bed.',
              '¡FALSO AMIGO! "Resfriado" en catalán = "constipat". ¡NO significa estreñimiento!',
              '"Me duele" → "em fa mal" (literalmente "me hace mal").',
              '"Tengo un resfriado" → "estic constipat" (estoy resfriado).',
            ],
            falseFriendWarning:
              '"Cama" = PIERNA en catalán (no cama/bed). "Constipat" = RESFRIADO (no estreñimiento). Error en contexto médico = malentendido grave.',
            xpReward: 40,
            explanationNote:
              '¡Dos falsos amigos de máximo riesgo! "Cama" (pierna) y "constipat" (resfriado) pueden causar errores graves en un contexto médico real. "Cama" en catalán viene del latín "camba" (pierna curva). Para "cama" (mueble), el catalán usa "llit".',
          },
          {
            id: "b1-med-02",
            type: "writing",
            characterName: "Doctor_Soler",
            characterDisplayName: "Dr. Soler",
            characterRole: "Metge de família",
            promptText:
              'Describe tus síntomas por escrito: "Me rompí la pierna el martes pasado. Fui al hospital y me pusieron una escayola." Usa el pasado perifrástico.',
            expectedAnswer:
              "Em vaig trencar la cama dimarts passat. Vaig anar a l'hospital i em van posar un guix.",
            hints: [
              '"Me rompí" → "em vaig trencar" (trencar = romper).',
              '"Pierna" → "cama" — recuerda el falso amigo.',
              '"Martes" → "dimarts".',
              '"Escayola" → "guix".',
              '"Me pusieron" → "em van posar" (van = ellos + posar).',
            ],
            falseFriendWarning:
              '"Cama" sigue significando PIERNA. No traduzcas como "llit" (que sería "cama" = mueble para dormir).',
            xpReward: 35,
            explanationNote:
              'Días de la semana en catalán: dilluns, dimarts, dimecres, dijous, divendres, dissabte, diumenge. Nota la "d-" inicial consistente, derivada del latín "dies" (día).',
          },
          {
            id: "b1-med-03",
            type: "talking",
            characterName: "Doctor_Soler",
            characterDisplayName: "Dr. Soler",
            characterRole: "Metge de família",
            promptText:
              'El doctor te pregunta cuántas pastillas te quedan. Responde: "Tengo dos (de ellas). ¿Necesito más (de ellas)?" Usa el pronombre "en".',
            expectedAnswer: "En tinc dues. En necessito més?",
            hints: [
              '"Tengo dos (de ellas)" → "en tinc dues" (dues = femenino de dos).',
              '"Necesito más (de ellas)" → "en necessito més".',
              'El pronombre "en" es obligatorio aquí porque reemplaza "de pastilles".',
            ],
            xpReward: 30,
            explanationNote:
              'En catalán, "dos" tiene forma femenina "dues" (cf. francés "deux"). El pronombre "en" es obligatorio cuando se refiere a una cantidad de algo previamente mencionado.',
          },
          {
            id: "b1-med-04",
            type: "talking",
            characterName: "Laia_Pharmacist",
            characterDisplayName: "Laia",
            characterRole: "Farmacèutica",
            promptText:
              'En la farmacia, pide una BOTELLA de jarabe: "Quería una botella de jarabe para la tos." (Ojo con la palabra "botella").',
            expectedAnswer: "Voldria una ampolla de xarop per a la tos.",
            hints: [
              '"Quería" → "Voldria".',
              '"Una botella" → "una ampolla" (¡No significa ampolla/blister!).',
              '"Jarabe" → "xarop".',
              '"Para la tos" → "per a la tos".',
            ],
            falseFriendWarning:
              '¡ATENCIÓN! "Ampolla" en catalán significa BOTELLA, no "ampolla de la piel" (que sería "butllofa").',
            xpReward: 30,
            explanationNote:
              'Un error frecuente en farmacias: si pides una "ampolla" esperando un blíster o tratamiento para llagas, te darán una BOTELLA de algo. La palabra catalana para ampolla cutánea es "butllofa".',
          },
        ],
      },
      // — Section: Dining & Falsos Amics (b1-dining) ——————————————————
      {
        id: "b1-dining",
        title: "Al Restaurant: Falsos Amics",
        description:
          "Order food gracefully while dodging the 'afamat' / 'afamado' linguistic trap.",
        icon: "🍽️",
        scenarios: [
          {
            id: "b1-dining-01",
            type: "talking",
            characterName: "Waiter_Pau",
            characterDisplayName: "Pau",
            characterRole: "Cambrer",
            promptText:
              'Dile al camarero que estás MUY HAMBRIENTO: "Tengo mucha hambre, estoy hambriento."',
            expectedAnswer: "Tinc molta gana, estic afamat.",
            hints: [
              '"Tengo mucha hambre" → "Tinc molta gana".',
              '"Estoy hambriento" → "estic afamat" (¡Ojo! Afamat = hambriento, no famoso).',
            ],
            falseFriendWarning:
              '¡FALSO AMIGO! "Afamat" en catalán significa HAMBRIENTO (que tiene hambre/fam). En español, "afamado" significa famoso/célebre.',
            xpReward: 35,
            explanationNote:
              'Si dices que un restaurante es "afamat", estás diciendo que el restaurante tiene hambre, ¡no que es famoso! Para famoso, usa "famós".',
          },
        ],
      },

      // — Section: Emotional Contexts ————————————————————————————————
      {
        id: "b1-emotions",
        title: "Emocions i Sentiments",
        description:
          'Express complex emotions and navigate the false friend "afamada" (hungry ≠ famous).',
        icon: "💭",
        scenarios: [
          {
            id: "b1-emo-01",
            type: "writing",
            characterName: "Laia_Student",
            characterDisplayName: "Laia",
            characterRole: "Amiga",
            promptText:
              'Escríbele a Laia un mensaje disculpándote: "Lo siento mucho. Ayer no fui a tu fiesta porque estaba enfermo. ¿Puedo invitarte a cenar?"',
            expectedAnswer:
              "Ho sento molt. Ahir no vaig anar a la teva festa perquè estava malalt. Et puc convidar a sopar?",
            hints: [
              '"Lo siento" → "ho sento".',
              '"Tu fiesta" → "la teva festa".',
              '"Porque" → "perquè" (con acento grave).',
              '"Estaba enfermo" → "estava malalt".',
              '"Invitarte a cenar" → "convidar-te a sopar" / "et puc convidar a sopar".',
            ],
            xpReward: 35,
            explanationNote:
              'Los posesivos catalanes difieren del español: "tu" → "teva" (fem.) / "teu" (masc.). "Perquè" (porque) se escribe junto y con acento grave — no confundir con "per què" (por qué, en preguntas).',
          },
          {
            id: "b1-emo-02",
            type: "talking",
            characterName: "Nuria_ShopClerk",
            characterDisplayName: "Núria",
            characterRole: "Amiga",
            promptText:
              'Núria dice que tiene mucha hambre. Responde: "Yo también estoy hambrienta. ¿Vamos a comer?" ¡CUIDADO! "Hambrienta" en catalán es "afamada" — ¡NO significa famosa!',
            expectedAnswer:
              "Jo també estic afamada. Anem a dinar?",
            hints: [
              '¡FALSO AMIGO! "Hambrienta" → "afamada" en catalán. En español, "afamada" = famosa.',
              '"Yo también" → "jo també".',
              '"Vamos a comer" → "anem a dinar" (dinar = almorzar/comer).',
              '"Famosa" en catalán se dice "famosa" — ¡NO "afamada"!',
            ],
            falseFriendWarning:
              '"Afamada" = HAMBRIENTA en catalán (de "fam" = hambre). En español, "afamada" = famosa. Confundir esto puede ser embarazoso.',
            xpReward: 30,
            explanationNote:
              '"Afamada" deriva de "fam" (hambre). Para decir "famosa" en catalán, simplemente se dice "famosa". La trampa es que en español, "afamada" significa exactamente lo contrario: célebre, reconocida.',
          },
          {
            id: "b1-emo-03",
            type: "writing",
            characterName: "Pol_Teacher",
            characterDisplayName: "Pol",
            characterRole: "Professor de català",
            promptText:
              'Ejercicio avanzado de pronombres. Traduce: "Me han dicho que hay un restaurante nuevo. ¿Has ido (allí)? Sí, he ido (allí) y he comido (de ello). ¡Hay mucho!" Usa "hi" y "en".',
            expectedAnswer:
              "M'han dit que hi ha un restaurant nou. Hi has anat? Sí, hi he anat i n'he menjat. N'hi ha molt!",
            hints: [
              '"Hay" → "hi ha" (verbo haver-hi).',
              '"¿Has ido allí?" → "hi has anat?" (hi = allí).',
              '"He comido de ello" → "n\'he menjat" (n\' = en, de ello).',
              '"Hay mucho (de ello, allí)" → "n\'hi ha molt".',
            ],
            xpReward: 40,
            explanationNote:
              'Este ejercicio combina los tres usos de "hi" (locativo, haver-hi) con "en" (partitivo). La forma "n\'hi ha" es posiblemente la estructura más compleja y exclusiva del catalán respecto al español.'
          }
        ]
      }
    ]
};
