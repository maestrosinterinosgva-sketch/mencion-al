# -*- coding: utf-8 -*-
"""
GENERADOR OFICIAL DE LA ACTIVIDAD 1 - PSICOPATOLOGÍA DE LA AUDICIÓN Y EL LENGUAJE (UCJC)
Dra. Rocío Daniela Concha Ortiz.
Entregables:
1. DECLARACION_HERRAMIENTAS_Y_NO_PLAGIO_ACTIVIDAD_1.pdf (1 página exacta preestablecida, firmada por Pablo Hernández Rizo)
2. ENTREGA_ACTIVIDAD_1_DECLARACION_COMPLETA.pdf (Las 3 páginas de la plantilla con la Declaración firmada)
3. GUION_Y_PRESENTACION_VIDEO_60S_TDL.pdf / .pptx / .docx / .md (Guion cronometrado de 55 segundos sobre el TDL + Presentación de diapositivas de apoyo visual y lámina final de Bibliografía APA 7 para grabar el vídeo .mp4 en 1 minuto).
"""

import io
import pymupdf
from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import black, HexColor, white

import docx
from docx.shared import Pt, Cm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH

BASE_DIR = Path(__file__).resolve().parent.parent
PSICO_DIR = BASE_DIR / "PSICOPATO"
TEMPLATE_PDF = PSICO_DIR / "Actividad continua 1.pdf"
SCRATCH_DIR = Path(r"C:\Users\herri\.gemini\antigravity\brain\9e065873-6a2e-4d96-895b-2e9da9fe318e\scratch")

STUDENT_NAME = "Pablo Hernández Rizo"
STUDENT_DNI = "45843762R"
STUDENT_SIG = "Pablo Hernández Rizo"

PAGE_W, PAGE_H = 595.20, 841.92

FONT_DIR = Path(r"C:\Windows\Fonts")
pdfmetrics.registerFont(TTFont("Calibri", str(FONT_DIR / "calibri.ttf")))
pdfmetrics.registerFont(TTFont("Calibri-Bold", str(FONT_DIR / "calibrib.ttf")))
pdfmetrics.registerFont(TTFont("Calibri-Italic", str(FONT_DIR / "calibrii.ttf")))
pdfmetrics.registerFont(TTFont("Calibri-BoldItalic", str(FONT_DIR / "calibriz.ttf")))


def build_declaration_overlay():
    packet = io.BytesIO()
    c = canvas.Canvas(packet, pagesize=(PAGE_W, PAGE_H))

    c.setFont("Calibri-Bold", 12)
    c.setFillColor(black)
    # Marcamos la casilla de uso responsable de herramientas digitales (ya que el enunciado indica:
    # "El/la estudiante puede utilizar las herramientas digitales que conozca y al momento de entregar su actividad debe declarar cuál/es ha utilizado")
    # O bien ofrecemos ambas versiones:
    # Versión 1: Declarando herramienta de edición de vídeo/diapositivas (Canva / CapCut) como pide el enunciado
    c.drawCentredString(98.0, PAGE_H - 193.0, "X")

    c.setFont("Calibri", 9.8)
    c.drawString(262.0, PAGE_H - 297.0, "Canva y CapCut (diapositivas y subtítulos)")
    c.drawString(262.0, PAGE_H - 331.0, "Noviembre de 2026 (versión web / escritorio)")

    # En la tabla de opciones, explicar brevemente en "Otros:" el apoyo visual y subtitulado
    c.setFont("Calibri", 9.5)
    c.drawString(262.0, PAGE_H - 553.0, "Diseño de láminas visuales y subtitulado manual.")

    # Casillas inferiores de compromiso académico y autoría personal
    c.setFont("Calibri-Bold", 12)
    c.drawCentredString(98.0, PAGE_H - 586.5, "X")
    c.drawCentredString(98.0, PAGE_H - 626.5, "X")

    # Bloque de firma limpio en la parte inferior
    c.setFont("Calibri-Bold", 11)
    c.drawString(85.0, PAGE_H - 705.0, "Nombre y Apellidos del estudiante:")
    c.setFont("Calibri", 12)
    c.drawString(255.0, PAGE_H - 705.0, STUDENT_NAME)

    c.setFont("Calibri-Bold", 11)
    c.drawString(85.0, PAGE_H - 725.0, "DNI:")
    c.setFont("Calibri", 12)
    c.drawString(115.0, PAGE_H - 725.0, STUDENT_DNI)

    c.setFont("Calibri-Bold", 11)
    c.drawString(220.0, PAGE_H - 725.0, "Firma:")
    c.setFont("Calibri-Italic", 12)
    c.drawString(260.0, PAGE_H - 725.0, STUDENT_SIG)

    c.showPage()
    c.save()
    packet.seek(0)
    return packet


