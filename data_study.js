// ============================================================================
// MENCIÓN EN AUDICIÓN Y LENGUAJE (UCJC 2026-2027) - MÓDULO DE ESTUDIO Y CLÍNICA
// Contiene las 25 unidades didácticas (con enlace a los PDFs oficiales),
// el banco de preguntas Tipo Test (Proctoring), Flashcards/Glosario y
// las 8 Herramientas Clínicas Interactivas de Diagnóstico e Intervención.
// ============================================================================

window.AL_DATA = window.AL_DATA || {};

// ----------------------------------------------------------------------------
// 1. LAS 25 UNIDADES DIDÁCTICAS (5 ASIGNATURAS x 5 UNIDADES)
// ----------------------------------------------------------------------------
window.AL_DATA.unidades = [
  // ==========================================================================
  // ASIGNATURA 1: PSICOPATOLOGÍA DE LA AUDICIÓN Y EL LENGUAJE
  // ==========================================================================
  {
    id: "psico-u1",
    asignaturaId: "psicopatologia",
    numero: 1,
    titulo: "Unidad 1: Hacia el conocimiento de la psicopatología de la audición y el lenguaje",
    pdfFile: "Psicopatología de la audición y el lenguaje_Unidad 1 (1).pdf",
    indice: [
      "1.1. ¿Qué es la psicopatología? Concepto de normalidad y psicopatología infantil",
      "1.2. Modelos de estudio: Modelo médico o biológico vs Modelo conductual o educativo",
      "1.3. Sistemas de clasificación diagnóstica: DSM-5 (APA, 2013) y CIE-11 (OMS, 2019)",
      "1.4. La psicopatología de la AL en el ámbito escolar: LOMLOE (NEE vs NEAE)"
    ],
    resumen: "Introduce el concepto de psicopatología infantil atendiendo al momento evolutivo del niño. Contrasta y complementa el modelo médico/biológico (centrado en signos objetivos, síntomas subjetivos, etiología orgánica/funcional/endocrina/ambiental y etiopatogenia) con el modelo conductual/educativo (centrado en los niveles de contenido/semántica, forma/fonología-morfosintaxis y uso/pragmática de Bloom y Lahey, 1978, más la evaluación funcional y diseño de apoyos de Verdugo, 2003). Analiza los manuales diagnósticos DSM-5 y CIE-11 (trastornos del neurodesarrollo) y su traslación al marco educativo inclusivo de la LOMLOE (Ley Orgánica 3/2020), diferenciando entre NEAE (Art. 71) y NEE (Art. 73).",
    ideasClave: [
      "**Signo vs Síntoma (Modelo Médico)**: El *signo* es un indicador objetivo y medible por el clínico; el *síntoma* es la manifestación subjetiva referida por el propio sujeto.",
      "**Etiología en el Modelo Médico**: Causas **orgánicas** (lesión cerebral/anatómica), **funcionales** (mal uso/función sin lesión), **endocrinas** (hormonales) y **ambientales/psicosomáticas**.",
      "**Modelo Conductual/Educativo (Bloom y Lahey, 1978)**: Evalúa las 3 dimensiones del lenguaje: **Contenido** (semántica), **Forma** (fonología y morfosintaxis) y **Uso** (pragmática).",
      "**NEE vs NEAE en LOMLOE**: **NEAE (Art. 71)** es el término paraguas (incluye NEE, retraso madurativo, trastornos del desarrollo del lenguaje y la comunicación, trastornos de atención o aprendizaje, desconocimiento grave de la lengua, vulnerabilidad socioeducativa, altas capacidades e incorporación tardía). **NEE (Art. 73)** se refiere específicamente a discapacidad (física, intelectual, sensorial), TEA o trastornos graves de conducta/comunicación/lenguaje que requieren apoyos especializados."
    ],
    tablaComparativa: {
      titulo: "Comparativa entre el Modelo Médico/Biológico y el Modelo Conductual/Educativo",
      columnas: ["Dimensión", "Modelo Médico / Biológico", "Modelo Conductual / Educativo"],
      filas: [
        ["Foco de análisis", "Sintomatología (signos y síntomas), etiología y etiopatogenia interna.", "Conducta lingüística observable (Contenido, Forma y Uso) e interacción con el entorno."],
        ["Objetivo principal", "Diagnóstico nosológico/clínico (DSM-5 / CIE-11) y tratamiento etiológico.", "Identificación de necesidades educativas, barreras y provisión de apoyos (LOMLOE)."],
        ["Relación", "Complementario: explica el origen neurobiológico o anatómico.", "Complementario: guía la respuesta psicopedagógica e intervención en el aula."]
      ]
    }
  },
  {
    id: "psico-u2",
    asignaturaId: "psicopatologia",
    numero: 2,
    titulo: "Unidad 2: Psicopatología asociada a los trastornos de la comunicación y del habla",
    pdfFile: "Psicopatología de la audición y el lenguaje_Unidad 2 (1).pdf",
    indice: [
      "2.1. Trastornos de la comunicación según DSM-5 (TL, TSH, TFI, TCS)",
      "2.2. Trastorno de los Sonidos del Habla (TSH): alteraciones fonéticas vs fonológicas",
      "2.3. Trastornos secundarios del habla: Disglosia (labial, mandibular, lingual, palatina) y Disartria",
      "2.4. Trastornos de la voz: Disfonía (funcional, orgánica, psicógena, traumática, audiógena, espasmódica)"
    ],
    resumen: "Aborda la semiología y etiología de los trastornos de la comunicación y del habla. Parte de las 4 categorías del DSM-5: Trastorno del Lenguaje (TL), Trastorno Fonológico / de los Sonidos del Habla (TSH), Trastorno de la Fluidez de Inicio en la Infancia (TFI/Tartamudez) y Trastorno de la Comunicación Social (Pragmático). Profundiza en el TSH distinguiendo errores fonéticos (articulatorios/motrices en habla espontánea y repetición) de errores fonológicos (cognitivo-lingüísticos de organización del sistema de contrastes, donde mejora en repetición aislada). Finalmente estudia las alteraciones orgánicas periféricas (disglosias), neurológicas centrales/periféricas (disartrias) y vocales (disfonías).",
    ideasClave: [
      "**TSH Fonético vs TSH Fonológico (Susanibar et al., 2016)**: En la alteración **fonética** el error es motor/articulatorio sistemático (persiste igual al repetir sílabas); en la **fonológica** el niño puede articular el sonido aislado o en repetición, pero comete procesos de simplificación en el habla espontánea.",
      "**Disglosia vs Disartria**: La **disglosia** se debe a una malformación o lesión anatómica de los órganos periféricos del habla (labios, mandíbula, lengua, paladar) sin origen neurológico central; la **disartria** se debe a una lesión del Sistema Nervioso Central o Periférico que afecta al tono, fuerza y coordinación muscular respiratoria, fonatoria y articulatoria.",
      "**Trastorno de la Comunicación Social (TCS - DSM-5)**: Afecta al uso pragmático del lenguaje (saludar, adaptar el registro al contexto, respetar turnos, comprender inferencias, ironías y metáforas) **sin** presentar patrones restrictivos/repetitivos de conducta (lo que permite diferenciarlo del TEA).",
      "**Clasificación de las Disfonías (Cobeta et al., 2013)**: **Funcional** (mal uso/abuso vocal sin lesión inicial, aunque puede derivar en **orgánico-funcional** como nódulos o pólipos), **Orgánica** (lesión anatómica congénita o adquirida no ligada al uso vocal, ej. papilomatosis, parálisis recurrencial), **Psicógena**, **Traumática**, **Audiógena** y **Espasmódica** (distonía laríngea neurológica)."
    ],
    tablaComparativa: {
      titulo: "Diferenciación Clínica de los Trastornos del Habla (TSH, Disglosia y Disartria)",
      columnas: ["Trastorno", "Etiología Principal", "Rasgo Clínico Diferencial"],
      filas: [
        ["TSH (Fonético / Fonológico)", "Funcional / Evolutivo (sin lesión anatómica ni neurológica).", "Errores por sustitución, omisión, distorsión o procesos de simplificación fonológica."],
        ["Disglosia", "Malformación anatómica de órganos fonoarticulatorios periféricos.", "Fisura palatina, labio leporino, frenillo lingual corto (anquiloglosia), prognatismo."],
        ["Disartria", "Lesión neurológica en SNC, SNP, cerebelo o vía extrapiramidal.", "Alteración en respiración, fonación, resonancia, articulación y prosodia (flácida, espástica, atáxica)."]
      ]
    }
  },
  {
    id: "psico-u3",
    asignaturaId: "psicopatologia",
    numero: 3,
    titulo: "Unidad 3: Psicopatología asociada a los trastornos del lenguaje oral y del aprendizaje",
    pdfFile: "Psicopatología de la audición y el lenguaje_Unidad 3 (1).pdf",
    indice: [
      "3.1. Inicio Tardío del Lenguaje (ITL) / Hablantes tardíos (Late Talkers)",
      "3.2. Trastorno del Desarrollo del Lenguaje (TDL) vs Trastorno del Lenguaje (TL): Consenso Delphi 2026 (Andreu et al.)",
      "3.3. Trastorno de Aprendizaje No Verbal (TANV) y Afasias (congénita, adquirida, Landau-Kleffner)",
      "3.4. Dificultades Específicas de Aprendizaje (DEA): Dislexia, Disortografía, Discalculia, Disgrafía e Hipergrafía"
    ],
    resumen: "Examina los trastornos evolutivos y adquiridos del lenguaje y del aprendizaje. Define el Inicio Tardío del Lenguaje (ITL: <50 palabras y ausencia de combinaciones de 2 palabras a los 24 meses). Incorpora el **Consenso Delphi Hispanoamericano (Andreu et al., 2026)** que sustituye definitivamente el término TEL por **TDL** (trastorno neurobiológico sin condición biomédica conocida) y lo diferencia del **Trastorno del Lenguaje (TL)** asociado a una condición biomédica (TEA, DI, síndrome genético, hipoacusia). Estudia además el TANV (disfunción del hemisferio derecho), las afasias (fluentes vs no fluentes y síndrome de Landau-Kleffner) y las DEA.",
    ideasClave: [
      "**Inicio Tardío del Lenguaje (ITL)**: Niños de 24 meses con repertorio expresivo <50 palabras y sin combinación de 2 palabras. Factores de riesgo: antecedentes familiares, sexo masculino, bajo nivel educativo parental, otitis recurrentes o escaso uso de gestos.",
      "**Consenso Delphi 2026 (Andreu et al., 2026)**: Abandono definitivo de 'TEL' (exigía discrepancia con CI no verbal >85). Se usa **TDL** cuando no hay condición biomédica asociada (permitiendo CI no verbal entre 70 y 85 si no hay Discapacidad Intelectual) y **TL asociado a X** cuando coexiste con TEA, síndrome de Down, hipoacusia o daño cerebral.",
      "**Síndrome de Landau-Kleffner**: Afasia epiléptica adquirida en la infancia (entre los 3 y 7 años tras desarrollo normal) que cursa con agnosia auditiva verbal y alteraciones electroencefalográficas durante el sueño.",
      "**TANV (Trastorno de Aprendizaje No Verbal)**: Disfunción del hemisferio derecho con déficit visoespacial, psicomotor y pragmático/social, mientras se preservan los aspectos formales (fonología y vocabulario mecánico)."
    ],
    tablaComparativa: {
      titulo: "Consenso Delphi (Bishop et al., 2017; Andreu et al., 2026): TEL vs TDL vs TL",
      columnas: ["Criterio", "Antiguo TEL (En desuso)", "TDL (Trastorno del Desarrollo del Lenguaje)", "TL asociado a Condición Biomédica"],
      filas: [
        ["Criterio de CI no verbal", "Exigía CI no verbal ≥ 85 (discrepancia estricta).", "No exige discrepancia; incluye niños con CI no verbal entre 70-85 sin DI.", "Depende de la condición biomédica de base."],
        ["Etiología / Biomarcador", "Por exclusión estricta.", "Neurobiológica multifactorial sin condición biomédica conocida.", "Asociado a TEA, Discapacidad Intelectual, Hipoacusia, Síndrome genético o lesión."],
        ["Comorbilidad", "Visión restrictiva.", "Reconoce alta comorbilidad con TDAH, TSH, Dislexia y TANV.", "Forma parte del perfil sindrómico de la condición."]
      ]
    }
  },
  {
    id: "psico-u4",
    asignaturaId: "psicopatologia",
    numero: 4,
    titulo: "Unidad 4: Psicopatología de la AL en alumnado con NEE asociadas a discapacidad",
    pdfFile: "Psicopatología de la audición y el lenguaje_Unidad 4 (1).pdf",
    indice: [
      "4.1. Alumnado con NEE según LOMLOE (Art. 73)",
      "4.2. Discapacidad Intelectual: Modelo multidimensional AAIDD 2021 (Schalock et al.) e intensidad de apoyos",
      "4.3. Discapacidad Física o Motora y Discapacidad Auditiva (clasificación topográfica, audiométrica y cronológica)",
      "4.4. Trastorno del Espectro Autista (TEA: Grados 1, 2 y 3 DSM-5) y Trastornos Graves de Conducta (TGC)"
    ],
    resumen: "Analiza el perfil psicopatológico y comunicativo-lingüístico del alumnado con NEE (Art. 73 LOMLOE). En Discapacidad Intelectual aplica el modelo de la AAIDD (Schalock et al., 2021) basado en conducta adaptativa (conceptual, social y práctica) y en los 4 niveles de intensidad de apoyos (intermitente, limitado, extenso y generalizado). En Discapacidad Auditiva detalla los grados en dB (leve 20-40, moderada 40-70, severa 70-90, profunda >90, cofosis >120), localización (conductiva, neurosensorial, mixta) y momento (prelocutiva <2 años, perilocutiva 2-5 años, postlocutiva >5 años). En TEA estudia los criterios DSM-5 (Grados 1, 2 y 3) y sus rasgos lingüísticos (ecolalia inmediata/diferida, inversión pronominal, literalidad).",
    ideasClave: [
      "**Intensidad de Apoyos en Discapacidad Intelectual (AAIDD, Schalock et al., 2021)**: **Intermitente** (puntual en crisis/transiciones), **Limitado** (constante durante un tiempo definido), **Extenso** (regular en varios entornos sin límite temporal) y **Generalizado** (constante, de alta intensidad en todos los entornos).",
      "**Clasificación Cronológica de la Hipoacusia**: **Prelocutiva** (antes de los 2 años, previa al lenguaje), **Perilocutiva** (entre los 2 y 5 años, mientras se adquiere) y **Postlocutiva** (después de los 5 años, con lenguaje ya consolidado).",
      "**TEA en DSM-5**: Se unifican los antiguos TGD en un único espectro con **2 dominios** (A: Déficits persistentes en comunicación e interacción social; B: Patrones restrictivos y repetitivos de conducta/intereses) y **3 grados de severidad** (Grado 1: necesita ayuda; Grado 2: necesita ayuda notable; Grado 3: necesita ayuda muy notable).",
      "**Trastornos Graves de Conducta (TGC)**: Incluyen el **Trastorno Negativista Desafiante (TND)**, el **Trastorno Explosivo Intermitente (TEI)** y el **Trastorno de la Conducta (Disocial)**; suelen presentar déficits en autorregulación verbal y pragmática."
    ],
    tablaComparativa: {
      titulo: "Clasificación de los Grados de Pérdida Auditiva (BIAP / Unidad 4)",
      columnas: ["Grado de Hipoacusia", "Umbral en dB", "Repercusión en el Lenguaje Oral y Ayuda Técnica"],
      filas: [
        ["Normoaudición / Leve", "<20 dB / 20-40 dB", "Dificultad en voz baja o ruido; posibles dislalias audiógenas en fricativas (/s/, /f/). Audífono/FM."],
        ["Moderada (Media)", "40-70 dB", "No percibe habla conversacional a intensidad normal; retraso léxico-morfosintáctico. Audífonos + lectura labial."],
        ["Severa", "70-90 dB", "Solo percibe voz muy fuerte cerca del oído; no desarrolla lenguaje oral espontáneo sin audífonos/IC e intervención AL."],
        ["Profunda / Cofosis", ">90 dB / >120 dB", "Ausencia de percepción verbal auditiva sin Implante Coclear; requiere IC temprano y/o SAAC (Bimodal / LSE)."]
      ]
    }
  },
  {
    id: "psico-u5",
    asignaturaId: "psicopatologia",
    numero: 5,
    titulo: "Unidad 5: Psicopatología de la AL en alumnado con NEAE",
    pdfFile: "Psicopatología de la audición y el lenguaje_Unidad 5 (1).pdf",
    indice: [
      "5.1. Alumnado con NEAE según LOMLOE (Art. 71)",
      "5.2. Retraso Madurativo / Retraso Global del Desarrollo (RGD <5 años)",
      "5.3. Altas Capacidades Intelectuales (ACI): Castelló y Batlle (1998), 3 Anillos de Renzulli y Disincronía",
      "5.4. TDAH: bases neurobiológicas, atención, memoria de trabajo y perfil comunicativo",
      "5.5. Incorporación tardía al sistema educativo y condiciones personales o de historia escolar"
    ],
    resumen: "Estudia los perfiles del alumnado con NEAE no asociado a discapacidad (Art. 71 LOMLOE). Incluye el Retraso Global del Desarrollo (RGD, reservado en DSM-5 para menores de 5 años que no alcanzan los hitos en dos o más áreas: motricidad, lenguaje, cognición, socialización o AVD), las Altas Capacidades Intelectuales (diferenciando superdotación, talento simple y talento complejo según Castelló y Batlle, 1998; la Teoría de los Tres Anillos de Renzulli, 2000; y el síndrome de disincronía de Terrassier), el TDAH (desequilibrio dopamina/noradrenalina, déficit ejecutivo en atención y memoria operativa de Baddeley y alteraciones pragmático-discursivas) y el alumnado de incorporación tardía o en situación de vulnerabilidad.",
    ideasClave: [
      "**Retraso Global del Desarrollo (RGD)**: Diagnóstico provisional para niños **menores de 5 años** con retraso significativo en $\\ge 2$ áreas evolutivas cuando aún no se puede aplicar de forma fiable un test estandarizado de inteligencia.",
      "**Perfiles de Altas Capacidades (Castelló y Batlle, 1998)**: **Superdotación** (percentil $>75$ en todas las aptitudes intelectuales y creatividad), **Talento Simple** (percentil $>95$ en una sola área específica, ej. verbal o matemática) y **Talento Complejo** (percentil $>80$ en combinación de varias aptitudes, ej. académico o artístico-figurativo).",
      "**Teoría de los Tres Anillos de Renzulli (2000) y Disincronía**: Confluencia de (1) Capacidad intelectual superior a la media, (2) Alta dedicación/compromiso con la tarea y (3) Altos niveles de creatividad. El **síndrome de disincronía** refleja el desajuste entre el desarrollo intelectual precoz y el desarrollo emocional/psicomotor/social.",
      "**TDAH y Lenguaje**: Déficit en memoria de trabajo (ejecutivo central, bucle fonológico y agenda visoespacial) que repercute en la coherencia del discurso oral, la comprensión de instrucciones largas y la pragmática (interrupciones, habla excesiva, pérdida del hilo conductor)."
    ],
    tablaComparativa: {
      titulo: "Diferenciación de Perfiles en Altas Capacidades Intelectuales (Castelló y Batlle, 1998)",
      columnas: ["Perfil ACI", "Criterio Psicométrico (Percentil)", "Características Comunicativo-Lingüísticas"],
      filas: [
        ["Superdotación", "> P75 en todas las áreas + creatividad", "Adquisición temprana del lenguaje y la lectura, vocabulario rico, comprensión de ironía y doble sentido."],
        ["Talento Simple (ej. Verbal)", "> P95 en una única aptitud específica", "Excelencia en expresión/comprensión verbal, pudiendo mostrar rendimiento medio en otras áreas."],
        ["Talento Complejo (ej. Académico)", "> P80 en combinación de aptitudes (verbal + lógica + memoria)", "Gran capacidad de aprendizaje escolar estructurado; posible disincronía socioemocional con iguales."]
      ]
    }
  },

  // ==========================================================================
  // ASIGNATURA 2: ANATOMÍA, FISIOLOGÍA Y NEUROLOGÍA DEL LENGUAJE
  // ==========================================================================
  {
    id: "anat-u1",
    asignaturaId: "anatomia",
    numero: 1,
    titulo: "Unidad 1: Morfología microscópica del sistema nervioso en relación con el lenguaje (I)",
    pdfFile: "Anatomía Fisiología y Neurología del Lenguaje_Unidad 1(1).pdf",
    indice: [
      "1.1. La neurona (soma, dendritas, axón, vaina de mielina) y la sinapsis",
      "1.2. Sustancia gris vs Sustancia blanca en el SNC",
      "1.3. Médula espinal: estructura interna, 31 pares de nervios espinales y vías ascendentes/descendentes",
      "1.4. Encéfalo: Corteza cerebral (5 lóbulos: frontal, parietal, temporal, occipital e ínsula), cuerpo calloso, cerebelo y tronco encefálico"
    ],
    resumen: "Establece los cimientos neuroanatómicos del lenguaje en el Sistema Nervioso Central (SNC). Describe la estructura neuronal y la distribución de la sustancia gris (somas neuronales: periférica en corteza cerebral y central en forma de 'H' en la médula espinal) y sustancia blanca (axones mielinizados). Detalla la médula espinal (31 pares raquídeos: 8 cervicales, 12 torácicos, 5 lumbares, 5 sacros, 1 coccígeo; astas dorsales sensitivas y astas ventrales motoras) y las divisiones del encéfalo: los 5 lóbulos cerebrales (incluyendo la ínsula en el fondo de la cisura de Silvio), las cisuras de Rolando (central), Silvio (lateral) y parieto-occipital, el cuerpo calloso, el cerebelo (unido al tronco por los pedúnculos cerebelosos superior, medio e inferior) y el tronco del encéfalo (mesencéfalo, puente de Varolio y bulbo raquídeo).",
    ideasClave: [
      "**Sustancia Gris vs Blanca**: En el encéfalo la sustancia gris es externa (corteza cerebral) y la blanca interna; en la **médula espinal** se invierte: la sustancia gris es central (forma de mariposa/H: astas posteriores sensitivas y anteriores motoras) y la blanca es periférica.",
      "**Los 5 Lóbulos Cerebrales y sus Áreas**: **Frontal** (corteza motora primaria precentral y Área de Broca), **Parietal** (corteza somatosensorial primaria postcentral, giro supramarginal y angular), **Temporal** (corteza auditiva primaria de Heschl y Área de Wernicke), **Occipital** (corteza visual) e **Ínsula** (oculta en la cisura de Silvio, implicada en planificación articulatoria y procesamiento emocional).",
      "**Cerebelo y Pedúnculos Cerebelosos**: Coordina la precisión, fluidez y sinergia de los movimientos del habla (su lesión produce **disartria atáxica / palabra escandida**). Se conecta al mesencéfalo (pedúnculo superior), protuberancia/puente (pedúnculo medio) y bulbo raquídeo (pedúnculo inferior).",
      "**Tronco del Encéfalo**: Formado por **mesencéfalo, protuberancia (puente de Varolio) y bulbo raquídeo**; aloja los núcleos de la mayoría de los pares craneales implicados en fonación, articulación, audición y deglución."
    ],
    tablaComparativa: {
      titulo: "Organización Funcional de los Lóbulos Cerebrales en Relación con el Lenguaje",
      columnas: ["Lóbulo / Estructura", "Delimitación Anatómica", "Función Neurolingüística Principal"],
      filas: [
        ["Lóbulo Frontal", "Anterior a la cisura de Rolando (central).", "Planificación motora del habla (Área de Broca 44/45), área motora primaria y funciones ejecutivas."],
        ["Lóbulo Temporal", "Inferior a la cisura de Silvio (lateral).", "Recepción auditiva (giro de Heschl) y comprensión verbal/acceso léxico (Área de Wernicke 22)."],
        ["Lóbulo Parietal", "Posterior a Rolando y superior a Silvio.", "Integración multisensorial, lectoescritura y repetición (Giro Supramarginal BA 40 y Giro Angular BA 39)."],
        ["Lóbulo de la Ínsula", "Profundo en el interior de la cisura de Silvio.", "Coordinación práxica fonoarticulatoria (su lesión se asocia a apraxia del habla)."]
      ]
    }
  },
  {
    id: "anat-u2",
    asignaturaId: "anatomia",
    numero: 2,
    titulo: "Unidad 2: Morfología microscópica del sistema nervioso en relación con el lenguaje (II): Sistema receptor",
    pdfFile: "Anatomía Fisiología y Neurología del Lenguaje_Unidad 2(1).pdf",
    indice: [
      "2.1. Receptores sensoriales (exterorreceptores, interorreceptores, propiorreceptores) y Sistema Nervioso Periférico (SNP)",
      "2.2. Anatomía del oído: Oído externo, Oído medio (caja timpánica, cadena osicular y trompa de Eustaquio) y Oído interno (laberinto óseo y membranoso)",
      "2.3. Fisiología de la audición (Órgano de Corti, 16-18.000 Hz) y clasificación de las hipoacusias",
      "2.4. Sistema receptor visual: túnicas del globo ocular (esclerótica/córnea, úvea y retina con conos y bastones)"
    ],
    resumen: "Estudia el Sistema Nervioso Periférico (12 pares de nervios craneales y 31 espinales; división somática vs autónoma simpática/parasimpática) y los órganos receptores del lenguaje: el sistema auditivo y el sistema visual. Detalla las tres partes del oído: oído externo (pabellón auricular y CAE hasta el tímpano), oído medio (cadena de huesecillos martillo, yunque y estribo que **amplifica por 22** la presión sonora hacia la ventana oval, músculos tensor del tímpano y del estribo, y trompa de Eustaquio) y oído interno (vestíbulo, canales semicirculares y cóclea o caracol con rampa vestibular, media/coclear y timpánica, y el **Órgano de Corti** sobre la membrana basilar). Completa con la anatomía del ojo para la lectura.",
    ideasClave: [
      "**Amplificación del Oído Medio (x22)**: La diferencia de superficie entre la membrana timpánica y la platina del estribo en la ventana oval, junto con la palanca osicular (martillo-yunque-estribo), multiplica por **22** la fuerza mecánica de la onda sonora.",
      "**Órgano de Corti y Transducción Auditiva**: Situado en el conducto coclear (rampa media, con endolinfa) sobre la **membrana basilar** y cubierto por la **membrana tectoria**. Sus células ciliadas internas y externas transforman la energía mecánica/hidráulica en impulsos bioeléctricos hacia el VIII par craneal (rango humano: **16 Hz a 18.000-20.000 Hz**).",
      "**Tonotopía Coclear**: La **base** de la cóclea (cerca de la ventana oval) codifica las frecuencias **agudas**; el **ápex o helicotrema** codifica las frecuencias **graves**.",
      "**Fotorreceptores de la Retina (Lectura)**: Los **conos** (concentrados en la mácula/fóvea) proporcionan visión diurna, detalle agudo para las letras y color (rojo, verde, azul); los **bastones** proporcionan visión periférica y nocturna/escotópica."
    ],
    tablaComparativa: {
      titulo: "Anatomofisiología y Patología de las 3 Divisiones del Oído",
      columnas: ["Región del Oído", "Estructuras Anatómicas Clave", "Función y Tipo de Hipoacusia si se Lesiona"],
      filas: [
        ["Oído Externo", "Pabellón auricular (hélix, trago, concha) y Conducto Auditivo Externo (CAE).", "Captación, localización y conducción aérea hasta el tímpano -> Hipoacusia de transmisión/conductiva."],
        ["Oído Medio", "Tímpano, Martillo, Yunque, Estribo, Ventana Oval/Redonda y Trompa de Eustaquio.", "Amplificación mecánica (x22) y equilibrio de presiones -> Hipoacusia de transmisión/conductiva."],
        ["Oído Interno", "Vestíbulo, Canales Semicirculares y Cóclea (Órgano de Corti + VIII par).", "Transducción mecano-eléctrica al SNC -> Hipoacusia neurosensorial (de percepción)."]
      ]
    }
  },
  {
    id: "anat-u3",
    asignaturaId: "anatomia",
    numero: 3,
    titulo: "Unidad 3: Órganos motores o expresivos en el sistema fonoarticulatorio",
    pdfFile: "Anatomía Fisiología y Neurología del Lenguaje_Unidad 3(1).pdf",
    indice: [
      "3.1. Cavidades infraglóticas (sistema respiratorio: diafragma, pulmones, bronquios, tráquea)",
      "3.2. Cavidad glótica o laríngea: esqueleto cartilaginoso, musculatura intrínseca y fisiología de la fonación (Efecto Bernoulli)",
      "3.3. Cavidades supraglóticas (resonancia y articulación: faringe, velo del paladar, cavidad bucal, lengua, dientes, fosas nasales)",
      "3.4. Inervación por pares craneales (V, VII, IX, X, XI, XII) y fisiología de la deglución"
    ],
    resumen: "Analiza la anatomía y fisiología de los órganos efectores del habla divididos en tres pisos: (1) **Cavidades infraglóticas** (diafragma, caja torácica, pulmones y tráquea), que aportan la corriente de aire espiratorio y la presión subglótica; (2) **Cavidad laríngea o glótica** (3 cartílagos impares: tiroides, cricoides y epiglotis; 3 pares: aritenoides, corniculados de Santorini y cuneiformes de Wrisberg; pliegues vocales e inervación por el X par craneal / nervio vago), donde se produce la voz mediante el ciclo glótico y el **efecto Bernoulli**; y (3) **Cavidades supraglóticas** (rinofaringe, orofaringe, laringofaringe, fosas nasales y cavidad oral con lengua, labios, dientes y paladar duro/blando), donde el sonido laríngeo se amplifica por resonancia y se articula en fonemas.",
    ideasClave: [
      "**Cartílagos de la Laringe**: **Impares** (Tiroides, Cricoides y Epiglotis) y **Pares** (Aritenoides —donde se insertan los pliegues vocales—, Corniculados de Santorini y Cuneiformes de Wrisberg).",
      "**Músculo Abductor vs Aductores de la Glotis**: El único músculo que **abre (abduce)** la glotis para respirar es el **cricoaritenoideo posterior**. Los que **cierran (aducen)** y tensan para fonar son el cricoaritenoideo lateral, interaritenoideo, tiroaritenoideo (músculo vocal) y cricotiroideo.",
      "**Teoría Mioelástica-Aerodinámica y Efecto Bernoulli**: Durante la fonación, los pliegues vocales se aducen; la presión aérea subglótica vence su resistencia y los separa; al pasar el aire a gran velocidad por la estrechez glótica disminuye la presión lateral (**efecto Bernoulli**), lo que sumado a la elasticidad del tejido vuelve a cerrar la glotis cíclicamente.",
      "**Pares Craneales Fonoarticulatorios**: **V Trigémino** (masticación y sensibilidad facial), **VII Facial** (mímica y sellado labial), **IX Glosofaríngeo** (faringe y reflejo deglutorio), **X Vago** (fonación laríngea y velo del paladar), **XI Accesorio** (esternocleidomastoideo y trapecio) y **XII Hipogloso** (motricidad intrínseca y extrínseca de la lengua)."
    ],
    tablaComparativa: {
      titulo: "Los 3 Niveles del Sistema Fonoarticulatorio (Unidad 3)",
      columnas: ["Nivel Anatómico", "Órganos Principales", "Función Fisiológica en el Habla"],
      filas: [
        ["Cavidades Infraglóticas", "Diafragma, músculos intercostales, pulmones, bronquios y tráquea.", "Fuelle respiratorio: genera el flujo espiratorio y la presión subglótica."],
        ["Cavidad Glótica / Laríngea", "Cartílagos laríngeos (tiroides, cricoides, aritenoides, epiglotis) y cuerdas vocales.", "Fonación (vibración glótica por efecto Bernoulli) y válvula protectora en la deglución."],
        ["Cavidades Supraglóticas", "Faringe, velo del paladar, fosas nasales, paladar duro, lengua, dientes y labios.", "Resonancia (timbre oral/nasal) y articulación de los fonemas."]
      ]
    }
  },
  {
    id: "anat-u4",
    asignaturaId: "anatomia",
    numero: 4,
    titulo: "Unidad 4: Organización fisiológica del lenguaje (I)",
    pdfFile: "Anatomía Fisiología y Neurología del Lenguaje_Unidad 4(1).pdf",
    indice: [
      "4.1. Requisitos de los sistemas lingüísticos (Hockett / Cuetos: doble articulación, arbitrariedad, productividad, desplazamiento)",
      "4.2. Dimensión estructural: Modelo Multimodal Cerebral del Lenguaje (González y Hornauer-Hughes, 2014)",
      "4.3. Dimensión funcional (cognitiva, comunicativa y las 6 funciones del lenguaje de Jakobson) y comportamental",
      "4.4. Componentes del lenguaje: fonemas (24 en español), morfemas/palabras (clase abierta vs functores), sintaxis y discurso"
    ],
    resumen: "Integra la arquitectura neurofisiológica y psicolingüística del lenguaje. Analiza las propiedades universales del lenguaje humano (doble articulación de Martinet, arbitrariedad, desplazamiento, recursividad) y sus tres dimensiones: (1) **Estructural** a través del *Modelo Multimodal Cerebral del Lenguaje* (Área de Broca BA 44/45, Área de Wernicke BA 22, Fascículo Arqueado, Giro Supramarginal BA 40 y Giro Angular BA 39); (2) **Funcional**, que engloba la representación simbólica y las 6 funciones de Roman Jakobson (referencial, emotiva, conativa, fática, poética y metalingüística); y (3) **Comportamental** (conducta codificadora del emisor y decodificadora del receptor). Finalmente desglosa los componentes lingüísticos desde el fonema hasta el discurso.",
    ideasClave: [
      "**Modelo Multimodal Cerebral del Lenguaje (González y Hornauer-Hughes, 2014)**: Red perisilviana izquierda integrada por **Área de Broca** (programación motora y sintaxis), **Área de Wernicke** (decodificación auditivo-verbal), **Fascículo Arqueado** (vía de sustancia blanca que las conecta bidireccionalmente para la repetición), **Giro Supramarginal** (procesamiento fonológico) y **Giro Angular** (integración multimodal para lectoescritura y semántica).",
      "**Las 6 Funciones del Lenguaje de Jakobson**: **Referencial** (contexto/información objetiva), **Emotiva o Expresiva** (emisor), **Conativa o Apelativa** (receptor/mandato), **Fática o de Contacto** (canal: abrir/mantener la comunicación), **Poética o Estética** (mensaje/forma) y **Metalingüística** (código: hablar sobre el propio lenguaje).",
      "**Palabras de Contenido vs Palabras Funcionales (Functores)**: Las de **contenido** (sustantivos, verbos, adjetivos) son de *clase abierta* y carga semántica; los **functores** (artículos, preposiciones, conjunciones, pronombres) son de *clase cerrada* y estructuran la gramática (se pierden típicamente en el agramatismo de la afasia de Broca y en el TDL)."
    ],
    tablaComparativa: {
      titulo: "Nodos del Modelo Multimodal Cerebral del Lenguaje y Efecto de su Lesión",
      columnas: ["Estructura Cerebral", "Áreas de Brodmann", "Función y Síndrome Clínico por Lesión"],
      filas: [
        ["Área de Broca", "BA 44 y 45 (Giro frontal inferior izq.)", "Programación motora del habla y sintaxis -> Afasia de Broca (no fluente, agramatismo)."],
        ["Área de Wernicke", "BA 22 (Giro temporal superior izq.)", "Comprensión auditivo-verbal y selección léxica -> Afasia de Wernicke (fluente, jergafasia, anosognosia)."],
        ["Fascículo Arqueado", "Tracto de sustancia blanca fronto-temporal", "Conexión fonológica entre Wernicke y Broca -> Afasia de Conducción (incapacidad para repetir)."],
        ["Giro Angular y Supramarginal", "BA 39 y BA 40 (Lóbulo parietal inferior)", "Integración fonológica, semántica y lectoescritora -> Alexia con agrafía, anomia."]
      ]
    }
  },
  {
    id: "anat-u5",
    asignaturaId: "anatomia",
    numero: 5,
    titulo: "Unidad 5: Organización fisiológica del lenguaje (II): Percepción, comprensión y producción",
    pdfFile: "Anatomía Fisiología y Neurología del Lenguaje_Unidad 5(1).pdf",
    indice: [
      "5.1. Percepción del habla: percepción categórica, Teoría Motora (Liberman), Efecto McGurk y restauración fonémica",
      "5.2. Percepción del lenguaje escrito: movimientos sacádicos, fijaciones (225 ms), regresiones (10-15%) y Modelo Interactivo de McClelland y Rumelhart",
      "5.3. Acceso al léxico mental: Modelo de Búsqueda Serial de Forster vs Modelo de Logogén de Morton",
      "5.4. Producción del lenguaje (Conceptualización, Formulación de Fromkin, Articulación y Autosupervisión)"
    ],
    resumen: "Culmina el recorrido fisiológico analizando cómo procesamos y producimos el lenguaje en tiempo real. En **percepción del habla** destaca la percepción categórica, la Teoría Motora de Liberman, el **Efecto McGurk** (integración audiovisual donde ver el movimiento labial [ga] y oír [ba] genera la percepción de [da]) y la restauración fonémica descendente (*top-down*). En **percepción visual de la lectura** detalla los movimientos oculares sacádicos, las fijaciones (~225 ms) y las regresiones (10-15%). En **comprensión léxica** compara el modelo serial autónomo de Forster (1979) con el modelo interactivo de activación de **logogenes** de Morton (1969). Finalmente, en **producción oral** expone las 4 etapas de Levelt/Carroll y el modelo de generador de enunciados de Fromkin (1971).",
    ideasClave: [
      "**Efecto McGurk**: Demuestra que la percepción del habla es multimodal: cuando la información auditiva (/ba/) entra en conflicto con la información visual labial (/ga/), el cerebro fusiona ambas y percibe un tercer fonema (/da/).",
      "**Parámetros Oculares en la Lectura**: Los ojos avanzan a saltos llamados **movimientos sacádicos** (durante los cuales no se extrae información), deteniéndose en **fijaciones** de unos **225-250 ms**; entre el **10% y el 15%** de los movimientos son **regresiones** hacia atrás para releer.",
      "**Forster (1979) vs Morton (1969)**: El **Modelo de Búsqueda Serial de Forster** es autónomo y en dos etapas (archivos de acceso periféricos organizados por frecuencia -> archivo maestro); el **Modelo de Logogén de Morton** es directo, en paralelo e interactivo (cada palabra tiene un *logogén* que acumula evidencia sensorial y contextual hasta superar su umbral de activación).",
      "**Las 4 Etapas de Producción Oral (Levelt / Carroll, 2021)**: (1) **Conceptualización** (planificar el mensaje preverbal), (2) **Formulación** (codificación gramatical, léxica y fonológica —modelo de Fromkin—), (3) **Articulación** (ejecución motora fonoarticulatoria) y (4) **Autosupervisión** (monitorización del propio discurso para detectar y corregir lapsus linguae)."
    ],
    tablaComparativa: {
      titulo: "Modelos Clásicos de Acceso al Léxico Mental (Unidad 5)",
      columnas: ["Característica", "Modelo de Búsqueda Serial (Forster, 1979)", "Modelo de Logogén (Morton, 1969)"],
      filas: [
        ["Arquitectura", "Serial, modular y autónoma (en dos etapas).", "En paralelo, directa e interactiva."],
        ["Mecanismo de acceso", "Compara el estímulo en un 'archivo de acceso' (ortográfico/fonológico) ordenado por frecuencia y apunta al 'archivo maestro'.", "Cada palabra posee un 'logogén' con un umbral de activación; las palabras frecuentes tienen un umbral más bajo."],
        ["Papel del contexto", "El contexto sintáctico/semántico solo actúa después del acceso léxico.", "El contexto y el estímulo sensorial suman activación simultáneamente en el logogén."]
      ]
    }
  },

  // ==========================================================================
  // ASIGNATURA 3: EVALUACIÓN E INTERVENCIÓN EN LOS TRASTORNOS DEL LENGUAJE ORAL
  // ==========================================================================
  {
    id: "oral-u1",
    asignaturaId: "oral",
    numero: 1,
    titulo: "Unidad 1: Introducción al lenguaje oral, desarrollo evolutivo, prevención y marco LOMLOE",
    pdfFile: "Evaluación e intervención en los trastornos del lenguaje oral_Unidad 1.pdf",
    indice: [
      "1.1. Concepto y dimensiones del lenguaje oral: Forma, Contenido y Uso",
      "1.2. Etapas del desarrollo del lenguaje: Etapa prelingüística (0-12 meses) y Etapa lingüística (12 meses a 6 años)",
      "1.3. Niveles de prevención escolar (Caplan: primaria, secundaria y terciaria) y signos de alerta por edad",
      "1.4. Marco normativo LOMLOE (Art. 20, 73, 74 y 75) y Diseño Universal para el Aprendizaje (DUA)"
    ],
    resumen: "Presenta el desarrollo normativo del lenguaje oral como referente indispensable para detectar desviaciones o retrasos. Divide la evolución en **etapa prelingüística (0-12 meses)** (llanto diferenciado, sonrisa social, arrullos/gorjeos, juego vocálico, balbuceo canónico o reduplicativo hacia los 6-9 meses, balbuceo variado y **protopalabras** con atención conjunta y protoimperativos/protodeclarativos a los 9-12 meses) y **etapa lingüística (>12 meses)** (etapa holofrástica 12-18m, habla telegráfica de 2 palabras a los 18-24m, explosión léxica y morfosintáctica a los 2-3 años y consolidación fonológica/pragmática de 3 a 6 años). Aplica los tres niveles de prevención de Caplan en la escuela bajo el enfoque DUA de la LOMLOE.",
    ideasClave: [
      "**Protoimperativos vs Protodeclarativos (9-12 meses)**: Los **protoimperativos** usan al adulto como medio para conseguir un objeto (pedir); los **protodeclarativos** buscan compartir la atención o experiencia sobre un objeto con el adulto (su ausencia es un signo de alerta temprano de TEA).",
      "**Hitos Lingüísticos Clave**: **12 meses** (primera palabra funcional), **18-24 meses** (50 palabras y combinación de 2 palabras / habla telegráfica), **3 años** (frases de 3-4 palabras, uso de *yo*, comprensible para extraños en un 75%), **4-5 años** (oraciones compuestas y cierre de la mayoría del inventario fonológico salvo /r/ múltiple que puede consolidarse hasta los 5-6 años).",
      "**Los 3 Niveles de Prevención en AL (Caplan)**: **Primaria** (actuación universal en Infantil para estimular el lenguaje y evitar que aparezcan trastornos), **Secundaria** (detección precoz y cribado ante primeros signos de alerta para intervenir cuanto antes) y **Terciaria** (intervención rehabilitadora especializada y adaptaciones cuando el trastorno ya está instaurado)."
    ],
    tablaComparativa: {
      titulo: "Hitos Evolutivos del Lenguaje Oral y Signos de Alerta Temprana (0-5 años)",
      columnas: ["Edad", "Hitos Evolutivos Esperables", "Signos de Alerta para Derivación a AL"],
      filas: [
        ["0 - 12 meses (Prelingüística)", "Balbuceo canónico (6m), respuesta al nombre, atención conjunta, gestos (señalar) y protopalabras (10-12m).", "Ausencia de balbuceo a los 9m, no responde a sonidos ni al nombre, no señala ni comparte miradas a los 12m."],
        ["12 - 24 meses", "Etapa holofrástica (12-18m); a los 24m posee >50 palabras y une 2 palabras (habla telegráfica).", "Menos de 50 palabras inteligibles o ausencia de combinaciones de 2 palabras a los 24 meses (Inicio Tardío)."],
        ["2 - 3 años", "Explosión léxica, oraciones simples (S-V-O), preguntas (¿qué?, ¿dónde?), habla inteligible al 75%.", "Habla ininteligible para personas cercanas, uso exclusivo de palabras sueltas o ecolalias persistentes."],
        ["4 - 5 años", "Oraciones subordinadas, narración de experiencias, dominio de casi todos los fonemas.", "Persistencia de múltiples procesos de simplificación fonológica, agramatismo o dificultades de comprensión (posible TDL)."]
      ]
    }
  },
  {
    id: "oral-u2",
    asignaturaId: "oral",
    numero: 2,
    titulo: "Unidad 2: Alteraciones del habla y la voz primarias: RSH y TSH",
    pdfFile: "Evaluación e intervención en los trastornos del lenguaje oral_Unidad 2.pdf",
    indice: [
      "2.1. Evolución terminológica: de la dislalia al Trastorno de los Sonidos del Habla (TSH - Susanibar et al., 2016)",
      "2.2. Retraso Simple del Habla (RSH) vs TSH (fonético, fonológico y fonético-fonológico)",
      "2.3. Procesos de Simplificación Fonológica (sustitución, asimilación y estructura silábica)",
      "2.4. Evaluación (PEFF, RFI, PLON-R, A-RE-HA) e intervención basada en la evidencia científica (Farquharson, 2019)"
    ],
    resumen: "Aborda la evaluación e intervención en las alteraciones primarias del habla: el Retraso Simple del Habla (RSH, desfase madurativo leve en los procesos fonológicos que se normaliza antes de los 5 años) y el **Trastorno de los Sonidos del Habla (TSH)**. Siguiendo a Susanibar et al. (2016), clasifica el TSH en tres subtipos: **fonético** (motor/articulatorio), **fonológico** (cognitivo-lingüístico con persistencia de Procesos de Simplificación Fonológica como frontalización, oclusivización, reducción de grupos consonánticos u omisión de coda) y **mixto (fonético-fonológico)**. Destaca la importancia de una intervención basada en la evidencia científica (pares mínimos, bombardeo auditivo, conciencia fonológica y colocación fonética), **desaconsejando el uso de praxias bucofonatorias no verbales y ejercicios de soplo aislados** para corregir el TSH (Farquharson, 2019).",
    ideasClave: [
      "**Evidencia Científica sobre Praxias y Soplo (Farquharson, 2019; Susanibar et al., 2016)**: Los ejercicios motores orales no verbales (praxias con mermelada, inflar globos, soplar velas) **NO tienen evidencia científica** de transferencia a la mejora de los sonidos del habla en el TSH; el habla se aprende hablando y trabajando directamente sobre el sonido y el contraste fonológico.",
      "**Los 3 Tipos de Procesos de Simplificación Fonológica (Bosch, 2004)**: (1) **Relativos a la estructura silábica** (reducción de grupos consonánticos *'tabe' por 'cable'*, omisión de consonante final o sílaba átona *'tate' por 'tomate'*), (2) **Procesos de sustitución** (frontalización *'tasa' por 'casa'*, oclusivización de fricativas *'poca' por 'foca'*, ausencia de vibrante) y (3) **Procesos de asimilación** (*'papo' por 'pato'*).",
      "**Pruebas de Evaluación del Habla**: **PEFF** (Protocolo de Evaluación Fonética-Fonológica de Susanibar), **RFI** (Registro Fonológico Inducido de Monfort y Juárez, 57 tarjetas), **A-RE-HA** (Aguilar y Serra) y **PLON-R**."
    ],
    tablaComparativa: {
      titulo: "Subtipos de Trastorno de los Sonidos del Habla (TSH - Susanibar et al., 2016)",
      columnas: ["Subtipo de TSH", "Nivel Afectado", "Comportamiento en Repetición vs Habla Espontánea e Intervención"],
      filas: [
        ["TSH Fonético", "Fisiológico / Motor-articulatorio", "El error (distorsión/sustitución) es idéntico en habla espontánea y en repetición aislada. Intervención: guía fonética de punto y modo con habla real."],
        ["TSH Fonológico", "Cognitivo-lingüístico (representación mental)", "Articula el fonema en sílaba aislada o repetición, pero aplica Procesos de Simplificación Fonológica al hablar. Intervención: Pares mínimos, bombardeo auditivo y conciencia fonológica."],
        ["TSH Fonético-Fonológico", "Ambos niveles (motor + organizativo)", "Coexisten errores articulatorios fijos con múltiples procesos de simplificación fonológica. Intervención combinada."]
      ]
    }
  },
  {
    id: "oral-u3",
    asignaturaId: "oral",
    numero: 3,
    titulo: "Unidad 3: Alteraciones del habla y la voz secundarias: Disartria, Disglosia y Disfonía infantil",
    pdfFile: "Evaluación e intervención en los trastornos del lenguaje oral_Unidad 3.pdf",
    indice: [
      "3.1. Disartria: etiología neurológica, clasificación clínica (flácida, espástica, atáxica, hipocinética, hipercinética, mixta) y evaluación (PEVH, AIDS)",
      "3.2. Disglosia: clasificación topográfica (labial, mandibular, dental, lingual, palatina, nasal) y evaluación miofuncional (OMES-E, PEMO)",
      "3.3. Disfonía infantil: factores de riesgo, nódulos vocales, evaluación (escala GRBAS) e higiene/reeducación vocal (Fleta, 2021)",
      "3.4. Intervención logopédica y miofuncional en alteraciones secundarias"
    ],
    resumen: "Estudia las patologías secundarias del habla y la voz con base orgánica o neurológica. En **Disartria** detalla cómo las lesiones del SNC/SNP afectan a los 5 procesos motores básicos del habla (respiración, fonación, resonancia, articulación y prosodia) y sus instrumentos de evaluación (**PEVH** - Protocolo de Evaluación del Habla y la Voz en Disartria; **AIDS** - Assessment of Intelligibility of Dysarthric Speech). En **Disglosia** analiza las malformaciones craniofaciales (fisura labiopalatina con incompetencia velofaríngea y rinolalia abierta, anquiloglosia, maloclusiones de Angle) y los protocolos miofuncionales (**OMES-E**, **PEMO**, **MBGR**). En **Disfonía infantil** (Fleta, 2021) aborda los nódulos vocales por hiperfunción/abuso vocal, la escala perceptual **GRBAS** y los programas de higiene vocal y coordinación fonorrespiratoria.",
    ideasClave: [
      "**Tipos de Disartria según Localización Neurológica**: **Flácida** (motoneurona inferior/pares craneales: hipotonía, debilidad, hipernasalidad), **Espástica** (motoneurona superior bilateral: hipertonía, voz estrangulada, habla lenta), **Atáxica** (cerebelo: incoordinación, habla escandida), **Hipocinética** (sustancia negra/extrapiramidal: hipofonía, monotonía) e **Hipercinética** (ganglios basales: movimientos involuntarios coreicos/distónicos).",
      "**Evaluación Miofuncional en Disglosia**: Protocolos **OMES-E** (Evaluación Miofuncional Orofacial con Puntuaciones Expandidas) y **PEMO** para valorar morfología, tonicidad y movilidad de labios, lengua, mejillas y paladar, así como respiración, masticación y deglución (deglución atípica). En disglosias y disartrias **SÍ está indicada la Terapia Miofuncional Orofacial**.",
      "**Escala GRBAS en Disfonía**: Evalúa perceptualmente 5 parámetros de la voz de 0 (normal) a 3 (severo): **G** (*Grade*: grado global de disfonía), **R** (*Roughness*: aspereza/ronquera), **B** (*Breathiness*: voz aérea/soplante), **A** (*Asthenia*: astenia/debilidad vocal) y **S** (*Strain*: tensión/esfuerzo vocal)."
    ],
    tablaComparativa: {
      titulo: "Protocolos de Evaluación en Disartria, Disglosia y Disfonía (Unidad 3)",
      columnas: ["Patología Secundaria", "Instrumentos y Protocolos de Evaluación", "Foco Prioritario de la Intervención"],
      filas: [
        ["Disartria", "PEVH (Protocolo Evaluación Voz y Habla), AIDS (Inteligibilidad), escala de Frenchay.", "Postura, control respiratorio-fonatorio, lentificación del ritmo, sobrearticulación y SAAC si la inteligibilidad es muy baja."],
        ["Disglosia", "OMES-E, PEMO, protocolo MBGR, espejo de Glatzel (escape nasal en fisura palatina).", "Coordinación con cirugía/ortodoncia, Terapia Miofuncional Orofacial (TMO), competencia velofaríngea y reeducación articulatoria."],
        ["Disfonía Infantil", "Escala perceptual GRBAS, tiempo máximo de fonación (TMF), índice s/z, exploración ORL.", "Higiene vocal familiar y escolar, relajación laríngea, respiración costodiafragmática e impostación suave."]
      ]
    }
  },
  {
    id: "oral-u4",
    asignaturaId: "oral",
    numero: 4,
    titulo: "Unidad 4: Alteraciones de la fluidez del habla: Disfemia y Taquifemia",
    pdfFile: "Evaluación e intervención en los trastornos del lenguaje oral_Unidad 4.pdf",
    indice: [
      "4.1. Fluidez verbal y diagnóstico diferencial: Disfluencia evolutiva (fisiológica) vs Tartamudez (Disfemia) vs Taquifemia",
      "4.2. Sintomatología manifiesta y encubierta: La metáfora del Iceberg de la Disfemia (Sheehan, 1970)",
      "4.3. Subtipos de disfemia (clónica, tónica y mixta) y protocolos de evaluación (PRET-I, PRET-A, SSI-4)",
      "4.4. Intervención indirecta (preescolar / modelo de demandas y capacidades) e intervención directa (escolar)"
    ],
    resumen: "Profundiza en los trastornos de la fluidez verbal. Establece criterios precisos para diferenciar la **disfluencia evolutiva o fisiológica** (típica entre los 2 y 5 años, con repeticiones de palabras enteras, sin tensión muscular ni conciencia de problema) de la **disfemia instaurada** (repeticiones de sonidos o sílabas, prolongaciones audibles y bloqueos con tensión muscular asociada y conductas de evitación). Utiliza la **metáfora del Iceberg de Sheehan** (punta visible: bloqueos, repeticiones, tics asociados; base sumergida: miedo a hablar, ansiedad, vergüenza, frustración y evitación). Presenta los protocolos **PRET-I** (infantil) y **PRET-A** y las estrategias de intervención indirecta con la familia/aula y directa con el alumno.",
    ideasClave: [
      "**Criterio Cuantitativo de Disfluencia Atípica**: Más de **3 disfluencias tartamudeadas por cada 100 palabras** (o >10% de sílabas disfluentes), repeticiones de $\\ge 3$ unidades en sílabas (*'p-p-p-pato'*), prolongaciones de $>1-2$ segundos o presencia de bloqueos tensos.",
      "**Disfemia Clónica vs Tónica vs Mixta**: **Clónica** (repeticiones involuntarias y compulsivas de sonidos o sílabas), **Tónica** (espasmos e interrupciones totales o bloqueos tensos con salida explosiva del aire) y **Mixta** (clono-tónica o tono-clónica).",
      "**El Iceberg de la Disfemia (Sheehan, 1970)**: Lo observable (bloqueos, prolongaciones, movimientos asociados de parpadeo o cuello) es solo el 10-20%; bajo la superficie están los factores cognitivos y emocionales (logofobia, anticipación negativa, evitación de palabras o situaciones sociales).",
      "**Intervención Indirecta vs Directa**: En **Infantil (<6 años)** predomina la intervención **indirecta** sobre el entorno (Modelo de Demandas y Capacidades de Starkweather; programa Lidcombe): hablar lento y pausado al niño, no interrumpir ni terminar sus frases, eliminar frases como *'respira'* o *'piensa antes de hablar'*. En **Primaria** se suma la intervención **directa** (inicio suave de la fonación, habla prolongada, cancelación y desensibilización emocional)."
    ],
    tablaComparativa: {
      titulo: "Diagnóstico Diferencial: Disfluencia Evolutiva vs Disfemia (Tartamudez) vs Taquifemia",
      columnas: ["Dimensión", "Disfluencia Evolutiva (2-5 años)", "Disfemia / Tartamudez", "Taquifemia (Farfulleo)"],
      filas: [
        ["Tipo de errores", "Repetición de palabras enteras o frases, interjecciones y pausas.", "Repetición de sonidos/sílabas, prolongaciones de sonidos y bloqueos en el inicio.", "Velocidad excesiva e irregular, omisión/telescopaje de sílabas, discurso desorganizado."],
        ["Tensión muscular y Tics", "Ausente.", "Presente (tensión labial, mandibular, laríngea; sincinesias faciales o parpadeo).", "Ausente."],
        ["Conciencia y Ansiedad", "No hay conciencia ni frustración.", "Alta conciencia del bloqueo, ansiedad anticipatoria y conductas de evitación (Iceberg).", "Baja conciencia del problema; mejora cuando se le pide que preste atención al habla."]
      ]
    }
  },
  {
    id: "oral-u5",
    asignaturaId: "oral",
    numero: 5,
    titulo: "Unidad 5: Alteraciones del desarrollo del lenguaje y la comunicación: RSL, TDL, Mutismo, Afasia infantil y Enfermedades raras",
    pdfFile: "Evaluación e intervención en los trastornos del lenguaje oral_Unidad 5.pdf",
    indice: [
      "5.1. Retraso Simple del Lenguaje (RSL / REL): perfil evolutivo y evaluación (PLON-R, ITPA, BLOC)",
      "5.2. Trastorno del Desarrollo del Lenguaje (TDL): marcadores cognitivos (memoria fonológica a corto plazo - Ahufinger et al., 2021) y evaluación (CELF-5)",
      "5.3. Mutismo selectivo (López, 2019): evaluación e intervención gradual por desvanecimiento estimular",
      "5.4. Afasia infantil adquirida (Test de Boston, Token Test) y perfiles lingüísticos en Enfermedades Raras (Síndrome de Williams, X Frágil, Rett, Angelman, Prader-Willi)"
    ],
    resumen: "Cierra la asignatura abordando los trastornos globales del lenguaje y la comunicación. Contrasta el **Retraso Simple del Lenguaje (RSL)** (desfase cronológico homogéneo, comprensión preservada, buena respuesta a la intervención antes de los 5-6 años) con el **Trastorno del Desarrollo del Lenguaje (TDL)** (persistente más allá de los 4-5 años, afectación morfosintáctica severa, déficit en memoria fonológica a corto plazo en repetición de pseudopalabras y en atención sostenida según Ahufinger et al., 2021). Desarrolla el **Mutismo Selectivo** (trastorno de ansiedad infantil donde el niño habla en casa pero enmudece en la escuela), la **Afasia Infantil Adquirida** tras lesión focal y los fenotipos comunicativos de síndromes genéticos y enfermedades raras.",
    ideasClave: [
      "**Marcadores Psicocognitivos del TDL (Ahufinger et al., 2021)**: Además de la afectación morfosintáctica (omisión de functores y errores verbales), los niños con TDL presentan déficits en la **memoria fonológica a corto plazo** (evaluada con repetición de pseudopalabras) y en la **atención sostenida y memoria de trabajo**.",
      "**Pruebas Estandarizadas de Lenguaje Oral**: **CELF-5** (prueba de referencia para TDL de 5 a 15 años), **PLON-R** (cribado de 3 a 6 años en Forma, Contenido y Uso), **BLOC** (Morfología, Sintaxis, Semántica y Pragmática de 5 a 14 años), **ITPA** (Aptitudes Psicolingüísticas de 3 a 10 años), **Peabody PPVT-III** (vocabulario receptivo) y **Token Test / Test de Boston** (comprensión y afasia).",
      "**Intervención en Mutismo Selectivo**: Nunca forzar a hablar ni exponer en público; usar **desvanecimiento estimular**, moldeamiento, comunicación no verbal/escrita/grabada como puente y reducción de la ansiedad en el aula.",
      "**Fenotipos en Síndromes Genéticos**: **Síndrome de Williams** (verborrea aparente o lenguaje 'hiperverbal' superficial pero con déficit pragmático y visoespacial), **Síndrome de Angelman** (ausencia casi total de habla oral, requiere SAAC), **Síndrome de Rett** (regresión severa del lenguaje y habilidades manuales tras los 6-18 meses)."
    ],
    tablaComparativa: {
      titulo: "Diagnóstico Diferencial entre Retraso Simple del Lenguaje (RSL) y TDL (Unidad 5)",
      columnas: ["Criterio Clínico", "Retraso Simple del Lenguaje (RSL)", "Trastorno del Desarrollo del Lenguaje (TDL)"],
      filas: [
        ["Naturaleza y Evolución", "Desfase cronológico transitorio; sigue las etapas normales pero más lento. Remite hacia los 5-6 años.", "Trastorno neurobiológico persistente y duradero (>4-5 años) con evolución disarmónica."],
        ["Niveles Lingüísticos Afectados", "Afecta sobre todo a la expresión (fonología y morfosintaxis simple); comprensión preservada.", "Afecta a todos los niveles (especialmente morfosintaxis y fonología) y frecuentemente a la comprensión."],
        ["Memoria Fonológica y Lectoescritura", "Ligeramente reducida o normal; baja repercusión en lectoescritura si se interviene pronto.", "Déficit marcado en repetición de pseudopalabras y memoria de trabajo; alto riesgo de dislexia y fracaso escolar."]
      ]
    }
  },

  // ==========================================================================
  // ASIGNATURA 4: EVALUACIÓN E INTERVENCIÓN EN LOS TRASTORNOS DE LA LENGUA ESCRITA
  // ==========================================================================
  {
    id: "escr-u1",
    asignaturaId: "escrita",
    numero: 1,
    titulo: "Unidad 1: Bases teóricas de la lengua escrita desde una perspectiva multifocal",
    pdfFile: "Evaluación e intervención en los trastornos del lengua escrita Unidad 1.pdf",
    indice: [
      "1.1. Evolución conceptual: de la madurez lectora al aprendizaje del lenguaje escrito",
      "1.2. Procesos cognitivos automáticos (bajo nivel) vs procesos controlados (alto nivel)",
      "1.3. La conciencia fonológica (léxica, silábica, intrasilábica y fonémica) como predictor clave",
      "1.4. Características del sistema ortográfico español: 27 letras, 30 grafemas y 24 fonemas (transparencia en lectura vs opacidad en escritura)"
    ],
    resumen: "Analiza los fundamentos psicolingüísticos de la lectura y la escritura. Supera la visión maduracionista perceptivo-motriz tradicional demostrando que el mejor predictor de la lectoescritura es el procesamiento fonológico y la **conciencia fonológica** (dividida en conciencia léxica, silábica, intrasilábica de ataque-rima y fonémica). Distingue los **procesos cognitivos inferiores o automáticos** (decodificación grafema-fonema y reconocimiento de palabras) de los **procesos superiores o controlados** (comprensión sintáctica y semántica del texto: cuando la decodificación no se automatiza, consume toda la memoria de trabajo e impide comprender). Finalmente examina la asimetría del español: **27 letras, 30 grafemas (incluyendo dígrafos ch, ll, rr, gu, qu) y 24 fonemas**.",
    ideasClave: [
      "**Asimetría del Español (Transparente en Lectura, Opaco en Escritura)**: En **lectura** el español es totalmente transparente porque cada grafema tiene una pronunciación unívoca según reglas fijas (RCGF); sin embargo, en **escritura** es más opaco porque un mismo fonema puede representarse con varios grafemas (**RCFG inconsistentes**, ej. /b/ -> *b, v, w*; /x/ -> *j, g*; /k/ -> *c, qu, k*; /i/ -> *i, y*; o la *h* muda).",
      "**Niveles de la Conciencia Fonológica**: (1) **Conciencia léxica** (segmentar la oración en palabras), (2) **Conciencia silábica** (contar, invertir u omitir sílabas), (3) **Conciencia intrasilábica** (separar el *ataque* consonántico inicial de la *rima* vocálico-consonántica) y (4) **Conciencia fonémica** (el nivel más complejo y directamente ligado al principio alfabético: aislar, fusionar y suprimir fonemas individuales).",
      "**Relación entre Automatización y Comprensión**: La memoria operativa tiene capacidad limitada; si los procesos léxicos de decodificación no se automatizan, el lector invierte todos sus recursos cognitivos en descifrar las letras y fracasa en los procesos superiores de comprensión textual."
    ],
    tablaComparativa: {
      titulo: "Asimetría del Sistema Ortográfico Español: Lectura (RCGF) vs Escritura (RCFG)",
      columnas: ["Proceso", "Regla de Conversión", "Grado de Transparencia en Español y Consecuencia Clínica"],
      filas: [
        ["Lectura", "Conversión Grafema-Fonema (RCGF)", "Muy transparente (unidireccional): incluso las reglas dependientes del contexto (c, g, r) son regulares. En dislexia en español destaca la **lentitud lectora** más que la inexactitud extrema."],
        ["Escritura", "Conversión Fonema-Grafema (RCFG)", "Semi-opaco en ortografía arbitraria: existen varios grafemas para un solo fonema (b/v, g/j, c/z, ll/y, h). Exige consolidar el almacén léxico ortográfico (vía léxica)."]
      ]
    }
  },
  {
    id: "escr-u2",
    asignaturaId: "escrita",
    numero: 2,
    titulo: "Unidad 2: El sistema de lectura y escritura: bases neurobiológicas y modelos cognitivos",
    pdfFile: "Evaluación e intervención en los trastornos del lengua escrita Unidad 2.pdf",
    indice: [
      "2.1. Neurobiología de la lectura y escritura: Circuito Dorsal (temporoparietal), Circuito Ventral (occipitotemporal / VWFA) y Área de Exner",
      "2.2. Modelos de lectura: Modelo de Doble Ruta en Cascada (Coltheart et al., 2001) y Modelo Conexionista en Triángulo (Seidenberg y McClelland, 1989)",
      "2.3. Procesamiento sintáctico y semántico en la comprensión lectora (Kintsch y Van Dijk, 1978: microestructura, macroestructura y modelo de la situación)",
      "2.4. Modelos cognitivos de la escritura: Hayes y Flower (1980), Cuetos (2009) y Bereiter y Scardamalia (1987)"
    ],
    resumen: "Describe la arquitectura cerebral y cognitiva del lenguaje escrito. A nivel neurobiológico identifica tres redes en el hemisferio izquierdo: el **circuito dorsal temporoparietal** (giro temporal superior, giro supramarginal y angular: ensamblaje fonológico subléxico), el **circuito ventral occipitotemporal** (giro fusiforme o *Área de la Forma Visual de las Palabras*: reconocimiento ortográfico global rápido) y el circuito frontal inferior (Área de Broca para articulación y **Área de Exner**, delante de la corteza motora de la mano, para los programas motores de la escritura). A nivel cognitivo detalla el **Modelo de Doble Ruta de Coltheart** y el **Modelo Conexionista** en lectura, el modelo de comprensión de **Kintsch y Van Dijk**, y los modelos de composición escrita de **Hayes y Flower**, **Cuetos** y **Bereiter y Scardamalia**.",
    ideasClave: [
      "**Modelo de Doble Ruta de la Lectura (Coltheart et al., 2001)**: **Ruta Léxica (directa o visual)** para leer palabras conocidas frecuentes e irregulares accediendo al léxico visual y semántico; **Ruta Subléxica (indirecta o fonológica)** para leer palabras desconocidas y **pseudopalabras** aplicando las RCGF.",
      "**Modelo de Comprensión de Kintsch y Van Dijk (1978)**: Distingue tres niveles de representación al leer un texto: (1) **Microestructura** (proposiciones locales del texto conectadas entre sí), (2) **Macroestructura** (significado global o tema principal obtenido aplicando macrorreglas de supresión, generalización y construcción) y (3) **Modelo de la Situación** (integración del texto con los conocimientos previos del lector mediante inferencias).",
      "**Modelos de Escritura**: **Hayes y Flower (1980)** (Planificación, Traducción/Transcripción y Revisión); **Cuetos (2009)** (4 módulos: Planificación del mensaje, Construcción sintáctica, Selección léxica por vía subléxica o léxica, y Procesos motores de alógrafos); **Bereiter y Scardamalia (1987)** (*Decir el conocimiento* en novatos vs *Transformar el conocimiento* en expertos)."
    ],
    tablaComparativa: {
      titulo: "Circuitos Neurobiológicos y Rutas Cognitivas de la Lectura (Unidad 2)",
      columnas: ["Ruta Cognitiva (Coltheart)", "Circuito Cerebral Asociado", "Estímulos que Procesa y Qué Ocurre si Falla"],
      filas: [
        ["Vía Subléxica / Fonológica (Indirecta)", "Circuito Dorsal Temporoparietal izq. (Giro Supramarginal, Angular y Temporal Superior).", "Palabras nuevas, infrecuentes y **pseudopalabras** mediante RCGF. Si falla -> **Dislexia Fonológica** (lexicalizaciones)."],
        ["Vía Léxica / Ortográfica (Directa)", "Circuito Ventral Occipitotemporal izq. (Giro Fusiforme / VWFA).", "Palabras conocidas frecuentes e irregulares de un golpe visual. Si falla -> **Dislexia Superficial** (lectura silabeante y confusión de homófonos)."]
      ]
    }
  },
  {
    id: "escr-u3",
    asignaturaId: "escrita",
    numero: 3,
    titulo: "Unidad 3: Trastornos de aprendizaje de la lectura: Evaluación e intervención en Dislexia",
    pdfFile: "Evaluación e intervención en los trastornos del lengua escrita Unidad 3.pdf",
    indice: [
      "3.1. Definición de Dislexia: criterios DSM-5 y nuevo Consenso Delphi de Carroll et al. (2025)",
      "3.2. Clasificación: Dislexias Adquiridas (periféricas y centrales: fonológica, superficial, profunda) vs Dislexias Evolutivas",
      "3.3. Evaluación psicopedagógica de la lectura: PROLEC-R, PROLEC-SE-R, DST-J, TALE, EDIL y PROLEXIA",
      "3.4. Intervención basada en la evidencia en dislexia (Outón, 2004; Cuetos, 2018; García y Pedrosa, 2020)"
    ],
    resumen: "Profundiza en el diagnóstico y tratamiento de la dislexia. Incorpora el **Consenso Delphi internacional de Carroll et al. (2025)**, que define la dislexia como un trastorno del neurodesarrollo caracterizado por dificultades persistentes en la precisión y/o fluidez en la lectura de palabras y en la ortografía, cuyo déficit nuclear reside en el procesamiento fonológico, pero donde influyen también la velocidad de denominación (*RAN*), la memoria de trabajo verbal y el procesamiento ortográfico, rechazando el criterio de discrepancia con el CI. Clasifica las dislexias adquiridas periféricas (atencional, visual, letra a letra) y centrales (**fonológica, superficial y profunda**) y las dislexias evolutivas. Presenta las baterías **PROLEC-R** y **PROLEXIA** y las pautas de intervención explícita y multisensorial.",
    ideasClave: [
      "**Consenso Delphi sobre Dislexia (Carroll et al., 2025)**: (1) Abandona la exigencia de discrepancia entre lectura y CI; (2) Reconoce que en lenguas transparentes como el español el indicador más persistente es el déficit en **fluidez/velocidad lectora** y en ortografía; (3) Destaca la alta comorbilidad con TDL, TDAH y Discalculia.",
      "**Dislexia Fonológica vs Superficial vs Profunda**: En la **Fonológica** falla la vía subléxica (fracaso en pseudopalabras, comete *lexicalizaciones* como leer *'mesa'* donde pone *'mepo'* y errores derivativos); en la **Superficial** falla la vía léxica (lee lento silabeando por vía fonológica, regulariza palabras extranjeras/irregulares y confunde homófonos como *hola/ola*); en la **Profunda** están dañadas ambas vías y aparecen **paralexias semánticas** (leer *'mar'* donde pone *'océano'*).",
      "**Batería PROLEC-R (Cuetos et al., 2014)**: Evalúa los 4 niveles del sistema lector de 6 a 12 años: (1) Identificación de letras (Nombre de letras e Igual-Diferente), (2) Procesos léxicos (**Lectura de palabras** y **Lectura de pseudopalabras** registrando Precisión y Tiempo), (3) Procesos sintácticos (Estructuras gramaticales y Signos de puntuación) y (4) Procesos semánticos (Comprensión de oraciones, textos y comprensión oral)."
    ],
    tablaComparativa: {
      titulo: "Diagnóstico Diferencial de las Dislexias Centrales (Unidad 3)",
      columnas: ["Subtipo de Dislexia", "Ruta Dañada", "Lectura de Palabras vs Pseudopalabras y Errores Característicos"],
      filas: [
        ["Dislexia Fonológica", "Ruta Subléxica (Fonológica)", "Lee bien palabras familiares pero fracasa en **pseudopalabras** y palabras desconocidas. Errores: **lexicalizaciones**, errores derivativos y sustituciones en palabras funcionales."],
        ["Dislexia Superficial", "Ruta Léxica (Visual/Ortográfica)", "Lee pseudopalabras y palabras regulares con la misma lentitud (efecto longitud). Errores: regularización de extranjerismos, silabeo lento y confusión de **homófonos** (*vaca/baca*)."],
        ["Dislexia Profunda / Mixta", "Ambas rutas (Léxica + Subléxica)", "Incapacidad para leer pseudopalabras y grave dificultad en palabras abstractas/funcionales. Error patognomónico: **paralexias semánticas** (leer *'asno'* donde dice *'burro'*)."]
      ]
    }
  },
  {
    id: "escr-u4",
    asignaturaId: "escrita",
    numero: 4,
    titulo: "Unidad 4: Trastornos de aprendizaje de la escritura: Disgrafía y Disortografía",
    pdfFile: "Evaluación e intervención en los trastornos del lengua escrita Unidad 4.pdf",
    indice: [
      "4.1. Delimitación conceptual: Disgrafía (motriz vs central/lingüística) y Disortografía (Rivas y Fernández, 2011)",
      "4.2. Clasificación de la Disortografía (Temporal, Perceptivo-kinestésica, Disortocinética, Visoespacial, Dinámica y Semántica - Otondo y Bascur, 2020)",
      "4.3. Semiología de los errores de escritura: ortografía natural (vía subléxica) vs ortografía arbitraria (vía léxica) y dispedagogía",
      "4.4. Evaluación (PROESC, TALE, BENHALE, Frostig, Stamback) e intervención reeducativa"
    ],
    resumen: "Diferencia con rigor clínico los trastornos de la expresión escrita. La **Disgrafía** se refiere en sentido estricto (disgrafía evolutiva motriz o caligráfica) a la alteración de la calidad del trazado gráfico (forma, tamaño, inclinación, espaciado, presión y fluidez motora regulada por el área de Exner) sin causa neurológica ni intelectual; mientras que las disgrafías centrales afectan a las rutas léxica o subléxica. Por su parte, la **Disortografía** (Rivas y Fernández, 2011; Cervéra-Mérida e Ygual-Fernández, 2006) es la dificultad específica para transcribir correctamente el código escrito y aplicar las normas ortográficas **sin que tenga que existir alteración en el trazado caligráfico ni en la lectura**. Detalla los 6 subtipos de disortografía y la evaluación mediante **PROESC**.",
    ideasClave: [
      "**Diferencia Clave Disgrafía Motriz vs Disortografía**: La **Disgrafía Motriz** afecta al dibujo de la letra y la ejecución caligráfica (alógrafos y patrones motores); la **Disortografía** afecta al contenido fonológico y ortográfico de la palabra (omisiones, sustituciones, uniones/fragmentaciones y faltas en *b/v, g/j, h*).",
      "**Ortografía Natural vs Ortografía Arbitraria (Cervéra-Mérida e Ygual-Fernández, 2006)**: Los errores de **ortografía natural** dependen de la vía subléxica (sustituciones de fonemas, inversiones, omisiones y uniones/fragmentaciones de palabras); los errores de **ortografía arbitraria y reglada** dependen de la vía léxica y la memoria visual ortográfica (confusión *b/v, h, g/j, ll/y* y reglas como *m antes de p y b*).",
      "**Los 6 Subtipos de Disortografía (Luria / Tsvetkova / Rivas y Fernández, 2011)**: (1) **Temporal** (no percibe los aspectos fonémicos ni el ritmo de la cadena hablada), (2) **Perceptivo-kinestésica** (dificultad para analizar las sensaciones kinestésicas de la articulación -> sustituye sonidos por punto/modo de articulación como *r/l* o *t/d*), (3) **Disortocinética** (alterada la secuenciación fonemática del discurso -> errores de **unión y fragmentación** de palabras), (4) **Visoespacial** (alteración perceptiva visual de la orientación de las letras -> rotaciones *b/d, p/q* y confusión en grafemas de doble grafía *b/v*), (5) **Dinámica o Disgramatismo** (alteración en la expresión gramatical y orden de los elementos en la oración) y (6) **Semántica** (alteración del análisis conceptual simbólico necesario para señalar los límites de las palabras)."
    ],
    tablaComparativa: {
      titulo: "Subtipos Clínicos de Disortografía (Rivas y Fernández, 2011; Otondo y Bascur, 2020)",
      columnas: ["Subtipo de Disortografía", "Mecanismo Subyacente Alterado", "Errores Típicos en la Muestra de Escritura"],
      filas: [
        ["1. Temporal y 2. Perceptivo-kinestésica", "Percepción auditivo-temporal y discriminación kinestésica articulatoria.", "Sustitución de fonemas acústica o articulatoriamente próximos (/t/ por /d/, /p/ por /b/, /r/ por /l/), omisiones de fonemas."],
        ["3. Disortocinética", "Secuenciación fonemática y ordenamiento serial de la cadena hablada.", "Errores de **unión (hiposegmentación: 'elperro') y fragmentación (hipersegmentación: 'en tonces')** de palabras e inversiones."],
        ["4. Visoespacial", "Percepción y memoria visual-espacial de los grafemas y palabras.", "Rotación de letras simétricas (*b/d, p/q*) y errores en la **ortografía arbitraria visual** (*b/v, h, g/j*)."],
        ["5. Dinámica y 6. Semántica", "Estructuración morfosintáctica (disgramatismo) y análisis conceptual.", "Desorden sintáctico en la frase, omisión de nexos y uniones/separaciones por incomprensión del significado léxico."]
      ]
    }
  },
  {
    id: "escr-u5",
    asignaturaId: "escrita",
    numero: 5,
    titulo: "Unidad 5: Trastornos de aprendizaje de las matemáticas: Discalculia y su relación con el lenguaje",
    pdfFile: "Evaluación e intervención en los trastornos del lengua escrita Unidad 5.pdf",
    indice: [
      "5.1. El desarrollo del sentido numérico y la línea numérica mental (Coelho, 2012; Dehaene)",
      "5.2. Definición y clasificación de la Discalculia del Desarrollo (primaria/acalculia vs secundaria y disaritmética)",
      "5.3. Sintomatología y errores frecuentes: seriación, valor posicional, transcodificación numérica y resolución de problemas",
      "5.4. Comorbilidad entre Discalculia y Dislexia e intervención psicopedagógica secuenciada"
    ],
    resumen: "Explora la relación entre el procesamiento lingüístico y el aprendizaje matemático a través del estudio de la **Discalculia del Desarrollo** (afecta entre el 3% y el 6% de la población escolar). Explica el concepto de **sentido numérico** (capacidad innata situada en el surco intraparietal para representar y manipular magnitudes aproximadas y subitizar hasta 3-4 elementos) y su conexión con el código verbal-fonológico y el código arábigo visual (**Modelo del Triple Código de Dehaene**). Analiza los errores de **transcodificación numérica** (pasar del dictado verbal *'doscientos cuatro'* al número arábigo *2004* en lugar de *204*), fallos en el valor posicional, en la recuperación de hechos numéricos en la memoria verbal (tablas de multiplicar) y en la comprensión de problemas verbales.",
    ideasClave: [
      "**Modelo del Triple Código (Dehaene) y Conexión con la Dislexia**: Los números se procesan en 3 códigos: (1) **Magnitud analógica** (surco intraparietal bilateral: comparar cantidades), (2) **Código visual arábigo** (región occipitotemporal: leer/escribir cifras como *'45'*) y (3) **Código verbal auditivo** (región perisilviana izquierda del lenguaje: nombrar números y memorizar las **tablas de multiplicar** como secuencias fonológicas). Por este tercer código existe alta comorbilidad entre **Dislexia y Discalculia**.",
      "**Errores de Transcodificación Numérica y Valor Posicional**: El alumno con discalculia y/o dificultades lingüísticas comete errores sintácticos al pasar del código verbal al arábigo (ej. ante el dictado *'mil treinta y dos'* escribe *100032* o *1000302* porque transcribe literalmente cada palabra numérica sin integrar el valor posicional).",
      "**Intervención Secuenciada (Concreto -> Pictórico -> Abstracto)**: Partir siempre de la manipulación multisensorial (regletas de Cuisenaire, bloques multibase, ábacos), pasar a la representación gráfica (línea numérica visual, diagramas para problemas verbales) y finalmente al símbolo arábigo y algoritmo."
    ],
    tablaComparativa: {
      titulo: "Relación y Diagnóstico Diferencial entre Discalculia Pura y Dificultades Matemáticas en Dislexia",
      columnas: ["Dimensión Evaluada", "Discalculia del Desarrollo (Déficit Nuclear)", "Dificultades Matemáticas Asociadas a Dislexia / TDL"],
      filas: [
        ["Sentido Numérico y Subitización", "Alterado: dificultad para estimar magnitudes, comparar qué cantidad es mayor o situar números en la recta mental.", "Preservado: comprende bien las cantidades y el razonamiento lógico-matemático no verbal."],
        ["Hechos Numéricos y Tablas de Multiplicar", "Dificultad tanto conceptual como de cálculo.", "Muy afectado por déficit en la memoria fonológica verbal (código verbal de Dehaene) al memorizar las tablas."],
        ["Transcodificación y Problemas Verbales", "Errores en valor posicional, llevadas y selección de la operación.", "Errores al leer o escribir números largos al dictado y al comprender el enunciado lingüístico del problema."]
      ]
    }
  },

  // ==========================================================================
  // ASIGNATURA 5: SISTEMAS AUMENTATIVOS Y ALTERNATIVOS DE LA COMUNICACIÓN Y TIC
  // ==========================================================================
  {
    id: "saac-u1",
    asignaturaId: "saac",
    numero: 1,
    titulo: "Unidad 1: Introducción a los Sistemas Aumentativos y Alternativos de Comunicación (SAAC)",
    pdfFile: "Los sistemas alternativos y aumentativos Unidad 1.pdf",
    indice: [
      "1.1. Concepto de Comunicación Aumentativa y Alternativa (CAA - CEAPAT, 2020): mitos y evidencias",
      "1.2. Taxonomía de los SAAC: Sistemas sin ayuda (símbolos gestuales) vs Sistemas con ayuda (símbolos gráficos y tangibles)",
      "1.3. Productos de apoyo (baja y alta tecnología) y estrategias de acceso (directo, codificado y por barrido)",
      "1.4. Evaluación para la selección de un SAAC: Enfoque ecológico de Tamarit (1989) y Test ComFor (Noens et al., 2006)"
    ],
    resumen: "Introduce los fundamentos de la Comunicación Aumentativa y Alternativa (CAA). Diferencia la función **aumentativa** (complementa y apoya el habla existente o impulsa su aparición) de la **alternativa** (sustituye al habla oral cuando esta no es posible), desmontando el mito de que los SAAC frenan el lenguaje oral. Clasifica los SAAC según requieran o no soporte externo: **sin ayuda** (gestos naturales, lengua de signos, bimodal, palabra complementada, dactilología) y **con ayuda** (objetos reales, fotografías, pictogramas SPC/ARASAAC, Bliss, Minspeak, escritura) en soportes de **baja tecnología** (tableros, cuadernos, E-tran) o **alta tecnología** (comunicadores dinámicos con voz digitalizada/sintetizada). Finalmente expone la evaluación ecológica (Tamarit, 1989) y el **Test ComFor** (Noens et al., 2006) para determinar el nivel de representación simbólica.",
    ideasClave: [
      "**Evidencia Científica frente al Mito de los SAAC**: Los SAAC **NUNCA inhiben ni retrasan** la aparición del lenguaje oral; al contrario, reducen la frustración comunicativa, estructuran la sintaxis visualmente y favorecen el desarrollo del habla siempre que las bases neuromotoras lo permitan.",
      "**Los 4 Niveles de Representación del Test ComFor (Noens et al., 2006)**: Evalúa qué tipo de forma visual comprende la persona: (1) **Sensación** (el objeto sólo se percibe como estímulo sensorial), (2) **Presentación** (comprende objetos concretos o fotos sólo dentro de su rutina contextual), (3) **Representación** (comprende que una fotografía o pictograma representa un referente ausente fuera de contexto) y (4) **Metarrepresentación** (comprende símbolos abstractos y palabras escritas).",
      "**Las 3 Formas Principales de Acceso a un SAAC con Ayuda**: **Acceso directo** (señalar con el dedo, puntero licornio o mirada/lector ocular), **Acceso codificado** (combinación de letras/números o colores para llegar al mensaje) y **Acceso por barrido o escaneo** (dependiente si señala el interlocutor, o independiente automático/dirigido mediante pulsador o conmutador)."
    ],
    tablaComparativa: {
      titulo: "Niveles de Sentido y Forma Simbólica Recomendada según el Test ComFor (Noens et al., 2006)",
      columnas: ["Nivel en el Test ComFor", "Capacidad de Abstracción Simbólica", "Soporte / Símbolo SAAC Recomendado"],
      filas: [
        ["1. Sensación", "Sin intención simbólica; explora sensorialmente el material.", "Objetos reales significativos dentro de la propia actividad sensorial/funcional."],
        ["2. Presentación", "Asocia el objeto a la acción dentro de una rutina predecible.", "Objetos reales en miniatura o partes de objetos (calendarios de anticipación tangibles)."],
        ["3. Representación", "Comprende que la imagen representa un referente aunque no esté presente.", "Fotografías en color -> Pictogramas icónicos transparentes (ARASAAC / SPC)."],
        ["4. Metarrepresentación", "Domina relaciones simbólicas abstractas y arbitrarias.", "Símbolos ideográficos/abstractos (Sistema BLISS) y lenguaje escrito alfabético."]
      ]
    }
  },
  {
    id: "saac-u2",
    asignaturaId: "saac",
    numero: 2,
    titulo: "Unidad 2: SAAC y ayudas técnicas en la discapacidad auditiva",
    pdfFile: "Los sistemas alternativos y aumentativos Unidad 2.pdf",
    indice: [
      "2.1. Perspectivas sobre la sordera: enfoque médico-audiológico, enfoque sociocultural y enfoque multidimensional",
      "2.2. Prótesis auditivas (audífonos, implante coclear, implante osteointegrado BAHA e implante de tronco cerebral) y ayudas técnicas (sistema FM y bucle magnético)",
      "2.3. Sistemas de comunicación oralistas, gestuales y mixtos: Método Auditivo Puro, Lectura Labiofacial, La Palabra Complementada (LPC / Cued Speech), Comunicación Bimodal, Dactilología y Lengua de Signos Española (LSE)",
      "2.4. Aplicaciones TIC y recursos digitales para discapacidad auditiva (SEDEA, DI, Coocleando, CoPilot, Visualfy)"
    ],
    resumen: "Estudia el repertorio completo de prótesis, ayudas técnicas de acceso en el aula y sistemas comunicativos para el alumnado con hipoacusia o sordera. Distingue las prótesis auditivas (**audífonos** que amplifican acústicamente vs **Implante Coclear** que transforma el sonido en impulsos eléctricos estimulando directamente el nervio auditivo en la cóclea, indicado en hipoacusias neurosensoriales severas/profundas bilaterales) y las ayudas de aula (**Equipo de FM / micrófono remoto** para eliminar el efecto de la distancia y el ruido escolar, y **Bucle Magnético**). Analiza los sistemas comunicativos desde los oralistas con apoyo (**Lectura Labiofacial** y **La Palabra Complementada / LPC** de Cornett) hasta los mixtos (**Comunicación Bimodal**) y visuogestuales (**Dactilología** y **Lengua de Signos Española - LSE**).",
    ideasClave: [
      "**La Palabra Complementada (LPC / Cued Speech de Cornett)**: Sistema **aumentativo oralista** que elimina la ambigüedad de la lectura labiofacial (ya que muchos fonemas como /p/, /b/, /m/ tienen el mismo visema labial). Combina la lectura labial con **8 configuraciones de la mano** (que identifican las consonantes) en **3 posiciones alrededor del rostro** (lado, barbilla y garganta, que identifican las vocales).",
      "**Comunicación Bimodal vs Lengua de Signos Española (LSE)**: La **Comunicación Bimodal** es un sistema *aumentativo* donde se habla en lengua oral simultáneamente con signos tomados de la LSE, pero **siguiendo la estructura morfosintáctica del idioma oral (español)**. La **LSE** (reconocida por la Ley 27/2007) es un sistema *alternativo*, una lengua natural completa con **su propia gramática y sintaxis visuoespacial** distinta del castellano.",
      "**Sistema de Frecuencia Modulada (FM) y Bucle Magnético**: En el aula, el enemigo del niño con audífono o IC es el **ruido de fondo y la reverberación**. El micrófono de FM que lleva el docente envía su voz directamente al receptor del audífono/IC del alumno manteniendo constante la relación señal-ruido."
    ],
    tablaComparativa: {
      titulo: "Comparativa de los Sistemas de Comunicación en Discapacidad Auditiva (Unidad 2)",
      columnas: ["Sistema", "Clasificación (Aumentativo / Alternativo)", "Estructura Gramatical y Objetivo Principal"],
      filas: [
        ["La Palabra Complementada (LPC)", "Aumentativo (enfoque oralista) sin ayuda.", "Sigue el habla oral; usa 8 figuras manuales + 3 posiciones faciales para hacer 100% visible la fonología y facilitar la lectura."],
        ["Comunicación Bimodal", "Aumentativo (mixto oral + signado) sin ayuda.", "Se emite palabra hablada + signo simultáneo respetando el **orden sintáctico del español oral**."],
        ["Dactilología (Alfabeto manual)", "Aumentativo complementario sin ayuda.", "Representa en el aire cada letra del abecedario escrito; útil para nombres propios o palabras sin signo."],
        ["Lengua de Signos Española (LSE)", "Alternativo visuogestual sin ayuda.", "Lengua natural con **sintaxis espacial y gramática propia** independiente del español oral (Ley 27/2007)."]
      ]
    }
  },
  {
    id: "saac-u3",
    asignaturaId: "saac",
    numero: 3,
    titulo: "Unidad 3: SAAC en los Trastornos del Espectro Autista (TEA)",
    pdfFile: "Los sistemas alternativos y aumentativos Unidad 3.pdf",
    indice: [
      "3.1. Perfil comunicativo en el TEA y prelación jerárquica de objetivos de intervención",
      "3.2. El Sistema de Comunicación por Intercambio de Imágenes (PECS de Bondy y Frost, 1994): las 6 fases paso a paso",
      "3.3. El Programa de Comunicación Total - Habla Signada de Benson Schaeffer (1980)",
      "3.4. Uso de sistemas pictográficos (SPC y ARASAAC), estructuración ambiental (TEACCH) y agendas visuales"
    ],
    resumen: "Desarrolla los programas de intervención aumentativa y alternativa de referencia para el alumnado con TEA. Establece primero la **prelación de objetivos** en autismo: (1º) lograr una comunicación funcional espontánea para expresar deseos y necesidades, (2º) priorizar la comprensión sobre la expresión, (3º) favorecer la interpretación global y coherente, y (4º) en último lugar la articulación motora fina. Explica en detalle las **6 fases del sistema PECS** (Bondy y Frost) basado en el intercambio físico de tarjetas hacia un receptor sin exigir contacto ocular previo como requisito bloqueante, y el **Programa de Comunicación Total - Habla Signada de Benson Schaeffer**, que enseña signos manuales emparejados con habla mediante moldeamiento, encadenamiento hacia atrás y espera estructurada.",
    ideasClave: [
      "**Las 6 Fases de PECS (Bondy y Frost, 1994)**: **Fase I**: Cómo comunicarse (intercambio físico de 1 imagen por el objeto deseado con dos entrenadores: interlocutor comunicativo y ayudante físico que moldea por detrás sin hablar); **Fase II**: Distancia y persistencia (ir a buscar el libro y al adulto); **Fase III**: Discriminación de imágenes (IIIa: preferido vs no preferido; IIIb: entre varios preferidos); **Fase IV**: Estructura de la oración (tira-frase con el pictograma *'Quiero'* + objeto); **Fase V**: Responder a la pregunta *'¿Qué quieres?'*; **Fase VI**: Comentar en respuesta a *'¿Qué ves?'*, *'¿Qué oyes?'* (*'Veo...'*).",
      "**Programa de Habla Signada de Benson Schaeffer (1980)**: Programa de comunicación bimodal diseñado para niños no verbales con TEA o discapacidad intelectual severa. Su objetivo prioritario es la **espontaneidad comunicativa** comenzando por la función de **expresión de deseos (petición)** antes que la denominación o imitación, evitando las *ecopraxias* (hacer el signo mecánicamente sin intención).",
      "**Prelación de Abstracción Visual en TEA**: Objeto real idéntico -> Objeto parcial/miniatura -> Fotografía en color sin fondo distractor -> Pictograma en color (ARASAAC / SPC) -> Pictograma en blanco y negro -> Palabra escrita."
    ],
    tablaComparativa: {
      titulo: "Comparativa entre el Sistema PECS (Bondy y Frost) y el Habla Signada (Benson Schaeffer)",
      columnas: ["Criterio", "Sistema PECS (Bondy y Frost, 1994)", "Habla Signada de Benson Schaeffer (1980)"],
      filas: [
        ["Tipo de SAAC", "Sistema **con ayuda** (intercambio de tarjetas pictográficas y libro de comunicación).", "Sistema **sin ayuda** (comunicación total: signo manual del niño + habla simultánea del adulto)."],
        ["Exigencia Motriz y Cognitiva", "Baja exigencia motriz fina (coger y entregar tarjeta) y apoyo visual permanente (reconocimiento).", "Exige praxias motoras manuales diferenciadas y memoria de evocación del signo."],
        ["Estrategia de Enseñanza Inicial", "Fase I con **2 entrenadores** (interlocutor + sombra física detrás que moldea en silencio).", "Moldeamiento físico de la mano, encadenamiento hacia atrás y espera estructurada en función de petición."]
      ]
    }
  },
  {
    id: "saac-u4",
    asignaturaId: "saac",
    numero: 4,
    titulo: "Unidad 4: SAAC y productos de apoyo en la discapacidad física o motora",
    pdfFile: "Los sistemas alternativos y aumentativos Unidad 4.pdf",
    indice: [
      "4.1. Alteraciones neuromotoras (parálisis cerebral: espástica, atetoide/discinesia, atáxica, mixta; hipotonía, hipertonía, distonía)",
      "4.2. Sistemas gráficos de comunicación con ayuda: SPC (Mayer-Johnson), ARASAAC, Sistema BLISS, Minspeak y Rebus",
      "4.3. Código de colores estándar para la organización sintáctica de tableros de comunicación",
      "4.4. Las 5 estrategias y productos de apoyo para el acceso al comunicador o al ordenador"
    ],
    resumen: "Se centra en la respuesta comunicativa para el alumnado con discapacidad física/motora (parálisis cerebral, enfermedades neuromusculares, daño cerebral adquirido) que presenta disartria severa o anartria pero conserva a menudo una buena capacidad comprensiva e intelectual. Analiza los principales sistemas gráficos con ayuda: **SPC** (Símbolos Pictográficos para la Comunicación de Roxanna Mayer-Johnson) y **ARASAAC** (~16.200 pictogramas transparentes de libre acceso), el **Sistema BLISS** (creado por Charles Bliss, con símbolos pictográficos, ideográficos y abstractos capaces de combinarse mediante indicadores morfológicos para crear nuevos significados en personas con buen nivel cognitivo sin lectoescritura), **Minspeak** (compactación semántica de Bruce Baker basada en secuencias de iconos polisémicos) y **Rebus** (lectura por fonética visual). Finalmente detalla las 5 estrategias de acceso físico.",
    ideasClave: [
      "**Código de Colores Estándar en Tableros SAAC (Clave Fitzgerald / SPC / Bliss)**: **Amarillo** = Personas y pronombres (*yo, tú, mamá*); **Verde** = Verbos y acciones (*comer, ir, querer*); **Azul** = Adjetivos y descriptivos (*grande, contento, frío*); **Naranja** = Sustantivos/nombres y objetos (*agua, pelota, colegio*); **Rosa/Morado** = Fórmulas sociales y cortesía (*hola, gracias, por favor*); **Blanco** = Miscelánea, artículos, preposiciones, conceptos temporales.",
      "**SPC/ARASAAC vs Sistema BLISS**: **SPC y ARASAAC** son altamente **icónicos/transparentes** (el dibujo se parece al objeto real, fáciles de aprender sin exigir alto nivel cognitivo). El **Sistema BLISS** utiliza formas geométricas básicas con reglas lógicas e indicadores (plural, acción, tiempo pasado/futuro), exigiendo **buena capacidad cognitiva** pero ofreciendo una enorme riqueza morfosintáctica y generativa.",
      "**Las 5 Estrategias de Acceso en Discapacidad Motora**: (1) **Selección directa** (dedo, puntero cefálico/licornio, carcasa cobertora de teclado), (2) **Selección con ratón adaptado** (joystick, trackball, ratón cefálico/facial o **lector ocular / eye-tracking**), (3) **Barrido dependiente** (el interlocutor señala filas/columnas o se usa un **tablero transparente de mirada E-tran**), (4) **Barrido independiente** (automático o dirigido mediante 1 o 2 conmutadores/pulsadores) y (5) **Acceso codificado** (código de colores/números o Morse)."
    ],
    tablaComparativa: {
      titulo: "Comparativa de Sistemas Gráficos de Comunicación con Ayuda (Unidad 4)",
      columnas: ["Sistema Gráfico", "Autor y Naturaleza de los Símbolos", "Perfil de Usuario Ideal"],
      filas: [
        ["SPC / ARASAAC", "Mayer-Johnson (1981) / Portal Aragonés ARASAAC (~16.200 pictogramas icónicos).", "Todo tipo de usuarios (TEA, DI, parálisis cerebral, afasia) desde niveles iniciales de representación."],
        ["Sistema BLISS", "Charles Bliss (1949) / Kates (1971). Símbolos pictográficos, ideográficos y arbitrarios combinables.", "Personas con **discapacidad motora severa (anartria) y buena capacidad cognitiva** que aún no dominan la lectoescritura."],
        ["Minspeak", "Bruce Baker (1980). Compactación semántica mediante secuencias de iconos polisémicos.", "Usuarios de comunicadores electrónicos con voz que buscan alta velocidad de comunicación sin cambiar de pantalla."],
        ["Sistema Rebus", "Woodcock (1965). Símbolos pictográficos y fonéticos combinados.", "Iniciación a la lectura y transición hacia el código alfabético."]
      ]
    }
  },
  {
    id: "saac-u5",
    asignaturaId: "saac",
    numero: 5,
    titulo: "Unidad 5: Diseño de adaptaciones curriculares, Lenguaje Natural Asistido (LNA) y aplicaciones TIC",
    pdfFile: "Los sistemas alternativos y aumentativos Unidad 5.pdf",
    indice: [
      "5.1. Adaptaciones Curriculares Individualizadas (ACI) en la LOMLOE (Art. 71 y 74; RD 157/2022): de acceso vs no significativas vs significativas",
      "5.2. Metodología de enseñanza de SAAC: Lenguaje Natural Asistido (LNA / modelado), moldeamiento, encadenamiento hacia atrás y espera estructurada",
      "5.3. Vocabulario Esencial (Core Vocabulary) vs Vocabulario Periférico (Fringe Vocabulary)",
      "5.4. Ecosistema de aplicaciones TIC y comunicadores (Asterics Grid, LetMeTalk, SymboTalk, Plaphoons, Soy Visual, AraWord, Proyecto LAO)"
    ],
    resumen: "Integra la puesta en práctica escolar de los SAAC y las TIC. En el plano normativo (LOMLOE y RD 157/2022) distingue las **Adaptaciones de Acceso al Currículo** (provisión de SAAC, sistemas FM, lectores oculares, mobiliario adaptado, sin modificar objetivos ni criterios de evaluación), las **Adaptaciones No Significativas** (ajustes metodológicos, tiempos y formatos bajo DUA) y las **Adaptaciones Curriculares Significativas (ACIS)** (modificación de elementos prescriptivos previo informe psicopedagógico para alumnado NEE). En el plano metodológico desarrolla el **Lenguaje Natural Asistido (LNA)** (el adulto señala en el comunicador del niño mientras le habla en contextos naturales), la organización en **Vocabulario Núcleo/Esencial (Core)** y **Periférico (Fringe)**, y el catálogo de software libre y comercial para AL.",
    ideasClave: [
      "**Lenguaje Natural Asistido (LNA / Modelado CAA)**: Para que un niño aprenda a comunicarse con un SAAC, sus interlocutores deben **hablar su mismo idioma visual**: el maestro y la familia señalan los pictogramas en el comunicador a la vez que emiten el habla natural, sin exigir siempre que el niño repita, proporcionando *input* aumentado en todas las rutinas.",
      "**Vocabulario Esencial (Core) vs Periférico (Fringe)**: El **Vocabulario Esencial (Core)** son unas 200-400 palabras de alta frecuencia (verbos como *querer, ir, hacer, gustar*, pronombres *yo, tú*, adverbios *más, no, aquí*) que representan el **80% de lo que decimos** en cualquier contexto y deben estar fijas en la pantalla principal del comunicador. El **Vocabulario Periférico (Fringe)** son sustantivos específicos de cada tema o rutina (ej. *dinosaurio, plastilina, galleta*).",
      "**Aplicaciones TIC Clave para el Maestro de AL**: **Asterics Grid, LetMeTalk, SymboTalk y Plaphoons** (comunicadores dinámicos gratuitos/multiplataforma), **AraWord** (procesador de textos que traduce simultáneamente escritura a pictogramas ARASAAC), **Soy Visual** (fotografías reales y láminas para trabajar morfosintaxis y comprensión en TEA/TDL) y **Proyecto LAO** (logopedia asistida por ordenador)."
    ],
    tablaComparativa: {
      titulo: "Tipos de Adaptaciones Curriculares en el Marco de la LOMLOE (Unidad 5)",
      columnas: ["Tipo de Adaptación", "¿Modifica Elementos Prescriptivos del Currículo?", "Ejemplos Aplicados a Audición y Lenguaje"],
      filas: [
        ["Adaptación de Acceso al Currículo", "NO modifica objetivos ni criterios de evaluación.", "Incorporar un comunicador dinámico con lector ocular, un sistema de FM, bucle magnético o textos adaptados a pictogramas (AraWord)."],
        ["Adaptación Curricular No Significativa", "NO elimina competencias ni criterios; ajusta metodología y evaluación (DUA).", "Dar más tiempo en exámenes, priorizar evaluación oral o tipo test, usar apoyos visuales y agendas en el aula."],
        ["Adaptación Curricular Significativa (ACIS)", "SÍ modifica criterios de evaluación y saberes básicos (requiere dictamen NEE Art. 73/74).", "Ajustar los objetivos de lengua o matemáticas a los de un ciclo anterior en un alumno con discapacidad intelectual o pluridiscapacidad."]
      ]
    }
  }
];

