const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const dataPath = path.join(rootDir, 'data.js');

const raw = fs.readFileSync(dataPath, 'utf8');
const sandbox = {};
const fn = new Function('window', raw);
fn(sandbox);
const AL_DATA = sandbox.AL_DATA;

const loadAnatMd = (filename) => {
  const p = path.join(rootDir, 'anatomia', filename);
  return fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : "";
};

// 1. UPDATE ASIGNATURAS METADATA AND VIDEOS
const asigUpdates = {
  psicopatologia: {
    profesor: "Dra. Rocío Daniela Concha Ortiz",
    planificacionPdf: "PSICOPATO/Planificación_Rocío Daniela Concha Ortiz_Psicopatología de la audición y el lenguaje_Semestre1 (1).pdf",
    videoSesion1: "PSICOPATO/2026_10_20_15_43__ROCÍO DANIELA CONCHA PSICOPATOLOGÍA DE LA AUDICIÓN Y EL LENGUAJE_recording 1_fa5aba9a-c690-5e75-8ef4-696665a47b15_recording.mp4",
    videoDuracionMin: 103.1
  },
  anatomia: {
    profesor: "Sara Prieto González",
    planificacionPdf: "anatomia/2. Planificación_SARA PRIETO_ ANATOMÍA2627. virtual ucjc26.pdf",
    videoSesion1: "anatomia/1.mp4",
    videoDuracionMin: 99.2
  },
  oral: {
    profesor: "Soraya Rodríguez Hernández",
    planificacionPdf: "TRASTORN. ORAL/Planificación_Soraya_Rodríguez_Hernández_Evaluación e Intervención en los Trastornos del Lenguaje Oral_plantilla mod. virtual ucjc26.pdf",
    videoSesion1: "TRASTORN. ORAL/1.mp4",
    videoDuracionMin: 83.2
  },
  escrita: {
    profesor: "David Sánchez Toribio",
    planificacionPdf: "TRASTORN. ESCR/Planificación trastornos en la lengua escrita (1).pdf",
    videoSesion1: "TRASTORN. ESCR/1.mp4",
    videoDuracionMin: 95.0
  },
  saac: {
    profesor: "César López",
    planificacionPdf: "TIC/Actividad_1_SAAC.pdf",
    videoSesion1: "TIC/2026_10_21_17_40__CÉSAR LÓPEZ SAAC Y TIC_recording 1_ac74fe20-8702-5b92-bca1-cb0f1d372354_recording.mp4",
    videoDuracionMin: 108.5
  }
};

for (const asig of AL_DATA.asignaturas) {
  if (asigUpdates[asig.id]) {
    Object.assign(asig, asigUpdates[asig.id]);
    if (asig.sesionesSincronas && asig.sesionesSincronas.length > 0) {
      asig.sesionesSincronas[0].videoGrabado = asig.videoSesion1;
      asig.sesionesSincronas[0].duracionMin = asig.videoDuracionMin;
    }
  }
}

// 1.1 AUTO-LINK ANY DETECTED RECORDING SESSIONS (Sesión 2, 3, etc.) FROM CATALOG
const catalogPath = path.join(rootDir, 'multimedia_catalog.json');
if (fs.existsSync(catalogPath)) {
  try {
    const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
    const videos = (catalog.files && catalog.files.videos) || [];
    for (const vid of videos) {
      const match = vid.nombre.match(/recording\s*(\d+)/i) || vid.nombre.match(/^(\d+)\.mp4$/i) || vid.nombre.match(/sesi[oó]n\s*(\d+)/i);
      if (match) {
        const sesNum = parseInt(match[1], 10);
        const asig = AL_DATA.asignaturas.find(a => a.id === vid.asignaturaId);
        if (asig && asig.sesionesSincronas) {
          const ses = asig.sesionesSincronas.find(s => s.num === sesNum);
          if (ses) {
            ses.videoGrabado = vid.relPath;
            ses.duracionMin = vid.durationMin || Math.round((vid.durationSec || 0) / 60);
          }
        }
      }
    }
  } catch (err) {
    console.warn("Catalog parse error:", err);
  }
}

