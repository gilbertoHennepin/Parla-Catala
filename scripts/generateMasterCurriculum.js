/**
 * MASTER CURRICULUM GENERATOR — pom3.xml aligned
 * 
 * Generates the ENTIRE curriculum database (A1–C2) with 20+ unique scenarios
 * per section, each with completely different prompts, answers, and grammar rules.
 * 
 * Output: src/data/curriculum_database.json
 */
const fs = require('fs');
const path = require('path');

const scenarios = [];

// ═══════════════════════════════════════════════════════════════════════
// LEVEL A1 — FUNDAMENTOS (Environmental Survival)
// ═══════════════════════════════════════════════════════════════════════

// ── A1: Identidad y Cortesía ──────────────────────────────────────────
const a1Identity = [
  { t: "talking", es: "Hola, me llamo Pablo. ¿Y tú?", ca: "Hola, em dic Pau. I tu?", g: "Verb reflexive dir-se (em dic). Personal article before names.", h: ["em dic", "Pau", "I tu"] },
  { t: "writing", es: "Yo soy de Madrid y ella es de Girona.", ca: "Jo sóc de Madrid i ella és de Girona.", g: "Conjugation of ser: sóc (1st sing), és (3rd sing). Conjunction 'i' replaces 'y'.", h: ["sóc", "és", "i"] },
  { t: "talking", es: "Buenos días, señora. ¿Cómo está usted?", ca: "Bon dia, senyora. Com està vostè?", g: "Formal greeting with 'vostè'. 'Bon dia' is singular in Catalan (not buenos días).", h: ["Bon dia", "senyora", "vostè"] },
  { t: "writing", es: "Nosotros somos estudiantes de catalán.", ca: "Nosaltres som estudiants de català.", g: "1st person plural of ser (som). Plural noun without '-es' ending (estudiants).", h: ["Nosaltres", "som", "estudiants"] },
  { t: "talking", es: "Buenas noches, ¿cómo te llamas?", ca: "Bona nit, com et dius?", g: "Greeting 'bona nit' (singular feminine). Reflexive dir-se in 2nd person (et dius).", h: ["Bona nit", "et dius"] },
  { t: "writing", es: "Ellos son catalanes y vosotros sois españoles.", ca: "Ells són catalans i vosaltres sou espanyols.", g: "Full ser paradigm: són (3rd pl), sou (2nd pl). Demonyms.", h: ["són", "sou", "catalans", "espanyols"] },
  { t: "talking", es: "Perdone, ¿es usted el señor García?", ca: "Perdoni, és vostè el senyor Garcia?", g: "Formal imperative 'perdoni'. Formal 'vostè' with 3rd person verb.", h: ["Perdoni", "vostè", "senyor"] },
  { t: "writing", es: "Me llamo Ana y tengo veinte años.", ca: "Em dic Anna i tinc vint anys.", g: "Dir-se + tenir for age. Note double 'n' in Anna (Catalan spelling).", h: ["Em dic", "tinc", "vint anys"] },
  { t: "reading", es: "¿De dónde eres tú? Yo soy de Tarragona.", ca: "D'on ets tu? Jo sóc de Tarragona.", g: "Interrogative d'on (contraction de + on). 2nd person ets.", h: ["D'on", "ets", "sóc"] },
  { t: "talking", es: "Mucho gusto. Encantado de conocerte.", ca: "Molt de gust. Encantat de conèixer-te.", g: "Greeting formula 'Molt de gust'. Infinitive + enclitic pronoun.", h: ["Molt de gust", "Encantat", "conèixer-te"] },
  { t: "writing", es: "Ella se llama Montserrat y es profesora.", ca: "Ella es diu Montserrat i és professora.", g: "3rd person reflexive dir-se (es diu). Double 's' in professora.", h: ["es diu", "és", "professora"] },
  { t: "talking", es: "¿Cuántos años tienes? Tengo treinta y dos.", ca: "Quants anys tens? Tinc trenta-dos.", g: "Interrogative 'quants'. Hyphenated compound numbers (trenta-dos).", h: ["Quants", "tens", "trenta-dos"] },
  { t: "writing", es: "Buenas tardes, somos los nuevos vecinos.", ca: "Bona tarda, som els nous veïns.", g: "'Bona tarda' (singular). Dieresis in veïns.", h: ["Bona tarda", "som", "veïns"] },
  { t: "talking", es: "¿Cómo se llama su hijo?", ca: "Com es diu el seu fill?", g: "Possessive 'el seu' requires definite article. 3rd person dir-se.", h: ["es diu", "el seu", "fill"] },
  { t: "reading", es: "Yo no soy médico, soy enfermero.", ca: "Jo no sóc metge, sóc infermer.", g: "Negation with 'no'. Professional vocabulary (metge, infermer).", h: ["no sóc", "metge", "infermer"] },
  { t: "writing", es: "¿Habláis catalán en casa?", ca: "Parleu català a casa?", g: "2nd person plural parleu. Preposition 'a' for location (a casa).", h: ["Parleu", "català", "a casa"] },
  { t: "talking", es: "Ellas son mis amigas de la universidad.", ca: "Elles són les meves amigues de la universitat.", g: "Feminine plural 'elles'. Possessive with article (les meves).", h: ["Elles", "són", "les meves"] },
  { t: "writing", es: "Soy Juan, un placer. Vivo aquí cerca.", ca: "Sóc en Joan, un plaer. Visc aquí a prop.", g: "Personal article 'en' before masculine names. Viure conjugation (visc).", h: ["en Joan", "plaer", "visc", "a prop"] },
  { t: "talking", es: "¿Vosotros sois de aquí o de fuera?", ca: "Vosaltres sou d'aquí o de fora?", g: "Contraction d'aquí. Vocabulary 'de fora'.", h: ["sou", "d'aquí", "de fora"] },
  { t: "reading", es: "Nos llamamos Pere y Marta. Somos hermanos.", ca: "Ens diem Pere i Marta. Som germans.", g: "1st person plural reflexive (ens diem). Vocabulary germans.", h: ["Ens diem", "Som", "germans"] },
];

// ── A1: La Familia y Artículos ────────────────────────────────────────
const a1Familia = [
  { t: "talking", es: "El hombre bebe agua.", ca: "L'home beu aigua.", g: "Apostrophization: el + home = l'home (before vowel/silent h). CRITICAL Catalan rule absent in Spanish.", h: ["L'home", "beu", "aigua"] },
  { t: "writing", es: "La mujer y los niños están en casa.", ca: "La dona i els nens són a casa.", g: "Articles (la, els). Use 'són' not 'estan' for permanent location.", h: ["La dona", "els nens", "són"] },
  { t: "talking", es: "Mi padre tiene un hermano y una hermana.", ca: "El meu pare té un germà i una germana.", g: "Possessive REQUIRES article (el meu, not just 'meu'). Huge trap for Spanish speakers.", h: ["El meu pare", "germà", "germana"] },
  { t: "writing", es: "Las abuelas de los niños son muy viejas.", ca: "Les àvies dels nens són molt velles.", g: "Feminine plural articles (les). Contraction de + els = dels.", h: ["Les àvies", "dels", "velles"] },
  { t: "talking", es: "Unos amigos y unas amigas vienen a cenar.", ca: "Uns amics i unes amigues vénen a sopar.", g: "Plural indefinite articles (uns, unes). Verb venir (vénen).", h: ["Uns amics", "unes amigues", "vénen"] },
  { t: "reading", es: "El hijo del vecino es alto.", ca: "El fill del veí és alt.", g: "Contraction del (de + el). Basic adjective.", h: ["El fill", "del veí", "alt"] },
  { t: "writing", es: "Mi madre y mi tía hablan catalán.", ca: "La meva mare i la meva tieta parlen català.", g: "Feminine possessive with article (la meva). Catalan uses 'tieta' not 'tia'.", h: ["La meva mare", "la meva tieta", "parlen"] },
  { t: "talking", es: "Los estudiantes leen un libro interesante.", ca: "Els estudiants llegeixen un llibre interessant.", g: "Verb llegir in 3rd plural (llegeixen). Double 'l' in llibre.", h: ["Els estudiants", "llegeixen", "llibre"] },
  { t: "writing", es: "El agua está fría y la leche está caliente.", ca: "L'aigua és freda i la llet és calenta.", g: "Apostrophization (l'aigua). Use 'és' for inherent qualities, not 'està'.", h: ["L'aigua", "freda", "la llet", "calenta"] },
  { t: "talking", es: "¿Tienes hermanos? Tengo dos hermanas.", ca: "Tens germans? Tinc dues germanes.", g: "Feminine numeral 'dues' (not 'dos'). Catalan distinguishes dos/dues.", h: ["Tens", "Tinc", "dues germanes"] },
  { t: "reading", es: "La escuela del pueblo es pequeña.", ca: "L'escola del poble és petita.", g: "Apostrophization (l'escola). Contraction del.", h: ["L'escola", "del poble", "petita"] },
  { t: "writing", es: "El abuelo de María vive en un apartamento.", ca: "L'avi de la Maria viu en un apartament.", g: "Apostrophization (l'avi). Personal article before female names (la Maria).", h: ["L'avi", "la Maria", "viu"] },
  { t: "talking", es: "Mis primos son jóvenes.", ca: "Els meus cosins són joves.", g: "Possessive with article (els meus). Cousins = cosins.", h: ["Els meus cosins", "joves"] },
  { t: "writing", es: "¿Cuántos hijos tiene la señora?", ca: "Quants fills té la senyora?", g: "Interrogative quants. Verb tenir 3rd person (té).", h: ["Quants", "fills", "té"] },
  { t: "talking", es: "La hija del profesor es inteligente.", ca: "La filla del professor és intel·ligent.", g: "Geminated l (l·l) in intel·ligent. UNIQUE to Catalan.", h: ["La filla", "professor", "intel·ligent"] },
  { t: "reading", es: "Un hombre y una mujer entran en la tienda.", ca: "Un home i una dona entren a la botiga.", g: "Preposition 'a' (not 'en') for entering in Catalan. Botiga = tienda.", h: ["Un home", "una dona", "entren", "botiga"] },
  { t: "writing", es: "Nuestro sobrino tiene un perro negro.", ca: "El nostre nebot té un gos negre.", g: "Possessive with article (el nostre). Nebot = sobrino, gos = perro.", h: ["El nostre nebot", "gos", "negre"] },
  { t: "talking", es: "Las hermanas de Pedro son gemelas.", ca: "Les germanes d'en Pere són bessones.", g: "Contraction d'en (de + en). Personal article 'en' before Pere. Bessones = gemelas.", h: ["Les germanes", "d'en Pere", "bessones"] },
  { t: "writing", es: "Mi suegra es una buena cocinera.", ca: "La meva sogra és una bona cuinera.", g: "Possessive with article. Sogra (not suegra). Cuinera.", h: ["La meva sogra", "bona cuinera"] },
  { t: "talking", es: "El bebé duerme en su cuna.", ca: "El nadó dorm al bressol.", g: "Nadó = bebé. Contraction al (a + el). Bressol = cuna.", h: ["El nadó", "dorm", "al bressol"] },
];

// ── A1: Comida y Bebida ──────────────────────────────────────────────
const a1Comida = [
  { t: "talking", es: "Yo como pan con queso cada mañana.", ca: "Jo menjo pa amb formatge cada matí.", g: "Regular verb menjar (menjo). Formatge = queso.", h: ["menjo", "pa", "formatge", "matí"] },
  { t: "writing", es: "¿Tú bebes vino o cerveza?", ca: "Tu beus vi o cervesa?", g: "Verb beure (beus). Vi = vino, cervesa = cerveza.", h: ["beus", "vi", "cervesa"] },
  { t: "talking", es: "Ella bebe un vaso de leche.", ca: "Ella beu un got de llet.", g: "3rd person beure (beu). Got = vaso, llet = leche.", h: ["beu", "got", "llet"] },
  { t: "reading", es: "Nosotros comemos una ensalada verde.", ca: "Nosaltres mengem una amanida verda.", g: "1st plural menjar (mengem). Amanida = ensalada.", h: ["mengem", "amanida", "verda"] },
  { t: "writing", es: "¿Quieres una manzana o una naranja?", ca: "Vols una poma o una taronja?", g: "Verb voler (vols). Poma = manzana, taronja = naranja.", h: ["Vols", "poma", "taronja"] },
  { t: "talking", es: "El pollo con arroz es delicioso.", ca: "El pollastre amb arròs és deliciós.", g: "Pollastre = pollo. Arròs with accent. Adjective agreement.", h: ["pollastre", "arròs", "deliciós"] },
  { t: "writing", es: "Ellos comen pescado fresco del mercado.", ca: "Ells mengen peix fresc del mercat.", g: "3rd plural menjar (mengen). Peix = pescado, mercat = mercado.", h: ["mengen", "peix", "fresc", "mercat"] },
  { t: "talking", es: "Bebemos café con azúcar por la tarde.", ca: "Bevem cafè amb sucre a la tarda.", g: "1st plural beure (bevem). Sucre = azúcar (masculine in Catalan). A la tarda.", h: ["Bevem", "cafè", "sucre", "a la tarda"] },
  { t: "reading", es: "Quiero un bocadillo de jamón y un zumo.", ca: "Vull un entrepà de pernil i un suc.", g: "Entrepà = bocadillo, pernil = jamón, suc = zumo.", h: ["Vull", "entrepà", "pernil", "suc"] },
  { t: "writing", es: "La fruta está en la mesa de la cocina.", ca: "La fruita és a la taula de la cuina.", g: "Fruita (with diphthong). Taula = mesa. Cuina = cocina. Use 'és' for location.", h: ["fruita", "taula", "cuina"] },
  { t: "talking", es: "¿Coméis carne o sois vegetarianos?", ca: "Mengeu carn o sou vegetarians?", g: "2nd plural menjar (mengeu). Carn = carne.", h: ["Mengeu", "carn", "sou"] },
  { t: "writing", es: "Mi madre cocina una sopa de verduras.", ca: "La meva mare cuina una sopa de verdures.", g: "Possessive with article. Cuinar = cocinar.", h: ["La meva mare", "cuina", "verdures"] },
  { t: "talking", es: "El camarero trae una botella de agua.", ca: "El cambrer porta una ampolla d'aigua.", g: "Cambrer = camarero. Portar = traer. Contraction d'aigua.", h: ["cambrer", "porta", "ampolla", "d'aigua"] },
  { t: "reading", es: "Las patatas fritas con sal están buenas.", ca: "Les patates fregides amb sal són bones.", g: "Fregides = fritas. Són bones (not 'estan').", h: ["patates fregides", "sal", "bones"] },
  { t: "writing", es: "Yo no como huevos por la mañana.", ca: "Jo no menjo ous al matí.", g: "Negation. Ous = huevos. Al matí = por la mañana.", h: ["no menjo", "ous", "al matí"] },
  { t: "talking", es: "¿Qué quieres para cenar esta noche?", ca: "Què vols per sopar aquesta nit?", g: "Sopar = cenar. Aquesta = esta (demonstrative).", h: ["Què vols", "sopar", "aquesta nit"] },
  { t: "writing", es: "El helado de chocolate es mi favorito.", ca: "El gelat de xocolata és el meu preferit.", g: "Gelat = helado. Xocolata (with x). Preferit = favorito.", h: ["gelat", "xocolata", "preferit"] },
  { t: "talking", es: "Compramos fresas y uvas en el supermercado.", ca: "Comprem maduixes i raïm al supermercat.", g: "Maduixes = fresas. Raïm = uvas (singular collective with dieresis).", h: ["Comprem", "maduixes", "raïm", "supermercat"] },
  { t: "reading", es: "La mantequilla y la mermelada están en la nevera.", ca: "La mantega i la melmelada són a la nevera.", g: "Mantega = mantequilla. Melmelada (not mermelada). Són for location.", h: ["mantega", "melmelada", "nevera"] },
  { t: "writing", es: "¿Cuánto cuesta un kilo de tomates?", ca: "Quant costa un quilo de tomàquets?", g: "Quant = cuánto. Costa = cuesta. Tomàquets = tomates.", h: ["Quant", "costa", "quilo", "tomàquets"] },
];

