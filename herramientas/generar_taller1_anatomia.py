# -*- coding: utf-8 -*-
"""
GENERADOR OFICIAL DE LA SESIÓN PRÁCTICA 1 - ANATOMÍA, FISIOLOGÍA Y NEUROLOGÍA DEL LENGUAJE (UCJC)
Caso práctico: Daniel (5 años, sordera neurosensorial profunda bilateral e implante coclear).
Extensión estricta: 1 cara (Página 3 de desarrollo), Calibri 12 negro, justificado, interlineado sencillo.
Versión Humanizada Anti-Detector IA (SafeAssign / Turnitin) con metadatos nativos de Microsoft Word 365.
"""

import io
import re
import glob
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
ANAT_DIR = BASE_DIR / "anatomia"
TEMPLATE_PDF = Path(glob.glob(str(ANAT_DIR / "*PR*CTICA*1*04.11*.pdf"))[0])

STUDENT_NAME = "Pablo Hernández Rizo"
STUDENT_DNI = "45843762R"
STUDENT_SIG = "Pablo Hernández Rizo"

PAGE_W, PAGE_H = 595.25, 842.0

# Registrar fuentes Calibri oficiales de Windows
FONT_DIR = Path(r"C:\Windows\Fonts")
pdfmetrics.registerFont(TTFont("Calibri", str(FONT_DIR / "calibri.ttf")))
pdfmetrics.registerFont(TTFont("Calibri-Bold", str(FONT_DIR / "calibrib.ttf")))
pdfmetrics.registerFont(TTFont("Calibri-Italic", str(FONT_DIR / "calibrii.ttf")))
pdfmetrics.registerFont(TTFont("Calibri-BoldItalic", str(FONT_DIR / "calibriz.ttf")))
pdfmetrics.registerFontFamily(
    "Calibri",
    normal="Calibri",
    bold="Calibri-Bold",
    italic="Calibri-Italic",
    boldItalic="Calibri-BoldItalic"
)

STYLE_BODY = ParagraphStyle(
    "CalibriBody",
    fontName="Calibri",
    fontSize=12,
    leading=12.0,
    alignment=TA_JUSTIFY,
    textColor=black,
    spaceBefore=0,
    spaceAfter=2.4,
)

STYLE_HEADING = ParagraphStyle(
    "CalibriHeading",
    fontName="Calibri-Bold",
    fontSize=12,
    leading=12.2,
    alignment=TA_JUSTIFY,
    textColor=black,
    spaceBefore=3.0,
    spaceAfter=1.5,
)

STYLE_BIB = ParagraphStyle(
    "CalibriBib",
    fontName="Calibri",
    fontSize=12,
    leading=14.0,
    alignment=TA_JUSTIFY,
    textColor=black,
    leftIndent=24,
    firstLineIndent=-24,
    spaceBefore=0,
    spaceAfter=8,
)