// 2. DELIVERABLES DETAILED UPDATES
const entregasMap = {};
for (const e of AL_DATA.entregas) {
  entregasMap[e.id] = e;
}

// TALLERES 1
if (entregasMap['psico-taller-1']) {
  const psicoMdPath = path.join(rootDir, 'PSICOPATO', 'ENTREGA_SESION_PRACTICA_1_RESUELTA_10.md');
  const psicoMdText = fs.existsSync(psicoMdPath) ? fs.readFileSync(psicoMdPath, 'utf8') : "";
  Object.assign(entregasMap['psico-taller-1'], {
    fechaRecomendada: "2026-11-06",
    titulo: "Sesión Práctica 1: Elección de 1 Caso Real (Lucía, Álvaro o Mario - Unidad 2)",
    archivoEnunciado: "PSICOPATO/sesión práctica 1.pdf",
    plantillaTarea: psicoMdText || entregasMap['psico-taller-1'].plantillaTarea,
    archivosAdjuntos: [
      { titulo: "🏆 Entrega Oficial Lista en PDF — Caso 1: Lucía (TL/TDL) [10/10]", path: "PSICOPATO/ENTREGA_SESION_PRACTICA_1_RESUELTA_10.pdf", tipo: "pdf" },
      { titulo: "📝 Trabajo Editable en Word — Caso 1: Lucía (.docx)", path: "PSICOPATO/ENTREGA_SESION_PRACTICA_1_RESUELTA_10.docx", tipo: "doc" },
      { titulo: "📄 Alternativa Lista en PDF — Caso 2: Álvaro (TSH)", path: "PSICOPATO/ENTREGA_SESION_PRACTICA_1_CASO2_ALVARO.pdf", tipo: "pdf" },
      { titulo: "📄 Alternativa Lista en PDF — Caso 3: Mario (TFI / Tartamudez)", path: "PSICOPATO/ENTREGA_SESION_PRACTICA_1_CASO3_MARIO.pdf", tipo: "pdf" },
      { titulo: "📄 Enunciado Oficial en Blanco (Sesión Práctica 1)", path: "PSICOPATO/sesión práctica 1.pdf", tipo: "pdf" }
    ]
  });
}

if (entregasMap['anat-taller-1']) {
  const mdText = loadAnatMd('ENTREGA_SESION_PRACTICA_1_RESUELTA_10.md');
  Object.assign(entregasMap['anat-taller-1'], {
    fechaRecomendada: "2026-11-06",
    titulo: "Sesión Práctica 1: Caso de Daniel (5 años, Sordera Neurosensorial Profunda e Implante Coclear)",
    archivoEnunciado: "anatomia/SESIÓN PRÁCTICA 1 ANATOMÍA, FISIOLOGÍA Y NEUROLOGÍA DEL LENGUAJE 04.11.pdf",
    plantillaTarea: mdText || entregasMap['anat-taller-1'].plantillaTarea,
    archivosAdjuntos: [
      { titulo: "📝 Trabajo Resuelto 10/10 (.docx)", path: "anatomia/ENTREGA_SESION_PRACTICA_1_RESUELTA_10.docx", tipo: "doc" },
      { titulo: "📄 Documento Resuelto 10/10 (.md)", path: "anatomia/ENTREGA_SESION_PRACTICA_1_RESUELTA_10.md", tipo: "doc" },
      { titulo: "📄 Enunciado Oficial (Caso Daniel)", path: "anatomia/SESIÓN PRÁCTICA 1 ANATOMÍA, FISIOLOGÍA Y NEUROLOGÍA DEL LENGUAJE 04.11.pdf", tipo: "pdf" }
    ]
  });
}

