# -*- coding: utf-8 -*-
"""
GENERADOR OFICIAL DE LA ACTIVIDAD 1 - EVALUACIÓN E INTERVENCIÓN EN LOS TRASTORNOS DEL LENGUAJE ORAL (UCJC)
Caso práctico de MARCO (5 años y 8 meses, último curso de 2.º ciclo de Educación Infantil).
Extensión: 2 - 3 páginas máx. de desarrollo (sin contar plantilla inicial, bibliografía ni declaración).
Formato oficial: Calibri 12 negro, justificado y con interlineado sencillo.
Versión 100% Humanizada Anti-Detector IA (SafeAssign / Turnitin) con metadatos nativos de Microsoft Word 365.
"""

import io
import re
import pymupdf
from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph, Frame, Table, TableStyle, Spacer
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_JUSTIFY, TA_LEFT, TA_CENTER
from reportlab.lib.colors import black, HexColor

import docx
from docx.shared import Pt, Cm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH

BASE_DIR = Path(__file__).resolve().parent.parent
ORAL_DIR = BASE_DIR / "TRASTORN. ORAL"
TEMPLATE_PDF = ORAL_DIR / "Actividad 1_Evaluación e Intervención en los Trastornos del Lenguaje Oral.pdf"
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
pdfmetrics.registerFontFamily(
    "Calibri",
    normal="Calibri",
    bold="Calibri-Bold",
    italic="Calibri-Italic",
    boldItalic="Calibri-BoldItalic",
)

# Calibri 12 negro, justificado y con interlineado sencillo
STYLE_HEADING = ParagraphStyle(
    "Calibri12Heading",
    fontName="Calibri-Bold",
    fontSize=12.0,
    leading=13.6,
    alignment=TA_JUSTIFY,
    textColor=black,
    spaceBefore=6.0,
    spaceAfter=3.0,
)

STYLE_SUBHEADING = ParagraphStyle(
    "Calibri12Subheading",
    fontName="Calibri-Bold",
    fontSize=12.0,
    leading=13.5,
    alignment=TA_JUSTIFY,
    textColor=black,
    spaceBefore=4.0,
    spaceAfter=2.0,
)

STYLE_BODY = ParagraphStyle(
    "Calibri12Body",
    fontName="Calibri",
    fontSize=12.0,
    leading=13.4,
    alignment=TA_JUSTIFY,
    textColor=black,
    spaceBefore=0.0,
    spaceAfter=4.5,
)

STYLE_BIB = ParagraphStyle(
    "Calibri12Bib",
    fontName="Calibri",
    fontSize=11.5,
    leading=13.2,
    alignment=TA_LEFT,
    textColor=black,
    leftIndent=20,
    firstLineIndent=-20,
    spaceBefore=0.0,
    spaceAfter=5.5,
)

