/**
 * False Friends Database
 *
 * A comprehensive catalogue of deceptive cognates between Spanish and Catalan.
 * Each entry documents the Catalan word, its true meaning, the Spanish word it
 * resembles, the Spanish meaning, and the pedagogical risk level.
 */

export type RiskLevel = "critical" | "high" | "moderate";

export interface FalseFriend {
  /** The Catalan word */
  catalanWord: string;
  /** What it actually means in Catalan */
  catalanMeaning: string;
  /** The Spanish word it looks/sounds like */
  spanishCognate: string;
  /** What the Spanish cognate means */
  spanishMeaning: string;
  /** How dangerous this false friend is in practice */
  riskLevel: RiskLevel;
  /** An example Catalan sentence using the word correctly */
  exampleSentence: string;
  /** Translation of the example sentence */
  exampleTranslation: string;
  /** Pedagogical context: when/where this confusion is most dangerous */
  contextWarning: string;
  /** Which scenario IDs specifically test this false friend */
  relatedScenarioIds: string[];
}

export const falseFriends: FalseFriend[] = [
  {
    catalanWord: "cama",
    catalanMeaning: "pierna (leg)",
    spanishCognate: "cama",
    spanishMeaning: "cama (bed)",
    riskLevel: "critical",
    exampleSentence: "Em fa mal la cama dreta.",
    exampleTranslation: "Me duele la pierna derecha.",
    contextWarning:
      "En un contexto médico, confundir 'cama' (pierna) con 'cama' (bed) puede causar un diagnóstico completamente erróneo. El catalán usa 'llit' para referirse a la cama (mueble).",
    relatedScenarioIds: ["b1-med-01", "b1-med-02"],
  },
  {
    catalanWord: "roba",
    catalanMeaning: "ropa (clothes)",
    spanishCognate: "roba (verbo robar)",
    spanishMeaning: "él/ella roba (he/she steals)",
    riskLevel: "high",
    exampleSentence: "He comprat roba nova per a l'estiu.",
    exampleTranslation: "He comprado ropa nueva para el verano.",
    contextWarning:
      "La similitud fonética con el verbo español 'robar' causa vacilación en contextos comerciales. El hispanohablante puede dudar al decir 'busco roba' pensando que suena como 'busco robar'.",
    relatedScenarioIds: ["a2-shop-01"],
  },
  {
    catalanWord: "afamada",
    catalanMeaning: "hambrienta (hungry)",
    spanishCognate: "afamada",
    spanishMeaning: "famosa (famous)",
    riskLevel: "moderate",
    exampleSentence: "Estic molt afamada, anem a dinar!",
    exampleTranslation: "Estoy muy hambrienta, ¡vamos a comer!",
    contextWarning:
      "Deriva de 'fam' (hambre). Un hispanohablante podría interpretar 'estic afamada' como 'soy famosa' en lugar de 'tengo hambre'. La confusión puede ser embarazosa pero no peligrosa.",
    relatedScenarioIds: ["b1-emo-02"],
  },
  {
    catalanWord: "constipat",
    catalanMeaning: "resfriado (having a cold)",
    spanishCognate: "constipado",
    spanishMeaning: "congestionado nasalmente / estreñido",
    riskLevel: "high",
    exampleSentence: "No puc anar a treballar perquè estic constipat.",
    exampleTranslation: "No puedo ir a trabajar porque estoy resfriado.",
    contextWarning:
      "En un contexto médico, la confusión semántica puede llevar a describir síntomas incorrectos. En catalán, 'constipat' se refiere específicamente a un resfriado común.",
    relatedScenarioIds: ["b1-med-01"],
  },
  {
    catalanWord: "assistir",
    catalanMeaning: "asistir (to attend) / ayudar (to assist)",
    spanishCognate: "asistir",
    spanishMeaning: "asistir (to attend)",
    riskLevel: "moderate",
    exampleSentence: "Vaig assistir a la reunió i vaig assistir el meu company.",
    exampleTranslation: "Asistí a la reunión y ayudé a mi compañero.",
    contextWarning:
      "En catalán, 'assistir' tiene doble significado: 'asistir/acudir' y también 'ayudar/asistir'. El contexto determina cuál aplica. En español, 'asistir' casi siempre significa 'acudir'.",
    relatedScenarioIds: [],
  },
  {
    catalanWord: "llibreria",
    catalanMeaning: "librería / tienda de libros (bookstore)",
    spanishCognate: "librería",
    spanishMeaning: "librería / tienda de libros (bookstore)",
    riskLevel: "moderate",
    exampleSentence: "He comprat un llibre a la llibreria del carrer Major.",
    exampleTranslation: "He comprado un libro en la librería de la calle Mayor.",
    contextWarning:
      "Aunque el significado es idéntico en ambos idiomas, los hispanohablantes a menudo confunden 'librería' (bookstore) con 'biblioteca' (library). Esta confusión se amplifica cuando el cognado catalán refuerza el error.",
    relatedScenarioIds: [],
  },
  {
    catalanWord: "sortir",
    catalanMeaning: "salir (to go out / to leave)",
    spanishCognate: "surtir",
    spanishMeaning: "surtir (to supply / to have an effect)",
    riskLevel: "moderate",
    exampleSentence: "Vull sortir a fer un passeig.",
    exampleTranslation: "Quiero salir a dar un paseo.",
    contextWarning:
      "'Sortir' en catalán es uno de los verbos más frecuentes (salir), mientras que 'surtir' en español es relativamente raro y significa abastecer o producir efecto.",
    relatedScenarioIds: [],
  },
  {
    catalanWord: "xarxa",
    catalanMeaning: "red (network / net)",
    spanishCognate: "jarcia / jarcha",
    spanishMeaning: "jarcia (ship rigging)",
    riskLevel: "moderate",
    exampleSentence: "Aquesta xarxa de metro és molt completa.",
    exampleTranslation: "Esta red de metro es muy completa.",
    contextWarning:
      "La pronunciación del dígrafo 'tx' y del grafema 'x' en catalán es un reto fonológico para hispanohablantes. 'Xarxa' se pronuncia con sonido /ʃ/ (sh) inicial.",
    relatedScenarioIds: [],
  },
];

/**
 * Helper: Get false friends by risk level.
 */
export function getFalseFriendsByRisk(level: RiskLevel): FalseFriend[] {
  return falseFriends.filter((ff) => ff.riskLevel === level);
}

/**
 * Helper: Get false friends related to a specific scenario.
 */
export function getFalseFriendsForScenario(scenarioId: string): FalseFriend[] {
  return falseFriends.filter((ff) =>
    ff.relatedScenarioIds.includes(scenarioId)
  );
}