// ── A1: Orientación y Físico ─────────────────────────────────────────
const a1Orientacion = [
  { t: "talking", es: "Gira a la derecha y sigue recto.", ca: "Gira a la dreta i segueix recte.", g: "Directions: dreta = derecha. Segueix = sigue.", h: ["dreta", "segueix", "recte"] },
  { t: "writing", es: "La farmacia está a la izquierda de la panadería.", ca: "La farmàcia és a l'esquerra de la fleca.", g: "Esquerra = izquierda. Fleca = panadería. Apostrophization (l'esquerra).", h: ["farmàcia", "l'esquerra", "fleca"] },
  { t: "talking", es: "El hospital está lejos, a cinco minutos en coche.", ca: "L'hospital és lluny, a cinc minuts amb cotxe.", g: "Apostrophization (l'hospital). Lluny = lejos. Cotxe = coche.", h: ["L'hospital", "lluny", "cinc", "cotxe"] },
  { t: "reading", es: "La calle es larga y estrecha.", ca: "El carrer és llarg i estret.", g: "Carrer = calle (masculine in Catalan!). Gender trap.", h: ["El carrer", "llarg", "estret"] },
  { t: "writing", es: "¿Dónde está la estación de tren?", ca: "On és l'estació de tren?", g: "On = dónde. Apostrophization (l'estació).", h: ["On", "l'estació", "tren"] },
  { t: "talking", es: "Él es alto, moreno y tiene los ojos verdes.", ca: "Ell és alt, moreno i té els ulls verds.", g: "Physical description. Ulls = ojos.", h: ["alt", "moreno", "ulls verds"] },
  { t: "writing", es: "La chica rubia lleva un vestido azul.", ca: "La noia rossa porta un vestit blau.", g: "Noia = chica. Rossa = rubia. Vestit = vestido.", h: ["noia", "rossa", "vestit", "blau"] },
  { t: "talking", es: "Mi casa está cerca del parque grande.", ca: "Casa meva és a prop del parc gran.", g: "'Casa meva' (possessive after casa, no article). A prop = cerca.", h: ["Casa meva", "a prop", "parc gran"] },
  { t: "reading", es: "El semáforo está en rojo, no cruces.", ca: "El semàfor és en vermell, no crossis.", g: "Vermell = rojo. Negative imperative.", h: ["semàfor", "vermell", "no crossis"] },
  { t: "writing", es: "Sube las escaleras hasta el tercer piso.", ca: "Puja les escales fins al tercer pis.", g: "Puja = sube. Escales = escaleras. Fins al = hasta el.", h: ["Puja", "escales", "fins al"] },
  { t: "talking", es: "¿De qué color es tu coche? Es blanco.", ca: "De quin color és el teu cotxe? És blanc.", g: "Quin = qué (interrogative adjective). Blanc = blanco.", h: ["quin color", "el teu", "blanc"] },
  { t: "writing", es: "Ella tiene el pelo largo y negro.", ca: "Ella té el cabell llarg i negre.", g: "Cabell = pelo. Llarg = largo.", h: ["cabell", "llarg", "negre"] },
  { t: "talking", es: "Los edificios antiguos están en el centro.", ca: "Els edificis antics són al centre.", g: "Antics = antiguos. Contraction al (a + el).", h: ["edificis antics", "al centre"] },
  { t: "reading", es: "El río pasa por debajo del puente viejo.", ca: "El riu passa per sota del pont vell.", g: "Riu = río. Per sota = por debajo. Pont = puente.", h: ["riu", "per sota", "pont vell"] },
  { t: "writing", es: "Mi hermano es bajo y gordo.", ca: "El meu germà és baix i gras.", g: "Possessive with article. Baix = bajo, gras = gordo.", h: ["El meu germà", "baix", "gras"] },
  { t: "talking", es: "La plaza está delante de la iglesia.", ca: "La plaça és davant de l'església.", g: "Davant de = delante de. Apostrophization (l'església).", h: ["plaça", "davant de", "l'església"] },
  { t: "writing", es: "¿Cuántas ventanas tiene la casa amarilla?", ca: "Quantes finestres té la casa groga?", g: "Quantes (feminine interrogative). Finestres = ventanas. Groga = amarilla.", h: ["Quantes", "finestres", "groga"] },
  { t: "talking", es: "El niño pequeño tiene los ojos marrones.", ca: "El nen petit té els ulls marrons.", g: "Nen = niño. Petit = pequeño. Ulls = ojos.", h: ["nen petit", "ulls marrons"] },
  { t: "reading", es: "Cruza la calle y la tienda está enfrente.", ca: "Creua el carrer i la botiga és al davant.", g: "Creua = cruza. Carrer (masculine). Al davant = enfrente.", h: ["Creua", "carrer", "botiga", "al davant"] },
  { t: "writing", es: "La montaña está detrás de nuestra casa.", ca: "La muntanya és darrere de casa nostra.", g: "Muntanya = montaña. Darrere de = detrás de. Casa nostra (postposed possessive).", h: ["muntanya", "darrere de", "casa nostra"] },
];

// ═══════════════════════════════════════════════════════════════════════
// LEVEL A2 — INTERMEDIO (Functional Independence)
// ═══════════════════════════════════════════════════════════════════════

// ── A2: Rutina Diaria y Horas ────────────────────────────────────────
const a2Rutina = [
  { t: "talking", es: "Me levanto a las siete y cuarto.", ca: "Em llevo a un quart de vuit.", g: "Catalan quarter clock: 7:15 = un quart de vuit (a quarter of eight). Reflexive llevar-se.", h: ["Em llevo", "un quart de vuit"] },
  { t: "writing", es: "Son las ocho y media.", ca: "Són dos quarts de nou.", g: "8:30 = dos quarts de nou (two quarters of nine). Mind-bending for Spanish speakers.", h: ["dos quarts de nou"] },
  { t: "talking", es: "Me ducho a las nueve menos cuarto.", ca: "Em dutxo a tres quarts de nou.", g: "8:45 = tres quarts de nou (three quarters of nine).", h: ["Em dutxo", "tres quarts de nou"] },
  { t: "writing", es: "Desayuno a las siete de la mañana.", ca: "Esmorzo a les set del matí.", g: "Esmorzo = desayuno (verb). Del matí = de la mañana.", h: ["Esmorzo", "les set", "del matí"] },
  { t: "talking", es: "¿A qué hora te acuestas?", ca: "A quina hora et fiques al llit?", g: "Ficar-se al llit = acostarse (literal: put yourself into bed).", h: ["quina hora", "et fiques", "al llit"] },
  { t: "reading", es: "Nos vestimos antes de salir de casa.", ca: "Ens vestim abans de sortir de casa.", g: "Reflexive vestir-se (ens vestim). Sortir = salir.", h: ["Ens vestim", "abans de", "sortir"] },
  { t: "writing", es: "Él se afeita cada mañana a las seis.", ca: "Ell s'afaita cada matí a les sis.", g: "Reflexive afaitar-se (s'afaita). Apostrophization with pronoun.", h: ["s'afaita", "cada matí", "les sis"] },
  { t: "talking", es: "Comemos a las dos del mediodía.", ca: "Dinem a les dues del migdia.", g: "Dinar = comer (midday meal). Feminine numeral 'dues'. Migdia = mediodía.", h: ["Dinem", "les dues", "migdia"] },
  { t: "writing", es: "¿Cuándo vuelves del trabajo? A las cinco.", ca: "Quan tornes de la feina? A les cinc.", g: "Quan = cuándo. Feina = trabajo. Tornar = volver.", h: ["Quan", "tornes", "feina", "cinc"] },
  { t: "talking", es: "Los niños se lavan las manos antes de comer.", ca: "Els nens es renten les mans abans de menjar.", g: "Rentar-se = lavarse. Mans = manos.", h: ["es renten", "mans", "abans de"] },
  { t: "reading", es: "Me peino y me maquillo antes de salir.", ca: "Em pentino i em maquillo abans de sortir.", g: "Pentinar-se = peinarse. Reflexive pronoun placement.", h: ["Em pentino", "em maquillo", "sortir"] },
  { t: "writing", es: "Cenamos a las nueve de la noche normalmente.", ca: "Sopem a les nou del vespre normalment.", g: "Sopar = cenar. Del vespre = de la noche (early evening).", h: ["Sopem", "les nou", "del vespre"] },
  { t: "talking", es: "Me lavo los dientes tres veces al día.", ca: "Em rento les dents tres vegades al dia.", g: "Rentar-se les dents = lavarse los dientes. Vegades = veces.", h: ["Em rento", "dents", "vegades"] },
  { t: "writing", es: "Ella se mira en el espejo cada mañana.", ca: "Ella es mira al mirall cada matí.", g: "Mirar-se = mirarse. Mirall = espejo.", h: ["es mira", "mirall", "cada matí"] },
  { t: "talking", es: "Son las diez menos cinco.", ca: "Falten cinc minuts per a les deu.", g: "Alternative time expression: falten X minuts per a les Y.", h: ["Falten", "cinc minuts", "per a les deu"] },
  { t: "reading", es: "¿A qué hora empieza la clase?", ca: "A quina hora comença la classe?", g: "Començar = empezar. Classe = clase.", h: ["quina hora", "comença", "classe"] },
  { t: "writing", es: "Me acuesto tarde los fines de semana.", ca: "Em fico al llit tard els caps de setmana.", g: "Ficar-se al llit. Caps de setmana = fines de semana.", h: ["Em fico al llit", "tard", "caps de setmana"] },
  { t: "talking", es: "Él se despierta con el despertador.", ca: "Ell es desperta amb el despertador.", g: "Reflexive despertar-se (es desperta).", h: ["es desperta", "despertador"] },
  { t: "writing", es: "Primero desayuno y después me ducho.", ca: "Primer esmorzo i després em dutxo.", g: "Primer = primero. Després = después. Sequence of daily actions.", h: ["Primer", "esmorzo", "després", "em dutxo"] },
  { t: "talking", es: "Son las doce del mediodía en punto.", ca: "Són les dotze del migdia en punt.", g: "En punt = en punto. Dotze = doce.", h: ["les dotze", "migdia", "en punt"] },
];

// ── A2: La Ciudad y el Campo ─────────────────────────────────────────
const a2Ciudad = [
  { t: "talking", es: "El ayuntamiento está en la plaza mayor.", ca: "L'ajuntament és a la plaça major.", g: "Apostrophization (l'ajuntament). Plaça = plaza.", h: ["L'ajuntament", "plaça major"] },
  { t: "writing", es: "En el pueblo hay una fuente antigua.", ca: "Al poble hi ha una font antiga.", g: "Haver-hi impersonal (hi ha). Font = fuente. Antiga = antigua.", h: ["Al poble", "hi ha", "font antiga"] },
  { t: "talking", es: "La biblioteca está al lado del museo.", ca: "La biblioteca és al costat del museu.", g: "Al costat de = al lado de. Museu = museo.", h: ["biblioteca", "al costat", "museu"] },
  { t: "reading", es: "Cruzo el puente para ir al otro lado del río.", ca: "Creuço el pont per anar a l'altra banda del riu.", g: "Pont = puente. Banda = lado/orilla. Riu = río.", h: ["Creuço", "pont", "l'altra banda", "riu"] },
  { t: "writing", es: "¿Hay un cajero automático cerca de aquí?", ca: "Hi ha un caixer automàtic a prop d'aquí?", g: "Caixer automàtic = cajero automático. A prop de = cerca de.", h: ["Hi ha", "caixer automàtic", "a prop"] },
  { t: "talking", es: "Los campos de trigo son preciosos en verano.", ca: "Els camps de blat són preciosos a l'estiu.", g: "Blat = trigo. A l'estiu = en verano (apostrophization).", h: ["camps", "blat", "a l'estiu"] },
  { t: "writing", es: "La carnicería está entre la farmacia y el banco.", ca: "La carnisseria és entre la farmàcia i el banc.", g: "Carnisseria = carnicería. Entre = entre.", h: ["carnisseria", "entre", "farmàcia", "banc"] },
  { t: "talking", es: "En el campo hay vacas, ovejas y gallinas.", ca: "Al camp hi ha vaques, ovelles i gallines.", g: "Animal vocabulary. Vaques = vacas, ovelles = ovejas.", h: ["Al camp", "vaques", "ovelles", "gallines"] },
  { t: "reading", es: "La comisaría de policía está en aquella calle.", ca: "La comissaria de policia és en aquell carrer.", g: "Demonstrative 'aquell'. Carrer = calle (masculine).", h: ["comissaria", "policia", "aquell carrer"] },
  { t: "writing", es: "El mercado del pueblo abre los sábados.", ca: "El mercat del poble obre els dissabtes.", g: "Mercat = mercado. Obre = abre. Dissabtes = sábados.", h: ["mercat", "obre", "dissabtes"] },
  { t: "talking", es: "Voy a correos a enviar una carta.", ca: "Vaig a correus a enviar una carta.", g: "Anar a + infinitive. Correus = correos.", h: ["Vaig a correus", "enviar", "carta"] },
  { t: "writing", es: "La granja de mi abuelo tiene muchas tierras.", ca: "La masia del meu avi té moltes terres.", g: "Masia = granja/masía (Catalan concept). Possessive with article.", h: ["masia", "del meu avi", "moltes terres"] },
  { t: "talking", es: "El cine está detrás del centro comercial.", ca: "El cinema és darrere del centre comercial.", g: "Cinema = cine. Darrere de = detrás de.", h: ["cinema", "darrere", "centre comercial"] },
  { t: "reading", es: "Las calles del casco antiguo son estrechas.", ca: "Els carrers del casc antic són estrets.", g: "Carrers (masculine plural). Casc antic = casco antiguo.", h: ["carrers", "casc antic", "estrets"] },
  { t: "writing", es: "¿Cómo llego a la estación de autobuses?", ca: "Com arribo a l'estació d'autobusos?", g: "Arribar = llegar. Apostrophization (l'estació, d'autobusos).", h: ["Com arribo", "l'estació", "d'autobusos"] },
  { t: "talking", es: "En la montaña el aire es puro y fresco.", ca: "A la muntanya l'aire és pur i fresc.", g: "Muntanya = montaña. Apostrophization (l'aire).", h: ["muntanya", "l'aire", "pur", "fresc"] },
  { t: "writing", es: "El aparcamiento está lleno, busca otro.", ca: "L'aparcament és ple, busca'n un altre.", g: "Apostrophization (l'aparcament). Enclitic pronoun 'n (busca'n).", h: ["L'aparcament", "ple", "busca'n", "un altre"] },
  { t: "talking", es: "El bosque tiene senderos muy bonitos.", ca: "El bosc té senders molt bonics.", g: "Bosc = bosque. Senders = senderos. Bonics = bonitos.", h: ["bosc", "senders", "bonics"] },
  { t: "reading", es: "¿Dónde está el hospital más cercano?", ca: "On és l'hospital més proper?", g: "On = dónde. Apostrophization (l'hospital). Proper = cercano.", h: ["On", "l'hospital", "més proper"] },
  { t: "writing", es: "Los jardines públicos cierran a las ocho.", ca: "Els jardins públics tanquen a les vuit.", g: "Tancar = cerrar (tanquen). Vuit = ocho.", h: ["jardins públics", "tanquen", "les vuit"] },
];