if (entregasMap['oral-taller-1']) {
  Object.assign(entregasMap['oral-taller-1'], {
    fechaRecomendada: "2026-11-06",
    titulo: "Sesión Práctica 1: Casos de Martín, Ismael y Alicia (Integración Sensorial en TEA)",
    archivoEnunciado: "TRASTORN. ORAL/SESIONPRACT/Sesión práctica 1. Evaluación e Intervención en los Trastornos del Lenguaje Oral.pdf",
    archivosAdjuntos: [
      { titulo: "📄 Enunciado Oficial (Sesión Práctica 1)", path: "TRASTORN. ORAL/SESIONPRACT/Sesión práctica 1. Evaluación e Intervención en los Trastornos del Lenguaje Oral.pdf", tipo: "pdf" },
      { titulo: "📘 Guía: Estimulación Multisensorial en TEA", path: "TRASTORN. ORAL/SESIONPRACT/La estimulación multisensorial para mejorar el procesamiento sensorial en las personas con TEA 2.pdf", tipo: "pdf" }
    ]
  });
}

if (entregasMap['escr-taller-1']) {
  Object.assign(entregasMap['escr-taller-1'], {
    fechaRecomendada: "2026-11-06",
    titulo: "Sesión Práctica 1: Análisis en Vídeo de la Lectura de un Niño de 8-9 años",
    archivoEnunciado: "TRASTORN. ESCR/SESIÓNPRAC1/Sesión práctica uno, trastornos en la lengua escrita..pdf",
    archivosAdjuntos: [
      { titulo: "📄 Enunciado Oficial (PDF)", path: "TRASTORN. ESCR/SESIÓNPRAC1/Sesión práctica uno, trastornos en la lengua escrita..pdf", tipo: "pdf" },
      { titulo: "📝 Plantilla Editable (.doc)", path: "TRASTORN. ESCR/SESIÓNPRAC1/Sesión práctica uno, trastornos en la lengua escrita..doc", tipo: "doc" },
      { titulo: "🎬 Vídeo del Caso (Niño 8-9 años)", path: "TRASTORN. ESCR/SESIÓNPRAC1/Vídeo actividad uno.mp4", tipo: "video" }
    ]
  });
}

if (entregasMap['saac-taller-1']) {
  Object.assign(entregasMap['saac-taller-1'], {
    fechaRecomendada: "2026-11-06",
    titulo: "Sesión Práctica 1: Ficha de Análisis Crítico sobre el Caso de Álex (Unidades 1 y 2)",
    archivoEnunciado: "TIC/Sesion_Practica_1_SAAC.pdf",
    archivosAdjuntos: [
      { titulo: "📄 Enunciado Oficial (Caso Álex)", path: "TIC/Sesion_Practica_1_SAAC.pdf", tipo: "pdf" }
    ]
  });
}

// ACTIVIDADES 1
if (entregasMap['anat-act-1']) {
  const mdText = loadAnatMd('ENTREGA_ACTIVIDAD_1_RESUELTA_10.md');
  Object.assign(entregasMap['anat-act-1'], {
    fechaRecomendada: "2026-11-13",
    titulo: "Actividad 1: Mapa Conceptual de los Pares Craneales y su Importancia en el Lenguaje",
    archivoEnunciado: "anatomia/ACTIVIDAD 1 ANATOMÍA, FISIOLOGÍA Y NEUROLOGÍA DEL LENGUAJE.pdf",
    plantillaTarea: mdText || entregasMap['anat-act-1'].plantillaTarea,
    archivosAdjuntos: [
      { titulo: "📝 Trabajo Resuelto 10/10 (.docx)", path: "anatomia/ENTREGA_ACTIVIDAD_1_RESUELTA_10.docx", tipo: "doc" },
      { titulo: "📄 Documento Resuelto 10/10 (.md)", path: "anatomia/ENTREGA_ACTIVIDAD_1_RESUELTA_10.md", tipo: "doc" },
      { titulo: "📄 Enunciado Oficial (Actividad 1 - PDF)", path: "anatomia/ACTIVIDAD 1 ANATOMÍA, FISIOLOGÍA Y NEUROLOGÍA DEL LENGUAJE.pdf", tipo: "pdf" },
      { titulo: "🖼️ Rúbrica Oficial Blackboard (JPG)", path: "anatomia/RUB.ACT1.jpg", tipo: "image" }
    ]
  });
}