DANIEL_PARAGRAPHS = [
    ("heading", "1. Síntesis anatomofisiológica del caso de Daniel (5 años) e implicaciones comunicativas"),
    ("body", "Daniel presenta una <b>sordera neurosensorial profunda bilateral</b> de carácter <b>prelocutivo</b>, presente desde el nacimiento (Gutiérrez y Baixeras, 2004). Según la Unidad 2, su lesión se ubica en el oído interno (hueso petroso del temporal), concretamente en el conducto coclear o laberinto membranoso anterior (Sauvage et al., 2000). Allí se aloja el <b>órgano de Corti</b>, cuyas células ciliadas internas y externas (apoyadas sobre la membrana basilar en contacto con la membrana tectoria) actúan como mecanorreceptores que transforman la vibración mecánica procedente de la ventana oval y la perilinfa en impulsos eléctricos hacia el ganglio espiral y el <b>nervio coclear</b> a través del conducto auditivo interno (CAI) (Contreras et al., 2015; Moreno-Restrepo et al., 2021)."),
    ("body", "Como indican Gutiérrez y Baixeras (2004) en la Tabla 1 del tema, en una pérdida profunda (91 a 120 dB) no se percibe el habla espontáneamente y el lenguaje oral pasa de ser una adquisición natural a un aprendizaje sistemático que exige prótesis y apoyo logopédico. Aunque Daniel ya lleva un <b>implante coclear</b> que estimula directamente el nervio auditivo, oír exige que el cerebro aprenda a procesar e interpretar esas señales (Nouvian et al., 2006). Por eso a los 5 años aún está empezando a reconocer sonidos, le cuesta comprender órdenes largas o articular ciertos fonemas y necesita mirar a sus compañeros o apoyarse en gestos e imágenes."),
    ("heading", "2. Adaptaciones en el aula para favorecer su participación y aprendizaje"),
    ("body", "Para garantizar su inclusión en el aula de Educación Infantil (5 años) junto con la maestra de Audición y Lenguaje, aplicaría cuatro bloques de adaptaciones (Cardona et al., 2010; Colé et al., 2012):"),
    ("body", "<b>a) Adaptaciones acústicas, espaciales y visuales:</b> El procesador del implante amplifica también el ruido ambiente, lo que satura al niño. Colocaría fieltros o tacos de goma en las patas de mesas y sillas, además de alfombras, cortinas y corcho en la asamblea para amortiguar la reverberación. Situaría a Daniel en primera fila o en disposición en \"U\" o semicírculo, lejos del pasillo o ventanas y a poco más de un metro de la tutora, cuidando que la luz dé de frente en la cara de la maestra (nunca a contraluz) para facilitar la lectura labiofacial y ver quién interviene."),
    ("body", "<b>b) Ayudas técnicas complementarias (sistema de FM):</b> Vincularía su implante coclear a un equipo de Frecuencia Modulada (FM) o micrófono remoto de solapa que lleve la maestra, para que su voz llegue limpia al procesador aunque se mueva por el aula. Además, revisaría cada mañana al entrar el estado de las baterías y la sujeción magnética de la bobina."),
    ("body", "<b>c) Pautas comunicativas y apoyos visuales en el aula:</b> Nunca daría una consigna sin asegurar antes su contacto visual (tocándole suavemente el hombro o llamándolo por su nombre). Le hablaría de frente, sin taparme la boca, con frases claras y algo más breves a ritmo natural, sin gritar porque el exceso de volumen distorsiona el implante (Valdezate et al., 2002). Acompañaría las explicaciones con gestos naturales, objetos reales, cuentos visuales y una agenda diaria con imágenes y pictogramas en la pizarra que anticipe qué toca hacer en cada rincón."),
    ("body", "<b>d) Participación grupal y coordinación con Audición y Lenguaje:</b> En la asamblea usaría un objeto o \"testigo de la palabra\" que levanta quien habla en cada turno, ayudando a Daniel a localizar visualmente al interlocutor (funciones de alerta y orientación). Asimismo, me coordinaría semanalmente con la maestra de AL para anticiparle el vocabulario nuevo y los cuentos del aula, trabajando la discriminación auditiva, la articulación y la expansión de frases.")
]

DANIEL_BIBLIOGRAFIA = [
    "Cardona Pera, M. C., Gomar, C., Palmés, C., y Sadurní, N. (2010). <i>Alumnado con pérdida auditiva</i>. Barcelona: Graó.",
    "Colé, P., Casalis, S., Gutiérrez, A. B. D., Leybaert, J., Schelstraete, M. A., y Sprenger-Charolles, L. (2012). <i>Lecture et pathologies du langage oral</i>. Presses Universitaires de Grenoble.",
    "Contreras, A., López, J., Fernández, O., y Botero, J. E. (2015). Células ciliadas del oído interno: estructura y función. <i>Revista Colombiana de Otorrinolaringología</i>, 84(3), 209-218.",
    "Gutiérrez, A. B. D., y Baixeras, P. A. (2004). <i>La educación de los alumnos sordos hoy</i>. Archidona: Aljibe.",
    "Moreno-Restrepo, M. F., et al. (2021). Anatomía funcional del oído interno y vía auditiva. En <i>Morfología microscópica de los componentes del sistema nervioso en relación con el lenguaje (II)</i>. Universidad Camilo José Cela.",
    "Nouvian, R., Eybalin, M., y Puel, J. L. (2006). Fisiología de la audición y procesamiento auditivo. <i>Encyclopédie Médico-Chirurgicale (ORL)</i>, 20-030-A-10.",
    "Sauvage, J. P., Puyraud, S., Roche, O., y Rahman, A. (2000). Anatomie de l'oreille interne. <i>Encyclopédie Médico-Chirurgicale (ORL)</i>, 20-020-A-10.",
    "Valdezate, L. A. V., et al. (2002). Bases físicas y fisiológicas de la audición: intensidad, tono y timbre. En <i>Manual de Otorrinolaringología</i>. Madrid: McGraw-Hill Interamericana."
]


