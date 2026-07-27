const fs = require('fs');
const path = require('path');

// We will overwrite a1.ts to c2.ts with unique scenarios for the original sections.
// Helper to generate 20 variations that are ACTUALLY unique for a given topic
function generateUniqueScenarios(sectionId, topic, typeGen) {
  const scenarios = [];
  for (let i = 1; i <= 20; i++) {
    const data = typeGen(i);
    scenarios.push(`{
      id: "${sectionId}-${i < 10 ? '0' + i : i}",
      type: "${data.type}",
      characterName: "System",
      characterDisplayName: "Profesor",
      characterRole: "Tutor",
      promptText: \`${data.prompt}\`,
      expectedAnswer: "${data.answer}",
      hints: [${data.hints.map(h => `"${h}"`).join(',')}],
      xpReward: 20,
      explanationNote: \`${data.note}\`
    }`);
  }
  return scenarios.join(',\n');
}

// Generate A1
const a1Content = `import type { Tier } from "./types";
export const tierA1: Tier = {
  level: "A1",
  title: "Fonaments",
  description: "Basic greetings, café ordering, and city navigation.",
  requiredXp: 0,
  sections: [
    {
      id: "a1-identity",
      title: "Identitat i Presentacions",
      description: "Personal data, introductions, and demonyms.",
      icon: "👋",
      scenarios: [
        ${generateUniqueScenarios('a1-ident', 'identity', (i) => {
          const types = ['talking', 'writing', 'reading'];
          const prompts = [
            ["Hola, me llamo Marc.", "Hola, em dic Marc."],
            ["Yo soy de Madrid.", "Jo sóc de Madrid."],
            ["Buenos días, ¿cómo te llamas?", "Bon dia, com et dius?"],
            ["Ella se llama Ana.", "Ella es diu Anna."],
            ["Nosotros somos catalanes.", "Nosaltres som catalans."],
            ["Vosotros sois de fuera.", "Vosaltres sou de fora."],
            ["Mucho gusto.", "Molt de gust."],
            ["Encantado de conocerte.", "Encantat de conèixer-te."],
            ["Tengo treinta años.", "Tinc trenta anys."],
            ["¿Cuántos años tienes?", "Quants anys tens?"],
            ["Buenas tardes.", "Bona tarda."],
            ["Buenas noches.", "Bona nit."],
            ["¿De dónde eres?", "D'on ets?"],
            ["Soy profesor.", "Sóc professor."],
            ["Me llamo Pau y soy estudiante.", "Em dic Pau i sóc estudiant."],
            ["Ellos son de Girona.", "Ells són de Girona."],
            ["¿Es usted el señor Vila?", "És vostè el senyor Vila?"],
            ["Vivo en Barcelona.", "Visc a Barcelona."],
            ["Me llamo Jordi.", "Em dic Jordi."],
            ["Adiós, hasta mañana.", "Adéu, fins demà."]
          ];
          const p = prompts[(i-1) % 20];
          return {
            type: types[i % 3],
            prompt: `Traduce: "${p[0]}"`,
            answer: p[1],
            hints: ["Recuerda usar 'em dic' para 'me llamo'.", "Presta atención al verbo 'ser' o 'dir-se'."],
            note: "Presentarse requiere los verbos dir-se, ser o viure."
          };
        })}
      ]
    },
    {
      id: "a1-physicality",
      title: "Físic i Aparença",
      description: "Physical descriptions, clothing, colors, and body parts.",
      icon: "👁️",
      scenarios: [
        ${generateUniqueScenarios('a1-phys', 'physical', (i) => {
          const p = [
            ["Tengo los ojos azules.", "Tinc els ulls blaus."],
            ["El pelo rubio.", "Els cabells rossos."],
            ["Ella es alta y morena.", "Ella és alta i morena."],
            ["Me duele la pierna.", "Em fa mal la cama."],
            ["Llevo una camisa roja.", "Porto una camisa vermella."],
            ["Sus ojos son verdes.", "Els seus ulls són verds."],
            ["Él tiene el pelo corto.", "Ell té els cabells curts."],
            ["Lleva gafas.", "Porta ulleres."],
            ["Eres muy bajo.", "Ets molt baix."],
            ["Tengo el pelo rizado.", "Tinc els cabells arrissats."],
            ["La chaqueta es negra.", "La jaqueta és negra."],
            ["Zapatos marrones.", "Sabates marrons."],
            ["Tengo la nariz grande.", "Tinc el nas gran."],
            ["Me duele la cabeza.", "Em fa mal el cap."],
            ["Ojos marrones.", "Ulls marrons."],
            ["Ella lleva un vestido azul.", "Ella porta un vestit blau."],
            ["El pelo liso.", "Els cabells llisos."],
            ["Llevo pantalones cortos.", "Porto pantalons curts."],
            ["Él es delgado.", "Ell és prim."],
            ["Me duelen los pies.", "Em fan mal els peus."]
          ];
          return {
            type: 'writing',
            prompt: `Describe: "${p[i-1][0]}"`,
            answer: p[i-1][1],
            hints: ["'Pelo' en catalán suele ser plural: 'cabells'.", "Usa 'portar' para ropa."],
            note: "Falsos amigos: 'cama' es pierna en catalán, no el lugar donde duermes."
          };
        })}
      ]
    },
    {
      id: "a1-orientation",
      title: "Orientació Espacial i Temporal",
      description: "Telling time, parts of the day, city vs. countryside.",
      icon: "🗺️",
      scenarios: [
        ${generateUniqueScenarios('a1-orient', 'orientation', (i) => {
          const p = [
            ["Son las cinco de la tarde.", "Són les cinc de la tarda."],
            ["Son las tres y cuarto.", "Són un quart de quatre."],
            ["Son las ocho y media.", "Són dos quarts de nou."],
            ["Es la una de la madrugada.", "És la una de la matinada."],
            ["Son las doce del mediodía.", "Són les dotze del migdia."],
            ["El mercado está lejos.", "El mercat és lluny."],
            ["La plaza está cerca.", "La plaça és a prop."],
            ["Gira a la derecha.", "Gira a la dreta."],
            ["Sigue todo recto.", "Segueix tot recte."],
            ["La calle está cortada.", "El carrer està tallat."],
            ["Vivo en la ciudad.", "Visc a la ciutat."],
            ["Voy al campo.", "Vaig al camp."],
            ["Son las diez menos cuarto.", "Són tres quarts de deu."],
            ["A la izquierda.", "A l'esquerra."],
            ["Detrás del hospital.", "Darrere de l'hospital."],
            ["Delante del ayuntamiento.", "Davant de l'ajuntament."],
            ["Mañana por la mañana.", "Demà al matí."],
            ["Hoy por la tarde.", "Avui a la tarda."],
            ["La estación de tren.", "L'estació de tren."],
            ["El aeropuerto.", "L'aeroport."]
          ];
          return {
            type: 'talking',
            prompt: `Traduce: "${p[i-1][0]}"`,
            answer: p[i-1][1],
            hints: ["El catalán usa cuartos de la hora siguiente.", "Cerca = a prop, Lejos = lluny."],
            note: "El sistema de horas catalán: 'un quart de' = y cuarto, 'dos quarts de' = y media."
          };
        })}
      ]
    }
  ]
};`;
fs.writeFileSync(path.join(__dirname, '../src/data/curriculum/a1.ts'), a1Content);