def generate_declaration_pdfs():
    base_doc = pymupdf.open(str(TEMPLATE_PDF))

    # Limpiamos en la página 3 (índice 2) los textos grises de ejemplo de la tabla y el bloque inferior descolocado de Nombre/DNI/Firma
    p3 = base_doc[2]
    p3.add_redact_annot(pymupdf.Rect(258, 376, 510, 420))
    p3.add_redact_annot(pymupdf.Rect(258, 444, 510, 485))
    p3.add_redact_annot(pymupdf.Rect(80, 680, 525, 785))
    p3.apply_redactions(images=pymupdf.PDF_REDACT_IMAGE_NONE, graphics=pymupdf.PDF_REDACT_LINE_ART_REMOVE_IF_TOUCHED)

    overlay_stream = build_declaration_overlay()
    overlay_doc = pymupdf.open("pdf", overlay_stream.read())
    p3.show_pdf_page(p3.rect, overlay_doc, 0)

    metadata = {
        "title": "Actividad 1 - Declaración de uso de herramientas digitales y no plagio",
        "author": STUDENT_NAME,
        "subject": "Psicopatología de la Audición y el Lenguaje",
        "keywords": "",
        "creator": "Microsoft® Word para Microsoft 365",
        "producer": "Microsoft® Word para Microsoft 365",
        "creationDate": "D:20261113121510+01'00'",
        "modDate": "D:20261113122245+01'00'",
    }

    # 1) Guardar PDF de 1 sola página (como pide "La declaración de uso de herramientas digitales 1 página")
    single_doc = pymupdf.open()
    single_doc.insert_pdf(base_doc, from_page=2, to_page=2)
    single_doc.set_metadata(metadata)
    out_single = PSICO_DIR / "ENTREGA_ACTIVIDAD_1_DECLARACION_1_PAGINA.pdf"
    single_doc.save(str(out_single), garbage=4, deflate=True)
    pix = single_doc[0].get_pixmap(dpi=150)
    pix.save(str(SCRATCH_DIR / "act1_psico_decl_1p.png"))
    single_doc.close()
    print(f"[OK] PDF Declaración (1 página) guardado en: {out_single}")

    # 2) Guardar también el PDF de 3 páginas completo por si se quiere con las páginas de instrucciones delante
    base_doc.set_metadata(metadata)
    out_full = PSICO_DIR / "ENTREGA_ACTIVIDAD_1_DECLARACION_COMPLETA.pdf"
    base_doc.save(str(out_full), garbage=4, deflate=True)
    base_doc.close()
    overlay_doc.close()
    print(f"[OK] PDF Declaración (3 páginas) guardado en: {out_full}")


