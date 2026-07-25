/**
 * Curriculum Data Layer
 *
 * Structured learning scenarios organized into three CEFR-aligned tiers:
 *   A1 — Fundamentals (greetings, café, navigation)
 *   A2 — Intermediate (past tense, shopping, daily routines)
 *   B1 — Advanced (medical contexts, emotional vocabulary, complex pronouns)
 *
 * Each scenario targets specific linguistic challenges that Spanish speakers
 * face when learning Catalan, including false friends, the periphrastic past
 * tense, weak pronouns (en/hi), and Gallo-Romance vocabulary divergences.
 */

// ---------------------------------------------------------------------------
// Type Definitions
// ---------------------------------------------------------------------------

export type ScenarioType = "talking" | "writing";

export type DifficultyTier = "A1" | "A2" | "B1";

/**
 * A single interactive exercise within a section.
 */
export interface Scenario {
  /** Unique identifier, e.g. "a1-intro-01" */
  id: string;
  /** Whether this is a speech or writing exercise */
  type: ScenarioType;
  /** Seed string passed to DiceBear to render a consistent avatar */
  characterName: string;
  /** Display name shown in the UI for the avatar */
  characterDisplayName: string;
  /** Short role description, e.g. "Barista at Café Gòtic" */
  characterRole: string;
  /** The instruction/prompt shown to the learner (in Spanish) */
  promptText: string;
  /** The correct Catalan answer the learner should produce */
  expectedAnswer: string;
  /** Acceptable alternative answers that should also be marked correct */
  alternativeAnswers?: string[];
  /** Progressive hints revealed one at a time */
  hints: string[];
  /** If this scenario specifically tests a false friend, describe it */
  falseFriendWarning?: string;
  /** XP awarded for a correct answer */
  xpReward: number;
  /** Context note shown after answering (pedagogical explanation) */
  explanationNote: string;
}

/**
 * A thematic group of scenarios within a tier.
 */
export interface Section {
  /** Unique section id */
  id: string;
  /** Human-readable title */
  title: string;
  /** Short description of the learning focus */
  description: string;
  /** Icon emoji for the section card */
  icon: string;
  /** Ordered list of scenarios */
  scenarios: Scenario[];
}

/**
 * A CEFR-aligned difficulty tier containing multiple sections.
 */
export interface Tier {
  /** CEFR level */
  level: DifficultyTier;
  /** Tier display title */
  title: string;
  /** Brief overview */
  description: string;
  /** Minimum total XP required to unlock this tier */
  requiredXp: number;
  /** Ordered list of sections */
  sections: Section[];
}

// ---------------------------------------------------------------------------
// Curriculum Data
// ---------------------------------------------------------------------------

