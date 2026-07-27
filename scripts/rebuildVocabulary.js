const fs = require('fs');
const path = require('path');

const vocabContent = `/**
 * Vocabulary Reference Data
 *
 * Side-by-side Spanish ↔ Catalan word lists organized by
 * CEFR tier and word type (nouns, verbs, adjectives, etc.)
 */

export type WordCategory =
  | "nouns"
  | "verbs"
  | "adjectives"
  | "adverbs"
  | "pronouns"
  | "prepositions"
  | "expressions"
  | "false_friends";

export interface WordEntry {
  es: string;
  ca: string;
  note?: string;
}

export interface WordGroup {
  category: WordCategory;
  label: { es: string; ca: string };
  icon: string;
  words: WordEntry[];
}

export interface TierVocabulary {
  tier: string;
  groups: WordGroup[];
}

export const vocabulary: TierVocabulary[] = [
  // =========================================================================
  // A1 — FUNDAMENTALS
  // =========================================================================
  {
    tier: "A1",
    groups: [
      {
        category: "nouns",
        label: { es: "Sustantivos", ca: "Substantius" },
        icon: "Package",
        words: [
          { es: "hombre", ca: "home" },
          { es: "mujer", ca: "dona" },
          { es: "niño", ca: "nen" },
          { es: "niña", ca: "nena" },
          { es: "amigo", ca: "amic" },
          { es: "amiga", ca: "amiga" },
          { es: "profesor", ca: "professor" },
          { es: "calle", ca: "carrer" },
          { es: "ciudad", ca: "ciutat" },
          { es: "casa", ca: "casa" },
          { es: "agua", ca: "aigua" },
          { es: "leche", ca: "llet" },
          { es: "pan", ca: "pa" },
          { es: "queso", ca: "formatge", note: "cf. francés 'fromage'" },
          { es: "manzana", ca: "poma", note: "cf. francés 'pomme'" },
          { es: "fresa", ca: "maduixa" },
          { es: "mesa", ca: "taula" },
          { es: "silla", ca: "cadira" },
          { es: "ventana", ca: "finestra", note: "cf. francés 'fenêtre'" },
          { es: "puerta", ca: "porta" },
          { es: "cama (mueble)", ca: "llit", note: "'cama' en catalán = pierna" },
          { es: "cocina", ca: "cuina" },
          { es: "baño", ca: "bany" },
          { es: "tienda", ca: "botiga" },
          { es: "mercado", ca: "mercat" },
          { es: "escuela", ca: "escola" },
          { es: "libro", ca: "llibre" },
          { es: "trabajo", ca: "feina" },
          { es: "dinero", ca: "diners" },
          { es: "cuchara", ca: "cullera" },
          { es: "tenedor", ca: "forquilla" },
          { es: "cuchillo", ca: "ganivet" },
          { es: "plato", ca: "plat" },
          { es: "vaso", ca: "got" },
          { es: "botella", ca: "ampolla", note: "¡Falso amigo! ampolla ≠ blister" },
          { es: "reloj", ca: "rellotge" },
          { es: "bolso / bolsa", ca: "bossa" },
          { es: "llave", ca: "clau" },
          { es: "perro", ca: "gos" },
          { es: "gato", ca: "gat" },
          { es: "padre", ca: "pare" },
          { es: "madre", ca: "mare" },
          { es: "hermano", ca: "germà" },
          { es: "hermana", ca: "germana" },
          { es: "abuelo", ca: "avi" },
          { es: "abuela", ca: "àvia" },
          { es: "tío", ca: "oncle / tiet" },
          { es: "tía", ca: "tieta" },
          { es: "primo", ca: "cosí" },
          { es: "prima", ca: "cosina" },
          { es: "médico", ca: "metge" },
          { es: "carpintero", ca: "fuster" },
          { es: "panadero", ca: "forner" },
          { es: "bombero", ca: "bomber" },
          { es: "ingeniero", ca: "enginyer" },
          { es: "actor", ca: "actor" },
          { es: "actriz", ca: "actriu" },
          { es: "periodista", ca: "periodista" },
          { es: "enfermero", ca: "infermer" }
        ],
      },
      {
        category: "verbs",
        label: { es: "Verbos", ca: "Verbs" },
        icon: "Zap",
        words: [
          { es: "ser", ca: "ser / ésser" },
          { es: "estar", ca: "estar" },
          { es: "tener", ca: "tenir" },
          { es: "hacer", ca: "fer" },
          { es: "ir", ca: "anar" },
          { es: "venir", ca: "venir" },
          { es: "poder", ca: "poder" },
          { es: "querer", ca: "voler" },
          { es: "saber", ca: "saber" },
          { es: "decir", ca: "dir" },
          { es: "hablar", ca: "parlar" },
          { es: "comer", ca: "menjar" },
          { es: "beber", ca: "beure" },
          { es: "dormir", ca: "dormir" },
          { es: "vivir", ca: "viure" },
          { es: "ver", ca: "veure" },
          { es: "mirar", ca: "mirar" },
          { es: "escuchar", ca: "escoltar" },
          { es: "comprar", ca: "comprar" },
          { es: "pagar", ca: "pagar" },
          { es: "llamar", ca: "trucar" }
        ],
      },
      {
        category: "adjectives",
        label: { es: "Adjetivos", ca: "Adjectius" },
        icon: "Sparkles",
        words: [
          { es: "bueno", ca: "bo / bona" },
          { es: "malo", ca: "dolent / dolenta" },
          { es: "grande", ca: "gran" },
          { es: "pequeño", ca: "petit / petita" },
          { es: "alto", ca: "alt / alta" },
          { es: "bajo", ca: "baix / baixa" },
          { es: "nuevo", ca: "nou / nova" },
          { es: "viejo", ca: "vell / vella" },
          { es: "bonito", ca: "bonic / bonica" },
          { es: "feo", ca: "lleig / lletja" },
          { es: "frío", ca: "fred / freda" },
          { es: "caliente", ca: "calent / calenta" },
          { es: "caro", ca: "car / cara" },
          { es: "barato", ca: "barat / barata" },
          { es: "azul", ca: "blau / blava" },
          { es: "rojo", ca: "vermell / vermella" },
          { es: "negro", ca: "negre / negra" },
          { es: "blanco", ca: "blanc / blanca" },
          { es: "verde", ca: "verd / verda" },
          { es: "rubio", ca: "ros / rossa" },
          { es: "moreno", ca: "moreno / morena" },
          { es: "rizado", ca: "arrissat" },
          { es: "liso", ca: "llis" },
          { es: "delgado", ca: "prim" }
        ],
      },
      {
        category: "expressions",
        label: { es: "Expresiones", ca: "Expressions" },
        icon: "MessageCircle",
        words: [
          { es: "Hola", ca: "Hola" },
          { es: "Adiós", ca: "Adéu" },
          { es: "Buenos días", ca: "Bon dia" },
          { es: "Buenas tardes", ca: "Bona tarda" },
          { es: "Buenas noches", ca: "Bona nit" },
          { es: "Por favor", ca: "Si us plau", note: "Literal: 'Si os place'" },
          { es: "Gracias", ca: "Gràcies / Mercès" },
          { es: "De nada", ca: "De res" },
          { es: "Perdón / Disculpa", ca: "Perdó / Disculpa" },
          { es: "Lo siento", ca: "Ho sento" },
          { es: "Salud", ca: "Salut" },
          { es: "Buen provecho", ca: "Bon profit" },
          { es: "¿Qué tal?", ca: "Què tal?" },
          { es: "Mucho gusto", ca: "Molt de gust" },
          { es: "Tengo hambre", ca: "Tinc gana" },
          { es: "Tengo sed", ca: "Tinc set" },
          { es: "Tengo frío", ca: "Tinc fred" },
          { es: "Tengo calor", ca: "Tinc calor" },
          { es: "Tengo miedo", ca: "Tinc por" },
          { es: "Tengo sueño", ca: "Tinc son" }
        ],
      },
    ],
  },

  // =========================================================================
  // A2 — INTERMEDIATE
  // =========================================================================
  {
    tier: "A2",
    groups: [
      {
        category: "nouns",
        label: { es: "Sustantivos", ca: "Substantius" },
        icon: "Package",
        words: [
          { es: "ropa", ca: "roba", note: "Falso amigo con robar." },
          { es: "abrigo", ca: "abric" },
          { es: "zapatos", ca: "sabates" },
          { es: "bufanda", ca: "bufanda" },
          { es: "talla", ca: "talla" },
          { es: "alquiler", ca: "lloguer" },
          { es: "piso", ca: "pis" },
          { es: "llaves", ca: "claus" },
          { es: "altillo / buhardilla", ca: "golfes" },
          { es: "comedor", ca: "menjador" },
          { es: "lavabo", ca: "lavabo" },
          { es: "balcón", ca: "balcó" },
          { es: "fianza", ca: "fiança" },
          { es: "escalera", ca: "escala" },
          { es: "ascensor", ca: "ascensor" },
          { es: "tejado", ca: "teulada" },
          { es: "pasillo", ca: "passadís" },
          { es: "jardín", ca: "jardí" },
          { es: "barrio", ca: "barri" },
          { es: "frutería", ca: "fruiteria" },
          { es: "mensaje", ca: "missatge" },
          { es: "cobertura", ca: "cobertura" },
          { es: "llamada", ca: "trucada" },
          { es: "batería", ca: "bateria" },
          { es: "fin de semana", ca: "cap de setmana" },
          { es: "película", ca: "pel·lícula" },
          { es: "deberes", ca: "deures" }
        ],
      },
      {
        category: "verbs",
        label: { es: "Verbos", ca: "Verbs" },
        icon: "Zap",
        words: [
          { es: "alquilar", ca: "llogar", note: "Falso amigo" },
          { es: "probarse (ropa)", ca: "emprovar-se" },
          { es: "costar / valer", ca: "valer" },
          { es: "robar", ca: "robar" },
          { es: "mudar", ca: "mudar-se" },
          { es: "equivocarse", ca: "equivocar-se" },
          { es: "colgar (teléfono)", ca: "penjar" },
          { es: "devolver", ca: "tornar" },
          { es: "despertarse", ca: "despertar-se" },
          { es: "escribir", ca: "escriure" },
          { es: "llover", ca: "ploure" },
          { es: "coger", ca: "agafar" },
          { es: "encontrar", ca: "trobar" }
        ],
      },
      {
        category: "false_friends",
        label: { es: "Falsos Amigos", ca: "Falsos Amics" },
        icon: "AlertTriangle",
        words: [
          { es: "ropa", ca: "roba", note: "No significa 'robar'." },
          { es: "botella", ca: "ampolla", note: "No significa 'ampolla (blister)'." },
          { es: "ampolla (blister)", ca: "butllofa", note: "Para la piel, usa butllofa." },
          { es: "cama (pierna)", ca: "cama", note: "Para dormir usa 'llit'." },
          { es: "llogar (alquilar)", ca: "llogar", note: "No significa hogar." }
        ],
      }
    ],
  },

  // =========================================================================
  // B1 — ADVANCED
  // =========================================================================
  {
    tier: "B1",
    groups: [
      {
        category: "nouns",
        label: { es: "Sustantivos Médicos y Comida", ca: "Substantius" },
        icon: "HeartPulse",
        words: [
          { es: "espalda", ca: "esquena" },
          { es: "tos", ca: "tos" },
          { es: "receta", ca: "recepta" },
          { es: "médico de cabecera", ca: "metge de capçalera" },
          { es: "pastillas", ca: "pastilles" },
          { es: "fiebre", ca: "febre" },
          { es: "urgencias", ca: "urgències" },
          { es: "tensión", ca: "tensió" },
          { es: "mareos", ca: "marejos" },
          { es: "jarabe", ca: "xarop" },
          { es: "cita", ca: "cita" },
          { es: "centro de salud", ca: "centre d'atenció primària" },
          { es: "análisis", ca: "anàlisi" },
          { es: "efectos", ca: "efectes" },
          { es: "alergia", ca: "al·lèrgia" },
          { es: "polen", ca: "pol·len" },
          { es: "reposo", ca: "repòs" },
          { es: "ensalada", ca: "amanida" },
          { es: "judías verdes", ca: "mongetes tendres" },
          { es: "cuenta", ca: "compte" },
          { es: "postres", ca: "postres" },
          { es: "plato principal", ca: "plat principal" },
          { es: "camarero", ca: "cambrer" },
          { es: "vino tinto", ca: "vi negre" },
          { es: "cerveza de barril", ca: "cervesa de barril" },
          { es: "propina", ca: "propina" },
          { es: "aceite", ca: "oli" },
          { es: "sal", ca: "sal" },
          { es: "asco", ca: "fàstic" },
          { es: "pena", ca: "pena" },
          { es: "sorpresa", ca: "sorpresa" },
          { es: "ilusión", ca: "il·lusió" },
          { es: "lástima", ca: "llàstima" },
          { es: "alma", ca: "ànima" },
          { es: "orgullo", ca: "orgull" },
          { es: "vergüenza", ca: "vergonya" }
        ],
      },
      {
        category: "verbs",
        label: { es: "Verbos", ca: "Verbs" },
        icon: "Zap",
        words: [
          { es: "aliñar", ca: "amanir" },
          { es: "estar resfriado", ca: "estar refredat" },
          { es: "tomar (medicina)", ca: "prendre" },
          { es: "cortarse", ca: "tallar-se" },
          { es: "estar embarazada", ca: "estar embarassada" },
          { es: "aburrirse", ca: "avorrir-se" },
          { es: "echar de menos", ca: "trobar a faltar" }
        ],
      },
      {
        category: "adjectives",
        label: { es: "Adjetivos", ca: "Adjectius" },
        icon: "Sparkles",
        words: [
          { es: "poco hecho", ca: "poc fet" },
          { es: "muy hecho", ca: "molt fet" },
          { es: "riquísimo", ca: "boníssim" },
          { es: "contento", ca: "content" },
          { es: "triste", ca: "trist" },
          { es: "preocupado", ca: "preocupat" },
          { es: "enfadado", ca: "enfadat" },
          { es: "agotado", ca: "esgotat" },
          { es: "emocionado", ca: "emocionat" },
          { es: "nervioso", ca: "nerviós" },
          { es: "enamorado", ca: "enamorat" }
        ],
      }
    ]
  },

  // =========================================================================
  // B2 — UPPER INTERMEDIATE
  // =========================================================================
  {
    tier: "B2",
    groups: [
      {
        category: "nouns",
        label: { es: "Trabajo y Universidad", ca: "Feina i Universitat" },
        icon: "Briefcase",
        words: [
          { es: "facultad de derecho", ca: "facultat de dret" },
          { es: "catedrático", ca: "catedràtic" },
          { es: "examen", ca: "examen" },
          { es: "asignatura", ca: "assignatura" },
          { es: "trabajo de fin de grado", ca: "treball de final de grau" },
          { es: "matrícula de honor", ca: "matrícula d'honor" },
          { es: "beca", ca: "beca" },
          { es: "rectorado", ca: "rectorat" },
          { es: "aula magna", ca: "aula magna" },
          { es: "créditos", ca: "crèdits" },
          { es: "expediente", ca: "expedient" },
          { es: "campus", ca: "campus" },
          { es: "biblioteca", ca: "biblioteca" },
          { es: "tesis doctoral", ca: "tesi doctoral" },
          { es: "calificaciones", ca: "qualificacions" },
          { es: "entrevista", ca: "entrevista" },
          { es: "recursos humanos", ca: "recursos humans" },
          { es: "sueldo bruto", ca: "sou brut" },
          { es: "contrato fijo", ca: "contracte fix" },
          { es: "despido improcedente", ca: "acomiadament improcedent" },
          { es: "baja por enfermedad", ca: "baixa per malaltia" },
          { es: "sindicato", ca: "sindicat" },
          { es: "huelga general", ca: "vaga general" },
          { es: "jefe de departamento", ca: "cap de departament" },
          { es: "reunión", ca: "reunió" },
          { es: "teletrebajo", ca: "teletreball" },
          { es: "nómina", ca: "nòmina" },
          { es: "seguridad social", ca: "seguretat social" },
          { es: "experiencia", ca: "experiència" },
          { es: "ascenso", ca: "ascens" },
          { es: "carta de recomendación", ca: "carta de recomanació" },
          { es: "horas extras", ca: "hores extres" },
          { es: "periodo de prueba", ca: "període de prova" }
        ],
      },
      {
        category: "verbs",
        label: { es: "Verbos", ca: "Verbs" },
        icon: "Zap",
        words: [
          { es: "aprobar", ca: "aprovar" },
          { es: "suspender", ca: "suspendre" }
        ],
      }
    ]
  },

  // =========================================================================
  // C1 — ADVANCED / PROFICIENT
  // =========================================================================
  {
    tier: "C1",
    groups: [
      {
        category: "nouns",
        label: { es: "Administrativo", ca: "Administratiu" },
        icon: "Landmark",
        words: [
          { es: "documento", ca: "document" },
          { es: "director", ca: "director" },
          { es: "firma", ca: "signatura" },
          { es: "interesado", ca: "interessat" },
          { es: "fecha y lugar", ca: "data i lloc" },
          { es: "ley", ca: "llei" },
          { es: "petición", ca: "petició" },
          { es: "certificado de empadronamiento", ca: "certificat d'empadronament" },
          { es: "recurso", ca: "recurs" },
          { es: "plazo", ca: "termini" },
          { es: "formulario", ca: "formulari" },
          { es: "sello", ca: "segell" },
          { es: "pasaporte", ca: "passaport" },
          { es: "tasa", ca: "taxa" },
          { es: "declaración jurada", ca: "declaració jurada" }
        ],
      },
      {
        category: "verbs",
        label: { es: "Verbos Administrativos", ca: "Verbs Administratius" },
        icon: "FileText",
        words: [
          { es: "adjuntar", ca: "adjuntar" },
          { es: "exponer", ca: "exposar" },
          { es: "solicitar", ca: "sol·licitar" },
          { es: "quedar", ca: "restar" },
          { es: "presentar", ca: "presentar" },
          { es: "expirar", ca: "expirar" },
          { es: "cumplimentar", ca: "emplenar" },
          { es: "discrepar", ca: "discrepar" },
          { es: "destacar", ca: "destacar" },
          { es: "resumir", ca: "resumir" }
        ],
      },
      {
        category: "expressions",
        label: { es: "Conectores y Debate", ca: "Connectors i Debat" },
        icon: "MessageSquare",
        words: [
          { es: "a la atención de", ca: "a l'atenció de" },
          { es: "de acuerdo con", ca: "d'acord amb" },
          { es: "en respuesta a", ca: "en resposta a" },
          { es: "atentamente", ca: "atentament" },
          { es: "a su disposición", ca: "a la seva disposició" },
          { es: "por la presente", ca: "per la present" },
          { es: "hecho en", ca: "fet a" },
          { es: "por un lado", ca: "d'una banda" },
          { es: "por otro lado", ca: "d'altra banda" },
          { es: "en conclusión", ca: "en conclusió" },
          { es: "sin embargo", ca: "no obstant això" },
          { es: "a pesar de que", ca: "malgrat que" },
          { es: "en mi opinión", ca: "al meu parer" },
          { es: "estoy de acuerdo", ca: "estic d'acord" },
          { es: "es innegable que", ca: "és innegable que" },
          { es: "por consiguiente", ca: "per consegüent" },
          { es: "en consecuencia", ca: "en conseqüència" },
          { es: "es decir", ca: "és a dir" },
          { es: "de hecho", ca: "de fet" },
          { es: "en cambio", ca: "en canvi" },
          { es: "al contrario", ca: "al contrari" },
          { es: "es evidente que", ca: "és evident que" },
          { es: "cabe destacar que", ca: "cal destacar que" },
          { es: "para resumir", ca: "per resumir" },
          { es: "respecto a", ca: "pel que fa a" },
          { es: "en definitiva", ca: "en definitiva" }
        ]
      }
    ]
  },
  
  // =========================================================================
  // C2 — PROFICIENT / MASTER
  // =========================================================================
  {
    tier: "C2",
    groups: [
      {
        category: "expressions",
        label: { es: "Modismos", ca: "Modismes" },
        icon: "Drama",
        words: [
          { es: "Tirar la toalla (rendirse)", ca: "Llançar la tovallola" },
          { es: "Ser pan comido", ca: "Ser bufar i fer ampolles" },
          { es: "Costar un ojo de la cara", ca: "Costar un ronyó" },
          { es: "Ahogarse en un vaso de agua", ca: "Ofegar-se en un got d'aigua" },
          { es: "Estar en las nubes", ca: "Estar a la lluna de València" }
        ]
      }
    ]
  }
];
`;
fs.writeFileSync(path.join(__dirname, '../src/data/vocabulary.ts'), vocabContent);
console.log("Vocabulary rebuilt.");