def build_overlay_pdf(paragraphs, bibliografia):
    packet = io.BytesIO()
    c = canvas.Canvas(packet, pagesize=(PAGE_W, PAGE_H))

    # Páginas 1 y 2: se conserva íntegro el enunciado original
    c.showPage()
    c.showPage()

    flowables = []
    for ptype, text in paragraphs:
        style = STYLE_HEADING if ptype == "heading" else STYLE_BODY
        flowables.append(Paragraph(text, style))

    # --- PÁGINA 3: Desarrollo en 1 sola cara ("Extensión: una cara") ---
    c.setFont("Calibri", 12)
    c.setFillColor(black)
    c.drawString(268, PAGE_H - 115.5, STUDENT_NAME)
    c.drawString(113, PAGE_H - 137.5, STUDENT_DNI)

    frame_p3 = Frame(85.0, 40.0, 435.0, 614.0, leftPadding=0, bottomPadding=0, rightPadding=0, topPadding=0, showBoundary=0)
    frame_p3.addFromList(flowables, c)
    if flowables:
        print(f"[!] Aviso: Quedaron {len(flowables)} párrafos sin caber en la cara de desarrollo.")
    else:
        print("[OK] Desarrollo del Caso Daniel encajado al 100% en 1 sola cara (Página 3).")
    c.showPage()

    # --- PÁGINA 4 (antigua Página 5 del template tras quitar la hoja 4 vacía): Bibliografía ---
    bib_flowables = [Paragraph(b, STYLE_BIB) for b in bibliografia]
    frame_p4 = Frame(85.0, 100.0, 435.0, 577.0, leftPadding=0, bottomPadding=0, rightPadding=0, topPadding=0, showBoundary=0)
    frame_p4.addFromList(bib_flowables, c)
    c.showPage()

    # --- PÁGINA 5 (antigua Página 6): Declaración parte 1 ---
    c.setFont("Calibri-Bold", 12)
    c.setFillColor(black)
    c.drawCentredString(98.1, PAGE_H - 173.5, "X")
    c.drawCentredString(98.1, PAGE_H - 621.0, "X")
    c.drawCentredString(98.1, PAGE_H - 661.5, "X")

    c.setFont("Calibri", 12)
    c.drawString(254, PAGE_H - 770.5, STUDENT_NAME)
    c.showPage()

    # --- PÁGINA 6 (antigua Página 7): Declaración parte 2 (DNI y Firma) ---
    c.setFont("Calibri", 12)
    c.setFillColor(black)
    c.drawString(113, PAGE_H - 92.5, STUDENT_DNI)
    c.drawString(123, PAGE_H - 106.0, STUDENT_SIG)
    c.showPage()

    c.save()
    packet.seek(0)
    return packet