export const curriculum: Tier[] = [
  // =========================================================================
  // TIER A1 — FUNDAMENTALS
  // =========================================================================
  {
    level: "A1",
    title: "Fonaments",
    description:
      "Basic greetings, café ordering, and city navigation. Build your first Catalan phrases and master Gallo-Romance vocabulary.",
    requiredXp: 0,
    sections: [
      // — Section: Introductions ——————————————————————————————————————————
      {
        id: "a1-introductions",
        title: "Presentacions",
        description:
          "Meet the characters and learn basic greetings with personal articles.",
        icon: "👋",
        scenarios: [
          {
            id: "a1-intro-01",
            type: "talking",
            characterName: "Laia_Student",
            characterDisplayName: "Laia",
            characterRole: "Companya de classe",
            promptText:
              'Saluda a Laia y preséntate. Di: "Hola, soy [tu nombre]" en catalán. Recuerda que en catalán se usa el artículo personal antes del nombre.',
            expectedAnswer: "Hola, sóc el Marc",
            alternativeAnswers: [
              "Hola, sóc la Maria",
              "Hola, sóc el Jordi",
              "Hola, sóc la Marta",
            ],
            hints: [
              '"Soy" se traduce como "sóc" en catalán.',
              "En catalán, se usa el artículo personal: \"el\" (masculino) o \"la\" (femenino) antes del nombre.",
              'La frase completa es: "Hola, sóc el/la [nombre]".',
            ],
            xpReward: 10,
            explanationNote:
              "En catalán, es muy común usar artículos personales (el/la) antes de nombres propios en contextos informales. Esto no ocurre en español estándar.",
          },
          {
            id: "a1-intro-02",
            type: "writing",
            characterName: "Laia_Student",
            characterDisplayName: "Laia",
            characterRole: "Companya de classe",
            promptText:
              'Laia te pregunta cómo estás. Escribe la respuesta: "Estoy bien, gracias. ¿Y tú?" en catalán.',
            expectedAnswer: "Estic bé, gràcies. I tu?",
            hints: [
              '"Estoy" se dice "estic" en catalán.',
              '"Bien" se dice "bé" — ¡nota el acento agudo!',
              '"Gracias" se escribe "gràcies" — con acento grave en la à.',
              '"Y tú" se traduce como "I tu?" — la conjunción "y" es "i" en catalán.',
            ],
            xpReward: 15,
            explanationNote:
              'En catalán, "bien" se escribe "bé" con acento agudo (indica vocal cerrada), mientras que "gracias" usa acento grave: "gràcies" (indica vocal abierta). Esta distinción entre acentos agudos y graves es fundamental en la ortografía catalana.',
          },
          {
            id: "a1-intro-03",
            type: "talking",
            characterName: "Pol_Teacher",
            characterDisplayName: "Pol",
            characterRole: "Professor de català",
            promptText:
              'Tu profesor Pol te pregunta de dónde eres. Responde: "Soy de Madrid, pero vivo en Barcelona." en catalán.',
            expectedAnswer:
              "Sóc de Madrid, però visc a Barcelona.",
            hints: [
              '"Pero" se dice "però" en catalán — ¡con acento grave!',
              '"Vivo" se traduce como "visc".',
              'La preposición "en" (en este contexto) es "a" en catalán.',
            ],
            xpReward: 15,
            explanationNote:
              'El verbo "viure" (vivir) se conjuga como "visc" en primera persona. Nota que la preposición cambia: en español "vivo en Barcelona" → en catalán "visc a Barcelona".',
          },
        ],
      },

      // — Section: At the Café —————————————————————————————————————————
      {
        id: "a1-cafe",
        title: "Al Cafè",
        description:
          "Order food and drinks using Gallo-Romance vocabulary distinct from Spanish.",
        icon: "☕",
        scenarios: [
          {
            id: "a1-cafe-01",
            type: "writing",
            characterName: "Gemma_Barista",
            characterDisplayName: "Gemma",
            characterRole: "Cambrera al Cafè Gòtic",
            promptText:
              'Pide un café con leche y un bocadillo de queso. Traduce al catalán: "Quiero un café con leche y un bocadillo de queso, por favor."',
            expectedAnswer:
              "Vull un cafè amb llet i un entrepà de formatge, si us plau.",
            hints: [
              '"Quiero" se dice "vull" en catalán.',
              '"Leche" es "llet" — derivado del latín, diferente del español.',
              '"Queso" es "formatge" — como el francés "fromage".',
              '"Por favor" se dice "si us plau" (literalmente "si os place").',
            ],
            xpReward: 20,
            explanationNote:
              'El vocabulario gastronómico catalán refleja sus raíces galo-romances: "formatge" (cf. francés "fromage") en lugar de "queso", y "si us plau" como fórmula de cortesía.',
          },
          {
            id: "a1-cafe-02",
            type: "talking",
            characterName: "Gemma_Barista",
            characterDisplayName: "Gemma",
            characterRole: "Cambrera al Cafè Gòtic",
            promptText:
              'Gemma te pregunta qué quieres tomar. Responde verbalmente: "Una agua y una manzana, por favor" en catalán. ¡Atención a la pronunciación de la vocal neutra!',
            expectedAnswer:
              "Una aigua i una poma, si us plau.",
            hints: [
              '"Agua" se dice "aigua" — casi igual, pero con diptongo "ai".',
              '"Manzana" es "poma" en catalán — ¡completamente diferente del español!',
              "Recuerda que las vocales átonas tienden al sonido schwa /ə/ en catalán central.",
            ],
            xpReward: 15,
            explanationNote:
              '"Poma" (manzana) es un excelente ejemplo de vocabulario galo-romance: comparte raíces con el francés "pomme". Practica la vocal neutra (schwa) en sílabas átonas.',
          },
          {
            id: "a1-cafe-03",
            type: "writing",
            characterName: "Gemma_Barista",
            characterDisplayName: "Gemma",
            characterRole: "Cambrera al Cafè Gòtic",
            promptText:
              'La cuenta, por favor. Escribe: "¿Cuánto cuesta? La cuenta, por favor." en catalán.',
            expectedAnswer:
              "Quant costa? El compte, si us plau.",
            hints: [
              '"¿Cuánto?" se dice "Quant?" — sin signos de interrogación iniciales en catalán.',
              '"Cuesta" es "costa".',
              '"La cuenta" es "el compte" en catalán — ¡cambia el género!',
            ],
            xpReward: 15,
            explanationNote:
              "En catalán no se usan los signos de interrogación invertidos (¿) al inicio de las preguntas. Solo se usa el signo final (?). Esto es una diferencia ortográfica importante respecto al español.",
          },
        ],
      },

      // — Section: City Navigation ———————————————————————————————————
      {
        id: "a1-navigation",
        title: "Per la Ciutat",
        description:
          "Ask for directions and practice terminal consonant clusters.",
        icon: "🗺️",
        scenarios: [
          {
            id: "a1-nav-01",
            type: "talking",
            characterName: "Agent_Mosso",
            characterDisplayName: "Arnau",
            characterRole: "Mosso d'Esquadra",
            promptText:
              'Pregunta a un policía dónde está la estación de tren. Di en catalán: "Perdone, ¿dónde está la estación de tren?" Presta atención a la consonante final de "ciutat".',
            expectedAnswer:
              "Perdoni, on és l'estació de tren?",
            hints: [
              '"Perdone" (formal) se dice "perdoni" en catalán.',
              '"Dónde" se traduce como "on".',
              '"Está" (ser/estar) se dice "és" en este contexto.',
              'Se usa la contracción: "l\'estació" (la + estació).',
            ],
            xpReward: 15,
            explanationNote:
              'La contracción del artículo "la" con palabras que empiezan por vocal o h es obligatoria en catalán: "la estació" → "l\'estació". La pronunciación de consonantes finales duras (como la -t en "ciutat") es un reto clave.',
          },
          {
            id: "a1-nav-02",
            type: "writing",
            characterName: "Agent_Mosso",
            characterDisplayName: "Arnau",
            characterRole: "Mosso d'Esquadra",
            promptText:
              'Arnau te da direcciones. Traduce: "Gira a la derecha y la estación está cerca, al final de la calle."',
            expectedAnswer:
              "Gira a la dreta i l'estació és a prop, al final del carrer.",
            hints: [
              '"Derecha" se dice "dreta" en catalán.',
              '"Cerca" se dice "a prop" — ¡no confundas con "prop" como sustantivo!',
              '"Calle" se dice "carrer" — del latín "carraria".',
              '"Al final de la" → "al final del" — contracción obligatoria de "de + el".',
            ],
            falseFriendWarning:
              '"A prop" (cerca) no debe confundirse con ningún cognado español. Es un término puramente catalán.',
            xpReward: 20,
            explanationNote:
              '"Carrer" (calle) deriva del latín tardío "carraria". Nota las contracciones obligatorias: "de + el" = "del", y "la + estació" = "l\'estació".',
          },
          {
            id: "a1-nav-03",
            type: "talking",
            characterName: "Agent_Mosso",
            characterDisplayName: "Arnau",
            characterRole: "Mosso d'Esquadra",
            promptText:
              'Practica: "La ciudad es muy bonita. Me gusta mucho." en catalán. Concéntrate en la pronunciación de "ciutat" (la -t final suena como /t/).',
            expectedAnswer:
              "La ciutat és molt bonica. M'agrada molt.",
            hints: [
              '"Ciudad" se dice "ciutat" — la D final se pronuncia como T.',
              '"Bonita" se dice "bonica" en catalán.',
              '"Me gusta" se expresa como "m\'agrada" — contracción de "me + agrada".',
              '"Mucho" se dice "molt".',
            ],
            xpReward: 15,
            explanationNote:
              'La pronunciación de "ciutat" es clave: la -D final se pronuncia /t/. Este ensordecimiento de consonantes finales es una regla fonológica fundamental del catalán que no existe en español.',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // TIER A2 — INTERMEDIATE
  // =========================================================================
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
    ],
  },

  // =========================================================================
  // TIER B1 — ADVANCED
  // =========================================================================
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
              'Este ejercicio combina los tres usos de "hi" (locativo, haver-hi) con "en" (partitivo). La forma "n\'hi ha" es posiblemente la estructura más compleja y exclusiva del catalán respecto al español.',
          },
        ],
      },
    ],
  },
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