// ── A2: Ser, Estar, Anar, Venir ──────────────────────────────────────
const a2Verbs = [
  { t: "talking", es: "Yo voy al cine esta noche.", ca: "Jo vaig al cinema aquesta nit.", g: "Anar (vaig). Cinema = cine.", h: ["vaig", "cinema", "aquesta nit"] },
  { t: "writing", es: "Mi amigo se va de la fiesta temprano.", ca: "El meu amic se'n va de la festa d'hora.", g: "CRITICAL: anar-se'n (to leave) uses mandatory pronoun 'en'. Se'n va = se va. D'hora = temprano.", h: ["se'n va", "festa", "d'hora"] },
  { t: "talking", es: "¿Vienes a mi casa o voy yo a la tuya?", ca: "Véns a casa meva o vaig jo a la teva?", g: "Venir (véns). Casa meva (postposed possessive without article).", h: ["Véns", "casa meva", "la teva"] },
  { t: "reading", es: "Ellos van al colegio en autobús.", ca: "Ells van a l'escola en autobús.", g: "3rd plural anar (van). Apostrophization (l'escola).", h: ["van", "l'escola", "autobús"] },
  { t: "writing", es: "Estoy cansado porque he andado mucho.", ca: "Estic cansat perquè he caminat molt.", g: "Estar for temporary states (estic). Perquè = porque. Caminar past participle.", h: ["Estic cansat", "perquè", "he caminat"] },
  { t: "talking", es: "Ella es profesora pero hoy está enferma.", ca: "Ella és professora però avui està malalta.", g: "Ser for profession (és), estar for temporary state (està malalta).", h: ["és professora", "però", "està malalta"] },
  { t: "writing", es: "Vamos a la playa el domingo.", ca: "Anem a la platja el diumenge.", g: "1st plural anar (anem). Platja = playa. Diumenge = domingo.", h: ["Anem", "platja", "diumenge"] },
  { t: "talking", es: "Me voy de aquí, esto es aburrido.", ca: "Me'n vaig d'aquí, això és avorrit.", g: "Pronominal anar-se'n (me'n vaig). Avorrit = aburrido.", h: ["Me'n vaig", "d'aquí", "avorrit"] },
  { t: "reading", es: "¿De dónde viene este paquete?", ca: "D'on ve aquest paquet?", g: "Venir 3rd person (ve). D'on = de dónde.", h: ["D'on", "ve", "aquest paquet"] },
  { t: "writing", es: "Nosotros venimos de Barcelona en tren.", ca: "Nosaltres venim de Barcelona en tren.", g: "1st plural venir (venim).", h: ["venim", "Barcelona", "tren"] },
  { t: "talking", es: "El autobús va de Tarragona a Reus.", ca: "L'autobús va de Tarragona a Reus.", g: "Apostrophization (l'autobús). Anar for routes/transport.", h: ["L'autobús", "va"] },
  { t: "writing", es: "Nos vamos de vacaciones mañana.", ca: "Ens n'anem de vacances demà.", g: "1st plural anar-se'n: ens + en = ens n'anem. Vacances = vacaciones.", h: ["Ens n'anem", "vacances", "demà"] },
  { t: "talking", es: "¿Estáis contentos o estáis tristes?", ca: "Esteu contents o esteu tristos?", g: "2nd plural estar (esteu). Temporary emotional states.", h: ["Esteu", "contents", "tristos"] },
  { t: "reading", es: "Él es alto y delgado.", ca: "Ell és alt i prim.", g: "Ser for permanent qualities. Prim = delgado.", h: ["és", "alt", "prim"] },
  { t: "writing", es: "La sopa está caliente, ten cuidado.", ca: "La sopa és calenta, ves amb compte.", g: "Use 'és' for temperature of food (inherent quality). Ves amb compte = ten cuidado.", h: ["és calenta", "ves amb compte"] },
  { t: "talking", es: "¿Vais al supermercado o al mercado?", ca: "Aneu al supermercat o al mercat?", g: "2nd plural anar (aneu).", h: ["Aneu", "supermercat", "mercat"] },
  { t: "writing", es: "Se van todos a la una del mediodía.", ca: "Se'n van tots a la una del migdia.", g: "3rd plural anar-se'n (se'n van). Migdia = mediodía.", h: ["Se'n van", "tots", "migdia"] },
  { t: "talking", es: "Venid a casa a las cinco, por favor.", ca: "Veniu a casa a les cinc, si us plau.", g: "Imperative venir (veniu). Si us plau = por favor.", h: ["Veniu", "a les cinc", "si us plau"] },
  { t: "reading", es: "¿Está abierta la tienda? Sí, está abierta.", ca: "Està oberta la botiga? Sí, està oberta.", g: "Estar for current state. Oberta = abierta. Botiga = tienda.", h: ["Està oberta", "botiga"] },
  { t: "writing", es: "Yo soy de aquí pero mi marido es de Lleida.", ca: "Jo sóc d'aquí però el meu marit és de Lleida.", g: "Ser for origin. Possessive with article (el meu marit).", h: ["sóc d'aquí", "el meu marit", "és"] },
];

// ── A2: Planes de Futuro ─────────────────────────────────────────────
const a2Futuro = [
  { t: "talking", es: "Mañana estudiaré todo el día.", ca: "Demà estudiaré tot el dia.", g: "Future indicative (estudiaré). Demà = mañana.", h: ["Demà", "estudiaré", "tot el dia"] },
  { t: "writing", es: "¿Qué harás este verano?", ca: "Què faràs aquest estiu?", g: "Future of fer (faràs). Estiu = verano.", h: ["Què faràs", "aquest estiu"] },
  { t: "talking", es: "Ella querrá ir de vacaciones a Italia.", ca: "Ella voldrà anar de vacances a Itàlia.", g: "Future of voler (voldrà). Vacances = vacaciones.", h: ["voldrà", "vacances", "Itàlia"] },
  { t: "reading", es: "Nosotros viajaremos por toda Europa.", ca: "Nosaltres viatjarem per tota Europa.", g: "Future 1st plural (viatjarem).", h: ["viatjarem", "tota Europa"] },
  { t: "writing", es: "¿Podrías ayudarme con esto, por favor?", ca: "Podries ajudar-me amb això, si us plau?", g: "Conditional of poder (podries). Polite request.", h: ["Podries", "ajudar-me", "si us plau"] },
  { t: "talking", es: "Me gustaría ser médico cuando sea mayor.", ca: "M'agradaria ser metge quan sigui gran.", g: "Conditional (m'agradaria). Sigui = subjunctive of ser.", h: ["M'agradaria", "metge", "quan sigui gran"] },
  { t: "writing", es: "Ellos vendrán a la boda el sábado.", ca: "Ells vindran a la boda el dissabte.", g: "Future of venir (vindran). Dissabte = sábado.", h: ["vindran", "boda", "dissabte"] },
  { t: "talking", es: "¿Cuándo terminarás el proyecto?", ca: "Quan acabaràs el projecte?", g: "Future of acabar (acabaràs). Projecte = proyecto.", h: ["Quan", "acabaràs", "projecte"] },
  { t: "reading", es: "Compraremos una casa con jardín.", ca: "Comprarem una casa amb jardí.", g: "Future 1st plural (comprarem). Jardí = jardín.", h: ["Comprarem", "amb", "jardí"] },
  { t: "writing", es: "Si tuviera dinero, viajaría a Japón.", ca: "Si tingués diners, viatjaria al Japó.", g: "Conditional (viatjaria). Tingués = imperfect subjunctive of tenir.", h: ["Si tingués", "diners", "viatjaria"] },
  { t: "talking", es: "Yo seré abogado y tú serás ingeniero.", ca: "Jo seré advocat i tu seràs enginyer.", g: "Future of ser (seré, seràs). Advocat = abogado.", h: ["seré", "advocat", "seràs", "enginyer"] },
  { t: "writing", es: "¿Dónde viviremos cuando nos jubilemos?", ca: "On viurem quan ens jubilem?", g: "Future of viure (viurem). Jubilar-se reflexive.", h: ["On viurem", "ens jubilem"] },
  { t: "talking", es: "Les diremos la verdad esta tarde.", ca: "Els direm la veritat aquesta tarda.", g: "Future of dir (direm). Veritat = verdad.", h: ["Els direm", "veritat", "aquesta tarda"] },
  { t: "reading", es: "Habrá una reunión importante el lunes.", ca: "Hi haurà una reunió important el dilluns.", g: "Future of haver-hi (hi haurà). Dilluns = lunes.", h: ["Hi haurà", "reunió", "dilluns"] },
  { t: "writing", es: "Comeríamos fuera si no lloviera.", ca: "Dinaríem fora si no plogués.", g: "Conditional of dinar (dinaríem). Imperfect subjunctive of ploure (plogués).", h: ["Dinaríem", "fora", "plogués"] },
  { t: "talking", es: "Tendrás que trabajar más duro.", ca: "Hauràs de treballar més dur.", g: "Future of haver (hauràs). Obligation = haver de + inf.", h: ["Hauràs de", "treballar", "més dur"] },
  { t: "writing", es: "El año que viene aprenderé a cocinar.", ca: "L'any que ve aprendré a cuinar.", g: "Future of aprendre (aprendré). Cuinar = cocinar.", h: ["L'any que ve", "aprendré", "cuinar"] },
  { t: "talking", es: "Nos mudaremos a un piso más grande.", ca: "Ens mudarem a un pis més gran.", g: "Future of mudar-se (ens mudarem). Pis = piso.", h: ["Ens mudarem", "pis", "més gran"] },
  { t: "reading", es: "¿Saldrás con nosotros el viernes?", ca: "Sortiràs amb nosaltres el divendres?", g: "Future of sortir (sortiràs). Divendres = viernes.", h: ["Sortiràs", "nosaltres", "divendres"] },
  { t: "writing", es: "Yo pondría la mesa si me lo pidieras.", ca: "Jo pararia taula si m'ho demanessis.", g: "Conditional of parar (pararia). Parar taula = poner la mesa (idiom).", h: ["pararia taula", "m'ho demanessis"] },
];

// ── A2: De Compras (False Friends) ───────────────────────────────────
const a2Compras = [
  { t: "talking", es: "Quiero comprar ropa nueva para el invierno.", ca: "Vull comprar roba nova per a l'hivern.", g: "FALSE FRIEND TRAP: roba = clothes (NOT steal). L'hivern = invierno.", h: ["roba", "nova", "l'hivern"] },
  { t: "writing", es: "Me duele la pierna izquierda desde ayer.", ca: "Em fa mal la cama esquerra des d'ahir.", g: "FALSE FRIEND TRAP: cama = leg (NOT bed). Bed = llit. Fer mal = doler.", h: ["cama", "esquerra", "des d'ahir"] },
  { t: "talking", es: "Necesito un vaso de agua, tengo sed.", ca: "Necessito un got d'aigua, tinc set.", g: "Got = vaso. Apostrophization (d'aigua). Set = sed.", h: ["got", "d'aigua", "set"] },
  { t: "reading", es: "Esta tienda vende bolsos y zapatos.", ca: "Aquesta botiga ven bosses i sabates.", g: "Bosses = bolsos. Sabates = zapatos. Botiga = tienda.", h: ["botiga", "ven", "bosses", "sabates"] },
  { t: "writing", es: "¿Cuánto cuesta esta chaqueta azul?", ca: "Quant val aquesta jaqueta blava?", g: "Valer = costar (val). Jaqueta = chaqueta. Blava = azul (feminine).", h: ["Quant val", "jaqueta", "blava"] },
  { t: "talking", es: "La camiseta roja está en oferta.", ca: "La samarreta vermella és de rebaixa.", g: "Samarreta = camiseta. Vermella = roja. De rebaixa = en oferta.", h: ["samarreta", "vermella", "de rebaixa"] },
  { t: "writing", es: "Busco unos pantalones negros de mi talla.", ca: "Busco uns pantalons negres de la meva talla.", g: "Possessive with article (la meva talla).", h: ["pantalons", "negres", "la meva talla"] },
  { t: "talking", es: "¿Puedo probarme este vestido?", ca: "Em puc emprovar aquest vestit?", g: "Emprovar-se = probarse. Pronoun before conjugated verb (em puc).", h: ["Em puc emprovar", "vestit"] },
  { t: "reading", es: "La falda es demasiado larga, ¿tiene otra más corta?", ca: "La faldilla és massa llarga, en té una altra de més curta?", g: "Faldilla = falda. Massa = demasiado. Partitive 'en'.", h: ["faldilla", "massa", "llarga", "curta"] },
  { t: "writing", es: "¿Aceptan tarjeta de crédito o solo efectivo?", ca: "Accepten targeta de crèdit o només efectiu?", g: "Targeta = tarjeta. Només = solo. Efectiu = efectivo.", h: ["Accepten", "targeta", "només", "efectiu"] },
  { t: "talking", es: "Me llevo estos dos jerseys y aquella bufanda.", ca: "M'emporto aquests dos jersis i aquella bufanda.", g: "Emportar-se = llevarse. Aquests = estos. Aquella = aquella.", h: ["M'emporto", "aquests", "jersis", "aquella"] },
  { t: "writing", es: "El probador está al fondo a la derecha.", ca: "L'emprovador és al fons a la dreta.", g: "Emprovador = probador. Al fons = al fondo.", h: ["L'emprovador", "al fons", "dreta"] },
  { t: "talking", es: "Mi esposa necesita unas botas marrones.", ca: "La meva esposa necessita unes botes marrons.", g: "Possessive with article (la meva esposa). Botes = botas.", h: ["La meva esposa", "necessita", "botes"] },
  { t: "reading", es: "Las rebajas empiezan la semana que viene.", ca: "Les rebaixes comencen la setmana que ve.", g: "Rebaixes = rebajas. Començar = empezar. Setmana = semana.", h: ["rebaixes", "comencen", "setmana que ve"] },
  { t: "writing", es: "Este abrigo de lana es muy caro.", ca: "Aquest abric de llana és molt car.", g: "Abric = abrigo. Llana = lana. Car = caro.", h: ["abric", "llana", "car"] },
  { t: "talking", es: "¿Tienen este modelo en otra talla?", ca: "Tenen aquest model en una altra talla?", g: "Verb tenir 3rd plural (tenen). Altra = otra.", h: ["Tenen", "model", "altra talla"] },
  { t: "writing", es: "Quiero devolver esta camisa, está rota.", ca: "Vull tornar aquesta camisa, és trencada.", g: "Tornar = devolver. Trencada = rota.", h: ["Vull tornar", "camisa", "trencada"] },
  { t: "talking", es: "Las gafas de sol cuestan treinta euros.", ca: "Les ulleres de sol costen trenta euros.", g: "Ulleres = gafas. Costar 3rd plural (costen).", h: ["ulleres de sol", "costen", "trenta"] },
  { t: "reading", es: "El cinturón de cuero está en el escaparate.", ca: "El cinturó de cuir és a l'aparador.", g: "Cinturó = cinturón. Cuir = cuero. Aparador = escaparate.", h: ["cinturó", "cuir", "l'aparador"] },
  { t: "writing", es: "Necesito comprar ropa interior y calcetines.", ca: "Necessito comprar roba interior i mitjons.", g: "FALSE FRIEND: roba interior = ropa interior. Mitjons = calcetines.", h: ["roba interior", "mitjons"] },
];

// ═══════════════════════════════════════════════════════════════════════
// LEVEL B1 — AVANZADO (Situational Adaptability)
// ═══════════════════════════════════════════════════════════════════════

// ── B1: Dudas y Deseos (Subjuntivo) ──────────────────────────────────
const b1Subjuntivo = [
  { t: "talking", es: "No creo que él sepa la respuesta.", ca: "No crec que ell sàpiga la resposta.", g: "Negative belief triggers subjunctive. Irregular saber → sàpiga.", h: ["No crec que", "sàpiga", "resposta"] },
  { t: "writing", es: "Quiero que vengas a cenar conmigo.", ca: "Vull que vinguis a sopar amb mi.", g: "Volition triggers subjunctive. Venir → vinguis.", h: ["Vull que", "vinguis", "sopar"] },
  { t: "talking", es: "Dudo que haga buen tiempo mañana.", ca: "Dubto que faci bon temps demà.", g: "Doubt triggers subjunctive. Fer → faci.", h: ["Dubto que", "faci", "bon temps"] },
  { t: "reading", es: "Es posible que llueva esta tarde.", ca: "És possible que plogui aquesta tarda.", g: "Impersonal expression triggers subjunctive. Ploure → plogui.", h: ["És possible", "plogui", "aquesta tarda"] },
  { t: "writing", es: "Me alegro de que estés bien.", ca: "M'alegro que estiguis bé.", g: "Emotion triggers subjunctive. Estar → estiguis. No preposition 'de' in Catalan.", h: ["M'alegro que", "estiguis", "bé"] },
  { t: "talking", es: "No pienso que sea una buena idea.", ca: "No penso que sigui una bona idea.", g: "Negative thinking triggers subjunctive. Ser → sigui.", h: ["No penso que", "sigui", "bona idea"] },
  { t: "writing", es: "Espero que puedas venir a la fiesta.", ca: "Espero que puguis venir a la festa.", g: "Hope triggers subjunctive. Poder → puguis.", h: ["Espero que", "puguis", "festa"] },
  { t: "talking", es: "Necesito que hagas los deberes ahora.", ca: "Necessito que facis els deures ara.", g: "Necessity triggers subjunctive. Fer → facis.", h: ["Necessito que", "facis", "deures"] },
  { t: "reading", es: "Me sorprende que no diga nada.", ca: "Em sorprèn que no digui res.", g: "Surprise triggers subjunctive. Dir → digui. Res = nada.", h: ["Em sorprèn", "no digui", "res"] },
  { t: "writing", es: "Ojalá tengamos suerte en el examen.", ca: "Tant de bo tinguem sort a l'examen.", g: "Tant de bo = ojalá. Tenir → tinguem.", h: ["Tant de bo", "tinguem", "sort"] },
  { t: "talking", es: "Le pido que escriba una carta.", ca: "Li demano que escrigui una carta.", g: "Request triggers subjunctive. Escriure → escrigui.", h: ["Li demano que", "escrigui", "carta"] },
  { t: "writing", es: "Es necesario que vayas al médico.", ca: "Cal que vagis al metge.", g: "Cal que = es necesario que. Anar → vagis.", h: ["Cal que", "vagis", "metge"] },
  { t: "talking", es: "Temo que no lleguen a tiempo.", ca: "Temo que no arribin a temps.", g: "Fear triggers subjunctive. Arribar → arribin.", h: ["Temo que", "arribin", "a temps"] },
  { t: "reading", es: "Busco alguien que hable catalán.", ca: "Busco algú que parli català.", g: "Relative clause with indefinite antecedent triggers subjunctive. Parlar → parli.", h: ["Busco algú", "parli", "català"] },
  { t: "writing", es: "No hay nadie que conozca esta ciudad mejor.", ca: "No hi ha ningú que conegui aquesta ciutat millor.", g: "Negative antecedent triggers subjunctive. Conèixer → conegui.", h: ["No hi ha ningú", "conegui", "millor"] },
  { t: "talking", es: "Es importante que estudiemos cada día.", ca: "És important que estudiem cada dia.", g: "Impersonal expression triggers subjunctive (estudiem).", h: ["És important que", "estudiem", "cada dia"] },
  { t: "writing", es: "Prefiero que no salgas solo de noche.", ca: "Prefereixo que no surtis sol de nit.", g: "Preference triggers subjunctive. Sortir → surtis.", h: ["Prefereixo que", "no surtis", "de nit"] },
  { t: "talking", es: "No es verdad que ella mienta.", ca: "No és veritat que ella menteixi.", g: "Negated truth triggers subjunctive. Mentir → menteixi (incoative).", h: ["No és veritat", "menteixi"] },
  { t: "reading", es: "Antes de que te vayas, cierra la puerta.", ca: "Abans que te'n vagis, tanca la porta.", g: "Temporal subjunctive. Anar-se'n → te'n vagis.", h: ["Abans que", "te'n vagis", "tanca"] },
  { t: "writing", es: "Les prohibo que usen el teléfono en clase.", ca: "Els prohibeixo que facin servir el telèfon a classe.", g: "Prohibition triggers subjunctive. Usar = fer servir (Catalan idiom). Fer → facin.", h: ["Els prohibeixo", "facin servir", "telèfon"] },
];