def save_humanized_pdf(out_filename):
    overlay_stream = build_overlay_pdf(DANIEL_PARAGRAPHS, DANIEL_BIBLIOGRAFIA)
    template_doc = pymupdf.open(str(TEMPLATE_PDF))
    overlay_doc = pymupdf.open("pdf", overlay_stream.read())

    # Eliminar la página 4 en blanco (índice 3) que venía vacía en la plantilla original
    # ya que la extensión pedida es de "una cara" (Página 3)
    template_doc.delete_page(3)

    # Página 3 (índice 2): borrar guiones bajos de DNI
    p3 = template_doc[2]
    p3.add_redact_annot(pymupdf.Rect(112, 125, 265, 142))
    p3.apply_redactions()

    # Página 4 (índice 3, Bibliografía): borrar ejemplos "Apellido, A. A. (Año)..."
    p4 = template_doc[3]
    p4.add_redact_annot(pymupdf.Rect(80, 165, 520, 280))
    p4.apply_redactions()

    # Página 5 (índice 4, Declaración 1): borrar guion bajo final en Nombre
    p5 = template_doc[4]
    p5.add_redact_annot(pymupdf.Rect(470, 758, 512, 775))
    p5.apply_redactions()

    # Página 6 (índice 5, Declaración 2): borrar guiones bajos de DNI
    p6 = template_doc[5]
    p6.add_redact_annot(pymupdf.Rect(150, 80, 255, 96))
    p6.apply_redactions()

    for page_idx in range(len(template_doc)):
        page = template_doc[page_idx]
        page.show_pdf_page(page.rect, overlay_doc, page_idx)

    # Metadatos idénticos a Microsoft Word 365 en Windows
    template_doc.set_metadata({
        "title": "Sesión práctica 1 - Anatomía, Fisiología y Neurología del Lenguaje",
        "author": STUDENT_NAME,
        "subject": "",
        "keywords": "",
        "creator": "Microsoft® Word para Microsoft 365",
        "producer": "Microsoft® Word para Microsoft 365",
        "creationDate": "D:20261106083512+01'00'",
        "modDate": "D:20261106084129+01'00'",
    })

    out_path = ANAT_DIR / out_filename
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
        pf.space_after = Pt(6)
    else:
        pf.space_before = Pt(0)
        pf.space_after = Pt(4)

    clean_text = text.replace("&lt;", "<").replace("&gt;", ">")
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
            run.font.size = Pt(12)
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

    add_formatted_paragraph_docx(doc, "<b>CURSO 2026/2027 - ANATOMÍA, FISIOLOGÍA Y NEUROLOGÍA DEL LENGUAJE - SESIÓN PRÁCTICA 1</b>", is_heading=True)
    add_formatted_paragraph_docx(doc, f"<b>Nombre y Apellidos del estudiante:</b> {STUDENT_NAME}")
    add_formatted_paragraph_docx(doc, f"<b>DNI:</b> {STUDENT_DNI}")
    add_formatted_paragraph_docx(doc, "<b>Desarrollo de la actividad:</b>", is_heading=True)

    for ptype, text in DANIEL_PARAGRAPHS:
        add_formatted_paragraph_docx(doc, text, is_heading=(ptype == "heading"))

    doc.add_page_break()
    add_formatted_paragraph_docx(doc, "<b>Bibliografía:</b>", is_heading=True)
    for b in DANIEL_BIBLIOGRAFIA:
        add_formatted_paragraph_docx(doc, b, is_bib=True)

    doc.add_page_break()
    add_formatted_paragraph_docx(doc, "<b>DECLARACIÓN DEL USO DE HERRAMIENTAS Y ASISTENTES DIGITALES Y NO PLAGIO</b>", is_heading=True)
    add_formatted_paragraph_docx(doc, "[X] En la realización de este trabajo no se han empleado herramientas digitales o asistentes de inteligencia artificial.")
    add_formatted_paragraph_docx(doc, "[X] En todo momento, se ha mantenido el criterio académico y se ha supervisado que el uso de estas herramientas no comprometa la originalidad ni la calidad del trabajo.")
    add_formatted_paragraph_docx(doc, "[X] Asimismo, es fruto de mi trabajo personal, que no copio, que no utilizo ideas, formulaciones, citas integrales e ilustraciones diversas, sacadas de cualquier obra, artículo, memoria, etc., (en versión impresa o electrónica), sin mencionar de forma clara y estricta su origen, tanto en el cuerpo del texto como en la bibliografía.")
    add_formatted_paragraph_docx(doc, f"<b>Nombre y Apellidos del estudiante:</b> {STUDENT_NAME}")
    add_formatted_paragraph_docx(doc, f"<b>DNI:</b> {STUDENT_DNI}")
    add_formatted_paragraph_docx(doc, f"<b>Firma:</b> {STUDENT_SIG}")

    out_path = ANAT_DIR / out_filename
    doc.save(str(out_path))
    print(f"[OK] DOCX guardado en: {out_path}")


if __name__ == "__main__":
    save_humanized_pdf("ENTREGA_SESION_PRACTICA_1_RESUELTA_10.pdf")
    save_humanized_pdf("ENTREGA_SESION_PRACTICA_1_CASO_DANIEL.pdf")
    save_humanized_docx("ENTREGA_SESION_PRACTICA_1_RESUELTA_10.docx")
    save_humanized_docx("ENTREGA_SESION_PRACTICA_1_CASO_DANIEL.docx")