// Generate A2
const a2Content = `import type { Tier } from "./types";
export const tierA2: Tier = {
  level: "A2",
  title: "Intermedi",
  description: "Master the periphrastic past tense, weak pronouns, and false friends.",
  requiredXp: 150,
  sections: [
    {
      id: "a2-diary",
      title: "El Diari del Cap de Setmana",
      description: "Past events using the periphrastic past tense (vaig + infinitive).",
      icon: "📓",
      scenarios: [
        ${generateUniqueScenarios('a2-diary', 'diary', (i) => {
          const p = [
            ["Ayer fui al mercado.", "Ahir vaig anar al mercat."],
            ["Comí con mi amigo.", "Vaig menjar amb el meu amic."],
            ["El sábado vimos una película.", "El dissabte vam veure una pel·lícula."],
            ["¿Fuiste a Barcelona?", "Vas anar a Barcelona?"],
            ["Ellos compraron fruta.", "Ells van comprar fruita."],
            ["Cené en un restaurante.", "Vaig sopar en un restaurant."],
            ["Salimos tarde.", "Vam sortir tard."],
            ["No hice nada.", "No vaig fer res."],
            ["Jugasteis muy bien.", "Vau jugar molt bé."],
            ["Ella leyó el libro.", "Ella va llegir el llibre."],
            ["Dormimos diez horas.", "Vam dormir deu hores."],
            ["Me desperté a las ocho.", "Em vaig despertar a les vuit."],
            ["Trabajó todo el día.", "Va treballar tot el dia."],
            ["Escribí una carta.", "Vaig escriure una carta."],
            ["Hicimos los deberes.", "Vam fer els deures."],
            ["¿Bebiste agua?", "Vas beure aigua?"],
            ["Se fueron pronto.", "Se'n van anar aviat."],
            ["Encontré las llaves.", "Vaig trobar les claus."],
            ["Llovió mucho.", "Va ploure molt."],
            ["Cogimos el tren.", "Vam agafar el tren."]
          ];
          return { type: 'writing', prompt: `Traduce: "${p[i-1][0]}"`, answer: p[i-1][1], hints: ["Usa vaig/vas/va/vam/vau/van + infinitivo."], note: "El pasado perifrástico se usa para el pretérito indefinido." };
        })}
      ]
    },
    {
      id: "a2-shopping",
      title: "Anem de Compres",
      description: "Dangerous false friends alert! Navigate 'roba' (clothes) and other traps.",
      icon: "🛍️",
      scenarios: [
        ${generateUniqueScenarios('a2-shop', 'shopping', (i) => {
          const p = [
            ["Compré ropa de verano.", "Vaig comprar roba d'estiu."],
            ["Esa fresa es dulce.", "Aquella maduixa és dolça."],
            ["Necesito manzanas.", "Necessito pomes."],
            ["Quiero alquilar una casa.", "Vull llogar una casa."],
            ["El queso es caro.", "El formatge és car."],
            ["La bufanda roja.", "La bufanda vermella."],
            ["Quiero pagar con tarjeta.", "Vull pagar amb targeta."],
            ["¿Cuánto cuesta?", "Quant val?"],
            ["Dame una botella.", "Dona'm una ampolla."],
            ["Me duele la ampolla.", "Em fa mal la butllofa."],
            ["Camina recto.", "Camina recte."],
            ["No robes eso.", "No robis això."],
            ["El abrigo negro.", "L'abric negre."],
            ["Zapatos baratos.", "Sabates barates."],
            ["Quiero probarme esto.", "Vull emprovar-me això."],
            ["¿Tienen mi talla?", "Teniu la meva talla?"],
            ["Me queda pequeño.", "Em va petit."],
            ["Solo estoy mirando.", "Només estic mirant."],
            ["El panadero.", "El forner."],
            ["Fui a la frutería.", "Vaig anar a la fruiteria."]
          ];
          return { type: 'talking', prompt: `Traduce: "${p[i-1][0]}"`, answer: p[i-1][1], hints: ["Cuidado con ampolla/butllofa, roba/robar."], note: "Falsos amigos: ampolla = botella. Roba = ropa." };
        })}
      ]
    }
  ]
};`;
fs.writeFileSync(path.join(__dirname, '../src/data/curriculum/a2.ts'), a2Content);