// ── B1: Obligaciones y Necesidad ─────────────────────────────────────
const b1Obligacion = [
  { t: "talking", es: "Tenemos que ir al supermercado.", ca: "Hem d'anar al supermercat.", g: "TRAP: Spanish 'tener que' → Catalan 'haver de'. Never use 'tenim que'.", h: ["Hem d'anar", "supermercat"] },
  { t: "writing", es: "Hay que limpiar la casa antes de la fiesta.", ca: "Cal netejar la casa abans de la festa.", g: "Impersonal necessity: cal + infinitive. Never translate 'hay que' literally.", h: ["Cal netejar", "abans de", "festa"] },
  { t: "talking", es: "Debes estudiar más para aprobar.", ca: "Has d'estudiar més per aprovar.", g: "2nd person obligation: has de + infinitive.", h: ["Has d'estudiar", "per aprovar"] },
  { t: "reading", es: "Es necesario que todos participen.", ca: "Cal que tothom hi participi.", g: "Cal que + subjunctive for personal necessity. Tothom = todos.", h: ["Cal que", "tothom", "participi"] },
  { t: "writing", es: "Tienen que pagar la factura antes del viernes.", ca: "Han de pagar la factura abans de divendres.", g: "3rd plural obligation: han de + infinitive.", h: ["Han de pagar", "factura", "divendres"] },
  { t: "talking", es: "No hace falta que vengas tan temprano.", ca: "No cal que vinguis tan d'hora.", g: "Negative impersonal: no cal que + subjunctive.", h: ["No cal que", "vinguis", "d'hora"] },
  { t: "writing", es: "Tengo que levantarme a las seis mañana.", ca: "He de llevar-me a les sis demà.", g: "1st person obligation with reflexive: he de + infinitive-me.", h: ["He de llevar-me", "les sis", "demà"] },
  { t: "talking", es: "Hay que tener cuidado con el perro.", ca: "Cal anar amb compte amb el gos.", g: "Impersonal: cal + infinitive. Anar amb compte = tener cuidado.", h: ["Cal", "anar amb compte", "gos"] },
  { t: "reading", es: "Debéis traer los libros a clase.", ca: "Heu de portar els llibres a classe.", g: "2nd plural obligation: heu de + infinitive. Portar = traer.", h: ["Heu de portar", "llibres", "classe"] },
  { t: "writing", es: "No tienes que preocuparte por eso.", ca: "No has de preocupar-te per això.", g: "Negative obligation (no has de). Preocupar-se.", h: ["No has de", "preocupar-te", "per això"] },
  { t: "talking", es: "Es necesario renovar el pasaporte.", ca: "Cal renovar el passaport.", g: "Impersonal cal + infinitive for necessity.", h: ["Cal renovar", "passaport"] },
  { t: "writing", es: "Debemos respetar las normas de convivencia.", ca: "Hem de respectar les normes de convivència.", g: "1st plural obligation (hem de). Normes = normas.", h: ["Hem de respectar", "normes", "convivència"] },
  { t: "talking", es: "Hay que reservar mesa con antelación.", ca: "Cal reservar taula amb antelació.", g: "Cal + infinitive. Taula = mesa.", h: ["Cal reservar", "taula", "antelació"] },
  { t: "reading", es: "Tienen que declarar todos sus ingresos.", ca: "Han de declarar tots els seus ingressos.", g: "Han de + infinitive. Tots els seus = todos sus.", h: ["Han de declarar", "tots els seus", "ingressos"] },
  { t: "writing", es: "Es imprescindible que acabemos hoy.", ca: "Cal que acabem avui.", g: "Cal que + subjunctive. Acabar = terminar.", h: ["Cal que", "acabem", "avui"] },
  { t: "talking", es: "No hace falta que compres pan, ya hay.", ca: "No cal que compris pa, ja n'hi ha.", g: "No cal que + subjunctive. Partitive 'n' with haver-hi.", h: ["No cal que", "compris", "n'hi ha"] },
  { t: "writing", es: "Deben llevar uniforme todos los días.", ca: "Han de dur uniforme cada dia.", g: "Dur = llevar (ropa). Han de + infinitive.", h: ["Han de dur", "uniforme", "cada dia"] },
  { t: "talking", es: "Tendrás que repetir el examen.", ca: "Hauràs de repetir l'examen.", g: "Future obligation: hauràs de + infinitive.", h: ["Hauràs de", "repetir", "l'examen"] },
  { t: "reading", es: "Hace falta más dinero para el proyecto.", ca: "Calen més diners per al projecte.", g: "Plural subject uses 'calen' (not 'cal'). Diners (plural in Catalan).", h: ["Calen", "diners", "per al projecte"] },
  { t: "writing", es: "Habría que llamar a un electricista.", ca: "Caldria trucar un electricista.", g: "Conditional impersonal: caldria + infinitive. Trucar = llamar.", h: ["Caldria", "trucar", "electricista"] },
];

// ── B1: En el Médico ─────────────────────────────────────────────────
const b1Medico = [
  { t: "talking", es: "Me duele mucho la cabeza desde esta mañana.", ca: "Em fa molt de mal el cap des d'aquest matí.", g: "Fer mal = doler (NOT doldre). Cap = cabeza.", h: ["Em fa mal", "el cap", "des d'aquest matí"] },
  { t: "writing", es: "Tengo fiebre y me encuentro muy mal.", ca: "Tinc febre i em trobo molt malament.", g: "Trobar-se malament = encontrarse mal.", h: ["febre", "em trobo", "malament"] },
  { t: "talking", es: "¿Le duele aquí? Sí, me duele mucho.", ca: "Li fa mal aquí? Sí, em fa molt de mal.", g: "Fer mal with indirect pronouns (li, em).", h: ["Li fa mal", "em fa mal"] },
  { t: "reading", es: "Necesito una receta para estos antibióticos.", ca: "Necessito una recepta per a aquests antibiòtics.", g: "Recepta = receta. Per a = para.", h: ["recepta", "per a", "antibiòtics"] },
  { t: "writing", es: "Tengo tos y me duele la garganta.", ca: "Tinc tos i em fa mal la gola.", g: "Tos = tos (same). Gola = garganta.", h: ["tos", "em fa mal", "gola"] },
  { t: "talking", es: "Me he roto el brazo jugando al fútbol.", ca: "M'he trencat el braç jugant a futbol.", g: "Trencar-se = romperse. Braç = brazo.", h: ["M'he trencat", "braç", "jugant"] },
  { t: "writing", es: "¿Tiene alergia a algún medicamento?", ca: "Té al·lèrgia a algun medicament?", g: "Al·lèrgia with geminated l (l·l). Unique Catalan orthography.", h: ["al·lèrgia", "algun", "medicament"] },
  { t: "talking", es: "El médico me ha recetado unas pastillas.", ca: "El metge m'ha receptat unes pastilles.", g: "Metge = médico. Receptar = recetar. Pastilles = pastillas.", h: ["metge", "receptat", "pastilles"] },
  { t: "reading", es: "Me mareo cuando me levanto rápido.", ca: "Em marejó quan em llevo de pressa.", g: "Marejar-se = marearse. De pressa = rápido.", h: ["Em marejó", "em llevo", "de pressa"] },
  { t: "writing", es: "La enfermera me ha puesto una inyección.", ca: "La infermera m'ha posat una injecció.", g: "Infermera = enfermera. Posar = poner.", h: ["infermera", "posat", "injecció"] },
  { t: "talking", es: "Tengo dolor de estómago desde ayer.", ca: "Tinc mal d'estómac des d'ahir.", g: "Mal de = dolor de. D'estómac (apostrophization).", h: ["mal d'estómac", "des d'ahir"] },
  { t: "writing", es: "¿Cada cuántas horas tengo que tomar la pastilla?", ca: "Cada quantes hores he de prendre la pastilla?", g: "Obligation (he de). Prendre = tomar. Quantes (feminine).", h: ["Cada quantes hores", "he de prendre"] },
  { t: "talking", es: "Necesito pedir cita con el dentista.", ca: "Necessito demanar hora amb el dentista.", g: "Demanar hora = pedir cita. Catalan idiom.", h: ["demanar hora", "dentista"] },
  { t: "reading", es: "Me he torcido el tobillo haciendo deporte.", ca: "M'he torçat el turmell fent esport.", g: "Torçar = torcer. Turmell = tobillo.", h: ["torçat", "turmell", "fent esport"] },
  { t: "writing", es: "La herida sangra mucho, necesita puntos.", ca: "La ferida sagna molt, necessita punts.", g: "Ferida = herida. Sagnar = sangrar. Punts = puntos.", h: ["ferida", "sagna", "punts"] },
  { t: "talking", es: "¿Cuándo fue la última vez que se hizo un análisis?", ca: "Quan va ser l'última vegada que es va fer una analítica?", g: "Periphrastic past (va ser, es va fer). Analítica = análisis.", h: ["Quan va ser", "es va fer", "analítica"] },
  { t: "writing", es: "Me pica mucho la espalda.", ca: "Em pica molt l'esquena.", g: "Picar = picar (same). L'esquena = la espalda (apostrophization).", h: ["Em pica", "l'esquena"] },
  { t: "talking", es: "He vomitado tres veces esta noche.", ca: "He vomitat tres vegades aquesta nit.", g: "Vomitar past participle (vomitat). Vegades = veces.", h: ["He vomitat", "vegades", "aquesta nit"] },
  { t: "reading", es: "El hospital no tiene urgencias abiertas hoy.", ca: "L'hospital no té urgències obertes avui.", g: "Apostrophization (l'hospital). Urgències = urgencias.", h: ["L'hospital", "urgències", "obertes"] },
  { t: "writing", es: "Tiene que guardar reposo durante una semana.", ca: "Ha de fer repòs durant una setmana.", g: "Fer repòs = guardar reposo (Catalan idiom). Ha de = tiene que.", h: ["Ha de fer repòs", "durant", "setmana"] },
];

// ── B1: Festividades y Tradiciones ───────────────────────────────────
const b1Fiestas = [
  { t: "talking", es: "Para Sant Jordi regalamos libros y rosas.", ca: "Per Sant Jordi regalem llibres i roses.", g: "Cultural tradition of Sant Jordi (April 23). Per = para.", h: ["Per Sant Jordi", "regalem", "llibres", "roses"] },
  { t: "writing", es: "Los castellers hacen torres humanas muy altas.", ca: "Els castellers fan castells humans molt alts.", g: "Castells = towers (not castillos). Fer castells = hacer castillos/torres.", h: ["castellers", "fan castells", "molt alts"] },
  { t: "talking", es: "La Diada es el once de septiembre.", ca: "La Diada és l'onze de setembre.", g: "Catalan National Day. Apostrophization (l'onze). Setembre = septiembre.", h: ["La Diada", "l'onze", "setembre"] },
  { t: "reading", es: "En la noche de San Juan encendemos hogueras.", ca: "La nit de Sant Joan encenenim fogueres.", g: "Sant Joan = San Juan. Fogueres = hogueras.", h: ["Sant Joan", "encenenim", "fogueres"] },
  { t: "writing", es: "El Caga Tió es una tradición navideña catalana.", ca: "El Caga Tió és una tradició nadalenca catalana.", g: "Nadalenca = navideña (from Nadal = Navidad).", h: ["Caga Tió", "tradició", "nadalenca"] },
  { t: "talking", es: "En la Festa Major del pueblo hay gigantes y cabezudos.", ca: "A la Festa Major del poble hi ha gegants i capgrossos.", g: "Gegants = gigantes. Capgrossos = cabezudos.", h: ["Festa Major", "gegants", "capgrossos"] },
  { t: "writing", es: "Las fallas de Valencia son espectaculares.", ca: "Les falles de València són espectaculars.", g: "Falles = fallas. Note different spelling of València.", h: ["falles", "València", "espectaculars"] },
  { t: "talking", es: "El día de Reyes los niños reciben regalos.", ca: "El dia de Reis els nens reben regals.", g: "Reis = Reyes. Reben = reciben. Regals = regalos.", h: ["Reis", "reben", "regals"] },
  { t: "reading", es: "La sardana es el baile tradicional catalán.", ca: "La sardana és el ball tradicional català.", g: "Ball = baile. Cultural knowledge: sardana.", h: ["sardana", "ball tradicional"] },
  { t: "writing", es: "En Nochevieja comemos doce uvas a medianoche.", ca: "Per Cap d'Any mengem dotze grans de raïm a mitjanit.", g: "Cap d'Any = Nochevieja. Grans de raïm = uvas (grain of grape). Mitjanit = medianoche.", h: ["Cap d'Any", "grans de raïm", "mitjanit"] },
  { t: "talking", es: "Los correfocs son desfiles con fuego y diablos.", ca: "Els correfocs són desfilades amb foc i diables.", g: "Correfocs = fire runs. Foc = fuego. Diables = diablos.", h: ["correfocs", "desfilades", "foc", "diables"] },
  { t: "writing", es: "Las castañas se comen el día de Todos los Santos.", ca: "Les castanyes es mengen per Tots Sants.", g: "Castanyes = castañas. Tots Sants = Todos los Santos. Passive reflexive.", h: ["castanyes", "es mengen", "Tots Sants"] },
  { t: "talking", es: "El pesebre es una tradición navideña muy popular.", ca: "El pessebre és una tradició nadalenca molt popular.", g: "Pessebre = pesebre/belén. Nadalenca = navideña.", h: ["pessebre", "nadalenca", "popular"] },
  { t: "reading", es: "La verbena de San Juan es la noche más mágica del año.", ca: "La revetlla de Sant Joan és la nit més màgica de l'any.", g: "Revetlla = verbena. L'any = el año (apostrophization).", h: ["revetlla", "Sant Joan", "màgica", "l'any"] },
  { t: "writing", es: "En Carnaval la gente se disfraza y sale a bailar.", ca: "Per Carnestoltes la gent es disfressa i surt a ballar.", g: "Carnestoltes = Carnaval. Disfressar-se. Ballar = bailar.", h: ["Carnestoltes", "es disfressa", "ballar"] },
  { t: "talking", es: "La Patum de Berga es Patrimonio de la Humanidad.", ca: "La Patum de Berga és Patrimoni de la Humanitat.", g: "Cultural knowledge. Patrimoni = Patrimonio.", h: ["La Patum", "Patrimoni", "Humanitat"] },
  { t: "writing", es: "El primer domingo de octubre se celebra la castañada.", ca: "El primer diumenge d'octubre se celebra la castanyada.", g: "Castanyada = castañada. Diumenge = domingo.", h: ["primer diumenge", "d'octubre", "castanyada"] },
  { t: "talking", es: "Los pastorcillos son obras de teatro navideñas.", ca: "Els pastorets són obres de teatre nadalenques.", g: "Pastorets = pastorcillos. Obres = obras. Nadalenques (fem plural).", h: ["pastorets", "obres", "nadalenques"] },
  { t: "reading", es: "En Semana Santa se hacen procesiones por las calles.", ca: "Per Setmana Santa es fan processons pels carrers.", g: "Setmana Santa. Es fan = se hacen. Pels = per + els.", h: ["Setmana Santa", "es fan", "processons", "pels carrers"] },
  { t: "writing", es: "La caganer es una figurilla típica del pesebre catalán.", ca: "El caganer és una figureta típica del pessebre català.", g: "El caganer (masculine). Figureta = figurilla.", h: ["caganer", "figureta", "pessebre"] },
];

