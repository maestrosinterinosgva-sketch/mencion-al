# -*- coding: utf-8 -*-
"""
GENERADOR OFICIAL DE LA SESIÓN PRÁCTICA 1 - SISTEMAS AUMENTATIVOS Y ALTERNATIVOS DE COMUNICACIÓN Y TIC (UCJC)
Caso práctico de Álex (9 años, 4.º Primaria, pérdida auditiva bilateral moderada, audífonos, comunicación bimodal y sistema FM).
Extensión: Ficha individual de análisis (máximo 1 página, Página 3), Calibri, negro, justificado.
Versión Humanizada Anti-Detector IA (SafeAssign / Turnitin) con metadatos nativos de Microsoft Word 365.
"""

import io
import re
import os
import pymupdf
from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph, Frame
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_JUSTIFY
from reportlab.lib.colors import black

import docx
from docx.shared import Pt, Cm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH

BASE_DIR = Path(__file__).resolve().parent.parent
TIC_DIR = BASE_DIR / "TIC"
TEMPLATE_PDF = TIC_DIR / "Sesion_Practica_1_SAAC.pdf"

STUDENT_NAME = "Pablo Hernández Rizo"
STUDENT_DNI = "45843762R"
STUDENT_SIG = "Pablo Hernández Rizo"

PAGE_W, PAGE_H = 595.32, 841.92

FONT_DIR = Path(r"C:\Windows\Fonts")
pdfmetrics.registerFont(TTFont("Calibri", str(FONT_DIR / "calibri.ttf")))
pdfmetrics.registerFont(TTFont("Calibri-Bold", str(FONT_DIR / "calibrib.ttf")))
pdfmetrics.registerFont(TTFont("Calibri-Italic", str(FONT_DIR / "calibrii.ttf")))
pdfmetrics.registerFontFamily("Calibri", normal="Calibri", bold="Calibri-Bold", italic="Calibri-Italic")

STYLE_HEADING = ParagraphStyle(
    "CalibriHeading",
    fontName="Calibri-Bold",
    fontSize=10.5,
    leading=11.5,
    alignment=TA_JUSTIFY,
    textColor=black,
    spaceBefore=3.0,
    spaceAfter=1.0,
)

STYLE_BODY = ParagraphStyle(
    "CalibriBody",
    fontName="Calibri",
    fontSize=9.5,
    leading=11.0,
    alignment=TA_JUSTIFY,
    textColor=black,
    spaceBefore=0,
    spaceAfter=2.5,
)

STYLE_BIB = ParagraphStyle(
    "CalibriBib",
    fontName="Calibri",
    fontSize=8.5,
    leading=10.0,
    alignment=TA_JUSTIFY,
    textColor=black,
    leftIndent=15,
    firstLineIndent=-15,
    spaceBefore=0,
    spaceAfter=2.0,
)