// Generate B1
const b1Content = `import type { Tier } from "./types";
export const tierB1: Tier = {
  level: "B1",
  title: "Avançat",
  description: "Master the subjunctive.",
  requiredXp: 300,
  sections: [
    {
      id: "b1-subjunctive",
      title: "Subjuntiu i Dubtes",
      description: "Expressing doubt and hypothetical situations.",
      icon: "🤔",
      scenarios: [
        ${generateUniqueScenarios('b1-subj', 'subjunctive', (i) => {
          const p = [
            ["Espero que vengas.", "Espero que vinguis."],
            ["Quiero que lo hagas.", "Vull que ho facis."],
            ["Dudo que llueva.", "Dubto que plogui."],
            ["Quizás vayamos.", "Potser hi anirem."],
            ["No creo que sea verdad.", "No crec que sigui veritat."],
            ["Cuando llegues, llámame.", "Quan arribis, truca'm."],
            ["Ojalá apruebe.", "Tant de bo aprovi."],
            ["Es importante que estudies.", "És important que estudiïs."],
            ["Me alegro de que estés aquí.", "M'alegro que siguis aquí."],
            ["No pienso que tengamos tiempo.", "No penso que tinguem temps."],
            ["Aunque llueva, saldré.", "Encara que plogui, sortiré."],
            ["Para que lo entiendas.", "Perquè ho entenguis."],
            ["Antes de que salgas.", "Abans que surtis."],
            ["Te pido que me escuches.", "Et demano que m'escoltis."],
            ["Busco a alguien que hable inglés.", "Busco algú que parli anglès."],
            ["No es que no quiera.", "No és que no vulgui."],
            ["Puede que lo sepan.", "Pot ser que ho sàpiguen."],
            ["Es posible que ganemos.", "És possible que guanyem."],
            ["Espero que vaya bien.", "Espero que vagi bé."],
            ["Que tengas un buen día.", "Que tinguis un bon dia."]
          ];
          return { type: 'writing', prompt: `Traduce: "${p[i-1][0]}"`, answer: p[i-1][1], hints: ["El subjuntivo en catalán acaba en -is, -i, -in..."], note: "Regla: Verbos como anar -> vagi, fer -> faci, ser -> sigui." };
        })}
      ]
    }
  ]
};`;
fs.writeFileSync(path.join(__dirname, '../src/data/curriculum/b1.ts'), b1Content);

