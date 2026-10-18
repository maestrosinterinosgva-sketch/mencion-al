// ============================================================================
// BASE DE DATOS ACADÉMICA Y CLÍNICA - MENCIÓN AUDICIÓN Y LENGUAJE (UCJC 2026-27)
// Extraída íntegramente de los 29 documentos oficiales (Planificaciones + 25 Unidades)
// ============================================================================

window.AL_DATA = {
  meta: {
    universidad: "Universidad Camilo José Cela (UCJC)",
    titulacion: "Mención en Audición y Lenguaje (Grado en Maestro)",
    curso: "2026-2027 (Semestre 1)",
    fechaLimiteContinua: "2027-01-21",
    fechaExamenOrdinario: "2027-02-05",
    reglaEvaluacion: {
      talleres: { pesoTotal: 10, puntosMax: 1.0, cadaUno: 0.5, penalizacionFueraFecha: 0.95 },
      actividades: { pesoTotal: 20, puntosMax: 2.0, cadaUna: 1.0, penalizacionFueraFecha: 0.95 },
      portfolio: { pesoTotal: 10, puntosMax: 1.0, penalizacionFueraFecha: 0.95 },
      examenFinal: { pesoTotal: 60, puntosMax: 6.0, notaMinimaAprobar: 5.0 }
    }
  },

  asignaturas: [
    {
      id: "psicopatologia",
      nombre: "Psicopatología de la Audición y el Lenguaje",
      corto: "Psicopatología AL",
      profesor: "Rocío Daniela Concha Ortiz",
      color: "#6366f1",
      bgLight: "rgba(99, 102, 241, 0.12)",
      icono: "🧠",
      planificacionPdf: "Planificación_Rocío Daniela Concha Ortiz_Psicopatología de la audición y el lenguaje_Semestre1 (1).pdf",
      examenFecha: "2027-02-05",
      descripcion: "Fundamentos psicopatológicos, sistemas de clasificación (DSM-5, CIE-11, LOMLOE), trastornos de la comunicación, habla, lenguaje oral/escrito, NEE asociadas a discapacidad y NEAE.",
      sesionesSincronas: [
        { num: 1, tipo: "Teórica", tema: "Unidad 1", contenido: "Hacia el conocimiento de la psicopatología de la audición y el lenguaje (120 min)" },
        { num: 2, tipo: "Teórica", tema: "Unidad 2", contenido: "Trastornos de la comunicación y el habla: identificación, abordaje y parámetros diferenciadores (120 min)" },
        { num: 3, tipo: "Teórico-Práctica (Evaluable 0,5 pt)", tema: "Taller Práctico 1 (Caso Real)", contenido: "Aprendizaje Basado en Casos sobre Unidad 2. Entrega + cuestionario en 72h (100% hasta 6 nov)." },
        { num: 4, tipo: "Teórica", tema: "Unidad 3", contenido: "Trastornos del lenguaje oral y del aprendizaje: identificación, abordaje y parámetros diferenciadores (120 min)" },
        { num: 5, tipo: "Teórica", tema: "Unidad 4", contenido: "Psicopatología de la audición y el lenguaje en NEE asociadas a discapacidad (120 min)" },
        { num: 6, tipo: "Teórica", tema: "Unidad 5", contenido: "Psicopatología de la audición y el lenguaje en el alumnado con NEAE (120 min)" },
        { num: 7, tipo: "Teórico-Práctica (Evaluable 0,5 pt)", tema: "Taller Práctico 2 (Infografía)", contenido: "Elaboración de una infografía sobre NEAE y NEE (Unidades 4 y 5). Entrega + cuestionario en 72h (100% hasta 4 dic)." },
        { num: 8, tipo: "Teórica (Repaso)", tema: "Unidades 1 a 5", contenido: "Clase final de repaso general y resolución de dudas (120 min)" }
      ]
    },
    {
      id: "anatomia",
      nombre: "Anatomía, Fisiología y Neurología del Lenguaje",
      corto: "Anatomía y Neurología",
      profesor: "Sara Prieto González",
      color: "#ec4899",
      bgLight: "rgba(236, 72, 153, 0.12)",
      icono: "🫀",
      planificacionPdf: "2. Planificación_SARA PRIETO_ ANATOMÍA2627. virtual ucjc26.pdf",
      examenFecha: "2027-02-05",
      descripcion: "Morfología microscópica y macroscópica del SNC y SNP, órganos receptores (oído y visión), sistema fonoarticulatorio, fisiología de la fonación y organización neurofisiológica de la percepción, comprensión y producción del lenguaje.",
      sesionesSincronas: [
        { num: 1, tipo: "Teórica", tema: "Presentación y Unidad 1", contenido: "Presentación de la asignatura y componentes del Sistema Nervioso Central (120 min)" },
        { num: 2, tipo: "Teórica", tema: "Unidad 2", contenido: "Componentes del SNC y elementos de los órganos receptores del SNP: oído y vista (120 min)" },
        { num: 3, tipo: "Teórico-Práctica (Evaluable 0,5-1 pt)", tema: "Taller Práctico 1", contenido: "Morfología microscópica del SN en relación con el lenguaje (II) y sistema auditivo / hipoacusia. Entrega en 72h (semana 2-6 nov)." },
        { num: 4, tipo: "Teórica", tema: "Unidad 3", contenido: "Órganos receptores SNC y Anatomía del sistema fonoarticulatorio (120 min)" },
        { num: 5, tipo: "Teórica", tema: "Unidad 4", contenido: "Anatomía del sistema fonoarticulatorio y Componentes del lenguaje (120 min)" },
        { num: 6, tipo: "Teórica", tema: "Unidad 5", contenido: "Componentes del Lenguaje y Percepción, comprensión y producción (120 min)" },
        { num: 7, tipo: "Teórico-Práctica (Evaluable 0,5-1 pt)", tema: "Taller Práctico 2", contenido: "Componentes del lenguaje y posibles dificultades asociadas observadas. Entrega en 72h (semana 30 nov-4 dic)." },
        { num: 8, tipo: "Teórica (Repaso)", tema: "Repaso Temario", contenido: "Resolución de dudas y repaso general de conceptos (120 min)" }
      ]
    },
    {
      id: "oral",
      nombre: "Evaluación e Intervención en los Trastornos del Lenguaje Oral",
      corto: "Trastornos Lenguaje Oral",
      profesor: "Soraya Rodríguez Hernández",
      color: "#10b981",
      bgLight: "rgba(16, 185, 129, 0.12)",
      icono: "🗣️",
      planificacionPdf: "Planificación_Soraya_Rodríguez_Hernández_Evaluación e Intervención en los Trastornos del Lenguaje Oral_plantilla mod. virtual ucjc26.pdf",
      examenFecha: "2027-02-05",
      descripcion: "Adquisición y desarrollo del lenguaje oral, prevención escolar, alteraciones primarias del habla (RSH, TSH/dislalias), secundarias (disartria, disglosia, disfonía), alteraciones de la fluidez (disfemia) y del desarrollo del lenguaje (RSL, TDL, mutismo, afasia infantil).",
      sesionesSincronas: [
        { num: 1, tipo: "Teórica", tema: "Presentación", contenido: "Presentación de la asignatura, actividad grupal e introducción a las intervenciones y trastornos del lenguaje oral (120 min)" },
        { num: 2, tipo: "Teórica", tema: "Unidad 1", contenido: "Introducción al lenguaje oral. Prevención y detección de dificultades en el ámbito escolar (120 min)" },
        { num: 3, tipo: "Teórico-Práctica (Evaluable 0,5 pt)", tema: "Taller Práctico 1 (TEA Sensorial)", contenido: "Alumnado TEA: una visión desde un modelo de integración sensorial (visual, auditivo, propioceptivo). Entrega en 72h (semana 2-6 nov)." },
        { num: 4, tipo: "Teórica", tema: "Unidad 2", contenido: "Clasificación, descripción y etiología de las alteraciones del habla y la voz (I): RSH y TSH (120 min)" },
        { num: 5, tipo: "Teórica", tema: "Unidad 3", contenido: "Clasificación, descripción y etiología de las alteraciones del habla y la voz (II): Disartria, Disglosia y Disfonía (120 min)" },
        { num: 6, tipo: "Teórica", tema: "Unidad 4", contenido: "Clasificación, descripción y etiología de las alteraciones de la fluidez: Disfemia (120 min)" },
        { num: 7, tipo: "Teórico-Práctica (Evaluable 0,5 pt)", tema: "Taller Práctico 2 (Disfemia)", contenido: "Análisis de testimonio real sobre disfemia: repercusiones emocionales, autoimagen y estrategias en el aula. Entrega en 72h (semana 30 nov-4 dic)." },
        { num: 8, tipo: "Teórica (Repaso)", tema: "Unidad 5 y Repaso", contenido: "Alteraciones del desarrollo del lenguaje y la comunicación (RSL, TDL, Mutismo, Afasia) y repaso general (120 min)" }
      ]
    },
    {
      id: "escrita",
      nombre: "Evaluación e Intervención en los Trastornos de la Lengua Escrita",
      corto: "Trastornos Lengua Escrita",
      profesor: "David Sánchez Toribio",
      color: "#f59e0b",
      bgLight: "rgba(245, 158, 11, 0.12)",
      icono: "✍️",
      planificacionPdf: "Planificación trastornos en la lengua escrita (1).pdf",
      examenFecha: "2027-02-05",
      descripcion: "Perspectiva multifocal del lenguaje escrito, neurobiología y modelos cognitivos de lectura (doble ruta, conexionista) y escritura (Hayes y Flower, Cuetos, Bereiter y Scardamalia), evaluación e intervención en dislexia, disgrafía, disortografía y discalculia.",
      sesionesSincronas: [
        { num: 1, tipo: "Teórica", tema: "Bienvenida e Intro Tema 1", contenido: "Explicación de actividades, planificación, examen e introducción al Tema 1 (120 min)" },
        { num: 2, tipo: "Teórica", tema: "Unidad 1", contenido: "Características y evolución del lenguaje escrito, conciencia fonológica, diferencia entre NEE y NEAE (120 min)" },
        { num: 3, tipo: "Teórico-Práctica (Evaluable 0,5-1 pt)", tema: "Taller Práctico 1", contenido: "Procesos de lectura y escritura (Temas 2 y 3): analizar el tipo de lectura de un niño/a e inferir normalidad evolutiva. Entrega 72h (semana 2-6 nov)." },
        { num: 4, tipo: "Teórica", tema: "Unidades 2 y 3", contenido: "Modelos cognitivos de lectura y escritura y bases neurocognitivas del lenguaje escrito (120 min)" },
        { num: 5, tipo: "Teórica", tema: "Unidad 3", contenido: "Tipos de dislexia, pruebas de diagnóstico y evaluación (PROLEC-R, DST-J, TALE) y programas de intervención (120 min)" },
        { num: 6, tipo: "Teórica", tema: "Unidad 4", contenido: "Disgrafía (evaluación, diagnóstico e intervención) y disortografía (120 min)" },
        { num: 7, tipo: "Teórico-Práctica (Evaluable 0,5-1 pt)", tema: "Taller Práctico 2", contenido: "Unidad 5 (Discalculia): describir y evaluar el tipo de lectura de palabras y la aritmética de un mismo paciente. Entrega 72h (semana 30 nov-4 dic)." },
        { num: 8, tipo: "Teórica (Repaso)", tema: "Repaso General", contenido: "Repaso del temario y simulacro de preguntas tipo examen (120 min)" }
      ]
    },
    {
      id: "saac",
      nombre: "Sistemas Aumentativos y Alternativos de la Comunicación y las TIC",
      corto: "SAAC y TIC",
      profesor: "Equipo Docente AL (Calendario estándar UCJC)",
      color: "#06b6d4",
      bgLight: "rgba(6, 182, 212, 0.12)",
      icono: "💬",
      planificacionPdf: null,
      examenFecha: "2027-02-05",
      descripcion: "Introducción y taxonomía de los SAAC (símbolos, productos de apoyo y acceso, Test ComFor), aplicación en discapacidad auditiva (LPC, Bimodal, LSE), TEA (PECS, Schaeffer, SPC), discapacidad física (Bliss, Minspeak, Rebus, ARASAAC) y adaptaciones curriculares.",
      sesionesSincronas: [
        { num: 1, tipo: "Teórica", tema: "Presentación y Unidad 1", contenido: "Introducción a los SAAC: comunicación aumentativa vs alternativa, taxonomía y Test ComFor (120 min)" },
        { num: 2, tipo: "Teórica", tema: "Unidad 2", contenido: "SAAC en el alumnado con discapacidad auditiva: enfoque audiológico vs sociocultural, prótesis y sistemas oralistas/gestuales (120 min)" },
        { num: 3, tipo: "Teórico-Práctica (Evaluable 0,5 pt)", tema: "Taller Práctico 1 (SAAC)", contenido: "Caso práctico de selección de SAAC y ayudas técnicas (Unidades 1 y 2). Entrega recomendada: semana 2-6 nov." },
        { num: 4, tipo: "Teórica", tema: "Unidad 3", contenido: "SAAC en el alumnado con TEA: sistema PECS (6 fases), Habla Signada de Benson Schaeffer y SPC (120 min)" },
        { num: 5, tipo: "Teórica", tema: "Unidad 4", contenido: "SAAC en el alumnado con discapacidad física: Bliss, SPC, Minspeak, Rebus, ARASAAC y acceso por barrido/directo (120 min)" },
        { num: 6, tipo: "Teórica", tema: "Unidad 5", contenido: "Diseño de adaptaciones curriculares (LOMLOE), Lenguaje Natural Asistido (LNA), TIC y generalización de un SAAC (120 min)" },
        { num: 7, tipo: "Teórico-Práctica (Evaluable 0,5 pt)", tema: "Taller Práctico 2 (SAAC)", contenido: "Diseño de tablero/adaptación curricular y matriz de toma de decisiones SAAC (Unidades 3, 4 y 5). Entrega recomendada: semana 30 nov-4 dic." },
        { num: 8, tipo: "Teórica (Repaso)", tema: "Repaso General", contenido: "Síntesis de los 5 temas y preparación del examen tipo test (120 min)" }
      ]
    }
  ],

  // ==========================================================================
  // CALENDARIO DE ENTREGAS Y TAREAS EVALUABLES (TODAS LAS ASIGNATURAS)
  // ==========================================================================
  entregas: [
    // --- TALLERES PRÁCTICOS 1 (Semana 2-6 Noviembre 2026) ---
    {
      id: "psico-taller-1",
      asignaturaId: "psicopatologia",
      tipo: "Taller Práctico 1",
      titulo: "Sesión Práctica 1: Caso Real (Aprendizaje Basado en Casos)",
      fechaRecomendada: "2026-11-06",
      ventanaInicio: "2026-11-02",
      fechaLimite: "2027-01-21",
      puntos: 0.5,
      porcentaje: 5,
      unidadesRelacionadas: ["Unidad 2"],
      descripcion: "Análisis de un caso clínico real sobre Trastornos de la Comunicación y el Habla (Unidad 2) + realización del cuestionario asociado en las 72h posteriores a la 3ª sesión síncrona.",
      objetivos: [
        "Describir la problemática relacionada con el caso de estudio.",
        "Presentar una o más teorías de acuerdo con la condición del caso planteado.",
        "Presentar soluciones o respuestas razonables y justificadas para la resolución de la problemática.",
        "Elaborar estrategias de intervención en el contexto educativo para el caso planteado."
      ],
      resultadosAprendizaje: "Identificar parámetros diferenciadores entre trastornos de la comunicación (TL, TSH, TFI, TCS) y del habla (disglosia, disartria, disfonía) y diseñar estrategias educativas.",
      subtareas: [
        "Asistir o visualizar la 3ª sesión síncrona de Psicopatología.",
        "Identificar los signos, síntomas y diagnóstico diferencial del caso (DSM-5 / CIE-11).",
        "Justificar el marco teórico y redactar las estrategias de intervención en el aula.",
        "Completar el cuestionario y subir la entrega antes de 72h (máx. 6 nov para optar al 100%)."
      ],
      guiaPasoAPaso: [
        "1. **Anamnesis y Sintomatología del Caso**: Extrae del enunciado la edad del alumno, los errores observados (¿fonéticos, fonológicos, fluidez, pragmáticos o de voz?) y el contexto escolar/familiar.",
        "2. **Hipótesis Diagnóstica y Diagnóstico Diferencial**: Clasifica el caso según el DSM-5 (TL, TSH, TFI/Tartamudez, TCS) o Trastornos del Habla (Disglosia, Disartria, Disfonía). Explica por qué descartas otros cuadros afines (ej. diferenciar TCS de TEA por ausencia de patrones restrictivos/repetitivos, o Disfluencia evolutiva vs Tartamudez infantil según la Tabla 3 de Rupérez et al., 2022).",
        "3. **Fundamentación Teórica**: Cita al menos 2 autores del tema 2 (ej. Rupérez et al., 2022; Artigas-Pallarés et al., 2022; Susanibar et al., 2016; Coll-Florit et al., 2014).",
        "4. **Propuesta de Intervención Educativa**: Divide las pautas en: (a) Intervención directa del maestro AL, (b) Orientaciones para el tutor en el aula ordinaria y (c) Pautas para la familia."
      ],
      plantillaTarea: `# TALLER PRÁCTICO 1: ESTUDIO DE CASO REAL (UNIDAD 2)
**Asignatura:** Psicopatología de la Audición y el Lenguaje
**Docente:** Rocío Daniela Concha Ortiz

## 1. Descripción de la Problemática del Caso
- **Edad y curso del alumno/a:** [Indicar edad y etapa]
- **Signos y síntomas identificados:**
  - *Nivel fonético-fonológico / articulación:* [...]
  - *Nivel léxico-semántico y morfosintáctico:* [...]
  - *Nivel pragmático y fluidez:* [...]
- **Hipótesis diagnóstica principal:** [Ej. Trastorno de los Sonidos del Habla (TSH) / Trastorno de la Comunicación Social (TCS) / Disfemia...]
- **Parámetros diferenciadores (Diagnóstico diferencial):** [Justificar qué criterios del DSM-5 cumple y qué otros trastornos se descartan].

## 2. Fundamentación Teórica
De acuerdo con **Rupérez et al. (2022)** y **Susanibar et al. (2016)**, esta alteración se explica desde una perspectiva neurobiológica/funcional caracterizada por... [Desarrollar 1-2 párrafos conectando con la Unidad 2].

## 3. Soluciones y Estrategias de Intervención en el Contexto Educativo
### A) Intervención específica desde Audición y Lenguaje (AL)
1. [Objetivo específico 1 + actividad práctica]
2. [Objetivo específico 2 + actividad práctica]

### B) Pautas metodológicas en el aula ordinaria (Tutor/a)
- Adaptación de tiempos y clima comunicativo sin presión.
- Uso de apoyos visuales y modelado natural (reformulación indirecta sin corrección aversiva).

### C) Coordinación con la familia
- Pautas de estimulación en el hogar y prevención de conductas de evitación o frustración.

## 4. Referencias Bibliográficas (APA 7ª ed.)
- American Psychiatric Association. (2013). *DSM-5: Manual diagnóstico y estadístico de los trastornos mentales* (5ª ed.). Editorial Médica Panamericana.
- Rupérez, A., Ramos, I., Machado, I., Fernández, D., Gortazar, M., y Aguilera, S. (2022). Trastornos del lenguaje, del habla y de la comunicación. *Protoc diagn ter pediatr*, 1(1), 19-30.
- Susanibar, F., Dioses, A., Marchesan, I., Guzmán, M., Leal, G., Guitar, B., y Junqueira, A. (2016). *Trastornos del habla: de los fundamentos a la evaluación*. Giunti EOS.`
    },
    {
      id: "anat-taller-1",
      asignaturaId: "anatomia",
      tipo: "Taller Práctico 1",
      titulo: "Sesión Práctica 1: Sistema Nervioso, Audición e Hipoacusia",
      fechaRecomendada: "2026-11-06",
      ventanaInicio: "2026-11-02",
      fechaLimite: "2027-01-21",
      puntos: 0.5,
      porcentaje: 5,
      unidadesRelacionadas: ["Unidad 1", "Unidad 2"],
      descripcion: "Actividad práctica y cuestionario sobre la morfología microscópica del sistema nervioso en relación con el lenguaje (II) y el sistema auditivo / dificultades en hipoacusia.",
      objetivos: [
        "Identificar las dificultades de comunicación que pueden experimentar las personas con hipoacusia en diferentes situaciones de la vida cotidiana y en el entorno educativo.",
        "Comprender los contenidos teóricos relacionados con la práctica (SNC, SNP, oído externo, medio e interno) y aplicarlos correctamente."
      ],
      resultadosAprendizaje: "Comprender la fisiología de la audición y las repercusiones comunicativas de la pérdida auditiva conductiva y neurosensorial.",
      subtareas: [
        "Repasar Unidades 1 y 2 (especialmente epígrafe 3.2 Sistema Auditivo y Tabla 1 de Gutiérrez y Baixeras, 2004).",
        "Realizar la actividad práctica de la 3ª sesión síncrona.",
        "Completar el cuestionario y entregar antes de 72h tras la sesión (semana 2-6 nov)."
      ],
      guiaPasoAPaso: [
        "1. **Fisiología de la transmisión sonora**: Recuerda la ruta: Pabellón auricular -> CAE -> Membrana timpánica -> Cadena osicular (martillo, yunque, estribo: amplifica 22 veces el estímulo) -> Ventana oval -> Perilinfa/Endolinfa en la cóclea -> Órgano de Corti (células ciliadas transforman energía mecánica en impulso eléctrico) -> Nervio vestibulococlear (VIII par) -> Lóbulo temporal (Área de Heschl / Wernicke).",
        "2. **Clasificación anatómica y funcional de la hipoacusia**: Diferencia entre **sordera conductiva/de transmisión** (oído externo o medio, pérdida leve-moderada, tratable médico-quirúrgicamente) y **sordera neurosensorial** (oído interno/cóclea o nervio auditivo, mayor afectación del lenguaje, candidata a audífono o implante coclear).",
        "3. **Implicaciones educativas según dB (Gutiérrez y Baixeras, 2004)**: Leve (21-40 dB: dificultad en ruido/distancia), Moderada (41-70 dB: requiere elevar voz y prótesis), Severa (71-90 dB: no desarrolla habla espontánea), Profunda (91-120 dB: el lenguaje pasa de ser una adquisición a ser un aprendizaje vía visual/lectura labial), Cofosis (>120 dB)."
      ],
      plantillaTarea: `# TALLER PRÁCTICO 1: SISTEMA AUDITIVO E HIPOACUSIA EN EL ENTORNO EDUCATIVO
**Asignatura:** Anatomía, Fisiología y Neurología del Lenguaje
**Docente:** Sara Prieto González

## 1. Bases Anatómicas y Fisiológicas Implicadas
- **Localización en el sistema auditivo:** [Oído externo / Oído medio (cadena osicular) / Oído interno (cóclea - Órgano de Corti) / Vía auditiva nerviosa (VIII par craneal)].
- **Mecanismo fisiológico afectado:** [Transmisión mecánica vs Transducción bioeléctrica en las células ciliadas].

## 2. Análisis de las Dificultades Comunicativas (Vida Cotidiana y Aula)
- **Grado y momento de aparición:** [Leve 21-40 dB / Moderada 41-70 dB / Severa 71-90 dB / Profunda 91-120 dB | Prelocutiva vs Postlocutiva].
- **Barreras en el aula ordinaria:** Ruido ambiental, reverberación, distancia al docente, pérdida de información cuando el profesor escribe de espaldas en la pizarra, fatiga atencional.

## 3. Propuesta de Adaptaciones y Recursos Educativos
- **Ubicación y entorno:** Situar al alumno en las primeras filas, buena iluminación para lectura labiofacial, control acústico del aula.
- **Ayudas técnicas:** Uso de audífonos / Implante Coclear en combinación con **Sistema de FM** o bucle magnético.
- **Estrategias docentes:** Hablar de frente sin exagerar la articulación, anticipar vocabulario y emplear apoyos visuales.`
    },
    {
      id: "oral-taller-1",
      asignaturaId: "oral",
      tipo: "Taller Práctico 1",
      titulo: "Sesión Práctica 1: Alumnado TEA desde el Modelo de Integración Sensorial",
      fechaRecomendada: "2026-11-06",
      ventanaInicio: "2026-11-02",
      fechaLimite: "2027-01-21",
      puntos: 0.5,
      porcentaje: 5,
      unidadesRelacionadas: ["Unidad 1", "Unidad 2"],
      descripcion: "Análisis práctico de casos de alumnado con TEA desde un modelo de integración sensorial (visual, auditivo y propioceptivo) + cuestionario.",
      objetivos: [
        "Aumentar conocimientos sobre estrategias de intervención desde el modelo sensorial con alumnos TEA.",
        "Analizar casos reales con sintomatología propia del TEA y otros trastornos asociados.",
        "Proponer adaptaciones sensoriales adecuadas a distintos sistemas (visual, auditivo y propioceptivo)."
      ],
      resultadosAprendizaje: "Identifica y comprende los principios del modelo de integración sensorial y propone adaptaciones visuales, auditivas y propioceptivas para mejorar la conducta, atención y comunicación en TEA.",
      subtareas: [
        "Visualizar la 3ª sesión síncrona de Lenguaje Oral.",
        "Identificar el perfil sensorial del alumno TEA del caso (hiporreactividad vs hiperreactividad).",
        "Diseñar adaptaciones concretas para los sistemas visual, auditivo y propioceptivo/vestibular.",
        "Entregar la actividad y el cuestionario en las 72h posteriores (semana 2-6 nov)."
      ],
      guiaPasoAPaso: [
        "1. **Identificación del Perfil Sensorial en TEA**: Recuerda que el DSM-5 incluye la hiper- o hiporreactividad a los estímulos sensoriales dentro de los criterios diagnósticos del TEA. Analiza cómo los estímulos del aula (ruido del timbre, luces fluorescentes, contacto físico, cambios de rutina) desregulan al alumno e interfieren en su atención y comunicación.",
        "2. **Adaptaciones del Sistema Visual**: Reducción de sobrecarga visual en paredes, iluminación natural o cálida, estructuración espacial (metodología TEACCH), agendas visuales anticipatorias y apoyos pictográficos (ARASAAC).",
        "3. **Adaptaciones del Sistema Auditivo**: Uso de cascos/auriculares reductores de ruido en momentos de sobrecarga (recreo, comedor, timbres), anticipación de ruidos fuertes, hablar con tono calmado, frases cortas y claras.",
        "4. **Adaptaciones del Sistema Propioceptivo y Vestibular**: Rincón de la calma, descansos activos o pausas sensoriales programadas, cojines sensoriales/bandas elásticas en las patas de la silla para autorregulación motora, actividades de presión profunda o empuje antes de tareas de alta demanda atencional."
      ],
      plantillaTarea: `# TALLER PRÁCTICO 1: ALUMNADO TEA Y MODELO DE INTEGRACIÓN SENSORIAL
**Asignatura:** Evaluación e Intervención en los Trastornos del Lenguaje Oral
**Docente:** Soraya Rodríguez Hernández

## 1. Análisis del Caso y Perfil Sensorial
- **Sintomatología comunicativa y conductual observada:** [...]
- **Necesidades sensoriales detectadas (Hiperreactividad / Hiporreactividad / Búsqueda sensorial):** [...]
- **Impacto en la atención y el lenguaje oral:** [...]

## 2. Propuesta de Adaptaciones Sensoriales por Sistemas
| Sistema Sensorial | Dificultad / Barrera Detectada | Adaptaciones y Estrategias en el Aula |
| :--- | :--- | :--- |
| **Sistema Visual** | Sobrecarga de estímulos, falta de anticipación | Estructuración ambiental (TEACCH), agenda visual diaria, reducción de distractores visuales, luz natural. |
| **Sistema Auditivo** | Hipersensibilidad a ruidos imprevistos, bloqueo comunicativo | Auriculares de atenuación acústica en transiciones, anticipar sonidos intensos, consignas verbales breves y pausadas. |
| **Sistema Propioceptivo y Vestibular** | Inquietud motora, dificultad para mantener la postura y el foco atencional | Pausas activas con trabajo pesado (llevar material), cojín de equilibrio o banda elástica en silla, rincón de regulación sensorial. |

## 3. Estrategias de Comunicación y Lenguaje Asociadas
- Uso de apoyos visuales (SAAC / pictogramas) combinados con lenguaje oral claro.
- Respeto de tiempos de procesamiento (espera estructurada) tras regular el estado sensorial.`
    },
    {
      id: "escr-taller-1",
      asignaturaId: "escrita",
      tipo: "Taller Práctico 1",
      titulo: "Sesión Práctica 1: Evaluación de Procesos de Lectura y Normalidad Evolutiva",
      fechaRecomendada: "2026-11-06",
      ventanaInicio: "2026-11-02",
      fechaLimite: "2027-01-21",
      puntos: 0.5,
      porcentaje: 5,
      unidadesRelacionadas: ["Unidad 2", "Unidad 3"],
      descripcion: "Describir y analizar el tipo de lectura de un niño/a e inferir si los procesos lectores son normales para su edad, diferenciando entre NEE y NEAE.",
      objetivos: [
        "Describir y analizar el tipo de lectura de un niño/a.",
        "Inferir si los procesos de lectura son normales para una determinada edad.",
        "Saber evaluar casos prácticos reales y diferenciar entre NEE y NEAE desde la perspectiva de AL."
      ],
      resultadosAprendizaje: "El alumno empezará a tener pensamiento clínico, podrá diferenciar entre NEE y NEAE, y analizará qué ruta lectora (léxica vs subléxica/fonológica) presenta dificultades.",
      subtareas: [
        "Repasar el Modelo de Doble Ruta de Coltheart (Unidad 2) y la tipología de dislexias de Cuetos (Unidad 3).",
        "Analizar los errores del caso (¿lexicalizaciones en pseudopalabras o regularizaciones en palabras irregulares?).",
        "Justificar el encuadre LOMLOE (NEAE por trastorno de aprendizaje vs NEE).",
        "Entregar la práctica + cuestionario en 72h (semana 2-6 nov)."
      ],
      guiaPasoAPaso: [
        "1. **Identificación de la Vía Lectora afectada (Modelo Dual de Coltheart, 2001)**: Si el niño lee bien palabras familiares pero falla en palabras desconocidas y **pseudopalabras** (cometiendo *lexicalizaciones*, ej. leer 'mesa' donde pone 'mosa'), falla la **vía subléxica o fonológica** (circuito dorsal temporoparietal). Si lee bien pseudopalabras pero falla en palabras irregulares o es muy lento silabeando sin reconocer palabras globales, falla la **vía léxica o visual** (circuito ventral occipitotemporal).",
        "2. **Valoración Evolutiva según la Edad**: Recuerda que según el DSM-5 las dificultades deben persistir al menos 6 meses pese a intervención. En 1º-2º de Primaria aún se están automatizando las Reglas de Conversión Grafema-Fonema (RCGF).",
        "3. **Encuadre LOMLOE (NEAE vs NEE)**: Los trastornos específicos del aprendizaje (dislexia, disgrafía, disortografía, discalculia) se enmarcan dentro de las **NEAE (Art. 71 LOMLOE)**, pero **NO son NEE (Art. 73)**, ya que las NEE se reservan a discapacidad o trastornos graves de conducta, de la comunicación y del lenguaje."
      ],
      plantillaTarea: `# TALLER PRÁCTICO 1: ANÁLISIS CLÍNICO DE PROCESOS LECTORES
**Asignatura:** Evaluación e Intervención en los Trastornos de la Lengua Escrita
**Docente:** David Sánchez Toribio

## 1. Análisis del Perfil Lector del Caso
- **Edad y curso:** [...]
- **Procesos de bajo nivel (Decodificación):**
  - *Vía subléxica / fonológica (RCGF):* [Analizar lectura de pseudopalabras y palabras infrecuentes]
  - *Vía léxica / directa (ortográfica):* [Analizar velocidad, fluidez y lectura de palabras frecuentes/irregulares]
- **Procesos superiores (Comprensión):**
  - *Procesamiento sintáctico y semántico (microestructura y macroestructura de Kintsch y Van Dijk):* [...]

## 2. Juicio Clínico y Normalidad Evolutiva
- **¿Son errores esperables para su edad o indicadores de Dislexia?** [Justificar según persistencia >6 meses y discrepancia con su edad/instrucción].
- **Encuadre normativo LOMLOE:** Se trata de un alumno con **NEAE** (Art. 71 LOMLOE: Trastornos de aprendizaje), diferenciándose de las **NEE** (Art. 73) al no estar asociado a discapacidad intelectual, sensorial ni motora.

## 3. Propuesta de Evaluación e Intervención desde AL
- **Pruebas recomendadas:** PROLEC-R (Cuetos et al.), DST-J o TALE.
- **Líneas de intervención (Cuetos, 2018; García y Pedrosa, 2020):** Entrenamiento en conciencia fonológica, conversión grafema-fonema con apoyo multisensorial y mejora de la precisión y fluidez lectora.`
    },
    {
      id: "saac-taller-1",
      asignaturaId: "saac",
      tipo: "Taller Práctico 1",
      titulo: "Sesión Práctica 1: Evaluación, Selección de SAAC y Discapacidad Auditiva",
      fechaRecomendada: "2026-11-06",
      ventanaInicio: "2026-11-02",
      fechaLimite: "2027-01-21",
      puntos: 0.5,
      porcentaje: 5,
      unidadesRelacionadas: ["Unidad 1", "Unidad 2"],
      descripcion: "Actividad práctica sobre evaluación ecológica para la elección de un SAAC (Test ComFor, taxonomía) y aplicación en discapacidad auditiva (Fecha estándar UCJC - editable).",
      objetivos: [
        "Aplicar los criterios de evaluación integral, ecológica y multidisciplinar (Tamarit, 1989; Test ComFor) en la selección de un SAAC.",
        "Diferenciar entre sistemas aumentativos oralistas (LPC, lectura labiofacial) y gestuales (Comunicación Bimodal, LSE) en alumnado con discapacidad auditiva."
      ],
      resultadosAprendizaje: "Seleccionar de forma justificada el símbolo (software), producto de apoyo (hardware) y forma de acceso para un caso práctico.",
      subtareas: [
        "Revisar la planificación o el aula virtual de SAAC para confirmar la fecha exacta de la 3ª sesión síncrona.",
        "Analizar los 3 componentes del SAAC del caso: Símbolos, Producto de apoyo y Forma de acceso.",
        "Entregar la actividad y el cuestionario en las 72h posteriores a la sesión."
      ],
      guiaPasoAPaso: [
        "1. **Distinción Aumentativo vs Alternativo (CEAPAT, 2020)**: Aumentativo apoya y promueve un habla insuficiente; Alternativo sustituye al habla oral cuando no es posible hablar con la voz.",
        "2. **Taxonomía del SAAC (Piña y Belda-Torrijos, 2022)**: Define el *Software* (Símbolos gestuales: gestos naturales, LSE, Bimodal, LPC; o Símbolos gráficos: objetos reales, fotografías, pictogramas SPC/ARASAAC, Bliss, ortografía) + el *Hardware* (Baja tecnología: tablero/libro; Alta tecnología: comunicador dinámico/tablet) + *Acceso* (Selección directa, barrido automático/dirigido, eye-tracking).",
        "3. **Aplicación del Test ComFor (Noens et al., 2006)**: Explica cómo sus 2 niveles (presentación y representación) y 5 series (36 ítems) determinan el nivel de abstracción simbólica (objeto real -> fotografía -> pictograma -> palabra escrita)."
      ],
      plantillaTarea: `# TALLER PRÁCTICO 1: SELECCIÓN DE SAAC Y APLICACIÓN EN DISCAPACIDAD AUDITIVA
**Asignatura:** Sistemas Aumentativos y Alternativos de la Comunicación y las TIC

## 1. Evaluación Inicial del Caso (Enfoque Ecológico de Tamarit, 1989)
- **Capacidades sensoriales, motoras y cognitivas:** [...]
- **Nivel de representación simbólica (Test ComFor - Noens et al., 2006):** [...]

## 2. Propuesta de SAAC Seleccionado
- **Finalidad:** [Aumentativo / Alternativo / Transitorio]
- **Símbolos ("Software"):** [LPC / Comunicación Bimodal / LSE / Pictogramas ARASAAC]
- **Producto de apoyo y ayuda técnica ("Hardware"):** [Implante coclear/audífono + Sistema de FM / Tablero o Comunicador]
- **Estrategia de implementación (González et al., 2022):** Secuencia *Instruir -> Diversificar -> Generalizar -> Naturalizar* en entorno de 24 horas.`
    },

    // --- ACTIVIDAD 1 (13 Noviembre 2026 y 26 Noviembre 2026) ---
    {
      id: "anat-act-1",
      asignaturaId: "anatomia",
      tipo: "Actividad 1",
      titulo: "Actividad 1: Anatomía de los Pares Craneales y su relación con el Lenguaje",
      fechaRecomendada: "2026-11-13",
      ventanaInicio: "2026-10-25",
      fechaLimite: "2027-01-21",
      puntos: 1.0,
      porcentaje: 10,
      unidadesRelacionadas: ["Unidad 1", "Unidad 2", "Unidad 3"],
      descripcion: "Realizar una búsqueda y síntesis de información sobre la anatomía de los 12 pares craneales y su relación con las funciones del lenguaje, el habla, la voz, la audición y la deglución.",
      objetivos: [
        "Realizar una búsqueda y síntesis de información sobre los pares craneales y el lenguaje.",
        "Comprender el aprendizaje de los pares craneales, su origen, naturaleza (sensitiva, motora o mixta) y su relación en las funciones del lenguaje."
      ],
      resultadosAprendizaje: "Aprendizaje de los pares craneales y su relación en las funciones del lenguaje (audición, lectura, fonación, resonancia, articulación y deglución).",
      subtareas: [
        "Clasificar los 12 pares craneales según su modalidad (sensitivos/sensoriales, motores y mixtos) y origen en el tronco encefálico.",
        "Detallar especialmente los pares implicados en el habla, voz, audición y deglución (V Trigémino, VII Facial, VIII Vestibulococlear, IX Glosofaríngeo, X Vago, XI Accesorio y XII Hipogloso) y en la lectura (II Óptico, III, IV, VI).",
        "Incluir qué patologías del habla/lenguaje aparecen si se lesiona cada par (ej. disartria flácida, parálisis facial/disglosia labial, parálisis recurrencial/disfonía, hipoacusia neurosensorial, disfagia).",
        "Revisar formato y referencias APA 7ª ed. y entregar antes del 13 de noviembre de 2026 (100% nota)."
      ],
      guiaPasoAPaso: [
        "1. **Introducción**: Explica qué son los pares craneales (12 pares de nervios del Sistema Nervioso Periférico que emergen directamente del encéfalo/tronco del encéfalo: mesencéfalo, protuberancia y bulbo raquídeo) y por qué son esenciales para el especialista en AL (Diéguez-Vide y Peña-Casanova, 2012; Smith-Ágreda, 2004).",
        "2. **Tabla Maestra de los 12 Pares Craneales**: Presenta los 12 pares indicando: Número romano, Nombre, Tipo (Sensitivo, Motor o Mixto), Estructura que inerva y Función específica en el lenguaje/habla/audición/lectura/deglución.",
        "3. **Profundización en los Pares Clave del Sistema Fonoarticulatorio y Auditivo**:\n   - **V (Trigémino - Mixto)**: Motor para músculos de la masticación (masetero, temporal, pterigoideos: movimiento mandibular en articulación) y sensitivo de cara, boca y 2/3 anteriores de la lengua (propiocepción articulatoria).\n   - **VII (Facial - Mixto)**: Motor para la musculatura de la mímica facial y sellado labial (orbicular de los labios -> fonemas bilabiales /p/, /b/, /m/ y labiodental /f/) + músculo del estribo (protección auditiva). Su lesión causa parálisis facial / disglosia labial.\n   - **VIII (Vestibulococlear / Auditivo - Sensorial)**: Rama coclear transmite el impulso nervioso desde el Órgano de Corti hasta los núcleos cocleares y corteza temporal (audición y retroalimentación auditiva del habla). Rama vestibular controla el equilibrio.\n   - **IX (Glosofaríngeo - Mixto)**: Sensibilidad del 1/3 posterior de la lengua y faringe, elevación faríngea (músculo estilofaríngeo) y reflejo deglutorio/nauseoso.\n   - **X (Vago o Neumogástrico - Mixto)**: ¡El gran nervio de la fonación y resonancia! A través del **nervio laríngeo superior** (tensión de cuerdas vocales, músculo cricotiroideo) y **nervio laríngeo recurrente** (movimiento de aducción/abducción de las cuerdas vocales) + elevación del velo del paladar (cierre velofaríngeo: sonidos orales vs nasales). Su lesión provoca disfonía orgánica (parálisis recurrencial) y rinolalia abierta.\n   - **XI (Accesorio o Espinal - Motor)**: Inerva esternocleidomastoideo y trapecio (control postural cefálico y músculos accesorios de la respiración/fonación).\n   - **XII (Hipogloso - Motor)**: Motor de la musculatura intrínseca y extrínseca de la lengua. Clave para articular fonemas linguales (/t/, /d/, /l/, /n/, /r/, /s/, /k/, /g/). Su lesión produce parálisis lingual / disartria / disglosia lingual.\n   - **II, III, IV y VI (Óptico, Oculomotor, Troclear, Abducens)**: Esenciales para la recepción visual del lenguaje escrito (movimientos sacádicos y fijaciones durante la lectura) y lectura labiofacial/lengua de signos.",
        "4. **Conclusión Clínica para el Maestro de AL**: Destaca cómo la lesión de estos pares craneales explica las **disartrias flácidas** (Unidad 3 de Lenguaje Oral: afectación de V, VII, IX, X y XII), las **disglosias por parálisis periféricas** y las **disfonías orgánicas**."
      ],
      plantillaTarea: `# ACTIVIDAD 1: ANATOMÍA DE LOS PARES CRANEALES Y SU RELACIÓN CON EL LENGUAJE
**Asignatura:** Anatomía, Fisiología y Neurología del Lenguaje
**Docente:** Sara Prieto González

## 1. Introducción: El Sistema Nervioso Periférico Craneal y el Lenguaje
Los doce pares craneales constituyen el conjunto de nervios del Sistema Nervioso Periférico (SNP) que emergen directamente de la base del encéfalo y del tronco del encéfalo (mesencéfalo, protuberancia anular y bulbo raquídeo) a través de los orificios de la base del cráneo (Fajardo et al., 2001; Smith-Ágreda, 2004). Su integridad anatómica y funcional resulta indispensable para la recepción del lenguaje (vía auditiva y visual) y para su expresión motora (respiración, fonación, resonancia, articulación y deglución) (Diéguez-Vide y Peña-Casanova, 2012).

## 2. Síntesis Anatómica y Funcional de los 12 Pares Craneales

| Par | Nombre | Naturaleza | Origen Aparente | Estructuras Inervadas | Función en Lenguaje, Habla, Voz, Audición y Deglución |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **I** | **Olfatorio** | Sensorial | Bulbo olfatorio | Mucosa olfatoria nasal | Percepción olfativa; vinculada a la memoria emocional y permeabilidad de fosas nasales. |
| **II** | **Óptico** | Sensorial | Quiasma óptico | Retina (conos y bastones) | Recepción visual para la **lectoescritura**, lectura labiofacial, SAAC y Lengua de Signos. |
| **III** | **Oculomotor (Motor Ocular Común)** | Motor | Mesencéfalo | Rectos sup., inf., medial, oblicuo inf., elevador del párpado | **Movimientos sacádicos, regresiones y fijaciones oculares** (225 ms) en la lectura y seguimiento visual (atención conjunta). |
| **IV** | **Troclear (Patético)** | Motor | Mesencéfalo | Músculo oblicuo superior del ojo | Desplazamiento ocular hacia abajo y adentro (lectura en plano inferior). |
| **V** | **Trigémino** | Mixto | Protuberancia | Músculos masticadores (masetero, temporal, pterigoideos) y sensibilidad facial/oral | **Articulación mandibular** (apertura/cierre bucal) y **sensibilidad propioceptiva** de labios, dientes, paladar y 2/3 anteriores de la lengua. |
| **VI** | **Abducens (Motor Ocular Externo)** | Motor | Surco bulboprotuberancial | Músculo recto lateral del ojo | Abducción ocular (barrido visual horizontal de izquierda a derecha en la lectura). |
| **VII** | **Facial** | Mixto | Surco bulboprotuberancial | Músculos de la mímica (orbicular de los labios, buccinador), músculo del estribo, glándulas salivales | **Articulación bilabial (/p/, /b/, /m/) y labiodental (/f/)**, protrusión vocálica (/o/, /u/), estiramiento (/e/, /i/), **expresividad pragmática no verbal** y reflejo estapedial auditivo. |
| **VIII** | **Vestibulococlear (Estatoacústico)** | Sensorial | Surco bulboprotuberancial | Cóclea (Órgano de Corti) y vestíbulo (canales semicirculares) | **Audición y discriminación fonológica** (rama coclear) y **control postural/equilibrio** (rama vestibular). |
| **IX** | **Glosofaríngeo** | Mixto | Bulbo raquídeo | Faringe (estilofaríngeo), 1/3 posterior de la lengua, parótida | Elevación de la faringe y laringe, **resonancia faríngea** y fase faríngea de la **deglución**. |
| **X** | **Vago (Neumogástrico)** | Mixto | Bulbo raquídeo | Laringe (cuerdas vocales), velo del paladar, faringe, pulmones | **Fonación** (nervios laríngeo superior y recurrente: vibración y tensión cordal), **resonancia oral/nasal** (elevación del paladar blando) y control respiratorio. |
| **XI** | **Accesorio (Espinal)** | Motor | Bulbo y médula cervical | Esternocleidomastoideo y trapecio | Control postural cefálico y cervical; soporte muscular accesorio en la respiración fonatoria. |
| **XII** | **Hipogloso** | Motor | Bulbo raquídeo | Musculatura intrínseca y extrínseca de la lengua | **Articulación de la mayoría de fonemas** (alveolares, dentales, interdentales, palatales y velares) y transporte del bolo en la deglución. |

## 3. Implicaciones Clínicas en las Alteraciones del Lenguaje y el Habla
1. **Afectación del V, VII, IX, X y XII par craneal en la Disartria Flácida:** Tal y como expone Hernández (2007), la lesión de las motoneuronas inferiores de estos nervios produce hipotonía, debilidad muscular, voz aérea, hipernasalidad e imprecisión consonántica.
2. **Lesión del VII par (Parálisis Facial) y XII par (Parálisis del Hipogloso):** Originan **disglosias labiales y linguales** respectivamente (Coll-Florit et al., 2014), donde la /p/ suena como /f/, la /m/ como /n/ y desaparece la vibrante /r/.
3. **Lesión del X par (Nervio Laríngeo Recurrente):** Provoca parálisis cordal unilateral o bilateral, dando lugar a **disfonías orgánicas** con defecto de cierre glótico y voz aérea (Cobeta et al., 2013; Rojas, 2018).
4. **Lesión del VIII par:** Causa **hipoacusia neurosensorial retrococlear**, afectando la adquisición espontánea del lenguaje oral.

## 4. Conclusión
El conocimiento detallado de los pares craneales permite al especialista en Audición y Lenguaje comprender la base neuroanatómica de cada síntoma fonético, fonatorio, resonancial o deglutorio y diseñar intervenciones rehabilitadoras fundamentadas.

## 5. Referencias Bibliográficas (APA 7ª ed.)
- Céruse, P., Ltaief-Boudrigua, A., Buiret, G., Cosmidis, A., y Tringali, S. (2012). Anatomía descriptiva, endoscópica y radiológica de la laringe. *EMC-Otorrinolaringología*, 41(3), 1-26.
- Diéguez-Vide, F., y Peña-Casanova, J. (2012). *Cerebro y lenguaje. Sintomatología neurolingüística*. Editorial Médica Panamericana.
- Mejías-Padilla, V. (2021). Implicaciones y Efectos Neurológicos en el Desarrollo del Lenguaje. *Revista Docentes 2.0*, 10(1), 25-31.
- Smith-Ágreda, J. M. (2004). *Anatomía de los órganos del lenguaje, visión y audición*. Editorial Médica Panamericana.`
    },
    {
      id: "psico-act-1",
      asignaturaId: "psicopatologia",
      tipo: "Actividad 1",
      titulo: "Actividad 1: Perfiles NEAE y Trastornos del Lenguaje Oral y del Aprendizaje (Unidad 3)",
      fechaRecomendada: "2026-11-13",
      ventanaInicio: "2026-10-25",
      fechaLimite: "2027-01-21",
      puntos: 1.0,
      porcentaje: 10,
      unidadesRelacionadas: ["Unidad 3"],
      descripcion: "Actividad individual vinculada a la Unidad 3: reconocer tipos y perfiles de alumnos con NEAE (trastornos del lenguaje oral y del aprendizaje), emplear terminología específica e incorporar exposición oral/TIC.",
      objetivos: [
        "Reconocer tipos y perfiles de alumnos con necesidades educativas específicas de apoyo educativo (Unidad 3).",
        "Conocer y utilizar un lenguaje específico relacionado con la educación, el sistema educativo, la atención a la diversidad y la evaluación.",
        "Expresarse oralmente de manera correcta y adecuada a la situación propuesta e incorporar nuevas tecnologías en el proceso de enseñanza-aprendizaje."
      ],
      resultadosAprendizaje: "Identificar y diferenciar ITL, TDL (Consenso Delphi 2026), TL, TANV, Afasias, Dislexia, Disortografía, Discalculia, Disgrafía e Hipergrafía aplicando terminología técnica rigurosa.",
      subtareas: [
        "Revisar en el Campus Virtual el enunciado específico de la Actividad 1 de Psicopatología (Unidad 3).",
        "Diferenciar con precisión TDL vs TL vs ITL según el Consenso Delphi 2026 (Andreu et al., 2026) y los trastornos del aprendizaje (Dislexia, Disortografía, Discalculia, Disgrafía).",
        "Preparar el soporte digital / TIC o grabación oral solicitada cuidando la precisión terminológica.",
        "Entregar antes del 13 de noviembre de 2026 a las 23:59h (100% nota)."
      ],
      guiaPasoAPaso: [
        "1. **Dominio Terminológico de la Unidad 3 (Clave para el 10)**:\n   - **ITL (Inicio Tardío del Lenguaje)**: <50 palabras inteligibles o ausencia de combinaciones de 2 palabras a los 24 meses. ¡No equivale automáticamente a TDL! (56% mejora espontáneamente a los 3 años).\n   - **TDL (Trastorno del Desarrollo del Lenguaje - Consenso Delphi 2026, Andreu et al.)**: Dificultades significativas y persistentes del lenguaje oral (a partir de los **4 años**) **SIN condición biomédica identificable** que las explique.\n   - **TL (Trastorno del Lenguaje)**: Término paraguas más amplio para alteraciones persistentes del lenguaje; **SÍ puede incluir casos asociados a una condición biomédica** (ej. síndrome de Down).\n   - **TANV (Trastorno de Aprendizaje No Verbal)**: Déficit visoespacial, visoconstructivo, motor fino/táctil (más marcado en hemicuerpo izquierdo) y socioemocional/pragmático, con habilidades verbales automatizadas preservadas (discrepancia CI Verbal > CI Manipulativo en WISC).",
        "2. **Diferenciación en Lectoescritura y Cálculo**:\n   - **Dislexia**: Déficit fonológico neurobiológico que afecta tanto a lectura (decodificación/fluidez) como a escritura. En adquiridas centrales (Cuetos, 2018): *Fonológica* (falla en pseudopalabras, comete lexicalizaciones), *Superficial* (falla en palabras irregulares, comete regularizaciones), *Profunda* (incapaz de leer pseudopalabras + **errores semánticos**).\n   - **Disortografía**: Exclusivamente errores ortográficos en la escritura (correspondencia fonema-grafema y reglas) **sin afectar necesariamente a la lectura** (Rivas y Fernández, 2011). Un disléxico tiene disortografía, pero un disortográfico no tiene por qué ser disléxico.\n   - **Disgrafía**: Trastorno perceptivo-motriz que afecta al **trazado, forma y calidad gráfica** de la escritura.\n   - **Discalculia**: Dificultad en el procesamiento numérico, conteo, transcodificación (ej. escribir 251 por 'doscientos quince') y cálculo aritmético.",
        "3. **Estructura de la Presentación / Recurso TIC**: Utiliza una estructura visual limpia, empleando vocabulario técnico de la LOMLOE (NEAE Art. 71), DSM-5 y Consenso Delphi 2026."
      ],
      plantillaTarea: `# ACTIVIDAD 1: PERFILES NEAE EN LOS TRASTORNOS DEL LENGUAJE ORAL Y DEL APRENDIZAJE (UNIDAD 3)
**Asignatura:** Psicopatología de la Audición y el Lenguaje
**Docente:** Rocío Daniela Concha Ortiz

## 1. Introducción y Marco Normativo (LOMLOE)
En el marco de la Ley Orgánica 3/2020 (LOMLOE, art. 71), el alumnado que presenta trastornos del desarrollo del lenguaje y la comunicación o trastornos de aprendizaje se engloba dentro de las **Necesidades Específicas de Apoyo Educativo (NEAE)**, requiriendo una respuesta educativa inclusiva, temprana e individualizada.

## 2. Cuadro Comparativo y Parámetros Diferenciadores (Unidad 3)

| Categoría / Trastorno | Definición y Criterios Clave | Parámetros Diferenciadores |
| :--- | :--- | :--- |
| **Inicio Tardío del Lenguaje (ITL)** | Vocabulario <50 palabras o sin combinaciones de 2 palabras a los 24 meses (Martínez, 2017). | Es un indicador evolutivo temprano, **no un diagnóstico de TDL**. El 56% remite a los 3 años; requiere seguimiento e intervención temprana (24-30 meses). |
| **Trastorno del Desarrollo del Lenguaje (TDL)** | Alteración significativa y persistente del lenguaje oral identificable preferentemente **a partir de los 4 años** (Andreu et al., 2026). | **Ausencia de condición biomédica identificable** que explique las dificultades.Sustituye al antiguo término TEL (Bishop et al., 2017). |
| **Trastorno del Lenguaje (TL)** | Alteración persistente y significativa que afecta al funcionamiento comunicativo (Andreu et al., 2026). | Término más amplio que engloba al TDL, pero **sí puede asociarse a una condición biomédica** (ej. TL asociado a síndrome de Down). Se rechazan subtipos rígidos. |
| **Trastorno de Aprendizaje No Verbal (TANV)** | Categoría neuropsicológica con déficits visoespaciales, visoconstructivos y psicomotores (Del Olmo, 2022). | Discrepancia en escalas Wechsler: **buen lenguaje verbal automatizado** (con verborrea mecánica y déficit pragmático) frente a déficit no verbal y aritmético. |
| **Afasias (Congénita, Infantil Adquirida, Landau-Kleffner)** | Pérdida o no adquisición del lenguaje por **lesión cerebral en el SNC**. | **Fluentes** (lesión retrorrolándica, logorrea, parafasias) vs **No fluentes** (lesión prerrolándica, habla telegráfica/laboriosa). **Landau-Kleffner** cursa con epilepsia y anomalías EEG entre los 3 y 7 años. |
| **Dislexia vs Disortografía vs Disgrafía** | Trastornos de la lectura y escritura. | **Dislexia:** déficit fonológico que afecta lectura y escritura. **Disortografía:** afecta solo a la ortografía escrita (no a la lectura). **Disgrafía:** afecta al trazado perceptivo-motriz. |
| **Discalculia** | Dificultad en el procesamiento numérico, sentido numérico y cálculo aritmético (APA, 2013). | Errores de comparación de magnitudes, conteo con dedos, valor posicional y **transcodificación numérica** (Kaufmann et al., 2013). |

## 3. Guion para la Exposición Oral y Uso de TIC
1. **Presentación del caso/perfil NEAE seleccionado** (1 min).
2. **Justificación diagnóstica y parámetros diferenciadores** (2 min).
3. **Propuesta de intervención educativa apoyada en TIC** (2 min).

## 4. Referencias Bibliográficas (APA 7ª ed.)
- Andreu Barrachina, L., et al. (2026). Estudio de consenso Delphi sobre el trastorno del lenguaje oral en los países hispanohablantes. *Revista de Investigación en Logopedia*, 16(2), e106526.
- Cuetos, F. (2018). *Neurociencia del lenguaje: bases neurológicas e implicaciones clínicas*. Editorial Médica Panamericana.
- Rivas, R. M., y Fernández, M. P. (2011). *Dislexia, disortografía y disgrafía*. Pirámide.`
    },
    {
      id: "oral-act-1",
      asignaturaId: "oral",
      tipo: "Actividad 1",
      titulo: "Actividad 1: Detección Escolar, Clasificación de Alteraciones del Habla/Voz y Propuesta Preventiva",
      fechaRecomendada: "2026-11-13",
      ventanaInicio: "2026-10-25",
      fechaLimite: "2027-01-21",
      puntos: 1.0,
      porcentaje: 10,
      unidadesRelacionadas: ["Unidad 1", "Unidad 2", "Unidad 3"],
      descripcion: "Reconocer las etapas de adquisición del lenguaje oral, detectar dificultades en el contexto escolar, clasificar el tipo de alteración del habla o voz y diseñar una propuesta de intervención preventiva e inclusiva.",
      objetivos: [
        "Reconocer las etapas y mecanismos de adquisición y desarrollo del lenguaje oral.",
        "Detectar posibles dificultades del lenguaje en el contexto escolar.",
        "Clasificar el tipo de alteración del habla o voz presentada.",
        "Diseñar una propuesta de intervención que favorezca la prevención y la inclusión en el aula."
      ],
      resultadosAprendizaje: "Identifica las etapas del lenguaje oral, clasifica el trastorno del habla/voz observado y aplica criterios de planificación didáctica en una actividad para estimular el lenguaje oral en el aula.",
      subtareas: [
        "Revisar el caso práctico de la Actividad 1 en el aula virtual de Lenguaje Oral.",
        "Situar al alumno en su etapa evolutiva del lenguaje (Prelingüística 0-12m vs Lingüística: holofrástica 12-18m, telegráfica 18-24m, o 3-5 años).",
        "Clasificar la alteración según Susanibar et al. (2016): Primaria (RSH o TSH fonético/fonológico/mixto) o Secundaria (Disartria, Disglosia, Disfonía).",
        "Diseñar una propuesta de intervención preventiva e inclusiva (DUA, LOMLOE Art. 20, 73, 74, 75) con objetivos, actividades y evaluación, y entregar antes del 13 de noviembre."
      ],
      guiaPasoAPaso: [
        "1. **Análisis Evolutivo (Unidad 1)**: Contrasta las conductas del alumno con los hitos normativos: Etapa prelingüística (0-12 meses: contacto visual 2m, sonrisa 3m, atención conjunta 6-7m, balbuceo reduplicativo y no reduplicativo) y Etapa lingüística (Subetapa holofrástica 12-18m ~50 palabras; emisión de 2 palabras a los 24m; a los 3 años oraciones simples de 4 elementos; a los 4 años oraciones compuestas y dominio fonemático casi completo).",
        "2. **Clasificación de la Alteración (Unidades 2 y 3 - Susanibar et al., 2016)**:\n   - **Alteraciones Primarias del Habla**: *Retraso Evolutivo del Habla (RSH)* (desfase fonológico con comprensión y morfosintaxis conservadas) o *Trastorno de los Sonidos del Habla (TSH)* (antigua dislalia: fonético por error motor/articulatorio en sonido aislado, fonológico por procesos de simplificación en habla espontánea, o fonético-fonológico).\n   - **Alteraciones Secundarias del Habla y la Voz**: *Disartria* (origen neurológico SNC/SNP), *Disglosia* (origen orgánico periférico: labial, mandibular, lingual, palatina) o *Disfonía* (funcional hiper/hipocinética u orgánica como nódulos infantiles).",
        "3. **Niveles de Prevención Escolar (Caplan, 1964; Casanova, 2006)**: Especifica cómo tu propuesta actúa en **Prevención Primaria** (estimulación global en el aula ordinaria para evitar la aparición), **Secundaria** (detección precoz y cribado para frenar el avance) y **Terciaria** (intervención especializada directa/indirecta).",
        "4. **Diseño Didáctico de la Propuesta**: Incluye Objetivos didácticos, Contenidos, Metodología basada en el Diseño Universal de Aprendizaje (DUA - LOMLOE), Actividades concretas (discriminación auditiva, pares mínimos, conciencia fonológica, juegos comunicativos — evitando ejercicios de soplo o praxias descontextualizadas siguiendo a Farquharson, 2019) y Criterios de Evaluación."
      ],
      plantillaTarea: `# ACTIVIDAD 1: DETECCIÓN, CLASIFICACIÓN E INTERVENCIÓN PREVENTIVA EN EL LENGUAJE ORAL
**Asignatura:** Evaluación e Intervención en los Trastornos del Lenguaje Oral
**Docente:** Soraya Rodríguez Hernández

## 1. Análisis de la Etapa de Adquisición y Desarrollo del Lenguaje Oral
- **Edad del alumno/a y etapa evolutiva correspondiente:** [Etapa lingüística: 3-5 años (Monfort y Juárez, 2010; Sánchez et al., 2015)].
- **Hitos esperables frente a dificultades detectadas:**
  - *Mecanismos neurológicos, fisiológicos, perceptivos y de estimulación (Diéguez-Vide y Peña-Casanova, 2012):* [...]
  - *Signos de alerta detectados en Forma (fonología/sintaxis), Contenido (léxico) y Uso (pragmática):* [...]

## 2. Clasificación y Justificación de la Alteración del Habla o la Voz
Siguiendo la taxonomía de **Susanibar et al. (2016)**:
- **Categoría principal:** [Alteración del habla y la voz Primaria (RSH / TSH fonético, fonológico o fonético-fonológico) // Secundaria (Disglosia / Disartria / Disfonía infantil)].
- **Justificación clínica:** [Explicar por qué los errores son fonéticos (incapacidad articulatoria incluso en sonido aislado) o fonológicos (capaz de repetir en sílaba aislada pero comete procesos de simplificación en habla espontánea, ej. frontalización, oclusivización, reducción de sinfones)].
- **Instrumentos de evaluación propuestos:** PEFF (Prueba de Evaluación Fonético-Fonológica de Susanibar et al.), RFI (Registro Fonológico Inducido), PLON-R y muestras de lenguaje espontáneo (Farquharson, 2019).

## 3. Propuesta de Intervención Preventiva e Inclusiva en el Aula
### 3.1. Marco Legislativo y Nivel de Prevención
- **Marco LOMLOE (Ley Orgánica 3/2020):** Artículos 20, 73, 74 y 75, aplicando los principios del **Diseño Universal para el Aprendizaje (DUA)**.
- **Nivel de prevención (Caplan, 1964):** Prevención Primaria y Secundaria en Educación Infantil/Primaria, combinando **intervención indirecta** (asesoramiento al tutor y familia) e **intervención directa**.

### 3.2. Planificación Didáctica de Actividades de Estimulación
| Actividad | Objetivo Específico | Desarrollo Metodológico (Evidencia Científica) | Materiales y Agrupamiento | Criterio de Evaluación |
| :--- | :--- | :--- | :--- | :--- |
| **1. Detectives de Sonidos (Pares Mínimos)** | Mejorar la discriminación auditiva y el contraste fonológico. | Presentación de parejas de palabras que solo difieren en el fonema meta (ej. *pato/gato*, *casa/tasa*) mediante juego interactivo en asamblea (Farquharson, 2019). | Tarjetas visuales / Pizarra digital. Gran grupo / Pequeño grupo. | Discrimina receptiva y expresivamente al menos el 80% de los pares mínimos. |
| **2. El Tren de las Sílabas (Conciencia Fonológica)** | Estimular la segmentación silábica y producción en palabras polisílabas. | Juego cooperativo con rimas, adivinanzas y conteo de sílabas con apoyo visual, integrando los sonidos en palabras funcionales del centro de interés del aula. | Pictogramas, aros en el suelo. Grupos cooperativos. | Produce la estructura silábica completa sin omisiones en palabras bisílabas y trisílabas. |
| **3. Cuento Vivenciado y Diálogo Guiado** | Transferir y generalizar los fonemas al habla espontánea. | Narración interactiva donde los alumnos asumen roles con frases repetitivas que contienen los fonemas trabajados, empleando modelado y reformulación natural. | Cuento ilustrado, marionetas. Grupo aula. | Participa activamente empleando el patrón fonológico trabajado en contexto comunicativo real. |

## 4. Referencias Bibliográficas (APA 7ª ed.)
- Casanova, J. (2006). *Manual de logopedia escolar*. Masson.
- Farquharson, K. (2019). It Might Not Be Retry: How Evidence-Based Practice Influences Intervention for Speech Sound Disorders. *Revista Científica Signos Fónicos*, 1(2), 35-50.
- Ley Orgánica 3/2020, de 29 de diciembre (LOMLOE). *BOE*, núm. 340.
- Susanibar, F., Dioses, A., Marchesan, I., Guzmán, M., Leal, G., Guitar, B., y Junqueira, A. (2016). *Trastornos del habla: de los fundamentos a la evaluación*. Giunti EOS.`
    },
    {
      id: "saac-act-1",
      asignaturaId: "saac",
      tipo: "Actividad 1",
      titulo: "Actividad 1: Evaluación Ecológica y Diseño de SAAC en Discapacidad Auditiva",
      fechaRecomendada: "2026-11-13",
      ventanaInicio: "2026-10-25",
      fechaLimite: "2027-01-21",
      puntos: 1.0,
      porcentaje: 10,
      unidadesRelacionadas: ["Unidad 1", "Unidad 2"],
      descripcion: "Trabajo individual sobre evaluación y selección de SAAC (Unidad 1) y aplicación de sistemas oralistas/gestuales y ayudas técnicas en discapacidad auditiva (Unidad 2). (Fecha estándar UCJC - editable).",
      objetivos: [
        "Conocer y aplicar los criterios de selección de un SAAC válido (funcionalidad, adaptación individual, evolución, entorno de apoyo).",
        "Diseñar una propuesta de intervención con SAAC y ayudas técnicas para alumnado con discapacidad auditiva desde el enfoque multidimensional."
      ],
      resultadosAprendizaje: "Diseña una propuesta fundamentada integrando prótesis auditivas, amplificadores de señal (Sistema FM / Bucle magnético) y sistemas comunicativos (LPC, Comunicación Bimodal o LSE).",
      subtareas: [
        "Confirmar el enunciado exacto de la Actividad 1 en el campus virtual de SAAC.",
        "Desarrollar la evaluación mediante el enfoque ecológico (Tamarit, 1989) y el Test ComFor (Noens et al., 2006).",
        "Justificar la elección entre sistemas oralistas (Método auditivo puro, Lectura Labiofacial, Palabra Complementada - LPC) y gestuales (Dactilología, Comunicación Bimodal, Lengua de Signos - LSE).",
        "Entregar en la fecha recomendada (13 nov estándar UCJC)."
      ],
      guiaPasoAPaso: [
        "1. **Enfoque Multidimensional en Discapacidad Auditiva (Unidad 2)**: Integra el enfoque audiológico (grado de pérdida en dB según OMS 2021, tipo conductiva vs neurosensorial, momento prelocutivo vs perilocutivo vs postlocutivo, audífonos/implante coclear) con el enfoque sociocultural (identidad Sorda, bilingüismo y biculturalidad).",
        "2. **Ayudas Técnicas en el Aula**: Explica el papel del **Sistema de Frecuencia Modulada (FM)** (micrófono del docente conectado por ondas de radio al receptor del audífono/IC para eliminar el ruido de fondo y la reverberación) y del **Bucle Magnético**.",
        "3. **Comparativa y Elección de SAAC en Discapacidad Auditiva**:\n   - **Palabra Complementada (LPC)**: Sistema oralista que elimina las ambigüedades de la lectura labiofacial mediante 3 parámetros manuales simultáneos: *3 posiciones respecto al rostro* (lado, barbilla, garganta = vocales), *8 configuraciones de la mano* (consonantes) y *movimiento*.\n   - **Comunicación Bimodal**: Uso simultáneo del habla oral (siguiendo la estructura sintáctica de la lengua oral) acompañado de signos manuales tomados de la LSE. Fácil de aprender por familias oyentes para romper el bloqueo comunicativo temprano.\n   - **Lengua de Signos Española (LSE)**: Lengua natural completa con gramática visual-espacial propia y 4 parámetros formativos (Configuración, Lugar de articulación, Movimiento, Orientación + componentes no manuales)."
      ],
      plantillaTarea: `# ACTIVIDAD 1: EVALUACIÓN Y SELECCIÓN DE SAAC EN ALUMNADO CON DISCAPACIDAD AUDITIVA
**Asignatura:** Sistemas Aumentativos y Alternativos de la Comunicación y las TIC

## 1. Valoración Multidimensional del Caso
- **Perfil audiológico (OMS, 2021; ASHA, 2021):** Grado de pérdida en dB, localización (conductiva vs neurosensorial) y momento de aparición (prelocutiva, perilocutiva o postlocutiva).
- **Prótesis auditivas y ayudas técnicas en el aula:** Adaptación de [Audífonos / Implante Coclear] complementado en el aula con **Sistema de FM** y bucle magnético para eliminar la reverberación y el ruido ambiental (Aptent, 2017; SEORL, 2020).

## 2. Selección y Justificación del SAAC
| Dimensión | Opción Seleccionada | Justificación Clínica y Educativa |
| :--- | :--- | :--- |
| **Sistema Aumentativo Oralista** | **Palabra Complementada (LPC)** + Lectura Labiofacial | Deshace la ambigüedad visual de fonemas con idéntico punto de articulación (ej. /p/, /b/, /m/) mediante 3 posiciones vocálicas (lado, barbilla, garganta) y 8 figuras consonánticas, favoreciendo la conciencia fonológica y el acceso a la lectoescritura (Santana, 1999). |
| **Sistema Aumentativo/Alternativo Gestual** | **Comunicación Bimodal** / **LSE** | La Comunicación Bimodal permite a la familia oyente y al profesorado comunicarse desde el primer momento siguiendo el orden de la lengua oral, mientras que la LSE garantiza un desarrollo lingüístico natural y bilingüe (Stokoe, 1960; Petitto, 2000). |
| **Recursos TIC de Apoyo** | Apps de rehabilitación auditiva | Uso de *SEDEA*, *DI* (puntos fonoarticulatorios), *Coocleando* o *CoPilot (Cochlear)*. |

## 3. Plan de Implementación en el Aula y Familia
- Condiciones para la lectura labiofacial: distancia de 1 a 4 metros, luz difusa sin sombras en el rostro del docente, articulación clara sin exageración y sesiones de máximo 40 minutos para evitar la fatiga visual.`
    },
    {
      id: "escr-act-1",
      asignaturaId: "escrita",
      tipo: "Actividad 1",
      titulo: "Actividad 1: Caso Práctico Vida Real - Lectura con Dificultades Fonológicas (Simulacro 1)",
      fechaRecomendada: "2026-11-26",
      ventanaInicio: "2026-11-10",
      fechaLimite: "2027-01-21",
      puntos: 1.0,
      porcentaje: 10,
      unidadesRelacionadas: ["Unidad 1", "Unidad 2", "Unidad 3"],
      descripcion: "Caso práctico de la vida real (simulacro uno): saber diferenciar y analizar un caso de lectura con dificultades fonológicas apoyándose en los Temas 1 y 2 (y complementos PDF de la actividad 1).",
      objetivos: [
        "Saber diferenciar un caso de lectura con dificultades fonológicas.",
        "Aplicar los modelos cognitivos y neurobiológicos de la lectura (Temas 1 y 2) a un caso práctico real.",
        "Cuestionar y formular hipótesis clínicas que ocurran en el día a día como maestro de AL."
      ],
      resultadosAprendizaje: "El alumno podrá empezar a aplicar casos de lectura en su vida real, diferenciando fallos en las Reglas de Conversión Grafema-Fonema (vía subléxica) y proponiendo evaluación e intervención.",
      subtareas: [
        "Leer detenidamente el PDF complementario de la Actividad 1 en el campus virtual de Lengua Escrita.",
        "Analizar los procesos de bajo nivel (decodificación, movimientos sacádicos/regresiones, vía subléxica vs léxica) y procesos superiores (sintáctico y semántico).",
        "Explicar los efectos de lexicalidad, frecuencia y longitud observados en el caso.",
        "Entregar antes del 26 de noviembre de 2026 (fecha de máxima nota 100%)."
      ],
      guiaPasoAPaso: [
        "1. **Base Neurobiológica del Déficit Fonológico (Unidad 2)**: Explica que la lectura requiere conectar áreas visuales con áreas del lenguaje. El **circuito dorsal temporoparietal** (circunvolución temporal superior/Wernicke + lóbulo parietal inferior: circunvolución angular y supramarginalconectadas con el área de Broca) se encarga de la **conversión grafema-fonema (vía subléxica o fonológica)** y del aprendizaje de palabras nuevas/pseudopalabras. En la dislexia fonológica existe una hipoactivación de este circuito izquierdo (Cuetos, 2012, 2018).",
        "2. **Análisis desde el Modelo de Doble Ruta en Cascada (Coltheart et al., 2001)**: Demuestra cómo el alumno del caso tiene preservada la **vía léxica** (lee bien palabras familiares de alta frecuencia porque están en su léxico visual/ortográfico), pero presenta un déficit en la **vía subléxica o fonológica** (falla al aplicar las Reglas de Conversión Grafema-Fonema RCGF).",
        "3. **Evidencias Clínicas en la Lectura del Caso (Efectos Psicolingüísticos)**:\n   - **Efecto de Lexicalidad**: Gran diferencia entre palabras reales (acierto alto) y **pseudopalabras** (muchos errores y lentitud).\n   - **Efecto de Frecuencia**: Lee bien palabras de alta frecuencia, pero falla en las de baja frecuencia.\n   - **Tipo de error característico**: Comete **lexicalizaciones** (convierte una pseudopalabra como *'tasa'* o *'pelsona'* en una palabra real visualmente parecida) y errores derivativos/visuales.",
        "4. **Intervención Específica (Cuetos, 2018; Outón, 2004; Rodríguez-Cano et al., 2021)**: Propón entrenamiento sistemático en conciencia fonémica (segmentar, omitir, añadir fonemas), enseñanza explícita y multisensorial de las RCGF (letras manipulables, apoyo articulatorio/visual) y lectura progresiva de sílabas directas (CV), inversas (VC), trabadas/sinfones (CCV) y pseudopalabras."
      ],
      plantillaTarea: `# ACTIVIDAD 1: CASO PRÁCTICO DE LECTURA CON DIFICULTADES FONOLÓGICAS
**Asignatura:** Evaluación e Intervención en los Trastornos de la Lengua Escrita
**Docente:** David Sánchez Toribio

## 1. Identificación del Caso y Hipótesis Inicial
- **Datos del alumno/a:** [...]
- **Hipótesis diagnóstica:** Dificultad específica en el aprendizaje de la lectura de perfil **fonológico** (déficit en la vía subléxica o indirecta), encuadrada dentro de las **NEAE** (Art. 71 LOMLOE) y del Trastorno Específico del Aprendizaje con dificultad en la lectura del DSM-5 (APA, 2013).

## 2. Análisis Cognitivo y Neurobiológico de los Procesos Lectores
### 2.1. Bases Neurobiológicas Implicadas (Cuetos, 2012)
- Afectación funcional del **circuito dorsal temporoparietal izquierdo** (circunvolución temporal superior, giro angular y supramarginal en conexión con el área de Broca), responsable del ensamblaje fonológico y la conversión grafema-fonema.
- Uso compensatorio del **circuito ventral occipitotemporal** (reconocimiento global ortográfico de palabras familiares).

### 2.2. Análisis según el Modelo de Doble Ruta (Coltheart et al., 2001)
- **Procesos Perceptivos y Movimientos Oculares:** Aumento del número de **regresiones** (>15%) y mayor duración de las **fijaciones** (>225 ms) ante palabras desconocidas.
- **Reconocimiento de Palabras (Decodificación):**
  - *Efecto de lexicalidad y frecuencia:* Lee adecuadamente palabras familiares de alta frecuencia por la **vía léxica**, pero fracasa ante palabras infrecuentes y **pseudopalabras** por fallo en las **Reglas de Conversión Grafema-Fonema (RCGF)**.
  - *Errores cometidos:* **Lexicalizaciones** (sustituir una pseudopalabra por una palabra real de vecindad ortográfica cercana), vacilaciones, adivinación de palabras y errores en grafemas dependientes del contexto (*c/qu, g/gu, r/rr*).
- **Procesos Superiores (Sintáctico y Semántico):** La sobrecarga de la memoria operativa (recursos controlados consumidos en la decodificación no automatizada) dificulta secundariamente la extracción de la macroestructura y la creación del modelo de situación (Kintsch y Van Dijk, 1983).

## 3. Evaluación Psicopedagógica y Logopédica
- **Batería principal:** **PROLEC-R** (Cuetos et al.), prestando especial atención al contraste entre la subprueba de *Lectura de Palabras* y *Lectura de Pseudopalabras* (precisión y velocidad).
- **Pruebas complementarias:** Evaluación de la conciencia fonológica (PECO) y cribado DST-J.

## 4. Programa de Intervención Específica (Cuetos, 2018; García y Pedrosa, 2020)
1. **Entrenamiento en Conciencia Fonológica y Fonémica:** Identificación, segmentación, omisión e inversión de fonemas en el plano oral.
2. **Rehabilitación de la Vía Subléxica (RCGF):** Asociación multisensorial grafema-fonema (visual, auditiva, kinestésico-táctil con letras móviles), trabajando primero estructuras CV, luego VC, CVC y sinfones CCV.
3. **Automatización y Fluidez Lectora:** Lectura repetida de listas de sílabas y pseudopalabras con retirada progresiva de claves externas.
4. **Medidas ordinarias en el aula (Outón, 2004):** Evitar la lectura en voz alta sin preparación previa, ampliar tiempos en exámenes, priorizar evaluación oral y usar tipografías claras.

## 5. Referencias Bibliográficas (APA 7ª ed.)
- Coltheart, M., Rastle, K., Perry, C., Langdon, R., y Ziegler, J. (2001). DRC: a dual route cascaded model of visual word recognition and reading aloud. *Psychological Review*, 108(1), 204-256.
- Cuetos, F. (2010). *Psicología de la lectura*. WK Educación.
- Cuetos, F. (2018). *Neurociencia del lenguaje: bases neurológicas e implicaciones clínicas*. Editorial Médica Panamericana.`
    },

    // --- TALLERES PRÁCTICOS 2 (Semana 30 Noviembre - 4 Diciembre 2026) ---
    {
      id: "psico-taller-2",
      asignaturaId: "psicopatologia",
      tipo: "Taller Práctico 2",
      titulo: "Sesión Práctica 2: Elaboración de una Infografía sobre NEAE y NEE (LOMLOE)",
      fechaRecomendada: "2026-12-04",
      ventanaInicio: "2026-11-30",
      fechaLimite: "2027-01-21",
      puntos: 0.5,
      porcentaje: 5,
      unidadesRelacionadas: ["Unidad 4", "Unidad 5"],
      descripcion: "Elaborar una infografía para sensibilizar a un centro educativo sobre casos de NEE (Unidad 4) y NEAE (Unidad 5) considerando la LOMLOE + cuestionario.",
      objetivos: [
        "Sensibilizar en un centro educativo ante la llegada de nuevos perfiles de estudiantes.",
        "Informar por medio de la descripción de los diferentes perfiles (NEE y NEAE).",
        "Elaborar un material visual para sensibilizar al contexto educativo considerando la LOMLOE."
      ],
      resultadosAprendizaje: "Elaborar una infografía rigurosa que diferencie NEE (Art. 73) y NEAE (Art. 71) y sintetice sus características lingüísticas y respuestas educativas.",
      subtareas: [
        "Asistir o visualizar la 7ª sesión síncrona de Psicopatología.",
        "Estructurar visualmente la diferencia entre el grupo paraguas NEAE (Art. 71 LOMLOE) y el subgrupo NEE (Art. 73 LOMLOE).",
        "Incluir los perfiles de la Unidad 4 (DI, Discapacidad física, Discapacidad auditiva, TEA, TGC) y Unidad 5 (Retraso madurativo, ACI, TDAH, Incorporación tardía, Condiciones personales/historia escolar).",
        "Entregar la infografía y completar el cuestionario antes del 4 de diciembre de 2026 (72h tras la sesión)."
      ],
      guiaPasoAPaso: [
        "1. **Estructura Visual Jerárquica (Ilustración 1 de Unidad 1 + Unidades 4 y 5)**: Muestra claramente que **NEAE (Art. 71 LOMLOE)** es la categoría amplia que engloba a todos los alumnos que requieren una atención educativa diferente a la ordinaria, y que **NEE (Art. 73 LOMLOE)** está *dentro* de las NEAE.",
        "2. **Bloque 1 de la Infografía: NEE asociadas a Discapacidad o Trastornos Graves (Unidad 4)**:\n   - *Discapacidad Intelectual (DI)*: Enfoque biopsicosocial AAIDD (Schalock et al., 2021), apoyos intermitentes, limitados, extensos o generalizados.\n   - *Discapacidad Física/Motora*: Parálisis, hipotonía, hipertonía, distonía, ataxia -> disartrias y afectación orofacial.\n   - *Discapacidad Auditiva*: Leve, moderada, severa, profunda, cofosis; audífonos e implante coclear.\n   - *TEA*: Grados 1, 2 y 3 de ayuda; afectación pragmática y semántica.\n   - *Trastorno Grave de Conducta (TGC)*: Patrón persistente, intenso y frecuente que vulnera normas y derechos.",
        "3. **Bloque 2 de la Infografía: Otras NEAE no asociadas a Discapacidad (Unidad 5)**:\n   - *Retraso Madurativo / RGD*: Menores de 5 años que no alcanzan hitos evolutivos; respetar ritmos.\n   - *Altas Capacidades Intelectuales (ACI)*: Superdotación (3 anillos de Renzulli: capacidad superior, creatividad y dedicación), talento simple (>P95) y complejo (>P80). Vocabulario amplio, ironía, posible disincronía y reto pragmático.\n   - *TDAH*: Inatento, hiperactivo-impulsivo o combinado; déficit en atención voluntaria/selectiva y memoria de trabajo; discurso poco coherente y dificultad en turnos de palabra.\n   - *Incorporación Tardía y Condiciones Personales/Historia Escolar*: Apoyo idiomático y Aulas de Acogida."
      ],
      plantillaTarea: `# GUION DE CONTENIDO PARA LA INFOGRAFÍA: NEE Y NEAE EN EL MARCO DE LA LOMLOE
**Asignatura:** Psicopatología de la Audición y el Lenguaje (Taller Práctico 2)

## BLOQUE CENTRAL: ¿Qué establece la LOMLOE (Ley Orgánica 3/2020)?
> **¡Las NEE están dentro de las NEAE!**
> - **NEAE (Art. 71):** Todo alumnado que requiere una atención educativa diferente a la ordinaria para alcanzar el máximo desarrollo de sus capacidades.
> - **NEE (Art. 73):** Alumnado que afronta barreras que limitan su acceso, presencia, participación o aprendizaje derivadas de **discapacidad** o **trastornos graves de conducta, de la comunicación y del lenguaje**.

---

## COLUMNA IZQUIERDA: Alumnado con NEE (Unidad 4)
1. **Discapacidad Intelectual (DI):** Limitaciones en funcionamiento intelectual y conducta adaptativa (<22 años). Clasificación AAIDD 2021 por **intensidad de apoyos**: *Intermitente, Limitado, Extenso, Generalizado*.
2. **Discapacidad Física:** Alteración motora (parálisis, hipotonía, hipertonía, distonía, ataxia). En AL: frecuente **disartria**, incoordinación fonorrespiratoria y disfagia.
3. **Discapacidad Auditiva:** Pérdida leve (21-40 dB), moderada (41-70 dB), severa (71-90 dB), profunda (91-120 dB) o cofosis (>120 dB). Apoyos: **Audífonos, Implante Coclear**, LSE, Bimodal, LPC.
4. **Trastorno del Espectro Autista (TEA):** Grados 1 (necesita ayuda), 2 (ayuda notable) y 3 (ayuda muy notable). Mayor afectación en los planos **semántico y pragmático/suprasegmental**.
5. **Trastorno Grave de Conducta (TGC):** Patrón persistente, frecuente e intenso que deteriora la convivencia escolar, familiar y social.

---

## COLUMNA DERECHA: Otros Perfiles NEAE (Unidad 5)
1. **Retraso Madurativo (RGD en DSM-5):** Niños **<5 años** que no alcanzan los hitos evolutivos en motricidad, lenguaje, cognición o sociabilidad. Pauta clave: *respetar su ritmo sin presiones*.
2. **Altas Capacidades Intelectuales (ACI):** Superdotación (**Teoría de los 3 anillos de Renzulli**: capacidad > media, alta dedicación y creatividad), Talento simple (>P95) y Talento complejo (>P80). Adquisición temprana del lenguaje y gran vocabulario, pero posibles dificultades pragmáticas y **síndrome de disincronía**.
3. **TDAH:** Presentación inatenta (la más frecuente en la escuela), hiperactiva-impulsiva o combinada. Alteración en **atención voluntaria/selectiva** y **memoria de trabajo**. En AL: falta de coherencia discursiva, interrupciones en turnos de palabra y prosodia alterada.
4. **Incorporación Tardía al Sistema Educativo:** Respuesta mediante **Apoyo Idiomático** y **Aulas de Acogida** (2º-3º ciclo Primaria y ESO).
5. **Condiciones Personales o de Historia Escolar:** Desfase de al menos 2 cursos en Primaria por hospitalizaciones, absentismo o vulnerabilidad socioeducativa.`
    },
    {
      id: "anat-taller-2",
      asignaturaId: "anatomia",
      tipo: "Taller Práctico 2",
      titulo: "Sesión Práctica 2: Componentes del Lenguaje y Detección de Dificultades",
      fechaRecomendada: "2026-12-04",
      ventanaInicio: "2026-11-30",
      fechaLimite: "2027-01-21",
      puntos: 0.5,
      porcentaje: 5,
      unidadesRelacionadas: ["Unidad 3", "Unidad 4", "Unidad 5"],
      descripcion: "Actividad práctica sobre los componentes del lenguaje (fonemas, morfemas, sintaxis, semántica, discurso) y procesos de percepción, comprensión y producción, explicando con evidencia científica los trastornos del lenguaje y su causa.",
      objetivos: [
        "Adquirir competencias para reconocer y detectar dificultades en el lenguaje e identificar posibles trastornos.",
        "Explicar con evidencia científica los trastornos del lenguaje y su causa neuroanatómica o fisiológica."
      ],
      resultadosAprendizaje: "Relacionar los componentes del Modelo Multimodal Cerebral del Lenguaje (Broca, Wernicke, Fascículo Arqueado, Giro Angular/Supramarginal) y las fases de percepción/producción con las dificultades observadas.",
      subtareas: [
        "Repasar las Unidades 4 y 5 de Anatomía (Tabla 2 de González y Hornauer-Hughes, 2014; modelos de Forster y Morton; fases de producción de Carroll, 2021).",
        "Realizar la práctica de la 7ª sesión síncrona y el cuestionario.",
        "Entregar antes del 4 de diciembre de 2026 (72h tras la sesión)."
      ],
      guiaPasoAPaso: [
        "1. **Dimensiones del Lenguaje (Unidad 4)**: Relaciona la *Dimensión Estructural* (Modelo de Geschwind: Área de Broca = programación motora/sintaxis; Área de Wernicke = comprensión auditiva y selección léxica; Fascículo Arqueado = repetición y conexión fonológica; Circunvolución Angular = integración multimodal y lectoescritura; Circunvolución Supramarginal = bucle fonológico), la *Dimensión Funcional* (Funciones cognitiva y comunicativa + 6 funciones de Jakobson: referencial, expresiva, conativa, fática, poética y metalingüística) y la *Dimensión Comportamental* (Comprensión y Expresión).",
        "2. **Componentes Lingüísticos**: Desde la unidad mínima sin significado (**fonema**, 24 en español: 5 vocálicos y 19 consonánticos) -> **morfema** (lexemas con contenido semántico y morfemas gramaticales flexivos/derivativos; palabras de contenido = clase abierta vs functores = clase cerrada) -> **sintaxis** -> **discurso** (coherencia global).",
        "3. **Percepción, Comprensión y Producción (Unidad 5)**: Aplica la *Percepción Categórica*, el *Efecto McGurk* (/ga/ visual + /ba/ auditivo = se percibe /da/), los modelos de acceso al léxico (*Búsqueda de Forster* vs *Logogén de Morton*) y las 4 fases de producción (*Conceptualización -> Formulación según modelo de Fromkin -> Articulación -> Autosupervisión*)."
      ],
      plantillaTarea: `# TALLER PRÁCTICO 2: COMPONENTES DEL LENGUAJE Y BASES NEUROFISIOLÓGICAS DE SUS DIFICULTADES
**Asignatura:** Anatomía, Fisiología y Neurología del Lenguaje
**Docente:** Sara Prieto González

## 1. Identificación de los Componentes del Lenguaje Afectados
- **Nivel Fonético-Fonológico:** [Alteración en periodo respiratorio, fonatorio (Efecto Bernoulli) o articulatorio / Percepción categórica].
- **Nivel Morfológico y Léxico-Semántico:** [Afectación en palabras de contenido (clase abierta) o functores/palabras funcionales (clase cerrada); acceso al léxico según Modelo de Logogén de Morton o Red Semántica de propagación de la activación].
- **Nivel Sintáctico y Discursivo:** [Coherencia y cohesión supraoracional (Cuetos et al., 2018)].

## 2. Explicación Neurocientífica de la Causa
De acuerdo con el **Modelo Multimodal Cerebral del Lenguaje (González y Hornauer-Hughes, 2014)**:
- **Área de Broca (lóbulo frontal izquierdo):** Implicada en la formulación morfosintáctica y planificación motora articulatoria.
- **Área de Wernicke (lóbulo temporal izquierdo):** Implicada en la decodificación auditivo-fonológica y selección léxica.
- **Fascículo Arqueado y Giros Angular / Supramarginal:** Responsables de la conexión temporo-frontal, el circuito fonológico y la integración lectoescritora.`
    },
    {
      id: "oral-taller-2",
      asignaturaId: "oral",
      tipo: "Taller Práctico 2",
      titulo: "Sesión Práctica 2: Análisis de Testimonio Real sobre Disfemia (Fluidez Verbal)",
      fechaRecomendada: "2026-12-04",
      ventanaInicio: "2026-11-30",
      fechaLimite: "2027-01-21",
      puntos: 0.5,
      porcentaje: 5,
      unidadesRelacionadas: ["Unidad 4"],
      descripcion: "Análisis crítico de un testimonio real sobre disfemia/tartamudez: características emocionales, sociales y comunicativas, impacto de la autoimagen y estrategias docentes inclusivas.",
      objetivos: [
        "Comprender la disfemia como alteración de la fluidez verbal y sus repercusiones emocionales y sociales.",
        "Identificar los factores personales, familiares y educativos que intervienen en el desarrollo del habla cuando existe disfemia.",
        "Analizar el impacto de la aceptación y la autoimagen en la comunicación y proponer estrategias basadas en la inclusión, empatía y respeto."
      ],
      resultadosAprendizaje: "Reconoce las características emocionales, sociales y comunicativas de la disfemia a través del análisis de un testimonio real y propone estrategias inclusivas en el aula.",
      subtareas: [
        "Visualizar la 7ª sesión síncrona y el testimonio real propuesto por la profesora Soraya Rodríguez.",
        "Analizar la metáfora del 'Iceberg de la Disfemia' (parte visible: bloqueos, repeticiones, prolongaciones vs parte sumergida: vergüenza, ansiedad anticipatoria, evitación, baja autoestima).",
        "Redactar las estrategias para el aula y la familia y entregar junto con el cuestionario en 72h (semana 30 nov - 4 dic)."
      ],
      guiaPasoAPaso: [
        "1. **El Iceberg de la Disfemia (Unidad 4 - Fundación Española de la Tartamudez / Susanibar et al., 2016)**:\n   - *Conductas visibles (punta del iceberg)*: Rupturas involuntarias del flujo del habla (**bloqueos** tónicos, **repeticiones** clónicas de sonidos/sílabas y **prolongaciones**), acompañadas de concomitantes físicos (tensión facial/cervical, tics, alteración respiratoria) y lingüísticos (muletillas, circunloquios).\n   - *Factores internos (base sumergida del iceberg)*: Ansiedad anticipatoria, miedo a hablar en público, vergüenza, frustración, conductas de evitación/escape y deterioro de la autoimagen.",
        "2. **Factores Familiares y Escolares**: Explica cómo las reacciones del entorno (terminar las frases por el alumno, pedirle que 'respire o se calme', meterle prisa o reírse) actúan por condicionamiento clásico/operante aumentando la tensión y cronificando el bloqueo.",
        "3. **Pautas Docentes Inclusivas (Región de Murcia / Fernández-Zúñiga, 2008)**:\n   - Mirar al alumno a los ojos manteniendo una expresión natural, centrando la atención en **qué dice** y no en **cómo lo dice**.\n   - **No interrumpir ni completar sus palabras**; darle todo el tiempo que necesite.\n   - Hablarle con un ritmo pausado y tranquilo (modelado indirecto de velocidad de habla) en lugar de darle órdenes como 'habla despacio'.\n   - En lecturas en voz alta o preguntas en clase: pactar previamente con el alumno su participación, empezar con lectura coral o en parejas, y evitar exponerlo por sorpresa en momentos de alta tensión."
      ],
      plantillaTarea: `# TALLER PRÁCTICO 2: ANÁLISIS DE TESTIMONIO REAL SOBRE DISFEMIA E INTERVENCIÓN EDUCATIVA
**Asignatura:** Evaluación e Intervención en los Trastornos del Lenguaje Oral
**Docente:** Soraya Rodríguez Hernández

## 1. Análisis multidimensional del Testimonio: "El Iceberg de la Disfemia"
- **Manifestaciones visibles (Lingüísticas, Corporales y Respiratorias - Susanibar et al., 2016):**
  - *Rupturas del flujo:* Bloqueos (tónicos), repeticiones silábicas (clónicos) y prolongaciones de sonidos.
  - *Concomitantes asociados:* Tensión muscular orofacial, alteración de la coordinación fonorrespiratoria, uso de muletillas y circunloquios para evitar palabras temidas.
- **Dimensión sumergida (Impacto Emocional, Cognitivo y Social):**
  - *Autoimagen y aceptación:* Sentimientos de vergüenza, culpa, ansiedad anticipatoria ante situaciones comunicativas (teléfono, leer en voz alta, presentarse) y conductas de evitación o mutismo defensivo.

## 2. El Papel del Entorno Familiar y Educativo
- **Barreras actitudinales frecuentes:** Interrumpir al hablante, adivinar o terminar sus frases, darle consejos contraproducentes (*"tranquilízate", "respira antes de hablar", "piensa lo que vas a decir"*) que incrementan la hipervigilancia sobre el propio habla.
- **La aceptación como factor terapéutico:** Cuando la persona y su entorno normalizan la disfluencia y eliminan la presión temporal, disminuye la ansiedad anticipatoria y mejora la fluidez comunicativa.

## 3. Propuesta de Estrategias Inclusivas para el Docente en el Aula (Fernández-Zúñiga, 2008)
1. **Escucha activa y contacto visual:** Mantener el contacto visual natural sin mostrar impaciencia, atendiendo al contenido del mensaje y no a la forma.
2. **Modelado de habla lenta:** El maestro reduce su propia velocidad de habla, usando pausas naturales y frases sencillas, en lugar de exigir al alumno que hable más despacio.
3. **Gestión de turnos y preguntas en el aula:** Respetar los turnos de palabra (evitando que otros compañeros interrumpan), no forzar la lectura en voz alta sin previo aviso y favorecer prácticas de lectura coral o en pequeño grupo cooperativo.
4. **Clima emocional seguro:** Sensibilizar al grupo-clase sobre la diversidad comunicativa para prevenir cualquier conducta de burla o acoso escolar.`
    },
    {
      id: "escr-taller-2",
      asignaturaId: "escrita",
      tipo: "Taller Práctico 2",
      titulo: "Sesión Práctica 2: Evaluación de Lectura y Aritmética en un mismo Paciente (Discalculia)",
      fechaRecomendada: "2026-12-04",
      ventanaInicio: "2026-11-30",
      fechaLimite: "2027-01-21",
      puntos: 0.5,
      porcentaje: 5,
      unidadesRelacionadas: ["Unidad 2", "Unidad 3", "Unidad 4", "Unidad 5"],
      descripcion: "Describir y evaluar el tipo de lectura de palabras y la aritmética de un mismo paciente, debiendo descubrir y justificar si presenta o no discalculia (y su posible comorbilidad con dislexia).",
      objetivos: [
        "Describir y evaluar el tipo de lectura de palabras y la aritmética de un mismo paciente.",
        "Descubrir de forma razonada si el paciente presenta o no discalculia.",
        "Distinguir las vías utilizadas en lectura y los procesos cognitivos relacionados con las matemáticas."
      ],
      resultadosAprendizaje: "El alumno sabrá distinguir el tipo de vías utilizadas en lectura y evaluar procesos numéricos (sentido numérico, transcodificación, valor posicional, cálculo y resolución de problemas).",
      subtareas: [
        "Repasar la Unidad 5 de Lengua Escrita (especialmente epígrafes 4, 5, 7 'Relación entre dislexia y discalculia' y 9 'Evaluación').",
        "Analizar en el caso si los fallos matemáticos se deben a un déficit genuino en el sentido numérico/procesamiento aritmético (Discalculia) o son secundarios a una mala lectura/comprensión del enunciado verbal o a errores de escritura de cifras.",
        "Entregar la actividad y el cuestionario antes del 4 de diciembre de 2026."
      ],
      guiaPasoAPaso: [
        "1. **Relación y Diagnóstico Diferencial entre Dislexia y Discalculia (Unidad 5, epígrafe 7 - Tamayo et al., 2018)**:\n   - *Niños solo con Dislexia*: Déficit en procesamiento fonológico, lectura/escritura y memoria verbal a corto plazo, pero buenas habilidades visoespaciales y de estimación de magnitudes (pueden fallar en problemas matemáticos escritos porque no comprenden el enunciado lector o les cuesta memorizar las tablas de multiplicar verbalmente).\n   - *Niños solo con Discalculia*: Buenas habilidades fonológicas/lectoras, pero déficit en el **sentido numérico** (comparar magnitudes, línea numérica mental), capacidades visoespaciales y cálculo.\n   - *Comorbilidad Dislexia + Discalculia*: Ambos perfiles afectados.",
        "2. **Análisis de Errores Matemáticos (Unidad 5, epígrafe 4 y Romero et al., 2020)**: Comprueba si presenta errores en: (a) Identificación y escritura de números (inversiones, rotaciones, **transcodificación numérica** como escribir *251* al dictarle *'doscientos quince'* o *307* como *'treinta y siete'*), (b) Seriación numérica (traslaciones 13->31, omisiones, perseveración, no abreviación), (c) Valor posicional y omisión del cero en el sistema decimal con llevadas, (d) Confusión de signos aritméticos (+, -, <, >), (e) Cálculo mental y (f) Resolución de problemas.",
        "3. **Clasificación de la Discalculia (Suárez et al., 2011)**: Primaria (lesión cerebral específica del cálculo), Secundaria (mala utilización de símbolos y operaciones inversas, asociada a alteraciones del lenguaje y desorientación espacio-temporal) o Disaritmética."
      ],
      plantillaTarea: `# TALLER PRÁCTICO 2: EVALUACIÓN CONJUNTA DE LECTURA Y PROCESAMIENTO MATEMÁTICO (DISCALCULIA)
**Asignatura:** Evaluación e Intervención en los Trastornos de la Lengua Escrita
**Docente:** David Sánchez Toribio

## 1. Evaluación del Perfil Lector del Paciente
- **Vía léxica (visual/directa):** [Estado de la lectura de palabras frecuentes e irregulares]
- **Vía subléxica (fonológica):** [Estado de la lectura de pseudopalabras y aplicación de RCGF]

## 2. Evaluación del Procesamiento Numérico y Aritmético (Unidad 5)
- **Sentido numérico y línea numérica mental (Coelho, 2012):** Principios de correspondencia, orden y cardinalidad.
- **Errores detectados (Romero et al., 2020; Kaufmann et al., 2013):**
  - *Transcodificación numérica y valor posicional:* [Ej. errores al pasar del código verbal al arábigo, omisión del cero, operar de izquierda a derecha sin respetar llevadas].
  - *Seriación y escalas:* [Inversiones, traslaciones (13 por 31), omisión de cifras o no abreviación].
  - *Cálculo y hechos numéricos:* [Uso persistente del conteo con dedos en sumas de un dígito, fallo en recuperación de tablas de multiplicar].
  - *Resolución de problemas:* [¿Falla por incomprensión lectora del enunciado o por fallo en el razonamiento matemático y operacional?].

## 3. Conclusión Diagnóstica: ¿Presenta Discalculia?
- **Juicio clínico fundamentado:** [Confirmar o descartar Discalculia (Trastorno específico del aprendizaje con dificultad matemática según DSM-5) y explicar su relación o comorbilidad con el perfil lector del paciente].
- **Orientaciones de intervención (López y Cuadrado, 2019):** Trabajo multisensorial y manipulativo (bloques multibase, ábaco, recta numérica física) antes de pasar a la representación simbólica abstracta, e instrucción explícita en las 5 fases de resolución de problemas (análisis, representación, planificación, ejecución y generalización).`
    },
    {
      id: "saac-taller-2",
      asignaturaId: "saac",
      tipo: "Taller Práctico 2",
      titulo: "Sesión Práctica 2: Diseño de Adaptación Curricular y Matriz de Decisión SAAC",
      fechaRecomendada: "2026-12-04",
      ventanaInicio: "2026-11-30",
      fechaLimite: "2027-01-21",
      puntos: 0.5,
      porcentaje: 5,
      unidadesRelacionadas: ["Unidad 3", "Unidad 4", "Unidad 5"],
      descripcion: "Actividad práctica sobre selección de SAAC en TEA / Discapacidad Física y diseño de adaptaciones curriculares e implementación mediante Lenguaje Natural Asistido (Fecha estándar UCJC - editable).",
      objetivos: [
        "Aplicar matrices de toma de decisiones para elegir entre PECS, Schaeffer, SPC, Bliss, Minspeak o ARASAAC según el perfil motor, cognitivo y comunicativo.",
        "Diseñar adaptaciones curriculares (no significativas y significativas en el marco LOMLOE) y aplicar estrategias de Lenguaje Natural Asistido (LNA)."
      ],
      resultadosAprendizaje: "Diseña una adaptación curricular e intervención práctica para implementar y generalizar un SAAC en todos los contextos del alumno.",
      subtareas: [
        "Revisar la fecha y enunciado del Taller 2 en el aula virtual de SAAC.",
        "Completar la matriz de toma de decisiones y las pautas de enseñanza (modelado / LNA, moldeamiento, encadenamiento hacia atrás, espera estructurada).",
        "Entregar antes del 4 de diciembre de 2026."
      ],
      guiaPasoAPaso: [
        "1. **Comparativa de Sistemas Gráficos (Unidades 3 y 4)**:\n   - **PECS (Bondy y Frost)**: 6 fases (I. Intercambio físico, II. Distancia y persistencia, III. Discriminación de imágenes, IV. Estructura de la oración 'Quiero + ítem', V. Responder a '¿Qué quieres?', VI. Comentar). Ideal en TEA para instaurar la iniciativa comunicativa.\n   - **Programa de Habla Signada de Benson Schaeffer**: Comunicación bimodal para TEA/discapacidad intelectual basada en encadenamiento hacia atrás, moldeamiento y espera estructurada (evitando ecopraxias).\n   - **SPC (Sistema Pictográfico de Comunicación)** y **ARASAAC**: Alta iconicidad (transparentes), organizados por colores según categoría gramatical (Amarillo = personas, Verde = verbos, Azul = adjetivos/adverbios, Naranja = nombres, Blanco = miscelánea, Rosa/Morado = social).\n   - **Sistema BLISS**: Símbolos gráfico-visuales de menor iconicidad (pictográficos, ideográficos y abstractos) que permiten crear nuevos conceptos combinando símbolos; requiere buen nivel cognitivo (muy usado en parálisis cerebral sin discapacidad intelectual).\n   - **Minspeak**: Basado en compactación semántica (secuencias de iconos polisémicos en comunicadores dinámicos).",
        "2. **Estrategias de Instrucción (Unidad 5)**: Aplica el **Lenguaje Natural Asistido (LNA)** (el adulto señala los pictogramas del comunicador mientras habla de forma natural, sin exigir respuesta inmediata), **moldeamiento**, **encadenamiento hacia atrás** y **espera estructurada**."
      ],
      plantillaTarea: `# TALLER PRÁCTICO 2: MATRIZ DE DECISIÓN Y ADAPTACIÓN CURRICULAR SAAC
**Asignatura:** Sistemas Aumentativos y Alternativos de la Comunicación y las TIC

## 1. Matriz de Toma de Decisiones del Caso (Marín, 2019; Figueredo, 2020)
- **Capacidades motoras y forma de acceso:** [Selección directa / Puntero cefálico / Lector ocular / Barrido automático por filas y columnas con pulsador].
- **Nivel cognitivo y simbólico:** [Elección justificada entre PECS, Schaeffer, ARASAAC/SPC, Bliss o Minspeak].
- **Herramienta TIC seleccionada:** [LetMeTalk / Asterics Grid / SymboTalk / Eneso Verbo / Araword / Soy Visual].

## 2. Diseño de Adaptaciones Curriculares (LOMLOE, Art. 71 y 74)
- **Adaptaciones no prescriptivas / metodológicas (RD 157/2022):** Uso de apoyos visuales en todas las áreas, estructuración ambiental, ampliación de tiempos y evaluación adaptada mediante el comunicador.
- **Adaptaciones en elementos prescriptivos (ACI significativa para NEE):** Reformulación de criterios de evaluación vinculados a la expresión oral para contemplar la expresión mediante SAAC.

## 3. Estrategias de Enseñanza y Generalización (Unidad 5)
- **Lenguaje Natural Asistido (LNA - Drager et al., 2006):** Modelado constante por parte de docentes y familia señalando los símbolos en contextos naturales de 24 horas.
- **Técnicas conductuales:** Moldeamiento (*shaping*), encadenamiento hacia atrás y espera estructurada.`
    },

    // --- ACTIVIDAD 2 (3 Diciembre 2026 y 11 Diciembre 2026) ---
    {
      id: "escr-act-2",
      asignaturaId: "escrita",
      tipo: "Actividad 2",
      titulo: "Actividad 2: Análisis de Casos Reales de Fallos en Escritura (Disgrafía y Disortografía)",
      fechaRecomendada: "2026-12-03",
      ventanaInicio: "2026-11-20",
      fechaLimite: "2027-01-21",
      puntos: 1.0,
      porcentaje: 10,
      unidadesRelacionadas: ["Unidad 1", "Unidad 2", "Unidad 3", "Unidad 4"],
      descripcion: "Analizar casos reales de fallos en escritura (Temas 1, 2, 3 y 4), diferenciando los procesos cognitivos de la escritura afectados, tipología de disgrafía y/o disortografía y diseñando la intervención.",
      objetivos: [
        "Analizar casos reales de fallos en escritura aplicando los contenidos de los Temas 1, 2, 3 y 4.",
        "Diferenciar clínicamente entre errores de disgrafía (motriz vs lingüística/proyección de dislexia) y disortografía.",
        "Proponer instrumentos de evaluación y estrategias de intervención ajustadas al proceso escritor alterado."
      ],
      resultadosAprendizaje: "El alumno podrá aplicar casos de escritura en su vida real, cuestionar hipótesis diagnósticas sobre muestras de escritura y planificar su rehabilitación.",
      subtareas: [
        "Descargar las muestras reales de escritura de la Actividad 2 en el aula virtual de Lengua Escrita.",
        "Analizar los errores en los 4 procesos del modelo de Cuetos (2009): Planificación, Construcción sintáctica, Recuperación léxica (vía subléxica/fonológica vs vía léxica/ortográfica) y Procesos motores (alógrafos y patrones motores).",
        "Clasificar si se trata de Disgrafía (motriz/caligráfica vs central/lingüística) y/o Disortografía (temporal, perceptivo-kinestésica, disortocinética, visoespacial, dinámica o semántica - Otondo y Bascur, 2020).",
        "Entregar antes del 3 de diciembre de 2026 (fecha recomendada 100%)."
      ],
      guiaPasoAPaso: [
        "1. **Modelos Cognitivos de la Escritura (Unidad 2)**:\n   - *Hayes y Flower (1980)*: Planificación -> Transcripción (producción de texto) -> Revisión.\n   - *Cuetos (2009)*: 4 módulos: (1) Planificación del mensaje, (2) Construcción sintáctica, (3) Selección léxica (**vía subléxica** aplicando Reglas de Conversión Fonema-Grafema RCFG vs **vía léxica/ortográfica** para palabras con ortografía arbitraria como *b/v, h, g/j, ll/y*), y (4) Procesos motores (selección de alógrafos y patrones motores musculares coordinados por el área de Exner, lóbulo frontal izquierdo).\n   - *Bereiter y Scardamalia (1987)*: 'Decir el conocimiento' (escritores inmaduros) vs 'Transformar el conocimiento' (escritores expertos).",
        "2. **Diagnóstico Diferencial ante una Muestra de Escritura (Unidad 4)**:\n   - **Disgrafía Motriz (Perceptivo-Motriz)**: Se altera la **grafía** (trazo, forma, tamaño, inclinación, espaciado, presión del lápiz, legibilidad y fluidez) sin que existan necesariamente errores ortográficos ni lectores.\n   - **Disortografía (Rivas y Fernández, 2011; Cervéra-Mérida e Ygual-Fernández, 2006)**: Afecta exclusivamente al **código ortográfico** y a la palabra escrita (no al trazado caligráfico ni necesariamente a la lectura). Distingue entre:\n     * *Errores en la vía subléxica (ortografía natural)*: omisiones, sustituciones de fonemas parecidos (/t/-/d/, /p/-/b/), inversiones de sílabas, uniones y fragmentaciones indebidas de palabras (disortografía temporal, perceptivo-kinestésica o disortocinética).\n     * *Errores en la vía léxica (ortografía arbitraria y reglada)*: faltas en *b/v, g/j, h, c/z/s, y/ll* y reglas de acentuación (disortografía visoespacial/semántica).",
        "3. **Intervención Basada en Procesos (Cuetos, 2018; Diéguez-Vide y Peña-Casanova, 2012)**: Recuerda señalar que los **cuadernos de caligrafía o copia reiterada sin supervisión son ineficaces** si no se acompaña de instrucción explícita en direccionalidad (para procesos motores), conciencia fonológica y segmentación léxica (para ortografía natural) o memoria visual ortográfica y familias léxicas (para ortografía arbitraria)."
      ],
      plantillaTarea: `# ACTIVIDAD 2: ANÁLISIS CLÍNICO DE CASOS REALES DE FALLOS EN ESCRITURA
**Asignatura:** Evaluación e Intervención en los Trastornos de la Lengua Escrita
**Docente:** David Sánchez Toribio

## 1. Análisis de las Muestras de Escritura por Procesos Cognitivos (Modelo de Cuetos, 2009)

| Proceso de Escritura | Qué se evalúa en la muestra | Errores / Indicadores Observados en el Caso |
| :--- | :--- | :--- |
| **1. Planificación del mensaje** | Generación de ideas, organización y coherencia textual (Hayes y Flower, 1980). | [Ej. Estilo "decir el conocimiento" (Bereiter y Scardamalia, 1987), escasa planificación previa]. |
| **2. Construcción sintáctica** | Estructura de las oraciones, uso de palabras funcionales (functores) y signos de puntuación. | [Ej. Agramatismo, ausencia de nexos o errores en signos de puntuación]. |
| **3. Recuperación Léxica (Vía Subléxica - RCFG)** | Ortografía natural: conversión fonema-grafema, secuencia fonológica y separación de palabras. | [Ej. Omisiones de letras, inversiones silábicas, sustituciones por punto/modo de articulación, hiposegmentación (*"elperro"*) o hipersegmentación (*"en tonces"*)]. |
| **4. Recuperación Léxica (Vía Léxica / Ortográfica)** | Ortografía arbitraria y reglada (almacén léxico ortográfico). | [Ej. Errores homófonos en grafemas inconsistentes (*b/v, h, g/j, ll/y*) y acentuación]. |
| **5. Procesos Motores (Grafomotricidad)** | Selección de alógrafos (mayúscula/minúscula, cursiva/script) y patrón motor gráfico (Área de Exner). | [Ej. Macrografía/micrografía, pérdida de la línea base, espaciado irregular, presión excesiva, trazo tembloroso o ilegible]. |

## 2. Diagnóstico Diferencial: ¿Disgrafía, Disortografía o Dislexia?
- **Clasificación clínica del caso:**
  - *En relación con la Disgrafía (Unidad 4, Cap. 2):* [Determinar si existe Disgrafía Evolutiva Motriz (afectación caligráfica/perceptivo-motriz) o Disgrafía como proyección de la dislexia].
  - *En relación con la Disortografía (Unidad 4, Cap. 3 - Otondo y Bascur, 2020; Rivas y Fernández, 2011):* [Especificar subtipo: **Temporal / Perceptivo-kinestésica / Disortocinética** (fallo auditivo-fonológico y en secuenciación/uniones) vs **Visoespacial** (rotación *b/d, p/q*, confusión en ortografía visual arbitraria) vs **Dinámica / Semántica**].
  - *Descarte de Dispedagogía (Mendes, 1978):* Valorar si el método de enseñanza ha respetado el ritmo madurativo del alumno.

## 3. Evaluación Estandarizada y No Estandarizada Propuesta
- **Pruebas de escritura:** **PROESC** (Batería de Evaluación de los Procesos de Escritura de Cuetos et al.) y **TALE** (subprueba de copia, dictado y escritura espontánea).
- **Pruebas perceptivas complementarias (Tabla 4, Unidad 4):** Batería BENHALE / Prueba Terrasa (percepción auditiva y visual), Test de Frostig (percepción visual) y Prueba de estructuras rítmicas de Stamback (percepción temporal).

## 4. Plan de Intervención Específica y Adaptaciones de Aula
1. **Intervención sobre los procesos léxicos y ortográficos (Rivas y Fernández, 2011):**
   - *Ortografía natural (vía subléxica):* Conciencia fonémica, conteo de palabras en la frase con palmadas/regletas antes de escribir (para corregir uniones y fragmentaciones) y discriminación auditiva.
   - *Ortografía arbitraria (vía léxica):* Ficheros cacográficos con apoyo visual/ideográfico de las palabras con *b/v/h/g/j* y agrupación por familias léxicas (evitando los dictados tradicionales sin preparación visual previa).
2. **Intervención sobre los procesos motores (si existe disgrafía motriz):**
   - Reeducación grafomotora explícita de la direccionalidad y secuenciación del trazo con modelado docente (evitando cuadernos de caligrafía mecánicos sin supervisión - Cuetos, 2018), uso de adaptadores de agarre o planos inclinados (*Slant Boards*).
3. **Adaptaciones en el aula ordinaria (Graham, 2014):**
   - Uso de organizadores gráficos previos a la redacción, priorizar el contenido sobre la caligrafía, reducir la carga de copia manual y permitir el uso de procesador de textos cuando sea necesario.

## 5. Referencias Bibliográficas (APA 7ª ed.)
- Cervéra-Mérida, J. F., e Ygual-Fernández, A. (2006). Una propuesta de intervención en trastornos disortográficos atendiendo a la semiología de los errores. *Rev Neurol*, 42(2), 117-126.
- Cuetos, F. (2009). *Psicología de la escritura*. WK Educación.
- Otondo, M., y Bascur, C. (2020). Disortografía y métodos de intervención educativa. *Praxis Pedagógica*, 20(27), 5-28.
- Rivas, R. M., y Fernández, M. P. (2011). *Dislexia, disortografía y disgrafía*. Pirámide.`
    },
    {
      id: "anat-act-2",
      asignaturaId: "anatomia",
      tipo: "Actividad 2",
      titulo: "Actividad 2: Caso Ficticio de Patología Neurológica o Anatómica del Lenguaje",
      fechaRecomendada: "2026-12-11",
      ventanaInicio: "2026-11-20",
      fechaLimite: "2027-01-21",
      puntos: 1.0,
      porcentaje: 10,
      unidadesRelacionadas: ["Unidad 1", "Unidad 2", "Unidad 3", "Unidad 4", "Unidad 5"],
      descripcion: "Realizar un caso ficticio de una persona con patología derivada de daño neurológico o anatómico relacionado con el lenguaje, habla, voz, audición y deglución.",
      objetivos: [
        "Realizar un caso ficticio de una persona con patología derivada de daño neurológico o anatómico relacionado con el lenguaje, habla, voz, audición y deglución.",
        "Aplicar los conocimientos adquiridos y comprender la lesión neurológica o anatómica y las alteraciones funcionales asociadas."
      ],
      resultadosAprendizaje: "Aplicar conocimientos adquiridos y comprender la lesión neurológica o anatómica y las alteraciones funcionales relacionadas con el lenguaje.",
      subtareas: [
        "Diseñar el perfil del paciente ficticio (edad, antecedentes, etiología de la lesión neurológica/anatómica).",
        "Localizar con precisión anatómica la lesión (ej. ACV/TCE en área de Broca o Wernicke + afectación de pares craneales o tronco encefálico/cerebelo).",
        "Describir cómo la lesión afecta a las funciones de lenguaje (comprensión/producción), habla (articulación/disartria), voz (fonación/disfonía), audición y deglución (disfagia).",
        "Entregar antes del 11 de diciembre de 2026 (fecha recomendada 100%)."
      ],
      guiaPasoAPaso: [
        "1. **Diseño Inteligente del Caso Ficticio**: Para cubrir los 5 ámbitos que pide la rúbrica (*lenguaje, habla, voz, audición y deglución*), puedes plantear un **caso clínico de daño neurológico adquirido** (por ejemplo, un Traumatismo Craneoencefálico -TCE- o Accidente Cerebrovascular -ACV- izquierdo que afecte a la región perisilviana frontal/temporal izquierda y al tronco del encéfalo/pares craneales IX, X y XII, o un caso pediátrico con síndrome de Landau-Kleffner / parálisis cerebral espástica-atáxica con hipoacusia neurosensorial asociada).",
        "2. **Correlación Anatomo-Clínica Exacta (El corazón del trabajo)**:\n   - *Lesión en SNC (Corteza cerebral / Lóbulo frontal izquierdo - Área de Broca 44/45 de Brodmann)* -> Produce **Afasia no fluente** (reducción del discurso, agramatismo, predominio de palabras de contenido sobre funcionales, anomia y fallo en la fase de formulación/ejecución del modelo de Fromkin).\n   - *Lesión en Vía Motora Corticobulbar / Cerebelo / Pares Craneales VII, X y XII* -> Produce **Disartria** (alteración en la fuerza, tono y coordinación de labios, lengua y velo del paladar) + **Disfonía neurógena** (por afectación del nervio vago X / laríngeo recurrente: cierre glótico incompleto, voz aérea y alteración del efecto Bernoulli) + **Disfagia neurógena** (alteración en la fase oral preparatoria por el XII par y en la fase faríngea/báscula laríngea por los pares IX y X).\n   - *Lesión en Vía Auditiva / Lóbulo Temporal (Área de Heschl / Wernicke o VIII par)* -> Alteración en la discriminación fonológica de sonidos del habla o hipoacusia neurosensorial.",
        "3. **Fundamentación en las 5 Unidades**: Conecta con la Unidad 1 (SNC: lóbulos cerebrales, cerebelo, tronco del encéfalo), Unidad 2 (SNP y oído interno/vía auditiva), Unidad 3 (Sistema fonoarticulatorio: cavidades infraglóticas, laringe, faringe y cavidad bucal), Unidad 4 (Modelo Multimodal Cerebral del Lenguaje de González y Hornauer-Hughes, 2014) y Unidad 5 (Percepción, comprensión y producción del lenguaje)."
      ],
      plantillaTarea: `# ACTIVIDAD 2: ESTUDIO DE CASO CLÍNICO FICTICIO DE PATOLOGÍA NEUROLÓGICA Y ANATÓMICA DEL LENGUAJE
**Asignatura:** Anatomía, Fisiología y Neurología del Lenguaje
**Docente:** Sara Prieto González

## 1. Presentación del Caso Clínico (Anamnesis e Historia Médica)
- **Paciente:** Varón de 9 años (o adulto de 52 años) que sufre un **Traumatismo Craneoencefálico (TCE)** tras accidente de tráfico (o Accidente Cerebrovascular isquémico en territorio de la arteria cerebral media izquierda y afectación bulboprotuberancial).
- **Pruebas de neuroimagen y exploración ORL:** La Resonancia Magnética Funcional (RMf) evidencia lesión cortical en el giro frontal inferior izquierdo (**Área de Broca** y corteza motora primaria), extensión parcial al giro temporal superior (**Área de Wernicke** / fascículo arqueado), contusión en el **hueso temporal izquierdo** (cóclea/VIII par) y afectación de pares craneales bulbares (**IX glosofaríngeo, X vago y XII hipogloso**).

## 2. Correlación Neuroanatómica y Fisiopatológica por Ámbitos

### 2.1. Afectación del Lenguaje (Comprensión y Producción - Unidades 1, 4 y 5)
- **Base neurológica:** Daño en el **Área de Broca (lóbulo frontal izquierdo)** y fibras del **fascículo arqueado** dentro del Modelo Multimodal Cerebral del Lenguaje (González y Hornauer-Hughes, 2014).
- **Repercusión funcional:** Presenta una **afasia adquirida de predominio no fluente** con **anomia** (dificultad en el acceso al léxico según el modelo de logogén de Morton, 1969), habla telegráfica (conserva palabras de contenido de clase abierta pero omite functores/palabras funcionales de clase cerrada) y alteración en las fases de *formulación* y *ejecución de planes lingüísticos* (Carroll, 2021).

### 2.2. Afectación del Habla y la Articulación (Unidades 1, 3 y 5)
- **Base neurológica y anatómica:** Afectación de la vía motora corticobulbar y de los **pares craneales VII (facial) y XII (hipogloso)**, encargados de inervar la musculatura perioral (orbicular de los labios) y lingual en la cavidad supraglótica (Renom et al., 2016).
- **Repercusión funcional:** Presenta **disartria flácida-espástica** con hipotonía en hemilengua derecha y debilidad en el sellado labial, provocando distorsión de fonemas bilabiales (/p/, /b/, /m/) e incapacidad para articular fonemas vibrantes y alveolares (/r/, /l/, /s/).

### 2.3. Afectación de la Voz y la Resonancia (Unidad 3)
- **Base neurológica y anatómica:** Lesión unilateral del **X par craneal (nervio vago)** en su rama del **nervio laríngeo recurrente**, que inerva los músculos intrínsecos de la laringe (tiroaritenoideo, cricoaritenoideo posterior y lateral) y el velo del paladar (Céruse et al., 2012).
- **Repercusión funcional:**
  - *Fonación:* Parálisis recurrencial unilateral en abducción -> defecto de cierre glótico que impide generar suficiente presión subglótica y altera el **efecto de Bernoulli**, produciendo una **disfonía orgánica** con voz aérea, soplante, bitonal y fatiga vocal (Giovanni et al., 2014).
  - *Resonancia:* Incompetencia velofaríngea por paresia del paladar blando, generando **hipernasalidad (rinolalia abierta)** al escaparse el aire hacia las fosas nasales en sonidos orales.

### 2.4. Afectación de la Audición (Unidad 2)
- **Base anatómica y neurológica:** Conmoción laberíntica en el oído interno izquierdo con daño en las células ciliadas del **Órgano de Corti** (membrana basilar de la cóclea) y fibras aferentes del **VIII par craneal (nervio vestibulococlear)** (Moreno-Restrepo et al., 2021).
- **Repercusión funcional:** **Hipoacusia neurosensorial moderada unilateral izquierda (55 dB)** acompañada de acúfenos y vértigo vestibular inicial, lo que dificulta la discriminación auditiva en ambientes ruidosos y altera el bucle de **autosupervisión** auditiva del propio habla.

### 2.5. Afectación de la Deglución (Unidad 3)
- **Base anatómica y neurológica:** Descoordinación entre la fase oral (XII par: propulsión lingual del bolo hacia las fauces) y la fase faríngea/laríngea (IX y X par: elevación del hioides, báscula epiglótica de cierre de la vía aérea y contracción de los músculos constrictores de la faringe).
- **Repercusión funcional:** **Disfagia orofaríngea neurógena** con riesgo de penetración/aspiración ante líquidos finos (activación de la función protectora y expectorante de la laringe mediante reflejo tusígeno).

## 3. Síntesis de Líneas de Rehabilitación Logopédica e Interdisciplinar
1. **Rehabilitación de la deglución y voz:** Terapia miofuncional, maniobras deglutorias posturales, espesantes para líquidos y ejercicios de coaptación glótica y coordinación fonorrespiratoria (soplo fonatorio costodiafragmático).
2. **Rehabilitación del habla y lenguaje:** Praxias fonoarticulatorias dirigidas a puntos de articulación, terapia de entonación melódica, tareas de evocación léxica por categorías semánticas y apoyo auditivo.

## 4. Referencias Bibliográficas (APA 7ª ed.)
- Carroll, D. W. (2021). *Psicología del lenguaje*. Thomson.
- Céruse, P., et al. (2012). Anatomía descriptiva, endoscópica y radiológica de la laringe. *EMC-Otorrinolaringología*, 41(3), 1-26.
- Diéguez-Vide, F., y Peña-Casanova, J. (2012). *Cerebro y lenguaje. Sintomatología neurolingüística*. Editorial Médica Panamericana.
- González, R., y Hornauer-Hughes, A. (2014). Afasia: una perspectiva clínica. *Revista del Hospital Clínico de la Universidad de Chile*, 25, 291-308.
- Smith-Ágreda, J. M. (2004). *Anatomía de los órganos del lenguaje, visión y audición*. Editorial Médica Panamericana.`
    },
    {
      id: "psico-act-2",
      asignaturaId: "psicopatologia",
      tipo: "Actividad 2",
      titulo: "Actividad 2: Representación Gráfica y Síntesis de un Artículo Científico (Unidad 5)",
      fechaRecomendada: "2026-12-11",
      ventanaInicio: "2026-11-20",
      fechaLimite: "2027-01-21",
      puntos: 1.0,
      porcentaje: 10,
      unidadesRelacionadas: ["Unidad 5"],
      descripcion: "Representar gráficamente la comprensión de uno de los artículos científicos propuestos en la Unidad 5, simplificando sus partes (antecedentes, metodología, objetivos, resultados, discusión, conclusión y referencias).",
      objetivos: [
        "Representar gráficamente la comprensión del contenido de uno de los artículos propuestos (Unidad 5: NEAE, RGD, ACI, TDAH o Incorporación tardía).",
        "Simplificar las partes expuestas en la investigación estudiada (antecedentes, metodología, objetivos, resultados, discusión, conclusión y referencias bibliográficas).",
        "Comunicar y difundir los resultados de una investigación de forma breve, visual y precisa."
      ],
      resultadosAprendizaje: "Comunicar y difundir los resultados de una investigación científica sobre alumnado NEAE (Unidad 5) de forma breve, estructurada y precisa.",
      subtareas: [
        "Seleccionar uno de los artículos científicos propuestos por la profesora en la carpeta de la Actividad 2 (Campus Virtual).",
        "Extraer las 7 secciones obligatorias de la rúbrica: (1) Antecedentes/Marco teórico, (2) Objetivos/Hipótesis, (3) Metodología (muestra, instrumentos, procedimiento), (4) Resultados principales, (5) Discusión, (6) Conclusiones e implicaciones para AL y (7) Referencias bibliográficas en APA 7ª ed.",
        "Diseñar el resumen visual / póster científico / mapa gráfico y entregarlo antes del 11 de diciembre de 2026 a las 23:59h."
      ],
      guiaPasoAPaso: [
        "1. **Las 7 Partes Obligatorias de la Rúbrica**: Asegúrate de que tu representación gráfica tenga bloques claramente rotulados para: **1. Antecedentes**, **2. Objetivos**, **3. Metodología**, **4. Resultados**, **5. Discusión**, **6. Conclusión** y **7. Referencias Bibliográficas**.",
        "2. **Conexión con los Contenidos de la Unidad 5**:\n   - Si el artículo trata sobre **TDAH** (ej. Vieites, 2019; Fuente, 2016; Balbuena, 2016): destaca el desequilibrio dopamina/noradrenalina (Schroeder y Gordon, 2002), las 3 presentaciones del DSM-5 (inatenta, hiperactiva-impulsiva y combinada), el déficit en atención voluntaria/selectiva/dividida y en la **memoria de trabajo** (ejecutivo central, bucle fonológico y agenda visoespacial de Baddeley) y memoria declarativa, así como las características lingüísticas (falta de coherencia discursiva, prosodia alterada, interrupciones en turnos de palabra).\n   - Si el artículo trata sobre **Altas Capacidades Intelectuales (ACI)** (ej. Ovalles, 2017; Sánchez, 2013): destaca el modelo de Castelló y Batlle (1998) (superdotación >P75 en todas las áreas, talento simple >P95, talento complejo >P80), la **Teoría de los Tres Anillos de Renzulli (2000)** (capacidad intelectual superior, alta dedicación a la tarea y altos niveles de creatividad), el **síndrome de disincronía** y las características lingüísticas (adquisición temprana, vocabulario extenso, comprensión de ironía/doble sentido, pero posibles dificultades pragmáticas por distinto centro de interés).\n   - Si trata sobre **Retraso Madurativo / RGD** (Álvarez et al., 2019; Vijande, 2021) o **Incorporación Tardía** (Sáez, 2021; Torre, 2008): vincula con el Art. 71 de la LOMLOE."
      ],
      plantillaTarea: `# ACTIVIDAD 2: SÍNTESIS GRÁFICA DE ARTÍCULO CIENTÍFICO (UNIDAD 5 - ALUMNADO NEAE)
**Asignatura:** Psicopatología de la Audición y el Lenguaje
**Docente:** Rocío Daniela Concha Ortiz

---

## TÍTULO DEL ARTÍCULO ANALIZADO
**[Título completo del artículo seleccionado]**
*Autores (Año) - Revista científica*

---

### 1. ANTECEDENTES Y MARCO TEÓRICO
- **Contextualización en la LOMLOE (Art. 71):** El alumnado con [TDAH / Altas Capacidades Intelectuales / Retraso Madurativo / Incorporación Tardía] se enmarca dentro de las **NEAE**.
- **Bases teóricas previas:** [Sintetizar en 3 viñetas los autores previos que cita el artículo, ej. DSM-5 (APA, 2013), Teoría de los tres anillos de Renzulli (2000) o modelos de atención y memoria operativa de Barkley (2006) y Enseñat (2015)].

### 2. OBJETIVOS DE LA INVESTIGACIÓN
- **Objetivo General:** [Verbo en infinitivo: Analizar / Evaluar / Diseñar...]
- **Objetivos Específicos / Hipótesis:**
  1. [...]
  2. [...]

### 3. METODOLOGÍA
- **Diseño del estudio:** [Cuantitativo / Cualitativo / Mixto / Revisión sistemática / Propuesta de intervención].
- **Muestra / Participantes:** [$N =$ participantes, rango de edad, etapa educativa (Primaria/Infantil)].
- **Instrumentos y variables:** [Pruebas estandarizadas, cuestionarios o materiales empleados].

### 4. RESULTADOS PRINCIPALES
- **Hallazgo 1:** [Dato clave o porcentaje principal].
- **Hallazgo 2 (Implicación cognitiva/lingüística):** [Ej. Afectación significativa en memoria de trabajo y atención selectiva / eficacia del aprendizaje cooperativo en la pragmática y respeto de turnos].

### 5. DISCUSIÓN
- **Contraste con la literatura:** Los resultados coinciden con lo expuesto en la Unidad 5 por autores como [Vieites (2019) / Fuente (2016) / Ovalles (2017) / Sáez (2021)], confirmando que las dificultades comunicativo-lingüísticas requieren una intervención psicoeducativa integral.

### 6. CONCLUSIONES E IMPLICACIONES PARA AUDICIÓN Y LENGUAJE
- La intervención desde Audición y Lenguaje debe partir de una **valoración individualizada** de las capacidades, necesidades comunicativas, ritmo de aprendizaje y contexto del alumno NEAE, promoviendo la inclusión en el aula ordinaria.

### 7. REFERENCIAS BIBLIOGRÁFICAS (APA 7ª ed.)
- [Referencia completa del artículo analizado en formato APA 7ª edición].
- Ley Orgánica 3/2020, de 29 de diciembre, por la que se modifica la Ley Orgánica 2/2006, de 3 de mayo, de Educación (LOMLOE). *BOE*, núm. 340.`
    },
    {
      id: "oral-act-2",
      asignaturaId: "oral",
      tipo: "Actividad 2",
      titulo: "Actividad 2: Análisis de Dificultades Lingüísticas por Niveles y Tabla Estructurada (Unidad 5)",
      fechaRecomendada: "2026-12-11",
      ventanaInicio: "2026-11-20",
      fechaLimite: "2027-01-21",
      puntos: 1.0,
      porcentaje: 10,
      unidadesRelacionadas: ["Unidad 5"],
      descripcion: "Analizar las dificultades lingüísticas de un caso en los distintos niveles del lenguaje (fonológico, morfosintáctico, semántico y pragmático), identificar las bases funcionales implicadas, justificar la alteración del desarrollo del lenguaje y sintetizar la información en una tabla estructurada.",
      objetivos: [
        "Analizar las dificultades lingüísticas a nivel fonológico, morfosintáctico, semántico y pragmático.",
        "Comprender las bases funcionales implicadas y establecer líneas de intervención.",
        "Relacionar los síntomas observados con una posible alteración del desarrollo del lenguaje (RSL, TDL, Mutismo selectivo o Afasia infantil) y sintetizar el caso en una tabla estructurada y coherente."
      ],
      resultadosAprendizaje: "Analiza las dificultades en los 4 niveles lingüísticos, identifica bases funcionales, justifica el diagnóstico diferencial y sintetiza el caso en una tabla estructurada aplicando criterios clínicos en contextos educativos reales.",
      subtareas: [
        "Leer el caso clínico de la Actividad 2 en el aula virtual de Lenguaje Oral.",
        "Completar la Tabla Estructurada de Análisis en los 4 niveles del lenguaje (Fonológico, Morfosintáctico, Léxico-Semántico y Pragmático) + Bases Funcionales (audición, órganos bucofonatorios, memoria fonológica a corto plazo, atención y funciones ejecutivas).",
        "Justificar el diagnóstico (ej. Retraso Simple del Lenguaje RSL vs Trastorno del Desarrollo del Lenguaje TDL vs Mutismo Selectivo vs Afasia Infantil Adquirida) y las líneas de intervención.",
        "Entregar antes del 11 de diciembre de 2026 (fecha recomendada 100%)."
      ],
      guiaPasoAPaso: [
        "1. **Diagnóstico Diferencial en la Unidad 5 (RSL vs TDL vs Mutismo vs Afasia Infantil)**:\n   - **Retraso Simple o Específico del Lenguaje (RSL / REL - Aguilera y Busto, 2012; Magdalena, 2020)**: Desfase cronológico (primeras palabras a los 24 meses, unión de 2 palabras a los 3 años), el lenguaje evoluciona en el orden habitual pero más lento; la **comprensión está mucho más preservada que la expresión**, afecta sobre todo a fonología (habla infantilizada con estructuras CV y fonemas /m/, /p/, /t/) y morfosintaxis simple, con **buena respuesta a la intervención y escasa repercusión en el lenguaje escrito**.\n   - **Trastorno del Desarrollo del Lenguaje (TDL - Ahufinger et al., 2021; Bishop et al., 2017)**: Dificultades severas, duraderas y **persistentes a partir de los 4 años**, afecta tanto a expresión como a comprensión, presenta un marcador fenotípico clave de **limitación en la memoria fonológica a corto plazo** (repetición de pseudopalabras) y procesamiento de secuencias rápidas, con **alta repercusión en el aprendizaje escolar (lectoescritura) y en la interacción social/emocional**.\n   - **Mutismo Selectivo (López, 2019)**: Inhibición persistente del habla en situaciones sociales específicas (ej. escuela) pese a hablar con fluidez en otros contextos (ej. hogar con padres); origen vinculado a ansiedad.\n   - **Afasia Infantil Adquirida (Campos y Gimeno, 2011; Yáñez, 2011)**: Pérdida parcial o total del lenguaje ya iniciado debido a una **lesión cerebral focal sobrevenida** (TCE, tumor, infección o accidente vascular).",
        "2. **Análisis de las Bases Funcionales Implicadas**: No olvides incluir en tu análisis: (a) Audición y discriminación auditivo-fonológica, (b) Órganos bucofonatorios y praxias, (c) **Memoria de trabajo y memoria fonológica a corto plazo** (almacén fonológico), y (d) Atención y funciones ejecutivas.",
        "3. **Tabla Estructurada Coherente**: Utiliza la plantilla inferior que cruza cada nivel lingüístico con: *Síntomas observados en el caso*, *Pruebas de evaluación específicas* (ITPA, BLOC, PLON-R, CELF-5, Peabody, RFI, Test de Boston/Token Test) y *Líneas y actividades de intervención desde AL*."
      ],
      plantillaTarea: `# ACTIVIDAD 2: ANÁLISIS LINGÜÍSTICO POR NIVELES Y DIAGNÓSTICO EN ALTERACIONES DEL DESARROLLO DEL LENGUAJE
**Asignatura:** Evaluación e Intervención en los Trastornos del Lenguaje Oral
**Docente:** Soraya Rodríguez Hernández

## 1. Identificación y Justificación de la Alteración del Desarrollo del Lenguaje
- **Hipótesis diagnóstica principal:** [Trastorno del Desarrollo del Lenguaje (TDL) / Retraso Simple del Lenguaje (RSL) / Mutismo Selectivo / Afasia Infantil Adquirida].
- **Justificación clínica y diagnóstico diferencial (Unidad 5):**
  - *Persistencia y edad (>4 años en TDL vs evolución favorable en RSL):* [...]
  - *Grado de afectación comprensiva y expresiva:* [...]
  - *Repercusión funcional en lectoescritura y socialización (Ahufinger et al., 2021; Bishop et al., 2017):* [...]

## 2. Análisis de las Bases Funcionales Implicadas
1. **Bases neurobiológicas y cognitivas (Memoria y Atención):** Limitación en la **memoria fonológica a corto plazo** (dificultad para retener y repetir segmentos breves de la cadena hablada y pseudopalabras) y en la velocidad de procesamiento secuencial auditivo (Ahufinger et al., 2021).
2. **Bases auditivas y perceptivas:** Audición periférica normal (descarte de hipoacusia), pero déficit en la discriminación fonológica fina.
3. **Bases anatomofuncionales (Órganos bucofonatorios):** Integridad anatómica de labios, lengua y paladar, con posibles dificultades práxicas secuenciales.

## 3. Tabla Estructurada de Análisis Lingüístico e Intervención por Niveles

| Nivel del Lenguaje | Dificultades y Síntomas Observados en el Caso | Instrumentos de Evaluación Específicos | Líneas de Intervención y Actividades desde AL |
| :--- | :--- | :--- | :--- |
| **1. Nivel Fonético-Fonológico** | Habla ininteligible o infantilizada, persistencia de procesos de simplificación fonológica (reducción de grupos consonánticos, omisión de sílabas átonas y consonantes finales), dificultad para secuenciar fonemas en palabras largas. | **RFI** (Registro Fonológico Inducido), **PEFF**, subprueba fonológica de **PLON-R** y repetición de pseudopalabras. | - Discriminación auditiva de contrastes mediante **pares mínimos**.<br>- Conciencia fonológica (silábica y fonémica) como puente hacia la lectoescritura.<br>- Apoyo visual y gestual para la secuenciación silábica. |
| **2. Nivel Morfosintáctico** | Enunciados cortos o desorganizados (estilo telegráfico), omisión de **palabras funcionales** (artículos, preposiciones, pronombres clíticos), errores de concordancia de género/número y en tiempos verbales o subordinación. | **BLOC** (Batería de Lenguaje Objetiva y Criterial), **CELF-5**, **ITPA** (cierre gramatical) y **TSA** de Aguado. | - Modelado, **expansión y reformulación** de las frases del niño.<br>- Apoyo visual mediante **trenes de palabras / códigos de color** (Sujeto + Verbo + Complemento, ej. *Soy Visual* / ARASAAC).<br>- Cuentos estructurados con patrones sintácticos repetitivos. |
| **3. Nivel Léxico-Semántico** | Vocabulario expresivo y receptivo reducido, dificultad en **conceptos abstractos** y espacio-temporales, problemas de acceso al léxico (**anomia** / circunloquios), abuso de palabras comodín (*"esto", "cosa"*). | **Test de Vocabulario en Imágenes Peabody (PPVT-III)**, Test de Denominación de Boston (**BNT**), subpruebas léxicas de **ITPA**. | - Agrupación y categorización por **campos semánticos**.<br>- Juegos de relaciones léxicas (asociación, opuestos, familias de palabras, definiciones funcionales *¿para qué sirve?*).<br>- Mapas semánticos visuales en el aula. |
| **4. Nivel Pragmático y Discursivo** | Dificultad para iniciar y mantener turnos conversacionales, baja iniciativa comunicativa o uso de gestos compensatorios, problemas de coherencia/cohesión al narrar experiencias o comprender inferencias e intenciones sociales. | Escala de observación pragmática, **PLON-R** (uso del lenguaje), análisis de muestras de lenguaje espontáneo en recreo y aula. | - **Juego simbólico** cooperativo y dramatizaciones (*role-playing*).<br>- Guiones sociales, historias sociales y entrenamiento en habilidades conversacionales (pedir ayuda, formular preguntas, narrar secuencias temporales con viñetas). |

## 4. Orientaciones para el Aula Ordinaria y la Familia
- **En el aula:** Apoyos visuales permanentes, simplificar y fragmentar las instrucciones verbales complejas, verificar la comprensión de forma individual y coordinar el trabajo entre maestro AL, tutor y PT.
- **En la familia:** Estimulación natural en rutinas cotidianas, lectura compartida de cuentos interactivos y evitar la presión o corrección directa punitiva.

## 5. Referencias Bibliográficas (APA 7ª ed.)
- Ahufinger, N., Ferinu, L., Pacheco-Vera, F., Sanz-Torrent, M., y Andreu, L. (2021). El trastorno del desarrollo del lenguaje (TDL) más allá de las dificultades lingüísticas: Memoria y atención. *Revista de Logopedia, Foniatría y Audiología*, 41(1), 4-16.
- Bishop, D. V., et al. (2017). Phase 2 of CATALISE: A multinational and multidisciplinary Delphi consensus study of problems with language development: Terminology. *Journal of Child Psychology and Psychiatry*, 58(10), 1068-1080.
- Magdalena, D. T. (2020). *Trastorno del desarrollo del lenguaje y bilingüismo*. Universidad de La Laguna.`
    },
    {
      id: "saac-act-2",
      asignaturaId: "saac",
      tipo: "Actividad 2",
      titulo: "Actividad 2: Implementación de SAAC en TEA y Discapacidad Física (Unidades 3 y 4)",
      fechaRecomendada: "2026-12-11",
      ventanaInicio: "2026-11-20",
      fechaLimite: "2027-01-21",
      puntos: 1.0,
      porcentaje: 10,
      unidadesRelacionadas: ["Unidad 3", "Unidad 4"],
      descripcion: "Trabajo individual sobre el diseño y aplicación de SAAC en alumnado con TEA (PECS, Habla Signada de Schaeffer, SPC) y alumnado con discapacidad física/motora (Bliss, Minspeak, Rebus, ARASAAC y productos de acceso). (Fecha estándar UCJC - editable).",
      objetivos: [
        "Comparar y aplicar las fases del sistema PECS y del Programa de Habla Signada de Benson Schaeffer en alumnado con TEA.",
        "Seleccionar el SAAC (Bliss, SPC, Minspeak, Rebus, ARASAAC) y la estrategia de acceso (directa, ratón adaptado, barrido) en alumnado con discapacidad física/parálisis cerebral."
      ],
      resultadosAprendizaje: "Diseña programas de intervención paso a paso con SAAC adaptados a las características cognitivas, comunicativas y motrices de alumnos con TEA y discapacidad física.",
      subtareas: [
        "Revisar el enunciado de la Actividad 2 en el aula virtual de SAAC.",
        "Desarrollar la secuencia de implementación en TEA (prelación de objetivos y las 6 fases de PECS o las fases de Schaeffer).",
        "Desarrollar la selección de SAAC y productos de apoyo para el acceso en discapacidad motora (Unidad 4).",
        "Entregar antes del 11 de diciembre de 2026."
      ],
      guiaPasoAPaso: [
        "1. **Prelación de Objetivos en TEA (Unidad 3, epígrafe 3.1)**: (1º) Trabajar la comunicación funcional para expresar necesidades/deseos, (2º) Trabajar la comprensión por encima de la expresión, (3º) Trabajar la interpretación global del lenguaje y pensamiento coherente, (4º) Trabajar la expresión motora fina/inteligibilidad.",
        "2. **Las 6 Fases de PECS vs Habla Signada de Schaeffer**:\n   - *PECS*: Fase I (Cómo comunicarse: intercambio físico coger-entregar-recibir con 2 entrenadores y encadenamiento hacia atrás), Fase II (Distancia y persistencia), Fase III (Discriminación de imágenes), Fase IV (Estructura de la oración con tira-frase 'Quiero + ítem'), Fase V (Responder a '¿Qué quieres?'), Fase VI (Comentar: '¿Qué ves?', '¿Qué oyes?').\n   - *Schaeffer*: Comunicación bimodal / habla signada. Empieza por expresar deseos (petición), luego referencia, conceptos personales, habilidades de conversación. Usa moldeamiento, encadenamiento hacia atrás y espera estructurada, cuidando las **ecopraxias**.",
        "3. **SAAC y Acceso en Discapacidad Física (Unidad 4)**:\n   - Distingue **Sistema BLISS** (símbolos pictográficos, ideográficos y abstractos combinables con reglas sintácticas; colores: amarillo=personas, verde=verbos, azul=adjetivos, naranja=objetos, blanco=miscelánea, rosa=social) frente a **SPC / ARASAAC** (mayor iconicidad, ~16.200 pictogramas en color en ARASAAC) y **Minspeak** (compactación semántica).\n   - Especifica las **5 estrategias de acceso**: Selección directa, Selección con ratón adaptado (joystick, trackball, ratón facial/cefálico, lector ocular), Barrido dependiente (interlocutor señala o tablero transparente *E-tran*), Barrido independiente automático/dirigido por conmutador/pulsador y Acceso codificado."
      ],
      plantillaTarea: `# ACTIVIDAD 2: DISEÑO DE INTERVENCIÓN CON SAAC EN ALUMNADO CON TEA Y DISCAPACIDAD FÍSICA
**Asignatura:** Sistemas Aumentativos y Alternativos de la Comunicación y las TIC

## 1. Intervención con SAAC en Alumnado con TEA (Unidad 3)
### 1.1. Jerarquía de Objetivos y Nivel de Abstracción Simbólica
- **Secuencia de abstracción visual:** Objeto real -> Fotografía idéntica -> Fotografía no idéntica -> Pictograma en color (ARASAAC/SPC) -> Pictograma en blanco y negro -> Palabra escrita.
- **Aplicación de las 6 Fases de PECS / Programa de Benson Schaeffer:**
  - *Fase I (Intercambio físico):* Moldeamiento con dos adultos (interlocutor y ayudante físico) y retirada progresiva de ayuda por **encadenamiento hacia atrás**.
  - *Fase II (Distancia y persistencia):* Desplazamiento hacia el libro/panel de comunicación y búsqueda de la mirada del receptor.
  - *Fase III (Discriminación):* Elección entre un ítem preferido y un distractor no preferido.
  - *Fase IV a VI (Tira-frase y funciones declarativas):* Construcción de *"Quiero + [pictograma]"*, respuesta a *"¿Qué quieres?"* y comentarios (*"Veo..."*).

## 2. Intervención con SAAC en Alumnado con Discapacidad Física (Unidad 4)
### 2.1. Valoración Motora y Selección del Sistema Simbólico
- **Perfil motor (Soto, 2012):** Alteración neuromotora (parálisis cerebral espástica/atáxica/distónica) con disartria severa o anartria, pero buena comprensión lingüística.
- **Sistema de símbolos elegido:** **Sistema BLISS / SPC / ARASAAC** implementado en un comunicador dinámico con salida de voz (*Grid 3* o *Asterics Grid*), organizado con el código de colores estándar (Amarillo: personas; Verde: verbos; Azul: descriptivos; Naranja: nombres; Rosa: social; Blanco: miscelánea).

### 2.2. Productos de Apoyo y Estrategia de Acceso (CEAPAT, 2021)
- **Soporte principal:** Tablet con brazo articulado / atril adaptado a la silla de ruedas y tablero transparente (*E-tran frame*) de respaldo en baja tecnología.
- **Método de acceso seleccionado:** **Lector ocular (*eye-tracking*)** y/o **barrido automático por filas y columnas** accionado mediante un pulsador cefálico.`
    },

    // --- PORTFOLIOS FINALES (Enero 2027) ---
    {
      id: "escr-portfolio",
      asignaturaId: "escrita",
      tipo: "Portfolio Final",
      titulo: "Portfolio Final: Reflexión y Recorrido por Trastornos de la Lengua Escrita",
      fechaRecomendada: "2027-01-03",
      ventanaInicio: "2026-12-15",
      fechaLimite: "2027-01-21",
      puntos: 1.0,
      porcentaje: 10,
      unidadesRelacionadas: ["Unidad 1", "Unidad 2", "Unidad 3", "Unidad 4", "Unidad 5"],
      descripcion: "Realización y entrega individual del portfolio final relacionando las sesiones de clase, los contenidos de los Temas 1 a 5 y las actividades prácticas, incluyendo autoevaluación y reflexión final.",
      objetivos: [
        "Sintetizar el recorrido de aprendizaje a través de los Temas 1, 2, 3, 4 y 5 de la asignatura.",
        "Relacionar las bases teóricas y neurocognitivas con las actividades prácticas y talleres realizados.",
        "Realizar un ejercicio honesto y fundamentado de autoevaluación y reflexión metacognitiva."
      ],
      resultadosAprendizaje: "Tendrá un conocimiento global e integrado de su recorrido por la asignatura de Evaluación e Intervención en los Trastornos de la Lengua Escrita.",
      subtareas: [
        "Haber completado las Actividades 1 y 2 y los Talleres 1 y 2, y haber visualizado las 8 sesiones síncronas.",
        "Redactar la síntesis integradora de las 5 unidades (Perspectiva multifocal, Sistema de lectura y escritura, Dislexia, Disgrafía/Disortografía y Discalculia).",
        "Vincular los aprendizajes teóricos con los casos prácticos resueltos durante el cuatrimestre.",
        "Incluir el apartado de Autoevaluación y Reflexión Final y entregar antes del 3 de enero de 2027 (100% nota)."
      ],
      guiaPasoAPaso: [
        "1. **Mapa del Recorrido (Temas 1 a 5)**: Conecta cómo los procesos subyacentes del Tema 1 (conciencia fonológica, RCGF vs RCFG, sistema transparente en lectura pero más opaco en escritura en español) y los modelos cognitivos/neurobiológicos del Tema 2 (circuito dorsal temporoparietal vs ventral occipitotemporal, Modelo Dual de Coltheart, Modelos de escritura de Hayes y Flower y de Cuetos) te han permitido diagnosticar e intervenir en **Dislexia** (Tema 3), **Disgrafía y Disortografía** (Tema 4) y **Discalculia** (Tema 5).",
        "2. **Conexión Teoría-Práctica**: Explica qué aprendiste al resolver el Taller 1 (evaluación de lectura), el Taller 2 (lectura y discalculia), la Actividad 1 (caso de dislexia fonológica) y la Actividad 2 (muestras reales de escritura).",
        "3. **Reflexión Profesional como Futuro Maestro de AL y Autoevaluación**: Valora tu evolución en pensamiento clínico, tus fortalezas, las dificultades superadas y tu calificación razonada de autoevaluación."
      ],
      plantillaTarea: `# PORTFOLIO FINAL: RECORRIDO Y REFLEXIÓN EN TRASTORNOS DE LA LENGUA ESCRITA
**Asignatura:** Evaluación e Intervención en los Trastornos de la Lengua Escrita
**Docente:** David Sánchez Toribio

## 1. Introducción y Propósito del Portfolio
Este portfolio recoge de forma reflexiva e integrada el recorrido formativo realizado a lo largo de las cinco unidades y las ocho sesiones síncronas de la asignatura, conectando la evidencia neurocognitiva sobre el lenguaje escrito con la práctica clínica y educativa del maestro especialista en Audición y Lenguaje.

## 2. Síntesis Integradora de las Unidades 1 a 5
- **Unidad 1 (Bases teóricas desde una perspectiva multifocal):** Evolución hacia el concepto de *aprendizaje del lenguaje escrito*, distinción entre procesos automáticos (bajo nivel) y controlados (superiores), papel predictor de la conciencia fonológica y asimetría del sistema ortográfico español (transparente en lectura mediante RCGF, más opaco en escritura por grafemas inconsistentes en las RCFG).
- **Unidad 2 (El sistema de lectura y escritura):** Circuito lector cortical (dorsal temporoparietal / vía subléxica vs ventral occipitotemporal / vía léxica), Modelo de Doble Ruta en Cascada (Coltheart et al., 2001) y Modelo Conexionista en Triángulo (Seidenberg y McClelland, 1989); y en escritura, los modelos de Hayes y Flower (1980), Cuetos (2009) y Bereiter y Scardamalia (1987).
- **Unidad 3 (Dislexia: evaluación e intervención):** Criterios DSM-5 y consenso Delphi de Carroll et al. (2025), diferenciación entre dislexias adquiridas (fonológica, superficial y profunda) y evolutivas, evaluación con PROLEC-R y DST-J, e intervención centrada en precisión, velocidad y conciencia fonológica (Cuetos, 2018; García y Pedrosa, 2020).
- **Unidad 4 (Disgrafía y Disortografía):** Distinción entre la alteración perceptivo-motriz del trazado (disgrafía motriz) y la alteración específica del código ortográfico sin afectación lectora necesaria (disortografía), junto con su evaluación (PROESC, TALE) y reeducación.
- **Unidad 5 (Discalculia):** Desarrollo del sentido numérico y la línea numérica mental (Coelho, 2012), errores de transcodificación, seriación y valor posicional, relación diferencial con la dislexia y estrategias de intervención manipulativa y secuenciada.

## 3. Vinculación entre la Teoría y las Actividades Prácticas Realizadas
- **Aportaciones de los Talleres Prácticos 1 y 2:** [...]
- **Aprendizajes clave en la Actividad 1 (Caso de lectura fonológica) y Actividad 2 (Casos reales de escritura):** [...]

## 4. Reflexión Final y Autoevaluación del Aprendizaje
- **Evolución hacia el pensamiento clínico como especialista en AL:** [...]
- **Fortalezas desarrolladas y aspectos de mejora:** [...]
- **Autoevaluación razonada:** [...]`
    },
    {
      id: "psico-portfolio",
      asignaturaId: "psicopatologia",
      tipo: "Portfolio Final",
      titulo: "Portfolio Final: Síntesis Individual de Psicopatología de la Audición y el Lenguaje",
      fechaRecomendada: "2027-01-08",
      ventanaInicio: "2026-12-15",
      fechaLimite: "2027-01-21",
      puntos: 1.0,
      porcentaje: 10,
      unidadesRelacionadas: ["Unidad 1", "Unidad 2", "Unidad 3", "Unidad 4", "Unidad 5"],
      descripcion: "Resumir todo lo visto y trabajado en las Unidades 1 a 5 de la asignatura, incluyendo reflexión crítica y síntesis de la experiencia individual de estudio.",
      objetivos: [
        "Resumir todo lo visto y trabajado en la asignatura de forma individual.",
        "Sintetizar la experiencia individual del estudio de la psicopatología de la audición y el lenguaje.",
        "Integrar las actividades prácticas, talleres y sesiones síncronas con una autoevaluación reflexiva."
      ],
      resultadosAprendizaje: "Sintetizar la experiencia individual del estudio de la psicopatología de la audición y el lenguaje articulando las 5 unidades del temario.",
      subtareas: [
        "Haber entregado previamente las Actividades 1 y 2 y los Talleres 1 y 2.",
        "Sintetizar las ideas fuerza de las Unidades 1, 2, 3, 4 y 5.",
        "Reflexionar sobre la complementariedad entre el modelo médico y el modelo educativo/conductual bajo el paraguas inclusivo de la LOMLOE.",
        "Entregar antes del 8 de enero de 2027 a las 23:59h (100% nota)."
      ],
      guiaPasoAPaso: [
        "1. **Hilo Conductor de las 5 Unidades**:\n   - *Unidad 1*: Concepto de psicopatología infantil, complementariedad entre el **Modelo Médico** (sintomatología: signos vs síntomas; etiología: orgánica, funcional, endocrina, ambiental; etiopatogenia) y el **Modelo Conductual/Educativo** (niveles de Bloom y Lahey: fonético, fonológico, morfosintáctico, semántico y pragmático), equivalencias DSM-5 vs CIE-11 y marco LOMLOE (NEAE vs NEE).\n   - *Unidad 2*: Trastornos de la Comunicación en el DSM-5 (TL, TSH, TFI/Tartamudez, TCS) y Trastornos del Habla (TSH fonético/fonológico, Disglosia labial/mandibular/lingual/palatina, Disartria y Disfonía funcional/orgánica/psicógena/espasmódica).\n   - *Unidad 3*: Consenso Delphi 2026 sobre TDL vs TL vs ITL (Andreu et al., 2026), TANV, Afasias (congénita, infantil adquirida, fluente/no fluente, Landau-Kleffner), Dislexia, Disortografía, Discalculia, Disgrafía e Hipergrafía.\n   - *Unidad 4*: NEE asociadas a discapacidad (Art. 73 LOMLOE): DI (enfoque biopsicosocial AAIDD 2021 y niveles de apoyo), Discapacidad Física, Discapacidad Auditiva (grados dB, audífonos vs IC), TEA (grados 1-3 y afectación por planos) y TGC.\n   - *Unidad 5*: Alumnado NEAE (Art. 71 LOMLOE): Retraso Madurativo (<5 años), Altas Capacidades (Renzulli, Castelló y Batlle, disincronía), TDAH (atención y memoria de trabajo), Incorporación Tardía (apoyo idiomático y aulas de acogida) y Condiciones personales/historia escolar.",
        "2. **Reflexión y Autoevaluación**: Conecta cada unidad con las evidencias de tus entregas (Taller 1, Taller 2, Actividad 1, Actividad 2) y valora tu crecimiento competencial."
      ],
      plantillaTarea: `# PORTFOLIO FINAL: PSICOPATOLOGÍA DE LA AUDICIÓN Y EL LENGUAJE
**Asignatura:** Psicopatología de la Audición y el Lenguaje
**Docente:** Rocío Daniela Concha Ortiz

## 1. Introducción
Presentación del recorrido formativo realizado a lo largo del primer semestre en la asignatura, integrando los marcos diagnósticos clínicos (DSM-5, CIE-11, AAIDD 2021 y Consenso Delphi 2026) con el marco educativo inclusivo de la LOMLOE.

## 2. Síntesis Reflexiva por Unidades Didácticas
### Unidad 1: Hacia el conocimiento de la psicopatología de la audición y el lenguaje
- Complementariedad entre el **modelo médico** (sintomatología, etiología y etiopatogenia para comprender el diagnóstico) y el **modelo conductual o educativo** (estructuración en los niveles fonético, fonológico, morfosintáctico, contenido/semántico y uso/pragmático para programar la intervención).
- Diferenciación normativa en la LOMLOE entre la categoría amplia de **NEAE (Art. 71)** y el grupo específico de **NEE (Art. 73)**.

### Unidad 2: Trastornos de la comunicación y el habla
- Taxonomía diferencial de los Trastornos de la Comunicación (TL, TSH, TFI, TCS) y de los Trastornos del Habla (alteraciones fonéticas vs fonológicas, disglosias orgánicas periféricas, disartrias neuromotoras y disfonías funcionales, orgánicas, psicógenas y espasmódicas).

### Unidad 3: Trastornos del lenguaje oral y del aprendizaje
- Avances del **Consenso Delphi hispanohablante (Andreu et al., 2026)** en la distinción entre Inicio Tardío del Lenguaje (ITL), Trastorno del Lenguaje (TL) y Trastorno del Desarrollo del Lenguaje (TDL, sin condición biomédica explicativa y diagnosticable a partir de los 4 años).
- Parámetros diferenciadores del TANV, las afasias (incluyendo el síndrome de Landau-Kleffner) y los trastornos del aprendizaje (dislexia, disortografía, discalculia, disgrafía e hipergrafía).

### Unidad 4: Psicopatología en NEE asociadas a discapacidad
- Cambio de paradigma en Discapacidad Intelectual hacia el modelo multidimensional de la AAIDD (Schalock et al., 2021) basado en la intensidad de los apoyos (intermitente, limitado, extenso, generalizado).
- Características comunicativo-lingüísticas y apoyos en discapacidad física, auditiva (audífonos vs implante coclear), TEA y TGC.

### Unidad 5: Psicopatología en el alumnado con NEAE
- Abordaje desde Audición y Lenguaje del Retraso Madurativo (RGD <5 años), las Altas Capacidades Intelectuales (modelo de los tres anillos de Renzulli y síndrome de disincronía), el TDAH (déficit atencional, memoria operativa y discurso) y las medidas de Apoyo Idiomático y Aulas de Acogida en incorporación tardía.

## 3. Integración de Evidencias Prácticas (Talleres y Actividades)
- **Taller 1 (Estudio de caso real - Unidad 2):** [...]
- **Actividad 1 (Perfiles NEAE - Unidad 3):** [...]
- **Taller 2 (Infografía NEE y NEAE - Unidades 4 y 5):** [...]
- **Actividad 2 (Síntesis gráfica de artículo científico - Unidad 5):** [...]

## 4. Autoevaluación y Conclusión Personal
[Reflexión crítica sobre las competencias adquiridas como futuro especialista en Audición y Lenguaje].`
    },
    {
      id: "anat-portfolio",
      asignaturaId: "anatomia",
      tipo: "Portfolio Final",
      titulo: "Portfolio Final: Resumen Global y Reflexión en Anatomía, Fisiología y Neurología del Lenguaje",
      fechaRecomendada: "2027-01-12",
      ventanaInicio: "2026-12-15",
      fechaLimite: "2027-01-21",
      puntos: 1.0,
      porcentaje: 10,
      unidadesRelacionadas: ["Unidad 1", "Unidad 2", "Unidad 3", "Unidad 4", "Unidad 5"],
      descripcion: "Trabajo final o presentación resumen de todo lo trabajado en la asignatura, analizando los contenidos y actividades realizadas de manera individual e incluyendo autoevaluación y reflexión (Fecha recomendada: entre el 15 dic y 15 ene).",
      objetivos: [
        "Analizar los contenidos y actividades realizadas en la asignatura de manera individual.",
        "Demostrar el trabajo e implicación del alumno en la asignatura a lo largo del cuatrimestre.",
        "Incluir autoevaluación y reflexión sobre el aprendizaje neuroanatómico y fisiológico."
      ],
      resultadosAprendizaje: "Demostrar el dominio global de las bases anatómicas, fisiológicas y neurológicas del lenguaje y su aplicación práctica.",
      subtareas: [
        "Recopilar y revisar los aprendizajes de las Unidades 1 a 5 y de las Actividades 1 y 2 y Talleres 1 y 2.",
        "Elaborar el documento o presentación resumen conectando SNC, SNP/Receptores, Sistema Fonoarticulatorio, Dimensiones/Componentes del Lenguaje y Procesos de Percepción/Comprensión/Producción.",
        "Incluir el apartado de autoevaluación y entregar dentro de la ventana recomendada (15 diciembre 2026 – 15 enero 2027)."
      ],
      guiaPasoAPaso: [
        "1. **Síntesis de las 5 Unidades**:\n   - *Unidad 1*: SNC (sustancia gris vs blanca/mielina, médula espinal con 31 pares espinales, encéfalo: lóbulos cerebrales frontal/parietal/temporal/occipital/insular, cuerpo calloso, cerebelo y pedúnculos cerebelosos, tronco del encéfalo: mesencéfalo, protuberancia y bulbo).\n   - *Unidad 2*: SNP y órganos receptores (receptores exteroceptivos, propioceptivos e interoceptivos; oído externo, oído medio con cadena osicular que amplifica 22x, oído interno con cóclea/Órgano de Corti y vestíbulo; fisiología del sonido y globo ocular).\n   - *Unidad 3*: Sistema fonoarticulatorio (cavidades infraglóticas: diafragma, pulmones, tráquea; laringe: cartílagos tiroides, cricoides, aritenoides y corniculados, efecto Bernoulli en la fonación; cavidades supraglóticas: rinofaringe, orofaringe, laringofaringe, cavidad bucal, paladar duro/blando, lengua, glándulas salivales y fosas nasales).\n   - *Unidad 4*: Requisitos del lenguaje humano (intercambiabilidad, retroalimentación, especialización, semanticidad, arbitrariedad, carácter discreto, desplazamiento), Modelo Multimodal Cerebral del Lenguaje (Broca, Wernicke, Fascículo Arqueado, Giro Angular y Supramarginal), funciones de Jakobson y componentes (fonemas, morfemas, léxico, sintaxis, discurso).\n   - *Unidad 5*: Percepción del habla (modularidad, percepción categórica, teoría motora y efecto McGurk), percepción de la lectura (movimientos sacádicos, regresiones, fijaciones, modelo de activación interactiva de McClelland y Rumelhart), acceso al léxico (Forster vs Morton) y producción del habla (conceptualización, formulación de Fromkin, articulación y autosupervisión).",
        "2. **Integración de Tareas y Reflexión**: Conecta con tu trabajo de Pares Craneales (Actividad 1) y Caso Ficticio Neurológico (Actividad 2)."
      ],
      plantillaTarea: `# PORTFOLIO FINAL: ANATOMÍA, FISIOLOGÍA Y NEUROLOGÍA DEL LENGUAJE
**Asignatura:** Anatomía, Fisiología y Neurología del Lenguaje
**Docente:** Sara Prieto González

## 1. Mapa Conceptual y Resumen de Contenidos (Unidades 1 a 5)
1. **Unidad 1 - Sistema Nervioso Central (SNC):** Neurona, sustancia gris y blanca, médula espinal, lóbulos cerebrales (Frontal-Broca, Temporal-Wernicke, Parietal, Occipital, Insular), hemisferios, cerebelo y tronco encefálico.
2. **Unidad 2 - Sistema Nervioso Periférico (SNP) y Receptores Sensoriales:** Nervios periféricos, anatomía y fisiología de la audición (oído externo, cadena osicular del oído medio con amplificación 22x, cóclea y Órgano de Corti en el oído interno), grados y tipos de pérdida auditiva y anatomía del sistema visual.
3. **Unidad 3 - Sistema Fonoarticulatorio y Fonación:** Cavidades infraglóticas (mecánica respiratoria diafragmática), laringe (cartílagos, pliegues vocales y teoría mioelástica-aerodinámica / Efecto Bernoulli) y cavidades supraglóticas resonanciales y articulatorias.
4. **Unidad 4 - Organización Fisiológica del Lenguaje (I):** Dimensiones estructural (Modelo Multimodal Cerebral del Lenguaje), funcional (cognitiva, comunicativa y modelo de Jakobson) y comportamental, y análisis de fonemas, morfemas, vocabulario, sintaxis y discurso.
5. **Unidad 5 - Organización Fisiológica del Lenguaje (II):** Percepción del habla (percepción categórica, efecto McGurk, reconstrucción fonológica), movimientos oculares en la lectura, modelos de acceso al léxico (búsqueda de Forster y logogén de Morton) y fases de producción del lenguaje (conceptualización, formulación de Fromkin, articulación y autosupervisión).

## 2. Análisis de las Actividades y Talleres Realizados
- **Taller 1 (Sistema auditivo e hipoacusia):** [...]
- **Actividad 1 (Pares craneales y lenguaje):** [...]
- **Taller 2 (Componentes del lenguaje y dificultades):** [...]
- **Actividad 2 (Caso ficticio de daño neurológico/anatómico):** [...]

## 3. Autoevaluación y Reflexión Final del Estudiante
[Valoración personal del esfuerzo, implicación y utilidad clínica de la asignatura para el futuro desempeño como maestro de Audición y Lenguaje].`
    },
    {
      id: "oral-portfolio",
      asignaturaId: "oral",
      tipo: "Portfolio Final",
      titulo: "Portfolio Final: Portfolio Digital/Audiovisual, Autoevaluación y Heteroevaluación",
      fechaRecomendada: "2027-01-14",
      ventanaInicio: "2026-12-15",
      fechaLimite: "2027-01-21",
      puntos: 1.0,
      porcentaje: 10,
      unidadesRelacionadas: ["Unidad 1", "Unidad 2", "Unidad 3", "Unidad 4", "Unidad 5"],
      descripcion: "Elaboración y exposición de un portfolio digital/audiovisual estructurado que sintetice los aprendizajes de las 5 unidades, los relacione con los talleres y actividades prácticas e incluya autoevaluación y heteroevaluación de la asignatura (Ventana recomendada: 15 dic – 15 ene).",
      objetivos: [
        "Identificar, seleccionar y sintetizar los principales conocimientos y competencias adquiridos durante el cuatrimestre.",
        "Relacionar los contenidos teóricos de la asignatura con las actividades prácticas desarrolladas y su aplicación en contextos educativos y profesionales.",
        "Desarrollar habilidades de comunicación oral, creatividad y competencia digital mediante la elaboración y exposición de un portfolio audiovisual.",
        "Fomentar el pensamiento crítico mediante la autoevaluación del propio aprendizaje y la heteroevaluación de la asignatura."
      ],
      resultadosAprendizaje: "Elabora y presenta un portfolio digital estructurado utilizando herramientas tecnológicas y comunicación oral, e incluye autoevaluación y heteroevaluación.",
      subtareas: [
        "Haber realizado los Talleres 1 y 2 y las Actividades 1 y 2 y visualizado las sesiones síncronas.",
        "Estructurar el soporte digital y el guion audiovisual cubriendo las 5 unidades (Prevención y desarrollo oral, RSH y TSH, Disartria/Disglosia/Disfonía, Disfemia, y RSL/TDL/Mutismo/Afasia).",
        "Incluir el bloque obligatorio de Autoevaluación del aprendizaje y Heteroevaluación de la asignatura.",
        "Entregar entre el 15 de diciembre de 2026 y el 15 de enero de 2027 (100% nota)."
      ],
      guiaPasoAPaso: [
        "1. **Atención al Formato Audiovisual/Digital**: Fíjate en que la planificación de la profesora Soraya Rodríguez especifica expresamente: *'Desarrollar habilidades de comunicación oral, creatividad y competencia digital mediante la elaboración y exposición de un portfolio audiovisual'* y *'Autoevaluación del aprendizaje y heteroevaluación de la asignatura'*. Asegúrate de incluir ambos apartados (autoevaluación + heteroevaluación docente/asignatura).",
        "2. **Estructura Recomendada del Portfolio**:\n   - *Bloque 1*: Mapa global de las alteraciones del lenguaje oral (Esquema de Susanibar et al., 2016: Alteraciones primarias del habla [RSH, TSH], secundarias del habla y la voz [Disartria, Disglosia, Disfonía], de la fluidez [Disfemia] y del desarrollo del lenguaje [RSL, TDL, Mutismo selectivo, Afasia infantil, Enfermedades raras]).\n   - *Bloque 2*: Conexión entre teoría y práctica (Taller 1 TEA sensorial, Actividad 1 Detección y propuesta preventiva, Taller 2 Testimonio de disfemia, Actividad 2 Tabla de los 4 niveles lingüísticos).\n   - *Bloque 3*: Autoevaluación crítica (fortalezas, dificultades y propuestas de mejora personal) y Heteroevaluación constructiva de la asignatura."
      ],
      plantillaTarea: `# GUION ESTRUCTURADO PARA EL PORTFOLIO DIGITAL Y AUDIOVISUAL
**Asignatura:** Evaluación e Intervención en los Trastornos del Lenguaje Oral
**Docente:** Soraya Rodríguez Hernández

## 1. Síntesis de Aprendizajes Relevantes por Unidades (Unidades 1 a 5)
- **Unidad 1 (Desarrollo del lenguaje oral y prevención escolar):** Etapas prelingüística y lingüística, niveles de prevención (primaria, secundaria y terciaria de Caplan), cribado de signos de alerta y marco inclusivo LOMLOE (Art. 20, 73, 74, 75 y DUA).
- **Unidad 2 (Alteraciones del habla y la voz I - Primarias):** Retraso Evolutivo del Habla (RSH) y Trastorno de los Sonidos del Habla (TSH: fonético, fonológico y fonético-fonológico), evaluación con PEFF/RFI e intervención basada en la evidencia (pares mínimos, oposiciones fonológicas y conciencia fonológica frente a praxias aisladas - Farquharson, 2019).
- **Unidad 3 (Alteraciones del habla y la voz II - Secundarias):** Disartrias (flácida, espástica, atáxica, hipo/hipercinética, mixta), Disglosias (labial, mandibular, lingual, palatina; evaluación con OMES-E y PEMO) y Disfonía infantil (signos objetivos de Fleta, 2021 e higiene vocal).
- **Unidad 4 (Alteraciones de la fluidez - Disfemia):** Diferenciación entre disfluencia evolutiva y tartamudez, el Iceberg de la Disfemia, evaluación con los protocolos **PRET-I y PRET-A** e intervención directa e indirecta con familias y docentes.
- **Unidad 5 (Alteraciones del desarrollo del lenguaje):** Diagnóstico diferencial e intervención en Retraso Simple del Lenguaje (RSL), Trastorno del Desarrollo del Lenguaje (TDL), Mutismo Selectivo, Afasia Infantil Adquirida y Enfermedades Raras.

## 2. Relación Teoría-Práctica y Aplicación Profesional
- **Taller 1 (Integración sensorial en TEA):** Cómo la regulación visual, auditiva y propioceptiva es prerrequisito para la atención y la comunicación.
- **Actividad 1 (Propuesta de intervención preventiva):** Diseño de situaciones de aprendizaje DUA para estimular el lenguaje oral en Educación Infantil/Primaria.
- **Taller 2 (Testimonio real de disfemia):** Importancia del acompañamiento emocional, la autoimagen y la escucha sin presión en el aula.
- **Actividad 2 (Análisis por niveles del lenguaje):** Utilidad clínica de sistematizar los síntomas en los niveles fonológico, morfosintáctico, semántico y pragmático.

## 3. Autoevaluación del Propio Aprendizaje
- **Fortalezas alcanzadas:** [...]
- **Dificultades encontradas y cómo se han superado:** [...]
- **Calificación razonada de autoevaluación:** [...]

## 4. Heteroevaluación de la Asignatura
- **Valoración de los materiales, sesiones síncronas, casos prácticos y acompañamiento docente:** [...]`
    },
    {
      id: "saac-portfolio",
      asignaturaId: "saac",
      tipo: "Portfolio Final",
      titulo: "Portfolio Final: Síntesis Global y Reflexión en SAAC y TIC",
      fechaRecomendada: "2027-01-15",
      ventanaInicio: "2026-12-15",
      fechaLimite: "2027-01-21",
      puntos: 1.0,
      porcentaje: 10,
      unidadesRelacionadas: ["Unidad 1", "Unidad 2", "Unidad 3", "Unidad 4", "Unidad 5"],
      descripcion: "Portfolio final integrador de las 5 unidades de Sistemas Aumentativos y Alternativos de la Comunicación y las TIC, relacionando los casos prácticos, el catálogo de recursos tecnológicos y la reflexión personal (Fecha estándar UCJC - editable).",
      objetivos: [
        "Sintetizar los conocimientos sobre evaluación, selección, adaptación curricular e implementación de SAAC y TIC en distintos perfiles de alumnado.",
        "Reflexionar sobre el papel del maestro de AL como garante del derecho a la comunicación en el centro educativo."
      ],
      resultadosAprendizaje: "Integra un dossier práctico de recursos SAAC y TIC aplicable a su futuro ejercicio profesional como maestro de Audición y Lenguaje.",
      subtareas: [
        "Confirmar la fecha recomendada del Portfolio Final en el aula virtual de SAAC.",
        "Integrar el resumen de las 5 unidades (Introducción y ComFor, Discapacidad Auditiva, TEA, Discapacidad Física, Adaptaciones Curriculares y LNA).",
        "Incluir un catálogo propio de herramientas TIC y SAAC (ARASAAC, Araword, Soy Visual, LetMeTalk, Asterics Grid, Grid 3, SEDEA, DI) y la reflexión final.",
        "Entregar antes del 15 de enero de 2027 (y siempre antes de la fecha límite final del 21 de enero de 2027)."
      ],
      guiaPasoAPaso: [
        "1. **Síntesis de las 5 Unidades de SAAC**:\n   - *Unidad 1*: Comunicación aumentativa vs alternativa (CEAPAT, 2020), criterios de validez, evaluación ecológica (Tamarit, 1989), taxonomía (Símbolos/Software, Productos de apoyo/Hardware y Productos de acceso) y Test ComFor (Noens et al., 2006).\n   - *Unidad 2*: Discapacidad auditiva (enfoque audiológico, sociocultural y multidimensional; audífonos, implante coclear, osteointegrado y de tronco cerebral; bucle magnético y sistema FM; LPC, lectura labiofacial, dactilología, comunicación bimodal y LSE).\n   - *Unidad 3*: TEA (PECS en 6 fases, Habla Signada de Benson Schaeffer y SPC).\n   - *Unidad 4*: Discapacidad física (Sistema Bliss, SPC, Minspeak, Rebus, ARASAAC y las 5 formas de acceso).\n   - *Unidad 5*: Adaptaciones curriculares (LOMLOE), catálogo de ayudas técnicas y apps, Lenguaje Natural Asistido (LNA), moldeamiento, encadenamiento hacia atrás, espera estructurada y matrices de toma de decisiones."
      ],
      plantillaTarea: `# PORTFOLIO FINAL: SISTEMAS AUMENTATIVOS Y ALTERNATIVOS DE LA COMUNICACIÓN Y LAS TIC
**Asignatura:** Sistemas Aumentativos y Alternativos de la Comunicación y las TIC

## 1. Introducción: Los SAAC como Derecho Fundamental a la Comunicación
Los SAAC no constituyen un recurso de último extremo ni inhiben la aparición del lenguaje oral (Romski y Sevcik, 2005); por el contrario, actúan como un factor protector temprano que garantiza la autonomía, la participación social y la inclusión educativa.

## 2. Recorrido por las 5 Unidades y Dossier Clínico de SAAC
| Unidad | Perfil / Ámbito | Sistemas, Instrumentos y Recursos TIC Clave |
| :--- | :--- | :--- |
| **Unidad 1** | Evaluación y Taxonomía General | Símbolos (gestuales/gráficos), Productos de apoyo (baja/alta tecnología), Acceso (directo, código, barrido), Evaluación ecológica (Tamarit, 1989) y **Test ComFor** (Noens et al., 2006). |
| **Unidad 2** | Discapacidad Auditiva | Audífonos, Implante Coclear, Bucle magnético, **Sistema FM**, Lectura Labiofacial, **Palabra Complementada (LPC)**, Dactilología, **Comunicación Bimodal** y **LSE** + Apps (*SEDEA, DI, Coocleando, CoPilot*). |
| **Unidad 3** | Trastorno del Espectro Autista (TEA) | **Sistema PECS** (6 fases de Bondy y Frost), **Habla Signada de Benson Schaeffer** y **SPC**. |
| **Unidad 4** | Discapacidad Física / Motora | **Sistema BLISS**, **SPC**, **Minspeak**, **Rebus**, portal **ARASAAC** (~16.200 pictogramas) + Acceso por pulsadores, ratón facial, *eye-tracking* y tablero *E-tran*. |
| **Unidad 5** | Adaptación Curricular y Generalización | Medidas LOMLOE (Art. 71 y 74), **Lenguaje Natural Asistido (LNA)**, moldeamiento, encadenamiento hacia atrás, espera estructurada y apps (*LetMeTalk, SymboTalk, Asterics Grid, Araword, Soy Visual*). |

## 3. Reflexión sobre las Actividades Prácticas y Autoevaluación
[Síntesis reflexiva sobre los talleres y actividades realizados y autoevaluación del aprendizaje].`
    },

    // --- EXÁMENES FINALES CONVOCATORIA ORDINARIA (5 Febrero 2027) ---
    {
      id: "examen-psico",
      asignaturaId: "psicopatologia",
      tipo: "Examen Oficial",
      titulo: "Examen Final Ordinario: Psicopatología de la Audición y el Lenguaje",
      fechaRecomendada: "2027-02-05",
      ventanaInicio: "2027-02-05",
      fechaLimite: "2027-02-06",
      puntos: 6.0,
      porcentaje: 60,
      unidadesRelacionadas: ["Unidad 1", "Unidad 2", "Unidad 3", "Unidad 4", "Unidad 5"],
      descripcion: "Examen final tipo test en modalidad online síncrona a través de Blackboard con sistema Proctoring. Asistencia obligatoria para aprobar y sumar la evaluación continua.",
      objetivos: ["Superar la prueba objetiva teórico-práctica sobre las 5 unidades del temario (mínimo 5/10 para ponderar)."],
      resultadosAprendizaje: "Dominio teórico-práctico integral de la asignatura (60% de la calificación final).",
      subtareas: [
        "Completar los test de autoevaluación de las 5 unidades en el campus virtual.",
        "Practicar con el Simulador de Examen Tipo Test y las Flashcards de esta aplicación.",
        "Verificar requisitos técnicos del sistema Proctoring en Blackboard y horario oficial del grupo."
      ],
      guiaPasoAPaso: [
        "1. **Formato del Examen**: Batería de preguntas tipo test con enfoque teórico-práctico sobre todas las sesiones de clase y las 5 unidades.",
        "2. **Temas estrella de examen**: Diferencia signo vs síntoma; modelo médico vs educativo; tablas de equivalencias DSM-5 vs CIE-11; criterios de TSH, TCS y TFI (Tabla 3 Disfluencia evolutiva vs Tartamudez); Consenso Delphi 2026 sobre TDL vs TL vs ITL; afasias fluentes vs no fluentes y Landau-Kleffner; dislexia fonológica vs superficial vs profunda; modelo AAIDD 2021 (apoyos intermitente, limitado, extenso, generalizado); grados de pérdida auditiva en dB; audífono vs implante coclear; Renzulli (3 anillos) y memoria de trabajo en TDAH."
      ],
      plantillaTarea: `# CHECKLIST DE PREPARACIÓN PARA EL EXAMEN FINAL (60% NOTA)
- [ ] Repasar los Resúmenes e Ideas Clave de las Unidades 1 a 5 en la pestaña **Temario y PDFs**.
- [ ] Realizar al menos 3 simulacros con nota >85% en el **Simulador de Examen**.
- [ ] Dominar las tarjetas del **Glosario y Flashcards**.`
    },
    {
      id: "examen-anat",
      asignaturaId: "anatomia",
      tipo: "Examen Oficial",
      titulo: "Examen Final Ordinario: Anatomía, Fisiología y Neurología del Lenguaje",
      fechaRecomendada: "2027-02-05",
      ventanaInicio: "2027-02-05",
      fechaLimite: "2027-02-06",
      puntos: 6.0,
      porcentaje: 60,
      unidadesRelacionadas: ["Unidad 1", "Unidad 2", "Unidad 3", "Unidad 4", "Unidad 5"],
      descripcion: "Examen final tipo test en modalidad online síncrona a través de Blackboard con sistema Proctoring (60% de la nota final).",
      objetivos: ["Superar la prueba tipo test teórico-práctica de las Unidades 1 a 5."],
      resultadosAprendizaje: "Dominio de la anatomía, fisiología y neurología del lenguaje.",
      subtareas: [
        "Repasar lóbulos cerebrales, cerebelo, tronco del encéfalo, partes del oído, cartílagos laríngeos, efecto Bernoulli, áreas de Broca/Wernicke y modelos de percepción/producción.",
        "Realizar simulacros en el Simulador de Examen de esta app."
      ],
      guiaPasoAPaso: [
        "1. **Puntos clave de examen**: Sustancia gris vs blanca; 31 pares espinales; pedúnculos cerebelosos (superior-mesencéfalo, medio-protuberancia, inferior-bulbo); cadena osicular (martillo, yunque, estribo: amplifica 22 veces); Órgano de Corti (16 a 18.000 Hz); cartílagos laríngeos (tiroides, cricoides, aritenoides, corniculados); efecto Bernoulli; velocidad de vibración cordal (hombres 100-150 p/s, mujeres 200-300 p/s); 6 funciones de Jakobson; efecto McGurk; movimientos oculares (sacádicos, regresiones 10-15%, fijaciones ~225 ms); modelos de Forster y Morton."
      ],
      plantillaTarea: `# CHECKLIST DE PREPARACIÓN PARA EL EXAMEN DE ANATOMÍA (60% NOTA)
- [ ] Repasar la herramienta interactiva de **Pares Craneales y Áreas Cerebrales**.
- [ ] Practicar en el **Simulador Tipo Test** filtrando por Anatomía.`
    },
    {
      id: "examen-oral",
      asignaturaId: "oral",
      tipo: "Examen Oficial",
      titulo: "Examen Final Ordinario: Evaluación e Intervención en Trastornos del Lenguaje Oral",
      fechaRecomendada: "2027-02-05",
      ventanaInicio: "2027-02-05",
      fechaLimite: "2027-02-06",
      puntos: 6.0,
      porcentaje: 60,
      unidadesRelacionadas: ["Unidad 1", "Unidad 2", "Unidad 3", "Unidad 4", "Unidad 5"],
      descripcion: "Examen final tipo test online síncrono en Blackboard con Proctoring (60% de la nota final).",
      objetivos: ["Superar el examen tipo test sobre las Unidades 1 a 5 de Lenguaje Oral."],
      resultadosAprendizaje: "Dominio de la evaluación e intervención en alteraciones del habla, voz, fluidez y lenguaje oral.",
      subtareas: [
        "Repasar hitos evolutivos, clasificación de Susanibar et al. (2016), pruebas de evaluación (PEFF, RFI, PLON-R, OMES-E, PEMO, PRET-I/PRET-A, ITPA, BLOC, Boston) y pautas de intervención."
      ],
      guiaPasoAPaso: [
        "1. **Puntos clave de examen**: Etapas prelingüística y lingüística (holofrástica 12-18m); prevención primaria, secundaria y terciaria (Caplan); artículos LOMLOE (20, 73, 74, 75); RSH vs TSH (fonético, fonológico, fonético-fonológico); disartrias (flácida, espástica, atáxica, hipocinética, hipercinética); disglosias y protocolos OMES-E / PEMO; disfonía infantil (Fleta, 2021); disfemia (tónica vs clónica, PRET-I y PRET-A); RSL vs TDL vs Afasia infantil adquirida."
      ],
      plantillaTarea: `# CHECKLIST DE PREPARACIÓN PARA EL EXAMEN DE LENGUAJE ORAL (60% NOTA)
- [ ] Repasar las pruebas estandarizadas de cada trastorno (PEFF, RFI, OMES-E, PEMO, PRET-I, ITPA, Boston).
- [ ] Practicar en el **Simulador Tipo Test** filtrando por Lenguaje Oral.`
    },
    {
      id: "examen-escr",
      asignaturaId: "escrita",
      tipo: "Examen Oficial",
      titulo: "Examen Final Ordinario: Evaluación e Intervención en Trastornos de la Lengua Escrita",
      fechaRecomendada: "2027-02-05",
      ventanaInicio: "2027-02-05",
      fechaLimite: "2027-02-06",
      puntos: 6.0,
      porcentaje: 60,
      unidadesRelacionadas: ["Unidad 1", "Unidad 2", "Unidad 3", "Unidad 4", "Unidad 5"],
      descripcion: "Examen final tipo test online síncrono en Blackboard con Proctoring (60% de la nota final).",
      objetivos: ["Superar el examen tipo test sobre las Unidades 1 a 5 de Lengua Escrita."],
      resultadosAprendizaje: "Dominio de los modelos de lectura y escritura y la evaluación e intervención en dislexia, disgrafía, disortografía y discalculia.",
      subtareas: [
        "Asistir o visualizar la 8ª sesión síncrona (Simulacro de preguntas tipo examen con el profesor David Sánchez Toribio).",
        "Repasar los modelos de lectura (Coltheart; Seidenberg y McClelland) y escritura (Hayes y Flower; Cuetos; Bereiter y Scardamalia) y las pruebas (PROLEC-R, PROESC, DST-J, TALE, EDIL, BENHALE, Frostig, Stamback)."
      ],
      guiaPasoAPaso: [
        "1. **Puntos clave de examen**: Sistema ortográfico español (27 letras, 30 grafemas, 24 fonemas: 19 consonánticos y 5 vocálicos); circuito dorsal temporoparietal vs ventral occipitotemporal; memoria icónica -> visual a corto plazo -> operativa; efectos de lexicalidad, frecuencia, vecindad ortográfica y longitud; microestructura vs macroestructura vs modelo de situación (Kintsch y Van Dijk); dislexia fonológica vs superficial vs profunda; disgrafía vs disortografía; discalculia primaria, secundaria y disaritmética."
      ],
      plantillaTarea: `# CHECKLIST DE PREPARACIÓN PARA EL EXAMEN DE LENGUA ESCRITA (60% NOTA)
- [ ] Repasar la 8ª sesión síncrona de simulacro de examen.
- [ ] Practicar en el **Simulador Tipo Test** filtrando por Lengua Escrita.`
    },
    {
      id: "examen-saac",
      asignaturaId: "saac",
      tipo: "Examen Oficial",
      titulo: "Examen Final Ordinario: Sistemas Aumentativos y Alternativos de la Comunicación y las TIC",
      fechaRecomendada: "2027-02-05",
      ventanaInicio: "2027-02-05",
      fechaLimite: "2027-02-06",
      puntos: 6.0,
      porcentaje: 60,
      unidadesRelacionadas: ["Unidad 1", "Unidad 2", "Unidad 3", "Unidad 4", "Unidad 5"],
      descripcion: "Examen final tipo test online síncrono en Blackboard con Proctoring (60% de la nota final).",
      objetivos: ["Superar el examen tipo test sobre las Unidades 1 a 5 de SAAC y TIC."],
      resultadosAprendizaje: "Dominio de la taxonomía, evaluación, selección e implementación de SAAC y ayudas técnicas.",
      subtareas: [
        "Repasar el Test ComFor, diferencias entre LPC, Bimodal y LSE, las 6 fases de PECS, el programa de Benson Schaeffer, los colores de SPC/Bliss, Minspeak, ARASAAC y el Lenguaje Natural Asistido."
      ],
      guiaPasoAPaso: [
        "1. **Puntos clave de examen**: Comunicación aumentativa vs alternativa; Test ComFor (2 niveles, 5 series, 36 ítems); Sistema FM vs Bucle magnético; parámetros de LPC (3 posiciones vocálicas, 8 configuraciones consonánticas); parámetros formativos de LSE (Stokoe, 1960); las 6 fases de PECS; Benson Schaeffer (evitar ecopraxias, encadenamiento hacia atrás); código de colores de SPC y Bliss; estrategias de acceso (selección directa, barrido dirigido, automático y por filas/columnas); Lenguaje Natural Asistido (LNA)."
      ],
      plantillaTarea: `# CHECKLIST DE PREPARACIÓN PARA EL EXAMEN DE SAAC Y TIC (60% NOTA)
- [ ] Repasar el **Selector Clínico de SAAC** en la pestaña de Herramientas Clínicas.
- [ ] Practicar en el **Simulador Tipo Test** filtrando por SAAC y TIC.`
    }
  ]
};