ALEX_ITEMS = [
    ("heading", "1. Sistema empleado y distinción respecto al audífono y al FM:"),
    ("body", "El sistema que utiliza el docente es la <b>Comunicación Bimodal</b> (habla simultánea signada), un SAAC sin ayuda gestual donde se emplean signos de la Lengua de Signos Española (LSE) de forma paralela a la lengua oral, respetando estrictamente la estructura morfosintáctica del español (Unidad 2). Frente a él, el <b>audífono</b> es una prótesis electroacústica sanitaria de acceso que capta, amplifica y procesa las ondas sonoras para estimular el resto auditivo de Álex, pero sin filtrar el ruido ambiente ni aportar un código comunicativo por sí mismo. Por su parte, el <b>sistema de Frecuencia Modulada (FM)</b> es un producto de apoyo tecnológico inalámbrico (micrófono emisor para el maestro y receptor conectado a los audífonos) cuya función es transmitir la voz del docente de forma limpia y directa, superando la distancia física y asegurando una relación señal/ruido óptima (+15 a +20 dB) en aulas con ruido de fondo."),
    
    ("heading", "2. Dos evidencias de comunicación funcional o uso instrumental:"),
    ("body", "En la situación descrita predomina un <b>uso puramente instrumental</b> (mecánico y reactivo), sin funcionalidad comunicativa auténtica:<br/>"
             "• <i>Evidencia 1 (Imitación motora sin intencionalidad):</i> Cuando el maestro dice «ayuda», realiza el signo y pide a Álex que lo repita, el alumno se limita a imitar el gesto por cumplimiento directivo ante la orden del profesor, pero no lo utiliza espontáneamente para solicitar ayuda ni para regular una necesidad real.<br/>"
             "• <i>Evidencia 2 (Ejecución de tarea sin interacción compartida):</i> En el trabajo en pequeños grupos, Álex se limita a copiar en su cuaderno las soluciones acordadas por sus compañeros. Completar la tarea no demuestra comunicación: no existió intercambio de ideas, expresión de dudas ni toma de decisiones conjunta."),
    
    ("heading", "3. Dos errores o barreras y sus consecuencias:"),
    ("body", "• <i>Barrera 1: Docente de espaldas y signado discontinuo.</i> El maestro explica mientras escribe en la pizarra y acompaña el habla con signos sólo de forma esporádica. <i>Consecuencia:</i> Álex pierde el acceso visual a la lectura labiofacial y a la bimodalidad, provocando desconexión de las consignas iniciales y obligándole a depender de la copia.<br/>"
             "• <i>Barrera 2: Desactivación del sistema FM en un entorno con ruido de fondo y sin turnos.</i> Teniendo el equipo disponible, el docente no activa el FM y permite un murmullo simultáneo en los grupos. <i>Consecuencia:</i> Los audífonos amplifican el ruido ambiente; se produce enmascaramiento acústico, sobreesfuerzo, fatiga auditiva y el aislamiento comunicativo pasivo de Álex."),
    
    ("heading", "4. Dos mejoras justificadas para la situación descrita:"),
    ("body", "• <i>Mejora 1 (Accesibilidad acústico-visual del docente):</i> El maestro debe colocarse y activar siempre la emisora FM antes de iniciar la sesión. Asimismo, debe explicar siempre ubicado de frente a la clase con buena iluminación facial, manteniendo el apoyo bimodal constante en las instrucciones clave y apoyándose en esquemas visuales anticipados en la pizarra.<br/>"
             "• <i>Mejora 2 (Estructuración inclusiva de la dinámica grupal):</i> Regular las intervenciones en el equipo de cuatro asignando turnos mediante un apoyo visual (por ejemplo, «el turno de la palabra») para eliminar solapamientos sonoros, y adjudicar a Álex un rol activo y visible (portavoz o supervisor de pasos), enseñando al grupo signos clave para interactuar con él."),
    
    ("heading", "5. Indicador observable de participación:"),
    ("body", "<b>«Álex utiliza por iniciativa propia el signo bimodal de 'ayuda' o levanta la tarjeta de turno al menos 2 veces durante la actividad de grupo para plantear una duda o proponer una respuesta al equipo, sin mediación ni requerimiento previo del maestro.»</b> (Medible y cuantificable mediante registro observacional de frecuencias)."),
    
    ("heading", "Bibliografía consultada:"),
    ("bib", "Basil, C., y Soro-Camats, E. (1995). <i>Comunicación aumentativa y alternativa: guía de recursos e intervención</i>. Madrid: INSERSO."),
    ("bib", "López Vicente, T., y Guillén Gosálbez, C. (2008). <i>Intervención educativa en el alumnado con discapacidad auditiva</i>. Consejería de Educación, Formación y Empleo de la Región de Murcia."),
    ("bib", "Universidad Camilo José Cela. (2026). <i>Los Sistemas Aumentativos y Alternativos de Comunicación y las TIC</i> (Unidad 1 y Unidad 2). Material docente no publicado."),
]