// ----------------------------------------------------------------------------
// 2. GLOSARIO CLÍNICO Y TARJETAS DE MEMORIA (FLASHCARDS - 60 TÉRMINOS CLAVE)
// ----------------------------------------------------------------------------
window.AL_DATA.glosario = [
  // Psicopatología
  { id: "g1", asignaturaId: "psicopatologia", unidad: "Unidad 1", termino: "Signo vs Síntoma", definicion: "En el modelo médico, el **signo** es una manifestación objetiva, observable y medible por el clínico (ej. fisura palatina, umbral audiométrico de 60 dB); el **síntoma** es la referencia subjetiva que expresa el propio paciente (ej. sensación de fatiga vocal o acúfeno)." },
  { id: "g2", asignaturaId: "psicopatologia", unidad: "Unidad 1", termino: "Dimensiones de Bloom y Lahey (1978)", definicion: "Modelo tridimensional del lenguaje que integra **Contenido** (semántica y léxico), **Forma** (fonología y morfosintaxis) y **Uso** (pragmática e intención comunicativa)." },
  { id: "g3", asignaturaId: "psicopatologia", unidad: "Unidad 1", termino: "NEAE (Art. 71 LOMLOE) vs NEE (Art. 73 LOMLOE)", definicion: "**NEAE** es la categoría amplia (incluye NEE, retraso madurativo, TDL/comunicación, DEA, TDAH, altas capacidades, incorporación tardía y vulnerabilidad). **NEE** es un subgrupo específico dentro de las NEAE asociado a discapacidad (física, intelectual, sensorial), TEA o trastornos graves de conducta/comunicación." },
  { id: "g4", asignaturaId: "psicopatologia", unidad: "Unidad 2", termino: "Trastorno de la Comunicación Social (Pragmático)", definicion: "Categoría del DSM-5 caracterizada por dificultades persistentes en el uso social de la comunicación verbal y no verbal (adaptar el mensaje al contexto, respetar turnos, comprender inferencias o ironías) **en ausencia** de los patrones restrictivos y repetitivos propios del TEA." },
  { id: "g5", asignaturaId: "psicopatologia", unidad: "Unidad 3", termino: "Inicio Tardío del Lenguaje (ITL / Hablantes Tardíos)", definicion: "Niños de **24 meses** que presentan un vocabulario expresivo inferior a **50 palabras** y ausencia de combinaciones de dos palabras, sin que exista sordera, discapacidad intelectual ni trastorno neurológico que lo explique." },
  { id: "g6", asignaturaId: "psicopatologia", unidad: "Unidad 3", termino: "Consenso Delphi 2026: TDL vs TL", definicion: "Según el consenso CATALISE (Bishop et al., 2017) e Hispanoamericano (Andreu et al., 2026), se abandona el término TEL. Se diagnostica **TDL** cuando el trastorno severo y persistente del lenguaje no se asocia a una condición biomédica, y **Trastorno del Lenguaje (TL) asociado a X** cuando coexiste con TEA, síndrome genético, discapacidad intelectual o hipoacusia." },
  { id: "g7", asignaturaId: "psicopatologia", unidad: "Unidad 3", termino: "Síndrome de Landau-Kleffner", definicion: "Afasia epiléptica adquirida en la infancia (entre los 3 y 7 años tras un desarrollo lingüístico normal) que cursa con agnosia auditiva verbal severa y anomalías paroxísticas en el EEG durante el sueño." },
  { id: "g8", asignaturaId: "psicopatologia", unidad: "Unidad 3", termino: "Trastorno de Aprendizaje No Verbal (TANV)", definicion: "Síndrome neuropsicológico asociado a disfunción del **hemisferio derecho** (sustancia blanca) que cursa con déficits en percepción táctil y visoespacial, coordinación psicomotora y habilidades socio-pragmáticas, con buena preservación fonológica y de memoria verbal mecánica." },
  { id: "g9", asignaturaId: "psicopatologia", unidad: "Unidad 4", termino: "Intensidad de Apoyos AAIDD (Schalock et al., 2021)", definicion: "Clasificación de los apoyos en Discapacidad Intelectual en 4 niveles: **Intermitente** (puntual cuando se necesita), **Limitado** (constante por un tiempo limitado), **Extenso** (regular a diario en al menos algunos entornos sin límite temporal) y **Generalizado** (constante y de alta intensidad en todos los entornos)." },
  { id: "g10", asignaturaId: "psicopatologia", unidad: "Unidad 4", termino: "Hipoacusia Prelocutiva, Perilocutiva y Postlocutiva", definicion: "Clasificación según el momento de aparición: **Prelocutiva** (<2 años, antes de adquirir el habla), **Perilocutiva** (2-5 años, durante la estructuración del lenguaje) y **Postlocutiva** (>5 años, tras haber consolidado el lenguaje oral)." },
  { id: "g11", asignaturaId: "psicopatologia", unidad: "Unidad 5", termino: "Retraso Global del Desarrollo (RGD)", definicion: "Diagnóstico del DSM-5 reservado para niños **menores de 5 años** que no alcanzan los hitos del desarrollo esperados en **dos o más áreas** (motora, lenguaje, cognitiva, social o actividades de la vida diaria) y que aún no pueden ser evaluados con pruebas estandarizadas de CI." },
  { id: "g12", asignaturaId: "psicopatologia", unidad: "Unidad 5", termino: "Superdotación vs Talento Simple vs Talento Complejo (Castelló y Batlle, 1998)", definicion: "**Superdotación**: percentil $>75$ en todas las aptitudes intelectuales y creatividad. **Talento Simple**: percentil $>95$ en una única área específica. **Talento Complejo**: percentil $>80$ en la combinación de varias aptitudes (ej. talento académico)." },

  // Anatomía, Fisiología y Neurología
  { id: "g13", asignaturaId: "anatomia", unidad: "Unidad 1", termino: "Sustancia Gris vs Sustancia Blanca en SNC", definicion: "La **sustancia gris** contiene los somas neuronales y dendritas (situada en la corteza cerebral externa y en la 'H' central de la médula espinal). La **sustancia blanca** contiene los axones mielinizados que forman tractos de conexión (interna en el encéfalo y periférica en la médula)." },
  { id: "g14", asignaturaId: "anatomia", unidad: "Unidad 1", termino: "Pedúnculos Cerebelosos (Superior, Medio e Inferior)", definicion: "Tres pares de haces de sustancia blanca que unen el cerebelo con las tres partes del tronco del encéfalo: el **superior** con el mesencéfalo, el **medio** con el puente de Varolio (protuberancia) y el **inferior** con el bulbo raquídeo." },
  { id: "g15", asignaturaId: "anatomia", unidad: "Unidad 2", termino: "Amplificación de la Cadena Osicular (x22)", definicion: "El oído medio (tímpano + martillo, yunque y estribo hasta la ventana oval) actúa como un transformador de impedancias que multiplica por **22** la presión sonora para vencer la resistencia del líquido del oído interno." },
  { id: "g16", asignaturaId: "anatomia", unidad: "Unidad 2", termino: "Órgano de Corti", definicion: "Receptor neurosensorial de la audición situado en la rampa media (conducto coclear) sobre la **membrana basilar** y bajo la **membrana tectoria**. Sus células ciliadas transforman las vibraciones mecánicas (de 16 a 18.000 Hz) en impulsos nerviosos hacia el VIII par craneal." },
  { id: "g17", asignaturaId: "anatomia", unidad: "Unidad 3", termino: "Cartílagos de la Laringe (Impares y Pares)", definicion: "**3 Impares**: Tiroides (nuez de Adán), Cricoides (único anillo completo) y Epiglotis (cierre en la deglución). **3 Pares**: Aritenoides (donde se insertan los pliegues vocales), Corniculados de Santorini y Cuneiformes de Wrisberg." },
  { id: "g18", asignaturaId: "anatomia", unidad: "Unidad 3", termino: "Efecto de Bernoulli en la Fonación", definicion: "Principio aerodinámico por el cual, al pasar el flujo de aire subglótico a alta velocidad a través del estrechamiento de la glotis, disminuye la presión en las paredes laterales de los pliegues vocales, generando una fuerza de succión que ayuda a cerrarlos de nuevo en cada ciclo vibratorio." },
  { id: "g19", asignaturaId: "anatomia", unidad: "Unidad 3", termino: "Músculo Cricoaritenoideo Posterior", definicion: "Es el **único músculo abductor (dilatador) de la glotis**, encargado de separar las cuerdas vocales para permitir la inspiración respiratoria. Está inervado por el nervio laríngeo recurrente (rama del X par craneal, Vago)." },
  { id: "g20", asignaturaId: "anatomia", unidad: "Unidad 4", termino: "Modelo Multimodal Cerebral del Lenguaje (González y Hornauer-Hughes, 2014)", definicion: "Red perisilviana dominante (izquierda) compuesta por el **Área de Broca** (BA 44/45), **Área de Wernicke** (BA 22), **Fascículo Arqueado** (repetición y conexión fonológica), **Giro Supramarginal** (BA 40) y **Giro Angular** (BA 39)." },
  { id: "g21", asignaturaId: "anatomia", unidad: "Unidad 4", termino: "Las 6 Funciones del Lenguaje de Jakobson", definicion: "**Referencial** (contexto), **Emotiva** (emisor), **Conativa** (receptor), **Fática** (canal), **Poética** (mensaje) y **Metalingüística** (código)." },
  { id: "g22", asignaturaId: "anatomia", unidad: "Unidad 5", termino: "Efecto McGurk", definicion: "Ilusión perceptiva audiovisual del habla: cuando el oído escucha la sílaba [ba] pero los ojos ven los labios articulando [ga], el sistema nervioso integra ambas fuentes y el sujeto percibe un tercer sonido intermedio [da]." },
  { id: "g23", asignaturaId: "anatomia", unidad: "Unidad 5", termino: "Movimientos Sacádicos, Fijaciones y Regresiones", definicion: "En la lectura, los ojos avanzan mediante saltos rápidos (**sacádicos**) seguidos de pausas de extracción de información (**fijaciones** de unos **225 ms**). Entre el **10% y el 15%** de los sacádicos son **regresiones** hacia atrás." },
  { id: "g24", asignaturaId: "anatomia", unidad: "Unidad 5", termino: "Modelo de Logogén de Morton (1969) vs Búsqueda Serial de Forster (1979)", definicion: "En **Morton**, cada palabra es un *logogén* que acumula en paralelo activación sensorial y contextual hasta alcanzar su umbral. En **Forster**, el acceso es autónomo y serial en dos etapas: primero archivos periféricos de acceso por frecuencia y luego el archivo maestro." },

  // Lenguaje Oral
  { id: "g25", asignaturaId: "oral", unidad: "Unidad 1", termino: "Protoimperativos vs Protodeclarativos (Bates, 1976)", definicion: "Gestos comunicativos intencionales prelingüísticos (9-12 meses): el **protoimperativo** usa al adulto para pedir un objeto; el **protodeclarativo** busca compartir la atención o interés por algo con el adulto (clave en el cribado temprano de TEA)." },
  { id: "g26", asignaturaId: "oral", unidad: "Unidad 1", termino: "Prevención Primaria, Secundaria y Terciaria (Caplan)", definicion: "**Primaria**: estimulación universal en el aula para evitar trastornos. **Secundaria**: detección precoz y cribado ante signos de alerta. **Terciaria**: intervención rehabilitadora y adaptaciones cuando el trastorno ya está establecido." },
  { id: "g27", asignaturaId: "oral", unidad: "Unidad 2", termino: "Evidencia sobre Praxias y Soplo en TSH (Farquharson, 2019)", definicion: "La evidencia científica actual demuestra que los ejercicios motores orales no verbales (praxias aisladas y ejercicios de soplo) **no mejoran la articulación en niños con TSH**; la intervención debe centrarse directamente en la producción de sonidos del habla, pares mínimos y conciencia fonológica." },
  { id: "g28", asignaturaId: "oral", unidad: "Unidad 2", termino: "PEFF y RFI", definicion: "**PEFF**: Protocolo de Evaluación Fonética-Fonológica (Susanibar et al.) que valora estructuras anatómicas, fonética y fonología. **RFI**: Registro Fonológico Inducido (Monfort y Juárez), prueba clásica española de 57 tarjetas para evaluar denominación y repetición fonológica de 3 a 7 años." },
  { id: "g29", asignaturaId: "oral", unidad: "Unidad 3", termino: "Protocolos OMES-E y PEMO", definicion: "Instrumentos clínicos de **evaluación miofuncional orofacial** utilizados en **Disglosias** para valorar el aspecto postural, morfología, movilidad de labios/lengua/paladar y las funciones de respiración, deglución y masticación." },
  { id: "g30", asignaturaId: "oral", unidad: "Unidad 3", termino: "Protocolos PEVH y AIDS", definicion: "Instrumentos específicos para evaluar la **Disartria**: el **PEVH** valora los 5 subsistemas motores del habla (respiración, fonación, resonancia, articulación y prosodia) y el **AIDS** mide cuantitativamente el porcentaje de inteligibilidad del habla disártrica." },
  { id: "g31", asignaturaId: "oral", unidad: "Unidad 4", termino: "Metáfora del Iceberg de la Disfemia (Sheehan, 1970)", definicion: "Representa que en la tartamudez la parte visible (bloqueos, repeticiones, prolongaciones y movimientos asociados) es solo una pequeña fracción; la mayor parte está sumergida bajo el agua en forma de **sentimientos de miedo, vergüenza, frustración, anticipación negativa y evitación**." },
  { id: "g32", asignaturaId: "oral", unidad: "Unidad 4", termino: "Protocolos PRET-I y PRET-A", definicion: "Protocolos de Evaluación del Riesgo de Tartamudez en edad **Infantil (PRET-I)** y **Adolescente/Adulta (PRET-A)** que recogen factores genéticos, tipo y frecuencia de disfluencias (>3%), tensión muscular y reacciones emocionales." },
  { id: "g33", asignaturaId: "oral", unidad: "Unidad 5", termino: "Memoria Fonológica a Corto Plazo en el TDL (Ahufinger et al., 2021)", definicion: "Marcador psicocognitivo nuclear del Trastorno del Desarrollo del Lenguaje: los niños con TDL presentan una severa dificultad para retener y repetir secuencias de fonemas sin significado (**repetición de pseudopalabras**), lo que dificulta aprender vocabulario nuevo y morfología." },
  { id: "g34", asignaturaId: "oral", unidad: "Unidad 5", termino: "Batería CELF-5 y PLON-R", definicion: "**CELF-5**: batería clínica de referencia internacional (5 a 15 años) para el diagnóstico de TDL. **PLON-R**: Prueba de Lenguaje Oral Navarra Revisada (3 a 6 años), test de cribado rápido que evalúa Forma, Contenido y Uso." },

  // Lengua Escrita
  { id: "g35", asignaturaId: "escrita", unidad: "Unidad 1", termino: "RCGF (Lectura) vs RCFG (Escritura) en Español", definicion: "Las **Reglas de Conversión Grafema-Fonema (RCGF)** en lectura son transparentes en español (cada letra tiene un sonido predecible). Las **Reglas de Conversión Fonema-Grafema (RCFG)** en escritura son más opacas porque un mismo sonido puede escribirse con varias letras (*b/v, g/j, c/z, h*)." },
  { id: "g36", asignaturaId: "escrita", unidad: "Unidad 2", termino: "Circuito Dorsal Temporoparietal vs Circuito Ventral Occipitotemporal", definicion: "En neurobiología de la lectura, el **circuito dorsal** (temporoparietal izq.) realiza el ensamblaje fonológico subléxico letra a letra; el **circuito ventral** (giro fusiforme occipitotemporal izq. o *VWFA*) realiza el reconocimiento visual ortográfico directo y rápido de palabras conocidas." },
  { id: "g37", asignaturaId: "escrita", unidad: "Unidad 2", termino: "Área de Exner", definicion: "Centro nervioso situado en el giro frontal medio izquierdo (delante del área motora de la mano) encargado de coordinar los **programas motores gráficos** necesarios para el trazado de las letras en la escritura (su lesión produce agrafía motora pura)." },
  { id: "g38", asignaturaId: "escrita", unidad: "Unidad 2", termino: "Decir el Conocimiento vs Transformar el Conocimiento (Bereiter y Scardamalia, 1987)", definicion: "Modelos de composición escrita: los escritores inmaduros usan **'decir el conocimiento'** (escriben lo que les viene a la mente sin planificar al lector); los expertos usan **'transformar el conocimiento'** (ajustan el espacio del contenido al espacio retórico reorganizando sus ideas)." },
  { id: "g39", asignaturaId: "escrita", unidad: "Unidad 3", termino: "Dislexia Fonológica vs Superficial vs Profunda", definicion: "**Fonológica**: fallo en vía subléxica (mal en pseudopalabras, lexicalizaciones). **Superficial**: fallo en vía léxica (silabeo lento, confusión de homófonos e irregulares). **Profunda**: fallo en ambas vías con aparición de **paralexias semánticas**." },
  { id: "g40", asignaturaId: "escrita", unidad: "Unidad 3", termino: "Consenso Delphi sobre Dislexia (Carroll et al., 2025)", definicion: "Actualización internacional que define la dislexia como una dificultad persistente en la precisión y/o fluidez lectora y ortográfica con base principal en el procesamiento fonológico (más velocidad de denominación RAN y memoria verbal), **eliminando el criterio de discrepancia con el CI**." },
  { id: "g41", asignaturaId: "escrita", unidad: "Unidad 4", termino: "Disortografía Disortocinética vs Visoespacial", definicion: "En la **disortocinética** está alterada la secuenciación fonemática del discurso, produciendo **uniones y fragmentaciones indebidas de palabras** (*'elperro'*). En la **visoespacial** falla la percepción/memoria visual, causando rotaciones (*b/d*) y faltas en ortografía arbitraria (*b/v, h, g/j*)." },
  { id: "g42", asignaturaId: "escrita", unidad: "Unidad 4", termino: "PROESC (Cuetos, Ramos y Ruano, 2002)", definicion: "Batería de Evaluación de los Procesos de Escritura (de 3º de Primaria a 4º de ESO) que incluye dictado de sílabas, palabras (con ortografía arbitraria y reglada), pseudopalabras, frases, redacción de un cuento y una redacción expositiva." },
  { id: "g43", asignaturaId: "escrita", unidad: "Unidad 5", termino: "Sentido Numérico y Subitización (Coelho, 2012)", definicion: "Capacidad neurobiológica (surco intraparietal) para representar y comparar magnitudes numéricas en una línea mental y reconocer de un golpe de vista (**subitización**) conjuntos pequeños de 1 a 4 elementos sin contarlos uno a uno." },

  // SAAC y TIC
  { id: "g44", asignaturaId: "saac", unidad: "Unidad 1", termino: "Test ComFor (Noens et al., 2006)", definicion: "Prueba clínica para elegir la forma de un SAAC en TEA y discapacidad intelectual que evalúa en qué nivel de sentido opera la persona: **Sensación, Presentación, Representación o Metarrepresentación**." },
  { id: "g45", asignaturaId: "saac", unidad: "Unidad 2", termino: "La Palabra Complementada (LPC / Cued Speech)", definicion: "Sistema aumentativo oralista creado por R. Orin Cornett que desambigua la lectura labiofacial mediante **8 configuraciones de la mano** (consonantes) y **3 posiciones alrededor de la cara** (vocales)." },
  { id: "g46", asignaturaId: "saac", unidad: "Unidad 2", termino: "Comunicación Bimodal vs Lengua de Signos Española (LSE)", definicion: "El **Bimodal** es un sistema *aumentativo* que emplea habla simultánea con signos siguiendo la **estructura sintáctica del español oral**. La **LSE** es un sistema *alternativo* y una lengua natural con **gramática y sintaxis visuoespacial propia**." },
  { id: "g47", asignaturaId: "saac", unidad: "Unidad 3", termino: "Las 6 Fases de PECS (Bondy y Frost, 1994)", definicion: "**Fase I**: Intercambio físico (coger-entregar-recibir con 2 entrenadores); **Fase II**: Distancia y persistencia; **Fase III**: Discriminación de imágenes; **Fase IV**: Estructura de la oración (*'Quiero + ítem'*); **Fase V**: Responder a *'¿Qué quieres?'*; **Fase VI**: Comentar (*'Veo...'*)." },
  { id: "g48", asignaturaId: "saac", unidad: "Unidad 3", termino: "Programa de Habla Signada de Benson Schaeffer (1980)", definicion: "Programa de Comunicación Total para alumnos no verbales con TEA que enseña signos manuales priorizando la **función de petición (expresión de deseos)** y la espontaneidad mediante moldeamiento, encadenamiento hacia atrás y espera estructurada." },
  { id: "g49", asignaturaId: "saac", unidad: "Unidad 4", termino: "Sistema BLISS vs SPC / ARASAAC", definicion: "**BLISS** emplea símbolos pictográficos, ideográficos y arbitrarios combinables con indicadores gramaticales (exige buen nivel cognitivo, ideal en parálisis cerebral). **SPC y ARASAAC** son sistemas pictográficos transparentes de alta iconicidad comprensibles para cualquier nivel cognitivo." },
  { id: "g50", asignaturaId: "saac", unidad: "Unidad 4", termino: "Código de Colores en Tableros SAAC", definicion: "**Amarillo**: Personas y pronombres; **Verde**: Verbos/acciones; **Azul**: Adjetivos/descriptivos; **Naranja**: Sustantivos/objetos; **Rosa**: Social/cortesía; **Blanco**: Miscelánea y nexos." },
  { id: "g51", asignaturaId: "saac", unidad: "Unidad 5", termino: "Lenguaje Natural Asistido (LNA)", definicion: "Estrategia de intervención en CAA donde el interlocutor (maestro AL, familia) **señala los pictogramas en el comunicador del alumno al mismo tiempo que le habla** en situaciones naturales, ofreciendo modelado constante sin exigir respuesta obligatoria." },
  { id: "g52", asignaturaId: "saac", unidad: "Unidad 5", termino: "Vocabulario Esencial (Core) vs Vocabulario Periférico (Fringe)", definicion: "El **Vocabulario Esencial (Core)** son palabras frecuentes (verbos, pronombres, adverbios: *querer, ir, más, no, yo*) que suponen el 80% de la comunicación diaria. El **Periférico (Fringe)** son sustantivos concretos específicos de cada actividad." }
];