if (entregasMap['psico-act-1']) {
  Object.assign(entregasMap['psico-act-1'], {
    fechaRecomendada: "2026-11-13",
    titulo: "Actividad 1: Vídeo Informativo para Docentes sobre un Trastorno de la Unidad 3 (Máx. 60s)",
    archivoEnunciado: "PSICOPATO/Actividad continua 1.pdf",
    archivosAdjuntos: [
      { titulo: "📄 Enunciado Oficial (Actividad Continua 1 - PDF)", path: "PSICOPATO/Actividad continua 1.pdf", tipo: "pdf" }
    ]
  });
}

if (entregasMap['oral-act-1']) {
  Object.assign(entregasMap['oral-act-1'], {
    fechaRecomendada: "2026-11-13",
    titulo: "Actividad 1: Caso Práctico MARCO (5a 8m - TSH / Retraso del Habla e Intervención Preventiva)",
    archivoEnunciado: "TRASTORN. ORAL/Actividad 1_Evaluación e Intervención en los Trastornos del Lenguaje Oral.pdf",
    archivosAdjuntos: [
      { titulo: "📄 Enunciado Oficial (Caso Marco - PDF)", path: "TRASTORN. ORAL/Actividad 1_Evaluación e Intervención en los Trastornos del Lenguaje Oral.pdf", tipo: "pdf" }
    ]
  });
}

if (entregasMap['saac-act-1']) {
  Object.assign(entregasMap['saac-act-1'], {
    fechaRecomendada: "2026-11-13",
    titulo: "Actividad 1: Caso Ficticio de SARA (8 años, 3º Primaria, Hipoacusia 55 dB y SAAC)",
    archivoEnunciado: "TIC/Actividad_1_SAAC.pdf",
    archivosAdjuntos: [
      { titulo: "📄 Enunciado Oficial (Caso Sara - PDF)", path: "TIC/Actividad_1_SAAC.pdf", tipo: "pdf" }
    ]
  });
}

if (entregasMap['escr-act-1']) {
  Object.assign(entregasMap['escr-act-1'], {
    fechaRecomendada: "2026-11-26",
    titulo: "Actividad 1: Análisis en Vídeo de un Niño de 8 años sin Discapacidad (Vías Lectoras)",
    archivoEnunciado: "TRASTORN. ESCR/ACT1/Actividad uno, trastornos en la lengua escrita..pdf",
    archivosAdjuntos: [
      { titulo: "📄 Enunciado Oficial (PDF)", path: "TRASTORN. ESCR/ACT1/Actividad uno, trastornos en la lengua escrita..pdf", tipo: "pdf" },
      { titulo: "📝 Plantilla Editable (.doc)", path: "TRASTORN. ESCR/ACT1/Actividad uno, trastornos en la lengua escrita..doc", tipo: "doc" },
      { titulo: "🎬 Vídeo de la Actividad (Niño 8 años)", path: "TRASTORN. ESCR/SESIÓNPRAC1/Vídeo actividad uno.mp4", tipo: "video" },
      { titulo: "📘 Ayuda 1: Adquisición Fonética-Fonológica", path: "TRASTORN. ESCR/ACT1/Ayuda actividad uno, 2013-ADQUISICIÓN-FONÉTICA-FONOLÓGICA.pdf", tipo: "pdf" },
      { titulo: "📘 Ayuda 2: Guía Extremadura - Ayuda Etapas", path: "TRASTORN. ESCR/ACT1/Ayuda actividad uno, parte dosguia-extremadura, ayuda etapas.pdf", tipo: "pdf" },
      { titulo: "📘 Ayuda 3: Comparación Lectora", path: "TRASTORN. ESCR/ACT1/Ayuda tresComparación lectora.pdf", tipo: "pdf" },
      { titulo: "📘 Ayuda 4: Lectura Estudio Canadiense", path: "TRASTORN. ESCR/ACT1/lectura estudio canadiense..pdf", tipo: "pdf" }
    ]
  });
}