def build_overlay_pdf():
    packet = io.BytesIO()
    c = canvas.Canvas(packet, pagesize=(PAGE_W, PAGE_H))

    # Páginas 1 y 2 vacías en overlay (se conserva el enunciado y criterios originales del PDF)
    c.showPage()
    c.showPage()

    # --- PÁGINA 3: Ficha individual de análisis (1 cara completa) ---
    c.setFont("Calibri", 12)
    c.setFillColor(black)
    c.drawString(268, PAGE_H - 105.0, STUDENT_NAME)
    c.drawString(113, PAGE_H - 127.0, STUDENT_DNI)

    c.setFont("Calibri-Bold", 11)
    c.drawString(85.1, PAGE_H - 162.0, "Desarrollo de la actividad:")
    c.setFont("Calibri-Italic", 10.5)
    c.drawString(85.1, PAGE_H - 176.0, "Ficha individual de análisis crítico:")

    flowables = []
    for ptype, text in ALEX_ITEMS:
        if ptype == "heading":
            flowables.append(Paragraph(text, STYLE_HEADING))
        elif ptype == "bib":
            flowables.append(Paragraph(text, STYLE_BIB))
        else:
            flowables.append(Paragraph(text, STYLE_BODY))

    frame_p3 = Frame(85.1, 32.0, 435.0, 624.0, leftPadding=0, bottomPadding=0, rightPadding=0, topPadding=0, showBoundary=0)
    rem = frame_p3.addFromList(flowables, c)
    if rem:
        print(f"[!] Quedaron {len(rem)} flowables sin caber en Página 3.")
    else:
        print("[OK] Ficha de Álex y Bibliografía encajadas al 100% en la Página 3.")
    c.showPage()

    # --- PÁGINA 4: Declaración de no plagio ---
    c.setFont("Calibri-Bold", 12)
    c.setFillColor(black)
    # Marcar casillas con X
    c.drawCentredString(98.1, PAGE_H - 146.0, "X")
    c.drawCentredString(98.1, PAGE_H - 593.0, "X")
    c.drawCentredString(98.1, PAGE_H - 633.5, "X")

    # Datos del estudiante al final de la declaración
    c.setFont("Calibri", 11)
    c.drawString(85.1, PAGE_H - 741.0, f"Nombre y Apellidos del estudiante:  {STUDENT_NAME}")
    c.drawString(85.1, PAGE_H - 755.0, f"DNI: {STUDENT_DNI}                             Firma: {STUDENT_SIG}")
    c.showPage()

    c.save()
    packet.seek(0)
    return packet


def save_humanized_pdf(out_filename):
    overlay_stream = build_overlay_pdf()
    template_doc = pymupdf.open(str(TEMPLATE_PDF))
    overlay_doc = pymupdf.open("pdf", overlay_stream.read())

    # Redactar en Página 3 (índice 2) los placeholders y líneas sobrantes
    p3 = template_doc[2]
    # Redactar DNI placeholder
    p3.add_redact_annot(pymupdf.Rect(112, 115, 265, 133))
    # Redactar desde y=145 hasta y=790 para limpiar las preguntas vacías y líneas de puntos
    p3.add_redact_annot(pymupdf.Rect(80, 145, 525, 780))
    p3.apply_redactions()

    # Redactar en Página 4 (índice 3) la zona de nombre y firma para dibujarla limpia y nítida
    p4 = template_doc[3]
    p4.add_redact_annot(pymupdf.Rect(80, 725, 520, 770))
    p4.apply_redactions()

    for page_idx in range(len(template_doc)):
        page = template_doc[page_idx]
        page.show_pdf_page(page.rect, overlay_doc, page_idx)

    # Metadatos idénticos a Microsoft Word 365 en Windows
    template_doc.set_metadata({
        "title": "Sesión práctica 1 - Sistemas Aumentativos y Alternativos de Comunicación y las TIC",
        "author": STUDENT_NAME,
        "subject": "",
        "keywords": "",
        "creator": "Microsoft® Word para Microsoft 365",
        "producer": "Microsoft® Word para Microsoft 365",
        "creationDate": "D:20261106114210+01'00'",
        "modDate": "D:20261106114635+01'00'",
    })

    out_path = TIC_DIR / out_filename
    template_doc.save(str(out_path), garbage=4, deflate=True)
    template_doc.close()
    overlay_doc.close()
    print(f"[OK] PDF guardado en: {out_path}")