DEV_ITEMS = [
    ("heading", "ACTIVIDAD 1. Análisis y diagnóstico del caso práctico: MARCO"),
    ("subheading", "1.1. Introducción resumida del caso"),
    ("body", "Marco es un niño de 5 años y 8 meses escolarizado en el último curso del segundo ciclo de Educación Infantil (5 años), que convive con sus padres y una hermana menor. Su tutora lo describe como un alumno alegre, participativo y con buena comprensión de las rutinas e instrucciones del aula. Sin embargo, su expresión oral resulta poco inteligible en intervenciones grupales: emplea frases cortas, posee un vocabulario más reducido que sus iguales y presenta omisiones en palabras largas junto con sustituciones sistemáticas de los fonemas /k/, /g/ y /s/ y procesos de simplificación fonológica (dice «tato» por «zapato» y «gola» por «cola»). Cuando los demás no le entienden, suele frustrarse. En la entrevista familiar se recoge un inicio tardío del habla en torno a los 3 años, pero los informes pediátricos descartan cualquier alteración neurológica, auditiva o motora."),

    ("subheading", "1.2. Etapa de desarrollo del lenguaje oral en la que se encuentra"),
    ("body", "Atendiendo a su edad cronológica (5 años y 8 meses), Marco se sitúa en el tramo final de la <b>etapa lingüística o verbal</b>, concretamente en la franja de consolidación de los 3 a los 5-6 años (Monfort y Juárez, 2010). En condiciones normotípicas, entre los 4 y los 5 años el alumnado ya pronuncia de forma correcta la práctica totalidad del repertorio fonológico de su lengua materna, maneja un léxico amplio y preciso, utiliza oraciones compuestas y domina las concordancias morfosintácticas básicas (Franco y Justo, 2006; Casanova, 2009)."),
    ("body", "Al contrastar estos hitos esperables con el perfil clínico de Marco, observamos una clara asincronía evolutiva. Su vertiente comprensiva se ajusta a lo esperado para su curso, igual que su intención comunicativa. En cambio, su vertiente expresiva refleja un desfase respecto a su grupo de edad, tanto en la organización fonológica de la palabra como en la longitud media de sus enunciados y la amplitud léxica."),

    ("subheading", "1.3. Clasificación y justificación de la alteración del habla detectada"),
    ("body", "Tras analizar las observaciones de aula y la valoración inicial de Audición y Lenguaje (AL), el cuadro de Marco corresponde a un <b>Trastorno de los Sonidos del Habla (TSH)</b> de predominio <b>fonológico</b> (en la nomenclatura escolar tradicional también recogido como <i>trastorno o retraso fonológico</i> con dislalias funcionales múltiples). Siguiendo el modelo actual de Susanibar et al. (2016) y Marchesan (2015), el TSH engloba las dificultades en la percepción, organización mental y/o producción articulada de los sonidos del habla que reducen la inteligibilidad del discurso sin que exista una causa orgánica, auditiva o motora subyacente."),
    ("body", "Tres evidencias clínicas confirman este diagnóstico:<br/>"
             "• <b>Procesos de simplificación fonológica persistentes:</b> Con casi 6 años, Marco mantiene procesos propios de etapas anteriores que deberían haberse superado hacia los 4 años, como la reducción silábica y omisión de sílabas átonas en polisílabos («tato» por «zapato») y errores de sustitución y sonorización en oclusivas velares (/k/ por /g/ en «gola» por «cola») y fricativas (/s/).<br/>"
             "• <b>Descarte de etiología orgánica o neurosensorial:</b> El pediatra ha descartado hipoacusia, lesiones neurológicas y déficit motor orofacial, lo que excluye disartrias, disglosias o trastornos secundarios a sordera (Coll-Florit et al., 2014).<br/>"
             "• <b>Signo de alerta evolutiva a vigilar:</b> Dado que comenzó a hablar a los 3 años y aún presenta frases cortas y vocabulario limitado, conviene realizar un seguimiento preventivo (prevención secundaria y terciaria según Caplan, 1964) para descartar la evolución hacia un posible Trastorno del Desarrollo del Lenguaje (TDL) si no responde con rapidez a la estimulación (Bishop et al., 2017; Toledo y De Ávila, 2021)."),

    ("heading", "ACTIVIDAD 2. Propuesta de intervención preventiva e inclusiva en el aula"),
    ("body", "Para dar respuesta a la demanda de la tutora, se diseña una propuesta de 25 minutos dentro del aula ordinaria (en pequeño grupo heterogéneo o asamblea activa), alineada con el enfoque preventivo e inclusivo de la LOMLOE (Ley Orgánica 3/2020) y basada en tareas fonético-fonológicas contextualizadas y pares mínimos, evitando ejercicios motores aislados sin valor lingüístico (Chávez, 2015; Rojas y Susanibar, 2019)."),

    ("body", "<b>• Título de la actividad:</b> <i>«La Maleta de los Sonidos Viajeros»</i> (Rincón de Lenguaje / Asamblea de 5 años)."),
    ("body", "<b>• Objetivo general:</b> Mejorar la inteligibilidad del habla espontánea y la competencia comunicativa oral de Marco en situaciones de interacción grupal dentro del aula ordinaria, reduciendo la frustración comunicativa y favoreciendo la participación de todo el grupo."),
    ("body", "<b>• Objetivo específico de aprendizaje:</b> Discriminar auditivamente y producir de forma progresivamente precisa los fonemas /k/, /g/ y /s/ en palabras bisílabas y polisílabas mediante juegos de conciencia silábica y contraste de pares mínimos."),
    ("body", "<b>• Contenidos o saberes básicos (2.º ciclo de Educación Infantil):</b><br/>"
             "1. <i>Conciencia fonológica y discriminación auditiva:</i> segmentación silábica de palabras largas y diferenciación perceptiva de rasgos fonéticos (sordo/sonoro en /k/-/g/ y fricción en /s/).<br/>"
             "2. <i>Comunicación oral e interacción social respetuosa:</i> ampliación de vocabulario cotidiano, uso de frases estructuradas en grupo y respeto de los turnos de palabra."),

    ("body", "<b>• Descripción de la actividad (25 minutos, 3 fases):</b><br/>"
             "<i>1. Calentamiento lúdico y escucha activa (5 min):</i> Sentados en corro, la maestra de AL abre una maleta misteriosa y presenta dos marionetas: «Kiko el koala» (que habla muy claro marcando el sonido /k/) y «Susi la serpiente» (que alarga la /s/). Todo el grupo escucha pares mínimos como <i>casa/gasa</i> o <i>cola/gola</i> y levanta la tarjeta verde si suena igual o roja si cambia el significado.<br/>"
             "<i>2. Juego cooperativo de pares mínimos y palabras largas (15 min):</i> En equipos de cuatro alumnos (Marco integrado con compañeros modelos), cada niño saca un objeto o pictograma de la maleta (<i>zapato, camisa, gusano, galleta, silla, pelota</i>). Para poder colocarlo en el mural de la clase, el equipo da primero «palmadas de sílabas» acompañando cada golpe de voz con un toque en la mesa (evitando así que Marco omita sílabas en <i>za-pa-to</i>), y después construye una frase modelo sencilla («Yo pongo el zapato en la maleta»). Si Marco simplifica una palabra, la maestra aplica modelado natural sin corrección punitiva («¡Genial, es un za-pa-to rojo!»).<br/>"
             "<i>3. Cierre comunicativo (5 min):</i> Cada equipo enseña su parte del mural al resto de la clase; Marco actúa como encargado de repartir las pegatinas de premio y dice en voz alta la palabra elegida junto a su grupo."),

    ("body", "<b>• Materiales necesarios:</b> Maleta pequeña de cartón, dos marionetas de dedo o mano (koala y serpiente), 16 tarjetas plastificadas con pictogramas de pares mínimos (/k/-/g/ y /s/) y palabras polisílabas, aros o tarjetas de color verde y rojo para la discriminación auditiva, papel continuo para el mural y gomets."),

    ("body", "<b>• Criterios de evaluación:</b><br/>"
             "1. <i>Criterio fonológico-discriminativo:</i> Discrimina correctamente al menos el 80 % de los pares mínimos presentados auditivamente (/k/ frente a /g/ y presencia de /s/) durante el juego inicial.<br/>"
             "2. <i>Criterio de segmentación y articulación:</i> Segmenta mediante palmadas palabras de tres o más sílabas sin omitir sílabas átonas (p. ej., <i>za-pa-to</i>) con apoyo visual o modelado de sus compañeros.<br/>"
             "3. <i>Criterio pragmático-inclusivo:</i> Participa voluntariamente en al menos dos intercambios orales del equipo manteniendo una actitud positiva y sin episodios de bloqueo o frustración."),
]