// TALLERES 2
if (entregasMap['psico-taller-2']) {
  Object.assign(entregasMap['psico-taller-2'], {
    fechaRecomendada: "2026-12-04",
    titulo: "Sesión Práctica 2: Diseño de un Aula de Acogida con Plano y Tabla (Unidad 5)",
    archivoEnunciado: "PSICOPATO/sesión práctica 2.pdf",
    archivosAdjuntos: [
      { titulo: "📄 Enunciado Oficial (Sesión Práctica 2 - PDF)", path: "PSICOPATO/sesión práctica 2.pdf", tipo: "pdf" }
    ]
  });
}

if (entregasMap['anat-taller-2']) {
  const mdText = loadAnatMd('ENTREGA_SESION_PRACTICA_2_RESUELTA_10.md');
  Object.assign(entregasMap['anat-taller-2'], {
    fechaRecomendada: "2026-12-04",
    titulo: "Sesión Práctica 2: Caso de Marta (58 años, ACV Isquémico y Afasia de Broca)",
    archivoEnunciado: "anatomia/SESIÓN PRÁCTICA 2 ANATOMÍA DEL LENGUAJE 02.12.pdf",
    plantillaTarea: mdText || entregasMap['anat-taller-2'].plantillaTarea,
    archivosAdjuntos: [
      { titulo: "📝 Trabajo Resuelto 10/10 (.docx)", path: "anatomia/ENTREGA_SESION_PRACTICA_2_RESUELTA_10.docx", tipo: "doc" },
      { titulo: "📄 Documento Resuelto 10/10 (.md)", path: "anatomia/ENTREGA_SESION_PRACTICA_2_RESUELTA_10.md", tipo: "doc" },
      { titulo: "📄 Enunciado Oficial (Caso Marta - PDF)", path: "anatomia/SESIÓN PRÁCTICA 2 ANATOMÍA DEL LENGUAJE 02.12.pdf", tipo: "pdf" }
    ]
  });
}

if (entregasMap['oral-taller-2']) {
  Object.assign(entregasMap['oral-taller-2'], {
    fechaRecomendada: "2026-12-04",
    titulo: "Sesión Práctica 2: Análisis de Testimonio Real sobre Disfemia (Fluidez Verbal)"
  });
}

if (entregasMap['escr-taller-2']) {
  Object.assign(entregasMap['escr-taller-2'], {
    fechaRecomendada: "2026-12-04",
    titulo: "Sesión Práctica 2: Análisis en Vídeo de Paciente con Daño Cerebral (Matemáticas y Lectura)",
    archivoEnunciado: "TRASTORN. ESCR/SESIONPRACT2/Sesión práctica dos, trastornos en la lengua escrita..doc",
    archivosAdjuntos: [
      { titulo: "📝 Plantilla Editable (.doc)", path: "TRASTORN. ESCR/SESIONPRACT2/Sesión práctica dos, trastornos en la lengua escrita..doc", tipo: "doc" },
      { titulo: "🎬 Vídeo 1: M.A. Números (Acalculia)", path: "TRASTORN. ESCR/SESIONPRACT2/M.A números.mp4", tipo: "video" },
      { titulo: "🎬 Vídeo 2: M.A. Lectura de Palabras", path: "TRASTORN. ESCR/SESIONPRACT2/M.A.mp4", tipo: "video" }
    ]
  });
}

