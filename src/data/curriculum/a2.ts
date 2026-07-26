import type { Tier } from "./types";

export const tierA2: Tier = // =========================================================================
  {
    level: "A2",
    title: "Intermedi",
    description:
      "Master the periphrastic past tense, weak pronouns, and navigate dangerous false friends in shopping and daily routine contexts.",
    requiredXp: 150,
    sections: [
      // — Section: Weekend Diary ——————————————————————————————————————
      {
        id: "a2-diary",
        title: "El Diari del Cap de Setmana",
        description:
          "Write about past events using the periphrastic past tense (vaig + infinitive).",
        icon: "📓",
        scenarios: [
          {
            id: "a2-diary-01",
            type: "writing",
            characterName: "Pol_Teacher",
            characterDisplayName: "Pol",
            characterRole: "Professor de català",
            promptText:
              'Traduce esta entrada de diario al catalán: "El sábado fui al mercado y compré fruta. Vi a mi amiga Laia y comimos juntos." Usa el pasado perifrástico (vaig + infinitivo).',
            expectedAnswer:
              "El dissabte vaig anar al mercat i vaig comprar fruita. Vaig veure la Laia i vam menjar junts.",
            hints: [
              '"Fui" → "vaig anar" (vaig + infinitivo de anar).',
              '"Compré" → "vaig comprar" (vaig + infinitivo de comprar).',
              '"Vi" → "vaig veure" (vaig + infinitivo de veure).',
              '"Comimos" → "vam menjar" (vam = nosotros + infinitivo de menjar).',
              '"Sábado" se dice "dissabte" en catalán.',
            ],
            xpReward: 30,
            explanationNote:
              'El pasado perifrástico es la forma estándar de expresar acciones completadas en catalán oral: "vaig" (yo), "vas" (tú), "va" (él/ella), "vam" (nosotros), "vau" (vosotros), "van" (ellos) + infinitivo. El pretérito simple existe pero se reserva para textos literarios.',
          },
          {
            id: "a2-diary-02",
            type: "talking",
            characterName: "Detective_Pujol",
            characterDisplayName: "Inspector Pujol",
            characterRole: "Inspector de Mossos d'Esquadra",
            promptText:
              'El inspector Pujol te interroga. Responde: "Ayer fui a casa y vi la televisión. Después cené y dormí." en catalán. ¡Usa el pasado perifrástico y responde rápido!',
            expectedAnswer:
              "Ahir vaig anar a casa i vaig veure la televisió. Després vaig sopar i vaig dormir.",
            hints: [
              '"Ayer" se dice "ahir".',
              '"Fui a casa" → "vaig anar a casa".',
              '"Después" → "després".',
              '"Cené" → "vaig sopar" (sopar = cenar).',
            ],
            xpReward: 25,
            explanationNote:
              '"Sopar" (cenar) y "dinar" (almorzar/comer) son palabras catalanas con raíces galo-romances (cf. francés "souper" y "dîner"). Nota que el catalán no usa el pretérito simple en conversación oral.',
          },
        ],
      },

      // — Section: Shopping (False Friends!) ——————————————————————————
      {
        id: "a2-shopping",
        title: "Anem de Compres",
        description:
          'Dangerous false friends alert! Navigate "roba" (clothes ≠ robar) and other traps.',
        icon: "🛍️",
        scenarios: [
          {
            id: "a2-shop-01",
            type: "talking",
            characterName: "Nuria_ShopClerk",
            characterDisplayName: "Núria",
            characterRole: "Dependenta de botiga",
            promptText:
              'Núria te pregunta qué buscas en la tienda. Responde: "Busco ropa de verano. ¿Tienen camisetas?" en catalán. ¡Cuidado! "Ropa" en catalán es "roba" — ¡no tiene nada que ver con "robar"!',
            expectedAnswer:
              "Busco roba d'estiu. Teniu samarretes?",
            hints: [
              '"Ropa" → "roba" en catalán. ¡No confundir con "robar" del español!',
              '"De verano" → "d\'estiu" (estiu = verano).',
              '"¿Tienen?" → "Teniu?" (segunda persona plural, sin ¿).',
              '"Camisetas" → "samarretes".',
            ],
            falseFriendWarning:
              '"Roba" significa ROPA en catalán, no tiene relación con "robar" del español. La similitud fonética es una trampa frecuente.',
            xpReward: 25,
            explanationNote:
              '¡Falso amigo crítico! "Roba" = ropa. "Robar" en catalán se dice exactamente igual: "robar". La confusión viene de que "roba" suena como el verbo español "roba" (él/ella roba). ¡Contexto es clave!',
          },
          {
            id: "a2-shop-02",
            type: "writing",
            characterName: "Nuria_ShopClerk",
            characterDisplayName: "Núria",
            characterRole: "Dependenta de botiga",
            promptText:
              'Traduce la lista de la compra: "Necesito comprar manzanas, fresas, queso y pan." en catalán.',
            expectedAnswer:
              "Necessito comprar pomes, maduixes, formatge i pa.",
            hints: [
              '"Manzanas" → "pomes" (cf. francés "pommes").',
              '"Fresas" → "maduixes".',
              '"Queso" → "formatge" (cf. francés "fromage").',
              '"Pan" → "pa".',
            ],
            xpReward: 20,
            explanationNote:
              'El vocabulario de alimentos en catalán es notablemente galo-romance: "poma" (cf. "pomme"), "formatge" (cf. "fromage"). Estas palabras no tienen cognados directos en español.',
          },
          {
            id: "a2-shop-03",
            type: "writing",
            characterName: "Nuria_ShopClerk",
            characterDisplayName: "Núria",
            characterRole: "Dependenta de botiga",
            promptText:
              'Núria te muestra una chaqueta. Escribe: "Me gusta esta chaqueta. ¿Cuánto cuesta? ¿Puedo probármela?" en catalán.',
            expectedAnswer:
              "M'agrada aquesta jaqueta. Quant costa? Me la puc emprovar?",
            hints: [
              '"Me gusta" → "m\'agrada".',
              '"Esta" (demostrativo femenino) → "aquesta".',
              '"Chaqueta" → "jaqueta".',
              '"Probármela" → "emprovar" (con pronombres reflexivos).',
            ],
            xpReward: 20,
            explanationNote:
              'Los demostrativos catalanes ("aquest/a", "aquell/a") difieren del español. Nota la forma del verbo reflexivo con pronombres clíticos: "Me la puc emprovar?".',
          },
        ],
      },

      // — Section: Weak Pronouns (En / Hi) ————————————————————————————
      {
        id: "a2-pronouns",
        title: "Pronoms Febles: En i Hi",
        description:
          'Master the uniquely Catalan weak pronouns "en" and "hi" that have no Spanish equivalent.',
        icon: "🔤",
        scenarios: [
          {
            id: "a2-pron-01",
            type: "writing",
            characterName: "Pol_Teacher",
            characterDisplayName: "Pol",
            characterRole: "Professor de català",
            promptText:
              'Pol te pregunta: "Tens llibres?" (¿Tienes libros?). Responde: "Sí, tengo tres (de ellos)." usando el pronombre "en".',
            expectedAnswer: "Sí, en tinc tres.",
            hints: [
              'El pronombre "en" reemplaza complementos con "de": "de ellos" → "en".',
              '"Tengo" → "tinc".',
              '"En tinc tres" = "Tengo tres (de ellos)".',
            ],
            xpReward: 25,
            explanationNote:
              'El pronombre "en" es exclusivo del catalán (y el francés "en"). Reemplaza sintagmas introducidos por "de". En español se diría simplemente "tengo tres", pero en catalán es necesario: "en tinc tres".',
          },
          {
            id: "a2-pron-02",
            type: "talking",
            characterName: "Laia_Student",
            characterDisplayName: "Laia",
            characterRole: "Companya de classe",
            promptText:
              'Laia te pregunta: "Vas a la platja?" (¿Vas a la playa?). Responde: "Sí, voy (allí)." usando el pronombre "hi".',
            expectedAnswer: "Sí, hi vaig.",
            hints: [
              'El pronombre "hi" reemplaza complementos con "a": "a la playa" → "hi".',
              '"Voy" → "vaig".',
              '"Hi vaig" = "Voy allí / Voy a (ello)".',
            ],
            xpReward: 25,
            explanationNote:
              'El pronombre "hi" reemplaza sintagmas introducidos por "a" (dirección, lugar). En español simplemente se omite o se dice "voy", pero en catalán el pronombre es obligatorio: "hi vaig".',
          },
          {
            id: "a2-pron-03",
            type: "writing",
            characterName: "Pol_Teacher",
            characterDisplayName: "Pol",
            characterRole: "Professor de català",
            promptText:
              'Combina ambos pronombres. Traduce: "¿Cuántos libros hay en la estantería? Hay cinco (de ellos, allí)."',
            expectedAnswer:
              "Quants llibres hi ha a la prestatgeria? N'hi ha cinc.",
            hints: [
              '"¿Cuántos?" → "Quants?"',
              '"Hay" → "hi ha" (el verbo haver-hi).',
              '"Estantería" → "prestatgeria".',
              'Cuando combinamos "en" + "hi": "n\'hi ha cinc" = hay cinco (de ellos, allí).',
            ],
            xpReward: 35,
            explanationNote:
              'La combinación de "en" + "hi" es uno de los aspectos más complejos del catalán. "N\'hi ha" combina: n\' (de ellos) + hi (allí) + ha (hay). Esta estructura no tiene equivalente en español.',
          },
        ],
      },
      // — Section: Real Estate & Housing (a2-housing) ——————————————————
      {
        id: "a2-housing",
        title: "Habitatge: Llogar i Les Golfes",
        description:
          "Real estate dialogues highlighting critical false friends like 'llogar' and 'les golfes'.",
        icon: "🏠",
        scenarios: [
          {
            id: "a2-house-01",
            type: "talking",
            characterName: "Jordi_RealEstate",
            characterDisplayName: "Jordi",
            characterRole: "Agent immobiliari",
            promptText:
              'Dile a Jordi que quieres ALQUILAR un piso: "Quiero alquilar un piso en el centro, por favor." (¡Ojo con el verbo alquilar!)',
            expectedAnswer: "Vull llogar un pis al centre, si us plau.",
            hints: [
              '"Quiero" → "Vull".',
              '"Alquilar" → "llogar" (NO uses "alquilar"!).',
              '"Un piso" → "un pis".',
              '"En el centro" → "al centre".',
            ],
            falseFriendWarning:
              '¡ALERTA DE FALSO AMIGO! En catalán, la palabra "alquilar" existe pero significa alquilar un compuesto químico (química orgánica). Para arrendar, DEBES usar "llogar".',
            xpReward: 30,
            explanationNote:
              'Este es un clásico error de castellanoparlantes. Usar "alquilar" para referirse a un piso es incorrecto y suena extraño (como si fueras a hacer un experimento químico con el piso). Siempre usa "llogar".',
          },
          {
            id: "a2-house-02",
            type: "writing",
            characterName: "Jordi_RealEstate",
            characterDisplayName: "Jordi",
            characterRole: "Agent immobiliari",
            promptText:
              'Jordi te describe la casa. Traduce: "La casa tiene tres habitaciones, un baño y una buhardilla / ático."',
            expectedAnswer:
              "La casa té tres habitacions, un bany i unes golfes.",
            hints: [
              '"Tiene" → "té".',
              '"Buhardilla / ático" → "les golfes" (siempre en plural).',
            ],
            falseFriendWarning:
              '¡CUIDADO! "Les golfes" significa buhardilla/desván. No tiene ninguna connotación despectiva como la palabra malsonante en español.',
            xpReward: 30,
            explanationNote:
              'Sociolingüísticamente crítico: "les golfes" es la parte más alta de una casa (el desván). Es vital desvincular esta palabra del grave insulto español con el que comparte pronunciación.',
          },
        ],
      },
      // — Section: Phone & Time (a2-phone) ————————————————————————————
      {
        id: "a2-phone",
        title: "Converses Telefòniques",
        description:
          "Manage phone connectivity, schedule meetings, and master the Catalan quarter time system.",
        icon: "📞",
        scenarios: [
          {
            id: "a2-phone-01",
            type: "talking",
            characterName: "Mireia_Colleague",
            characterDisplayName: "Mireia",
            characterRole: "Companya de feina",
            promptText:
              'Mireia quiere quedar para una reunión. Dile: "¿A qué hora quedamos? A las ocho menos cuarto (7:45)."',
            expectedAnswer:
              "A quina hora quedem? A tres quarts de vuit.",
            hints: [
              '"¿A qué hora...?" → "A quina hora...?"',
              '"Quedamos" → "quedem".',
              'El catalán usa el sistema de cuartos. Las 7:45 son "tres cuartos de ocho" → "tres quarts de vuit".',
            ],
            xpReward: 35,
            explanationNote:
              'El sistema horario catalán se basa en la hora que va a llegar (como fracciones de un reloj). 7:45 son 3/4 de la octava hora ("tres quarts de vuit"). Es un modelo cognitivo completamente distinto al español.'
          }
        ]
      }
    ]
};
