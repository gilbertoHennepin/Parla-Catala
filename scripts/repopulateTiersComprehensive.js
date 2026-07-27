const fs = require('fs');
const path = require('path');

function generateUniqueScenarios(sectionId, typeGen) {
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
      hints: [${data.hints ? data.hints.map(h => `"${h}"`).join(',') : ''}],
      xpReward: 20,
      explanationNote: \`${data.note || ''}\`
    }`);
  }
  return scenarios.join(',\n');
}

// A2 Content
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
        ${generateUniqueScenarios('a2-diary', (i) => {
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
          return { type: 'writing', prompt: `Traduce: "${p[i-1][0]}"`, answer: p[i-1][1], hints: ["Passat perifràstic (vaig + infinitiu)"], note: "Oral past tense in Catalan." };
        })}
      ]
    },
    {
      id: "a2-shopping",
      title: "Anem de Compres",
      description: "Dangerous false friends alert! Navigate 'roba' (clothes) and other traps.",
      icon: "🛍️",
      scenarios: [
        ${generateUniqueScenarios('a2-shop', (i) => {
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
          return { type: 'talking', prompt: `Traduce: "${p[i-1][0]}"`, answer: p[i-1][1], hints: ["Cuidado con ampolla y roba."], note: "False friends are tricky here." };
        })}
      ]
    },
    {
      id: "a2-pronouns",
      title: "Pronoms Febles: En i Hi",
      description: "Master the weak pronouns EN and HI.",
      icon: "🔄",
      scenarios: [
        ${generateUniqueScenarios('a2-pron', (i) => {
          const p = [
            ["Tengo manzanas -> Tengo dos.", "En tinc dues."],
            ["Voy a casa -> Voy.", "Hi vaig."],
            ["No tengo dinero -> No tengo.", "No en tinc."],
            ["¿Vas al cine? -> Sí, voy.", "Sí, hi vaig."],
            ["Vengo del mercado -> Vengo.", "En vinc."],
            ["Ponlo en la mesa -> Ponlo allí.", "Posa-hi-ho."],
            ["Piensa en eso -> Piensa.", "Pensa-hi."],
            ["Hablan del tema -> Hablan.", "En parlen."],
            ["Coge tres fresas -> Coge tres.", "Agafa'n tres."],
            ["Pon agua -> Pon.", "Posa'n."],
            ["Trabajo en Barcelona -> Trabajo allí.", "Hi treballo."],
            ["No estoy de acuerdo con eso -> No estoy de acuerdo.", "No hi estic d'acord."],
            ["Sale de la casa -> Sale.", "En surt."],
            ["Come pastel -> Come.", "En menja."],
            ["Mete la llave en la puerta -> Métela allí.", "Fica-l'hi."],
            ["Me voy de aquí -> Me voy.", "Me'n vaig."],
            ["¿Hay leche? -> Sí, hay.", "Sí que n'hi ha."],
            ["Trae manzanas -> Trae.", "Porta'n."],
            ["No va al teatro -> No va.", "No hi va."],
            ["Quita eso de ahí -> Quítalo.", "Treu-ho d'allà."]
          ];
          return { type: 'writing', prompt: `Sustituye con EN o HI: "${p[i-1][0]}"`, answer: p[i-1][1], hints: ["'En' = de/cantidad, 'Hi' = a/en (lugar o tema)"], note: "Pronombres en/hi." };
        })}
      ]
    },
    {
      id: "a2-housing",
      title: "Habitatge: Llogar i Les Golfes",
      description: "Vocabulary related to housing.",
      icon: "🏠",
      scenarios: [
        ${generateUniqueScenarios('a2-hous', (i) => {
          const p = [
            ["Alquilo un piso.", "Llogo un pis."],
            ["Las llaves de casa.", "Les claus de casa."],
            ["El altillo está sucio.", "Les golfes estan brutes."],
            ["El comedor es grande.", "El menjador és gran."],
            ["Me mudo mañana.", "Em mudo demà."],
            ["La habitación.", "L'habitació."],
            ["El baño.", "El lavabo."],
            ["La cocina.", "La cuina."],
            ["El balcón.", "El balcó."],
            ["Tengo que pagar el alquiler.", "He de pagar el lloguer."],
            ["Falta la fianza.", "Falta la fiança."],
            ["Vecinos ruidosos.", "Veïns sorollosos."],
            ["La escalera.", "L'escala."],
            ["Ascensor.", "Ascensor."],
            ["El tejado.", "La teulada."],
            ["El pasillo.", "El passadís."],
            ["La ventana.", "La finestra."],
            ["La puerta.", "La porta."],
            ["El jardín.", "El jardí."],
            ["Un barrio tranquilo.", "Un barri tranquil."]
          ];
          return { type: 'talking', prompt: `Traduce: "${p[i-1][0]}"`, answer: p[i-1][1], hints: ["'Alquilar' es llogar, no alquilar."], note: "Habitatge vocabulary." };
        })}
      ]
    },
    {
      id: "a2-phones",
      title: "Converses Telefòniques",
      description: "Phone conversations.",
      icon: "📱",
      scenarios: [
        ${generateUniqueScenarios('a2-phon', (i) => {
          const p = [
            ["Dígame.", "Diga'm."],
            ["¿Está Joan?", "Hi és en Joan?"],
            ["Se ha equivocado.", "S'ha equivocat."],
            ["Llamo más tarde.", "Truco més tard."],
            ["Deje un mensaje.", "Deixi un missatge."],
            ["No hay cobertura.", "No hi ha cobertura."],
            ["Se corta la llamada.", "Es talla la trucada."],
            ["¿De parte de quién?", "De part de qui?"],
            ["Le paso la llamada.", "Li passo la trucada."],
            ["Un momento, por favor.", "Un moment, si us plau."],
            ["Hola, soy Laia.", "Hola, sóc la Laia."],
            ["Quiero hablar con el jefe.", "Vull parlar amb el cap."],
            ["No cuelgue.", "No pengi."],
            ["Batería baja.", "Bateria baixa."],
            ["Llamada perdida.", "Trucada perduda."],
            ["Devuélveme la llamada.", "Torna'm la trucada."],
            ["Habla más alto.", "Parla més fort."],
            ["No te oigo.", "No et sento."],
            ["¿Puedes repetir?", "Pots repetir?"],
            ["Gracias por llamar.", "Gràcies per trucar."]
          ];
          return { type: 'writing', prompt: `Traduce al contestar/hablar por teléfono: "${p[i-1][0]}"`, answer: p[i-1][1], hints: ["Para preguntar si alguien está usa 'Hi és?'"], note: "Conversaciones telefónicas." };
        })}
      ]
    }
  ]
};`;
fs.writeFileSync(path.join(__dirname, '../src/data/curriculum/a2.ts'), a2Content);

// B1 Content
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
        ${generateUniqueScenarios('b1-subj', (i) => {
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
          return { type: 'writing', prompt: `Traduce: "${p[i-1][0]}"`, answer: p[i-1][1], hints: ["Subjuntivo catalán"], note: "Dubtes i subjuntiu." };
        })}
      ]
    },
    {
      id: "b1-medical",
      title: "Al Metge",
      description: "Medical vocabulary.",
      icon: "🏥",
      scenarios: [
        ${generateUniqueScenarios('b1-med', (i) => {
          const p = [
            ["Me duele la espalda.", "Em fa mal l'esquena."],
            ["Tengo tos.", "Tinc tos."],
            ["Estoy resfriado.", "Estic refredat."],
            ["Necesito una receta.", "Necessito una recepta."],
            ["El médico de cabecera.", "El metge de capçalera."],
            ["Tomar pastillas.", "Prendre pastilles."],
            ["Tengo fiebre.", "Tinc febre."],
            ["Me he cortado.", "M'he tallat."],
            ["Hospital de urgencias.", "Hospital d'urgències."],
            ["La enfermera.", "La infermera."],
            ["Tensión alta.", "Tensió alta."],
            ["Mareos.", "Marejos."],
            ["Jarabe para la tos.", "Xarop per a la tos."],
            ["Cita previa.", "Cita prèvia."],
            ["Centro de salud.", "Centre d'atenció primària."],
            ["Análisis de sangre.", "Anàlisi de sang."],
            ["Efectos secundarios.", "Efectes secundaris."],
            ["Estoy embarazada.", "Estic embarassada."],
            ["Alergia al polen.", "Al·lèrgia al pol·len."],
            ["Reposo en cama.", "Repòs al llit."]
          ];
          return { type: 'talking', prompt: `Traduce: "${p[i-1][0]}"`, answer: p[i-1][1], hints: ["'Médico' es metge."], note: "Vocabulari mèdic." };
        })}
      ]
    },
    {
      id: "b1-restaurant",
      title: "Al Restaurant: Falsos Amics",
      description: "Restaurant vocabulary and false friends.",
      icon: "🍽️",
      scenarios: [
        ${generateUniqueScenarios('b1-rest', (i) => {
          const p = [
            ["Para aliñar la ensalada.", "Per amanir l'amanida."],
            ["Judías verdes.", "Mongetes tendres."],
            ["Quiero una botella.", "Vull una ampolla."],
            ["Tráigame la cuenta.", "Porti'm el compte."],
            ["De primero, sopa.", "De primer, sopa."],
            ["Postres.", "Postres."],
            ["Un vaso de agua.", "Un got d'aigua."],
            ["Tenedor y cuchillo.", "Forquilla i ganivet."],
            ["La cuchara.", "La cullera."],
            ["Servilleta.", "Tovalló."],
            ["Plato principal.", "Plat principal."],
            ["Poco hecho.", "Poc fet."],
            ["Muy hecho.", "Molt fet."],
            ["El camarero.", "El cambrer."],
            ["Mesa para dos.", "Taula per a dos."],
            ["Vino tinto.", "Vi negre."],
            ["Cerveza de barril.", "Cervesa de barril."],
            ["Propina.", "Propina."],
            ["Aceite y sal.", "Oli i sal."],
            ["Está riquísimo.", "Està boníssim."]
          ];
          return { type: 'writing', prompt: `Traduce: "${p[i-1][0]}"`, answer: p[i-1][1], hints: ["Cuidado con ampolla y mongetes."], note: "Falsos amigos en el restaurante." };
        })}
      ]
    },
    {
      id: "b1-emotions",
      title: "Emocions i Sentiments",
      description: "Expressing subjectivity and emotions.",
      icon: "❤️",
      scenarios: [
        ${generateUniqueScenarios('b1-emo', (i) => {
          const p = [
            ["Estoy contento.", "Estic content."],
            ["Me da pena.", "Em fa pena."],
            ["Estoy triste.", "Estic trist."],
            ["Qué sorpresa.", "Quina sorpresa."],
            ["Estoy preocupado.", "Estic preocupat."],
            ["Me da asco.", "Em fa fàstic."],
            ["Siento mucho miedo.", "Sento molta por."],
            ["Estoy enfadado.", "Estic enfadat."],
            ["No me importa.", "No m'importa."],
            ["Me hace ilusión.", "Em fa il·lusió."],
            ["Estoy agotado.", "Estic esgotat."],
            ["Me aburro.", "M'avorreixo."],
            ["Estoy emocionado.", "Estic emocionat."],
            ["Es una lástima.", "És una llàstima."],
            ["Me duele en el alma.", "Em fa mal a l'ànima."],
            ["Estoy nervioso.", "Estic nerviós."],
            ["Siento orgullo.", "Sento orgull."],
            ["Me da vergüenza.", "Em fa vergonya."],
            ["Te echo de menos.", "Et trobo a faltar."],
            ["Estoy enamorado.", "Estic enamorat."]
          ];
          return { type: 'talking', prompt: `Traduce: "${p[i-1][0]}"`, answer: p[i-1][1], hints: ["Expresiones de emoción."], note: "Emocions i sentiments." };
        })}
      ]
    }
  ]
};`;
fs.writeFileSync(path.join(__dirname, '../src/data/curriculum/b1.ts'), b1Content);