if (entregasMap['saac-taller-2']) {
  Object.assign(entregasMap['saac-taller-2'], {
    fechaRecomendada: "2026-12-04",
    titulo: "Sesión Práctica 2: Ficha de Diseño de Aula Accesible DUA (Unidades 3, 4 y 5)",
    archivoEnunciado: "TIC/Sesion_Practica_2_SAAC.pdf",
    archivosAdjuntos: [
      { titulo: "📄 Enunciado Oficial (Ficha Aula DUA - PDF)", path: "TIC/Sesion_Practica_2_SAAC.pdf", tipo: "pdf" }
    ]
  });
}

// ACTIVIDADES 2
if (entregasMap['escr-act-2']) {
  Object.assign(entregasMap['escr-act-2'], {
    fechaRecomendada: "2026-12-03",
    titulo: "Actividad 2: Análisis de 2 Muestras de Escritura Libre (6 Errores Justificados)",
    archivoEnunciado: "TRASTORN. ESCR/ACT2/Actividad dos, trastornos en la lengua escrita.pdf",
    archivosAdjuntos: [
      { titulo: "📄 Enunciado Oficial (Actividad 2 - PDF)", path: "TRASTORN. ESCR/ACT2/Actividad dos, trastornos en la lengua escrita.pdf", tipo: "pdf" },
      { titulo: "📝 Plantilla Editable (.doc)", path: "TRASTORN. ESCR/ACT2/Actividad dos, trastornos en la lengua escrita.doc", tipo: "doc" },
      { titulo: "📘 Guía: Tabla Análisis Fallos Lectoescritura", path: "TRASTORN. ESCR/ACT2/TABLA ANÁLISIS FALLOS LECTOESCRITURA (GUÍA).pdf", tipo: "pdf" },
      { titulo: "🖼️ Muestra 1: Imagen Uno (La Furgoneta)", path: "TRASTORN. ESCR/ACT2/Imagen uno.jpeg", tipo: "image" },
      { titulo: "🖼️ Muestra 2: Imagen Dos (Sombrero Seleccionador)", path: "TRASTORN. ESCR/ACT2/Imagen dos.jpg", tipo: "image" }
    ]
  });
}

if (entregasMap['anat-act-2']) {
  const mdText = loadAnatMd('ENTREGA_ACTIVIDAD_2_RESUELTA_10.md');
  Object.assign(entregasMap['anat-act-2'], {
    fechaRecomendada: "2026-12-11",
    titulo: "Actividad 2: Caso Clínico Ficticio de Daño Neurológico o Anatómico (4 Apartados)",
    archivoEnunciado: "anatomia/ACTIVIDAD 2 ANATOMÍA, FISIOLOGÍA Y NEUROLOGÍA DEL LENGUAJE.pdf",
    plantillaTarea: mdText || entregasMap['anat-act-2'].plantillaTarea,
    archivosAdjuntos: [
      { titulo: "📝 Trabajo Resuelto 10/10 (.docx)", path: "anatomia/ENTREGA_ACTIVIDAD_2_RESUELTA_10.docx", tipo: "doc" },
      { titulo: "📄 Documento Resuelto 10/10 (.md)", path: "anatomia/ENTREGA_ACTIVIDAD_2_RESUELTA_10.md", tipo: "doc" },
      { titulo: "📄 Enunciado Oficial (Actividad 2 - PDF)", path: "anatomia/ACTIVIDAD 2 ANATOMÍA, FISIOLOGÍA Y NEUROLOGÍA DEL LENGUAJE.pdf", tipo: "pdf" },
      { titulo: "🖼️ Rúbrica Oficial Blackboard (JPG)", path: "anatomia/RUB.ACT2.jpg", tipo: "image" }
    ]
  });
}

