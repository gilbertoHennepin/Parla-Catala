import { useGameStore } from "@/store/useGameStore";

export const translations = {
  // Navigation & General
  "nav.title": { ca: "Parla Català", es: "Parla Català" },
  "nav.loading": { ca: "Carregant...", es: "Cargando..." },
  
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
} as const;

export type TranslationKey = keyof typeof translations;

export function useTranslation() {
  const { uiLanguage } = useGameStore();

  const t = (key: TranslationKey, variables?: Record<string, string | number>) => {
    let text = translations[key]?.[uiLanguage] || key;
    
    if (variables) {
      Object.entries(variables).forEach(([k, v]) => {
        text = text.replace(`{${k}}`, String(v));
      });
    }
    
    return text;
  };

  return { t, uiLanguage };
}