// B2 Content
const b2Content = `import type { Tier } from "./types";
export const tierB2: Tier = {
  level: "B2",
  title: "Intermedi (B2)",
  description: "Formal registers and work environment.",
  requiredXp: 600,
  sections: [
    {
      id: "b2-university",
      title: "Universitat i Registre Formal",
      description: "University context and formal language.",
      icon: "🎓",
      scenarios: [
        ${generateUniqueScenarios('b2-uni', (i) => {
          const p = [
            ["La facultad de derecho.", "La facultat de dret."],
            ["El catedrático.", "El catedràtic."],
            ["Aprobar el examen.", "Aprovar l'examen."],
            ["Suspender la asignatura.", "Suspendre l'assignatura."],
            ["Trabajo de fin de grado.", "Treball de final de grau."],
            ["Matrícula de honor.", "Matrícula d'honor."],
            ["Beca de estudios.", "Beca d'estudis."],
            ["El rectorado.", "El rectorat."],
            ["Aula magna.", "Aula magna."],
            ["Créditos optativos.", "Crèdits optatius."],
            ["Expediente académico.", "Expedient acadèmic."],
            ["Campus universitario.", "Campus universitari."],
            ["Biblioteca central.", "Biblioteca central."],
            ["Tesis doctoral.", "Tesi doctoral."],
            ["Asignatura obligatoria.", "Assignatura obligatòria."],
            ["Periodo de exámenes.", "Període d'exàmens."],
            ["Calificaciones finales.", "Qualificacions finals."],
            ["Revisión de examen.", "Revisió d'examen."],
            ["Cursos de verano.", "Cursos d'estiu."],
            ["Asociación de estudiantes.", "Associació d'estudiants."]
          ];
          return { type: 'writing', prompt: `Traduce contexto universitario: "${p[i-1][0]}"`, answer: p[i-1][1], hints: ["Registre acadèmic"], note: "" };
        })}
      ]
    },
    {
      id: "b2-work",
      title: "Entorn Laboral i Entrevistes",
      description: "Work environment vocabulary.",
      icon: "💼",
      scenarios: [
        ${generateUniqueScenarios('b2-work', (i) => {
          const p = [
            ["Entrevista de trabajo.", "Entrevista de feina."],
            ["Recursos humanos.", "Recursos humans."],
            ["Sueldo bruto.", "Sou brut."],
            ["Contrato fijo.", "Contracte fix."],
            ["Despido improcedente.", "Acomiadament improcedent."],
            ["Baja por enfermedad.", "Baixa per malaltia."],
            ["Sindicato.", "Sindicat."],
            ["Huelga general.", "Vaga general."],
            ["Curriculum vitae.", "Currículum vitae."],
            ["Jefe de departamento.", "Cap de departament."],
            ["Reunión de equipo.", "Reunió d'equip."],
            ["Horario flexible.", "Horari flexible."],
            ["Trabajo a distancia.", "Teletreball."],
            ["Nómina mensual.", "Nòmina mensual."],
            ["Seguridad social.", "Seguretat social."],
            ["Experiencia laboral.", "Experiència laboral."],
            ["Ascenso profesional.", "Ascens professional."],
            ["Carta de recomendación.", "Carta de recomanació."],
            ["Horas extras.", "Hores extres."],
            ["Periodo de prueba.", "Període de prova."]
          ];
          return { type: 'talking', prompt: `Traduce contexto laboral: "${p[i-1][0]}"`, answer: p[i-1][1], hints: ["Feina = Trabajo."], note: "" };
        })}
      ]
    }
  ]
};`;
fs.writeFileSync(path.join(__dirname, '../src/data/curriculum/b2.ts'), b2Content);