if (entregasMap['psico-act-2']) {
  Object.assign(entregasMap['psico-act-2'], {
    fechaRecomendada: "2026-12-11",
    titulo: "Actividad 2: Póster Científico de Congreso (1 cara) + Justificación de Elección (1 cara) - Unidad 4",
    archivoEnunciado: "PSICOPATO/Actividad continua 2.pdf",
    archivosAdjuntos: [
      { titulo: "📄 Enunciado Oficial (Actividad Continua 2 - PDF)", path: "PSICOPATO/Actividad continua 2.pdf", tipo: "pdf" }
    ]
  });
}

if (entregasMap['oral-act-2']) {
  Object.assign(entregasMap['oral-act-2'], {
    fechaRecomendada: "2026-12-11",
    titulo: "Actividad 2: Caso LAURA (6 años, Fisura Palatina / Rinolalia - Completar SOLO Tabla)",
    archivoEnunciado: "TRASTORN. ORAL/Actividad 2_Evaluación e Intervención en los Trastornos del Lenguaje Oral.pdf",
    archivosAdjuntos: [
      { titulo: "📄 Enunciado Oficial (Caso Laura - PDF)", path: "TRASTORN. ORAL/Actividad 2_Evaluación e Intervención en los Trastornos del Lenguaje Oral.pdf", tipo: "pdf" }
    ]
  });
}

if (entregasMap['saac-act-2']) {
  Object.assign(entregasMap['saac-act-2'], {
    fechaRecomendada: "2027-01-21",
    titulo: "Actividad 2: Análisis Crítico de una Herramienta Digital de CAA para TEA (AsTeRICS Grid o SymboTalk)",
    archivoEnunciado: "TIC/Actividad_2_SAAC.pdf",
    archivosAdjuntos: [
      { titulo: "📄 Enunciado Oficial (Actividad 2 - PDF)", path: "TIC/Actividad_2_SAAC.pdf", tipo: "pdf" }
    ]
  });
}

// PORTFOLIOS
if (entregasMap['escr-portfolio']) {
  Object.assign(entregasMap['escr-portfolio'], {
    fechaRecomendada: "2027-01-03",
    titulo: "Portfolio Final: Presentación Canva Grabada de 2 Minutos (Preguntas 1 y 2)",
    archivoEnunciado: "TRASTORN. ESCR/Portfolio, evaluación e intervención en los transtornos de la lengua escrita.pdf",
    archivosAdjuntos: [
      { titulo: "📄 Enunciado Oficial (Portfolio Final - PDF)", path: "TRASTORN. ESCR/Portfolio, evaluación e intervención en los transtornos de la lengua escrita.pdf", tipo: "pdf" }
    ]
  });
}

if (entregasMap['psico-portfolio']) {
  Object.assign(entregasMap['psico-portfolio'], {
    fechaRecomendada: "2027-01-15",
    titulo: "Portfolio Final: Memoria Escrita de Síntesis en Word/PDF (Máx. 7 Páginas, 3 Capítulos)",
    archivoEnunciado: "PSICOPATO/Actividad continua 3 Portfolio.pdf",
    archivosAdjuntos: [
      { titulo: "📄 Enunciado Oficial (Portfolio Final - PDF)", path: "PSICOPATO/Actividad continua 3 Portfolio.pdf", tipo: "pdf" }
    ]
  });
}

if (entregasMap['anat-portfolio']) {
  const mdText = loadAnatMd('ENTREGA_PORTFOLIO_FINAL_RESUELTO_10.md');
  Object.assign(entregasMap['anat-portfolio'], {
    fechaRecomendada: "2027-01-15",
    titulo: "Portfolio Final: Memoria Escrita en Word/PDF (2 a 3 Páginas)",
    archivoEnunciado: "anatomia/PORTFOLIO ANATOMÍA, FISIOLOGÍA Y NEUROLOGÍA DEL LENGUAJE.pdf",
    plantillaTarea: mdText || entregasMap['anat-portfolio'].plantillaTarea,
    archivosAdjuntos: [
      { titulo: "📝 Trabajo Resuelto 10/10 (.docx)", path: "anatomia/ENTREGA_PORTFOLIO_FINAL_RESUELTO_10.docx", tipo: "doc" },
      { titulo: "📄 Documento Resuelto 10/10 (.md)", path: "anatomia/ENTREGA_PORTFOLIO_FINAL_RESUELTO_10.md", tipo: "doc" },
      { titulo: "📄 Enunciado Oficial (Portfolio Final - PDF)", path: "anatomia/PORTFOLIO ANATOMÍA, FISIOLOGÍA Y NEUROLOGÍA DEL LENGUAJE.pdf", tipo: "pdf" }
    ]
  });
}