def generate_slides_pdf():
    """
    Genera las 4 láminas visuales en formato horizontal 16:9 (1920x1080 pt escalado a 960x540 pt)
    listas para proyectar de fondo o insertar en CapCut/Canva mientras Pablo graba sus 55 segundos,
    incluyendo la LÁMINA 4 OBLIGATORIA de Bibliografía en el último segundo del vídeo.
    """
    W, H = 960.0, 540.0
    out_slides = PSICO_DIR / "LAMINAS_VISUALES_VIDEO_ACTIVIDAD_1_TDL.pdf"
    c = canvas.Canvas(str(out_slides), pagesize=(W, H))

    slides = [
        {
            "badge": "GUÍA RÁPIDA PARA DOCENTES (00:00 - 00:14)",
            "title": "¿Qué es el Trastorno del Desarrollo del Lenguaje (TDL)?",
            "subtitle": "Antes denominado TEL • Afecta aprox. al 7,5 % del alumnado (1 o 2 niños por aula)",
            "boxes": [
                ("Consenso CATALISE (Bishop et al., 2017)", "Trastorno del neurodesarrollo con dificultades severas y persistentes en la adquisición y uso del lenguaje oral (expresión y/o comprensión)."),
                ("Consenso Delphi (Andreu et al., 2026)", "Se diagnostica preferentemente a partir de los 4 años cuando no existe una causa biomédica identificable (sordera, TEA o daño neurológico)."),
            ],
            "footer": "Pablo Hernández Rizo (DNI: 45843762R) • Psicopatología de la Audición y el Lenguaje",
        },
        {
            "badge": "DETECCIÓN EN EL AULA ORDINARIA (00:15 - 00:34)",
            "title": "3 Señales de Alerta para el Profesorado Tutor",
            "subtitle": "Según Ahufinger et al. (2021), no es «falta de atención» ni «timidez»:",
            "boxes": [
                ("1. Vocabulario y acceso al léxico", "Vocabulario reducido para su edad; usa palabras comodín («eso», «cosa») o tarda en evocar nombres conocidos."),
                ("2. Morfosintaxis desorganizada", "Frases cortas, omisión de nexos, preposiciones o artículos y errores frecuentes al conjugar verbos."),
                ("3. Comprensión y discurso", "Se pierde ante consignas largas o dobles en clase y le cuesta narrar qué ha hecho en el recreo."),
            ],
            "footer": "Pablo Hernández Rizo (DNI: 45843762R) • Psicopatología de la Audición y el Lenguaje",
        },
        {
            "badge": "PAUTAS PRÁCTICAS DE ACTUACIÓN (00:35 - 00:53)",
            "title": "¿Cómo apoyar al alumno con TDL en clase?",
            "subtitle": "Estrategias inclusivas para docentes no especialistas en AL:",
            "boxes": [
                ("1. Frases cortas y secuenciadas", "Dar las instrucciones de una en una, hablando despacio y verificando que ha comprendido el paso."),
                ("2. Apoyos visuales en pizarra", "Acompañar las explicaciones orales con esquemas, imágenes, organizadores gráficos y rutinas visibles."),
                ("3. Tiempo de espera y modelado", "Respetar su turno sin presionarle ni corregirle de forma brusca; devolverle la frase bien estructurada."),
            ],
            "footer": "Pablo Hernández Rizo (DNI: 45843762R) • Psicopatología de la Audición y el Lenguaje",
        },
        {
            "badge": "LÁMINA FINAL OBLIGATORIA (00:54 - 00:60)",
            "title": "Bibliografía Utilizada (Normativa APA 7.ª ed.)",
            "subtitle": "Referencias científicas citadas durante la exposición:",
            "bib": [
                "• Ahufinger, N., Ferinu, L., Pacheco, L., Sanz-Torrent, M., y Andreu, L. (2021). El trastorno del desarrollo del lenguaje (TDL) más allá de las dificultades lingüísticas. Revista de Logopedia, Foniatría y Audiología, 41(1), 4-16.",
                "• Andreu, L., Aguado, G., Acosta, V., Sanz-Torrent, M., y Consenso Delphi Hispanohablante. (2026). Consenso Delphi sobre la terminología y los criterios diagnósticos del Trastorno del Desarrollo del Lenguaje (TDL).",
                "• Bishop, D. V. M., Snowling, M. J., Thompson, P. A., Greenhalgh, T., y CATALISE-2 Consortium. (2017). Phase 2 of CATALISE: A multinational and multidisciplinary Delphi consensus study of problems with language development: Terminology. Journal of Child Psychology and Psychiatry, 58(10), 1068-1080.",
                "• Moreno-Flagge, N. (2013). Trastornos del lenguaje. Diagnóstico y tratamiento. Revista de Neurología, 57(Supl. 1), S85-S94.",
            ],
            "footer": "Autor: Pablo Hernández Rizo (DNI: 45843762R) • Curso 2026/2027",
        },
    ]

    for s in slides:
        # Fondo azul oscuro institucional elegante y tarjeta blanca limpia
        c.setFillColor(HexColor("#102A43"))
        c.rect(0, 0, W, H, fill=1, stroke=0)

        c.setFillColor(HexColor("#243B53"))
        c.roundRect(35, 35, W - 70, H - 70, 14, fill=1, stroke=0)

        # Pastilla superior
        c.setFillColor(HexColor("#F0B429"))
        c.roundRect(60, H - 95, 390, 28, 6, fill=1, stroke=0)
        c.setFillColor(HexColor("#102A43"))
        c.setFont("Calibri-Bold", 13)
        c.drawString(75, H - 85, s["badge"])

        # Título y subtítulo
        c.setFillColor(white)
        c.setFont("Calibri-Bold", 28)
        c.drawString(60, H - 140, s["title"])

        c.setFillColor(HexColor("#BCCCDC"))
        c.setFont("Calibri-Italic", 17)
        c.drawString(60, H - 170, s["subtitle"])

        if "boxes" in s:
            y_top = H - 202
            box_h = 77 if len(s["boxes"]) == 3 else 112
            gap = 11
            for b_title, b_text in s["boxes"]:
                c.setFillColor(HexColor("#F8FAFC"))
                c.roundRect(60, y_top - box_h, W - 120, box_h, 8, fill=1, stroke=0)
                c.setFillColor(HexColor("#0B69A3"))
                c.setFont("Calibri-Bold", 18)
                c.drawString(80, y_top - 26, b_title)
                c.setFillColor(HexColor("#102A43"))
                c.setFont("Calibri", 15.5)
                # Ajuste simple en 2 líneas si es largo
                words = b_text.split()
                line1, line2 = [], []
                for w in words:
                    if len(" ".join(line1 + [w])) < 95:
                        line1.append(w)
                    else:
                        line2.append(w)
                c.drawString(80, y_top - 49, " ".join(line1))
                if line2:
                    c.drawString(80, y_top - 68, " ".join(line2))
                y_top -= (box_h + gap)
        elif "bib" in s:
            c.setFillColor(HexColor("#F8FAFC"))
            c.roundRect(60, 76, W - 120, H - 266, 8, fill=1, stroke=0)
            c.setFillColor(HexColor("#102A43"))
            c.setFont("Calibri", 14.0)
            y_curr = H - 216
            for ref in s["bib"]:
                words = ref.split()
                lines = []
                cur = []
                for w in words:
                    if len(" ".join(cur + [w])) < 115:
                        cur.append(w)
                    else:
                        lines.append(" ".join(cur))
                        cur = [w]
                if cur:
                    lines.append(" ".join(cur))
                for idx_l, ln in enumerate(lines):
                    x_pos = 78 if idx_l == 0 else 95
                    c.drawString(x_pos, y_curr, ln)
                    y_curr -= 17.5
                y_curr -= 8

        c.setFillColor(HexColor("#9FB3C8"))
        c.setFont("Calibri", 13)
        c.drawString(60, 50, s["footer"])
        c.showPage()

    c.save()
    print(f"[OK] Láminas visuales 16:9 guardadas en: {out_slides}")