// C1 Content
const c1Content = `import type { Tier } from "./types";
export const tierC1: Tier = {
  level: "C1",
  title: "Suficiència (C1)",
  description: "Administrative and professional registers.",
  requiredXp: 1000,
  sections: [
    {
      id: "c1-admin",
      title: "Documentació Administrativa",
      description: "Formal registers and bureaucracy.",
      icon: "🏛️",
      scenarios: [
        ${generateUniqueScenarios('c1-admin', (i) => {
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
          return { type: 'writing', prompt: `Traduce fórmula formal: "${p[i-1][0]}"`, answer: p[i-1][1], hints: ["Registre administratiu"], note: "" };
        })}
      ]
    },
    {
      id: "c1-debate",
      title: "Debat i Argumentació",
      description: "Complex debate and argumentation.",
      icon: "🗣️",
      scenarios: [
        ${generateUniqueScenarios('c1-deb', (i) => {
          const p = [
            ["Por un lado.", "D'una banda."],
            ["Por otro lado.", "D'altra banda."],
            ["En conclusión.", "En conclusió."],
            ["Sin embargo.", "No obstant això."],
            ["A pesar de que.", "Malgrat que."],
            ["En mi opinión.", "Al meu parer."],
            ["Estoy de acuerdo.", "Estic d'acord."],
            ["Discrepo totalmente.", "Discrepo totalment."],
            ["Es innegable que.", "És innegable que."],
            ["Por consiguiente.", "Per consegüent."],
            ["En consecuencia.", "En conseqüència."],
            ["Es decir.", "És a dir."],
            ["De hecho.", "De fet."],
            ["En cambio.", "En canvi."],
            ["Al contrario.", "Al contrari."],
            ["Es evidente que.", "És evident que."],
            ["Cabe destacar que.", "Cal destacar que."],
            ["Para resumir.", "Per resumir."],
            ["Respecto a.", "Pel que fa a."],
            ["En definitiva.", "En definitiva."]
          ];
          return { type: 'talking', prompt: `Traduce conector de debate: "${p[i-1][0]}"`, answer: p[i-1][1], hints: ["Connectors textuals"], note: "" };
        })}
      ]
    }
  ]
};`;
fs.writeFileSync(path.join(__dirname, '../src/data/curriculum/c1.ts'), c1Content);