if (entregasMap['oral-portfolio']) {
  Object.assign(entregasMap['oral-portfolio'], {
    fechaRecomendada: "2027-01-15",
    titulo: "Portfolio Final: Presentación Digital en Canva (10-15 Diapositivas) con Exposición Oral",
    archivoEnunciado: "TRASTORN. ORAL/Portfolio final_Evaluación e Intervención en los Trastornos del Lenguaje Oral.pdf",
    archivosAdjuntos: [
      { titulo: "📄 Enunciado Oficial (Portfolio Final - PDF)", path: "TRASTORN. ORAL/Portfolio final_Evaluación e Intervención en los Trastornos del Lenguaje Oral.pdf", tipo: "pdf" }
    ]
  });
}

if (entregasMap['saac-portfolio']) {
  Object.assign(entregasMap['saac-portfolio'], {
    fechaRecomendada: "2027-01-21",
    titulo: "Portfolio Final: Portafolio Individual en PDF (4-6 Páginas o 6-10 Diapositivas)",
    archivoEnunciado: "TIC/PORTFOLIO_SAAC.pdf",
    archivosAdjuntos: [
      { titulo: "📄 Enunciado Oficial (Portfolio Final - PDF)", path: "TIC/PORTFOLIO_SAAC.pdf", tipo: "pdf" }
    ]
  });
}

// 3. VERIFY ALL ATTACHED PATHS EXIST ON DISK
let missingPaths = 0;
for (const e of AL_DATA.entregas) {
  if (e.archivoEnunciado) {
    const full = path.join(rootDir, e.archivoEnunciado);
    if (!fs.existsSync(full)) {
      console.error('MISSING archivoEnunciado:', e.archivoEnunciado);
      missingPaths++;
    }
  }
  if (e.archivosAdjuntos) {
    for (const a of e.archivosAdjuntos) {
      const full = path.join(rootDir, a.path);
      if (!fs.existsSync(full)) {
        console.error('MISSING adjunto:', a.path);
        missingPaths++;
      }
    }
  }
}

for (const a of AL_DATA.asignaturas) {
  if (a.planificacionPdf) {
    const full = path.join(rootDir, a.planificacionPdf);
    if (!fs.existsSync(full)) {
      console.error('MISSING planificacionPdf:', a.planificacionPdf);
      missingPaths++;
    }
  }
  if (a.videoSesion1) {
    const full = path.join(rootDir, a.videoSesion1);
    if (!fs.existsSync(full)) {
      console.error('MISSING videoSesion1:', a.videoSesion1);
      missingPaths++;
    }
  }
}

console.log('Path check complete! Total missing files:', missingPaths);

// 4. WRITE OUT CLEAN JS
const outputJs = `// ============================================================================
// BASE DE DATOS ACADÉMICA Y CLÍNICA - MENCIÓN AUDICIÓN Y LENGUAJE (UCJC 2026-27)
// Sincronizada automáticamente con todos los documentos oficiales, vídeos y rúbricas
// ============================================================================

window.AL_DATA = ${JSON.stringify(AL_DATA, null, 2)};
`;

fs.writeFileSync(dataPath, outputJs, 'utf8');
console.log('[OK] data.js successfully updated with official data!');