// ═══════════════════════════════════════════════════════════════════════
// LEVEL B2 — INTERMEDIO-ALTO (Complex Syntax)
// ═══════════════════════════════════════════════════════════════════════

// ── B2: Pronombres Débiles (Mastery) ─────────────────────────────────
const b2Pronoms = [
  { t: "talking", es: "El libro, se lo doy a ella.", ca: "El llibre, l'hi dono.", g: "DO 'el' + IO 'li' = l'hi. Most difficult Catalan combination.", h: ["l'hi dono"] },
  { t: "writing", es: "¿Manzanas? Dame dos.", ca: "Pomes? Dóna-me'n dues.", g: "Partitive 'en' for unspecified quantity. Enclitic: dóna-me'n.", h: ["Dóna-me'n", "dues"] },
  { t: "talking", es: "Me voy de aquí ahora mismo.", ca: "Me'n vaig d'aquí ara mateix.", g: "Anar-se'n: me + en = me'n vaig.", h: ["Me'n vaig", "ara mateix"] },
  { t: "writing", es: "¿Has visto a María? Sí, la he visto esta mañana.", ca: "Has vist la Maria? Sí, l'he vista aquest matí.", g: "DO feminine pronoun (la → l'). Past participle agrees in gender (vista).", h: ["l'he vista", "aquest matí"] },
  { t: "talking", es: "¿Hay leche? No, no hay.", ca: "Hi ha llet? No, no n'hi ha.", g: "Partitive 'en' with haver-hi: n'hi ha = hay (de eso).", h: ["Hi ha", "no n'hi ha"] },
  { t: "reading", es: "¿Le diste las llaves? Sí, se las di.", ca: "Li vas donar les claus? Sí, les hi vaig donar.", g: "Combination: les (DO) + hi (replaces li). Les hi.", h: ["Li vas donar", "les hi vaig donar"] },
  { t: "writing", es: "Ponlo ahí encima de la mesa.", ca: "Posa-l'hi a sobre de la taula.", g: "DO 'lo' + locative 'hi' = l'hi (enclitic). Posa-l'hi.", h: ["Posa-l'hi", "a sobre", "taula"] },
  { t: "talking", es: "¿Cuántas tienes? Tengo tres.", ca: "Quantes en tens? En tinc tres.", g: "Partitive 'en' for counting: en tens, en tinc.", h: ["Quantes en tens", "En tinc tres"] },
  { t: "writing", es: "No me hables de eso, no quiero saber nada.", ca: "No me'n parlis, no en vull saber res.", g: "Partitive 'en' (de eso). No me'n parlis. En vull saber.", h: ["No me'n parlis", "no en vull saber"] },
  { t: "talking", es: "Se los enviaré mañana por correo.", ca: "Els hi enviaré demà per correu.", g: "DO 'los' + IO 'les' = els hi.", h: ["Els hi enviaré", "per correu"] },
  { t: "reading", es: "¿Te acuerdas de la película? Sí, me acuerdo.", ca: "Te'n recordes de la pel·lícula? Sí, me'n recordo.", g: "Recordar-se'n: pronominal with 'en'. Geminated l (l·l).", h: ["Te'n recordes", "me'n recordo", "pel·lícula"] },
  { t: "writing", es: "Dile que venga.", ca: "Digues-li que vingui.", g: "Imperative with enclitic: digues-li. Subjunctive vingui.", h: ["Digues-li", "vingui"] },
  { t: "talking", es: "¿Quieres café? No, ya he tomado.", ca: "Vols cafè? No, ja n'he pres.", g: "Partitive 'en' (of coffee). Prendre = tomar.", h: ["Vols", "ja n'he pres"] },
  { t: "writing", es: "No se lo digas a nadie.", ca: "No ho diguis a ningú.", g: "Neuter DO 'ho' (for abstract things). Ningú = nadie.", h: ["No ho diguis", "a ningú"] },
  { t: "talking", es: "Llévame allí.", ca: "Porta-m'hi.", g: "Triple enclitic fusion: porta + me + hi = porta-m'hi.", h: ["Porta-m'hi"] },
  { t: "reading", es: "¿Vienes de la universidad? Sí, vengo de allí.", ca: "Véns de la universitat? Sí, en vinc.", g: "Adverbial 'en' replaces 'de allí' (point of origin).", h: ["Véns", "en vinc"] },
  { t: "writing", es: "¿Has ido al dentista? Sí, he ido esta mañana.", ca: "Has anat al dentista? Sí, hi he anat aquest matí.", g: "Locative 'hi' replaces 'al dentista' (destination already mentioned).", h: ["Has anat", "hi he anat"] },
  { t: "talking", es: "Díselo a tu hermana.", ca: "Digues-l'hi a la teva germana.", g: "DO 'lo' + IO implicit = l'hi (enclitic). Digues-l'hi.", h: ["Digues-l'hi", "la teva germana"] },
  { t: "writing", es: "Nos vamos de este sitio, es horrible.", ca: "Ens n'anem d'aquest lloc, és horrible.", g: "1st plural anar-se'n: ens + en = ens n'anem.", h: ["Ens n'anem", "lloc", "horrible"] },
  { t: "talking", es: "¿Le has dado el dinero? Sí, se lo he dado.", ca: "Li has donat els diners? Sí, els hi he donat.", g: "DO 'los' + IO = els hi. Diners (always plural).", h: ["Li has donat", "els hi he donat"] },
];

// ── B2: Pronombres Relativos ─────────────────────────────────────────
const b2Relativos = [
  { t: "talking", es: "El chico que vi ayer es tu primo.", ca: "El noi que vaig veure ahir és el teu cosí.", g: "Basic relative 'que' for DO. Periphrastic past (vaig veure).", h: ["noi que", "vaig veure", "cosí"] },
  { t: "writing", es: "La empresa en la cual trabajo es multinacional.", ca: "L'empresa en la qual treballo és multinacional.", g: "Prepositional relative: en la qual. Cannot use just 'que'.", h: ["en la qual", "treballo"] },
  { t: "talking", es: "La chica con quien salgo estudia derecho.", ca: "La noia amb qui surto estudia dret.", g: "Preposition + qui for persons. Dret = derecho.", h: ["amb qui", "surto", "dret"] },
  { t: "reading", es: "El restaurante donde cenamos estaba lleno.", ca: "El restaurant on vam sopar estava ple.", g: "Relative 'on' for places. Periphrastic past.", h: ["on", "vam sopar", "ple"] },
  { t: "writing", es: "El motivo por el cual te llamé es importante.", ca: "El motiu pel qual et vaig trucar és important.", g: "Pel qual = por el cual. Trucar = llamar.", h: ["pel qual", "vaig trucar"] },
  { t: "talking", es: "El tema del que hablamos es delicado.", ca: "El tema del qual vam parlar és delicat.", g: "Del qual = del que. Cannot use 'del que' directly.", h: ["del qual", "vam parlar", "delicat"] },
  { t: "writing", es: "La persona a quien escribí no ha respondido.", ca: "La persona a qui vaig escriure no ha respost.", g: "A qui for persons. Escriure past participle (respost).", h: ["a qui", "vaig escriure", "respost"] },
  { t: "talking", es: "La ciudad desde la cual viajo está lejos.", ca: "La ciutat des de la qual viatjo està lluny.", g: "Des de la qual = desde la cual.", h: ["des de la qual", "viatjo", "lluny"] },
  { t: "reading", es: "Todo lo que dices es verdad.", ca: "Tot el que dius és veritat.", g: "Tot el que = todo lo que. Neuter relative.", h: ["Tot el que", "dius", "veritat"] },
  { t: "writing", es: "La casa en que vivimos tiene tres pisos.", ca: "La casa en què vivim té tres pisos.", g: "En què (with accent on è for preposition + que).", h: ["en què", "vivim", "pisos"] },
  { t: "talking", es: "Los estudiantes, los cuales aprobaron, están contentos.", ca: "Els estudiants, els quals van aprovar, estan contents.", g: "Non-restrictive relative: els quals.", h: ["els quals", "van aprovar", "contents"] },
  { t: "writing", es: "La silla sobre la cual dejé el libro está rota.", ca: "La cadira sobre la qual vaig deixar el llibre és trencada.", g: "Sobre la qual. Cadira = silla.", h: ["sobre la qual", "cadira", "trencada"] },
  { t: "talking", es: "¿Qué es lo que quieres exactamente?", ca: "Què és el que vols exactament?", g: "Interrogative què vs relative que.", h: ["Què és el que", "vols", "exactament"] },
  { t: "reading", es: "Las razones por las cuales no vine son personales.", ca: "Les raons per les quals no vaig venir són personals.", g: "Per les quals (feminine plural relative).", h: ["per les quals", "no vaig venir", "personals"] },
  { t: "writing", es: "El profesor, cuya hija conozco, es simpático.", ca: "El professor, la filla del qual conec, és simpàtic.", g: "Catalan has NO equivalent of 'cuyo'. Must use 'del qual'.", h: ["la filla del qual", "conec", "simpàtic"] },
  { t: "talking", es: "La manera como lo explicó fue brillante.", ca: "La manera com ho va explicar va ser brillant.", g: "Relative 'com' for manner.", h: ["com ho va explicar", "brillant"] },
  { t: "writing", es: "El día en que nos conocimos fue especial.", ca: "El dia en què ens vam conèixer va ser especial.", g: "En què for temporal relative.", h: ["en què", "ens vam conèixer", "especial"] },
  { t: "talking", es: "No entiendo lo que dices.", ca: "No entenc el que dius.", g: "El que = lo que (neuter relative).", h: ["No entenc", "el que dius"] },
  { t: "reading", es: "La mujer con cuyo marido hablé es abogada.", ca: "La dona amb el marit de la qual vaig parlar és advocada.", g: "No 'cuyo' in Catalan. Use 'de la qual' construction.", h: ["amb el marit de la qual", "advocada"] },
  { t: "writing", es: "El parque donde jugábamos de niños ya no existe.", ca: "El parc on jugàvem de petits ja no existeix.", g: "Relative 'on' for places. Imperfect (jugàvem). Petits = niños.", h: ["on jugàvem", "de petits", "no existeix"] },
];

// ── B2: Entorno Laboral y Universidad ────────────────────────────────
const b2Laboral = [
  { t: "talking", es: "Usted debe firmar el contrato antes de incorporarse.", ca: "Vostè ha de signar el contracte abans d'incorporar-s'hi.", g: "Formal register (vostè). Signar = firmar. Incorporar-s'hi.", h: ["Vostè", "ha de signar", "contracte"] },
  { t: "writing", es: "Tengo una entrevista de trabajo el martes.", ca: "Tinc una entrevista de feina el dimarts.", g: "Feina = trabajo. Dimarts = martes.", h: ["entrevista de feina", "dimarts"] },
  { t: "talking", es: "¿Cuándo empieza el plazo de matrícula?", ca: "Quan comença el termini de matrícula?", g: "Termini = plazo. Començar = empezar.", h: ["Quan comença", "termini", "matrícula"] },
  { t: "reading", es: "El becario ayuda al departamento de marketing.", ca: "El becari ajuda al departament de màrqueting.", g: "Becari = becario. Màrqueting with accent.", h: ["becari", "ajuda", "departament"] },
  { t: "writing", es: "Mi currículum incluye tres años de experiencia.", ca: "El meu currículum inclou tres anys d'experiència.", g: "Possessive with article (el meu). Inclou = incluye.", h: ["El meu currículum", "inclou", "d'experiència"] },
  { t: "talking", es: "¿Podría hablar con el jefe de recursos humanos?", ca: "Podria parlar amb el cap de recursos humans?", g: "Conditional (podria). Cap = jefe.", h: ["Podria parlar", "cap", "recursos humans"] },
  { t: "writing", es: "He aprobado todas las asignaturas este semestre.", ca: "He aprovat totes les assignatures aquest semestre.", g: "Assignatures = asignaturas. Aprovat = aprobado.", h: ["He aprovat", "assignatures", "semestre"] },
  { t: "talking", es: "El horario de oficina es de nueve a cinco.", ca: "L'horari d'oficina és de nou a cinc.", g: "Apostrophization (l'horari, d'oficina).", h: ["L'horari", "d'oficina", "de nou a cinc"] },
  { t: "reading", es: "Necesito solicitar una beca de investigación.", ca: "Necessito sol·licitar una beca de recerca.", g: "Sol·licitar with geminated l (l·l). Recerca = investigación.", h: ["sol·licitar", "beca", "recerca"] },
  { t: "writing", es: "La reunión fue aplazada al jueves.", ca: "La reunió va ser ajornada a dijous.", g: "Ajornar = aplazar. Dijous = jueves.", h: ["reunió", "ajornada", "dijous"] },
  { t: "talking", es: "¿Dónde está la secretaría de la facultad?", ca: "On és la secretaria de la facultat?", g: "On = dónde. Facultat = facultad.", h: ["On és", "secretaria", "facultat"] },
  { t: "writing", es: "Mi jefa me ha dado un aumento de sueldo.", ca: "La meva cap m'ha donat un augment de sou.", g: "Cap (feminine same form). Sou = sueldo.", h: ["La meva cap", "augment", "sou"] },
  { t: "talking", es: "He presentado la tesis doctoral esta mañana.", ca: "He presentat la tesi doctoral aquest matí.", g: "Tesi = tesis. Doctoral.", h: ["He presentat", "tesi doctoral"] },
  { t: "reading", es: "Los trabajadores están de huelga por los salarios.", ca: "Els treballadors estan en vaga pels salaris.", g: "En vaga = de huelga. Pels = per + els.", h: ["treballadors", "en vaga", "salaris"] },
  { t: "writing", es: "El plazo de entrega del informe acaba mañana.", ca: "El termini de lliurament de l'informe s'acaba demà.", g: "Lliurament = entrega. Apostrophization (l'informe).", h: ["termini", "lliurament", "l'informe"] },
  { t: "talking", es: "¿Tiene usted experiencia previa en este sector?", ca: "Té vostè experiència prèvia en aquest sector?", g: "Formal register. Prèvia = previa.", h: ["Té vostè", "experiència prèvia", "sector"] },
  { t: "writing", es: "La empresa busca un ingeniero con nivel alto de catalán.", ca: "L'empresa busca un enginyer amb nivell alt de català.", g: "Enginyer = ingeniero. Nivell = nivel.", h: ["L'empresa", "enginyer", "nivell"] },
  { t: "talking", es: "Me han despedido sin previo aviso.", ca: "M'han acomiadat sense avís previ.", g: "Acomiadar = despedir. Sense = sin.", h: ["M'han acomiadat", "sense", "avís previ"] },
  { t: "reading", es: "El seminario sobre inteligencia artificial es a las cuatro.", ca: "El seminari sobre intel·ligència artificial és a les quatre.", g: "Intel·ligència with geminated l (l·l).", h: ["seminari", "intel·ligència artificial", "les quatre"] },
  { t: "writing", es: "Voy a pedir un permiso de maternidad.", ca: "Demanaré un permís de maternitat.", g: "Permís = permiso. Maternitat = maternidad. Future tense.", h: ["Demanaré", "permís", "maternitat"] },
];