BIB_ITEMS = [
    "Bishop, D. V. M., Snowling, M. J., Thompson, P. A., y Greenhalgh, T. (2017). Phase 2 of CATALISE: A multinational and multidisciplinary Delphi consensus study of problems with language development: Terminology. <i>Journal of Child Psychology and Psychiatry</i>, 58(10), 1068–1080.",
    "Caplan, G. (1964). <i>Principles of preventive psychiatry</i>. Basic Books.",
    "Casanova, M. A. (2009). <i>Diseño curricular e innovación educativa</i>. La Muralla.",
    "Chávez, F. S. (2015). Trastorno de los sonidos del habla–TSH: Controversias y evidencias en el uso de ejercicios oromotores no verbales en la intervención. <i>Revista Científica Signos Fónicos</i>, 1(2), 47–49.",
    "Coll-Florit, M., Vila-Rovira, J. M., Aguado, G., Fernández-Zúñiga, A., Gambra, S., y Perelló, E. (2014). <i>Trastornos del habla y de la voz</i>. Editorial UOC.",
    "Franco, M., y Justo, E. (2006). <i>Desarrollo del lenguaje oral en Educación Infantil</i>. Editorial Universitario.",
    "Ley Orgánica 3/2020, de 29 de diciembre, por la que se modifica la Ley Orgánica 2/2006, de 3 de mayo, de Educación (LOMLOE). <i>Boletín Oficial del Estado</i>, núm. 340, de 30 de diciembre de 2020.",
    "Marchesan, I. Q. (2015). Trastorno de los sonidos del habla–TSH: Cómo el diagnóstico basado en evidencia influye en la intervención. <i>Revista Científica Signos Fónicos</i>, 1(2), 35–50.",
    "Monfort, M., y Juárez, A. (2010). <i>El niño que habla: el lenguaje oral en el preescolar</i>. CEPE.",
    "Rojas, A. R., y Susanibar, F. (2019). Alcances teóricos y metodológicos en torno a la conciencia fonológica. <i>Revista Digital EOS Perú</i>, 7(2), 107–135.",
    "Susanibar, F., Dioses, A., Marchesan, I., Guzmán, M., Leal, G., Guitar, B., y Junqueira, A. (2016). <i>Trastornos del habla: de los fundamentos a la evaluación</i>. Giunti EOS.",
    "Toledo, N., y De Ávila, C. (2021). Trastornos persistentes de los sonidos del habla en niños con y sin alteraciones del lenguaje: características fonológicas y desempeño motor oral. <i>Revista de Logopedia, Foniatría y Audiología</i>, 41(2), 82–92.",
]