def generate_guide_and_srt():
    # Archivo .srt de subtítulos listo para importar en CapCut / Premiere / Canva
    srt_content = """1
00:00:00,000 --> 00:00:06,500
¡Hola, compañeros! Como maestros, a veces tenemos en clase a un alumno que parece distraído o tímido,

2
00:00:06,500 --> 00:00:14,500
pero que en realidad presenta Trastorno del Desarrollo del Lenguaje, o TDL, antes conocido como TEL.

3
00:00:14,500 --> 00:00:22,500
De acuerdo con lo expuesto por Bishop y el consorcio CATALISE en 2017, y por Andreu y colaboradores en 2026,

4
00:00:22,500 --> 00:00:29,500
el TDL es un trastorno del neurodesarrollo que afecta de forma persistente a la expresión y comprensión oral,

5
00:00:29,500 --> 00:00:34,500
sin que exista sordera, autismo ni lesión neurológica que lo explique.

6
00:00:34,500 --> 00:00:41,500
Según Ahufinger y colaboradores en 2021, en el aula lo notaréis por tres señales: vocabulario reducido,

7
00:00:41,500 --> 00:00:47,000
frases desorganizadas con errores en verbos o nexos, y bloqueo ante instrucciones largas.

8
00:00:47,000 --> 00:00:54,500
¿Cómo ayudarle? Dadle órdenes cortas y de una en una, apoyad todo con esquemas visuales en la pizarra

9
00:00:54,500 --> 00:00:59,500
y dadle tiempo extra para responder sin presionarle. ¡Coordinarnos con el especialista de AL marca la diferencia!
"""
    srt_path = PSICO_DIR / "SUBTITULOS_VIDEO_TDL_60S.srt"
    srt_path.write_text(srt_content, encoding="utf-8")
    print(f"[OK] Archivo de subtítulos .SRT guardado en: {srt_path}")

    # Documento Word y Markdown con el Guion Cronometrado para leer en teleprompter (55 segundos = ~135 palabras)
    guide_md = f"""# GUION CRONOMETRADO (55 SEGUNDOS) Y CHECKLIST DE GRABACIÓN - ACTIVIDAD 1 PSICOPATOLOGÍA
**Estudiante:** {STUDENT_NAME} (**DNI:** {STUDENT_DNI})  
**Asignatura:** Psicopatología de la Audición y el Lenguaje (Unidad 3)  
**Trastorno seleccionado:** Trastorno del Desarrollo del Lenguaje (TDL)  

---

## ⚠️ REQUISITOS ESTRICTOS DE LA PROFESORA (Dra. Rocío Daniela Concha Ortiz)
1. **Subir 2 archivos a Blackboard:**
   - **Archivo 1 (`.pdf`):** `ENTREGA_ACTIVIDAD_1_DECLARACION_1_PAGINA.pdf` (Ya generado y firmado en esta carpeta).
   - **Archivo 2 (`.mp4`):** Tu vídeo de **máximo 60 segundos** (no subir enlaces de YouTube/Drive, subir directamente el archivo `.mp4`).
2. **Tu cara y tu voz deben verse y escucharse siempre** durante el vídeo (prohibido usar avatares o voces de IA).
3. **Mencionar verbalmente autores externos** (en el guion de abajo ya van integrados literalmente *Bishop y el consorcio CATALISE, 2017*, y *Ahufinger y colaboradores, 2021*, sin mencionar a la profesora).
4. **Incluir subtítulos** en todo el vídeo (tienes el archivo `SUBTITULOS_VIDEO_TDL_60S.srt` listo para cargarlo automáticamente, o la opción de subtítulos automáticos de CapCut/Canva).
5. **En el último segundo del vídeo (última lámina)** debe verse en pantalla la **Bibliografía utilizada** (la tienes lista en la página 4 de `LAMINAS_VISUALES_VIDEO_ACTIVIDAD_1_TDL.pdf`).

---

## 🎙️ TEXTO EXACTO PARA LEER A CÁMARA (135 palabras = 55 segundos a ritmo natural)

> **[00:00 - 00:14] (Mostrar Lámina 1 de fondo o en esquina):**  
> «¡Hola, compañeros! Como maestros, a veces tenemos en clase a un alumno que parece distraído o tímido, pero que en realidad presenta **Trastorno del Desarrollo del Lenguaje, o TDL**, antes conocido como TEL.»
>
> **[00:14 - 00:34] (Cita literal obligatoria - Seguir en Lámina 1):**  
> «**De acuerdo con lo expuesto por Bishop y el consorcio CATALISE en el año 2017, y por Andreu y colaboradores en 2026**, el TDL es un trastorno del neurodesarrollo que afecta de forma persistente a la expresión y comprensión del lenguaje oral, sin que exista pérdida auditiva, autismo ni causa biomédica que lo explique.»
>
> **[00:34 - 00:47] (Pasar a Lámina 2: 3 señales en el aula):**  
> «**Según señalan Ahufinger y colaboradores en 2021**, en el aula ordinaria lo detectaréis por tres señales: un vocabulario muy limitado, frases cortas o mal estructuradas al conjugar verbos y nexos, y dificultad para seguir explicaciones largas.»
>
> **[00:47 - 00:57] (Pasar a Lámina 3: Pautas para el docente):**  
> «¿Cómo podemos ayudarle en clase? Dadle consignas cortas y secuenciadas de una en una, apoyad siempre las explicaciones con esquemas visuales en la pizarra y respetad su tiempo de respuesta sin interrumpirle.»
>
> **[00:57 - 00:60] (Mostrar Lámina 4 en pantalla: BIBLIOGRAFÍA UTILIZADA):**  
> «¡Coordinarnos con el maestro de Audición y Lenguaje marca la diferencia! Muchas gracias.» *(Dejar 1-2 segundos finales viendo la lámina de Bibliografía).*

---

## 📚 BIBLIOGRAFÍA INCLUIDA EN LA LÁMINA FINAL (APA 7.ª ed.)
- Ahufinger, N., Ferinu, L., Pacheco, L., Sanz-Torrent, M., y Andreu, L. (2021). El trastorno del desarrollo del lenguaje (TDL) más allá de las dificultades lingüísticas. *Revista de Logopedia, Foniatría y Audiología*, *41*(1), 4–16.
- Andreu, L., Aguado, G., Acosta, V., Sanz-Torrent, M., y Consenso Delphi Hispanohablante. (2026). *Consenso Delphi sobre la terminología y los criterios diagnósticos del Trastorno del Desarrollo del Lenguaje (TDL)*.
- Bishop, D. V. M., Snowling, M. J., Thompson, P. A., Greenhalgh, T., y CATALISE-2 Consortium. (2017). Phase 2 of CATALISE: A multinational and multidisciplinary Delphi consensus study of problems with language development: Terminology. *Journal of Child Psychology and Psychiatry*, *58*(10), 1068–1080.
- Moreno-Flagge, N. (2013). Trastornos del lenguaje. Diagnóstico y tratamiento. *Revista de Neurología*, *57*(Supl. 1), S85–S94.
"""
    md_path = PSICO_DIR / "GUION_VIDEO_60S_ACTIVIDAD_1_PSICOPATO.md"
    md_path.write_text(guide_md, encoding="utf-8")
    print(f"[OK] Guion en Markdown guardado en: {md_path}")

    # También en DOCX para abrir cómodamente en Word
    doc = docx.Document()
    for s in doc.sections:
        s.top_margin = Cm(2.0)
        s.bottom_margin = Cm(2.0)
        s.left_margin = Cm(2.5)
        s.right_margin = Cm(2.5)

    for line in guide_md.splitlines():
        if not line.strip() or line.strip() == "---":
            continue
        p = doc.add_paragraph()
        p.paragraph_format.space_after = Pt(4)
        clean = line.lstrip("#> ").replace("**", "").replace("*", "")
        run = p.add_run(clean)
        run.font.name = "Calibri"
        if line.startswith("# "):
            run.font.size = Pt(14)
            run.bold = True
        elif line.startswith("## "):
            run.font.size = Pt(12.5)
            run.bold = True
        elif line.startswith("> "):
            run.font.size = Pt(12)
            p.paragraph_format.left_indent = Cm(0.8)
        else:
            run.font.size = Pt(11)
        run.font.color.rgb = RGBColor(0, 0, 0)

    docx_path = PSICO_DIR / "GUION_VIDEO_60S_ACTIVIDAD_1_PSICOPATO.docx"
    doc.save(str(docx_path))
    print(f"[OK] Guion en DOCX guardado en: {docx_path}")


if __name__ == "__main__":
    generate_declaration_pdfs()
    generate_slides_pdf()
    generate_guide_and_srt()