// ----------------------------------------------------------------------------
// 3. BANCO DE PREGUNTAS TIPO TEST OFICIAL (SIMULADOR PROCTORING - 60% NOTA)
// ----------------------------------------------------------------------------
window.AL_DATA.preguntasTest = [
  // --- PSICOPATOLOGÍA DE LA AUDICIÓN Y EL LENGUAJE ---
  {
    id: "q-psico-1",
    asignaturaId: "psicopatologia",
    unidad: "Unidad 1",
    pregunta: "Dentro del modelo médico o biológico de la psicopatología del lenguaje, ¿cómo se denomina la manifestación subjetiva de una patología que solo puede ser referida por el propio sujeto?",
    opciones: [
      "Signo clínico.",
      "Síntoma.",
      "Etiopatogenia.",
      "Semiología funcional."
    ],
    correcta: 1,
    explicacion: "En el modelo médico (Unidad 1), el **síntoma** es la manifestación subjetiva percibida y expresada por el paciente, mientras que el **signo** es el indicador objetivo y cuantificable observado por el profesional."
  },
  {
    id: "q-psico-2",
    asignaturaId: "psicopatologia",
    unidad: "Unidad 1",
    pregunta: "Según el modelo conductual o educativo de Bloom y Lahey (1978), ¿cuáles son los tres componentes o dimensiones interdependientes del lenguaje?",
    opciones: [
      "Fonética, Fonología y Articulación.",
      "Percepción, Comprensión y Producción.",
      "Contenido (semántica), Forma (fonología y morfosintaxis) y Uso (pragmática).",
      "Sintomatología, Etiología y Etiopatogenia."
    ],
    correcta: 2,
    explicacion: "Bloom y Lahey (1978) estructuran el lenguaje en la intersección de tres dimensiones: **Contenido** (semántica), **Forma** (fonología y morfosintaxis) y **Uso** (pragmática)."
  },
  {
    id: "q-psico-3",
    asignaturaId: "psicopatologia",
    unidad: "Unidad 1",
    pregunta: "De acuerdo con la LOMLOE (Ley Orgánica 3/2020), ¿en qué artículo se regula específicamente al alumnado con Necesidades Educativas Especiales (NEE) asociadas a discapacidad o trastornos graves?",
    opciones: [
      "Artículo 71.",
      "Artículo 73.",
      "Artículo 76.",
      "Artículo 20."
    ],
    correcta: 1,
    explicacion: "El **Artículo 71** de la LOMLOE regula el marco general del alumnado con **NEAE**, mientras que el **Artículo 73** define específicamente al alumnado con **NEE** (aquel que afronta barreras derivadas de discapacidad o trastornos graves de conducta, de la comunicación y del lenguaje)."
  },
  {
    id: "q-psico-4",
    asignaturaId: "psicopatologia",
    unidad: "Unidad 2",
    pregunta: "Un alumno de 6 años sustituye sistemáticamente el fonema /r/ por /d/ tanto en el habla espontánea como cuando el maestro de AL le pide que repita sílabas aisladas (/ra/, /re/). No presenta malformación anatómica ni lesión neurológica. Según Susanibar et al. (2016), presenta:",
    opciones: [
      "Un Trastorno de los Sonidos del Habla (TSH) de tipo fonético.",
      "Un Trastorno de los Sonidos del Habla (TSH) de tipo exclusivamente fonológico.",
      "Una disglosia lingual.",
      "Una disartria flácida leve."
    ],
    correcta: 0,
    explicacion: "En el **TSH de tipo fonético** (motor/articulatorio), el error es sistemático y se mantiene idéntico tanto en el habla espontánea como en tareas de repetición aislada, sin que exista causa orgánica (disglosia) ni neurológica (disartria)."
  },
  {
    id: "q-psico-5",
    asignaturaId: "psicopatologia",
    unidad: "Unidad 2",
    pregunta: "¿Cuál es la diferencia fundamental entre el Trastorno de la Comunicación Social (Pragmático) y el Trastorno del Espectro Autista (TEA) en el DSM-5?",
    opciones: [
      "En el Trastorno de la Comunicación Social no existen dificultades para comprender ironías ni inferencias.",
      "En el Trastorno de la Comunicación Social están ausentes los patrones restrictivos y repetitivos de comportamiento, intereses o actividades.",
      "El Trastorno de la Comunicación Social solo se diagnostica en la edad adulta.",
      "El TEA no afecta al componente pragmático del lenguaje."
    ],
    correcta: 1,
    explicacion: "Según el DSM-5 (Unidad 2), el **Trastorno de la Comunicación Social (TCS)** comparte con el TEA los déficits en el uso social y pragmático del lenguaje, pero carece de comportamientos, intereses o actividades restrictivos y repetitivos."
  },
  {
    id: "q-psico-6",
    asignaturaId: "psicopatologia",
    unidad: "Unidad 3",
    pregunta: "Según los criterios de Rescorla (1989) recogidos en la Unidad 3, ¿cuándo se identifica a un niño con Inicio Tardío del Lenguaje (ITL) o 'Hablante Tardío'?",
    opciones: [
      "Cuando a los 12 meses aún no pronuncia el fonema /r/.",
      "Cuando a los 24 meses presenta un vocabulario expresivo inferior a 50 palabras y no realiza combinaciones de dos palabras.",
      "Cuando a los 5 años comete faltas de ortografía en la escritura.",
      "Cuando presenta una pérdida auditiva superior a 70 dB."
    ],
    correcta: 1,
    explicacion: "El **Inicio Tardío del Lenguaje (ITL)** se define a los **24 meses** por un repertorio léxico expresivo menor de **50 palabras** y la ausencia de combinaciones de dos palabras, sin alteración sensorial o neurológica."
  },
  {
    id: "q-psico-7",
    asignaturaId: "psicopatologia",
    unidad: "Unidad 3",
    pregunta: "De acuerdo con el Consenso Delphi sobre los trastornos del lenguaje en hispanohablantes (Andreu et al., 2026) y el consorcio CATALISE (Bishop et al., 2017), señale la afirmación CORRECTA sobre el TDL:",
    opciones: [
      "Se mantiene el término TEL exigiendo un CI no verbal superior a 100.",
      "Se utiliza el término TDL cuando las dificultades severas y persistentes del lenguaje NO están asociadas a una condición biomédica conocida, y 'Trastorno del Lenguaje (TL) asociado a X' cuando coexiste con condiciones como TEA, síndrome de Down o hipoacusia.",
      "El TDL excluye por completo la posibilidad de comorbilidad con TDAH o dislexia.",
      "El diagnóstico de TDL solo puede realizarse a partir de los 12 años."
    ],
    correcta: 1,
    explicacion: "El consenso Delphi (Bishop et al., 2017; Andreu et al., 2026) sustituye TEL por **TDL** (sin condición biomédica conocida, permitiendo CI no verbal entre 70 y 85 si no hay DI) y diferencia el **TL asociado a una condición biomédica**."
  },
  {
    id: "q-psico-8",
    asignaturaId: "psicopatologia",
    unidad: "Unidad 3",
    pregunta: "¿Cómo se denomina la afasia epiléptica adquirida en la infancia (entre los 3 y 7 años tras un desarrollo inicial normal) que cursa con agnosia auditiva verbal y alteraciones en el EEG durante el sueño?",
    opciones: [
      "Síndrome de Williams.",
      "Síndrome de Landau-Kleffner.",
      "Trastorno de Aprendizaje No Verbal (TANV).",
      "Afasia de conducción congénita."
    ],
    correcta: 1,
    explicacion: "El **Síndrome de Landau-Kleffner** (Unidad 3) es una afasia infantil adquirida asociada a crisis epilépticas o descargas paroxísticas electroencefalográficas durante el sueño."
  },
  {
    id: "q-psico-9",
    asignaturaId: "psicopatologia",
    unidad: "Unidad 4",
    pregunta: "Según el modelo multidimensional de la AAIDD (Schalock et al., 2021) para la Discapacidad Intelectual, un apoyo que se presta de forma regular (por ejemplo, diariamente) en al menos algunos entornos (escuela y hogar) y sin limitación temporal se clasifica como:",
    opciones: [
      "Apoyo intermitente.",
      "Apoyo limitado.",
      "Apoyo extenso.",
      "Apoyo puntual."
    ],
    correcta: 2,
    explicacion: "La AAIDD distingue 4 niveles de intensidad de apoyos: **Intermitente** (puntual), **Limitado** (constante pero acotado en el tiempo), **Extenso** (regular en varios entornos sin límite temporal) y **Generalizado** (constante y de alta intensidad en todos los entornos)."
  },
  {
    id: "q-psico-10",
    asignaturaId: "psicopatologia",
    unidad: "Unidad 5",
    pregunta: "Según el modelo de diferenciación de las Altas Capacidades Intelectuales de Castelló y Batlle (1998) estudiado en la Unidad 5, ¿qué perfil presenta un alumno que obtiene un percentil superior a 75 en TODAS las áreas de aptitud intelectual además de una alta creatividad?",
    opciones: [
      "Talento simple verbal.",
      "Talento complejo académico.",
      "Superdotación intelectual.",
      "Precocidad madurativa transitoria."
    ],
    correcta: 2,
    explicacion: "En el modelo de Castelló y Batlle (1998), la **Superdotación** requiere superar el percentil 75 en todos los recursos intelectuales convergentes y divergentes (creatividad), frente al **Talento Simple** (>P95 en una sola aptitud) y el **Talento Complejo** (>P80 en varias aptitudes combinadas)."
  },

  // --- ANATOMÍA, FISIOLOGÍA Y NEUROLOGÍA DEL LENGUAJE ---
  {
    id: "q-anat-1",
    asignaturaId: "anatomia",
    unidad: "Unidad 1",
    pregunta: "En relación con la distribución de la sustancia gris y la sustancia blanca en la médula espinal, señale la opción CORRECTA:",
    opciones: [
      "La sustancia gris se sitúa en la periferia y la sustancia blanca en el centro.",
      "La sustancia gris se sitúa en la zona central adoptando forma de 'H' o mariposa (con astas dorsales sensitivas y astas ventrales motoras) y está rodeada periféricamente por la sustancia blanca.",
      "La médula espinal carece de sustancia blanca.",
      "Las astas anteriores o ventrales de la médula espinal tienen función exclusivamente sensitiva."
    ],
    correcta: 1,
    explicacion: "A diferencia del encéfalo, en la **médula espinal** la sustancia gris es interna (en forma de H: astas posteriores/dorsales sensitivas y astas anteriores/ventrales motoras) y la sustancia blanca es externa."
  },
  {
    id: "q-anat-2",
    asignaturaId: "anatomia",
    unidad: "Unidad 1",
    pregunta: "¿Qué estructura de sustancia blanca conecta el cerebelo específicamente con la protuberancia o puente de Varolio del tronco encefálico?",
    opciones: [
      "El pedúnculo cerebeloso superior.",
      "El pedúnculo cerebeloso medio.",
      "El pedúnculo cerebeloso inferior.",
      "El cuerpo calloso."
    ],
    correcta: 1,
    explicacion: "Los **pedúnculos cerebelosos** conectan el cerebelo con el tronco: el **superior** con el mesencéfalo, el **medio** con el puente de Varolio (protuberancia) y el **inferior** con el bulbo raquídeo."
  },
  {
    id: "q-anat-3",
    asignaturaId: "anatomia",
    unidad: "Unidad 2",
    pregunta: "En la fisiología de la audición (Unidad 2), ¿por cuánto multiplica aproximadamente la presión sonora el sistema mecánico del oído medio (diferencia de superficie entre tímpano y ventana oval + palanca de martillo, yunque y estribo)?",
    opciones: [
      "Por 2 veces.",
      "Por 22 veces.",
      "Por 250 veces.",
      "No amplifica el sonido, solo lo atenúa."
    ],
    correcta: 1,
    explicacion: "El complejo timpano-osicular del oído medio multiplica por **22** la fuerza mecánica de la onda sonora al transmitirla a la ventana oval de la cóclea."
  },
  {
    id: "q-anat-4",
    asignaturaId: "anatomia",
    unidad: "Unidad 2",
    pregunta: "¿Dónde se localiza exactamente el Órgano de Corti dentro del oído interno y cuál es su función?",
    opciones: [
      "En los canales semicirculares, encargado del equilibrio rotatorio.",
      "En el conducto coclear (rampa media), apoyado sobre la membrana basilar y cubierto por la membrana tectoria, encargado de transducir la vibración mecánica en impulsos bioeléctricos.",
      "En la trompa de Eustaquio, encargado de ventilar la caja timpánica.",
      "En la ventana redonda del oído externo."
    ],
    correcta: 1,
    explicacion: "El **Órgano de Corti** se sitúa en la rampa media o conducto coclear sobre la membrana basilar; sus células ciliadas realizan la transducción auditiva hacia el nervio coclear (VIII par)."
  },
  {
    id: "q-anat-5",
    asignaturaId: "anatomia",
    unidad: "Unidad 3",
    pregunta: "Dentro de la musculatura intrínseca de la laringe (Unidad 3), ¿cuál es el ÚNICO músculo abductor encargado de separar los pliegues vocales y abrir la glotis durante la inspiración?",
    opciones: [
      "Músculo tiroaritenoideo (músculo vocal).",
      "Músculo cricoaritenoideo posterior.",
      "Músculo cricoaritenoideo lateral.",
      "Músculo interaritenoideo."
    ],
    correcta: 1,
    explicacion: "El **músculo cricoaritenoideo posterior** es el único dilatador (abductor) de la glotis; el resto de músculos intrínsecos (cricoaritenoideo lateral, interaritenoideo, tiroaritenoideo y cricotiroideo) son aductores o tensores para la fonación."
  },
  {
    id: "q-anat-6",
    asignaturaId: "anatomia",
    unidad: "Unidad 3",
    pregunta: "¿Qué par craneal inerva la musculatura intrínseca y extrínseca de la lengua, siendo fundamental para la articulación de fonemas linguales y la propulsión del bolo en la fase oral de la deglución?",
    opciones: [
      "V par craneal (Trigémino).",
      "VII par craneal (Facial).",
      "VIII par craneal (Vestibulococlear).",
      "XII par craneal (Hipogloso)."
    ],
    correcta: 3,
    explicacion: "El **XII par craneal (nervio hipogloso)** es el nervio motor de la lengua; su lesión provoca hemiatrofia/paresia lingual y disartria."
  },
  {
    id: "q-anat-7",
    asignaturaId: "anatomia",
    unidad: "Unidad 4",
    pregunta: "En el Modelo Multimodal Cerebral del Lenguaje (González y Hornauer-Hughes, 2014), ¿qué estructura de sustancia blanca conecta el Área de Wernicke con el Área de Broca y cuya lesión produce típicamente una alteración severa en la repetición (afasia de conducción)?",
    opciones: [
      "El cuerpo calloso.",
      "El fascículo arqueado.",
      "La cisura de Rolando.",
      "El giro hipocampal."
    ],
    correcta: 1,
    explicacion: "El **fascículo arqueado** es el haz de fibras de asociación que conecta bidireccionalmente el área de Wernicke (temporal) con el área de Broca (frontal), siendo crucial para la repetición verbal."
  },
  {
    id: "q-anat-8",
    asignaturaId: "anatomia",
    unidad: "Unidad 4",
    pregunta: "Cuando un maestro de Audición y Lenguaje utiliza el lenguaje para explicar qué significa una palabra o cómo se conjuga un verbo, ¿qué función del lenguaje de Roman Jakobson predomina?",
    opciones: [
      "Función fática o de contacto.",
      "Función metalingüística.",
      "Función emotiva o expresiva.",
      "Función conativa o apelativa."
    ],
    correcta: 1,
    explicacion: "La **función metalingüística** (Unidad 4) se centra en el propio código lingüístico, es decir, utilizar el lenguaje para hablar y reflexionar sobre el lenguaje."
  },
  {
    id: "q-anat-9",
    asignaturaId: "anatomia",
    unidad: "Unidad 5",
    pregunta: "En relación con los movimientos oculares durante la percepción visual de la lectura (Unidad 5), señale el dato fisiológico CORRECTO:",
    opciones: [
      "Los ojos se deslizan de forma continua y suave sin detenerse nunca sobre las líneas.",
      "La duración media de cada fijación ocular es de unos 225 ms, y entre el 10% y el 15% de los movimientos sacádicos son regresiones hacia atrás.",
      "La extracción de información visual de las letras ocurre exclusivamente durante el salto del movimiento sacádico.",
      "Los lectores expertos realizan un 80% de regresiones en cada frase."
    ],
    correcta: 1,
    explicacion: "Durante la lectura (Unidad 5), la información se extrae en las **fijaciones** (que duran unos **225-250 ms**), separadas por saltos rápidos (**movimientos sacádicos**), siendo un **10-15%** de ellos **regresiones** para releer."
  },
  {
    id: "q-anat-10",
    asignaturaId: "anatomia",
    unidad: "Unidad 5",
    pregunta: "¿En qué modelo de acceso al léxico cada palabra cuenta con una unidad detectora que acumula simultáneamente evidencia sensorial (auditiva o visual) y contextual (sintáctica y semántica) hasta superar un umbral de activación?",
    opciones: [
      "Modelo de Búsqueda Serial Autónoma de Forster (1979).",
      "Modelo de Logogén de Morton (1969).",
      "Teoría Motora de Liberman.",
      "Modelo de Producción de Fromkin (1971)."
    ],
    correcta: 1,
    explicacion: "El **Modelo de Logogén de Morton (1969)** es un modelo de acceso directo, en paralelo e interactivo donde cada palabra está representada por un *logogén* con un umbral que depende de su frecuencia de uso."
  },

  // --- EVALUACIÓN E INTERVENCIÓN EN LOS TRASTORNOS DEL LENGUAJE ORAL ---
  {
    id: "q-oral-1",
    asignaturaId: "oral",
    unidad: "Unidad 1",
    pregunta: "En el desarrollo prelingüístico (9-12 meses), cuando un bebé señala un avión que pasa por el cielo y mira a su madre únicamente para compartir con ella el interés por el objeto (y no para pedir que se lo den), está realizando:",
    opciones: [
      "Una conducta protoimperativa.",
      "Una conducta protodeclarativa.",
      "Un balbuceo canónico reduplicativo.",
      "Una holofrase morfosintáctica."
    ],
    correcta: 1,
    explicacion: "Los **protodeclarativos** (Unidad 1) tienen como fin compartir la atención conjunta y la experiencia con el interlocutor; su ausencia es un indicador temprano de alerta para TEA."
  },
  {
    id: "q-oral-2",
    asignaturaId: "oral",
    unidad: "Unidad 1",
    pregunta: "Según el modelo de prevención de Caplan aplicado al ámbito escolar en Audición y Lenguaje, ¿a qué nivel corresponde la realización de un cribado fonológico y comunicativo en 1º de Educación Infantil para detectar precozmente posibles dificultades antes de que se consoliden?",
    opciones: [
      "Prevención primaria.",
      "Prevención secundaria.",
      "Prevención terciaria.",
      "Intervención clínica hospitalaria."
    ],
    correcta: 1,
    explicacion: "La **prevención secundaria** tiene como objetivo la detección precoz (cribado o *screening*) ante los primeros signos de alerta para intervenir tempranamente y reducir la prevalencia del trastorno."
  },
  {
    id: "q-oral-3",
    asignaturaId: "oral",
    unidad: "Unidad 2",
    pregunta: "Según la evidencia científica actual recogida en la Unidad 2 (Farquharson, 2019; Susanibar et al., 2016) sobre la intervención en el Trastorno de los Sonidos del Habla (TSH), ¿qué práctica carece de respaldo empírico y debe evitarse de forma aislada?",
    opciones: [
      "El entrenamiento en contraste de pares mínimos.",
      "El trabajo en conciencia fonológica y bombardeo auditivo.",
      "La realización de ejercicios motores orales no verbales (praxias bucofonatorias con mermelada y ejercicios de soplo con velas o matasuegras) para corregir dislalias/TSH.",
      "El moldeamiento fonético del punto y modo de articulación durante la producción de habla real."
    ],
    correcta: 2,
    explicacion: "Farquharson (2019) y Susanibar et al. (2016) demuestran que las **praxias no verbales y el soplo aislado no transfieren mejoras a la articulación del habla** en el TSH."
  },
  {
    id: "q-oral-4",
    asignaturaId: "oral",
    unidad: "Unidad 2",
    pregunta: "Un niño de 4 años y medio dice 'pato' cuando quiere decir 'plato' y 'tabe' cuando quiere decir 'cable'. ¿Qué tipo de Proceso de Simplificación Fonológica está aplicando?",
    opciones: [
      "Proceso relativo a la estructura silábica (reducción de grupo consonántico / ataque complejo).",
      "Proceso de nasalización vocálica.",
      "Disglosia palatina.",
      "Disfemia tónica."
    ],
    correcta: 0,
    explicacion: "Simplificar los sinfones o grupos consonánticos (*pl -> p*, *bl -> b*) es un **proceso de simplificación fonológica relativo a la estructura silábica** (reducción de grupo consonántico)."
  },
  {
    id: "q-oral-5",
    asignaturaId: "oral",
    unidad: "Unidad 3",
    pregunta: "¿Qué protocolos clínicos están específicamente diseñados para realizar la evaluación miofuncional orofacial en casos de Disglosia?",
    opciones: [
      "PROLEC-R y PROESC.",
      "OMES-E y PEMO.",
      "PRET-I y PRET-A.",
      "Test ComFor y PECS."
    ],
    correcta: 1,
    explicacion: "Los protocolos **OMES-E** (Evaluación Miofuncional Orofacial con Puntuaciones Expandidas) y **PEMO** son los instrumentos de referencia en la Unidad 3 para evaluar estructuras y funciones orofaciales en las disglosias."
  },
  {
    id: "q-oral-6",
    asignaturaId: "oral",
    unidad: "Unidad 3",
    pregunta: "En la evaluación perceptual de la voz en una disfonía infantil mediante la escala GRBAS, ¿qué evalúan las siglas 'B' (Breathiness) y 'S' (Strain)?",
    opciones: [
      "Balbuceo y Silabeo.",
      "Carácter aéreo/soplante de la voz (escape de aire glótico) y grado de tensión/esfuerzo vocal.",
      "Brillo nasal y Sordera.",
      "Bradilalia y Sialorrea."
    ],
    correcta: 1,
    explicacion: "En la escala **GRBAS**: **G** = Grado global, **R** = Ronquera/aspereza (*Roughness*), **B** = Voz aérea/soplante (*Breathiness*), **A** = Astenia/debilidad (*Asthenia*) y **S** = Tensión/esfuerzo (*Strain*)."
  },
  {
    id: "q-oral-7",
    asignaturaId: "oral",
    unidad: "Unidad 4",
    pregunta: "¿Cuál de los siguientes indicadores clínicos permite diferenciar una Disfemia (Tartamudez) instaurada de una Disfluencia Evolutiva fisiológica?",
    opciones: [
      "Aparición de más de 3 disfluencias atípicas por cada 100 palabras, bloqueos tónicos, prolongaciones audibles y presencia de tensión muscular o movimientos asociados.",
      "Vacilaciones ocasionales al aprender estructuras sintácticas nuevas a los 3 años sin tensión muscular.",
      "Repetición esporádica de palabras enteras ('pero-pero') sin conciencia del problema ni frustración.",
      "Remisión espontánea antes de los 3 meses desde su inicio."
    ],
    correcta: 0,
    explicacion: "La **disfemia** se caracteriza por $>3\\%$ de disfluencias tartamudeadas (repetición de sonidos/sílabas, prolongaciones y bloqueos), tensión muscular, sincinesias y componentes emocionales de ansiedad/evitación (Iceberg de Sheehan)."
  },
  {
    id: "q-oral-8",
    asignaturaId: "oral",
    unidad: "Unidad 4",
    pregunta: "Ante un alumno de 4 años en Educación Infantil con inicio de tartamudez, ¿cuál de las siguientes pautas de intervención INDIRECTA para la familia y el tutor es CORRECTA?",
    opciones: [
      "Pedirle constantemente que 'respire hondo, se calme y piense antes de hablar' cada vez que se bloquee.",
      "Terminar rápidamente sus palabras para que no pase vergüenza.",
      "Reducir la velocidad del habla del adulto usando pausas, mantener contacto visual natural, respetar los turnos y dar prioridad a QUÉ dice el niño sobre CÓMO lo dice.",
      "Obligarle a leer en voz alta frente a toda la clase con cronómetro."
    ],
    correcta: 2,
    explicacion: "En la **intervención indirecta** (Unidad 4), el adulto modela un habla lenta y pausada, elimina las exigencias comunicativas y nunca da órdenes sobre cómo hablar (*'respira', 'repite'*), reduciendo la presión ambiental."
  },
  {
    id: "q-oral-9",
    asignaturaId: "oral",
    unidad: "Unidad 5",
    pregunta: "Según el estudio de Ahufinger et al. (2021) analizado en la Unidad 5, además de las dificultades morfosintácticas, ¿qué marcador cognitivo resulta clave en la evaluación del Trastorno del Desarrollo del Lenguaje (TDL)?",
    opciones: [
      "La agudeza visual periférica.",
      "La limitación en la memoria fonológica a corto plazo (evaluada mediante tareas de repetición de pseudopalabras) y en la atención sostenida.",
      "La presencia de hipoacusia conductiva severa.",
      "El exceso de vocabulario abstracto."
    ],
    correcta: 1,
    explicacion: "Ahufinger et al. (2021) destacan que el **TDL** conlleva déficits significativos en la **memoria fonológica a corto plazo** (repetición de pseudopalabras), memoria de trabajo y atención."
  },
  {
    id: "q-oral-10",
    asignaturaId: "oral",
    unidad: "Unidad 5",
    pregunta: "¿Cuál es la batería estandarizada de referencia internacional para evaluar de forma exhaustiva las competencias lingüísticas receptivas y expresivas en niños de 5 a 15 años con sospecha de TDL?",
    opciones: [
      "CELF-5 (Clinical Evaluation of Language Fundamentals - 5).",
      "PROESC.",
      "Test de Frostig.",
      "Escala GRBAS."
    ],
    correcta: 0,
    explicacion: "La batería **CELF-5** es el instrumento clínico de referencia para el diagnóstico y perfil lingüístico del TDL en edad escolar y adolescente."
  },

  // --- EVALUACIÓN E INTERVENCIÓN EN LOS TRASTORNOS DE LA LENGUA ESCRITA ---
  {
    id: "q-escr-1",
    asignaturaId: "escrita",
    unidad: "Unidad 1",
    pregunta: "En relación con las características del sistema ortográfico español (Unidad 1: 27 letras, 30 grafemas y 24 fonemas), señale la afirmación CORRECTA:",
    opciones: [
      "El español es un idioma completamente opaco tanto en lectura como en escritura, igual que el inglés.",
      "El español es un sistema transparente en la LECTURA (las RCGF son regulares y predecibles), pero más opaco en la ESCRITURA (existen fonemas que pueden representarse con varios grafemas en las RCFG, como b/v, g/j, c/z, h).",
      "El español es más transparente en la escritura al dictado que en la lectura.",
      "La conciencia fonológica no influye en el aprendizaje de los sistemas alfabéticos transparentes."
    ],
    correcta: 1,
    explicacion: "El español presenta una **asimetría ortográfica**: es transparente en lectura (RCGF unívocas), por lo que en dislexia destaca la lentitud lectora, pero es semi-opaco en escritura por la presencia de grafemas inconsistentes (RCFG)."
  },
  {
    id: "q-escr-2",
    asignaturaId: "escrita",
    unidad: "Unidad 2",
    pregunta: "Según el Modelo de Doble Ruta de la lectura (Coltheart et al., 2001) y su correlato neurobiológico (Unidad 2), ¿qué vía y qué circuito cerebral utiliza un lector para leer por primera vez una PSEUDOPALABRA como 'trulipán'?",
    opciones: [
      "La vía léxica o visual directa a través del circuito occipital derecho.",
      "La vía subléxica o fonológica (aplicando las RCGF) a través del circuito dorsal temporoparietal izquierdo.",
      "El área motora de Exner exclusivamente.",
      "El modelo de 'decir el conocimiento' de Bereiter y Scardamalia."
    ],
    correcta: 1,
    explicacion: "Las **pseudopalabras** y palabras desconocidas no existen en el almacén léxico visual, por lo que solo pueden leerse mediante la **vía subléxica o fonológica** (circuito dorsal temporoparietal izquierdo) aplicando las Reglas de Conversión Grafema-Fonema."
  },
  {
    id: "q-escr-3",
    asignaturaId: "escrita",
    unidad: "Unidad 2",
    pregunta: "En el modelo de comprensión lectora de Kintsch y Van Dijk (1978), ¿cómo se denomina el nivel de representación más profundo en el que el lector integra el significado del texto con sus conocimientos previos sobre el mundo mediante inferencias?",
    opciones: [
      "Microestructura superficial.",
      "Modelo de la Situación.",
      "Bucle articulatorio.",
      "Almacén de alógrafos."
    ],
    correcta: 1,
    explicacion: "Kintsch y Van Dijk (1978) distinguen la **Microestructura** (proposiciones locales), la **Macroestructura** (idea global del texto) y el **Modelo de la Situación** (integración con el conocimiento previo del lector)."
  },
  {
    id: "q-escr-4",
    asignaturaId: "escrita",
    unidad: "Unidad 3",
    pregunta: "Un alumno de 9 años lee con rapidez palabras frecuentes ('casa', 'colegio'), pero fracasa estrepitosamente al leer pseudopalabras y palabras infrecuentes, cometiendo numerosas LEXICALIZACIONES (lee 'playa' donde dice 'plasa'). ¿Qué perfil de dislexia presenta?",
    opciones: [
      "Dislexia superficial.",
      "Dislexia fonológica.",
      "Disgrafía motriz periférica.",
      "Disortografía visoespacial pura."
    ],
    correcta: 1,
    explicacion: "En la **dislexia fonológica** (Unidad 3) está dañada la ruta subléxica (fonológica), por lo que el alumno se apoya en la ruta léxica visual, fracasando en pseudopalabras y convirtiéndolas en palabras reales parecidas (**lexicalizaciones**)."
  },
  {
    id: "q-escr-5",
    asignaturaId: "escrita",
    unidad: "Unidad 3",
    pregunta: "¿Cuál es el error patognomónico (característico y exclusivo) de la Dislexia Profunda que no aparece en la dislexia fonológica ni en la superficial puras?",
    opciones: [
      "Las paralexias semánticas (por ejemplo, leer 'mar' donde está escrito 'océano' o 'feliz' donde dice 'alegre').",
      "El silabeo lento en palabras largas.",
      "La confusión entre palabras homófonas como 'hola' y 'ola'.",
      "La mala letra en el dictado."
    ],
    correcta: 0,
    explicacion: "La **dislexia profunda** implica el deterioro de ambas rutas de lectura y se caracteriza por la aparición de **paralexias semánticas** (sustituir una palabra por otra asociada por su significado sin parecido visual ni fonológico)."
  },
  {
    id: "q-escr-6",
    asignaturaId: "escrita",
    unidad: "Unidad 3",
    pregunta: "Según el nuevo Consenso Delphi sobre la Dislexia de Carroll et al. (2025) recogido en la Unidad 3, señale la afirmación VERDADERA:",
    opciones: [
      "Solo se puede diagnosticar dislexia si el niño tiene un CI superior a 120.",
      "Se rechaza el criterio de discrepancia con el CI; se define por dificultades persistentes en precisión y/o fluidez lectora y ortografía, con papel nuclear del procesamiento fonológico junto a la velocidad de denominación (RAN) y memoria verbal.",
      "La dislexia es un problema puramente ocular que se corrige con lentes de colores.",
      "La dislexia nunca coexiste con el TDL ni con la discalculia."
    ],
    correcta: 1,
    explicacion: "El consenso Delphi de Carroll et al. (2025) elimina la discrepancia con el CI, subraya el peso de la fluidez lectora en ortografías transparentes y adopta un modelo multifactorial (fonología + RAN + memoria operativa)."
  },
  {
    id: "q-escr-7",
    asignaturaId: "escrita",
    unidad: "Unidad 4",
    pregunta: "Según la clasificación de la Disortografía de Luria / Tsvetkova y Rivas y Fernández (2011) estudiada en la Unidad 4, ¿en qué subtipo está alterada la secuenciación fonemática del discurso provocando típicamente errores de UNIÓN y FRAGMENTACIÓN indebida de palabras ('elperro', 'en tonces')?",
    opciones: [
      "Disortografía disortocinética.",
      "Disortografía visoespacial.",
      "Disgrafía motriz caligráfica.",
      "Discalculia verbal."
    ],
    correcta: 0,
    explicacion: "En la **disortografía disortocinética** se encuentra alterada la ordenación y secuenciación de los elementos gráficos en la cadena hablada, generando uniones (hiposegmentación) y fragmentaciones (hipersegmentación) de palabras."
  },
  {
    id: "q-escr-8",
    asignaturaId: "escrita",
    unidad: "Unidad 4",
    pregunta: "¿Cuál es la diferencia esencial entre la Disgrafía Evolutiva Motriz y la Disortografía (Unidad 4)?",
    opciones: [
      "No existe ninguna diferencia, son sinónimos exactos.",
      "La Disgrafía Motriz afecta a la calidad del trazado caligráfico y a los procesos motores (forma, tamaño, inclinación, presión), mientras que la Disortografía afecta a la correcta transcripción del código lingüístico y las reglas ortográficas sin que tenga que estar alterado el dibujo de la letra.",
      "La Disortografía solo afecta a la lectura en voz alta.",
      "La Disgrafía Motriz se evalúa únicamente con el test de vocabulario Peabody."
    ],
    correcta: 1,
    explicacion: "La **Disgrafía Motriz** compromete el módulo motor/caligráfico (alógrafos y patrones motores), mientras que la **Disortografía** compromete las rutas fonológica y ortográfica de la escritura de palabras."
  },
  {
    id: "q-escr-9",
    asignaturaId: "escrita",
    unidad: "Unidad 5",
    pregunta: "En la Unidad 5 sobre Discalculia, cuando se le dicta a un alumno el número 'doscientos cuatro' y escribe '2004' en lugar de '204', ¿qué tipo de error específico está cometiendo?",
    opciones: [
      "Un error de transcodificación numérica y comprensión del valor posicional.",
      "Una paralexia semántica.",
      "Una disartria atáxica.",
      "Un error de conciencia intrasilábica."
    ],
    correcta: 0,
    explicacion: "Escribir *2004* por *'doscientos cuatro'* es un **error sintáctico de transcodificación numérica** del código verbal auditivo al código arábigo visual por fallo en el dominio del valor posicional."
  },
  {
    id: "q-escr-10",
    asignaturaId: "escrita",
    unidad: "Unidad 5",
    pregunta: "¿Por qué los alumnos con Dislexia o TDL presentan con tanta frecuencia dificultades para aprender y recuperar de memoria las tablas de multiplicar, aunque comprendan bien los conceptos de cantidad?",
    opciones: [
      "Porque las tablas de multiplicar se almacenan y recuperan en el código verbal-fonológico (hemisferio izquierdo), que es precisamente el sistema deficitario en la dislexia y el TDL.",
      "Porque tienen dañado el nervio óptico.",
      "Porque las tablas de multiplicar no requieren memoria a largo plazo.",
      "Porque la dislexia impide contar hasta 3."
    ],
    correcta: 0,
    explicacion: "Según el Modelo del Triple Código (Dehaene / Unidad 5), los hechos numéricos como las **tablas de multiplicar** se almacenan como rutinas verbales-fonológicas en las redes del lenguaje del hemisferio izquierdo."
  },

  // --- SISTEMAS AUMENTATIVOS Y ALTERNATIVOS DE LA COMUNICACIÓN Y TIC (SAAC) ---
  {
    id: "q-saac-1",
    asignaturaId: "saac",
    unidad: "Unidad 1",
    pregunta: "En la evaluación para seleccionar un SAAC en un alumno con TEA y discapacidad intelectual, ¿qué prueba clínica permite determinar en cuál de los 4 niveles de atribución de sentido visual (Sensación, Presentación, Representación o Metarrepresentación) se sitúa el alumno?",
    opciones: [
      "El Test ComFor (Forerunners in Communication de Noens et al., 2006).",
      "El Registro Fonológico Inducido (RFI).",
      "La Batería PROESC.",
      "El protocolo OMES-E."
    ],
    correcta: 0,
    explicacion: "El **Test ComFor** (Noens et al., 2006) evalúa los precursores de la comunicación en 4 niveles (*Sensación, Presentación, Representación y Metarrepresentación*) para elegir la forma simbólica exacta (objeto real, foto, pictograma o palabra escrita)."
  },
  {
    id: "q-saac-2",
    asignaturaId: "saac",
    unidad: "Unidad 2",
    pregunta: "¿Qué sistema aumentativo de comunicación para personas con discapacidad auditiva combina la lectura labiofacial con 8 configuraciones de la mano (consonantes) en 3 posiciones alrededor del rostro (vocales) para eliminar la ambigüedad de los fonemas con igual punto de articulación?",
    opciones: [
      "La Palabra Complementada (LPC / Cued Speech de Cornett).",
      "El Sistema PECS.",
      "El Sistema BLISS.",
      "El método auditivo puro sin apoyo visual."
    ],
    correcta: 0,
    explicacion: "**La Palabra Complementada (LPC)** hace 100% visible la fonología del habla oral acompañando la lectura labial con 8 figuras manuales (consonantes) y 3 localizaciones faciales (vocales)."
  },
  {
    id: "q-saac-3",
    asignaturaId: "saac",
    unidad: "Unidad 2",
    pregunta: "¿Cuál es la diferencia lingüística fundamental entre la Comunicación Bimodal y la Lengua de Signos Española (LSE)?",
    opciones: [
      "La Comunicación Bimodal es un sistema aumentativo que utiliza simultáneamente el habla y signos manuales pero siguiendo el orden morfosintáctico de la lengua oral (español), mientras que la LSE es una lengua natural con su propia gramática y sintaxis visuoespacial.",
      "La LSE solo utiliza el deletreo dactilológico letra a letra.",
      "En la Comunicación Bimodal está prohibido emitir voz.",
      "Son exactamente el mismo sistema con distinto nombre."
    ],
    correcta: 0,
    explicacion: "En la **Comunicación Bimodal** la estructura sintáctica base es la del español oral; la **LSE** es un sistema alternativo y una lengua de pleno derecho con sintaxis espacial propia."
  },
  {
    id: "q-saac-4",
    asignaturaId: "saac",
    unidad: "Unidad 3",
    pregunta: "Según la Unidad 3, ¿cuál es el orden correcto de prelación (prioridad) de los objetivos de intervención comunicativa en el alumnado con TEA?",
    opciones: [
      "1º Corrección fonética de la /r/, 2º Caligrafía, 3º Ortografía y 4º Comunicación.",
      "1º Comunicación funcional para expresar deseos/necesidades, 2º Comprensión por encima de la expresión, 3º Interpretación global y pensamiento coherente, y 4º Expresión motora fina/inteligibilidad del habla.",
      "Exigir primero que el niño hable oralmente antes de darle cualquier apoyo visual.",
      "Trabajar únicamente la repetición ecolálica sin contexto."
    ],
    correcta: 1,
    explicacion: "En TEA (Unidad 3, epígrafe 3.1) la prioridad absoluta es lograr primero una **comunicación funcional** y afianzar la **comprensión** antes que la perfección articulatoria motora."
  },
  {
    id: "q-saac-5",
    asignaturaId: "saac",
    unidad: "Unidad 3",
    pregunta: "En el Sistema de Comunicación por Intercambio de Imágenes (PECS de Bondy y Frost, 1994), ¿en qué fase el alumno aprende por primera vez a construir una oración colocando el icono 'Quiero' seguido del icono del objeto deseado en la tira-frase?",
    opciones: [
      "Fase I (Cómo comunicarse: intercambio físico).",
      "Fase II (Distancia y persistencia).",
      "Fase III (Discriminación de imágenes).",
      "Fase IV (Estructura de la oración)."
    ],
    correcta: 3,
    explicacion: "En la **Fase IV de PECS** se introduce la tira-frase donde el alumno combina el pictograma de inicio de oración (*'Quiero'*) más el pictograma del referente solicitado."
  },
  {
    id: "q-saac-6",
    asignaturaId: "saac",
    unidad: "Unidad 4",
    pregunta: "De acuerdo con el código de colores estándar utilizado en los sistemas gráficos como SPC, ARASAAC y BLISS para estructurar sintácticamente los tableros de comunicación, ¿qué categorías corresponden a los colores AMARILLO, VERDE, AZUL y NARANJA respectivamente?",
    opciones: [
      "Amarillo = Personas/pronombres; Verde = Verbos/acciones; Azul = Adjetivos/descriptivos; Naranja = Sustantivos/objetos.",
      "Amarillo = Verbos; Verde = Sustantivos; Azul = Personas; Naranja = Cortesía.",
      "Todos los pictogramas llevan el mismo color según la edad del niño.",
      "Amarillo = Números; Verde = Letras; Azul = Signos; Naranja = Colores."
    ],
    correcta: 0,
    explicacion: "El código cromático estándar (Clave Fitzgerald / SPC / Bliss) asigna: **Amarillo** = Personas, **Verde** = Verbos, **Azul** = Descriptivos/Adjetivos, **Naranja** = Sustantivos/Objetos, **Rosa** = Social y **Blanco** = Miscelánea."
  },
  {
    id: "q-saac-7",
    asignaturaId: "saac",
    unidad: "Unidad 4",
    pregunta: "¿Qué sistema gráfico de comunicación con ayuda combina símbolos pictográficos, ideográficos y abstractos capaces de modificarse con indicadores morfológicos para crear nuevos conceptos, siendo especialmente indicado para usuarios con parálisis cerebral y buen nivel cognitivo?",
    opciones: [
      "Sistema BLISS.",
      "Calendario tangible de objetos reales.",
      "Dactilología.",
      "Método de lectura labial pura."
    ],
    correcta: 0,
    explicacion: "El **Sistema BLISS** (Charles Bliss) es un sistema logográfico/ideográfico de gran riqueza gramatical que permite generar significados complejos en personas con grave afectación motora y buena capacidad intelectual."
  },
  {
    id: "q-saac-8",
    asignaturaId: "saac",
    unidad: "Unidad 5",
    pregunta: "Cuando un maestro de AL y la familia señalan los pictogramas en el comunicador del alumno al mismo tiempo que le hablan de forma natural durante todas las rutinas diarias (ofreciendo un modelo de entrada en CAA sin exigir repetición obligatoria), están aplicando:",
    opciones: [
      "Lenguaje Natural Asistido (LNA) / Modelado en CAA.",
      "Castigo negativo conductual.",
      "Barrido dependiente auditivo.",
      "Terapia miofuncional pasiva."
    ],
    correcta: 0,
    explicacion: "El **Lenguaje Natural Asistido (LNA)** consiste en acompañar el habla oral señalando los símbolos en el sistema aumentativo del usuario en contextos naturales para proporcionarle *input* comprensible en su mismo código."
  },
  {
    id: "q-saac-9",
    asignaturaId: "saac",
    unidad: "Unidad 5",
    pregunta: "En el marco de la LOMLOE (Unidad 5), la incorporación de un comunicador dinámico con lector ocular y un equipo de FM para que una alumna con discapacidad motora e hipoacusia pueda seguir el currículo ordinario sin rebajar los criterios de evaluación constituye:",
    opciones: [
      "Una Adaptación Curricular Significativa (ACIS) con eliminación de objetivos.",
      "Una Adaptación de Acceso al Currículo.",
      "Una medida de escolarización en centro de educación especial a tiempo completo.",
      "Un diagnóstico médico de afasia."
    ],
    correcta: 1,
    explicacion: "Proveer recursos materiales, ayudas técnicas (FM, lector ocular) y sistemas aumentativos o alternativos de comunicación sin modificar los elementos prescriptivos del currículo es una **Adaptación de Acceso al Currículo**."
  },
  {
    id: "q-saac-10",
    asignaturaId: "saac",
    unidad: "Unidad 5",
    pregunta: "¿Cuál de las siguientes herramientas TIC gratuitas es un procesador de textos desarrollado en relación con el portal ARASAAC que permite escribir texto y que aparezca simultáneamente el pictograma correspondiente encima de cada palabra?",
    opciones: [
      "AraWord.",
      "Audacity.",
      "Praat.",
      "SPSS."
    ],
    correcta: 0,
    explicacion: "**AraWord** (Unidad 5) es el procesador de textos libre de la suite ARASAAC para crear materiales de lectura adaptada con texto y pictogramas simultáneos."
  }
];