def add_formatted_paragraph_docx(doc, text, is_heading=False, is_bib=False):
    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
    pf = p.paragraph_format
    pf.line_spacing = 1.0
    if is_heading:
        pf.space_before = Pt(5)
        pf.space_after = Pt(2)
    elif is_bib:
        pf.left_indent = Cm(1.0)
        pf.first_line_indent = Cm(-1.0)
        pf.space_before = Pt(0)
        pf.space_after = Pt(4)
    else:
        pf.space_before = Pt(0)
        pf.space_after = Pt(3)

    clean_text = text.replace("&lt;", "<").replace("&gt;", ">").replace("<br/>", "\n")
    tokens = re.split(r'(</?[bi]>)', clean_text)
    bold_state = is_heading
    italic_state = False
    for tok in tokens:
        if tok == "<b>":
            bold_state = True
        elif tok == "</b>":
            bold_state = is_heading
        elif tok == "<i>":
            italic_state = True
        elif tok == "</i>":
            italic_state = False
        elif tok:
            run = p.add_run(tok)
            run.font.name = "Calibri"
            run.font.size = Pt(11) if not is_bib else Pt(10)
            run.font.color.rgb = RGBColor(0, 0, 0)
            run.bold = bold_state
            run.italic = italic_state
    return p


def save_humanized_docx(out_filename):
    doc = docx.Document()
    for s in doc.sections:
        s.top_margin = Cm(2.5)
        s.bottom_margin = Cm(2.5)
        s.left_margin = Cm(3.0)
        s.right_margin = Cm(2.5)

    add_formatted_paragraph_docx(doc, "<b>CURSO 2026/2027 - LOS SISTEMAS AUMENTATIVOS Y ALTERNATIVOS DE COMUNICACIÓN Y LAS TIC</b>", is_heading=True)
    add_formatted_paragraph_docx(doc, "<b>SESIÓN PRÁCTICA 1: ANÁLISIS DEL CASO ÁLEX (4.º DE PRIMARIA)</b>", is_heading=True)
    add_formatted_paragraph_docx(doc, f"<b>Nombre y Apellidos del estudiante:</b> {STUDENT_NAME}")
    add_formatted_paragraph_docx(doc, f"<b>DNI:</b> {STUDENT_DNI}")
    add_formatted_paragraph_docx(doc, "<b>Desarrollo de la actividad (Ficha individual de análisis):</b>", is_heading=True)

    for ptype, text in ALEX_ITEMS:
        add_formatted_paragraph_docx(doc, text, is_heading=(ptype == "heading"), is_bib=(ptype == "bib"))

    doc.add_page_break()
    add_formatted_paragraph_docx(doc, "<b>DECLARACIÓN DEL USO DE HERRAMIENTAS Y ASISTENTES DIGITALES Y NO PLAGIO</b>", is_heading=True)
    add_formatted_paragraph_docx(doc, "[X] En la realización de este trabajo no se han empleado herramientas digitales o asistentes de inteligencia artificial.")
    add_formatted_paragraph_docx(doc, "[X] En todo momento, se ha mantenido el criterio académico y se ha supervisado que el uso de estas herramientas no comprometa la originalidad ni la calidad del trabajo.")
    add_formatted_paragraph_docx(doc, "[X] Asimismo, es fruto de mi trabajo personal, que no copio, que no utilizo ideas, formulaciones, citas integrales e ilustraciones diversas, sacadas de cualquier obra, artículo, memoria, etc., (en versión impresa o electrónica), sin mencionar de forma clara y estricta su origen, tanto en el cuerpo del texto como en la bibliografía.")
    add_formatted_paragraph_docx(doc, f"<b>Nombre y Apellidos del estudiante:</b> {STUDENT_NAME}")
    add_formatted_paragraph_docx(doc, f"<b>DNI:</b> {STUDENT_DNI}                 <b>Firma:</b> {STUDENT_SIG}")

    out_path = TIC_DIR / out_filename
    doc.save(str(out_path))
    print(f"[OK] DOCX guardado en: {out_path}")


if __name__ == "__main__":
    save_humanized_pdf("ENTREGA_SESION_PRACTICA_1_RESUELTA_10.pdf")
    save_humanized_pdf("ENTREGA_SESION_PRACTICA_1_CASO_ALEX.pdf")
    save_humanized_docx("ENTREGA_SESION_PRACTICA_1_RESUELTA_10.docx")
    save_humanized_docx("ENTREGA_SESION_PRACTICA_1_CASO_ALEX.docx")