// ── B2: Conectores Argumentativos ────────────────────────────────────
const b2Conectores = [
  { t: "writing", es: "A pesar de que llovía, fuimos al parque.", ca: "Malgrat que plovia, hi vam anar al parc.", g: "Concessive: malgrat que. Locative 'hi' with anar.", h: ["Malgrat que", "plovia", "hi vam anar"] },
  { t: "talking", es: "No solo habla catalán, sino que también habla francés.", ca: "No només parla català, sinó que també parla francès.", g: "Correlative: no només... sinó que també.", h: ["No només", "sinó que també", "francès"] },
  { t: "writing", es: "Dado que no tenemos dinero, nos quedaremos en casa.", ca: "Atès que no tenim diners, ens quedarem a casa.", g: "Causal formal: atès que. Diners (always plural).", h: ["Atès que", "diners", "ens quedarem"] },
  { t: "talking", es: "Estudia mucho; por lo tanto, saca buenas notas.", ca: "Estudia molt; per tant, treu bones notes.", g: "Consecutive: per tant. Treure notes = sacar notas.", h: ["per tant", "treu", "bones notes"] },
  { t: "reading", es: "Aunque es difícil, lo intentaré.", ca: "Tot i que és difícil, ho intentaré.", g: "Concessive: tot i que = aunque.", h: ["Tot i que", "difícil", "ho intentaré"] },
  { t: "writing", es: "En primer lugar, debemos analizar el problema.", ca: "En primer lloc, hem d'analitzar el problema.", g: "Ordering connector: en primer lloc.", h: ["En primer lloc", "hem d'analitzar"] },
  { t: "talking", es: "Por un lado es bueno, pero por otro lado es arriesgado.", ca: "D'una banda és bo, però d'altra banda és arriscat.", g: "Contrasting: d'una banda... d'altra banda.", h: ["D'una banda", "d'altra banda", "arriscat"] },
  { t: "writing", es: "En conclusión, el proyecto es viable.", ca: "En conclusió, el projecte és viable.", g: "Closing connector: en conclusió.", h: ["En conclusió", "projecte", "viable"] },
  { t: "talking", es: "Además de trabajar, estudia por las noches.", ca: "A més de treballar, estudia a les nits.", g: "Additive: a més de.", h: ["A més de", "treballar", "a les nits"] },
  { t: "reading", es: "Sin embargo, los resultados no fueron los esperados.", ca: "No obstant això, els resultats no van ser els esperats.", g: "Contrastive: no obstant això.", h: ["No obstant això", "resultats", "esperats"] },
  { t: "writing", es: "Puesto que nadie se opuso, aprobamos la propuesta.", ca: "Com que ningú s'hi va oposar, vam aprovar la proposta.", g: "Causal: com que. Pronominal: oposar-s'hi.", h: ["Com que", "s'hi va oposar", "proposta"] },
  { t: "talking", es: "En resumen, necesitamos más recursos.", ca: "En resum, necessitem més recursos.", g: "Summary connector: en resum.", h: ["En resum", "necessitem", "recursos"] },
  { t: "writing", es: "Siempre y cuando cumplas las normas, podrás quedarte.", ca: "Sempre que compleixis les normes, podràs quedar-te.", g: "Conditional: sempre que + subjunctive.", h: ["Sempre que", "compleixis", "normes"] },
  { t: "talking", es: "Así pues, tomemos una decisión rápida.", ca: "Així doncs, prenguem una decisió ràpida.", g: "Consecutive: així doncs. Exhortative subjunctive (prenguem).", h: ["Així doncs", "prenguem", "decisió"] },
  { t: "reading", es: "Antes bien, deberíamos reconsiderar la estrategia.", ca: "Ans al contrari, hauríem de reconsiderar l'estratègia.", g: "Corrective: ans al contrari. Conditional obligation.", h: ["Ans al contrari", "hauríem de", "l'estratègia"] },
  { t: "writing", es: "De hecho, los datos demuestran lo contrario.", ca: "De fet, les dades demostren el contrari.", g: "Reinforcing: de fet. Dades = datos (feminine in Catalan).", h: ["De fet", "dades", "demostren"] },
  { t: "talking", es: "A fin de que todos entiendan, lo explicaré otra vez.", ca: "A fi que tothom ho entengui, ho explicaré una altra vegada.", g: "Purpose: a fi que + subjunctive. Tothom = todos.", h: ["A fi que", "tothom", "entengui"] },
  { t: "writing", es: "Por consiguiente, la medida será efectiva.", ca: "Per consegüent, la mesura serà efectiva.", g: "Consecutive: per consegüent. Dieresis on ü.", h: ["Per consegüent", "mesura", "serà efectiva"] },
  { t: "reading", es: "Es decir, la hipótesis queda confirmada.", ca: "És a dir, la hipòtesi queda confirmada.", g: "Reformulator: és a dir.", h: ["És a dir", "hipòtesi", "confirmada"] },
  { t: "writing", es: "Con todo, no podemos ignorar los riesgos.", ca: "Amb tot, no podem ignorar els riscos.", g: "Concessive: amb tot. Riscos = riesgos.", h: ["Amb tot", "podem", "riscos"] },
];

// ═══════════════════════════════════════════════════════════════════════
// LEVEL C1 — SUFICIENCIA (Formal Nuance)
// ═══════════════════════════════════════════════════════════════════════

// ── C1: Documentación Administrativa ─────────────────────────────────
const c1Admin = [
  { t: "writing", es: "Por la presente, solicito la renovación de mi pasaporte.", ca: "Per la present, sol·licito la renovació del meu passaport.", g: "Geminated l (sol·licito). High-register administrative formulae.", h: ["Per la present", "sol·licito", "renovació"] },
  { t: "writing", es: "Adjunto la documentación requerida para su tramitación.", ca: "Adjunto la documentació requerida per a la seva tramitació.", g: "Per a = para (purpose). Tramitació = tramitación.", h: ["Adjunto", "documentació", "tramitació"] },
  { t: "talking", es: "Quisiera presentar una queja formal.", ca: "Voldria presentar una queixa formal.", g: "Conditional for politeness (voldria). Queixa = queja.", h: ["Voldria", "queixa formal"] },
  { t: "writing", es: "En relación con su carta del día 15, le comunico lo siguiente.", ca: "En relació amb la seva carta del dia 15, li comunico el següent.", g: "Formal correspondence formulas.", h: ["En relació amb", "li comunico", "el següent"] },
  { t: "reading", es: "El abajo firmante declara bajo juramento que los datos son ciertos.", ca: "El sotasignat declara sota jurament que les dades són certes.", g: "Legal terminology: sotasignat, sota jurament. Dades = datos (fem).", h: ["sotasignat", "sota jurament", "dades"] },
  { t: "writing", es: "Ruego tengan a bien concederme una prórroga.", ca: "Prego tinguin a bé concedir-me una pròrroga.", g: "Formal request (prego + subjunctive). Pròrroga = prórroga.", h: ["Prego", "tinguin a bé", "pròrroga"] },
  { t: "talking", es: "Necesito un certificado de empadronamiento.", ca: "Necessito un certificat d'empadronament.", g: "Certificat = certificado. Apostrophization.", h: ["certificat", "d'empadronament"] },
  { t: "writing", es: "Le notifico la resolución favorable de su expediente.", ca: "Li notifico la resolució favorable del seu expedient.", g: "Formal notification. Expedient = expediente.", h: ["Li notifico", "resolució", "expedient"] },
  { t: "reading", es: "El plazo de alegaciones finaliza el 30 de noviembre.", ca: "El termini d'al·legacions finalitza el 30 de novembre.", g: "Al·legacions with geminated l. Termini = plazo.", h: ["termini", "al·legacions", "finalitza"] },
  { t: "writing", es: "Quedo a la espera de su pronta respuesta.", ca: "Resto a l'espera de la seva prompte resposta.", g: "Formal closing. Resto = quedo. Prompte = pronta.", h: ["Resto a l'espera", "prompte resposta"] },
  { t: "talking", es: "¿Dónde puedo solicitar la tarjeta sanitaria?", ca: "On puc sol·licitar la targeta sanitària?", g: "Sol·licitar (l·l). Targeta sanitària.", h: ["On puc", "sol·licitar", "targeta sanitària"] },
  { t: "writing", es: "Mediante el presente escrito, interpongo recurso de alzada.", ca: "Mitjançant el present escrit, interposo recurs d'alçada.", g: "Mitjançant = mediante. Recurs d'alçada = recurso de alzada.", h: ["Mitjançant", "interposo", "recurs d'alçada"] },
  { t: "reading", es: "Se le concede una excedencia de un año.", ca: "Se li concedeix una excedència d'un any.", g: "Passive formulation. Excedència = excedencia.", h: ["Se li concedeix", "excedència"] },
  { t: "writing", es: "Atentamente, el director de área.", ca: "Atentament, el director d'àrea.", g: "Formal valediction. D'àrea with apostrophization.", h: ["Atentament", "director", "d'àrea"] },
  { t: "talking", es: "¿Qué documentos necesito para darme de alta?", ca: "Quins documents necessito per donar-me d'alta?", g: "Donar-se d'alta = darse de alta.", h: ["Quins documents", "donar-me d'alta"] },
  { t: "writing", es: "En virtud de lo expuesto, solicito que se me conceda la ayuda.", ca: "En virtut del que s'ha exposat, sol·licito que se'm concedeixi l'ajuda.", g: "Extremely formal. En virtut. Sol·licito que + subjunctive.", h: ["En virtut", "s'ha exposat", "concedeixi"] },
  { t: "reading", es: "Dicha resolución es recurrible ante el tribunal superior.", ca: "L'esmentada resolució és recurrible davant el tribunal superior.", g: "L'esmentada = dicha. Recurrible. Davant = ante.", h: ["L'esmentada", "recurrible", "davant"] },
  { t: "writing", es: "Comunico mi dimisión voluntaria con efecto inmediato.", ca: "Comunico la meva dimissió voluntària amb efecte immediat.", g: "Dimissió = dimisión. Immediat = inmediato.", h: ["dimissió voluntària", "efecte immediat"] },
  { t: "talking", es: "¿Cuál es el procedimiento para solicitar asilo?", ca: "Quin és el procediment per sol·licitar asil?", g: "Procediment = procedimiento. Asil = asilo.", h: ["procediment", "sol·licitar", "asil"] },
  { t: "writing", es: "Sin otro particular, le saluda atentamente.", ca: "Sense cap altre particular, el saluda atentament.", g: "Formal closing. Sense cap altre particular.", h: ["Sense cap altre particular", "el saluda atentament"] },
];

// ── C1: Posesivos Formales ───────────────────────────────────────────
const c1Posesivos = [
  { t: "reading", es: "Los estudiantes y sus profesores llegaron tarde.", ca: "Els estudiants i llurs professors van arribar tard.", g: "STRICT RULE: llurs (plural possessor ONLY). The students (plural) own the professors.", h: ["llurs professors", "van arribar"] },
  { t: "writing", es: "Los padres deben cuidar a sus hijos.", ca: "Els pares han de tenir cura de llurs fills.", g: "Llurs: possessor 'els pares' is plural. Tenir cura = cuidar.", h: ["llurs fills", "tenir cura"] },
  { t: "talking", es: "Las empresas y sus empleados participaron en la huelga.", ca: "Les empreses i llurs empleats van participar en la vaga.", g: "Llurs: possessor 'les empreses' is plural. Vaga = huelga.", h: ["llurs empleats", "vaga"] },
  { t: "writing", es: "Los vecinos organizaron su fiesta anual.", ca: "Els veïns van organitzar llur festa anual.", g: "Llur (singular possessed, plural possessor). Festa anual.", h: ["llur festa", "veïns"] },
  { t: "reading", es: "Los investigadores publicaron sus resultados.", ca: "Els investigadors van publicar llurs resultats.", g: "Llurs for plural possessor + plural possessed.", h: ["llurs resultats", "investigadors"] },
  { t: "writing", es: "Los países y sus representantes firmaron el tratado.", ca: "Els països i llurs representants van signar el tractat.", g: "Llurs: plural possessor. Tractat = tratado.", h: ["llurs representants", "tractat"] },
  { t: "talking", es: "Los profesores presentaron sus propuestas al consejo.", ca: "Els professors van presentar llurs propostes al consell.", g: "Llurs propostes: possessor (professors) is plural.", h: ["llurs propostes", "consell"] },
  { t: "writing", es: "Los ciudadanos exigieron sus derechos fundamentales.", ca: "Els ciutadans van exigir llurs drets fonamentals.", g: "Llurs drets: plural possessor + plural possessed.", h: ["llurs drets", "fonamentals"] },
  { t: "reading", es: "Los directores y sus equipos fueron premiados.", ca: "Els directors i llurs equips van ser premiats.", g: "Llurs equips: plural possessor.", h: ["llurs equips", "premiats"] },
  { t: "writing", es: "Las familias llevaron a sus hijos de excursión.", ca: "Les famílies van portar llurs fills d'excursió.", g: "Llurs fills: possessor (famílies) is plural.", h: ["llurs fills", "d'excursió"] },
  { t: "talking", es: "Los partidos políticos deben escuchar a sus votantes.", ca: "Els partits polítics han d'escoltar llurs votants.", g: "Llurs votants: plural possessor.", h: ["llurs votants", "han d'escoltar"] },
  { t: "writing", es: "Los pueblos preservaron sus tradiciones ancestrales.", ca: "Els pobles van preservar llurs tradicions ancestrals.", g: "Llurs tradicions: plural possessor.", h: ["llurs tradicions", "ancestrals"] },
  { t: "reading", es: "Los alumnos entregaron sus trabajos al profesor.", ca: "Els alumnes van lliurar llurs treballs al professor.", g: "Llurs treballs: possessor (alumnes) is plural. Lliurar = entregar.", h: ["llurs treballs", "lliurar"] },
  { t: "writing", es: "Los artistas expusieron sus obras en la galería.", ca: "Els artistes van exposar llurs obres a la galeria.", g: "Llurs obres: plural possessor.", h: ["llurs obres", "galeria"] },
  { t: "talking", es: "Las naciones unieron sus fuerzas contra la crisis.", ca: "Les nacions van unir llurs forces contra la crisi.", g: "Llurs forces: plural possessor.", h: ["llurs forces", "crisi"] },
  { t: "writing", es: "Los médicos salvaron a sus pacientes.", ca: "Els metges van salvar llurs pacients.", g: "Llurs pacients: possessor (metges) is plural.", h: ["llurs pacients", "metges"] },
  { t: "reading", es: "Las regiones promovieron sus lenguas autóctonas.", ca: "Les regions van promoure llurs llengües autòctones.", g: "Llurs llengües: plural possessor. Autòctones = autóctonas.", h: ["llurs llengües", "autòctones"] },
  { t: "writing", es: "Los jugadores celebraron su victoria con sus aficionados.", ca: "Els jugadors van celebrar llur victòria amb llurs aficionats.", g: "Both llur (singular possessed) and llurs (plural possessed).", h: ["llur victòria", "llurs aficionats"] },
  { t: "talking", es: "Los sindicatos defendieron los derechos de sus trabajadores.", ca: "Els sindicats van defensar els drets de llurs treballadors.", g: "De llurs treballadors: prepositional possessive.", h: ["de llurs treballadors", "sindicats"] },
  { t: "writing", es: "Las universidades actualizaron sus planes de estudio.", ca: "Les universitats van actualitzar llurs plans d'estudi.", g: "Llurs plans: plural possessor.", h: ["llurs plans", "d'estudi"] },
];