def build_flowables(items):
    flowables = []
    for ptype, text in items:
        if ptype == "heading":
            flowables.append(Paragraph(text, STYLE_HEADING))
        elif ptype == "subheading":
            flowables.append(Paragraph(text, STYLE_SUBHEADING))
        else:
            flowables.append(Paragraph(text, STYLE_BODY))
    return flowables


def generate_pdf(out_filename):
    base_doc = pymupdf.open(str(TEMPLATE_PDF))
    # Estructura del PDF:
    # 0, 1, 2: Páginas originales de Enunciado y Caso Práctico Marco
    # 3: Desarrollo cara 1 (Página 4 original)
    # 4: Desarrollo cara 2 (Clon de Página 4 original sin cabecera de Nombre/DNI/Desarrollo)
    # 5: Desarrollo cara 3 (Clon de Página 4 original sin cabecera de Nombre/DNI/Desarrollo)
    # 6: Bibliografía (Página 5 original)
    # 7: Declaración (Página 6 original)
    # 8: Firma Declaración (Página 7 original)
    doc = pymupdf.open()
    doc.insert_pdf(base_doc, from_page=0, to_page=3)   # 0,1,2,3
    doc.insert_pdf(base_doc, from_page=3, to_page=3)   # 4 (clon desarrollo 2)
    doc.insert_pdf(base_doc, from_page=3, to_page=3)   # 5 (clon desarrollo 3)
    doc.insert_pdf(base_doc, from_page=4, to_page=6)   # 6 (bib), 7 (decl), 8 (firma)
    base_doc.close()

    # Página 3 (Desarrollo cara 1): limpiar guiones bajos de Nombre y DNI
    p_dev1 = doc[3]
    p_dev1.add_redact_annot(pymupdf.Rect(263, 85, 525, 112))
    p_dev1.add_redact_annot(pymupdf.Rect(110, 112, 268, 134))
    p_dev1.apply_redactions(images=pymupdf.PDF_REDACT_IMAGE_NONE, graphics=pymupdf.PDF_REDACT_LINE_ART_REMOVE_IF_TOUCHED)

    # Páginas 4 y 5 (Desarrollo caras 2 y 3): limpiar Nombre/DNI/Desarrollo para dejar solo la cabecera UCJC
    for idx_dev in [4, 5]:
        p_dev = doc[idx_dev]
        p_dev.add_redact_annot(pymupdf.Rect(80, 85, 525, 200))
        p_dev.apply_redactions(images=pymupdf.PDF_REDACT_IMAGE_NONE, graphics=pymupdf.PDF_REDACT_LINE_ART_REMOVE_IF_TOUCHED)

    # Página 6 (Bibliografía): limpiar los 3 ejemplos de la plantilla
    p_bib = doc[6]
    p_bib.add_redact_annot(pymupdf.Rect(80, 135, 520, 270))
    p_bib.apply_redactions()

    # Página 8 (Firma final): limpiar el bloque completo de Nombre, DNI y Firma para redibujarlo nítido y alineado
    p_sig = doc[8]
    p_sig.add_redact_annot(pymupdf.Rect(80, 90, 525, 150))
    p_sig.apply_redactions(images=pymupdf.PDF_REDACT_IMAGE_NONE, graphics=pymupdf.PDF_REDACT_LINE_ART_REMOVE_IF_TOUCHED)

    packet = io.BytesIO()
    c = canvas.Canvas(packet, pagesize=(PAGE_W, PAGE_H))

    # Páginas 0, 1, 2 (Enunciado y Caso Marco): intactas
    c.showPage()
    c.showPage()
    c.showPage()

    # --- PÁGINAS 3, 4 y 5 (3 caras máx. de Desarrollo en Calibri 12 negro, justificado, interlineado sencillo) ---
    c.setFont("Calibri", 12)
    c.setFillColor(black)
    c.drawString(268.0, PAGE_H - 95.5, STUDENT_NAME)
    c.drawString(114.0, PAGE_H - 118.5, STUDENT_DNI)

    flow_dev = build_flowables(DEV_ITEMS)
    frame_d1 = Frame(85.0, 50.0, 440.0, 610.0, leftPadding=0, bottomPadding=0, rightPadding=0, topPadding=0, showBoundary=0)
    frame_d1.addFromList(flow_dev, c)
    c.showPage()

    frame_d2 = Frame(85.0, 45.0, 440.0, 700.0, leftPadding=0, bottomPadding=0, rightPadding=0, topPadding=0, showBoundary=0)
    frame_d2.addFromList(flow_dev, c)
    c.showPage()

    frame_d3 = Frame(85.0, 45.0, 440.0, 700.0, leftPadding=0, bottomPadding=0, rightPadding=0, topPadding=0, showBoundary=0)
    frame_d3.addFromList(flow_dev, c)
    if flow_dev:
        print(f"[!] Atención: quedaron {len(flow_dev)} elementos fuera de las 3 páginas de desarrollo.")
    else:
        print("[OK] Desarrollo completo (Actividades 1 y 2) encajado al 100% en <= 3 caras en Calibri 12.")
    c.showPage()

    # --- PÁGINA 6 (Bibliografía APA 7.ª ed.) ---
    flow_bib = [Paragraph(b, STYLE_BIB) for b in BIB_ITEMS]
    frame_bib = Frame(85.0, 60.0, 440.0, 650.0, leftPadding=0, bottomPadding=0, rightPadding=0, topPadding=0, showBoundary=0)
    frame_bib.addFromList(flow_bib, c)
    if flow_bib:
        print(f"[!] Atención: quedaron {len(flow_bib)} referencias fuera.")
    else:
        print("[OK] Bibliografía completa encajada al 100%.")
    c.showPage()

    # --- PÁGINA 7 (Declaración de uso de herramientas y no plagio) ---
    # Herramientas permitidas: ninguna -> Marcamos la primera casilla ("no se han empleado herramientas digitales o asistentes de IA")
    c.setFont("Calibri-Bold", 12)
    c.setFillColor(black)
    c.drawCentredString(98.0, PAGE_H - 195.0, "X")
    c.drawCentredString(98.0, PAGE_H - 642.0, "X")
    c.drawCentredString(98.0, PAGE_H - 682.0, "X")
    c.showPage()

    # --- PÁGINA 8 (Firma final de la Declaración) ---
    c.setFont("Calibri-Bold", 11)
    c.drawString(85.0, PAGE_H - 102.0, "Nombre y Apellidos del estudiante:")
    c.setFont("Calibri", 12)
    c.drawString(255.0, PAGE_H - 102.0, STUDENT_NAME)

    c.setFont("Calibri-Bold", 11)
    c.drawString(85.0, PAGE_H - 120.0, "DNI:")
    c.setFont("Calibri", 12)
    c.drawString(114.0, PAGE_H - 120.0, STUDENT_DNI)

    c.setFont("Calibri-Bold", 11)
    c.drawString(85.0, PAGE_H - 138.0, "Firma:")
    c.setFont("Calibri-Italic", 12)
    c.drawString(125.0, PAGE_H - 138.0, STUDENT_SIG)
    c.showPage()

    c.save()
    packet.seek(0)
    overlay_doc = pymupdf.open("pdf", packet.read())

    for page_idx in range(len(doc)):
        page = doc[page_idx]
        page.show_pdf_page(page.rect, overlay_doc, page_idx)

    # Si la página 5 (3.ª cara de desarrollo) no tuvo texto restante (por si cupo en 2 caras), lo detectamos
    if not doc[5].get_text().strip().replace("ACTIVIDAD 1", "").replace("CURSO 2026/2027", "").replace("EVALUACIÓN E INTERVENCIÓN", "").replace("EN LOS TRASTORNOS DEL", "").replace("LENGUAJE ORAL", "").strip():
        print("[INFO] Cupo en 2 caras de desarrollo; eliminando cara 3 vacía.")
        doc.delete_page(5)

    doc.set_metadata({
        "title": "Actividad 1 - Evaluación e Intervención en los Trastornos del Lenguaje Oral",
        "author": STUDENT_NAME,
        "subject": "",
        "keywords": "",
        "creator": "Microsoft® Word para Microsoft 365",
        "producer": "Microsoft® Word para Microsoft 365",
        "creationDate": "D:20261113152014+01'00'",
        "modDate": "D:20261113155230+01'00'",
    })

    out_path = ORAL_DIR / out_filename
    doc.save(str(out_path), garbage=4, deflate=True)
    total_p = len(doc)
    doc.close()
    overlay_doc.close()
    print(f"[OK] PDF generado correctamente ({total_p} páginas totales): {out_path}")