// B2
const b2Content = `import type { Tier } from "./types";
export const tierB2: Tier = {
  level: "B2",
  title: "Expert",
  description: "Pronoms febles.",
  requiredXp: 600,
  sections: [
    {
      id: "b2-pronouns",
      title: "Pronoms Febles",
      description: "Mastery of en, hi, and clitic clusters.",
      icon: "🧩",
      scenarios: [
        ${generateUniqueScenarios('b2-pron', 'pronouns', (i) => {
          const p = [
            ["Voy a Barcelona -> Voy.", "Vaig a Barcelona -> Hi vaig."],
            ["Tengo tres manzanas -> Tengo tres.", "Tinc tres pomes -> En tinc tres."],
            ["Vengo del mercado -> Vengo.", "Vinc del mercat -> En vinc."],
            ["Ponlo en la mesa -> Ponlo allí.", "Posa-ho a la taula -> Posa-hi-ho."],
            ["Dáselo a ella.", "Dona-l'hi."],
            ["Me voy.", "Me'n vaig."],
            ["¿Tienes pan? Sí, tengo.", "Tens pa? Sí que en tinc."],
            ["No quiero más.", "No en vull més."],
            ["¿Vas al cine? Sí, voy.", "Vas al cinema? Sí que hi vaig."],
            ["Se lo dije ayer.", "L'hi vaig dir ahir."],
            ["Me lo ha dado.", "M'ho ha donat."],
            ["Te lo regalo.", "T'ho regalo."],
            ["Llevatelo.", "Emporta-t'ho."],
            ["No lo veo allí.", "No l'hi veig."],
            ["Hablan de eso.", "En parlen."],
            ["Piensa en ello.", "Pensa-hi."],
            ["Dile que venga.", "Digues-li que vingui."],
            ["Coge dos.", "Agafa'n dos."],
            ["Pon agua en el vaso -> Pon.", "Posa aigua al got -> Posa-n'hi."],
            ["Se los compraré.", "Els hi compraré."]
          ];
          return { type: 'talking', prompt: `Traduce y sustituye: "${p[i-1][0]}"`, answer: p[i-1][1], hints: ["'En' sustituye 'de + cosa' o cantidad. 'Hi' sustituye 'a/en + lugar'."], note: "Los pronombres febles se combinan con reglas estrictas (e.g. l'hi = li + ho)." };
        })}
      ]
    }
  ]
};`;
fs.writeFileSync(path.join(__dirname, '../src/data/curriculum/b2.ts'), b2Content);

// C1
const c1Content = `import type { Tier } from "./types";
export const tierC1: Tier = {
  level: "C1",
  title: "Mestre",
  description: "Administrative and professional registers.",
  requiredXp: 1000,
  sections: [
    {
      id: "c1-admin",
      title: "Documentació Administrativa",
      description: "Formal registers and bureaucracy.",
      icon: "🏛️",
      scenarios: [
        ${generateUniqueScenarios('c1-admin', 'admin', (i) => {
          const p = [
            ["Adjunto el documento.", "Adjunto el document."],
            ["A la atención del director.", "A l'atenció del director."],
            ["Expone que:", "Exposa que:"],
            ["Solicita:", "Sol·licita:"],
            ["Firma del interesado.", "Signatura de l'interessat."],
            ["Fecha y lugar.", "Data i lloc."],
            ["De acuerdo con la ley.", "D'acord amb la llei."],
            ["En respuesta a su petición.", "En resposta a la seva petició."],
            ["Atentamente,", "Atentament,"],
            ["Quedo a su disposición.", "Resto a la seva disposició."],
            ["Certificado de empadronamiento.", "Certificat d'empadronament."],
            ["Presentar un recurso.", "Presentar un recurs."],
            ["Por la presente,", "Per la present,"],
            ["Hecho en Barcelona, a...", "Fet a Barcelona, a..."],
            ["El plazo expira hoy.", "El termini expira avui."],
            ["Cumplimentar el formulario.", "Emplenar el formulari."],
            ["Sello de la empresa.", "Segell de l'empresa."],
            ["DNI o pasaporte.", "DNI o passaport."],
            ["Tasa administrativa.", "Taxa administrativa."],
            ["Declaración jurada.", "Declaració jurada."]
          ];
          return { type: 'writing', prompt: `Traduce la fórmula formal: "${p[i-1][0]}"`, answer: p[i-1][1], hints: ["Usa un registro formal y preciso."], note: "El nivel C1 requiere fluidez en el registro administrativo." };
        })}
      ]
    }
  ]
};`;
fs.writeFileSync(path.join(__dirname, '../src/data/curriculum/c1.ts'), c1Content);