// ── C1: Subjuntivo Imperfecto ────────────────────────────────────────
const c1SubjImperfecto = [
  { t: "talking", es: "Si yo fuera rico, viajaría por todo el mundo.", ca: "Si jo fos ric, viatjaria per tot el món.", g: "Imperfect subjunctive: ser → fos.", h: ["Si jo fos", "ric", "viatjaria"] },
  { t: "writing", es: "Si tuviéramos más tiempo, iríamos a la playa.", ca: "Si tinguéssim més temps, aniríem a la platja.", g: "1st plural: tenir → tinguéssim. Anar conditional (aniríem).", h: ["tinguéssim", "aniríem", "platja"] },
  { t: "talking", es: "Ojalá pudiera hablar catalán perfectamente.", ca: "Tant de bo pogués parlar català perfectament.", g: "Tant de bo + imperfect subjunctive. Poder → pogués.", h: ["Tant de bo", "pogués", "perfectament"] },
  { t: "reading", es: "Si ella quisiera, podría conseguir el trabajo.", ca: "Si ella volgués, podria aconseguir la feina.", g: "Voler → volgués. Aconseguir = conseguir.", h: ["volgués", "podria", "aconseguir"] },
  { t: "writing", es: "Si supiéramos la verdad, no estaríamos aquí.", ca: "Si sabéssim la veritat, no seríem aquí.", g: "Saber → sabéssim. Note: Catalan uses 'seríem' not 'estaríem' for location.", h: ["sabéssim", "veritat", "seríem"] },
  { t: "talking", es: "Le pedí que viniera a la reunión.", ca: "Li vaig demanar que vingués a la reunió.", g: "Request in past + imperfect subjunctive. Venir → vingués.", h: ["vaig demanar", "vingués", "reunió"] },
  { t: "writing", es: "Si no lloviera tanto, saldríamos a pasear.", ca: "Si no plogués tant, sortiríem a passejar.", g: "Ploure → plogués. Sortir conditional (sortiríem).", h: ["plogués", "sortiríem", "passejar"] },
  { t: "reading", es: "Nos dijo que esperáramos fuera.", ca: "Ens va dir que esperéssim fora.", g: "Indirect speech requiring imperfect subjunctive. Esperar → esperéssim.", h: ["va dir que", "esperéssim", "fora"] },
  { t: "writing", es: "Si hicieras ejercicio, estarías más sano.", ca: "Si fessis exercici, estaries més sa.", g: "Fer → fessis. Sa = sano.", h: ["fessis", "exercici", "estaries", "sa"] },
  { t: "talking", es: "Como si fuéramos niños, nos trataron sin respeto.", ca: "Com si fóssim nens, ens van tractar sense respecte.", g: "Com si + imperfect subjunctive. Ser → fóssim.", h: ["Com si fóssim", "ens van tractar"] },
  { t: "writing", es: "Si yo fuera tú, no aceptaría esa oferta.", ca: "Si jo fos tu, no acceptaria aquella oferta.", g: "Ser → fos. Conditional acceptaria.", h: ["Si jo fos tu", "acceptaria", "oferta"] },
  { t: "talking", es: "Quería que nos dijeras la verdad.", ca: "Volia que ens diguessis la veritat.", g: "Imperfect + subjunctive sequence. Dir → diguessis.", h: ["Volia que", "diguessis", "veritat"] },
  { t: "reading", es: "Si pudiéramos volar, el mundo sería diferente.", ca: "Si poguéssim volar, el món seria diferent.", g: "Poder → poguéssim. Seria = sería.", h: ["poguéssim", "volar", "seria diferent"] },
  { t: "writing", es: "Si ellos quisieran, podrían cambiar las cosas.", ca: "Si ells volguessin, podrien canviar les coses.", g: "3rd plural: voler → volguessin. Canviar = cambiar.", h: ["volguessin", "podrien", "canviar"] },
  { t: "talking", es: "Habría preferido que vinieras antes.", ca: "Hauria preferit que haguessis vingut abans.", g: "Past conditional + pluperfect subjunctive (haguessis vingut).", h: ["Hauria preferit", "haguessis vingut"] },
  { t: "writing", es: "Si estuviéramos de acuerdo, firmaríamos ahora.", ca: "Si estiguéssim d'acord, signaríem ara.", g: "Estar → estiguéssim. Signar = firmar.", h: ["estiguéssim", "d'acord", "signaríem"] },
  { t: "reading", es: "Aunque fuera difícil, lo haría de todos modos.", ca: "Encara que fos difícil, ho faria de totes maneres.", g: "Encara que + subjunctive. Fer → faria. De totes maneres.", h: ["Encara que fos", "ho faria", "de totes maneres"] },
  { t: "writing", es: "Si no existieran las fronteras, todo sería más fácil.", ca: "Si no existissin les fronteres, tot seria més fàcil.", g: "Existir → existissin.", h: ["existissin", "fronteres", "seria més fàcil"] },
  { t: "talking", es: "Actuó como si no supiera nada.", ca: "Va actuar com si no sabés res.", g: "Com si + imperfect subjunctive. Saber → sabés. Res = nada.", h: ["com si no sabés", "res"] },
  { t: "writing", es: "Si la vida fuese más justa, no habría pobreza.", ca: "Si la vida fos més justa, no hi hauria pobresa.", g: "Ser → fos. Haver-hi conditional (hi hauria). Pobresa = pobreza.", h: ["fos més justa", "hi hauria", "pobresa"] },
];

// ── C1: Régimen Verbal (CRV) ─────────────────────────────────────────
const c1CRV = [
  { t: "writing", es: "Me doy cuenta de que este problema no tiene solución.", ca: "M'adono que aquest problema no té solució.", g: "TRAP: Adonar-se does NOT take 'de' before 'que'. Spanish uses 'de que'.", h: ["M'adono que", "problema", "solució"] },
  { t: "talking", es: "Me acuerdo de aquella noche.", ca: "Em recordo d'aquella nit.", g: "Recordar-se DE (takes 'de', unlike Spanish 'acordarse de' which is the same but different construction).", h: ["Em recordo", "d'aquella nit"] },
  { t: "writing", es: "Confío en que todo saldrá bien.", ca: "Confio que tot sortirà bé.", g: "TRAP: Confiar does NOT take 'en' before 'que' in Catalan.", h: ["Confio que", "sortirà bé"] },
  { t: "talking", es: "Insiste en ir a la reunión.", ca: "Insisteix a anar a la reunió.", g: "TRAP: Insistir A (not 'en'). Spanish: insistir en.", h: ["Insisteix a anar", "reunió"] },
  { t: "reading", es: "Ella se dedica a la investigación.", ca: "Ella es dedica a la recerca.", g: "Dedicar-se A (same preposition). Recerca = investigación.", h: ["es dedica a", "recerca"] },
  { t: "writing", es: "Sueño con viajar al Japón.", ca: "Somio a viatjar al Japó.", g: "TRAP: Somiar A (not 'amb'). Spanish: soñar con.", h: ["Somio a viatjar", "Japó"] },
  { t: "talking", es: "Me enamoré de ella a primera vista.", ca: "Em vaig enamorar d'ella a primera vista.", g: "Enamorar-se DE (same preposition). Periphrastic past.", h: ["em vaig enamorar", "d'ella"] },
  { t: "writing", es: "Se arrepiente de haber dicho eso.", ca: "Es penedeix d'haver dit això.", g: "Penedir-se DE. Different verb root from Spanish (arrepentirse).", h: ["Es penedeix", "d'haver dit"] },
  { t: "talking", es: "Juega al fútbol todos los domingos.", ca: "Juga a futbol cada diumenge.", g: "Jugar A (no article before sport). Spanish: jugar al fútbol.", h: ["Juga a futbol", "diumenge"] },
  { t: "reading", es: "Se queja de todo constantemente.", ca: "Es queixa de tot constantment.", g: "Queixar-se DE. Same preposition.", h: ["Es queixa de", "constantment"] },
  { t: "writing", es: "Pensamos en ir de vacaciones en agosto.", ca: "Pensem a anar de vacances a l'agost.", g: "TRAP: Pensar A (not 'en'). Spanish: pensar en.", h: ["Pensem a anar", "vacances", "l'agost"] },
  { t: "talking", es: "Se niega a firmar el contrato.", ca: "Es nega a signar el contracte.", g: "Negar-se A (same preposition). Signar = firmar.", h: ["Es nega a signar", "contracte"] },
  { t: "writing", es: "Me alegro de que estés aquí.", ca: "M'alegro que siguis aquí.", g: "TRAP: Alegrar-se drops 'de' before 'que' in Catalan.", h: ["M'alegro que", "siguis aquí"] },
  { t: "talking", es: "Renunció a su puesto de trabajo.", ca: "Va renunciar al seu lloc de treball.", g: "Renunciar A (same preposition). Lloc de treball = puesto.", h: ["Va renunciar", "lloc de treball"] },
  { t: "reading", es: "Se avergüenza de su comportamiento.", ca: "S'avergonyeix del seu comportament.", g: "Avergonyir-se DE. Comportament = comportamiento.", h: ["S'avergonyeix", "comportament"] },
  { t: "writing", es: "Contribuyó a mejorar la situación.", ca: "Va contribuir a millorar la situació.", g: "Contribuir A (same preposition). Millorar = mejorar.", h: ["Va contribuir a", "millorar"] },
  { t: "talking", es: "Se atrevió a decirle la verdad a su jefe.", ca: "Es va atrevir a dir-li la veritat al seu cap.", g: "Atrevir-se A (same preposition). Cap = jefe.", h: ["Es va atrevir a", "dir-li", "cap"] },
  { t: "writing", es: "Aspira a ser presidente de la empresa.", ca: "Aspira a ser president de l'empresa.", g: "Aspirar A (same preposition).", h: ["Aspira a ser", "president"] },
  { t: "reading", es: "Se resiste a cambiar de opinión.", ca: "Es resisteix a canviar d'opinió.", g: "Resistir-se A. Canviar = cambiar.", h: ["Es resisteix a", "canviar", "d'opinió"] },
  { t: "writing", es: "Estoy de acuerdo con tu propuesta.", ca: "Estic d'acord amb la teva proposta.", g: "Estar d'acord AMB (not 'con'). Possessive with article.", h: ["Estic d'acord", "amb", "la teva proposta"] },
];

// ═══════════════════════════════════════════════════════════════════════
// LEVEL C2 — SUPERIOR (Metalinguistic & Academic Mastery)
// ═══════════════════════════════════════════════════════════════════════

// ── C2: Defensa de Tesis y Debate Abstracto ──────────────────────────
const c2Tesis = [
  { t: "writing", es: "Es irrefutable que la globalización ha exacerbado las desigualdades endémicas.", ca: "És irrefutable que la globalització ha exacerbat les desigualtats endèmiques.", g: "Academic register. Desigualtats (not desigualdades).", h: ["irrefutable", "globalització", "desigualtats"] },
  { t: "talking", es: "En mi tesis argumento que la política lingüística influye en la cohesión social.", ca: "A la meva tesi argumento que la política lingüística influeix en la cohesió social.", g: "A la meva tesi (preposition 'a'). Influir incoative (influeix).", h: ["A la meva tesi", "influeix", "cohesió social"] },
  { t: "writing", es: "La hipótesis principal postula una correlación entre pobreza y exclusión lingüística.", ca: "La hipòtesi principal postula una correlació entre pobresa i exclusió lingüística.", g: "Academic vocabulary. Pobresa = pobreza.", h: ["hipòtesi", "correlació", "pobresa", "exclusió"] },
  { t: "talking", es: "¿Puede usted aportar evidencia empírica que sustente su argumento?", ca: "Pot vostè aportar evidència empírica que sustenti el seu argument?", g: "Formal register. Relative subjunctive (sustenti).", h: ["Pot vostè", "evidència empírica", "sustenti"] },
  { t: "reading", es: "Los resultados son consistentes con los hallazgos previos.", ca: "Els resultats són consistents amb les troballes prèvies.", g: "Academic: troballes = hallazgos. Prèvies = previos.", h: ["resultats", "troballes", "prèvies"] },
  { t: "writing", es: "Desde un paradigma constructivista, la realidad es una construcción social.", ca: "Des d'un paradigma constructivista, la realitat és una construcció social.", g: "Philosophical register. Des d'un (double contraction).", h: ["Des d'un paradigma", "realitat", "construcció"] },
  { t: "talking", es: "Rebato su argumento: la causalidad no implica correlación.", ca: "Rebato el seu argument: la causalitat no implica correlació.", g: "Debate language. Causalitat = causalidad.", h: ["Rebato", "causalitat", "correlació"] },
  { t: "writing", es: "Los datos cuantitativos refuerzan la validez interna del estudio.", ca: "Les dades quantitatives reforcen la validesa interna de l'estudi.", g: "Dades (feminine). Validesa = validez.", h: ["dades quantitatives", "validesa", "l'estudi"] },
  { t: "reading", es: "La metodología empleada presenta limitaciones significativas.", ca: "La metodologia emprada presenta limitacions significatives.", g: "Emprada = empleada. Limitacions = limitaciones.", h: ["metodologia", "emprada", "limitacions"] },
  { t: "writing", es: "En conclusión, se confirma parcialmente la hipótesis inicial.", ca: "En conclusió, es confirma parcialment la hipòtesi inicial.", g: "Academic conclusion. Parcialment = parcialmente.", h: ["En conclusió", "parcialment", "hipòtesi"] },
  { t: "talking", es: "¿Cuáles son las implicaciones éticas de esta investigación?", ca: "Quines són les implicacions ètiques d'aquesta recerca?", g: "Quines = cuáles. Ètiques = éticas. Recerca = investigación.", h: ["Quines", "implicacions ètiques", "recerca"] },
  { t: "writing", es: "El marco teórico se fundamenta en la sociolingüística crítica.", ca: "El marc teòric es fonamenta en la sociolingüística crítica.", g: "Marc = marco. Fonamentar-se = fundamentarse.", h: ["marc teòric", "es fonamenta", "sociolingüística"] },
  { t: "talking", es: "Discrepo fundamentalmente con su interpretación de los datos.", ca: "Discrepo fonamentalment amb la seva interpretació de les dades.", g: "Discrepar AMB (not 'con'). Fonamentalment.", h: ["Discrepo fonamentalment", "amb", "interpretació"] },
  { t: "writing", es: "Las variables independientes no fueron adecuadamente controladas.", ca: "Les variables independents no van ser adequadament controlades.", g: "Passive periphrastic. Adequadament = adecuadamente.", h: ["variables independents", "adequadament", "controlades"] },
  { t: "reading", es: "Este estudio contribuye al avance del conocimiento en neurociencia.", ca: "Aquest estudi contribueix a l'avenç del coneixement en neurociència.", g: "Contribuir A. Avenç = avance. Coneixement = conocimiento.", h: ["contribueix", "l'avenç", "coneixement"] },
  { t: "writing", es: "La muestra analizada es representativa de la población general.", ca: "La mostra analitzada és representativa de la població general.", g: "Mostra = muestra. Analitzada = analizada. Població = población.", h: ["mostra", "analitzada", "població"] },
  { t: "talking", es: "Propongo futuras líneas de investigación en este ámbito.", ca: "Proposo futures línies de recerca en aquest àmbit.", g: "Proposo = propongo. Àmbit = ámbito.", h: ["Proposo", "línies de recerca", "àmbit"] },
  { t: "writing", es: "La interseccionalidad revela cómo las opresiones se superponen.", ca: "La interseccionalitat revela com les opressions se superposen.", g: "High academic. Interseccionalitat. Opressions.", h: ["interseccionalitat", "opressions", "se superposen"] },
  { t: "reading", es: "El análisis cualitativo complementa los datos cuantitativos.", ca: "L'anàlisi qualitativa complementa les dades quantitatives.", g: "Anàlisi (feminine in Catalan). Qualitativa. Dades.", h: ["L'anàlisi qualitativa", "dades quantitatives"] },
  { t: "writing", es: "En síntesis, la evidencia respalda la necesidad de reformas estructurales.", ca: "En síntesi, l'evidència avala la necessitat de reformes estructurals.", g: "Síntesi = síntesis. Avalar = respaldar.", h: ["En síntesi", "l'evidència", "reformes estructurals"] },
];