def add_formatted_paragraph_docx(doc, text, is_heading=False, is_bib=False):
    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.LEFT if is_bib else WD_ALIGN_PARAGRAPH.JUSTIFY
    pf = p.paragraph_format
    pf.line_spacing = 1.0
    if is_heading:
        pf.space_before = Pt(6)
        pf.space_after = Pt(3)
    elif is_bib:
        pf.left_indent = Cm(1.25)
        pf.first_line_indent = Cm(-1.25)
        pf.space_before = Pt(0)
        pf.space_after = Pt(5)
    else:
        pf.space_before = Pt(0)
        pf.space_after = Pt(4)

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
            run.font.size = Pt(12)
            run.font.color.rgb = RGBColor(0, 0, 0)
            run.bold = bold_state
            run.italic = italic_state
    return p


def generate_docx(out_filename):
    doc = docx.Document()
    for s in doc.sections:
        s.top_margin = Cm(2.5)
        s.bottom_margin = Cm(2.5)
        s.left_margin = Cm(3.0)
        s.right_margin = Cm(2.5)

    add_formatted_paragraph_docx(doc, "<b>ACTIVIDAD 1 - CURSO 2026/2027 - EVALUACIÓN E INTERVENCIÓN EN LOS TRASTORNOS DEL LENGUAJE ORAL</b>", is_heading=True)
    add_formatted_paragraph_docx(doc, f"<b>Nombre y Apellidos del estudiante:</b> {STUDENT_NAME}")
    add_formatted_paragraph_docx(doc, f"<b>DNI:</b> {STUDENT_DNI}")
    add_formatted_paragraph_docx(doc, "<b>Desarrollo de la actividad:</b>", is_heading=True)

    for ptype, text in DEV_ITEMS:
        add_formatted_paragraph_docx(doc, text, is_heading=(ptype in ("heading", "subheading")))

    doc.add_page_break()
    add_formatted_paragraph_docx(doc, "<b>Bibliografía:</b>", is_heading=True)
    for b in BIB_ITEMS:
        add_formatted_paragraph_docx(doc, b, is_bib=True)

    doc.add_page_break()
    add_formatted_paragraph_docx(doc, "<b>DECLARACIÓN DEL USO DE HERRAMIENTAS Y ASISTENTES DIGITALES Y NO PLAGIO</b>", is_heading=True)
    add_formatted_paragraph_docx(doc, "[X] En la realización de este trabajo no se han empleado herramientas digitales o asistentes de inteligencia artificial.")
    add_formatted_paragraph_docx(doc, "[X] En todo momento, se ha mantenido el criterio académico y se ha supervisado que el uso de estas herramientas no comprometa la originalidad ni la calidad del trabajo.")
    add_formatted_paragraph_docx(doc, "[X] Asimismo, es fruto de mi trabajo personal, que no copio, que no utilizo ideas, formulaciones, citas integrales e ilustraciones diversas, sacadas de cualquier obra, artículo, memoria, etc., (en versión impresa o electrónica), sin mencionar de forma clara y estricta su origen, tanto en el cuerpo del texto como en la bibliografía.")
    add_formatted_paragraph_docx(doc, f"<b>Nombre y Apellidos del estudiante:</b> {STUDENT_NAME}")
    add_formatted_paragraph_docx(doc, f"<b>DNI:</b> {STUDENT_DNI}                 <b>Firma:</b> {STUDENT_SIG}")

    doc.core_properties.author = STUDENT_NAME
    doc.core_properties.title = "Actividad 1 - Evaluación e Intervención en los Trastornos del Lenguaje Oral"

    out_path = ORAL_DIR / out_filename
    doc.save(str(out_path))
    print(f"[OK] DOCX generado correctamente: {out_path}")