// ----------------------------------------------------------------------------
// 4. LAS 8 HERRAMIENTAS CLÍNICAS INTERACTIVAS PARA AUDICIÓN Y LENGUAJE
// ----------------------------------------------------------------------------
window.AL_DATA.herramientasClinicas = {
  // Herramienta 1: Atlas de los 12 Pares Craneales y Áreas Cerebrales del Lenguaje
  atlasNeurologico: {
    titulo: "Atlas Interactivo de Pares Craneales y Áreas Neurolingüísticas",
    asignatura: "Anatomía, Fisiología y Neurología del Lenguaje (Unidades 1, 2, 3 y 4)",
    paresCraneales: [
      { numero: "I", nombre: "Olfatorio", tipo: "Sensitivo", funcionHabla: "Olfato (interviene de forma indirecta en la fase cefálica de la alimentación/deglución).", lesion: "Anosmia." },
      { numero: "II", nombre: "Óptico", tipo: "Sensitivo", funcionHabla: "**Vía visual para la lectura** (retina: conos y bastones -> quiasma -> corteza occipital) y percepción de gestos/lectura labiofacial.", lesion: "Ceguera / Hemianopsia / Alteración periférica de la lectura." },
      { numero: "III, IV, VI", nombre: "Oculomotor, Troclear y Abducens", tipo: "Motor", funcionHabla: "Control de los **movimientos oculares sacádicos, fijaciones (225 ms) y regresiones** durante la lectura y el acceso por mirada (eye-tracking).", lesion: "Diplopía, estrabismo, disfunción oculomotora lectora." },
      { numero: "V", nombre: "Trigémino", tipo: "Mixto", funcionHabla: "**Sensibilidad táctil/propioceptiva de toda la cara, labios, dientes y 2/3 anteriores de la lengua** + **Motricidad de los músculos masticadores** (masetero, temporal, pterigoideos) y tensor del velo/tímpano.", lesion: "Anestesia oral (altera el feedback articulatorio) y debilidad mandibular en masticación/habla." },
      { numero: "VII", nombre: "Facial", tipo: "Mixto", funcionHabla: "**Motricidad de toda la musculatura de la mímica facial y del músculo orbicular de los labios** (esencial para fonemas bilabiales /p/, /b/, /m/ y labiodental /f/) + músculo del estribo + gusto 2/3 anteriores de la lengua.", lesion: "Parálisis facial -> escape de aire/saliva por comisura labial y distorsión de bilabiales." },
      { numero: "VIII", nombre: "Vestibulococlear (Auditivo)", tipo: "Sensitivo", funcionHabla: "**Rama coclear: audición y discriminación fonológica** desde el Órgano de Corti hasta el tronco y giro de Heschl; **Rama vestibular: equilibrio**.", lesion: "**Hipoacusia neurosensorial** / sordera retrococlear y vértigo." },
      { numero: "IX", nombre: "Glosofaríngeo", tipo: "Mixto", funcionHabla: "Sensibilidad del 1/3 posterior de la lengua y faringe, gusto posterior y **disparo del reflejo deglutorio y nauseoso**.", lesion: "Disfagia orofaríngea y pérdida del reflejo palatal." },
      { numero: "X", nombre: "Vago (Neumogástrico)", tipo: "Mixto", funcionHabla: "**Nervio rey de la voz y la resonancia**: a través del *nervio laríngeo superior* y *laríngeo recurrente* inerva los músculos intrínsecos de la laringe (fonación) y el **velo del paladar** (cierre velofaríngeo oral vs nasal).", lesion: "**Disfonía orgánica por parálisis de cuerda vocal**, **hipernasalidad (rinolalia abierta)** y disfagia con aspiración." },
      { numero: "XI", nombre: "Accesorio (Espinal)", tipo: "Motor", funcionHabla: "Inerva los músculos **esternocleidomastoideo y trapecio** (control postural cefálico y musculatura accesoria de la respiración).", lesion: "Deficiente control cefálico para la fonación, deglución y acceso a SAAC." },
      { numero: "XII", nombre: "Hipogloso", tipo: "Motor", funcionHabla: "**Motricidad de todos los músculos intrínsecos y extrínsecos de la lengua** (salvo el palatogloso): articulación de fonemas alveolares, dentales, palatales y velares (/l/, /r/, /t/, /d/, /s/, /k/) y propulsión del bolo.", lesion: "**Disartria lingual**, desviación de la lengua hacia el lado lesionado y disfagia en fase oral." }
    ],
    areasCerebrales: [
      { nombre: "Área de Broca (BA 44 y 45)", localizacion: "Giro frontal inferior izquierdo", funcion: "Planificación motora articulatoria del habla, procesamiento morfosintáctico y verbos.", sindrome: "Afasia de Broca (no fluente, agramatismo, anomia de verbos, comprensión relativamente conservada)." },
      { nombre: "Área de Wernicke (BA 22)", localizacion: "Giro temporal superior posterior izquierdo", funcion: "Decodificación fonológica auditiva y acceso al significado léxico.", sindrome: "Afasia de Wernicke (habla fluente pero vacía o jergafasia, parafasias, grave déficit de comprensión y anosognosia)." },
      { nombre: "Fascículo Arqueado", localizacion: "Tracto de sustancia blanca temporo-frontal", funcion: "Conexión bidireccional fonológica entre Wernicke y Broca; sustenta la repetición verbal.", sindrome: "Afasia de Conducción (habla fluente, buena comprensión, pero incapacidad severa para repetir palabras/pseudopalabras)." },
      { nombre: "Giro Supramarginal (BA 40) y Giro Angular (BA 39)", localizacion: "Lóbulo parietal inferior izquierdo (Circuito Dorsal)", funcion: "Memoria fonológica a corto plazo, conversión grafema-fonema (RCGF) e integración semántica multimodal.", sindrome: "Alexia con agrafía, dislexia fonológica, anomia y síndrome de Gerstmann." },
      { nombre: "Giro Fusiforme / VWFA (BA 37)", localizacion: "Región occipitotemporal ventral izquierda (Circuito Ventral)", funcion: "Caja de las letras del cerebro: reconocimiento ortográfico visual directo de palabras (vía léxica).", sindrome: "Alexia pura (lectura letra a letra) y dislexia superficial." },
      { nombre: "Área de Exner", localizacion: "Giro frontal medio izquierdo (anterior al área motora de la mano)", funcion: "Traducción de las representaciones ortográficas en patrones motores gráficos de escritura.", sindrome: "Agrafía motora pura / Disgrafía motriz." }
    ]
  },

  // Herramienta 2: Asistente de Diagnóstico Diferencial TDL vs RSL vs TL vs TCS
  diferencialLenguaje: {
    titulo: "Diagnóstico Diferencial: RSL vs TDL (Delphi 2026) vs TL Asociado vs TCS",
    asignatura: "Psicopatología (Unidad 3) y Lenguaje Oral (Unidad 5)",
    perfiles: [
      {
        nombre: "Inicio Tardío del Lenguaje (ITL) / Hablante Tardío",
        edadClave: "24 - 30 meses",
        criterios: "Menos de 50 palabras expresivas y ausencia de combinaciones de 2 palabras a los 24 meses, sin causa sensorial ni neurológica.",
        comprension: "Generalmente preservada (mejor pronóstico) o afectada (mayor riesgo de evolucionar a TDL).",
        pruebas: "Inventarios parentales MacArthur-Bates (CDI), CSBS-DP, Haizea-Llevant.",
        intervencion: "Prevención secundaria: estimulación natural centrada en la familia (Hanen), modelado, expansión y seguimiento a los 30-36 meses."
      },
      {
        nombre: "Retraso Simple del Lenguaje (RSL / REL)",
        edadClave: "2 a 5 años (remite antes de los 5-6 años)",
        criterios: "Desfase cronológico homogéneo: el lenguaje sigue las etapas evolutivas normales pero con retraso. Afecta sobre todo a la expresión (fonología infantilizada y morfosintaxis simple).",
        comprension: "Normal o muy próxima a su edad cronológica.",
        pruebas: "PLON-R, RFI, Peabody PPVT-III, ITPA.",
        intervencion: "Buena y rápida respuesta a la intervención logopédica; baja repercusión ulterior en la lectoescritura."
      },
      {
        nombre: "Trastorno del Desarrollo del Lenguaje (TDL - Consenso Delphi 2026)",
        edadClave: "Persistente a partir de los 4-5 años en adelante",
        criterios: "Alteración neurobiológica severa y duradera SIN condición biomédica asociada (Andreu et al., 2026). Afecta gravemente a la morfosintaxis (omisión de functores, errores morfológicos verbales), fonología y léxico. Marcador nuclear: **déficit en memoria fonológica a corto plazo (repetición de pseudopalabras)**.",
        comprension: "Frecuentemente comprometida en oraciones complejas, discurso e inferencias.",
        pruebas: "CELF-5, BLOC, ITPA, Test de Repetición de Pseudopalabras, PLON-R.",
        intervencion: "Intervención intensiva y prolongada con apoyos visuales morfosintácticos (trenes de palabras, Soy Visual), conciencia fonológica y prevención activa de la dislexia."
      },
      {
        nombre: "Trastorno del Lenguaje (TL) asociado a Condición Biomédica",
        edadClave: "Cualquier edad según la condición de base",
        criterios: "Trastorno del lenguaje que ocurre como parte de una condición biomédica diagnosticada: **TEA, Discapacidad Intelectual, Hipoacusia neurosensorial, Síndrome de Down, X Frágil o Daño Cerebral Adquirido**.",
        comprension: "Variable según el síndrome o condición biomédica.",
        pruebas: "Evaluación estandarizada adaptada + Test ComFor + audiometría + evaluación psicopedagógica NEE (Art. 73 LOMLOE).",
        intervencion: "Intervención multimodal combinando estimulación del lenguaje oral con SAAC (Bimodal, PECS, comunicadores dinámicos)."
      },
      {
        nombre: "Trastorno de la Comunicación Social (TCS / Pragmático)",
        edadClave: "Visible a partir de los 4-5 años cuando aumentan las demandas conversacionales",
        criterios: "Dificultad primaria en el **uso pragmático** (saludar, adaptar el habla al interlocutor, respetar turnos, entender dobles sentidos, ironías y lenguaje no literal) **SIN conductas ni intereses restrictivos/repetitivos (descarta TEA)**.",
        comprension: "Buena comprensión literal, pero fallo en la comprensión inferencial, contextual y figurada.",
        pruebas: "Subprueba de Pragmática de BLOC / PLON-R, CCC-2 (Children's Communication Checklist), observación en patio y aula.",
        intervencion: "Historias sociales, guiones conversacionales, role-playing cooperativo y trabajo explícito sobre inferencias, ironías y teoría de la mente."
      }
    ]
  },

  // Herramienta 3: Diferenciador Clínico de Lectoescritura y Matemáticas
  diferencialEscrita: {
    titulo: "Matriz Clínica de Dislexias, Disgrafía, Disortografía y Discalculia",
    asignatura: "Evaluación e Intervención en los Trastornos de la Lengua Escrita (Unidades 1 a 5)",
    trastornos: [
      {
        categoria: "Lectura (PROLEC-R / PROLEXIA)",
        nombre: "Dislexia Fonológica",
        rutaAfectada: "Vía Subléxica / Fonológica (Circuito Dorsal Temporoparietal)",
        indicadores: "Lee bien palabras familiares pero falla o tarda mucho en **pseudopalabras** y palabras nuevas. Comete **lexicalizaciones** (*'camisa'* por *'camima'*), errores derivativos (*'cantaba'* por *'cantaron'*) y sustituciones en palabras funcionales.",
        intervencion: "Conciencia fonémica, entrenamiento explícito en Reglas de Conversión Grafema-Fonema (RCGF) con apoyo multisensorial (letras móviles) y lectura de sílabas complejas y pseudopalabras."
      },
      {
        categoria: "Lectura (PROLEC-R / PROLEXIA)",
        nombre: "Dislexia Superficial",
        rutaAfectada: "Vía Léxica / Visual-Ortográfica (Circuito Ventral Occipitotemporal / VWFA)",
        indicadores: "Lee todo por la vía fonológica letra a letra: lectura muy lenta y silabeante (fuerte **efecto de longitud**), regularización de palabras irregulares/extranjerismos (*'Hall'* leído literalmente) y confusión de **homófonos** (*vaca/baca*, *hola/ola*).",
        intervencion: "Lectura rápida de palabras frecuentes (*flashcards*), lecturas repetidas y cronometradas, lectura conjunta o en sombra (*shadow reading*) y emparejamiento de homófonos con su imagen."
      },
      {
        categoria: "Lectura (PROLEC-R)",
        nombre: "Dislexia Profunda / Mixta",
        rutaAfectada: "Ambas vías (Léxica + Subléxica)",
        indicadores: "Bloqueo en pseudopalabras, errores visuales y derivativos, y aparición del signo distintivo: **paralexias semánticas** (leer *'luna'* donde pone *'estrella'* o *'perro'* donde pone *'animal'*).",
        intervencion: "Rehabilitación intensiva combinando reconstrucción subléxica fonológica y anclaje léxico-semántico con apoyo pictográfico."
      },
      {
        categoria: "Escritura (PROESC / TALE)",
        nombre: "Disgrafía Evolutiva Motriz (Caligráfica)",
        rutaAfectada: "Procesos Motores Periféricos (Selección de alógrafos y patrón motor - Área de Exner)",
        indicadores: "Caligrafía ilegible o muy esforzada: macrografía/micrografía, letras mal cerradas, inclinación errática, pérdida del renglón, presión excesiva o temblorosa, **sin que existan necesariamente faltas ortográficas ni dislexia**.",
        intervencion: "Reeducación postural y de prensión del útil, modelado explícito de la direccionalidad del giro de cada letra (evitando cuadernos de copia repetitiva sin supervisión) y pautas pautadas."
      },
      {
        categoria: "Escritura (PROESC)",
        nombre: "Disortografía Natural (Subléxica: Temporal, Perceptivo-kinestésica y Disortocinética)",
        rutaAfectada: "Vía Subléxica de Escritura (RCFG y análisis fonológico)",
        indicadores: "Omisiones de letras/sílabas, sustituciones de fonemas parecidos (/t/-/d/, /r/-/l/), inversiones de sílabas y **uniones/fragmentaciones indebidas de palabras** (*'elperro'*, *'en tonces'*).",
        intervencion: "Conciencia léxica (contar palabras con palmadas o regletas antes de escribir la frase), conciencia fonémica y discriminación auditivo-articulatoria."
      },
      {
        categoria: "Escritura (PROESC)",
        nombre: "Disortografía Arbitraria y Reglada (Léxica / Visoespacial)",
        rutaAfectada: "Vía Léxica Ortográfica (Almacén léxico ortográfico visual)",
        indicadores: "Errores en grafemas con correspondencia inconsistente (**b/v, g/j, h, y/ll, c/z/s**), omisión de tildes y errores en reglas ortográficas (*m antes de p y b*).",
        intervencion: "Ficheros cacográficos visuales/ideográficos (dibujar la letra conflictiva integrada en el significado de la palabra), agrupación por familias léxicas y lectura previa antes del dictado."
      },
      {
        categoria: "Matemáticas",
        nombre: "Discalculia del Desarrollo",
        rutaAfectada: "Sentido Numérico (Surco Intraparietal) y/o Código Verbal-Arábigo (Triple Código de Dehaene)",
        indicadores: "Fallo en subitización y estimación de magnitudes, errores de **transcodificación numérica** (*'doscientos cuatro' -> 2004*), incomprensión del valor posicional y de las llevadas, y olvido de las tablas de multiplicar.",
        intervencion: "Secuencia Concreto (regletas Cuisenaire, bloques multibase, ábaco) -> Pictórico (recta numérica visual) -> Abstracto, con tablas de valor posicional coloreadas."
      }
    ]
  },

  // Herramienta 4: Selector Clínico de SAAC, Test ComFor y Código de Colores
  selectorSAAC: {
    titulo: "Selector Clínico de SAAC, Test ComFor y Código de Colores Sintáctico",
    asignatura: "Sistemas Aumentativos y Alternativos de la Comunicación y las TIC (Unidades 1 a 5)",
    coloresTablero: [
      { color: "Amarillo", hex: "#f59e0b", categoria: "Personas y Pronombres", ejemplos: "Yo, tú, él, mamá, papá, profe, amigo." },
      { color: "Verde", hex: "#10b981", categoria: "Verbos y Acciones (Vocabulario Esencial)", ejemplos: "Querer, ir, comer, beber, jugar, ayudar, parar, mirar, gustar." },
      { color: "Azul", hex: "#3b82f6", categoria: "Adjetivos, Descriptivos y Emociones", ejemplos: "Grande, pequeño, contento, triste, enfadado, rojo, caliente, bonito." },
      { color: "Naranja", hex: "#f97316", categoria: "Sustantivos, Nombres y Objetos (Vocabulario Periférico)", ejemplos: "Agua, galleta, pelota, baño, cuento, tablet, colegio." },
      { color: "Rosa / Morado", hex: "#ec4899", categoria: "Fórmulas Sociales y Cortesía", ejemplos: "Hola, adiós, por favor, gracias, perdón, qué tal." },
      { color: "Blanco", hex: "#64748b", categoria: "Miscelánea, Artículos, Preposiciones y Tiempo", ejemplos: "El, la, con, en, más, no, sí, hoy, mañana." }
    ],
    casosGuia: [
      {
        perfil: "Alumno con TEA no verbal (Nivel Presentación/Representación en ComFor) con baja imitación motora",
        sistemaRecomendado: "Sistema PECS (Bondy y Frost) con fotografías reales / pictogramas ARASAAC y transición a comunicador dinámico con Lenguaje Natural Asistido (LNA).",
        justificacion: "No exige imitación motora fina de signos ni contacto ocular previo bloqueante; parte del intercambio físico tangible en función de petición (Fase I a VI)."
      },
      {
        perfil: "Alumno con TEA no verbal con buena atención hacia el adulto y capacidad de imitación motora manual",
        sistemaRecomendado: "Programa de Comunicación Total - Habla Signada de Benson Schaeffer complementado con agendas visuales (ARASAAC / Soy Visual).",
        justificacion: "Sistema sin ayuda siempre disponible (las propias manos) que enseña el signo mediante moldeamiento y encadenamiento hacia atrás empezando por expresar deseos."
      },
      {
        perfil: "Alumno con Hipoacusia Neurosensorial Profunda portador de Implante Coclear en aula ordinaria con objetivo de dominio del español oral y lectura",
        sistemaRecomendado: "Sistema de FM / Micrófono remoto + Lectura Labiofacial + La Palabra Complementada (LPC) y/o Comunicación Bimodal.",
        justificacion: "El sistema FM elimina el ruido de fondo en el aula, mientras que la LPC desambigua los fonemas invisibles en los labios favoreciendo la conciencia fonológica y el acceso a la lectoescritura."
      },
      {
        perfil: "Alumno con Parálisis Cerebral Espástica/Atetoide severa (anartria y tetraparesia) pero buena comprensión cognitiva",
        sistemaRecomendado: "Comunicador dinámico de alta tecnología (Asterics Grid / Grid 3) con pictogramas ARASAAC o Sistema BLISS + Acceso mediante Lector Ocular (Eye-tracking) o Barrido por Pulsador Cefálico + Tablero E-tran de baja tecnología.",
        justificacion: "Permite comunicación autónoma con voz sintetizada sin depender de las manos, organizando la pantalla en Vocabulario Esencial (Core) y Periférico con el código de colores estándar."
      }
    ]
  }
};
