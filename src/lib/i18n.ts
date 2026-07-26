import { useGameStore } from "@/store/useGameStore";

export const translations = {
  // Navigation & General
  "nav.title": { ca: "Parla Català", es: "Parla Català" },
  "nav.loading": { ca: "Carregant...", es: "Cargando..." },
  "nav.previous": { ca: "Anterior", es: "Anterior" },
  "nav.next": { ca: "Següent", es: "Siguiente" },
  
  // Landing Page
  "landing.badge": { ca: "🇦🇩 Espanyol → Català", es: "🇦🇩 Español → Catalán" },
  "landing.title1": { ca: "Parla Català", es: "Habla Catalán" },
  "landing.title2": { ca: "des del primer dia", es: "desde el primer día" },
  "landing.subtitle": { 
    ca: "Plataforma interactiva dissenyada exclusivament per a parlants d'espanyol. Exercicis de veu, escriptura guiada i avatars que t'acompanyen en cada pas del teu aprenentatge.", 
    es: "Plataforma interactiva diseñada exclusivamente para hispanohablantes. Ejercicios de voz, escritura guiada y avatares que te acompañan en cada paso de tu aprendizaje." 
  },
  "landing.cta": { ca: "Comença a aprendre", es: "Empieza a aprender" },
  "landing.features.title": { ca: "Tot el que necessites per dominar el català", es: "Todo lo que necesitas para dominar el catalán" },
  
  // Feature Cards (Landing)
  "feat.conversa.title": { ca: "Mòdul de Conversa", es: "Módulo de Conversación" },
  "feat.conversa.desc": { 
    ca: "Practica la pronúncia amb reconeixement de veu. El sistema avalua la teva articulació de vocals neutres, grups consonàntics i dígrafs catalans.", 
    es: "Practica la pronunciación con reconocimiento de voz. El sistema evalúa tu articulación de vocales neutras, grupos consonánticos y dígrafos catalanes." 
  },
  "feat.escritura.title": { ca: "Mòdul d'Escriptura", es: "Módulo de Escritura" },
  "feat.escritura.desc": { 
    ca: "Tradueix frases amb correcció gramatical en temps real. Detecta errors d'ortografia, sintaxi i falsos amics automàticament.", 
    es: "Traduce frases con corrección gramatical en tiempo real. Detecta errores de ortografía, sintaxis y falsos amigos automáticamente." 
  },
  "feat.avatars.title": { ca: "Avatars Dinàmics", es: "Avatares Dinámicos" },
  "feat.avatars.desc": { 
    ca: "Interactua amb personatges únics — Laia, Pol, Gemma, Arnau — que reaccionen al teu progrés amb expressions emocionals.", 
    es: "Interactúa con personajes únicos — Laia, Pol, Gemma, Arnau — que reaccionan a tu progreso con expresiones emocionales." 
  },
  "feat.falsos.title": { ca: "Falsos Amics", es: "Falsos Amigos" },
  "feat.falsos.desc": { 
    ca: 'Escenaris dissenyats per combatre les trampes lèxiques: "cama" (cama ≠ llit), "roba" (ropa ≠ robar), "constipat" (refredat ≠ estrenyiment).', 
    es: 'Escenarios diseñados para combatir las trampas léxicas: "cama" (pierna ≠ cama), "roba" (ropa ≠ robar), "constipat" (resfriado ≠ estreñimiento).' 
  },
  "feat.gamificacio.title": { ca: "Progressió Gamificada", es: "Progresión Gamificada" },
  "feat.gamificacio.desc": { 
    ca: "Guanya XP, desbloqueja nivells (A1 → B1), manté ratxes i gestiona vides. Aprèn jugant!", 
    es: "Gana XP, desbloquea niveles (A1 → B1), mantén rachas y gestiona vidas. ¡Aprende jugando!" 
  },
  "feat.ling.title": { ca: "Lingüística Autèntica", es: "Lingüística Auténtica" },
  "feat.ling.desc": { 
    ca: "Currículum basat en la fonologia, gramàtica i vocabulari gal·loromànic real del català. Passat perifràstic, pronoms febles (en/hi) i més.", 
    es: "Currículo basado en la fonología, gramática y vocabulario galorrománico real del catalán. Pasado perifrástico, pronombres débiles (en/hi) y más." 
  },

  // Learn Page (Sidebar & Empty States)
  "sidebar.unlocked": { ca: "✅ Desbloquejat", es: "✅ Desbloqueado" },
  "sidebar.requires": { ca: "Requereix {xp} XP", es: "Requiere {xp} XP" },
  "sidebar.completed": { ca: "{completed}/{total} completats", es: "{completed}/{total} completados" },
  
  "empty.lives.title": { ca: "Has perdut totes les vides!", es: "¡Has perdido todas las vidas!" },
  "empty.lives.desc": { ca: "Espera una estona o fes clic per recuperar-les.", es: "Espera un rato o haz clic para recuperarlas." },
  "empty.lives.btn": { ca: "♥ Recuperar vides", es: "♥ Recuperar vidas" },
  
  "empty.done.title": { ca: "Felicitats!", es: "¡Felicidades!" },
  "empty.done.desc": { ca: "Has completat tots els escenaris disponibles. Torna aviat per a nou contingut!", es: "Has completado todos los escenarios disponibles. ¡Vuelve pronto para nuevo contenido!" },

  // Scenario Card
  "scenario.mode.talking": { ca: "🎤 Parla", es: "🎤 Habla" },
  "scenario.mode.writing": { ca: "✍️ Escriu", es: "✍️ Escribe" },

  // Interaction Modes (Talking/Writing)
  "interaction.prompt": { ca: "Digues en català:", es: "Dilo en catalán:" },
  "interaction.prompt.write": { ca: "Escriu en català:", es: "Escribe en catalán:" },
  "interaction.mic.denied": { ca: "Permís de micròfon denegat. Escriu la teva resposta:", es: "Permiso de micrófono denegado. Escribe tu respuesta:" },
  "interaction.mic.unsupported": { ca: "El reconeixement de veu no està disponible. Escriu la teva resposta:", es: "El reconocimiento de voz no está disponible. Escribe tu respuesta:" },
  "interaction.placeholder": { ca: "Escriu aquí la teva resposta...", es: "Escribe aquí tu respuesta..." },
  "interaction.submit": { ca: "Comprova la resposta", es: "Comprobar respuesta" },
  
  "interaction.recording.listening": { ca: "Escoltant... Prem per aturar", es: "Escuchando... Pulsa para detener" },
  "interaction.recording.start": { ca: "Prem per parlar", es: "Pulsa para hablar" },
  "interaction.transcript.label": { ca: "He entès:", es: "He entendido:" },
  "interaction.switch.write": { ca: "Prefereixes escriure? →", es: "¿Prefieres escribir? →" },

  "interaction.grammar.checking": { ca: "Comprovant gramàtica...", es: "Comprobando gramática..." },
  "interaction.grammar.suggestions": { ca: "Suggeriments", es: "Sugerencias" },

  // Results
  "result.excellent": { ca: "Excel·lent!", es: "¡Excelente!" },
  "result.almost": { ca: "Quasi!", es: "¡Casi!" },
  "result.wrong": { ca: "No del tot...", es: "No del todo..." },
  "result.good": { ca: "Molt bé!", es: "¡Muy bien!" },
  "result.accuracy": { ca: "Precisió: {acc}%", es: "Precisión: {acc}%" },
  
  "result.grade.excellent": { ca: "Excel·lent", es: "Excelente" },
  "result.grade.good": { ca: "Bé", es: "Bien" },
  "result.grade.fair": { ca: "Regular", es: "Regular" },
  "result.grade.poor": { ca: "Necessita pràctica", es: "Necesita práctica" },

  "result.you.said": { ca: "Has dit:", es: "Has dicho:" },
  "result.you.wrote": { ca: "Has escrit:", es: "Has escrito:" },
  "result.expected": { ca: "Resposta esperada:", es: "Respuesta esperada:" },

  "result.continue.yes": { ca: "Continua →", es: "Continuar →" },
  "result.continue.no": { ca: "Torna-ho a intentar →", es: "Intentarlo de nuevo →" },

  // Hints
  "hint.show": { ca: "Mostra una pista", es: "Mostrar una pista" },
  "hint.next": { ca: "Següent pista (-{cost} XP)", es: "Siguiente pista (-{cost} XP)" },
  "hint.remaining": { ca: "({n} restants)", es: "({n} restantes)" },
  "hint.none": { ca: "Cap pista restant", es: "Sin pistas restantes" },
  "hint.title": { ca: "Pista {n}", es: "Pista {n}" },

  // Curriculum Tiers & Sections
  "tier.a1.title": { ca: "A1 — Fonaments", es: "A1 — Fundamentos" },
  "tier.a1.desc": { ca: "Salutacions, demanar al cafè, i vocabulari essencial.", es: "Saludos, pedir en la cafetería y vocabulario esencial." },
  "tier.a2.title": { ca: "A2 — Intermedi", es: "A2 — Intermedio" },
  "tier.a2.desc": { ca: "Passat perifràstic, rutines diàries i pronoms febles.", es: "Pasado perifrástico, rutinas diarias y pronombres débiles." },
  "tier.b1.title": { ca: "B1 — Avançat", es: "B1 — Avanzado" },
  "tier.b1.desc": { ca: "Contextos metges, vocabulari emocional i condicional.", es: "Contextos médicos, vocabulario emocional y condicional." },

  "section.a1-identity.title": { ca: "Identitat i Presentacions", es: "Identidad y Presentaciones" },
  "section.a1-identity.desc": { ca: "Dades personals, salutacions i gentilicis.", es: "Datos personales, saludos y gentilicios." },
  "section.a1-physicality.title": { ca: "Físic i Aparença", es: "Físico y Apariencia" },
  "section.a1-physicality.desc": { ca: "Descripcions físiques, roba, colors i el cos.", es: "Descripciones físicas, ropa, colores y el cuerpo." },
  "section.a1-orientation.title": { ca: "Orientació", es: "Orientación" },
  "section.a1-orientation.desc": { ca: "Dir l'hora, les parts del dia i ciutat vs. camp.", es: "Decir la hora, las partes del día y ciudad vs. campo." },
  "section.a1-professions.title": { ca: "Professions", es: "Profesiones" },
  "section.a1-professions.desc": { ca: "L'estructura familiar i els oficis.", es: "La estructura familiar y los oficios." },
  "section.a1-courtesies.title": { ca: "Cortesia", es: "Cortesía" },
  "section.a1-courtesies.desc": { ca: "Formes de cortesia i estats d'ànim.", es: "Formas de cortesía y estados de ánimo." },

  "section.a2-diary.title": { ca: "Rutina Diària", es: "Rutina Diaria" },
  "section.a2-diary.desc": { ca: "Explica què vas fer ahir amb el passat perifràstic.", es: "Explica qué hiciste ayer con el pasado perifrástico." },
  "section.a2-shopping.title": { ca: "De Compres", es: "De Compras" },
  "section.a2-shopping.desc": { ca: "Vocabulari de roba i interaccions a botigues.", es: "Vocabulario de ropa e interacciones en tiendas." },
  "section.a2-pronouns.title": { ca: "Pronoms Febles", es: "Pronombres Débiles" },
  "section.a2-pronouns.desc": { ca: "Domina l'ús dels pronoms 'en' i 'hi'.", es: "Domina el uso de los pronombres 'en' e 'hi'." },

  "section.b1-medical.title": { ca: "Al Metge", es: "En el Médico" },
  "section.b1-medical.desc": { ca: "Simula una visita mèdica i descriu símptomes.", es: "Simula una visita médica y describe síntomas." },
  "section.b1-emotions.title": { ca: "Emocions", es: "Emociones" },
  "section.b1-emotions.desc": { ca: "Expressa sentiments complexos i empatia.", es: "Expresa sentimientos complejos y empatía." },

  // New Tiers & Sections (pom2.xml expansion)
  "tier.b2.title": { ca: "B2 — Intermedi", es: "B2 — Intermedio" },
  "tier.b2.desc": { ca: "Domina el registre formal, entorns acadèmics i laborals.", es: "Domina el registro formal, entornos académicos y laborales." },
  "tier.c1.title": { ca: "C1 — Suficiència", es: "C1 — Suficiencia" },
  "tier.c1.desc": { ca: "Textos argumentatius complexos i domini metalingüístic.", es: "Textos argumentativos complejos y dominio metalingüístico." },

  "section.a2-housing.title": { ca: "Habitatge", es: "Vivienda" },
  "section.a2-housing.desc": { ca: "Lloguer de pisos i falsos amics com 'les golfes'.", es: "Alquiler de pisos y falsos amigos como 'les golfes'." },
  "section.a2-phone.title": { ca: "Telèfon i Hores", es: "Teléfono y Horas" },
  "section.a2-phone.desc": { ca: "Converses per telèfon i el sistema de quarts.", es: "Conversaciones por teléfono y el sistema de cuartos." },
  "section.b1-dining.title": { ca: "Al Restaurant", es: "En el Restaurante" },
  "section.b1-dining.desc": { ca: "Evita la trampa lèxica de l'afamat.", es: "Evita la trampa léxica de 'afamat'." },
  "section.b2-university.title": { ca: "Universitat", es: "Universidad" },
  "section.b2-university.desc": { ca: "Interaccions formals utilitzant 'vostè'.", es: "Interacciones formales usando 'usted'." },
  "section.b2-workplace.title": { ca: "Entorn Laboral", es: "Entorno Laboral" },
  "section.b2-workplace.desc": { ca: "Entrevistes de feina i expressions professionals.", es: "Entrevistas de trabajo y expresiones profesionales." },
  "section.c1-debate.title": { ca: "Debat", es: "Debate" },
  "section.c1-debate.desc": { ca: "Argumentació avançada amb connectors complexos.", es: "Argumentación avanzada con conectores complejos." },

  // Tabs
  "tab.exercises": { ca: "Exercicis", es: "Ejercicios" },
  "tab.vocabulary": { ca: "Vocabulari", es: "Vocabulario" },

  // Vocabulary Panel
  "vocab.search": { ca: "Cercar paraula...", es: "Buscar palabra..." },
  "vocab.empty": { ca: "No hi ha vocabulari disponible per a aquest nivell.", es: "No hay vocabulario disponible para este nivel." },
  "vocab.noResults": { ca: "No s'han trobat paraules.", es: "No se encontraron palabras." },
  "vocab.header.es": { ca: "Espanyol", es: "Español" },
  "vocab.header.ca": { ca: "Català", es: "Catalán" },
  "vocab.cat.nouns": { ca: "Substantius", es: "Sustantivos" },
  "vocab.cat.verbs": { ca: "Verbs", es: "Verbos" },
  "vocab.cat.adjectives": { ca: "Adjectius", es: "Adjetivos" },
  "vocab.cat.adverbs": { ca: "Adverbis", es: "Adverbios" },
  "vocab.cat.pronouns": { ca: "Pronoms", es: "Pronombres" },
  "vocab.cat.prepositions": { ca: "Preposicions", es: "Preposiciones" },
  "vocab.cat.expressions": { ca: "Expressions", es: "Expresiones" },
  "vocab.cat.false_friends": { ca: "Falsos amics", es: "Falsos Amigos" },
  "vocab.listen": { ca: "Escolta la pronunciació", es: "Escuchar pronunciación" },
} as const;

export type TranslationKey = keyof typeof translations | string;

export function useTranslation() {
  const { uiLanguage } = useGameStore();

  const t = (key: TranslationKey, variables?: Record<string, string | number>, fallback?: string) => {
    const dict = translations as Record<string, { ca: string; es: string }>;
    let text: string = dict[key]?.[uiLanguage] || fallback || key;
    
    if (variables) {
      Object.entries(variables).forEach(([k, v]) => {
        text = text.replace(`{${k}}`, String(v));
      });
    }
    
    return text;
  };

  return { t, uiLanguage };
}