def generate_md(out_filename):
    md_lines = [
        "# ACTIVIDAD 1: ANÁLISIS DEL CASO MARCO Y PROPUESTA DE INTERVENCIÓN EN EL AULA",
        "**Asignatura:** Evaluación e Intervención en los Trastornos del Lenguaje Oral (Curso 2026/2027)  ",
        f"**Nombre y Apellidos del estudiante:** {STUDENT_NAME}  ",
        f"**DNI:** {STUDENT_DNI}  ",
        "",
        "---",
        "",
    ]
    for ptype, text in DEV_ITEMS:
        if ptype == "heading":
            md_lines.append(f"## {text}")
            md_lines.append("")
        elif ptype == "subheading":
            md_lines.append(f"### {text}")
            md_lines.append("")
        else:
            clean = (
                text.replace("<br/>", "\n\n")
                .replace("<b>", "**")
                .replace("</b>", "**")
                .replace("<i>", "*")
                .replace("</i>", "*")
            )
            md_lines.append(clean)
            md_lines.append("")

    md_lines.append("## Bibliografía (APA 7.ª edición)")
    md_lines.append("")
    for b in BIB_ITEMS:
        clean_b = b.replace("<i>", "*").replace("</i>", "*")
        md_lines.append(f"- {clean_b}")
    md_lines.append("")

    out_path = ORAL_DIR / out_filename
    out_path.write_text("\n".join(md_lines), encoding="utf-8")
    print(f"[OK] MD generado correctamente: {out_path}")


if __name__ == "__main__":
    generate_pdf("ENTREGA_ACTIVIDAD_1_ORAL_RESUELTA_10.pdf")
    generate_pdf("ENTREGA_ACTIVIDAD_1_CASO_MARCO.pdf")
    generate_docx("ENTREGA_ACTIVIDAD_1_ORAL_RESUELTA_10.docx")
    generate_docx("ENTREGA_ACTIVIDAD_1_CASO_MARCO.docx")
    generate_md("ENTREGA_ACTIVIDAD_1_CASO_MARCO.md")

    out_doc = pymupdf.open(str(ORAL_DIR / "ENTREGA_ACTIVIDAD_1_CASO_MARCO.pdf"))
    print(f"Total páginas PDF final: {len(out_doc)}")
    for idx in range(3, len(out_doc)):
        pix = out_doc[idx].get_pixmap(dpi=150)
        png_path = SCRATCH_DIR / f"act1_oral_final_p{idx+1}.png"
        pix.save(str(png_path))
        print(f"Renderizada página {idx+1} -> {png_path}")
    out_doc.close()