// ── C2: Formatos Textuales Específicos ───────────────────────────────
const c2Textuales = [
  { t: "writing", es: "Señoras y señores, es un honor dirigirme a ustedes en esta ceremonia.", ca: "Senyores i senyors, és un honor adreçar-me a vostès en aquesta cerimònia.", g: "Inaugural speech register. Adreçar-se = dirigirse.", h: ["Senyores i senyors", "adreçar-me", "vostès"] },
  { t: "writing", es: "El siguiente editorial critica la gestión gubernamental.", ca: "L'editorial següent critica la gestió governamental.", g: "L'editorial (masculine for article, not publishing house). Governamental.", h: ["L'editorial", "gestió", "governamental"] },
  { t: "talking", es: "En la reseña crítica se destaca la originalidad de la obra.", ca: "A la ressenya crítica es destaca l'originalitat de l'obra.", g: "Ressenya = reseña. Originalitat. Text genre vocabulary.", h: ["ressenya", "es destaca", "originalitat"] },
  { t: "writing", es: "La novela revisada en este artículo aborda la memoria histórica.", ca: "La novel·la ressenyada en aquest article aborda la memòria històrica.", g: "Novel·la with geminated l (l·l). Ressenyada = reseñada.", h: ["novel·la", "ressenyada", "memòria històrica"] },
  { t: "reading", es: "El discurso inaugural establece el marco de la conferencia.", ca: "El discurs inaugural estableix el marc de la conferència.", g: "Discurs = discurso. Establir incoative (estableix).", h: ["discurs inaugural", "estableix", "conferència"] },
  { t: "writing", es: "Por medio de esta carta abierta, expresamos nuestra indignación.", ca: "Per mitjà d'aquesta carta oberta, expressem la nostra indignació.", g: "Per mitjà de = por medio de. Carta oberta = carta abierta.", h: ["Per mitjà", "carta oberta", "indignació"] },
  { t: "talking", es: "La crónica periodística narra los hechos con objetividad.", ca: "La crònica periodística narra els fets amb objectivitat.", g: "Crònica = crónica. Fets = hechos.", h: ["crònica", "fets", "objectivitat"] },
  { t: "writing", es: "Este ensayo analiza las causas profundas de la emigración.", ca: "Aquest assaig analitza les causes profundes de l'emigració.", g: "Assaig = ensayo. Causes = causas.", h: ["assaig", "analitza", "causes", "l'emigració"] },
  { t: "reading", es: "El acta de la reunión recoge los acuerdos tomados.", ca: "L'acta de la reunió recull els acords presos.", g: "Acta (feminine). Recollir = recoger (recull). Acords = acuerdos.", h: ["L'acta", "recull", "acords presos"] },
  { t: "writing", es: "La columna de opinión defiende la educación bilingüe.", ca: "La columna d'opinió defensa l'educació bilingüe.", g: "Columna d'opinió. Defensar = defender.", h: ["columna d'opinió", "defensa", "l'educació"] },
  { t: "talking", es: "En el prólogo, el autor contextualiza su obra.", ca: "Al pròleg, l'autor contextualitza la seva obra.", g: "Pròleg = prólogo. Apostrophization (l'autor).", h: ["pròleg", "l'autor", "contextualitza"] },
  { t: "writing", es: "El informe anual detalla los logros y los retos pendientes.", ca: "L'informe anual detalla els assoliments i els reptes pendents.", g: "Assoliments = logros. Reptes = retos.", h: ["L'informe", "assoliments", "reptes"] },
  { t: "reading", es: "La nota de prensa anuncia el nuevo acuerdo comercial.", ca: "La nota de premsa anuncia el nou acord comercial.", g: "Premsa = prensa. Acord = acuerdo.", h: ["premsa", "anuncia", "acord comercial"] },
  { t: "writing", es: "El comunicado oficial desmentirá los rumores.", ca: "El comunicat oficial desmentirà els rumors.", g: "Comunicat = comunicado. Desmentir future.", h: ["comunicat oficial", "desmentirà", "rumors"] },
  { t: "talking", es: "La conferencia magistral versará sobre la inteligencia artificial.", ca: "La conferència magistral versarà sobre la intel·ligència artificial.", g: "Conferència magistral. Intel·ligència (l·l).", h: ["conferència magistral", "versarà", "intel·ligència"] },
  { t: "writing", es: "El manifiesto denuncia las injusticias sociales.", ca: "El manifest denuncia les injustícies socials.", g: "Manifest = manifiesto. Injustícies = injusticias.", h: ["manifest", "injustícies"] },
  { t: "reading", es: "La biografía autorizada desvela aspectos íntimos del artista.", ca: "La biografia autoritzada desvela aspectes íntims de l'artista.", g: "Biografia (no accent). Autoritzada. Aspectes = aspectos.", h: ["biografia", "autoritzada", "aspectes íntims"] },
  { t: "writing", es: "El epílogo ofrece una reflexión sobre la evolución del personaje.", ca: "L'epíleg ofereix una reflexió sobre l'evolució del personatge.", g: "Epíleg = epílogo. Personatge = personaje.", h: ["L'epíleg", "reflexió", "personatge"] },
  { t: "talking", es: "La sinopsis del documental resume la trama principal.", ca: "La sinopsi del documental resumeix la trama principal.", g: "Sinopsi = sinopsis. Resumir incoative (resumeix).", h: ["sinopsi", "resumeix", "trama"] },
  { t: "writing", es: "El artículo científico presenta los hallazgos del laboratorio.", ca: "L'article científic presenta les troballes del laboratori.", g: "Troballes = hallazgos. Laboratori = laboratorio.", h: ["L'article científic", "troballes", "laboratori"] },
];

// ── C2: Modismos y el Verb 'Fer' ─────────────────────────────────────
const c2Modismos = [
  { t: "talking", es: "Este chico le falta un tornillo.", ca: "Aquest noi no hi toca.", g: "Idiom: 'no hi toca' = le falta un tornillo. CANNOT be translated directly.", h: ["no hi toca"] },
  { t: "writing", es: "Siempre hace la vista gorda con los problemas.", ca: "Sempre fa els ulls grossos amb els problemes.", g: "Idiom: fer els ulls grossos = hacer la vista gorda.", h: ["fa els ulls grossos"] },
  { t: "talking", es: "Hace un frío que pela.", ca: "Fa un fred que pela.", g: "Weather idiom with fer. Fred = frío.", h: ["Fa un fred", "que pela"] },
  { t: "writing", es: "Hoy hace un sol espléndido.", ca: "Avui fa un sol esplèndid.", g: "Weather: fer sol. Esplèndid = espléndido.", h: ["fa un sol", "esplèndid"] },
  { t: "reading", es: "Eso no viene al caso.", ca: "Això no ve al cas.", g: "Idiom: venir al cas = venir al caso.", h: ["no ve al cas"] },
  { t: "talking", es: "Se hizo el tonto para no responder.", ca: "Es va fer l'orni per no respondre.", g: "Idiom: fer-se l'orni = hacerse el tonto. Colloquial.", h: ["es va fer l'orni", "respondre"] },
  { t: "writing", es: "Da lo mismo, me da igual.", ca: "Tant se val, tant me fa.", g: "Idiom: tant se val / tant me fa = da lo mismo.", h: ["Tant se val", "tant me fa"] },
  { t: "talking", es: "Hizo de tripas corazón y aceptó el reto.", ca: "Va fer de tripas cor i va acceptar el repte.", g: "Idiom: fer de tripas cor. Repte = reto.", h: ["fer de tripas cor", "repte"] },
  { t: "reading", es: "Ese rumor corre como la pólvora.", ca: "Aquell rumor corre com la pólvora.", g: "Idiom: córrer com la pólvora = spread like wildfire.", h: ["corre com", "pólvora"] },
  { t: "writing", es: "No hay que darle más vueltas al asunto.", ca: "No cal donar-hi més voltes.", g: "Idiom: donar-hi voltes = darle vueltas. Locative 'hi'.", h: ["donar-hi voltes"] },
  { t: "talking", es: "Le tomó el pelo descaradamente.", ca: "Li va prendre el pèl descaradament.", g: "Idiom: prendre el pèl = tomar el pelo.", h: ["prendre el pèl", "descaradament"] },
  { t: "writing", es: "Hay gato encerrado en este negocio.", ca: "Hi ha gat amagat en aquest negoci.", g: "Idiom: haver-hi gat amagat = haber gato encerrado.", h: ["gat amagat", "negoci"] },
  { t: "talking", es: "Se quedó en blanco durante el examen.", ca: "Es va quedar en blanc durant l'examen.", g: "Idiom: quedar-se en blanc.", h: ["en blanc", "durant l'examen"] },
  { t: "reading", es: "Metió la pata con su comentario.", ca: "Va ficar la pota amb el seu comentari.", g: "Idiom: ficar la pota = meter la pata. Pota = pata.", h: ["ficar la pota", "comentari"] },
  { t: "writing", es: "No me vengas con cuentos chinos.", ca: "No em vinguis amb ous de niu.", g: "Idiom: venir amb ous de niu = contar cuentos chinos.", h: ["amb ous de niu"] },
  { t: "talking", es: "Hace un calor insoportable hoy.", ca: "Avui fa una calor insuportable.", g: "Weather: fer calor. NOTE: calor is FEMININE in Catalan (una calor).", h: ["fa una calor", "insuportable"] },
  { t: "writing", es: "No tiene pelos en la lengua.", ca: "No té pèls a la llengua.", g: "Idiom: no tenir pèls a la llengua. Similar structure.", h: ["no té pèls", "a la llengua"] },
  { t: "reading", es: "Eso es pan comido.", ca: "Això és bufar i fer ampolles.", g: "Idiom: bufar i fer ampolles = pan comido. Completely different image.", h: ["bufar i fer ampolles"] },
  { t: "talking", es: "Llueve a cántaros.", ca: "Plou a bots i barrals.", g: "Weather idiom: ploure a bots i barrals = llover a cántaros.", h: ["Plou a bots i barrals"] },
  { t: "writing", es: "Se fue sin decir ni pío.", ca: "Se'n va anar sense dir ni piu.", g: "Idiom: sense dir ni piu. Anar-se'n (se'n va anar).", h: ["se'n va anar", "sense dir ni piu"] },
];

// ── C2: Derivación Léxica ────────────────────────────────────────────
const c2Derivacion = [
  { t: "writing", es: "Su ensordecedor grito causó un enrojecimiento en su rostro.", ca: "El seu crit eixordador va causar un envermelliment a la seva cara.", g: "Derivation: sord → eixordador. Vermell → envermelliment.", h: ["eixordador", "envermelliment"] },
  { t: "talking", es: "La impermeabilidad del material es insuficiente.", ca: "La impermeabilitat del material és insuficient.", g: "Suffix -tat = -dad. Impermeabilitat.", h: ["impermeabilitat", "insuficient"] },
  { t: "writing", es: "El blanqueamiento de los corales es preocupante.", ca: "L'emblanquiment dels coralls és preocupant.", g: "Derivation: blanc → emblanquiment. Prefix en- + stem.", h: ["L'emblanquiment", "coralls", "preocupant"] },
  { t: "reading", es: "La incalculable riqueza del patrimonio fue destruida.", ca: "La incalculable riquesa del patrimoni va ser destruïda.", g: "Riquesa = riqueza (-esa suffix). Destruïda with dieresis.", h: ["incalculable", "riquesa", "destruïda"] },
  { t: "writing", es: "El empoderamiento femenino es fundamental.", ca: "L'apoderament femení és fonamental.", g: "Apoderament = empoderamiento. Femení = femenino.", h: ["L'apoderament", "femení", "fonamental"] },
  { t: "talking", es: "La inestabilidad política genera incertidumbre.", ca: "La inestabilitat política genera incertesa.", g: "Suffix -tat. Incertesa = incertidumbre (-esa suffix).", h: ["inestabilitat", "genera", "incertesa"] },
  { t: "writing", es: "El oscurecimiento del cielo anunciaba tormenta.", ca: "L'enfosquiment del cel anunciava tempesta.", g: "Derivation: fosc → enfosquiment. Prefix en- + stem + -ment.", h: ["L'enfosquiment", "cel", "tempesta"] },
  { t: "reading", es: "La deforestación amazónica es irreversible.", ca: "La desforestació amazònica és irreversible.", g: "Desforestació (prefix des-). Amazònica.", h: ["desforestació", "amazònica", "irreversible"] },
  { t: "writing", es: "El enriquecimiento cultural es mutuo.", ca: "L'enriquiment cultural és mutu.", g: "Derivation: ric → enriquiment.", h: ["L'enriquiment", "cultural", "mutu"] },
  { t: "talking", es: "La imperdonable negligencia tuvo consecuencias fatales.", ca: "La imperdonable negligència va tenir conseqüències fatals.", g: "Conseqüències with dieresis. Negligència = negligencia.", h: ["imperdonable", "negligència", "conseqüències"] },
  { t: "writing", es: "La digitalización de los archivos está casi completada.", ca: "La digitalització dels arxius està gairebé completada.", g: "Digitalització (-ció suffix = -ción). Arxius = archivos.", h: ["digitalització", "arxius", "gairebé"] },
  { t: "reading", es: "El endurecimiento de las medidas fue criticado.", ca: "L'enduriment de les mesures va ser criticat.", g: "Derivation: dur → enduriment.", h: ["L'enduriment", "mesures", "criticat"] },
  { t: "writing", es: "La sostenibilidad del modelo económico es cuestionable.", ca: "La sostenibilitat del model econòmic és qüestionable.", g: "Sostenibilitat (-tat). Qüestionable with dieresis.", h: ["sostenibilitat", "econòmic", "qüestionable"] },
  { t: "talking", es: "La innegable belleza del paisaje nos cautivó.", ca: "La innegable bellesa del paisatge ens va captivar.", g: "Bellesa = belleza (-esa suffix). Paisatge = paisaje.", h: ["innegable", "bellesa", "paisatge"] },
  { t: "writing", es: "El empobrecimiento de la clase media es alarmante.", ca: "L'empobriment de la classe mitjana és alarmant.", g: "Derivation: pobre → empobriment.", h: ["L'empobriment", "classe mitjana", "alarmant"] },
  { t: "reading", es: "La desmotivación de los empleados afecta la productividad.", ca: "La desmotivació dels empleats afecta la productivitat.", g: "Desmotivació (prefix des- + -ció). Productivitat.", h: ["desmotivació", "empleats", "productivitat"] },
  { t: "writing", es: "El envejecimiento de la población requiere nuevas políticas.", ca: "L'envelliment de la població requereix noves polítiques.", g: "Derivation: vell → envelliment. Requerir incoative.", h: ["L'envelliment", "població", "requereix"] },
  { t: "talking", es: "La imprevisibilidad del mercado genera ansiedad.", ca: "La imprevisibilitat del mercat genera ansietat.", g: "Imprevisibilitat (-tat). Ansietat = ansiedad.", h: ["imprevisibilitat", "mercat", "ansietat"] },
  { t: "reading", es: "La descentralización administrativa fue exitosa.", ca: "La descentralització administrativa va ser exitosa.", g: "Descentralització (prefix des- + -ció).", h: ["descentralització", "administrativa", "exitosa"] },
  { t: "writing", es: "El ennoblecimiento del discurso político es urgente.", ca: "L'ennobliment del discurs polític és urgent.", g: "Derivation: noble → ennobliment.", h: ["L'ennobliment", "discurs polític", "urgent"] },
];


// ═══════════════════════════════════════════════════════════════════════
// BUILD THE FINAL JSON
// ═══════════════════════════════════════════════════════════════════════

const sections = [
  { level: "A1", moduleName: "Identidad y Cortesía", data: a1Identity },
  { level: "A1", moduleName: "La Familia y Artículos", data: a1Familia },
  { level: "A1", moduleName: "Comida y Bebida", data: a1Comida },
  { level: "A1", moduleName: "Orientación y Físico", data: a1Orientacion },
  { level: "A2", moduleName: "Rutina Diaria y Horas", data: a2Rutina },
  { level: "A2", moduleName: "La Ciudad y el Campo", data: a2Ciudad },
  { level: "A2", moduleName: "Ser, Estar, Anar, Venir", data: a2Verbs },
  { level: "A2", moduleName: "Planes de Futuro", data: a2Futuro },
  { level: "A2", moduleName: "De Compras (False Friends)", data: a2Compras },
  { level: "B1", moduleName: "Dudas y Deseos (Subjuntivo)", data: b1Subjuntivo },
  { level: "B1", moduleName: "Obligaciones y Necesidad", data: b1Obligacion },
  { level: "B1", moduleName: "En el Médico", data: b1Medico },
  { level: "B1", moduleName: "Festividades y Tradiciones", data: b1Fiestas },
  { level: "B2", moduleName: "Pronombres Débiles (Mastery)", data: b2Pronoms },
  { level: "B2", moduleName: "Pronombres Relativos", data: b2Relativos },
  { level: "B2", moduleName: "Entorno Laboral y Universidad", data: b2Laboral },
  { level: "B2", moduleName: "Conectores Argumentativos", data: b2Conectores },
  { level: "C1", moduleName: "Documentación Administrativa", data: c1Admin },
  { level: "C1", moduleName: "Posesivos Formales", data: c1Posesivos },
  { level: "C1", moduleName: "Subjuntivo Imperfecto", data: c1SubjImperfecto },
  { level: "C1", moduleName: "Régimen Verbal (CRV)", data: c1CRV },
  { level: "C2", moduleName: "Defensa de Tesis y Debate Abstracto", data: c2Tesis },
  { level: "C2", moduleName: "Formatos Textuales Específicos", data: c2Textuales },
  { level: "C2", moduleName: "Modismos y el Verb Fer", data: c2Modismos },
  { level: "C2", moduleName: "Derivación Léxica", data: c2Derivacion },
];

const output = [];
for (const sec of sections) {
  for (const item of sec.data) {
    output.push({
      level: sec.level,
      moduleName: sec.moduleName,
      scenarioType: item.t,
      spanishPrompt: item.es,
      expectedCatalanAnswer: item.ca,
      grammarRuleTested: item.g,
      vocabularyHints: item.h,
    });
  }
}

const outPath = path.join(__dirname, '..', 'src', 'data', 'curriculum_database.json');
fs.writeFileSync(outPath, JSON.stringify(output, null, 2), 'utf8');
console.log(`\nGenerated ${output.length} total scenarios across ${sections.length} sections.`);
console.log('Output: ' + outPath);

// Count per level
const counts = {};
for (const s of output) {
  counts[s.level] = (counts[s.level] || 0) + 1;
}
console.log('\nBreakdown:');
for (const [lvl, count] of Object.entries(counts)) {
  console.log(`  ${lvl}: ${count} scenarios`);
}
