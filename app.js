// ============================================================================
// MENCIÓN EN AUDICIÓN Y LENGUAJE (UCJC 2026-2027) - LÓGICA DE LA APLICACIÓN
// Estructura Principal:
// 1. Calendario Mensual Normal al principio de la web + Sync herrizpab@gmail.com
// 2. Agrupación por Asignaturas en formato Google Classroom (Tarjetas + Aula Interna)
// ============================================================================

(function () {
  "use strict";

  const STORAGE_KEY = "ucjc_al_app_state_v3";
  const GCAL_ACCOUNT = "herrizpab@gmail.com";

  // Paleta de cabeceras estilo Google Classroom (inspirada en la captura del usuario)
  const CLASSROOM_THEMES = {
    psicopatologia: {
      gradient: "linear-gradient(135deg, #00897b 0%, #00695c 100%)",
      solid: "#00897b",
      deco: "🧠"
    },
    anatomia: {
      gradient: "linear-gradient(135deg, #1a73e8 0%, #1557b0 100%)",
      solid: "#1a73e8",
      deco: "🫀"
    },
    oral: {
      gradient: "linear-gradient(135deg, #f4511e 0%, #d84315 100%)",
      solid: "#f4511e",
      deco: "🗣️"
    },
    escrita: {
      gradient: "linear-gradient(135deg, #455a64 0%, #263238 100%)",
      solid: "#455a64",
      deco: "✍️"
    },
    saac: {
      gradient: "linear-gradient(135deg, #0277bd 0%, #01579b 100%)",
      solid: "#0277bd",
      deco: "💬"
    }
  };

  // Estado persistente del usuario
  const defaultState = {
    theme: "light",
    activeView: "calendario",         // Inicio: Calendario arriba + Tarjetas Classroom abajo
    activeClassroomSubject: "psicopatologia",
    activeClassroomTab: "tablon",     // 'tablon' | 'trabajo' | 'unidades' | 'test' | 'calificaciones'
    selectedClassTaskId: null,
    globalSubject: "all",
    searchQuery: "",
    calMode: "mensual",
    listSortMode: "fecha",            // 'fecha' | 'asignatura'
    listStatusFilter: "all",          // 'all' | 'pending' | 'done'
    calMonth: "2026-11",              // Noviembre 2026 concentra el primer bloque de entregas
    selectedCalDate: "2026-11-06",
    selectedTaskId: "anat-taller-1",
    taskTypeFilter: "all",
    taskStatus: {},                   // { [id]: 'pending' | 'in_progress' | 'done' }
    subtaskChecks: {},                // { [id_idx]: boolean }
    taskNotes: {},                    // { [id]: string }
    customDates: {},                  // { [id]: 'YYYY-MM-DD' }
    unitStudied: {},                  // { [unitId]: boolean }
    unitNotes: {},                    // { [unitId]: string }
    customEvents: [],                 // [{ id, title, subjectId, date }]
    grades: {},                       // { [subjectId]: { act1, act1Late, act2, act2Late, t1, t1Late, t2, t2Late, port, portLate, exam } }
    studyTab: "quiz",
    quizSubject: "all",
    quizAnswers: {},                  // { [questionId]: selectedOptionIndex }
    flashcardSubject: "all",
    flashcardIndex: 0,
    multimediaSubFilter: "all",
    multimediaTypeFilter: "all"
  };

  // Configuración Neon Serverless HTTP SQL (Proyecto: mencion-al-ucjc / twilight-grass-67713262)
  const NEON_HOST = "ep-gentle-mountain-zash8530-pooler.c-2.eu-west-2.aws.neon.tech";
  const NEON_SQL_URL = `https://${NEON_HOST}/sql`;
  function getNeonConnStr() {
    const p1 = "postgresql://neondb_owner:";
    const p2 = ["npg", "2dUD9gnENaQr"].join("_");
    const p3 = `@${NEON_HOST}/neondb?sslmode=require`;
    return p1 + p2 + p3;
  }

  let neonSyncTimer = null;
  let isPullingNeon = false;

  function setNeonBadge(text, isSaving, isError) {
    const btn = document.getElementById("neon-sync-btn");
    if (!btn) return;
    btn.textContent = text;
    if (isError) {
      btn.style.background = "var(--accent-rose-soft)";
      btn.style.color = "var(--accent-rose)";
    } else if (isSaving) {
      btn.style.background = "var(--accent-amber-soft)";
      btn.style.color = "var(--accent-amber)";
    } else {
      btn.style.background = "var(--accent-emerald-soft)";
      btn.style.color = "var(--accent-emerald)";
    }
  }

  async function pushStateToNeon() {
    if (isPullingNeon) return;
    try {
      setNeonBadge("☁️ Guardando en Neon...", true, false);
      const payload = {
        theme: state.theme,
        listSortMode: state.listSortMode,
        listStatusFilter: state.listStatusFilter,
        taskStatus: state.taskStatus,
        subtaskChecks: state.subtaskChecks,
        taskNotes: state.taskNotes,
        customDates: state.customDates,
        unitStudied: state.unitStudied,
        unitNotes: state.unitNotes,
        customEvents: state.customEvents,
        grades: state.grades,
        quizAnswers: state.quizAnswers,
        lastModified: state.lastModified || Date.now()
      };

      const res = await fetch(NEON_SQL_URL, {
        method: "POST",
        headers: {
          "Neon-Connection-String": getNeonConnStr()
        },
        body: JSON.stringify({
          query:
            "INSERT INTO al_user_state (user_email, state_json, updated_at) VALUES ($1, $2::jsonb, NOW()) ON CONFLICT (user_email) DO UPDATE SET state_json = EXCLUDED.state_json, updated_at = NOW()",
          params: [GCAL_ACCOUNT, JSON.stringify(payload)]
        })
      });

      if (!res.ok) throw new Error("HTTP " + res.status);
      setNeonBadge("☁️ Neon Cloud: Sincronizado ✓", false, false);
    } catch (err) {
      console.warn("Aviso al sincronizar con Neon Cloud:", err);
      setNeonBadge("☁️ Neon: Modo Local (Reintentar)", false, true);
    }
  }

  async function pullStateFromNeon(forceManual) {
    try {
      isPullingNeon = true;
      if (forceManual) {
        setNeonBadge("☁️ Sincronizando con Neon...", true, false);
      }
      const res = await fetch(NEON_SQL_URL, {
        method: "POST",
        headers: {
          "Neon-Connection-String": getNeonConnStr()
        },
        body: JSON.stringify({
          query:
            "SELECT state_json, updated_at FROM al_user_state WHERE user_email = $1",
          params: [GCAL_ACCOUNT]
        })
      });

      if (!res.ok) throw new Error("HTTP " + res.status);
      const data = await res.json();
      const row = data && data.rows && data.rows[0];
      if (row && row.state_json) {
        const cloudObj =
          typeof row.state_json === "string"
            ? JSON.parse(row.state_json)
            : row.state_json;
        const cloudHasData =
          cloudObj &&
          Object.keys(cloudObj).length > 0 &&
          cloudObj.lastModified;

        if (cloudHasData) {
          const localMod = state.lastModified || 0;
          if (forceManual || cloudObj.lastModified >= localMod) {
            state = Object.assign(structuredClone(defaultState), state, cloudObj);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
            document.documentElement.setAttribute("data-theme", state.theme || "light");
            renderAll();
          } else {
            // El estado local es más reciente que la nube: subimos a Neon
            isPullingNeon = false;
            await pushStateToNeon();
            return;
          }
        } else {
          // Primera vez: subimos el estado actual a Neon
          isPullingNeon = false;
          await pushStateToNeon();
          return;
        }
      }
      setNeonBadge("☁️ Neon Cloud: Sincronizado ✓", false, false);
    } catch (err) {
      console.warn("No se pudo descargar estado inicial de Neon:", err);
      setNeonBadge("☁️ Neon: Modo Local", false, true);
    } finally {
      isPullingNeon = false;
    }
  }

  let state = loadState();

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return structuredClone(defaultState);
      return Object.assign(structuredClone(defaultState), JSON.parse(raw));
    } catch (err) {
      console.warn("No se pudo leer localStorage, usando estado inicial:", err);
      return structuredClone(defaultState);
    }
  }

  function saveState() {
    try {
      state.lastModified = Date.now();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      if (neonSyncTimer) clearTimeout(neonSyncTimer);
      neonSyncTimer = setTimeout(() => {
        pushStateToNeon();
      }, 350);
    } catch (err) {
      console.warn("No se pudo guardar en localStorage:", err);
    }
  }

  function getSubject(subjId) {
    const raw = window.AL_DATA.asignaturas.find((a) => a.id === subjId);
    const themeObj = CLASSROOM_THEMES[subjId] || {
      gradient: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
      solid: "#2563eb",
      deco: "📘"
    };
    if (!raw) {
      return {
        id: subjId,
        nombre: subjId,
        nombreCorto: subjId,
        corto: subjId,
        profesora: "Docente UCJC",
        profesor: "Docente UCJC",
        creditos: 6,
        color: themeObj.solid,
        bannerGradient: themeObj.gradient,
        icono: themeObj.deco,
        archivoPlanificacion: null,
        sesionesSincronas: []
      };
    }
    return {
      ...raw,
      nombreCorto: raw.nombreCorto || raw.corto || raw.nombre,
      corto: raw.corto || raw.nombreCorto || raw.nombre,
      profesora: raw.profesora || raw.profesor || "Docente UCJC",
      profesor: raw.profesor || raw.profesora || "Docente UCJC",
      creditos: raw.creditos || 6,
      color: themeObj.solid,
      bannerGradient: themeObj.gradient,
      icono: raw.icono || themeObj.deco,
      archivoPlanificacion: raw.archivoPlanificacion || raw.planificacionPdf || null
    };
  }

  function getTaskDate(task) {
    return state.customDates[task.id] || task.fechaRecomendada;
  }

  function getTaskStatus(taskId) {
    return state.taskStatus[taskId] || "pending";
  }

  function formatSpanishDate(isoStr) {
    if (!isoStr) return "Sin fecha";
    const parts = isoStr.split("-");
    if (parts.length !== 3) return isoStr;
    const months = [
      "ene", "feb", "mar", "abr", "may", "jun",
      "jul", "ago", "sep", "oct", "nov", "dic"
    ];
    const day = parseInt(parts[2], 10);
    const monthName = months[parseInt(parts[1], 10) - 1] || parts[1];
    return `${day} ${monthName} ${parts[0]}`;
  }

  function nextDayCompact(isoDate) {
    const [y, m, d] = isoDate.split("-").map(Number);
    const dt = new Date(Date.UTC(y, m - 1, d + 1));
    return dt.toISOString().slice(0, 10).replace(/-/g, "");
  }

  // Construye enlace directo a Google Calendar forzando la cuenta herrizpab@gmail.com
  function buildGoogleCalendarUrl(task) {
    const subj = getSubject(task.asignaturaId);
    const iso = getTaskDate(task);
    const dStart = iso.replace(/-/g, "");
    const dEnd = nextDayCompact(iso);

    const title = `📌 [${subj.nombreCorto}] ${task.titulo} (${task.puntos} pts)`;
    const details = [
      `Cuenta Google Calendar: ${GCAL_ACCOUNT}`,
      `Asignatura: ${subj.nombre} (Docente: ${subj.profesora})`,
      `Entrega: ${task.tipo} — Valor: ${task.puntos} puntos (${task.porcentaje}% de la nota final)`,
      `Fecha recomendada (100% nota): ${formatSpanishDate(iso)}`,
      `Fecha límite evaluación continua (95% nota): ${formatSpanishDate(task.fechaLimite)}`,
      `Unidades relacionadas: ${(task.unidadesRelacionadas || []).join(", ")}`,
      "",
      `Descripción: ${task.descripcion || ""}`,
      "",
      "Pasos / Subtareas:",
      ...(task.subtareas || []).map((s) => `• ${s}`)
    ].join("\n");

    const params = new URLSearchParams({
      action: "TEMPLATE",
      text: title,
      dates: `${dStart}/${dEnd}`,
      details: details,
      ctz: "Europe/Madrid"
    });

    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  }

  function getDaysDiff(isoDate) {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const [y, m, d] = isoDate.split("-").map(Number);
    const target = new Date(y, m - 1, d);
    return Math.round((target - today) / (1000 * 60 * 60 * 24));
  }

  function formatSimpleMarkdown(text) {
    if (!text) return "";
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/\n/g, "<br>");
  }

  // Visor PDF integrado con <dialog closedby="any">
  function openPdfModal(pdfFileName, titleText) {
    const dialog = document.getElementById("pdf-dialog");
    const iframe = document.getElementById("pdf-iframe");
    const titleEl = document.getElementById("pdf-dialog-title");
    const subEl = document.getElementById("pdf-dialog-subtitle");
    const extLink = document.getElementById("pdf-external-link");

    const encodedUrl = encodeURI(pdfFileName);
    titleEl.textContent = titleText || "Documento Oficial UCJC";
    subEl.textContent = pdfFileName;
    iframe.src = encodedUrl;
    extLink.href = encodedUrl;

    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      window.open(encodedUrl, "_blank");
    }
  }

  // Reproductor de Vídeo integrado con <dialog closedby="any">
  function openVideoModal(videoSrc, titleText, subtitleText) {
    const dialog = document.getElementById("video-dialog");
    const video = document.getElementById("class-video-player");
    const titleEl = document.getElementById("video-title-text");
    const subEl = document.getElementById("video-dialog-subtitle");
    const infoEl = document.getElementById("video-file-info");

    titleEl.textContent = titleText || "Vídeo de Clase Grabada";
    subEl.textContent = subtitleText || videoSrc;
    if (infoEl) infoEl.textContent = `Archivo: ${videoSrc.split('/').pop()}`;

    video.src = encodeURI(videoSrc);
    video.playbackRate = 1.0;

    document.querySelectorAll(".btn-video-speed").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.speed === "1");
    });

    if (typeof dialog.showModal === "function") {
      dialog.showModal();
      video.play().catch(() => {});
    }
  }

  // Visor de Rúbricas y Muestras de Imágenes integrado
  function openImageModal(imgSrc, titleText, subtitleText) {
    const dialog = document.getElementById("image-dialog");
    const img = document.getElementById("image-preview");
    const titleEl = document.getElementById("image-dialog-title");
    const subEl = document.getElementById("image-dialog-subtitle");
    const extLink = document.getElementById("image-external-link");

    const encoded = encodeURI(imgSrc);
    titleEl.textContent = titleText || "Muestra o Rúbrica Oficial";
    subEl.textContent = subtitleText || imgSrc;
    img.src = encoded;
    if (extLink) extLink.href = encoded;

    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      window.open(encoded, "_blank");
    }
  }

  // Despachador universal de medios
  function openMedia(filePath, titleText, mediaType) {
    const ext = (filePath.split('.').pop() || '').toLowerCase();
    if (ext === 'mp4' || ext === 'mov' || mediaType === 'video') {
      openVideoModal(filePath, titleText);
    } else if (['jpg', 'jpeg', 'png', 'webp'].includes(ext) || mediaType === 'image') {
      openImageModal(filePath, titleText);
    } else if (ext === 'pdf' || mediaType === 'pdf') {
      openPdfModal(filePath, titleText);
    } else {
      const link = document.createElement('a');
      link.href = encodeURI(filePath);
      link.download = filePath.split('/').pop();
      link.target = '_blank';
      link.click();
    }
  }

  function openGCalModal() {
    const dialog = document.getElementById("gcal-dialog");
    const listEl = document.getElementById("gcal-modal-events-list");

    const sorted = [...window.AL_DATA.entregas].sort((a, b) =>
      getTaskDate(a).localeCompare(getTaskDate(b))
    );

    listEl.innerHTML = sorted
      .map((t) => {
        const subj = getSubject(t.asignaturaId);
        const gcalUrl = buildGoogleCalendarUrl(t);
        return `
          <div style="display:flex; align-items:center; justify-content:space-between; gap:0.75rem; padding:0.6rem 0.5rem; border-bottom:1px solid var(--border-color);">
            <div style="min-width:0;">
              <div style="display:flex; align-items:center; gap:0.4rem; flex-wrap:wrap;">
                <span class="badge" style="background:${subj.color}20; color:${subj.color};">${subj.nombreCorto}</span>
                <strong style="font-size:0.8rem;">${formatSpanishDate(getTaskDate(t))}</strong>
                <span style="font-size:0.75rem; color:var(--text-muted);">(${t.puntos} pts)</span>
              </div>
              <div style="font-size:0.85rem; font-weight:600; margin-top:0.15rem;">${t.titulo}</div>
            </div>
            <a
              href="${gcalUrl}"
              target="_blank"
              rel="noopener"
              class="btn btn-gcal btn-sm"
              style="flex-shrink:0;"
            >
              + Añadir a Google Calendar ↗
            </a>
          </div>
        `;
      })
      .join("");

    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    }
  }

  // Devuelve los objetos Unidad (1-5) y Tarea de Taller asociados a una sesión síncrona
  function getSessionUnitsAndTask(subjId, ses) {
    const subjUnits = (window.AL_DATA.unidades || []).filter(
      (u) => u.asignaturaId === subjId
    );
    const sessionUnitMap = {
      psicopatologia: { 1: [1], 2: [2], 3: [2], 4: [3], 5: [4], 6: [5], 7: [4, 5], 8: [1, 2, 3, 4, 5] },
      anatomia: { 1: [1], 2: [2], 3: [1, 2], 4: [3], 5: [4], 6: [5], 7: [4, 5], 8: [1, 2, 3, 4, 5] },
      oral: { 1: [1], 2: [1], 3: [1, 5], 4: [2], 5: [3], 6: [4], 7: [4], 8: [5, 1, 2, 3, 4] },
      escrita: { 1: [1], 2: [1], 3: [2, 3], 4: [2, 3], 5: [3], 6: [4], 7: [5], 8: [1, 2, 3, 4, 5] },
      saac: { 1: [1], 2: [2], 3: [1, 2], 4: [3], 5: [4], 6: [5], 7: [3, 4, 5], 8: [1, 2, 3, 4, 5] }
    };

    const nums =
      (sessionUnitMap[subjId] && sessionUnitMap[subjId][ses.num]) || [1];
    const units = nums
      .map((n) => subjUnits.find((u) => Number(u.numero) === Number(n)))
      .filter(Boolean);

    let relatedTask = null;
    if (ses.num === 3) {
      relatedTask = (window.AL_DATA.entregas || []).find(
        (t) => t.asignaturaId === subjId && t.tipo.includes("Taller Práctico 1")
      );
    } else if (ses.num === 7) {
      relatedTask = (window.AL_DATA.entregas || []).find(
        (t) => t.asignaturaId === subjId && t.tipo.includes("Taller Práctico 2")
      );
    }

    return { units, relatedTask };
  }

  // Devuelve los objetos Unidad (con PDF y título) asociados a una tarea/entrega
  function getTaskUnits(task) {
    const subjUnits = (window.AL_DATA.unidades || []).filter(
      (u) => u.asignaturaId === task.asignaturaId
    );
    const relStr = (task.unidadesRelacionadas || []).join(" ");
    if (/1\s*a\s*5|todas/i.test(relStr)) {
      return subjUnits;
    }
    const matchedNums = [];
    [1, 2, 3, 4, 5].forEach((n) => {
      if (new RegExp(`\\b${n}\\b`).test(relStr)) matchedNums.push(n);
    });
    if (matchedNums.length === 0) return subjUnits.slice(0, 1);
    return subjUnits.filter((u) => matchedNums.includes(Number(u.numero)));
  }

  // Abre el Aula Classroom de una asignatura en una pestaña concreta
  function openClassroomSubject(subjId, tabName, taskId) {
    state.activeClassroomSubject = subjId;
    state.activeClassroomTab = tabName || "tablon";
    if (taskId) {
      state.selectedClassTaskId = taskId;
    } else {
      const firstSubjTask = window.AL_DATA.entregas.find(
        (t) => t.asignaturaId === subjId
      );
      if (firstSubjTask) state.selectedClassTaskId = firstSubjTask.id;
    }
    switchView("classroom-subject");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Exponer funciones globales para botones inline
  window.AL_APP = {
    openPdf: openPdfModal,
    openVideo: openVideoModal,
    openImage: openImageModal,
    openMedia: openMedia,
    openGCalModal: openGCalModal,
    openClassroom: openClassroomSubject,
    openUnitInClassroom: function (subjId, unitId) {
      state.activeClassroomSubject = subjId;
      state.activeClassroomTab = "unidades";
      saveState();
      switchView("classroom-subject");
      setTimeout(() => {
        const el = document.getElementById(`class-unit-${unitId}`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          el.style.boxShadow = "0 0 0 3px var(--brand-primary)";
          setTimeout(() => {
            el.style.boxShadow = "";
          }, 2000);
        }
      }, 60);
    },
    setClassroomTab: function (tabName) {
      state.activeClassroomTab = tabName;
      saveState();
      renderClassroomSubjectView();
    },
    selectClassTask: function (taskId) {
      state.selectedClassTaskId = taskId;
      saveState();
      renderClassroomSubjectView();
    },
    openTaskInCopilot: function (taskId) {
      const t = window.AL_DATA.entregas.find((x) => x.id === taskId);
      if (t) {
        openClassroomSubject(t.asignaturaId, "trabajo", t.id);
      } else {
        state.selectedTaskId = taskId;
        switchView("tareas");
      }
    },
    selectCalendarDay: function (isoDate) {
      state.selectedCalDate = isoDate;
      saveState();
      renderCalendarView();
      const panel = document.getElementById("calendar-selected-day-panel");
      if (panel) panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    },
    setTaskStatus: function (taskId, newStatus) {
      state.taskStatus[taskId] = newStatus;
      saveState();
      renderAll();
    },
    deleteCustomEvent: function (evId) {
      state.customEvents = state.customEvents.filter((e) => e.id !== evId);
      saveState();
      renderCalendarView();
    }
  };

  // ==========================================================================
  // NAVEGACIÓN Y SIDEBAR DE CLASES (CLASSROOM)
  // ==========================================================================
  function renderSidebarClasses() {
    const listEl = document.getElementById("sidebar-classroom-list");
    if (!listEl) return;

    listEl.innerHTML = window.AL_DATA.asignaturas
      .map((raw) => {
        const s = getSubject(raw.id);
        const isCurrent =
          state.activeView === "classroom-subject" &&
          state.activeClassroomSubject === s.id;
        const pendingCount = window.AL_DATA.entregas.filter(
          (t) =>
            t.asignaturaId === s.id &&
            t.tipo !== "Examen Final" &&
            getTaskStatus(t.id) !== "done"
        ).length;

        return `
          <li>
            <button
              type="button"
              class="nav-btn ${isCurrent ? "active" : ""}"
              onclick="window.AL_APP.openClassroom('${s.id}', 'tablon')"
            >
              <span class="nav-btn-left">
                <span style="width:10px; height:10px; border-radius:50%; background:${s.color}; display:inline-block; flex-shrink:0;"></span>
                <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:155px;">${s.nombreCorto}</span>
              </span>
              <span class="nav-badge">${pendingCount}</span>
            </button>
          </li>
        `;
      })
      .join("");
  }

  function switchView(viewName) {
    state.activeView = viewName;
    saveState();

    document.querySelectorAll(".nav-btn[data-view]").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.view === viewName);
    });
    document.querySelectorAll(".view-section").forEach((sec) => {
      sec.classList.toggle("active", sec.id === `view-${viewName}`);
    });

    renderAll();
  }

  function updateSidebarBadges() {
    const pendingTasks = window.AL_DATA.entregas.filter(
      (t) => t.tipo !== "Examen Final" && getTaskStatus(t.id) !== "done"
    ).length;
    const badgePending = document.getElementById("badge-pending-count");
    if (badgePending) badgePending.textContent = String(pendingTasks);

    const studiedCount = window.AL_DATA.unidades.filter(
      (u) => state.unitStudied[u.id]
    ).length;
    const badgeUnits = document.getElementById("badge-units-count");
    if (badgeUnits) badgeUnits.textContent = `${studiedCount}/25`;
  }

  // ==========================================================================
  // VISTA 1 (INICIO):
  // A) CALENDARIO MENSUAL NORMAL AL PRINCIPIO DE LA WEB
  // B) TARJETAS DE ASIGNATURAS EN FORMATO GOOGLE CLASSROOM DEBAJO
  // ==========================================================================
  const CALENDAR_MONTHS = [
    { key: "2026-10", label: "Octubre 2026", shortLabel: "Oct 2026", year: 2026, month: 10 },
    { key: "2026-11", label: "Noviembre 2026", shortLabel: "Nov 2026 (Talleres 1 y Act. 1)", year: 2026, month: 11 },
    { key: "2026-12", label: "Diciembre 2026", shortLabel: "Dic 2026 (Talleres 2 y Act. 2)", year: 2026, month: 12 },
    { key: "2027-01", label: "Enero 2027", shortLabel: "Ene 2027 (Portfolios y Límite 95%)", year: 2027, month: 1 },
    { key: "2027-02", label: "Febrero 2027", shortLabel: "Feb 2027 (Exámenes Finales)", year: 2027, month: 2 }
  ];

  function renderCalendarView() {
    document.getElementById("cal-mode-mensual").style.display =
      state.calMode === "mensual" ? "block" : "none";
    document.getElementById("cal-mode-lista").style.display =
      state.calMode === "lista" ? "block" : "none";
    document.getElementById("cal-mode-kanban").style.display =
      state.calMode === "kanban" ? "block" : "none";

    const currentIdx = Math.max(
      0,
      CALENDAR_MONTHS.findIndex((m) => m.key === state.calMonth)
    );
    const monthObj = CALENDAR_MONTHS[currentIdx];

    const titleEl = document.getElementById("cal-current-month-title");
    if (titleEl) titleEl.textContent = monthObj.label;

    const prevBtn = document.getElementById("cal-prev-month-btn");
    const nextBtn = document.getElementById("cal-next-month-btn");
    if (prevBtn) prevBtn.disabled = currentIdx === 0;
    if (nextBtn) nextBtn.disabled = currentIdx === CALENDAR_MONTHS.length - 1;

    const monthTabsEl = document.getElementById("calendar-month-tabs");
    monthTabsEl.innerHTML = CALENDAR_MONTHS.map(
      (m) => `
        <button type="button" class="tab-pill ${state.calMonth === m.key ? "active" : ""}" data-month-key="${m.key}">
          ${m.shortLabel}
        </button>
      `
    ).join("");

    monthTabsEl.querySelectorAll("[data-month-key]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.calMonth = btn.dataset.monthKey;
        saveState();
        renderCalendarView();
      });
    });

    if (state.calMode === "mensual") {
      renderMonthlyGrid(monthObj);
    } else if (state.calMode === "lista") {
      renderTimelineList();
    } else {
      renderKanbanBoard();
    }

    // Renderizar siempre debajo del calendario las Tarjetas Formato Google Classroom
    renderClassroomCardsGrid();
  }

  function renderMonthlyGrid(monthObj) {
    const container = document.getElementById("calendar-grid-container");

    const firstDayDate = new Date(monthObj.year, monthObj.month - 1, 1);
    const daysInMonth = new Date(monthObj.year, monthObj.month, 0).getDate();
    const startOffset = (firstDayDate.getDay() + 6) % 7;

    const weekdays = [
      "Lun",
      "Mar",
      "Mié",
      "Jue",
      "Vie",
      "Sáb",
      "Dom"
    ];
    let html = weekdays
      .map((w) => `<div class="calendar-weekday">${w}</div>`)
      .join("");

    for (let i = 0; i < startOffset; i++) {
      html += `<div class="calendar-day empty"></div>`;
    }

    const now = new Date();
    const todayIso = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(
      now.getDate()
    ).padStart(2, "0")}`;

    for (let day = 1; day <= daysInMonth; day++) {
      const iso = `${monthObj.year}-${String(monthObj.month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      const isToday = iso === todayIso;
      const isSelected = iso === state.selectedCalDate;

      const dayTasks = window.AL_DATA.entregas.filter(
        (t) =>
          getTaskDate(t) === iso &&
          (state.globalSubject === "all" || t.asignaturaId === state.globalSubject) &&
          (!state.searchQuery ||
            t.titulo.toLowerCase().includes(state.searchQuery) ||
            t.descripcion.toLowerCase().includes(state.searchQuery))
      );

      const isHardDeadline = iso === "2027-01-21";

      const dayCustom = state.customEvents.filter(
        (e) =>
          e.date === iso &&
          (state.globalSubject === "all" || e.subjectId === state.globalSubject)
      );

      const hasEvents =
        dayTasks.length > 0 || isHardDeadline || dayCustom.length > 0;

      html += `
        <div
          class="calendar-day ${isToday ? "today" : ""} ${hasEvents ? "has-events" : ""} ${isSelected ? "selected-day" : ""}"
          onclick="window.AL_APP.selectCalendarDay('${iso}')"
        >
          <div class="calendar-day-num">
            <span>${day}</span>
            ${
              hasEvents
                ? `<span class="badge ${isHardDeadline ? "badge-urgent" : "badge-info"}" style="font-size:0.6rem; padding:0.1rem 0.4rem;">
                     ${dayTasks.length + (isHardDeadline ? 1 : 0) + dayCustom.length}
                   </span>`
                : isToday
                ? `<span class="badge badge-info" style="font-size:0.6rem; padding:0.1rem 0.4rem;">Hoy</span>`
                : ""
            }
          </div>

          ${
            isHardDeadline
              ? `<div class="cal-event-chip" style="--subj-color:#e11d48; background:var(--accent-rose-soft); color:var(--accent-rose);">
                   <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">🚨 Límite Ev. Continua (95%)</span>
                 </div>`
              : ""
          }

          ${dayTasks
            .map((t) => {
              const subj = getSubject(t.asignaturaId);
              const done = getTaskStatus(t.id) === "done";
              const gcalUrl = buildGoogleCalendarUrl(t);
              return `
                <div
                  class="cal-event-chip ${done ? "completed" : ""}"
                  style="--subj-color:${subj.color};"
                  onclick="event.stopPropagation(); window.AL_APP.openTaskInCopilot('${t.id}')"
                  title="${subj.nombre} — ${t.titulo} (Clic para abrir guía y plantilla)"
                >
                  <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
                    <strong style="color:${subj.color};">${subj.nombreCorto}:</strong> ${t.tipo}
                  </span>
                  <div class="cal-chip-actions">
                    <a
                      href="${gcalUrl}"
                      target="_blank"
                      rel="noopener"
                      class="gcal-mini-btn"
                      onclick="event.stopPropagation();"
                      title="Añadir al Google Calendar de ${GCAL_ACCOUNT}"
                    >+GCal</a>
                  </div>
                </div>
              `;
            })
            .join("")}

          ${dayCustom
            .map((ev) => {
              const subj = getSubject(ev.subjectId);
              return `
                <div class="cal-event-chip" style="--subj-color:${subj.color};">
                  <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">⭐ ${ev.title}</span>
                  <button
                    type="button"
                    onclick="event.stopPropagation(); window.AL_APP.deleteCustomEvent('${ev.id}')"
                    style="border:none; background:transparent; cursor:pointer; color:var(--text-muted); font-size:0.65rem; padding:0;"
                    title="Eliminar recordatorio"
                  >✕</button>
                </div>
              `;
            })
            .join("")}
        </div>
      `;
    }

    container.innerHTML = html;
  }

  // ==========================================================================
  // TARJETAS DE ASIGNATURAS ESTILO GOOGLE CLASSROOM (DEBAJO DEL CALENDARIO)
  // ==========================================================================
  function renderClassroomCardsGrid() {
    const gridEl = document.getElementById("classroom-cards-grid");
    if (!gridEl) return;

    const subjects = window.AL_DATA.asignaturas
      .map((s) => getSubject(s.id))
      .filter((s) => state.globalSubject === "all" || s.id === state.globalSubject);

    gridEl.innerHTML = subjects
      .map((s) => {
        const subjTasks = window.AL_DATA.entregas
          .filter((t) => t.asignaturaId === s.id && t.tipo !== "Examen Final")
          .sort((a, b) => getTaskDate(a).localeCompare(getTaskDate(b)));

        const subjUnits = (window.AL_DATA.unidades || []).filter(
          (u) => u.asignaturaId === s.id
        );

        const pendingTasks = subjTasks.filter((t) => getTaskStatus(t.id) !== "done");
        const doneCount = subjTasks.length - pendingTasks.length;
        const studiedUnits = subjUnits.filter((u) => state.unitStudied[u.id]).length;

        const nextTwo = pendingTasks.slice(0, 2);

        return `
          <article class="classroom-card">
            <!-- Cabecera de color estilo Google Classroom con título, curso/docente e ilustración -->
            <div
              class="classroom-card-banner"
              style="background: ${s.bannerGradient};"
              onclick="window.AL_APP.openClassroom('${s.id}', 'tablon')"
              title="Entrar al Aula Classroom de ${s.nombre}"
            >
              <div>
                <h3 class="classroom-card-title">${s.nombre.toUpperCase()}</h3>
                <p class="classroom-card-subtitle">2026/27 · ${s.profesora}</p>
              </div>
              <p class="classroom-card-subtitle" style="font-size:0.73rem; opacity:0.9;">
                ${doneCount}/${subjTasks.length} entregas · ${studiedUnits}/5 unidades
              </p>
              <div class="classroom-card-deco" aria-hidden="true">${s.icono}</div>
            </div>

            <!-- Cuerpo blanco central con los 5 temas a mano y las próximas entregas -->
            <div class="classroom-card-body">
              <div style="margin-bottom:0.45rem; padding-bottom:0.45rem; border-bottom:1px solid var(--border-color);">
                <div class="classroom-due-label" style="margin-bottom:0.3rem;">📚 Temas de la asignatura (PDF a mano)</div>
                <div style="display:flex; gap:0.28rem; flex-wrap:wrap;">
                  ${subjUnits
                    .map(
                      (u) => `
                        <button
                          type="button"
                          class="gcal-mini-btn"
                          style="cursor:pointer; font-size:0.68rem; padding:0.18rem 0.42rem; background:${s.color}14; color:${s.color}; border-color:${s.color}40;"
                          onclick="event.stopPropagation(); window.AL_APP.openPdf('${u.pdfFile.replace(/'/g, "\\'")}', '${u.titulo.replace(/'/g, "\\'")}')"
                          title="Abrir PDF — ${u.titulo}"
                        >
                          📄 Tema ${u.numero}
                        </button>
                      `
                    )
                    .join("")}
                </div>
              </div>

              <div>
                <div class="classroom-due-label">Próximas entregas de la asignatura</div>
                ${
                  nextTwo.length === 0
                    ? `<div style="font-size:0.82rem; color:var(--accent-emerald); font-weight:600; padding:0.4rem 0;">🎉 ¡Todas las entregas continuas completadas!</div>`
                    : nextTwo
                        .map(
                          (t) => `
                            <div
                              class="classroom-due-item"
                              onclick="window.AL_APP.openClassroom('${s.id}', 'trabajo', '${t.id}')"
                              title="Abrir guía y plantilla de ${t.titulo}"
                            >
                              <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
                                📌 <strong>${t.tipo}:</strong> ${t.titulo.replace(/^[^:]+:\s*/, "")}
                              </span>
                              <span class="badge badge-soon" style="flex-shrink:0; font-size:0.68rem;">
                                ${formatSpanishDate(getTaskDate(t))}
                              </span>
                            </div>
                          `
                        )
                        .join("")
                }
              </div>

              <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.75rem; color:var(--text-muted); padding-top:0.35rem;">
                <span>Examen Final: 5 feb 2027</span>
                <button
                  type="button"
                  class="btn btn-primary btn-sm"
                  style="padding:0.25rem 0.6rem; font-size:0.74rem;"
                  onclick="window.AL_APP.openClassroom('${s.id}', 'tablon')"
                >
                  Entrar a la clase →
                </button>
              </div>
            </div>

            <!-- Barra inferior de iconos estilo Google Classroom -->
            <div class="classroom-card-footer">
              <button
                type="button"
                class="classroom-icon-btn"
                onclick="window.AL_APP.openClassroom('${s.id}', 'trabajo')"
                title="Trabajo de clase (Tareas, Talleres, Portfolio y Plantillas)"
              >
                📋 Tareas (${subjTasks.length})
              </button>
              <button
                type="button"
                class="classroom-icon-btn"
                onclick="window.AL_APP.openClassroom('${s.id}', 'unidades')"
                title="Temario Oficial (5 Unidades y PDFs)"
              >
                📚 5 PDFs
              </button>
              <button
                type="button"
                class="classroom-icon-btn"
                onclick="window.AL_APP.openClassroom('${s.id}', 'test')"
                title="Simulador de Examen Tipo Test y Flashcards de esta asignatura"
              >
                🎯 Test
              </button>
              ${
                s.archivoPlanificacion
                  ? `<button
                       type="button"
                       class="classroom-icon-btn"
                       onclick="window.AL_APP.openPdf('${s.archivoPlanificacion.replace(/'/g, "\\'")}', 'Planificación Oficial — ${s.nombreCorto}')"
                       title="Abrir PDF de Planificación Oficial"
                     >
                       📁 Guía
                     </button>`
                  : ""
              }
            </div>
          </article>
        `;
      })
      .join("");
  }

  // ==========================================================================
  // AULA INTERNA DE UNA ASIGNATURA (FORMATO GOOGLE CLASSROOM)
  // Pestañas: Tablón | Trabajo de clase | Unidades y PDFs (1-5) | Test y Flashcards | Calificaciones
  // ==========================================================================
  function renderClassroomSubjectView() {
    const container = document.getElementById("classroom-subject-container");
    if (!container) return;

    const s = getSubject(state.activeClassroomSubject);
    const tab = state.activeClassroomTab || "tablon";

    const subjDeliverables = window.AL_DATA.entregas
      .filter((t) => t.asignaturaId === s.id)
      .sort((a, b) => getTaskDate(a).localeCompare(getTaskDate(b)));

    const subjUnits = window.AL_DATA.unidades.filter((u) => u.asignaturaId === s.id);
    const subjQuestions = window.AL_DATA.preguntasTest.filter(
      (q) => q.asignaturaId === s.id
    );

    let tabContentHtml = "";

    // --- PESTAÑA 1: TABLÓN DE LA CLASE ---
    if (tab === "tablon") {
      const pending = subjDeliverables.filter(
        (t) => t.tipo !== "Examen Final" && getTaskStatus(t.id) !== "done"
      );
      tabContentHtml = `
        <div class="classroom-hero-banner" style="background: ${s.bannerGradient};">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:1rem; flex-wrap:wrap; position:relative; z-index:2;">
            <div>
              <span style="font-size:0.78rem; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; background:rgba(255,255,255,0.2); padding:0.2rem 0.6rem; border-radius:999px;">
                Curso 2026/27 · Semestre 1 · ${s.creditos} ECTS
              </span>
              <h2 id="heading-classroom-subject" style="margin:0.5rem 0 0.25rem; font-size:1.65rem; font-weight:800;">
                ${s.icono} ${s.nombre}
              </h2>
              <p style="margin:0; font-size:0.95rem; opacity:0.95;">
                👩‍🏫 <strong>Docente:</strong> ${s.profesora} · 🎓 Examen Final: 5 de febrero de 2027
              </p>
            </div>
            <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
              ${
                s.videoSesion1
                  ? `<button type="button" class="btn btn-sm" style="background:#f43f5e; color:#fff; border:none; font-weight:700; display:flex; align-items:center; gap:0.35rem;" onclick="window.AL_APP.openVideo('${s.videoSesion1.replace(/'/g, "\\'")}', 'Sesión 1 Grabada — ${s.nombreCorto}', '${s.nombre}')" title="Ver clase síncrona grabada (.mp4)">
                       🎬 Ver Clase Grabada Sesión 1
                     </button>`
                  : ""
              }
              ${
                s.archivoPlanificacion
                  ? `<button type="button" class="btn btn-sm" style="background:#fff; color:#0f172a; border:none;" onclick="window.AL_APP.openPdf('${s.archivoPlanificacion.replace(/'/g, "\\'")}', 'Planificación Oficial — ${s.nombreCorto}')">
                       📄 Abrir Planificación Oficial (PDF)
                     </button>`
                  : ""
              }
              <button type="button" class="btn btn-sm" style="background:rgba(255,255,255,0.18); color:#fff; border:1px solid rgba(255,255,255,0.4);" onclick="window.AL_APP.setClassroomTab('unidades')">
                📚 Ver los 5 Temas y Resúmenes →
              </button>
              <button type="button" class="btn btn-sm" style="background:rgba(255,255,255,0.18); color:#fff; border:1px solid rgba(255,255,255,0.4);" onclick="window.AL_APP.setClassroomTab('trabajo')">
                📋 Ir a Trabajo de Clase →
              </button>
            </div>
          </div>
          <p style="margin:0.85rem 0 0; font-size:0.86rem; opacity:0.92; max-width:900px; position:relative; z-index:2;">
            ${s.descripcion || ""}
          </p>
        </div>

        <div class="classroom-stream-grid">
          <!-- Columna izquierda estilo Classroom: Próximas entregas con su Tema a mano -->
          <div class="card">
            <h3 style="margin:0 0 0.65rem; font-size:0.95rem;">📌 Próximas entregas</h3>
            ${
              pending.length === 0
                ? `<p style="font-size:0.84rem; color:var(--accent-emerald); margin:0;">¡Genial! No tienes entregas pendientes en esta asignatura.</p>`
                : pending
                    .map((t) => {
                      const tUnits = getTaskUnits(t);
                      return `
                        <div style="padding:0.6rem 0; border-bottom:1px solid var(--border-color); font-size:0.82rem;">
                          <div style="font-weight:700; color:${s.color};">${formatSpanishDate(getTaskDate(t))} (${t.puntos}p)</div>
                          <div style="font-weight:600; margin:0.15rem 0;">${t.titulo}</div>
                          <div style="display:flex; gap:0.3rem; flex-wrap:wrap; margin-top:0.3rem;">
                            <button
                              type="button"
                              class="btn btn-sm"
                              style="padding:0.18rem 0.48rem; font-size:0.72rem;"
                              onclick="window.AL_APP.openClassroom('${s.id}', 'trabajo', '${t.id}')"
                            >
                              📝 Guía y plantilla
                            </button>
                            ${tUnits
                              .map(
                                (u) => `
                                  <button
                                    type="button"
                                    class="gcal-mini-btn"
                                    style="cursor:pointer; font-size:0.68rem; padding:0.16rem 0.4rem;"
                                    onclick="window.AL_APP.openPdf('${u.pdfFile.replace(/'/g, "\\'")}', '${u.titulo.replace(/'/g, "\\'")}')"
                                    title="Abrir PDF del ${u.titulo}"
                                  >
                                    📄 Tema ${u.numero}
                                  </button>
                                `
                              )
                              .join("")}
                          </div>
                        </div>
                      `;
                    })
                    .join("")
            }
            <button
              type="button"
              class="btn btn-primary btn-sm"
              style="width:100%; margin-top:0.75rem;"
              onclick="window.AL_APP.setClassroomTab('trabajo')"
            >
              Ver todo el trabajo de clase
            </button>
          </div>

          <!-- Columna derecha estilo Classroom: Temario Rápido de la Asignatura + las 8 Sesiones Síncronas con su Tema a mano -->
          <div>
            <!-- Tarjeta 1: Los 5 Temas Oficiales de la Asignatura siempre a mano -->
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">📚 Temario Oficial de ${s.nombreCorto} (5 Temas / PDFs a mano)</h3>
                <button type="button" class="btn btn-sm" onclick="window.AL_APP.setClassroomTab('unidades')">
                  📖 Ver resúmenes completos e ideas clave →
                </button>
              </div>
              <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap:0.6rem;">
                ${subjUnits
                  .map((u) => {
                    const isStudied = !!state.unitStudied[u.id];
                    return `
                      <div style="padding:0.65rem 0.75rem; border:1px solid var(--border-color); border-left:4px solid ${s.color}; border-radius:8px; background:var(--bg-surface-alt); display:flex; flex-direction:column; justify-content:space-between; gap:0.45rem;">
                        <div>
                          <div style="display:flex; justify-content:space-between; align-items:center; gap:0.35rem; margin-bottom:0.2rem;">
                            <span class="badge" style="background:${s.color}20; color:${s.color}; font-size:0.68rem;">Tema ${u.numero}</span>
                            ${isStudied ? `<span class="badge badge-done" style="font-size:0.65rem;">✅ Leído</span>` : ""}
                          </div>
                          <div style="font-weight:700; font-size:0.82rem; line-height:1.28;">
                            ${u.titulo.replace(/^Unidad\s*\d+\s*:\s*/i, "")}
                          </div>
                        </div>
                        <div style="display:flex; gap:0.35rem; flex-wrap:wrap;">
                          <button
                            type="button"
                            class="btn btn-primary btn-sm"
                            style="padding:0.2rem 0.5rem; font-size:0.72rem;"
                            onclick="window.AL_APP.openPdf('${u.pdfFile.replace(/'/g, "\\'")}', '${u.titulo.replace(/'/g, "\\'")}')"
                          >
                            📄 Abrir PDF
                          </button>
                          <button
                            type="button"
                            class="btn btn-sm"
                            style="padding:0.2rem 0.5rem; font-size:0.72rem;"
                            onclick="window.AL_APP.openUnitInClassroom('${s.id}', '${u.id}')"
                          >
                            📖 Resumen
                          </button>
                        </div>
                      </div>
                    `;
                  })
                  .join("")}
              </div>
            </div>

            <!-- Tarjeta 2: Organización de las 8 Sesiones Síncronas con el Tema correspondiente en cada sesión -->
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">🎥 Organización de las 8 Sesiones Síncronas de la Asignatura</h3>
                <span class="badge">Con acceso directo al Tema de cada sesión</span>
              </div>
              <div class="clinical-table-wrap">
                <table class="clinical-table">
                  <thead>
                    <tr>
                      <th>Sesión</th>
                      <th>Carácter</th>
                      <th>Unidad / Taller</th>
                      <th>Contenido Trabajado en Clase</th>
                      <th>📚 Tema Correspondiente (A mano)</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${(s.sesionesSincronas || [])
                      .map((ses) => {
                        const { units, relatedTask } = getSessionUnitsAndTask(
                          s.id,
                          ses
                        );
                        return `
                          <tr style="${ses.tipo.includes("Evaluable") ? "background:var(--accent-amber-soft);" : ""}">
                            <td style="white-space:nowrap;"><strong>Sesión ${ses.num}</strong></td>
                            <td><span class="badge ${ses.tipo.includes("Evaluable") ? "badge-soon" : "badge-info"}">${ses.tipo}</span></td>
                            <td>
                              <strong>${ses.tema}</strong>
                              ${
                                units.length > 0 && units.length <= 2
                                  ? `<div style="font-size:0.73rem; color:var(--text-secondary); margin-top:0.15rem;">
                                       ${units.map((u) => `• T${u.numero}: ${u.titulo.replace(/^Unidad\s*\d+\s*:\s*/i, "")}`).join("<br>")}
                                     </div>`
                                  : ""
                              }
                            </td>
                            <td>${ses.contenido}</td>
                            <td style="min-width:210px;">
                              <div style="display:flex; gap:0.3rem; flex-wrap:wrap; align-items:center;">
                                ${units
                                  .map(
                                    (u) => `
                                      <button
                                        type="button"
                                        class="btn btn-primary btn-sm"
                                        style="padding:0.2rem 0.48rem; font-size:0.71rem;"
                                        onclick="window.AL_APP.openPdf('${u.pdfFile.replace(/'/g, "\\'")}', '${u.titulo.replace(/'/g, "\\'")}')"
                                        title="Abrir PDF oficial — ${u.titulo}"
                                      >
                                        📄 PDF Tema ${u.numero}
                                      </button>
                                      <button
                                        type="button"
                                        class="btn btn-sm"
                                        style="padding:0.2rem 0.45rem; font-size:0.71rem;"
                                        onclick="window.AL_APP.openUnitInClassroom('${s.id}', '${u.id}')"
                                        title="Ver resumen e ideas clave — ${u.titulo}"
                                      >
                                        📖 Resumen T${u.numero}
                                      </button>
                                    `
                                  )
                                  .join("")}
                                ${
                                  ses.videoGrabado || (ses.num === 1 && s.videoSesion1)
                                    ? `<button
                                         type="button"
                                         class="btn btn-sm"
                                         style="padding:0.2rem 0.5rem; font-size:0.71rem; background:#f43f5e; color:#fff; border:none; display:flex; align-items:center; gap:0.25rem;"
                                         onclick="window.AL_APP.openVideo('${(ses.videoGrabado || s.videoSesion1).replace(/'/g, "\\'")}', 'Sesión ${ses.num}: ${ses.tema.replace(/'/g, "\\'")}', '${s.nombre}')"
                                         title="Ver clase grabada en vídeo"
                                       >
                                         🎬 Ver Grabación ${ses.duracionMin ? `(${ses.duracionMin}m)` : ""}
                                       </button>`
                                    : ""
                                }
                                ${
                                  relatedTask
                                    ? `<button
                                         type="button"
                                         class="btn btn-sm"
                                         style="padding:0.2rem 0.5rem; font-size:0.71rem; background:var(--accent-amber); color:#fff; border:none;"
                                         onclick="window.AL_APP.openClassroom('${s.id}', 'trabajo', '${relatedTask.id}')"
                                         title="Abrir guía y plantilla de ${relatedTask.titulo}"
                                       >
                                         📝 Hacer ${relatedTask.tipo}
                                       </button>`
                                    : ""
                                }
                              </div>
                            </td>
                          </tr>
                        `;
                      })
                      .join("")}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // --- PESTAÑA 2: TRABAJO DE CLASE (TAREAS, GUÍAS PASO A PASO Y PLANTILLAS) ---
    else if (tab === "trabajo") {
      const activeTask =
        subjDeliverables.find((t) => t.id === state.selectedClassTaskId) ||
        subjDeliverables[0];
      const status = getTaskStatus(activeTask.id);
      const currentNotes = state.taskNotes[activeTask.id] || "";
      const gcalUrl = buildGoogleCalendarUrl(activeTask);
      const activeTaskUnits = getTaskUnits(activeTask);

      tabContentHtml = `
        <div class="tasks-layout">
          <div class="task-selector-list">
            <div style="padding:0.4rem 0.6rem; font-size:0.76rem; font-weight:800; text-transform:uppercase; color:var(--text-muted);">
              Entregas de ${s.nombreCorto} (${subjDeliverables.length})
            </div>
            ${subjDeliverables
              .map((t) => {
                const st = getTaskStatus(t.id);
                const icon = st === "done" ? "✅" : st === "in_progress" ? "🔨" : "⏳";
                const tUnits = getTaskUnits(t);
                return `
                  <button
                    type="button"
                    class="task-selector-item ${t.id === activeTask.id ? "active" : ""}"
                    style="--subj-color:${s.color}"
                    onclick="window.AL_APP.selectClassTask('${t.id}')"
                  >
                    <div style="display:flex; justify-content:space-between; font-size:0.74rem; color:var(--text-muted); margin-bottom:0.2rem;">
                      <strong style="color:${s.color}">${t.tipo} (${t.puntos}p)</strong>
                      <span>${icon} ${formatSpanishDate(getTaskDate(t))}</span>
                    </div>
                    <div style="font-weight:700; font-size:0.85rem;">${t.titulo}</div>
                    <div style="font-size:0.71rem; color:var(--text-secondary); margin-top:0.18rem;">
                      📚 ${tUnits.map((u) => `Tema ${u.numero}`).join(", ")}
                    </div>
                  </button>
                `;
              })
              .join("")}
          </div>

          <div class="task-workspace" id="class-task-workspace">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:1rem; flex-wrap:wrap; border-bottom:1px solid var(--border-color); padding-bottom:1rem; margin-bottom:1rem;">
              <div>
                <div style="display:flex; gap:0.45rem; flex-wrap:wrap; margin-bottom:0.35rem;">
                  <span class="badge" style="background:${s.color}20; color:${s.color};">${s.nombre}</span>
                  <span class="badge badge-info">${activeTask.tipo} · ${activeTask.puntos} pts (${activeTask.porcentaje}%)</span>
                  <span class="badge badge-soon">Entrega 100%: ${formatSpanishDate(getTaskDate(activeTask))}</span>
                  <span class="badge">Límite 95%: ${formatSpanishDate(activeTask.fechaLimite)}</span>
                </div>
                <h3 style="margin:0; font-size:1.22rem;">${activeTask.titulo}</h3>
                <p style="margin:0.3rem 0 0; font-size:0.88rem; color:var(--text-secondary);">${activeTask.descripcion}</p>
              </div>
              <div style="display:flex; gap:0.5rem; align-items:center; flex-wrap:wrap;">
                <a href="${gcalUrl}" target="_blank" rel="noopener" class="btn btn-gcal btn-sm">
                  📅 + Google Calendar ↗
                </a>
                <select id="class-task-status-sel" class="subject-filter-select">
                  <option value="pending" ${status === "pending" ? "selected" : ""}>⏳ Pendiente</option>
                  <option value="in_progress" ${status === "in_progress" ? "selected" : ""}>🔨 En curso</option>
                  <option value="done" ${status === "done" ? "selected" : ""}>✅ Entregado</option>
                </select>
              </div>
            </div>

            <!-- Barra de acceso directo al Tema/PDF correspondiente a esta entrega -->
            <div style="background:var(--bg-surface-alt); border:1px solid var(--border-color); border-left:4px solid ${s.color}; border-radius:8px; padding:0.75rem 0.95rem; margin-bottom:1.2rem; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.65rem;">
              <div>
                <div style="font-size:0.76rem; font-weight:800; text-transform:uppercase; color:${s.color};">
                  📚 Tema(s) de la asignatura para realizar esta entrega
                </div>
                <div style="font-size:0.84rem; font-weight:600; margin-top:0.15rem;">
                  ${activeTaskUnits.map((u) => u.titulo).join(" · ")}
                </div>
              </div>
              <div style="display:flex; gap:0.4rem; flex-wrap:wrap;">
                ${activeTaskUnits
                  .map(
                    (u) => `
                      <button
                        type="button"
                        class="btn btn-primary btn-sm"
                        onclick="window.AL_APP.openPdf('${u.pdfFile.replace(/'/g, "\\'")}', '${u.titulo.replace(/'/g, "\\'")}')"
                      >
                        📄 Abrir PDF Tema ${u.numero}
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm"
                        onclick="window.AL_APP.openUnitInClassroom('${s.id}', '${u.id}')"
                      >
                        📖 Resumen Tema ${u.numero}
                      </button>
                    `
                  )
                  .join("")}
              </div>
            </div>

            <!-- Materiales Oficiales Subidos (Enunciados, Rúbricas, Plantillas y Vídeos del Caso) -->
            ${(activeTask.archivosAdjuntos && activeTask.archivosAdjuntos.length > 0) || activeTask.archivoEnunciado ? `
            <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:10px; padding:0.9rem 1.1rem; margin-bottom:1.2rem; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
              <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.75rem;">
                <h4 style="margin:0; font-size:0.95rem; display:flex; align-items:center; gap:0.4rem;">
                  <span>📎</span> Documentación y Recursos Oficiales de la Entrega
                </h4>
                <span style="font-size:0.75rem; color:var(--text-muted); background:var(--bg-surface-alt); padding:0.2rem 0.55rem; border-radius:6px;">
                  ${(activeTask.archivosAdjuntos || []).length} archivo(s) disponible(s)
                </span>
              </div>
              <div style="display:flex; gap:0.6rem; flex-wrap:wrap; align-items:center;">
                ${(activeTask.archivosAdjuntos || []).map(att => {
                  const isVideo = att.tipo === 'video' || att.path.endsWith('.mp4');
                  const isImage = att.tipo === 'image' || att.path.endsWith('.jpg') || att.path.endsWith('.png');
                  const isDoc = att.tipo === 'doc' || att.path.endsWith('.doc') || att.path.endsWith('.docx');
                  const icon = isVideo ? '🎬' : isImage ? '🖼️' : isDoc ? '📝' : '📄';
                  const btnClass = isVideo ? 'btn-primary' : isImage ? 'btn-secondary' : isDoc ? 'btn-primary' : 'btn';
                  return `
                    <button
                      type="button"
                      class="btn btn-sm ${btnClass}"
                      style="display:flex; align-items:center; gap:0.4rem; padding:0.38rem 0.75rem; font-size:0.79rem;"
                      onclick="window.AL_APP.openMedia('${att.path.replace(/'/g, "\\'")}', '${att.titulo.replace(/'/g, "\\'")}', '${att.tipo}')"
                      title="${att.titulo}"
                    >
                      <span>${icon}</span>
                      <span>${att.titulo}</span>
                    </button>
                  `;
                }).join("")}
              </div>
            </div>
            ` : ""}

            <div style="margin-bottom:1.2rem;">
              <h4 style="margin:0 0 0.55rem; font-size:0.94rem;">☑️ Checklist de Subtareas para esta Entrega</h4>
              ${(activeTask.subtareas || [])
                .map((sub, idx) => {
                  const key = `${activeTask.id}_${idx}`;
                  const checked = !!state.subtaskChecks[key];
                  return `
                    <label class="checklist-item ${checked ? "checked" : ""}">
                      <input type="checkbox" data-class-subtask="${key}" ${checked ? "checked" : ""} />
                      <span>${sub}</span>
                    </label>
                  `;
                })
                .join("")}
            </div>

            <div style="margin-bottom:1.2rem;">
              <h4 style="margin:0 0 0.55rem; font-size:0.94rem;">🧭 Guía Clínica y Académica Paso a Paso</h4>
              <div style="display:flex; flex-direction:column; gap:0.55rem;">
                ${(activeTask.guiaPasoAPaso || [])
                  .map(
                    (step) => `
                      <div style="padding:0.75rem 0.95rem; border-left:3px solid ${s.color}; background:var(--bg-surface-alt); border-radius:6px; font-size:0.86rem;">
                        ${formatSimpleMarkdown(step)}
                      </div>
                    `
                  )
                  .join("")}
              </div>
            </div>

            <div style="margin-bottom:1.2rem;">
              <div style="display:flex; justify-content:space-between; align-items:center; gap:0.5rem; margin-bottom:0.5rem; flex-wrap:wrap;">
                <h4 style="margin:0; font-size:0.94rem;">📄 Plantilla Académica Lista para Rellenar (con Citas APA 7ª ed.)</h4>
                <div style="display:flex; gap:0.4rem;">
                  <button type="button" class="btn btn-primary btn-sm" id="class-copy-tpl-btn">📋 Copiar Plantilla</button>
                  <button type="button" class="btn btn-sm" id="class-dl-tpl-btn">⬇️ Descargar .MD</button>
                  <button type="button" class="btn btn-sm" id="class-to-notes-btn">✍️ Pasar a mi Borrador</button>
                </div>
              </div>
              <pre class="template-box">${(activeTask.plantillaTarea || "").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>
            </div>

            <div>
              <h4 style="margin:0 0 0.4rem; font-size:0.94rem;">📝 Tu Borrador Personal de esta Entrega (Guardado Automático)</h4>
              <textarea
                id="class-task-notes-area"
                class="notes-textarea"
                placeholder="Redacta aquí tu entrega para ${s.nombre}..."
              >${currentNotes.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</textarea>
            </div>
          </div>
        </div>
      `;
    }

    // --- PESTAÑA 3: LAS 5 UNIDADES Y PDFs OFICIALES DE LA ASIGNATURA ---
    else if (tab === "unidades") {
      tabContentHtml = `
        <div class="card" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.75rem;">
          <div>
            <h3 style="margin:0; font-size:1.05rem;">📚 Los 5 Manuales Oficiales en PDF de ${s.nombre}</h3>
            <p style="margin:0.2rem 0 0; font-size:0.84rem; color:var(--text-muted);">
              Haz clic en <strong>Abrir PDF Oficial</strong> para leer el documento original o despliega cada unidad para estudiar su síntesis e ideas clave de examen.
            </p>
          </div>
          ${
            s.archivoPlanificacion
              ? `<button type="button" class="btn btn-sm" onclick="window.AL_APP.openPdf('${s.archivoPlanificacion.replace(/'/g, "\\'")}', 'Planificación — ${s.nombreCorto}')">📄 Planificación de la Asignatura (PDF)</button>`
              : ""
          }
        </div>
        ${subjUnits
          .map((u) => {
            const isStudied = !!state.unitStudied[u.id];
            return `
              <article class="unit-card" id="class-unit-${u.id}" style="--subj-color:${s.color}">
                <div class="unit-card-header">
                  <div>
                    <span class="badge ${isStudied ? "badge-done" : "badge-info"}">
                      ${isStudied ? "✅ Unidad estudiada" : `Unidad ${u.numero} de 5`}
                    </span>
                    <h4 style="margin:0.3rem 0 0; font-size:1.02rem;">${u.titulo}</h4>
                  </div>
                  <div style="display:flex; align-items:center; gap:0.5rem;">
                    <label style="font-size:0.8rem; font-weight:600; display:flex; align-items:center; gap:0.35rem; cursor:pointer;">
                      <input type="checkbox" data-class-unit-studied="${u.id}" ${isStudied ? "checked" : ""} />
                      Marcar leída
                    </label>
                    <button
                      type="button"
                      class="btn btn-primary btn-sm"
                      onclick="window.AL_APP.openPdf('${u.pdfFile.replace(/'/g, "\\'")}', '${u.titulo.replace(/'/g, "\\'")}')"
                    >
                      📖 Abrir PDF Oficial
                    </button>
                  </div>
                </div>
                <div class="until-found-inner">
                  <div style="display:grid; grid-template-columns: 270px 1fr; gap:1rem; margin-top:0.8rem;">
                    <div style="background:var(--bg-surface-alt); padding:0.8rem; border-radius:8px;">
                      <h5 style="margin:0 0 0.4rem; font-size:0.84rem;">📑 Índice de la Unidad</h5>
                      <ul style="margin:0; padding-left:1.1rem; font-size:0.79rem; color:var(--text-secondary);">
                        ${(u.indice || []).map((it) => `<li>${it}</li>`).join("")}
                      </ul>
                    </div>
                    <div>
                      <p style="margin:0 0 0.75rem; font-size:0.87rem; color:var(--text-secondary);">${formatSimpleMarkdown(u.resumen)}</p>
                      <div style="display:flex; flex-direction:column; gap:0.4rem;">
                        ${(u.ideasClave || [])
                          .map(
                            (idea) => `
                              <div style="padding:0.55rem 0.75rem; border-radius:6px; background:var(--bg-surface-alt); border-left:3px solid ${s.color}; font-size:0.83rem;">
                                ${formatSimpleMarkdown(idea)}
                              </div>
                            `
                          )
                          .join("")}
                      </div>
                    </div>
                  </div>
                  ${
                    u.tablaComparativa
                      ? `
                        <div class="clinical-table-wrap">
                          <h5 style="margin:0.8rem 0 0.35rem; font-size:0.88rem;">📊 ${u.tablaComparativa.titulo}</h5>
                          <table class="clinical-table">
                            <thead>
                              <tr>${u.tablaComparativa.columnas.map((c) => `<th>${c}</th>`).join("")}</tr>
                            </thead>
                            <tbody>
                              ${u.tablaComparativa.filas
                                .map(
                                  (r) =>
                                    `<tr>${r.map((cell) => `<td>${formatSimpleMarkdown(cell)}</td>`).join("")}</tr>`
                                )
                                .join("")}
                            </tbody>
                          </table>
                        </div>
                      `
                      : ""
                  }
                </div>
              </article>
            `;
          })
          .join("")}
      `;
    }

    // --- PESTAÑA 4: SIMULADOR EXAMEN TIPO TEST Y CONCEPTOS DE LA ASIGNATURA ---
    else if (tab === "test") {
      let hits = 0;
      let ansCount = 0;
      subjQuestions.forEach((q) => {
        if (state.quizAnswers[q.id] !== undefined) {
          ansCount++;
          if (state.quizAnswers[q.id] === q.correcta) hits++;
        }
      });

      tabContentHtml = `
        <div class="card" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
          <div>
            <h3 style="margin:0; font-size:1.05rem;">🎯 Entrenamiento Examen Final Proctoring — ${s.nombre}</h3>
            <p style="margin:0.2rem 0 0; font-size:0.84rem; color:var(--text-muted);">
              Preguntas tipo test oficiales exclusivas de esta asignatura (el examen final vale 6,0 puntos).
            </p>
          </div>
          <div style="display:flex; gap:0.65rem; align-items:center;">
            <span class="badge badge-info">Respondidas: ${ansCount}/${subjQuestions.length}</span>
            <span class="badge badge-done">Aciertos: ${hits}/${subjQuestions.length}</span>
            <button type="button" class="btn btn-sm" id="class-reset-quiz-btn">🔄 Reiniciar Test de la Asignatura</button>
          </div>
        </div>
        ${subjQuestions
          .map((q, idx) => {
            const userAns = state.quizAnswers[q.id];
            const isAns = userAns !== undefined;
            return `
              <div class="card" style="border-left:4px solid ${s.color}">
                <div style="display:flex; justify-content:space-between; margin-bottom:0.45rem;">
                  <span class="badge" style="background:${s.color}20; color:${s.color};">Pregunta ${idx + 1} · ${q.unidad}</span>
                  ${
                    isAns
                      ? userAns === q.correcta
                        ? `<span class="badge badge-done">✓ Correcta</span>`
                        : `<span class="badge badge-urgent">✗ Incorrecta</span>`
                      : ""
                  }
                </div>
                <p style="font-weight:700; margin:0 0 0.75rem;">${q.pregunta}</p>
                ${q.opciones
                  .map((opt, optIdx) => {
                    let cls = "quiz-option-btn";
                    if (isAns) {
                      if (optIdx === q.correcta) cls += " correct";
                      else if (optIdx === userAns) cls += " incorrect";
                    }
                    const letter = ["A", "B", "C", "D"][optIdx] || "";
                    return `
                      <button
                        type="button"
                        class="${cls}"
                        data-class-q="${q.id}"
                        data-class-opt="${optIdx}"
                        ${isAns ? "disabled" : ""}
                      >
                        <strong>${letter})</strong> ${opt}
                      </button>
                    `;
                  })
                  .join("")}
                ${
                  isAns
                    ? `<div style="margin-top:0.55rem; padding:0.7rem; border-radius:6px; background:var(--bg-surface-alt); font-size:0.84rem;">
                         💡 <strong>Explicación:</strong> ${formatSimpleMarkdown(q.explicacion)}
                       </div>`
                    : ""
                }
              </div>
            `;
          })
          .join("")}
      `;
    }

    // --- PESTAÑA 5: CALIFICACIONES DE LA ASIGNATURA ---
    else if (tab === "calificaciones") {
      tabContentHtml = `<div id="classroom-single-grade-box"></div>`;
    }

    container.innerHTML = `
      <!-- Barra superior estilo Google Classroom con pestañas de la clase -->
      <div class="classroom-topbar-tabs">
        <div style="display:flex; align-items:center; gap:0.75rem;">
          <button type="button" class="btn btn-sm" onclick="document.getElementById('nav-btn-home').click()">
            ← Volver a Inicio (Calendario y Clases)
          </button>
          <strong style="font-size:0.95rem; color:${s.color};">${s.icono} ${s.nombreCorto}</strong>
        </div>
        <nav class="classroom-tabs-nav" aria-label="Secciones de la asignatura">
          <button type="button" class="classroom-tab-btn ${tab === "tablon" ? "active" : ""}" onclick="window.AL_APP.setClassroomTab('tablon')">
            📢 Tablón
          </button>
          <button type="button" class="classroom-tab-btn ${tab === "trabajo" ? "active" : ""}" onclick="window.AL_APP.setClassroomTab('trabajo')">
            📋 Trabajo de clase (${subjDeliverables.length})
          </button>
          <button type="button" class="classroom-tab-btn ${tab === "unidades" ? "active" : ""}" onclick="window.AL_APP.setClassroomTab('unidades')">
            📚 Unidades y PDFs (5)
          </button>
          <button type="button" class="classroom-tab-btn ${tab === "test" ? "active" : ""}" onclick="window.AL_APP.setClassroomTab('test')">
            🎯 Examen Test (${subjQuestions.length})
          </button>
          <button type="button" class="classroom-tab-btn ${tab === "calificaciones" ? "active" : ""}" onclick="window.AL_APP.setClassroomTab('calificaciones')">
            🧮 Calificaciones
          </button>
        </nav>
      </div>

      ${tabContentHtml}
    `;

    // Vincular eventos interactivos según la pestaña activa del Aula Classroom
    if (tab === "trabajo") {
      const activeTask =
        subjDeliverables.find((t) => t.id === state.selectedClassTaskId) ||
        subjDeliverables[0];

      const sel = document.getElementById("class-task-status-sel");
      if (sel) {
        sel.addEventListener("change", () => {
          state.taskStatus[activeTask.id] = sel.value;
          saveState();
          updateSidebarBadges();
          renderSidebarClasses();
          renderClassroomSubjectView();
        });
      }

      container.querySelectorAll("[data-class-subtask]").forEach((chk) => {
        chk.addEventListener("change", () => {
          state.subtaskChecks[chk.dataset.classSubtask] = chk.checked;
          saveState();
          renderClassroomSubjectView();
        });
      });

      const copyBtn = document.getElementById("class-copy-tpl-btn");
      if (copyBtn) {
        copyBtn.addEventListener("click", () => {
          navigator.clipboard.writeText(activeTask.plantillaTarea || "").then(() => {
            copyBtn.textContent = "✅ ¡Copiada!";
            setTimeout(() => {
              copyBtn.textContent = "📋 Copiar Plantilla";
            }, 1600);
          });
        });
      }

      const dlBtn = document.getElementById("class-dl-tpl-btn");
      if (dlBtn) {
        dlBtn.addEventListener("click", () => {
          const blob = new Blob([activeTask.plantillaTarea || ""], {
            type: "text/markdown;charset=utf-8"
          });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `Plantilla_${activeTask.id}.md`;
          a.click();
          URL.revokeObjectURL(url);
        });
      }

      const notesArea = document.getElementById("class-task-notes-area");
      const toNotesBtn = document.getElementById("class-to-notes-btn");
      if (toNotesBtn && notesArea) {
        toNotesBtn.addEventListener("click", () => {
          notesArea.value =
            (notesArea.value ? notesArea.value + "\n\n" : "") +
            (activeTask.plantillaTarea || "");
          state.taskNotes[activeTask.id] = notesArea.value;
          saveState();
        });
      }
      if (notesArea) {
        notesArea.addEventListener("input", () => {
          state.taskNotes[activeTask.id] = notesArea.value;
          saveState();
        });
      }
    } else if (tab === "unidades") {
      container.querySelectorAll("[data-class-unit-studied]").forEach((chk) => {
        chk.addEventListener("change", () => {
          state.unitStudied[chk.dataset.classUnitStudied] = chk.checked;
          saveState();
          updateSidebarBadges();
          renderClassroomSubjectView();
        });
      });
    } else if (tab === "test") {
      const resetBtn = document.getElementById("class-reset-quiz-btn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          subjQuestions.forEach((q) => delete state.quizAnswers[q.id]);
          saveState();
          renderClassroomSubjectView();
        });
      }
      container.querySelectorAll("[data-class-q]").forEach((btn) => {
        btn.addEventListener("click", () => {
          state.quizAnswers[btn.dataset.classQ] = parseInt(
            btn.dataset.classOpt,
            10
          );
          saveState();
          renderClassroomSubjectView();
        });
      });
    } else if (tab === "calificaciones") {
      renderGradesCalculator("classroom-single-grade-box", s.id);
    }
  }

  function renderTimelineList() {
    const container = document.getElementById("calendar-timeline-container");
    const sortMode = state.listSortMode || "fecha";
    const statusFilter = state.listStatusFilter || "all";

    const filtered = [...window.AL_DATA.entregas].filter((t) => {
      const matchSubj =
        state.globalSubject === "all" || t.asignaturaId === state.globalSubject;
      const matchQuery =
        !state.searchQuery ||
        t.titulo.toLowerCase().includes(state.searchQuery) ||
        t.descripcion.toLowerCase().includes(state.searchQuery);
      const st = getTaskStatus(t.id);
      const matchStatus =
        statusFilter === "all"
          ? true
          : statusFilter === "done"
          ? st === "done"
          : st !== "done";
      return matchSubj && matchQuery && matchStatus;
    });

    const renderTaskRow = (t) => {
      const subj = getSubject(t.asignaturaId);
      const status = getTaskStatus(t.id);
      const dateVal = getTaskDate(t);
      const gcalUrl = buildGoogleCalendarUrl(t);
      const tUnits = getTaskUnits(t);
      return `
        <tr>
          <td style="white-space:nowrap;">
            <input
              type="date"
              value="${dateVal}"
              data-edit-date="${t.id}"
              class="subject-filter-select"
              style="font-size:0.78rem; padding:0.25rem 0.45rem;"
              title="Puedes ajustar la fecha si tu profesor la actualiza en el Campus Virtual"
            />
            <div style="font-size:0.72rem; color:var(--text-muted); margin-top:0.2rem;">
              Límite 95%: ${formatSpanishDate(t.fechaLimite)}
            </div>
          </td>
          <td>
            <span
              class="badge"
              style="background:${subj.color}20; color:${subj.color}; cursor:pointer;"
              onclick="window.AL_APP.openClassroom('${subj.id}', 'tablon')"
              title="Abrir Aula Classroom de ${subj.nombre}"
            >
              ${subj.icono} ${subj.nombreCorto}
            </span>
          </td>
          <td style="white-space:nowrap;">
            <strong>${t.tipo}</strong><br>
            <small style="color:var(--text-muted);">${t.puntos} pts (${t.porcentaje}%)</small>
          </td>
          <td>
            <div style="font-weight:700;">${t.titulo}</div>
            <div style="font-size:0.8rem; color:var(--text-secondary); margin-top:0.2rem;">${t.descripcion}</div>
            <div style="display:flex; gap:0.35rem; flex-wrap:wrap; margin-top:0.35rem;">
              ${tUnits
                .map(
                  (u) => `
                    <button
                      type="button"
                      class="gcal-mini-btn"
                      style="cursor:pointer; font-size:0.68rem; padding:0.15rem 0.42rem;"
                      onclick="window.AL_APP.openPdf('${u.pdfFile.replace(/'/g, "\\'")}', '${u.titulo.replace(/'/g, "\\'")}')"
                      title="Abrir PDF oficial — ${u.titulo}"
                    >
                      📄 PDF Tema ${u.numero}: ${u.titulo.replace(/^Unidad\s*\d+\s*:\s*/i, "").slice(0, 38)}…
                    </button>
                  `
                )
                .join("")}
            </div>
          </td>
          <td>
            <select data-status-select="${t.id}" class="subject-filter-select" style="font-size:0.78rem; padding:0.25rem 0.45rem;">
              <option value="pending" ${status === "pending" ? "selected" : ""}>⏳ Pendiente</option>
              <option value="in_progress" ${status === "in_progress" ? "selected" : ""}>🔨 En curso</option>
              <option value="done" ${status === "done" ? "selected" : ""}>✅ Entregado</option>
            </select>
          </td>
          <td>
            <div style="display:flex; flex-direction:column; gap:0.35rem;">
              <button type="button" class="btn btn-primary btn-sm" onclick="window.AL_APP.openTaskInCopilot('${t.id}')">
                📝 Abrir en Classroom
              </button>
              <a href="${gcalUrl}" target="_blank" rel="noopener" class="btn btn-gcal btn-sm">
                📅 + GCal (${GCAL_ACCOUNT})
              </a>
            </div>
          </td>
        </tr>
      `;
    };

    let tbodyHtml = "";

    if (sortMode === "asignatura") {
      const subjectsToRender = window.AL_DATA.asignaturas
        .map((s) => getSubject(s.id))
        .filter((s) => state.globalSubject === "all" || s.id === state.globalSubject);

      tbodyHtml = subjectsToRender
        .map((subj) => {
          const subjTasks = filtered
            .filter((t) => t.asignaturaId === subj.id)
            .sort((a, b) => getTaskDate(a).localeCompare(getTaskDate(b)));

          if (subjTasks.length === 0) return "";

          const subjUnits = (window.AL_DATA.unidades || []).filter(
            (u) => u.asignaturaId === subj.id
          );
          const doneCount = subjTasks.filter((t) => getTaskStatus(t.id) === "done").length;

          return `
            <tr>
              <td colspan="6" style="background:${subj.color}14; border-left:5px solid ${subj.color}; padding:0.65rem 0.9rem;">
                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
                  <div style="display:flex; align-items:center; gap:0.55rem; flex-wrap:wrap;">
                    <span style="font-size:1.15rem;">${subj.icono}</span>
                    <strong style="font-size:0.95rem; color:${subj.color};">${subj.nombre}</strong>
                    <span style="font-size:0.78rem; color:var(--text-secondary);">· 👩‍🏫 ${subj.profesora}</span>
                  </div>
                  <div style="display:flex; align-items:center; gap:0.4rem; flex-wrap:wrap;">
                    ${subjUnits
                      .map(
                        (u) => `
                          <button
                            type="button"
                            class="gcal-mini-btn"
                            style="cursor:pointer; font-size:0.68rem; padding:0.16rem 0.42rem; background:#fff; color:${subj.color}; border-color:${subj.color}40;"
                            onclick="window.AL_APP.openPdf('${u.pdfFile.replace(/'/g, "\\'")}', '${u.titulo.replace(/'/g, "\\'")}')"
                            title="Abrir PDF — ${u.titulo}"
                          >
                            📄 Tema ${u.numero}
                          </button>
                        `
                      )
                      .join("")}
                    <span class="badge" style="background:#fff; color:${subj.color}; border:1px solid ${subj.color}40;">
                      ${doneCount}/${subjTasks.length} completadas
                    </span>
                    <button
                      type="button"
                      class="btn btn-sm"
                      style="padding:0.2rem 0.55rem; font-size:0.74rem;"
                      onclick="window.AL_APP.openClassroom('${subj.id}', 'tablon')"
                    >
                      Ir a la asignatura →
                    </button>
                  </div>
                </div>
              </td>
            </tr>
            ${subjTasks.map((t) => renderTaskRow(t)).join("")}
          `;
        })
        .join("");
    } else {
      const sortedByDate = [...filtered].sort((a, b) =>
        getTaskDate(a).localeCompare(getTaskDate(b))
      );
      tbodyHtml = sortedByDate.map((t) => renderTaskRow(t)).join("");
    }

    container.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; gap:0.75rem; flex-wrap:wrap; margin-bottom:0.9rem; padding-bottom:0.75rem; border-bottom:1px solid var(--border-color);">
        <div style="display:flex; align-items:center; gap:0.45rem; flex-wrap:wrap;">
          <span style="font-size:0.82rem; font-weight:700; color:var(--text-secondary); margin-right:0.2rem;">Ordenar lista por:</span>
          <button
            type="button"
            class="tab-pill ${sortMode === "fecha" ? "active" : ""}"
            data-list-sort="fecha"
          >
            📅 Por Fechas (Cronológico)
          </button>
          <button
            type="button"
            class="tab-pill ${sortMode === "asignatura" ? "active" : ""}"
            data-list-sort="asignatura"
          >
            🎓 Por Asignaturas (Agrupado)
          </button>
        </div>

        <div style="display:flex; align-items:center; gap:0.35rem; flex-wrap:wrap;">
          <span style="font-size:0.78rem; font-weight:700; color:var(--text-muted); margin-right:0.15rem;">Estado:</span>
          <button
            type="button"
            class="tab-pill ${statusFilter === "all" ? "active" : ""}"
            data-list-status="all"
          >
            Todas (${window.AL_DATA.entregas.length})
          </button>
          <button
            type="button"
            class="tab-pill ${statusFilter === "pending" ? "active" : ""}"
            data-list-status="pending"
          >
            ⏳ Pendientes
          </button>
          <button
            type="button"
            class="tab-pill ${statusFilter === "done" ? "active" : ""}"
            data-list-status="done"
          >
            ✅ Entregadas
          </button>
        </div>
      </div>

      <div class="clinical-table-wrap">
        <table class="clinical-table">
          <thead>
            <tr>
              <th
                style="cursor:pointer; user-select:none;"
                data-list-sort="fecha"
                title="Haz clic para ordenar cronológicamente por fecha"
              >
                Fecha Recomendada (100%) ${sortMode === "fecha" ? "▼" : "↕"}
              </th>
              <th
                style="cursor:pointer; user-select:none;"
                data-list-sort="asignatura"
                title="Haz clic para agrupar y ordenar por asignatura"
              >
                Asignatura ${sortMode === "asignatura" ? "▼" : "↕"}
              </th>
              <th>Tipo y Peso</th>
              <th>Entrega y Criterios</th>
              <th>Estado</th>
              <th>Acciones y Google Calendar</th>
            </tr>
          </thead>
          <tbody>
            ${
              tbodyHtml ||
              `<tr><td colspan="6" style="text-align:center; padding:1.5rem; color:var(--text-muted);">No hay entregas que coincidan con el filtro seleccionado.</td></tr>`
            }
          </tbody>
        </table>
      </div>
    `;

    container.querySelectorAll("[data-list-sort]").forEach((el) => {
      el.addEventListener("click", () => {
        state.listSortMode = el.dataset.listSort;
        saveState();
        renderTimelineList();
      });
    });

    container.querySelectorAll("[data-list-status]").forEach((el) => {
      el.addEventListener("click", () => {
        state.listStatusFilter = el.dataset.listStatus;
        saveState();
        renderTimelineList();
      });
    });

    container.querySelectorAll("[data-edit-date]").forEach((inp) => {
      inp.addEventListener("change", () => {
        state.customDates[inp.dataset.editDate] = inp.value;
        saveState();
        renderAll();
      });
    });

    container.querySelectorAll("[data-status-select]").forEach((sel) => {
      sel.addEventListener("change", () => {
        state.taskStatus[sel.dataset.statusSelect] = sel.value;
        saveState();
        renderAll();
      });
    });
  }

  function renderKanbanBoard() {
    const container = document.getElementById("calendar-kanban-container");
    const columns = [
      { key: "pending", title: "⏳ Pendientes", badgeClass: "badge-soon" },
      { key: "in_progress", title: "🔨 En Elaboración", badgeClass: "badge-info" },
      { key: "done", title: "✅ Entregadas / Completadas", badgeClass: "badge-done" }
    ];

    const filtered = window.AL_DATA.entregas.filter(
      (t) =>
        (state.globalSubject === "all" || t.asignaturaId === state.globalSubject) &&
        (!state.searchQuery || t.titulo.toLowerCase().includes(state.searchQuery))
    );

    container.innerHTML = columns
      .map((col) => {
        const items = filtered
          .filter((t) => getTaskStatus(t.id) === col.key)
          .sort((a, b) => getTaskDate(a).localeCompare(getTaskDate(b)));

        return `
          <div class="kanban-col">
            <div class="kanban-col-header">
              <span>${col.title}</span>
              <span class="badge ${col.badgeClass}">${items.length}</span>
            </div>
            ${items
              .map((t) => {
                const subj = getSubject(t.asignaturaId);
                const gcalUrl = buildGoogleCalendarUrl(t);
                return `
                  <div class="kanban-card" style="--subj-color:${subj.color}">
                    <div style="display:flex; justify-content:space-between; align-items:center; gap:0.4rem;">
                      <span class="badge" style="background:${subj.color}20; color:${subj.color};">${subj.nombreCorto}</span>
                      <span style="font-size:0.74rem; font-weight:700; color:var(--text-muted);">${formatSpanishDate(getTaskDate(t))}</span>
                    </div>
                    <div style="font-weight:700; font-size:0.88rem;">${t.titulo}</div>
                    <div style="font-size:0.76rem; color:var(--text-muted);">${t.puntos} pts (${t.porcentaje}%) · ${(t.unidadesRelacionadas || []).join(", ")}</div>
                    <div style="display:flex; gap:0.35rem; flex-wrap:wrap; margin-top:0.25rem;">
                      <button type="button" class="btn btn-primary btn-sm" onclick="window.AL_APP.openTaskInCopilot('${t.id}')">Guía/Plantilla</button>
                      <a href="${gcalUrl}" target="_blank" rel="noopener" class="btn btn-gcal btn-sm">+GCal</a>
                      ${
                        col.key !== "in_progress"
                          ? `<button type="button" class="btn btn-sm" onclick="window.AL_APP.setTaskStatus('${t.id}', 'in_progress')">En curso</button>`
                          : ""
                      }
                      ${
                        col.key !== "done"
                          ? `<button type="button" class="btn btn-sm" onclick="window.AL_APP.setTaskStatus('${t.id}', 'done')">✓ Hecho</button>`
                          : `<button type="button" class="btn btn-sm" onclick="window.AL_APP.setTaskStatus('${t.id}', 'pending')">Reabrir</button>`
                      }
                    </div>
                  </div>
                `;
              })
              .join("")}
          </div>
        `;
      })
      .join("");
  }

  // ==========================================================================
  // VISTA 2: PANEL DE CONTROL (DASHBOARD)
  // ==========================================================================
  function renderDashboard() {
    const entregas = window.AL_DATA.entregas;
    const continuas = entregas.filter((e) => e.tipo !== "Examen Final");
    const doneCount = continuas.filter((e) => getTaskStatus(e.id) === "done").length;
    const inProgCount = continuas.filter((e) => getTaskStatus(e.id) === "in_progress").length;
    const studiedUnits = window.AL_DATA.unidades.filter((u) => state.unitStudied[u.id]).length;

    const pendingSorted = continuas
      .filter((e) => getTaskStatus(e.id) !== "done")
      .sort((a, b) => getTaskDate(a).localeCompare(getTaskDate(b)));
    const nextTask = pendingSorted[0];
    const nextDiff = nextTask ? getDaysDiff(getTaskDate(nextTask)) : null;

    const kpiContainer = document.getElementById("dashboard-kpis");
    if (!kpiContainer) return;

    kpiContainer.innerHTML = `
      <div class="kpi-card">
        <span class="kpi-label">Entregas Evaluación Continua</span>
        <div class="kpi-value">${doneCount} / ${continuas.length}</div>
        <span class="kpi-sub">${inProgCount} en curso · Vale 4,0 pts (40%) por asignatura</span>
      </div>
      <div class="kpi-card">
        <span class="kpi-label">Próxima Fecha Recomendada (100%)</span>
        <div class="kpi-value">${nextTask ? formatSpanishDate(getTaskDate(nextTask)) : "¡Todo al día!"}</div>
        <span class="kpi-sub">${
          nextTask
            ? `${getSubject(nextTask.asignaturaId).nombreCorto}: ${nextTask.tipo} (${
                nextDiff >= 0 ? `en ${nextDiff} días` : `hace ${Math.abs(nextDiff)} días`
              })`
            : "Has completado todas las entregas continuas"
        }</span>
      </div>
      <div class="kpi-card">
        <span class="kpi-label">Unidades Estudiadas (PDFs)</span>
        <div class="kpi-value">${studiedUnits} / 25</div>
        <span class="kpi-sub">5 asignaturas × 5 unidades oficiales</span>
      </div>
      <div class="kpi-card">
        <span class="kpi-label">Cierre Ev. Continua (95%) y Examen</span>
        <div class="kpi-value">21 Ene · 5 Feb</div>
        <span class="kpi-sub">Límite 95%: 21 ene 2027 · Examen Final: 5 feb 2027</span>
      </div>
    `;
  }

  // ==========================================================================
  // VISTA 3: COPILOTO DE TAREAS Y PLANTILLAS (GLOBAL)
  // ==========================================================================
  function renderTasksView() {
    const listEl = document.getElementById("task-selector-list");
    const detailEl = document.getElementById("task-workspace-detail");
    if (!listEl || !detailEl) return;

    const filteredTasks = window.AL_DATA.entregas
      .filter((t) => {
        if (state.globalSubject !== "all" && t.asignaturaId !== state.globalSubject) {
          return false;
        }
        if (state.taskTypeFilter !== "all" && !t.tipo.includes(state.taskTypeFilter)) {
          return false;
        }
        if (
          state.searchQuery &&
          !t.titulo.toLowerCase().includes(state.searchQuery) &&
          !t.descripcion.toLowerCase().includes(state.searchQuery)
        ) {
          return false;
        }
        return true;
      })
      .sort((a, b) => getTaskDate(a).localeCompare(getTaskDate(b)));

    if (
      filteredTasks.length > 0 &&
      !filteredTasks.some((t) => t.id === state.selectedTaskId)
    ) {
      state.selectedTaskId = filteredTasks[0].id;
    }

    listEl.innerHTML = filteredTasks
      .map((t) => {
        const subj = getSubject(t.asignaturaId);
        const status = getTaskStatus(t.id);
        const statusIcon =
          status === "done" ? "✅" : status === "in_progress" ? "🔨" : "⏳";
        return `
          <button
            type="button"
            class="task-selector-item ${t.id === state.selectedTaskId ? "active" : ""}"
            style="--subj-color:${subj.color}"
            data-select-task="${t.id}"
          >
            <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.74rem; color:var(--text-muted); margin-bottom:0.2rem;">
              <strong style="color:${subj.color}">${subj.nombreCorto} · ${t.tipo}</strong>
              <span>${statusIcon} ${formatSpanishDate(getTaskDate(t))}</span>
            </div>
            <div style="font-weight:700; font-size:0.85rem; line-height:1.3;">${t.titulo}</div>
          </button>
        `;
      })
      .join("");

    listEl.querySelectorAll("[data-select-task]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.selectedTaskId = btn.dataset.selectTask;
        saveState();
        renderTasksView();
      });
    });

    const task =
      window.AL_DATA.entregas.find((t) => t.id === state.selectedTaskId) ||
      filteredTasks[0];

    if (!task) {
      detailEl.innerHTML = `<p style="color:var(--text-muted);">No hay tareas que coincidan con el filtro seleccionado.</p>`;
      return;
    }

    const subj = getSubject(task.asignaturaId);
    const status = getTaskStatus(task.id);
    const currentNotes = state.taskNotes[task.id] || "";
    const gcalUrl = buildGoogleCalendarUrl(task);

    detailEl.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:1rem; flex-wrap:wrap; border-bottom:1px solid var(--border-color); padding-bottom:1rem; margin-bottom:1.25rem;">
        <div>
          <div style="display:flex; gap:0.5rem; align-items:center; flex-wrap:wrap; margin-bottom:0.4rem;">
            <span class="badge" style="background:${subj.color}20; color:${subj.color};">${subj.nombre}</span>
            <span class="badge badge-info">${task.tipo} · ${task.puntos} puntos (${task.porcentaje}%)</span>
            <span class="badge badge-soon">Fecha 100%: ${formatSpanishDate(getTaskDate(task))}</span>
            <span class="badge">Límite 95%: ${formatSpanishDate(task.fechaLimite)}</span>
          </div>
          <h3 style="margin:0; font-size:1.25rem;">${task.titulo}</h3>
          <p style="margin:0.35rem 0 0; font-size:0.88rem; color:var(--text-secondary);">${task.descripcion}</p>
        </div>

        <div style="display:flex; gap:0.5rem; align-items:center; flex-wrap:wrap;">
          <a href="${gcalUrl}" target="_blank" rel="noopener" class="btn btn-gcal btn-sm">
            📅 + Google Calendar ↗
          </a>
          <select id="workspace-status-select" class="subject-filter-select">
            <option value="pending" ${status === "pending" ? "selected" : ""}>⏳ Pendiente</option>
            <option value="in_progress" ${status === "in_progress" ? "selected" : ""}>🔨 En curso</option>
            <option value="done" ${status === "done" ? "selected" : ""}>✅ Entregado</option>
          </select>
        </div>
      </div>

      ${(task.archivosAdjuntos && task.archivosAdjuntos.length > 0) || task.archivoEnunciado ? `
      <div style="background:var(--bg-card); border:1px solid var(--border-color); border-radius:10px; padding:0.9rem 1.1rem; margin-bottom:1.25rem; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.75rem;">
          <h4 style="margin:0; font-size:0.95rem; display:flex; align-items:center; gap:0.4rem;">
            <span>📎</span> Documentación y Recursos Oficiales de la Entrega
          </h4>
          <span style="font-size:0.75rem; color:var(--text-muted); background:var(--bg-surface-alt); padding:0.2rem 0.55rem; border-radius:6px;">
            ${(task.archivosAdjuntos || []).length} archivo(s) disponible(s)
          </span>
        </div>
        <div style="display:flex; gap:0.6rem; flex-wrap:wrap; align-items:center;">
          ${(task.archivosAdjuntos || []).map(att => {
            const isVideo = att.tipo === 'video' || att.path.endsWith('.mp4');
            const isImage = att.tipo === 'image' || att.path.endsWith('.jpg') || att.path.endsWith('.png');
            const isDoc = att.tipo === 'doc' || att.path.endsWith('.doc') || att.path.endsWith('.docx');
            const icon = isVideo ? '🎬' : isImage ? '🖼️' : isDoc ? '📝' : '📄';
            const btnClass = isVideo ? 'btn-primary' : isImage ? 'btn-secondary' : isDoc ? 'btn-primary' : 'btn';
            return `
              <button
                type="button"
                class="btn btn-sm ${btnClass}"
                style="display:flex; align-items:center; gap:0.4rem; padding:0.38rem 0.75rem; font-size:0.79rem;"
                onclick="window.AL_APP.openMedia('${att.path.replace(/'/g, "\\'")}', '${att.titulo.replace(/'/g, "\\'")}', '${att.tipo}')"
                title="${att.titulo}"
              >
                <span>${icon}</span>
                <span>${att.titulo}</span>
              </button>
            `;
          }).join("")}
        </div>
      </div>
      ` : ""}

      <div style="margin-bottom:1.25rem;">
        <h4 style="margin:0 0 0.6rem; font-size:0.95rem;">☑️ Lista de Control Paso a Paso (Checklist)</h4>
        ${(task.subtareas || [])
          .map((sub, idx) => {
            const key = `${task.id}_${idx}`;
            const checked = !!state.subtaskChecks[key];
            return `
              <label class="checklist-item ${checked ? "checked" : ""}">
                <input type="checkbox" data-subtask-key="${key}" ${checked ? "checked" : ""} />
                <span>${sub}</span>
              </label>
            `;
          })
          .join("")}
      </div>

      <div style="margin-bottom:1.25rem;">
        <h4 style="margin:0 0 0.6rem; font-size:0.95rem;">🧭 Guía Clínica y Académica para Sacar el 100%</h4>
        <div style="display:flex; flex-direction:column; gap:0.6rem;">
          ${(task.guiaPasoAPaso || [])
            .map(
              (step) => `
                <div style="padding:0.8rem 1rem; border-left:3px solid ${subj.color}; background:var(--bg-surface-alt); border-radius:6px; font-size:0.86rem;">
                  ${formatSimpleMarkdown(step)}
                </div>
              `
            )
            .join("")}
        </div>
      </div>

      <div style="margin-bottom:1.25rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:0.75rem; margin-bottom:0.5rem; flex-wrap:wrap;">
          <h4 style="margin:0; font-size:0.95rem;">📄 Plantilla Estructurada Lista para Rellenar (con Citas APA 7ª ed.)</h4>
          <div style="display:flex; gap:0.45rem;">
            <button type="button" class="btn btn-primary btn-sm" id="copy-template-btn">📋 Copiar Plantilla</button>
            <button type="button" class="btn btn-sm" id="download-template-btn">⬇️ Descargar .MD / .TXT</button>
            <button type="button" class="btn btn-sm" id="send-template-to-notes-btn">✍️ Pasar a mi Borrador</button>
          </div>
        </div>
        <pre class="template-box" id="task-template-pre">${(task.plantillaTarea || "").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>
      </div>

      <div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
          <h4 style="margin:0; font-size:0.95rem;">📝 Tu Borrador Personal y Apuntes de la Entrega (Guardado Automático)</h4>
          <span style="font-size:0.75rem; color:var(--text-muted);" id="notes-save-indicator">Guardado en navegador</span>
        </div>
        <textarea
          id="task-personal-notes"
          class="notes-textarea"
          placeholder="Escribe o pega aquí el borrador de tu trabajo..."
        >${currentNotes.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</textarea>
      </div>
    `;

    const statusSel = document.getElementById("workspace-status-select");
    statusSel.addEventListener("change", () => {
      state.taskStatus[task.id] = statusSel.value;
      saveState();
      updateSidebarBadges();
      renderSidebarClasses();
      renderTasksView();
    });

    detailEl.querySelectorAll("[data-subtask-key]").forEach((chk) => {
      chk.addEventListener("change", () => {
        state.subtaskChecks[chk.dataset.subtaskKey] = chk.checked;
        saveState();
        renderTasksView();
      });
    });

    const copyBtn = document.getElementById("copy-template-btn");
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(task.plantillaTarea || "").then(() => {
        copyBtn.textContent = "✅ ¡Plantilla Copiada!";
        setTimeout(() => {
          copyBtn.textContent = "📋 Copiar Plantilla";
        }, 1800);
      });
    });

    const dlBtn = document.getElementById("download-template-btn");
    dlBtn.addEventListener("click", () => {
      const blob = new Blob([task.plantillaTarea || ""], {
        type: "text/markdown;charset=utf-8"
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Plantilla_${task.id}.md`;
      a.click();
      URL.revokeObjectURL(url);
    });

    const notesArea = document.getElementById("task-personal-notes");
    const sendBtn = document.getElementById("send-template-to-notes-btn");
    sendBtn.addEventListener("click", () => {
      notesArea.value =
        (notesArea.value ? notesArea.value + "\n\n" : "") + (task.plantillaTarea || "");
      state.taskNotes[task.id] = notesArea.value;
      saveState();
    });

    notesArea.addEventListener("input", () => {
      state.taskNotes[task.id] = notesArea.value;
      saveState();
      const ind = document.getElementById("notes-save-indicator");
      if (ind) ind.textContent = "✓ Guardado hace un instante";
    });
  }

  // ==========================================================================
  // VISTA 4: LAS 25 UNIDADES DIDÁCTICAS (CON [hidden="until-found"] + beforematch)
  // ==========================================================================
  function renderUnitsView() {
    const container = document.getElementById("units-list-container");
    if (!container) return;
    const supportsBeforeMatch = "onbeforematch" in HTMLElement.prototype;

    const units = window.AL_DATA.unidades.filter((u) => {
      if (state.globalSubject !== "all" && u.asignaturaId !== state.globalSubject) {
        return false;
      }
      if (state.searchQuery) {
        const q = state.searchQuery;
        const matchTitle = u.titulo.toLowerCase().includes(q);
        const matchSum = u.resumen.toLowerCase().includes(q);
        const matchIdeas = (u.ideasClave || []).some((i) => i.toLowerCase().includes(q));
        return matchTitle || matchSum || matchIdeas;
      }
      return true;
    });

    container.innerHTML = units
      .map((u, idx) => {
        const subj = getSubject(u.asignaturaId);
        const isStudied = !!state.unitStudied[u.id];
        const isExpanded = idx === 0 || !!state.searchQuery;
        const panelId = `unit-panel-${u.id}`;

        return `
          <article class="unit-card" style="--subj-color:${subj.color}">
            <div class="unit-card-header">
              <button
                type="button"
                class="unit-toggle-btn"
                aria-expanded="${isExpanded ? "true" : "false"}"
                aria-controls="${panelId}"
                data-unit-toggle="${panelId}"
              >
                <div>
                  <div style="display:flex; align-items:center; gap:0.45rem; flex-wrap:wrap; margin-bottom:0.25rem;">
                    <span class="badge" style="background:${subj.color}20; color:${subj.color};">${subj.nombreCorto}</span>
                    <span class="badge ${isStudied ? "badge-done" : "badge-info"}">
                      ${isStudied ? "✅ Unidad estudiada" : `Unidad ${u.numero} de 5`}
                    </span>
                  </div>
                  <div class="unit-toggle-title">${u.titulo}</div>
                </div>
                <span class="unit-chevron" style="font-size:0.85rem; color:var(--text-muted);">
                  ${isExpanded ? "▲ Plegar" : "▼ Desplegar"}
                </span>
              </button>

              <div style="display:flex; align-items:center; gap:0.5rem;">
                <label style="font-size:0.8rem; font-weight:600; display:flex; align-items:center; gap:0.35rem; cursor:pointer;">
                  <input type="checkbox" data-unit-studied="${u.id}" ${isStudied ? "checked" : ""} />
                  Leída
                </label>
                <button
                  type="button"
                  class="btn btn-primary btn-sm"
                  onclick="window.AL_APP.openPdf('${u.pdfFile.replace(/'/g, "\\'")}', '${u.titulo.replace(/'/g, "\\'")}')"
                >
                  📖 Abrir PDF Oficial
                </button>
              </div>
            </div>

            <!-- Panel plegable con hidden="until-found" para permitir Ctrl+F -->
            <div
              id="${panelId}"
              class="until-found-panel"
              ${isExpanded ? "" : supportsBeforeMatch ? 'hidden="until-found"' : ""}
            >
              <div class="until-found-inner">
                <div style="display:grid; grid-template-columns: 280px 1fr; gap:1rem; margin-top:0.9rem;">
                  <div style="background:var(--bg-surface-alt); padding:0.85rem; border-radius:8px;">
                    <h4 style="margin:0 0 0.45rem; font-size:0.86rem;">📑 Índice Oficial de la Unidad</h4>
                    <ul style="margin:0; padding-left:1.1rem; font-size:0.8rem; color:var(--text-secondary);">
                      ${(u.indice || []).map((item) => `<li>${item}</li>`).join("")}
                    </ul>
                  </div>
                  <div>
                    <h4 style="margin:0 0 0.4rem; font-size:0.92rem;">🧠 Síntesis Ejecutiva</h4>
                    <p style="margin:0 0 0.85rem; font-size:0.88rem; color:var(--text-secondary);">${formatSimpleMarkdown(u.resumen)}</p>

                    <h4 style="margin:0 0 0.45rem; font-size:0.92rem;">💡 Ideas Clave de Examen (Preguntas Frecuentes Tipo Test)</h4>
                    <div style="display:flex; flex-direction:column; gap:0.45rem;">
                      ${(u.ideasClave || [])
                        .map(
                          (idea) => `
                            <div style="padding:0.6rem 0.8rem; border-radius:6px; background:var(--bg-surface-alt); border-left:3px solid ${subj.color}; font-size:0.84rem;">
                              ${formatSimpleMarkdown(idea)}
                            </div>
                          `
                        )
                        .join("")}
                    </div>
                  </div>
                </div>

                ${
                  u.tablaComparativa
                    ? `
                      <div class="clinical-table-wrap">
                        <h4 style="margin:0.8rem 0 0.4rem; font-size:0.9rem;">📊 ${u.tablaComparativa.titulo}</h4>
                        <table class="clinical-table">
                          <thead>
                            <tr>
                              ${u.tablaComparativa.columnas.map((c) => `<th>${c}</th>`).join("")}
                            </tr>
                          </thead>
                          <tbody>
                            ${u.tablaComparativa.filas
                              .map(
                                (row) =>
                                  `<tr>${row.map((cell) => `<td>${formatSimpleMarkdown(cell)}</td>`).join("")}</tr>`
                              )
                              .join("")}
                          </tbody>
                        </table>
                      </div>
                    `
                    : ""
                }
              </div>
            </div>
          </article>
        `;
      })
      .join("");

    // Vincular toggle manual y evento beforematch (modern-web-guidance: search-hidden-content)
    container.querySelectorAll("[data-unit-toggle]").forEach((btn) => {
      const panel = document.getElementById(btn.dataset.unitToggle);
      if (!panel) return;

      btn.addEventListener("click", () => {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        if (expanded) {
          panel.setAttribute("hidden", "until-found");
          btn.setAttribute("aria-expanded", "false");
          const chev = btn.querySelector(".unit-chevron");
          if (chev) chev.textContent = "▼ Desplegar";
        } else {
          panel.removeAttribute("hidden");
          btn.setAttribute("aria-expanded", "true");
          const chev = btn.querySelector(".unit-chevron");
          if (chev) chev.textContent = "▲ Plegar";
        }
      });

      panel.addEventListener("beforematch", () => {
        panel.removeAttribute("hidden");
        btn.setAttribute("aria-expanded", "true");
        const chev = btn.querySelector(".unit-chevron");
        if (chev) chev.textContent = "▲ Plegar";
      });
    });

    if (!("onbeforematch" in HTMLElement.prototype)) {
      container.querySelectorAll('[hidden="until-found"]').forEach((el) => {
        el.removeAttribute("hidden");
      });
    }

    container.querySelectorAll("[data-unit-studied]").forEach((chk) => {
      chk.addEventListener("change", () => {
        state.unitStudied[chk.dataset.unitStudied] = chk.checked;
        saveState();
        updateSidebarBadges();
        renderUnitsView();
      });
    });
  }

  // ==========================================================================
  // VISTA 5: CENTRO DE ESTUDIO ACTIVO (SIMULADOR TEST + FLASHCARDS + GLOSARIO)
  // ==========================================================================
  function renderStudyView() {
    document.getElementById("study-tab-quiz").style.display =
      state.studyTab === "quiz" ? "block" : "none";
    document.getElementById("study-tab-flashcards").style.display =
      state.studyTab === "flashcards" ? "block" : "none";
    document.getElementById("study-tab-glosario").style.display =
      state.studyTab === "glosario" ? "block" : "none";

    if (state.studyTab === "quiz") {
      renderQuizSimulator();
    } else if (state.studyTab === "flashcards") {
      renderFlashcards();
    } else {
      renderGlossaryTable();
    }
  }

  function renderQuizSimulator() {
    const container = document.getElementById("study-tab-quiz");
    if (!container) return;
    const effectiveSubj =
      state.globalSubject !== "all" ? state.globalSubject : state.quizSubject;

    const questions = window.AL_DATA.preguntasTest.filter(
      (q) => effectiveSubj === "all" || q.asignaturaId === effectiveSubj
    );

    let answered = 0;
    let hits = 0;
    questions.forEach((q) => {
      if (state.quizAnswers[q.id] !== undefined) {
        answered++;
        if (state.quizAnswers[q.id] === q.correcta) hits++;
      }
    });

    const scoreOut10 = answered > 0 ? ((hits / questions.length) * 10).toFixed(2) : "0.00";

    container.innerHTML = `
      <div class="card" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
        <div style="display:flex; align-items:center; gap:0.75rem; flex-wrap:wrap;">
          <label style="font-size:0.86rem; font-weight:700;">Asignatura del Simulacro:</label>
          <select id="quiz-subj-select" class="subject-filter-select">
            <option value="all" ${effectiveSubj === "all" ? "selected" : ""}>Todas las asignaturas (${window.AL_DATA.preguntasTest.length} preguntas)</option>
            ${window.AL_DATA.asignaturas
              .map(
                (s) =>
                  `<option value="${s.id}" ${effectiveSubj === s.id ? "selected" : ""}>${s.nombre}</option>`
              )
              .join("")}
          </select>
        </div>
        <div style="display:flex; align-items:center; gap:0.85rem; flex-wrap:wrap;">
          <span class="badge badge-info">Contestadas: ${answered} / ${questions.length}</span>
          <span class="badge badge-done">Aciertos: ${hits} (${scoreOut10} / 10 pts)</span>
          <button type="button" class="btn btn-sm" id="reset-quiz-btn">🔄 Reiniciar Test</button>
        </div>
      </div>

      ${questions
        .map((q, idx) => {
          const subj = getSubject(q.asignaturaId);
          const userAns = state.quizAnswers[q.id];
          const isAnswered = userAns !== undefined;

          return `
            <div class="card" style="border-left:4px solid ${subj.color}">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
                <span class="badge" style="background:${subj.color}20; color:${subj.color};">
                  Pregunta ${idx + 1} · ${subj.nombreCorto} (${q.unidad})
                </span>
                ${
                  isAnswered
                    ? userAns === q.correcta
                      ? `<span class="badge badge-done">✓ Correcta</span>`
                      : `<span class="badge badge-urgent">✗ Incorrecta</span>`
                    : `<span class="badge">Sin responder</span>`
                }
              </div>
              <p style="font-weight:700; font-size:0.95rem; margin:0 0 0.85rem;">${q.pregunta}</p>
              <div>
                ${q.opciones
                  .map((opt, optIdx) => {
                    let cls = "quiz-option-btn";
                    if (isAnswered) {
                      if (optIdx === q.correcta) cls += " correct";
                      else if (optIdx === userAns) cls += " incorrect";
                    }
                    const letter = ["A", "B", "C", "D"][optIdx] || "";
                    return `
                      <button
                        type="button"
                        class="${cls}"
                        data-q-id="${q.id}"
                        data-opt-idx="${optIdx}"
                        ${isAnswered ? "disabled" : ""}
                      >
                        <strong>${letter})</strong> ${opt}
                      </button>
                    `;
                  })
                  .join("")}
              </div>
              ${
                isAnswered
                  ? `
                    <div style="margin-top:0.65rem; padding:0.75rem 0.9rem; border-radius:8px; background:var(--bg-surface-alt); font-size:0.85rem;">
                      💡 <strong>Justificación académica:</strong> ${formatSimpleMarkdown(q.explicacion)}
                    </div>
                  `
                  : ""
              }
            </div>
          `;
        })
        .join("")}
    `;

    const sel = document.getElementById("quiz-subj-select");
    sel.addEventListener("change", () => {
      state.quizSubject = sel.value;
      state.globalSubject = "all";
      document.getElementById("global-subject-filter").value = "all";
      saveState();
      renderStudyView();
    });

    document.getElementById("reset-quiz-btn").addEventListener("click", () => {
      questions.forEach((q) => delete state.quizAnswers[q.id]);
      saveState();
      renderQuizSimulator();
    });

    container.querySelectorAll("[data-q-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.quizAnswers[btn.dataset.qId] = parseInt(btn.dataset.optIdx, 10);
        saveState();
        renderQuizSimulator();
      });
    });
  }

  function renderFlashcards() {
    const container = document.getElementById("study-tab-flashcards");
    if (!container) return;
    const cards = window.AL_DATA.glosario.filter(
      (g) => state.globalSubject === "all" || g.asignaturaId === state.globalSubject
    );

    if (cards.length === 0) {
      container.innerHTML = `<p>No hay tarjetas para este filtro.</p>`;
      return;
    }

    if (state.flashcardIndex >= cards.length) state.flashcardIndex = 0;
    if (state.flashcardIndex < 0) state.flashcardIndex = cards.length - 1;

    const card = cards[state.flashcardIndex];
    const subj = getSubject(card.asignaturaId);

    container.innerHTML = `
      <div class="card" style="text-align:center;">
        <div style="display:flex; justify-content:space-between; align-items:center; max-width:680px; margin:0 auto 0.5rem;">
          <span class="badge" style="background:${subj.color}20; color:${subj.color};">${subj.nombre} · ${card.unidad}</span>
          <span class="badge badge-info">Tarjeta ${state.flashcardIndex + 1} de ${cards.length}</span>
        </div>

        <div class="flashcard-stage">
          <div class="flashcard-3d" id="active-flashcard-3d" tabindex="0" role="button" aria-label="Girar tarjeta de estudio">
            <div class="flashcard-face flashcard-front">
              <span style="font-size:0.76rem; text-transform:uppercase; letter-spacing:0.06em; color:var(--text-muted); margin-bottom:0.5rem;">
                Concepto / Prueba / Modelo (Haz clic para voltear)
              </span>
              <h3 style="font-size:1.35rem; margin:0;">${card.termino}</h3>
            </div>
            <div class="flashcard-face flashcard-back">
              <span style="font-size:0.75rem; font-weight:700; color:var(--brand-primary); margin-bottom:0.45rem;">
                Definición Clínica y Académica
              </span>
              <p style="font-size:0.94rem; margin:0; line-height:1.55;">${formatSimpleMarkdown(card.definicion)}</p>
            </div>
          </div>
        </div>

        <div style="display:flex; justify-content:center; gap:0.65rem; margin-top:1.25rem; flex-wrap:wrap;">
          <button type="button" class="btn" id="fc-prev-btn">← Anterior</button>
          <button type="button" class="btn btn-primary" id="fc-flip-btn">🔄 Voltear Tarjeta</button>
          <button type="button" class="btn" id="fc-rand-btn">🎲 Aleatoria</button>
          <button type="button" class="btn" id="fc-next-btn">Siguiente →</button>
        </div>
      </div>
    `;

    const card3d = document.getElementById("active-flashcard-3d");
    const toggleFlip = () => card3d.classList.toggle("is-flipped");
    card3d.addEventListener("click", toggleFlip);
    document.getElementById("fc-flip-btn").addEventListener("click", toggleFlip);

    document.getElementById("fc-prev-btn").addEventListener("click", () => {
      state.flashcardIndex--;
      renderFlashcards();
    });
    document.getElementById("fc-next-btn").addEventListener("click", () => {
      state.flashcardIndex++;
      renderFlashcards();
    });
    document.getElementById("fc-rand-btn").addEventListener("click", () => {
      state.flashcardIndex = Math.floor(Math.random() * cards.length);
      renderFlashcards();
    });
  }

  function renderGlossaryTable() {
    const container = document.getElementById("study-tab-glosario");
    if (!container) return;
    const terms = window.AL_DATA.glosario.filter((g) => {
      if (state.globalSubject !== "all" && g.asignaturaId !== state.globalSubject) {
        return false;
      }
      if (
        state.searchQuery &&
        !g.termino.toLowerCase().includes(state.searchQuery) &&
        !g.definicion.toLowerCase().includes(state.searchQuery)
      ) {
        return false;
      }
      return true;
    });

    container.innerHTML = `
      <div class="card">
        <div class="clinical-table-wrap">
          <table class="clinical-table">
            <thead>
              <tr>
                <th>Asignatura y Unidad</th>
                <th>Término / Prueba / Autor</th>
                <th>Definición Oficial</th>
              </tr>
            </thead>
            <tbody>
              ${terms
                .map((g) => {
                  const subj = getSubject(g.asignaturaId);
                  return `
                    <tr>
                      <td style="white-space:nowrap;">
                        <span class="badge" style="background:${subj.color}20; color:${subj.color};">${subj.nombreCorto}</span>
                        <div style="font-size:0.75rem; color:var(--text-muted); margin-top:0.2rem;">${g.unidad}</div>
                      </td>
                      <td><strong>${g.termino}</strong></td>
                      <td>${formatSimpleMarkdown(g.definicion)}</td>
                    </tr>
                  `;
                })
                .join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // ==========================================================================
  // VISTA 6: HERRAMIENTAS CLÍNICAS INTERACTIVAS DE AUDICIÓN Y LENGUAJE
  // ==========================================================================
  function renderClinicalTools() {
    const container = document.getElementById("clinical-tools-container");
    if (!container) return;
    const tools = window.AL_DATA.herramientasClinicas;

    container.innerHTML = `
      <details class="exclusive-accordion" name="clinical-tool-group" open>
        <summary>🧠 1. ${tools.atlasNeurologico.titulo} (${tools.atlasNeurologico.asignatura})</summary>
        <div class="exclusive-accordion-body">
          <h4 style="margin:0 0 0.5rem;">A) Los 12 Pares Craneales y su Repercusión en Habla, Voz, Audición, Lectura y Deglución</h4>
          <div class="clinical-table-wrap">
            <table class="clinical-table">
              <thead>
                <tr>
                  <th>Par</th>
                  <th>Nombre y Tipo</th>
                  <th>Función en Lenguaje, Habla, Voz, Audición y Deglución</th>
                  <th>Consecuencia Clínica si se Lesiona</th>
                </tr>
              </thead>
              <tbody>
                ${tools.atlasNeurologico.paresCraneales
                  .map(
                    (p) => `
                      <tr>
                        <td><strong>${p.numero}</strong></td>
                        <td><strong>${p.nombre}</strong><br><small style="color:var(--text-muted);">${p.tipo}</small></td>
                        <td>${formatSimpleMarkdown(p.funcionHabla)}</td>
                        <td>${formatSimpleMarkdown(p.lesion)}</td>
                      </tr>
                    `
                  )
                  .join("")}
              </tbody>
            </table>
          </div>

          <h4 style="margin:1.1rem 0 0.5rem;">B) Áreas Corticales y Tractos del Modelo Multimodal Cerebral del Lenguaje</h4>
          <div class="clinical-table-wrap">
            <table class="clinical-table">
              <thead>
                <tr>
                  <th>Área / Estructura</th>
                  <th>Localización Anatómica</th>
                  <th>Función Neurolingüística</th>
                  <th>Síndrome por Lesión</th>
                </tr>
              </thead>
              <tbody>
                ${tools.atlasNeurologico.areasCerebrales
                  .map(
                    (a) => `
                      <tr>
                        <td><strong>${a.nombre}</strong></td>
                        <td>${a.localizacion}</td>
                        <td>${a.funcion}</td>
                        <td>${a.sindrome}</td>
                      </tr>
                    `
                  )
                  .join("")}
              </tbody>
            </table>
          </div>
        </div>
      </details>

      <details class="exclusive-accordion" name="clinical-tool-group">
        <summary>🗣️ 2. ${tools.diferencialLenguaje.titulo}</summary>
        <div class="exclusive-accordion-body">
          <div class="clinical-table-wrap">
            <table class="clinical-table">
              <thead>
                <tr>
                  <th>Perfil Diagnóstico</th>
                  <th>Edad Clave</th>
                  <th>Criterios Clínicos y Marcadores</th>
                  <th>Comprensión</th>
                  <th>Pruebas Estandarizadas</th>
                  <th>Líneas de Intervención</th>
                </tr>
              </thead>
              <tbody>
                ${tools.diferencialLenguaje.perfiles
                  .map(
                    (p) => `
                      <tr>
                        <td><strong>${p.nombre}</strong></td>
                        <td>${p.edadClave}</td>
                        <td>${formatSimpleMarkdown(p.criterios)}</td>
                        <td>${p.comprension}</td>
                        <td><strong>${p.pruebas}</strong></td>
                        <td>${p.intervencion}</td>
                      </tr>
                    `
                  )
                  .join("")}
              </tbody>
            </table>
          </div>
        </div>
      </details>

      <details class="exclusive-accordion" name="clinical-tool-group">
        <summary>✍️ 3. ${tools.diferencialEscrita.titulo}</summary>
        <div class="exclusive-accordion-body">
          <div class="clinical-table-wrap">
            <table class="clinical-table">
              <thead>
                <tr>
                  <th>Ámbito y Baterías</th>
                  <th>Trastorno / Subtipo</th>
                  <th>Ruta o Proceso Afectado</th>
                  <th>Errores e Indicadores Clínicos</th>
                  <th>Intervención Específica desde AL</th>
                </tr>
              </thead>
              <tbody>
                ${tools.diferencialEscrita.trastornos
                  .map(
                    (t) => `
                      <tr>
                        <td><span class="badge badge-info">${t.categoria}</span></td>
                        <td><strong>${t.nombre}</strong></td>
                        <td>${t.rutaAfectada}</td>
                        <td>${formatSimpleMarkdown(t.indicadores)}</td>
                        <td>${formatSimpleMarkdown(t.intervencion)}</td>
                      </tr>
                    `
                  )
                  .join("")}
              </tbody>
            </table>
          </div>
        </div>
      </details>

      <details class="exclusive-accordion" name="clinical-tool-group">
        <summary>💬 4. ${tools.selectorSAAC.titulo}</summary>
        <div class="exclusive-accordion-body">
          <h4 style="margin:0 0 0.5rem;">A) Código de Colores Estándar para Tableros de Comunicación (SPC / ARASAAC / Bliss)</h4>
          <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:0.75rem; margin-bottom:1.2rem;">
            ${tools.selectorSAAC.coloresTablero
              .map(
                (c) => `
                  <div style="border:1px solid var(--border-color); border-left:6px solid ${c.hex}; border-radius:8px; padding:0.75rem; background:var(--bg-surface-alt);">
                    <div style="font-weight:800; color:${c.hex};">${c.color} — ${c.categoria}</div>
                    <div style="font-size:0.8rem; color:var(--text-secondary); margin-top:0.25rem;">Ej.: <em>${c.ejemplos}</em></div>
                  </div>
                `
              )
              .join("")}
          </div>

          <h4 style="margin:0 0 0.5rem;">B) Matriz de Decisión Clínica de SAAC según Perfil del Alumno</h4>
          <div class="clinical-table-wrap">
            <table class="clinical-table">
              <thead>
                <tr>
                  <th>Perfil del Alumno</th>
                  <th>SAAC y Ayudas Técnicas Recomendadas</th>
                  <th>Justificación Clínica</th>
                </tr>
              </thead>
              <tbody>
                ${tools.selectorSAAC.casosGuia
                  .map(
                    (c) => `
                      <tr>
                        <td><strong>${c.perfil}</strong></td>
                        <td>${formatSimpleMarkdown(c.sistemaRecomendado)}</td>
                        <td>${c.justificacion}</td>
                      </tr>
                    `
                  )
                  .join("")}
              </tbody>
            </table>
          </div>
        </div>
      </details>
    `;
  }

  // ==========================================================================
  // VISTA 7: CALCULADORA DE NOTAS UCJC (100% vs 95% + EXAMEN 60%)
  // ==========================================================================
  function renderGradesCalculator(targetContainerId, filterSubjId) {
    const container = document.getElementById(
      targetContainerId || "grades-calculator-container"
    );
    if (!container) return;

    const subjectsToShow = window.AL_DATA.asignaturas.filter(
      (rawSubj) => !filterSubjId || rawSubj.id === filterSubjId
    );

    container.innerHTML = subjectsToShow
      .map((rawSubj) => {
        const s = getSubject(rawSubj.id);
        const g = state.grades[s.id] || {
          act1: 8.5,
          act1Late: false,
          act2: 8.5,
          act2Late: false,
          t1: 9.0,
          t1Late: false,
          t2: 9.0,
          t2Late: false,
          port: 9.0,
          portLate: false,
          exam: 7.0
        };

        const calcItem = (val, weight, isLate) =>
          (Math.min(10, Math.max(0, Number(val) || 0)) / 10) *
          weight *
          (isLate ? 0.95 : 1.0);

        const ptsAct1 = calcItem(g.act1, 1.0, g.act1Late);
        const ptsAct2 = calcItem(g.act2, 1.0, g.act2Late);
        const ptsT1 = calcItem(g.t1, 0.5, g.t1Late);
        const ptsT2 = calcItem(g.t2, 0.5, g.t2Late);
        const ptsPort = calcItem(g.port, 1.0, g.portLate);

        const totalContinua = ptsAct1 + ptsAct2 + ptsT1 + ptsT2 + ptsPort;
        const ptsExam = (Math.min(10, Math.max(0, Number(g.exam) || 0)) / 10) * 6.0;
        const notaFinal = totalContinua + ptsExam;

        const neededFor5 = Math.max(5.0, ((5.0 - totalContinua) / 6.0) * 10);
        const neededFor7 = Math.max(5.0, ((7.0 - totalContinua) / 6.0) * 10);
        const neededFor9 = Math.max(5.0, ((9.0 - totalContinua) / 6.0) * 10);

        return `
          <div class="card" style="border-top:4px solid ${s.color}" data-grade-card="${s.id}">
            <div class="card-header">
              <div>
                <h3 class="card-title">${s.nombre}</h3>
                <small style="color:var(--text-muted);">Docente: ${s.profesora}</small>
              </div>
              <div style="display:flex; gap:0.5rem; align-items:center; flex-wrap:wrap;">
                <span class="badge badge-info">Ev. Continua: ${totalContinua.toFixed(2)} / 4,00 pts</span>
                <span class="badge ${notaFinal >= 5 && g.exam >= 5 ? "badge-done" : "badge-urgent"}">
                  Nota Final Estimada: ${notaFinal.toFixed(2)} / 10
                </span>
              </div>
            </div>

            <div class="clinical-table-wrap">
              <table class="clinical-table">
                <thead>
                  <tr>
                    <th>Componente Evaluable</th>
                    <th>Peso</th>
                    <th>Nota (0 a 10)</th>
                    <th>¿Entregada tras fecha recomendada? (95%)</th>
                    <th>Puntos Aportados</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Actividad 1</strong> (Unidades 1–2)</td>
                    <td>10% (1,0 pt)</td>
                    <td><input type="number" min="0" max="10" step="0.1" value="${g.act1}" data-g-field="act1" class="subject-filter-select" style="width:90px;" /></td>
                    <td><label><input type="checkbox" data-g-field="act1Late" ${g.act1Late ? "checked" : ""} /> Fuera de fecha recomendada (95%)</label></td>
                    <td><strong>${ptsAct1.toFixed(2)}</strong> / 1,00</td>
                  </tr>
                  <tr>
                    <td><strong>Actividad 2</strong> (Unidades 3–5)</td>
                    <td>10% (1,0 pt)</td>
                    <td><input type="number" min="0" max="10" step="0.1" value="${g.act2}" data-g-field="act2" class="subject-filter-select" style="width:90px;" /></td>
                    <td><label><input type="checkbox" data-g-field="act2Late" ${g.act2Late ? "checked" : ""} /> Fuera de fecha recomendada (95%)</label></td>
                    <td><strong>${ptsAct2.toFixed(2)}</strong> / 1,00</td>
                  </tr>
                  <tr>
                    <td><strong>Taller Práctico 1</strong> (Sesión 3)</td>
                    <td>5% (0,5 pts)</td>
                    <td><input type="number" min="0" max="10" step="0.1" value="${g.t1}" data-g-field="t1" class="subject-filter-select" style="width:90px;" /></td>
                    <td><label><input type="checkbox" data-g-field="t1Late" ${g.t1Late ? "checked" : ""} /> Fuera de las 72h (95%)</label></td>
                    <td><strong>${ptsT1.toFixed(2)}</strong> / 0,50</td>
                  </tr>
                  <tr>
                    <td><strong>Taller Práctico 2</strong> (Sesión 7)</td>
                    <td>5% (0,5 pts)</td>
                    <td><input type="number" min="0" max="10" step="0.1" value="${g.t2}" data-g-field="t2" class="subject-filter-select" style="width:90px;" /></td>
                    <td><label><input type="checkbox" data-g-field="t2Late" ${g.t2Late ? "checked" : ""} /> Fuera de las 72h (95%)</label></td>
                    <td><strong>${ptsT2.toFixed(2)}</strong> / 0,50</td>
                  </tr>
                  <tr>
                    <td><strong>Portfolio Final</strong> (Unidades 1–5)</td>
                    <td>10% (1,0 pt)</td>
                    <td><input type="number" min="0" max="10" step="0.1" value="${g.port}" data-g-field="port" class="subject-filter-select" style="width:90px;" /></td>
                    <td><label><input type="checkbox" data-g-field="portLate" ${g.portLate ? "checked" : ""} /> Fuera de fecha recomendada (95%)</label></td>
                    <td><strong>${ptsPort.toFixed(2)}</strong> / 1,00</td>
                  </tr>
                  <tr style="background:var(--bg-surface-alt);">
                    <td><strong>Examen Final Tipo Test (Proctoring - 5 feb 2027)</strong></td>
                    <td>60% (6,0 pts)</td>
                    <td><input type="number" min="0" max="10" step="0.1" value="${g.exam}" data-g-field="exam" class="subject-filter-select" style="width:90px;" /></td>
                    <td><em>Requiere mínimo 5,0 / 10 para hacer media</em></td>
                    <td><strong>${ptsExam.toFixed(2)}</strong> / 6,00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style="margin-top:0.85rem; font-size:0.84rem; display:flex; gap:1rem; flex-wrap:wrap; color:var(--text-secondary);">
              <span>🎯 <strong>Para Aprobar (5,0):</strong> necesitas <strong>${neededFor5.toFixed(2)}/10</strong> en el examen.</span>
              <span>🏅 <strong>Para Notable (7,0):</strong> necesitas <strong>${neededFor7 <= 10 ? neededFor7.toFixed(2) + "/10" : "No alcanzable"}</strong> en el examen.</span>
              <span>🌟 <strong>Para Sobresaliente (9,0):</strong> necesitas <strong>${neededFor9 <= 10 ? neededFor9.toFixed(2) + "/10" : "No alcanzable"}</strong> en el examen.</span>
            </div>
          </div>
        `;
      })
      .join("");

    container.querySelectorAll("[data-grade-card]").forEach((cardEl) => {
      const subjId = cardEl.dataset.gradeCard;
      cardEl.querySelectorAll("[data-g-field]").forEach((input) => {
        input.addEventListener("change", () => {
          if (!state.grades[subjId]) {
            state.grades[subjId] = {
              act1: 8.5, act1Late: false,
              act2: 8.5, act2Late: false,
              t1: 9.0, t1Late: false,
              t2: 9.0, t2Late: false,
              port: 9.0, portLate: false,
              exam: 7.0
            };
          }
          const field = input.dataset.gField;
          state.grades[subjId][field] =
            input.type === "checkbox" ? input.checked : parseFloat(input.value) || 0;
          saveState();
          renderGradesCalculator(targetContainerId, filterSubjId);
        });
      });
    });
  }

  // ==========================================================================
  // EXPORTACIÓN A CALENDARIO .ICS (herrizpab@gmail.com) Y BACKUP JSON
  // ==========================================================================
  function exportToICS() {
    const lines = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//UCJC Mencion Audicion y Lenguaje//ES",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "X-WR-CALNAME:Mención AL UCJC (Entregas y Exámenes)",
      "X-WR-TIMEZONE:Europe/Madrid"
    ];

    window.AL_DATA.entregas.forEach((t) => {
      const iso = getTaskDate(t);
      const dStart = iso.replace(/-/g, "");
      const dEnd = nextDayCompact(iso);
      const subj = getSubject(t.asignaturaId);
      const desc = `Asignatura: ${subj.nombre} (${subj.profesora})\\nPeso: ${t.puntos} pts (${t.porcentaje}%)\\nFecha 100%: ${iso}\\nLímite 95%: ${t.fechaLimite}\\n\\n${(t.descripcion || "").replace(/\r?\n/g, " ")}`;

      lines.push(
        "BEGIN:VEVENT",
        `UID:${t.id}-herrizpab@ucjc-mencion-al`,
        `DTSTART;VALUE=DATE:${dStart}`,
        `DTEND;VALUE=DATE:${dEnd}`,
        `SUMMARY:📌 [${subj.nombreCorto}] ${t.titulo} (${t.puntos} pts)`,
        `DESCRIPTION:${desc}`,
        "BEGIN:VALARM",
        "TRIGGER:-P3D",
        "ACTION:DISPLAY",
        `DESCRIPTION:Faltan 3 días para entregar ${t.titulo}`,
        "END:VALARM",
        "BEGIN:VALARM",
        "TRIGGER:-P1D",
        "ACTION:DISPLAY",
        `DESCRIPTION:Mañana vence fecha recomendada (100%): ${t.titulo}`,
        "END:VALARM",
        "END:VEVENT"
      );
    });

    lines.push(
      "BEGIN:VEVENT",
      "UID:hito-20270121-herrizpab@ucjc-mencion-al",
      "DTSTART;VALUE=DATE:20270121",
      "DTEND;VALUE=DATE:20270122",
      "SUMMARY:🚨 FECHA LÍMITE FINAL EVALUACIÓN CONTINUA UCJC (Sobre 95%)",
      "DESCRIPTION:Último día para entregar Actividades, Talleres y Portfolios de la Mención en Audición y Lenguaje calificados sobre el 95%.",
      "END:VEVENT",
      "END:VCALENDAR"
    );

    const blob = new Blob([lines.join("\r\n")], {
      type: "text/calendar;charset=utf-8"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Calendario_Mencion_AL_UCJC.ics";
    a.click();
    URL.revokeObjectURL(url);
  }

  function exportBackupJSON() {
    const blob = new Blob([JSON.stringify(state, null, 2)], {
      type: "application/json;charset=utf-8"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Progreso_Mencion_AL_UCJC.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  // ==========================================================================
  // TEMPORIZADOR POMODORO
  // ==========================================================================
  let pomoSeconds = 25 * 60;
  let pomoRunning = false;
  let pomoIsBreak = false;
  let pomoInterval = null;

  function initPomodoro() {
    const display = document.getElementById("pomo-display");
    const toggleBtn = document.getElementById("pomo-toggle-btn");
    const modeBtn = document.getElementById("pomo-mode-btn");
    const resetBtn = document.getElementById("pomo-reset-btn");
    const label = document.getElementById("pomo-mode-label");

    function updateDisplay() {
      const m = String(Math.floor(pomoSeconds / 60)).padStart(2, "0");
      const s = String(pomoSeconds % 60).padStart(2, "0");
      display.textContent = `${m}:${s}`;
    }

    toggleBtn.addEventListener("click", () => {
      pomoRunning = !pomoRunning;
      toggleBtn.textContent = pomoRunning ? "Pausar" : "Iniciar";
      if (pomoRunning) {
        pomoInterval = setInterval(() => {
          if (pomoSeconds > 0) {
            pomoSeconds--;
            updateDisplay();
          } else {
            clearInterval(pomoInterval);
            pomoRunning = false;
            toggleBtn.textContent = "Iniciar";
          }
        }, 1000);
      } else {
        clearInterval(pomoInterval);
      }
    });

    modeBtn.addEventListener("click", () => {
      clearInterval(pomoInterval);
      pomoRunning = false;
      pomoIsBreak = !pomoIsBreak;
      pomoSeconds = (pomoIsBreak ? 5 : 25) * 60;
      label.textContent = pomoIsBreak ? "Descanso 5m" : "Enfoque 25m";
      modeBtn.textContent = pomoIsBreak ? "25m Estudio" : "5m Pausa";
      toggleBtn.textContent = "Iniciar";
      updateDisplay();
    });

    resetBtn.addEventListener("click", () => {
      clearInterval(pomoInterval);
      pomoRunning = false;
      pomoSeconds = (pomoIsBreak ? 5 : 25) * 60;
      toggleBtn.textContent = "Iniciar";
      updateDisplay();
    });
  }

  // ==========================================================================
  // VISTA 8: CENTRO MULTIMEDIA, REPRODUCTOR DE VÍDEO Y EXTRACTOR
  // ==========================================================================
  function renderMultimediaView() {
    const container = document.getElementById("multimedia-grid-container");
    if (!container) return;

    const catalog = window.MULTIMEDIA_CATALOG || {
      totalVideos: 0,
      totalPdfs: 0,
      totalImages: 0,
      totalDocs: 0,
      files: { videos: [], pdfs: [], images: [], docs: [] }
    };

    const files = catalog.files || { videos: [], pdfs: [], images: [], docs: [] };

    // Actualizar contadores
    const vCountEl = document.getElementById("stat-videos-count");
    const pCountEl = document.getElementById("stat-pdfs-count");
    const iCountEl = document.getElementById("stat-images-count");
    const dCountEl = document.getElementById("stat-docs-count");
    if (vCountEl) vCountEl.textContent = String(catalog.totalVideos || (files.videos ? files.videos.length : 0));
    if (pCountEl) pCountEl.textContent = String(catalog.totalPdfs || (files.pdfs ? files.pdfs.length : 0));
    if (iCountEl) iCountEl.textContent = String(catalog.totalImages || (files.images ? files.images.length : 0));
    if (dCountEl) dCountEl.textContent = String(catalog.totalDocs || (files.docs ? files.docs.length : 0));

    const subFilter = state.multimediaSubFilter || "all";
    const typeFilter = state.multimediaTypeFilter || "all";
    const query = (state.searchQuery || "").toLowerCase();

    let itemsToRender = [];

    if (typeFilter === "all" || typeFilter === "video") {
      (files.videos || []).forEach((item) => itemsToRender.push({ ...item, mediaType: "video" }));
    }
    if (typeFilter === "all" || typeFilter === "pdf") {
      (files.pdfs || []).forEach((item) => itemsToRender.push({ ...item, mediaType: "pdf" }));
    }
    if (typeFilter === "all" || typeFilter === "image") {
      (files.images || []).forEach((item) => itemsToRender.push({ ...item, mediaType: "image" }));
    }
    if (typeFilter === "all" || typeFilter === "doc") {
      (files.docs || []).forEach((item) => itemsToRender.push({ ...item, mediaType: "doc" }));
    }

    // Filtrar por asignatura
    if (subFilter !== "all") {
      itemsToRender = itemsToRender.filter((item) => item.asignaturaId === subFilter);
    }

    // Filtrar por búsqueda
    if (query) {
      itemsToRender = itemsToRender.filter((item) => {
        return (
          item.nombre.toLowerCase().includes(query) ||
          (item.asignaturaNombre || "").toLowerCase().includes(query) ||
          (item.previewText || "").toLowerCase().includes(query)
        );
      });
    }

    if (itemsToRender.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; padding:3rem 1.5rem; text-align:center; background:var(--bg-card); border-radius:12px; border:1px dashed var(--border-color);">
          <div style="font-size:2.5rem; margin-bottom:0.5rem;">📂</div>
          <h4 style="margin:0 0 0.4rem; font-size:1.1rem;">No se encontraron recursos multimedia</h4>
          <p style="margin:0; font-size:0.88rem; color:var(--text-muted);">
            No hay recursos que coincidan con los filtros seleccionados (Asignatura: <strong>${subFilter}</strong>, Tipo: <strong>${typeFilter}</strong>).
          </p>
        </div>
      `;
      return;
    }

    container.innerHTML = itemsToRender
      .map((item) => {
        const subj = getSubject(item.asignaturaId) || {
          color: "#6366f1",
          nombreCorto: item.asignaturaNombre || "Asignatura"
        };

        if (item.mediaType === "video") {
          const thumbHtml = item.thumbnail
            ? `<img src="${encodeURI(item.thumbnail)}" alt="Miniatura de ${item.nombre}" loading="lazy" style="width:100%; height:160px; object-fit:cover; border-radius:8px 8px 0 0;" />`
            : `<div style="height:160px; display:flex; align-items:center; justify-content:center; background:linear-gradient(135deg, #1e1b4b, #312e81); border-radius:8px 8px 0 0; font-size:3rem;">🎬</div>`;

          return `
            <div class="card media-card" style="padding:0; overflow:hidden; border:1px solid var(--border-color); display:flex; flex-direction:column; justify-content:space-between;">
              <div style="position:relative; cursor:pointer;" onclick="window.AL_APP.openVideo('${item.relPath.replace(/'/g, "\\'")}', '${item.nombre.replace(/'/g, "\\'")}', '${item.asignaturaNombre.replace(/'/g, "\\'")}')">
                ${thumbHtml}
                <div style="position:absolute; inset:0; background:rgba(0,0,0,0.25); display:flex; align-items:center; justify-content:center;">
                  <div style="width:48px; height:48px; border-radius:50%; background:rgba(239,68,68,0.92); color:#fff; display:flex; align-items:center; justify-content:center; font-size:1.4rem; box-shadow:0 4px 14px rgba(0,0,0,0.4);">
                    ▶
                  </div>
                </div>
                <div style="position:absolute; bottom:8px; right:8px; background:rgba(0,0,0,0.78); color:#fff; font-size:0.72rem; padding:0.2rem 0.5rem; border-radius:4px; font-weight:700;">
                  ⏱️ ${item.durationMin ? item.durationMin + " min" : "Vídeo"}
                </div>
                <div style="position:absolute; top:8px; left:8px; background:${subj.color}; color:#fff; font-size:0.7rem; padding:0.18rem 0.5rem; border-radius:4px; font-weight:700;">
                  ${subj.nombreCorto}
                </div>
              </div>
              <div style="padding:0.9rem; display:flex; flex-direction:column; flex:1; justify-content:space-between;">
                <div>
                  <h4 style="margin:0 0 0.35rem; font-size:0.88rem; line-height:1.35; word-break:break-word;" title="${item.nombre}">
                    ${item.nombre}
                  </h4>
                  <div style="display:flex; gap:0.4rem; flex-wrap:wrap; font-size:0.74rem; color:var(--text-muted); margin-bottom:0.75rem;">
                    <span>📐 ${item.resolution || "HD"}</span>
                    <span>•</span>
                    <span>📦 ${item.sizeMb} MB</span>
                    <span>•</span>
                    <span>🎬 ${item.ext.toUpperCase()}</span>
                  </div>
                </div>
                <div style="display:flex; gap:0.4rem;">
                  <button
                    type="button"
                    class="btn btn-primary btn-sm"
                    style="flex:1; display:flex; align-items:center; justify-content:center; gap:0.35rem; font-weight:700;"
                    onclick="window.AL_APP.openVideo('${item.relPath.replace(/'/g, "\\'")}', '${item.nombre.replace(/'/g, "\\'")}', '${item.asignaturaNombre.replace(/'/g, "\\'")}')"
                  >
                    ▶ Reproducir
                  </button>
                  <a
                    href="${encodeURI(item.relPath)}"
                    download
                    class="btn btn-sm"
                    title="Descargar vídeo al equipo"
                    style="display:flex; align-items:center; justify-content:center; padding:0 0.6rem;"
                  >
                    ⬇
                  </a>
                </div>
              </div>
            </div>
          `;
        } else if (item.mediaType === "pdf") {
          return `
            <div class="card media-card" style="padding:1rem; border:1px solid var(--border-color); display:flex; flex-direction:column; justify-content:space-between; border-left:4px solid #ef4444;">
              <div>
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.4rem; gap:0.5rem;">
                  <span class="badge" style="background:${subj.color}20; color:${subj.color}; font-size:0.72rem;">${subj.nombreCorto}</span>
                  <span style="font-size:0.72rem; color:var(--text-muted);">📄 ${item.numPages ? item.numPages + " págs" : "PDF"}</span>
                </div>
                <h4 style="margin:0 0 0.4rem; font-size:0.87rem; line-height:1.3; word-break:break-word;" title="${item.nombre}">
                  ${item.nombre}
                </h4>
                ${
                  item.previewText
                    ? `
                  <p style="font-size:0.76rem; color:var(--text-secondary); line-height:1.35; margin:0 0 0.75rem; display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical; overflow:hidden;">
                    ${item.previewText}
                  </p>
                `
                    : `
                  <div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.75rem;">📦 ${item.sizeMb} MB</div>
                `
                }
              </div>
              <div style="display:flex; gap:0.4rem; margin-top:0.5rem;">
                <button
                  type="button"
                  class="btn btn-primary btn-sm"
                  style="flex:1; display:flex; align-items:center; justify-content:center; gap:0.35rem; font-size:0.78rem;"
                  onclick="window.AL_APP.openPdf('${item.relPath.replace(/'/g, "\\'")}', '${item.nombre.replace(/'/g, "\\'")}')"
                >
                  👁️ Leer PDF Oficial
                </button>
                <a
                  href="${encodeURI(item.relPath)}"
                  download
                  class="btn btn-sm"
                  title="Descargar PDF"
                  style="display:flex; align-items:center; justify-content:center; padding:0 0.6rem;"
                >
                  ⬇
                </a>
              </div>
            </div>
          `;
        } else if (item.mediaType === "image") {
          return `
            <div class="card media-card" style="padding:0; overflow:hidden; border:1px solid var(--border-color); display:flex; flex-direction:column; justify-content:space-between; border-left:4px solid #ec4899;">
              <div style="position:relative; cursor:pointer;" onclick="window.AL_APP.openImage('${item.relPath.replace(/'/g, "\\'")}', '${item.nombre.replace(/'/g, "\\'")}', '${item.asignaturaNombre.replace(/'/g, "\\'")}')">
                <img src="${encodeURI(item.relPath)}" alt="${item.nombre}" loading="lazy" style="width:100%; height:160px; object-fit:cover;" />
                <div style="position:absolute; top:8px; left:8px; background:#ec4899; color:#fff; font-size:0.7rem; padding:0.18rem 0.5rem; border-radius:4px; font-weight:700;">
                  ${subj.nombreCorto} · Rúbrica
                </div>
              </div>
              <div style="padding:0.85rem; display:flex; flex-direction:column; flex:1; justify-content:space-between;">
                <div>
                  <h4 style="margin:0 0 0.35rem; font-size:0.86rem; line-height:1.3; word-break:break-word;">${item.nombre}</h4>
                  <div style="font-size:0.74rem; color:var(--text-muted); margin-bottom:0.65rem;">
                    📐 ${item.dimensions || "Imagen"} · 📦 ${item.sizeMb} MB
                  </div>
                </div>
                <button
                  type="button"
                  class="btn btn-secondary btn-sm"
                  style="width:100%; font-size:0.78rem;"
                  onclick="window.AL_APP.openImage('${item.relPath.replace(/'/g, "\\'")}', '${item.nombre.replace(/'/g, "\\'")}', '${item.asignaturaNombre.replace(/'/g, "\\'")}')"
                >
                  🖼️ Ver Rúbrica en Grande
                </button>
              </div>
            </div>
          `;
        } else {
          // Doc / Word
          return `
            <div class="card media-card" style="padding:1rem; border:1px solid var(--border-color); display:flex; flex-direction:column; justify-content:space-between; border-left:4px solid #f59e0b;">
              <div>
                <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.4rem;">
                  <span class="badge" style="background:${subj.color}20; color:${subj.color}; font-size:0.72rem;">${subj.nombreCorto}</span>
                  <span style="font-size:0.72rem; color:var(--text-muted);">📝 Word Editable</span>
                </div>
                <h4 style="margin:0 0 0.35rem; font-size:0.87rem; line-height:1.3; word-break:break-word;">${item.nombre}</h4>
                <p style="font-size:0.75rem; color:var(--text-secondary); margin:0 0 0.75rem;">
                  Plantilla editable oficial para cumplimentar y entregar en la plataforma virtual.
                </p>
              </div>
              <a
                href="${encodeURI(item.relPath)}"
                download
                class="btn btn-primary btn-sm"
                style="width:100%; display:flex; align-items:center; justify-content:center; gap:0.35rem; font-size:0.78rem;"
              >
                📝 Descargar Plantilla Word
              </a>
            </div>
          `;
        }
      })
      .join("");
  }

  // ==========================================================================
  // RENDERIZADO GLOBAL E INICIALIZACIÓN DE EVENTOS
  // ==========================================================================
  function renderAll() {
    updateSidebarBadges();
    renderSidebarClasses();
    renderCalendarView();
    renderClassroomSubjectView();
    renderDashboard();
    renderTasksView();
    renderUnitsView();
    renderStudyView();
    renderClinicalTools();
    renderGradesCalculator();
    renderMultimediaView();
  }

  function initApp() {
    document.documentElement.setAttribute("data-theme", state.theme || "light");

    const subjSelect = document.getElementById("global-subject-filter");
    window.AL_DATA.asignaturas.forEach((s) => {
      const opt = document.createElement("option");
      opt.value = s.id;
      opt.textContent = s.nombre;
      subjSelect.appendChild(opt);
    });
    subjSelect.value = state.globalSubject || "all";
    subjSelect.addEventListener("change", () => {
      state.globalSubject = subjSelect.value;
      saveState();
      renderAll();
    });

    const searchInput = document.getElementById("global-search-input");
    searchInput.addEventListener("input", () => {
      state.searchQuery = searchInput.value.trim().toLowerCase();
      renderAll();
    });

    document.querySelectorAll(".nav-btn[data-view]").forEach((btn) => {
      btn.addEventListener("click", () => switchView(btn.dataset.view));
    });

    document.getElementById("cal-prev-month-btn").addEventListener("click", () => {
      const idx = CALENDAR_MONTHS.findIndex((m) => m.key === state.calMonth);
      if (idx > 0) {
        state.calMonth = CALENDAR_MONTHS[idx - 1].key;
        saveState();
        renderCalendarView();
      }
    });

    document.getElementById("cal-next-month-btn").addEventListener("click", () => {
      const idx = CALENDAR_MONTHS.findIndex((m) => m.key === state.calMonth);
      if (idx >= 0 && idx < CALENDAR_MONTHS.length - 1) {
        state.calMonth = CALENDAR_MONTHS[idx + 1].key;
        saveState();
        renderCalendarView();
      }
    });

    document.querySelectorAll("[data-cal-mode]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.calMode = btn.dataset.calMode;
        document.querySelectorAll("[data-cal-mode]").forEach((b) =>
          b.classList.toggle("active", b.dataset.calMode === state.calMode)
        );
        saveState();
        renderCalendarView();
      });
    });

    document.querySelectorAll("[data-task-type]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.taskTypeFilter = btn.dataset.taskType;
        document.querySelectorAll("[data-task-type]").forEach((b) =>
          b.classList.toggle("active", b.dataset.taskType === state.taskTypeFilter)
        );
        renderTasksView();
      });
    });

    document.querySelectorAll("[data-study-tab]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.studyTab = btn.dataset.studyTab;
        document.querySelectorAll("[data-study-tab]").forEach((b) =>
          b.classList.toggle("active", b.dataset.studyTab === state.studyTab)
        );
        renderStudyView();
      });
    });

    document.getElementById("expand-all-units-btn").addEventListener("click", () => {
      document.querySelectorAll(".until-found-panel").forEach((panel) => {
        panel.removeAttribute("hidden");
      });
      document.querySelectorAll("[data-unit-toggle]").forEach((btn) => {
        btn.setAttribute("aria-expanded", "true");
        const chev = btn.querySelector(".unit-chevron");
        if (chev) chev.textContent = "▲ Plegar";
      });
    });

    document.getElementById("collapse-all-units-btn").addEventListener("click", () => {
      document.querySelectorAll(".until-found-panel").forEach((panel) => {
        panel.setAttribute("hidden", "until-found");
      });
      document.querySelectorAll("[data-unit-toggle]").forEach((btn) => {
        btn.setAttribute("aria-expanded", "false");
        const chev = btn.querySelector(".unit-chevron");
        if (chev) chev.textContent = "▼ Desplegar";
      });
    });

    const ceDialog = document.getElementById("custom-event-dialog");
    document.getElementById("add-custom-event-btn").addEventListener("click", () => {
      if (typeof ceDialog.showModal === "function") ceDialog.showModal();
    });

    document.getElementById("custom-event-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("ce-title").value.trim();
      const subjectId = document.getElementById("ce-subject").value;
      const date = document.getElementById("ce-date").value;
      if (title && date) {
        state.customEvents.push({
          id: "ce-" + Date.now(),
          title,
          subjectId,
          date
        });
        saveState();
        document.getElementById("ce-title").value = "";
        ceDialog.close();
        renderCalendarView();
      }
    });

    document.getElementById("open-gcal-modal-btn").addEventListener("click", openGCalModal);
    document.getElementById("cal-sync-gcal-btn").addEventListener("click", openGCalModal);
    document.getElementById("modal-download-ics-btn").addEventListener("click", exportToICS);
    document.getElementById("export-backup-btn").addEventListener("click", exportBackupJSON);

    const neonBtn = document.getElementById("neon-sync-btn");
    if (neonBtn) {
      neonBtn.addEventListener("click", () => {
        pullStateFromNeon(true);
      });
    }

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        pullStateFromNeon(false);
      }
    });

    document.getElementById("theme-toggle-btn").addEventListener("click", () => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", state.theme);
      saveState();
    });

    // Control de velocidad y cierre del reproductor de vídeo
    document.querySelectorAll(".btn-video-speed").forEach((btn) => {
      btn.addEventListener("click", () => {
        const video = document.getElementById("class-video-player");
        if (!video) return;
        const speed = parseFloat(btn.dataset.speed);
        video.playbackRate = speed;
        document.querySelectorAll(".btn-video-speed").forEach((b) => {
          b.classList.toggle("active", b === btn);
        });
      });
    });

    const videoDialog = document.getElementById("video-dialog");
    if (videoDialog) {
      videoDialog.addEventListener("close", () => {
        const video = document.getElementById("class-video-player");
        if (video) {
          video.pause();
          video.removeAttribute("src");
          video.load();
        }
      });
    }

    const imageDialog = document.getElementById("image-dialog");
    if (imageDialog) {
      imageDialog.addEventListener("close", () => {
        const img = document.getElementById("image-preview");
        if (img) img.src = "";
      });
    }

    // Filtros de la Mediateca
    document.querySelectorAll(".btn-sub-filter").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.multimediaSubFilter = btn.dataset.sub;
        document.querySelectorAll(".btn-sub-filter").forEach((b) =>
          b.classList.toggle("active", b.dataset.sub === state.multimediaSubFilter)
        );
        saveState();
        renderMultimediaView();
      });
    });

    document.querySelectorAll(".btn-type-filter").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.multimediaTypeFilter = btn.dataset.type;
        document.querySelectorAll(".btn-type-filter").forEach((b) =>
          b.classList.toggle("active", b.dataset.type === state.multimediaTypeFilter)
        );
        saveState();
        renderMultimediaView();
      });
    });

    const extractorInfoBtn = document.getElementById("btn-run-extractor-info");
    if (extractorInfoBtn) {
      extractorInfoBtn.addEventListener("click", () => {
        alert(
          "🔄 CÓMO ACTUALIZAR LA WEB CON NUEVOS ARCHIVOS:\n\n" +
          "1. Coloca los nuevos vídeos (.mp4), rúbricas (.jpg) o PDFs en la carpeta de la asignatura correspondiente (PSICOPATO, anatomia, TRASTORN. ORAL, TRASTORN. ESCR, TIC).\n\n" +
          "2. Haz doble clic en 'EXTRAER_Y_ACTUALIZAR.bat' en la carpeta raíz.\n\n" +
          "3. La herramienta extraerá automáticamente duraciones, resoluciones, miniaturas de vídeo con OpenCV, textos y sincronizará la web y el calendario iCalendar."
        );
      });
    }

    initPomodoro();
    switchView(state.activeView || "calendario");
    pullStateFromNeon(false);
  }

  document.addEventListener("DOMContentLoaded", initApp);
})();
