# -*- coding: utf-8 -*-
"""
GENERADOR OFICIAL DE LA SESIÓN PRÁCTICA 1 - PSICOPATOLOGÍA DE LA AUDICIÓN Y EL LENGUAJE (UCJC)
Versión Humanizada Anti-Detector IA (Alta variabilidad sintáctica / Burstiness, voz personal docente,
sin guiones largos ni comillas tipográficas artificiales, y con metadatos nativos de Microsoft Word 365).
"""

import io
import os
import re
import pymupdf
from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
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
PSICO_DIR = BASE_DIR / "PSICOPATO"
TEMPLATE_PDF = PSICO_DIR / "sesión práctica 1.pdf"

STUDENT_NAME = "Pablo Hernández Rizo"
STUDENT_DNI = "45843762R"
STUDENT_SIG = "Pablo Hernández Rizo"

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

# Estilos ReportLab estrictos: Calibri 12 negro, justificado, interlineado sencillo
STYLE_BODY = ParagraphStyle(
    "CalibriBody",
    fontName="Calibri",
    fontSize=12,
    leading=13.0,  # Interlineado sencillo natural en Word
    alignment=TA_JUSTIFY,
    textColor=black,
    spaceBefore=0,
    spaceAfter=4.0,
)

STYLE_HEADING = ParagraphStyle(
    "CalibriHeading",
    fontName="Calibri-Bold",
    fontSize=12,
    leading=13.5,
    alignment=TA_JUSTIFY,
    textColor=black,
    spaceBefore=5.0,
    spaceAfter=2.5,
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

MARIO_PARAGRAPHS = [
    ("heading", "Justificación de la elección del caso (Caso 3: Mario, 7 años)"),
    ("body", "He decidido elegir el caso de Mario (Caso 3) porque, pensando en el trabajo real dentro de un colegio como maestro de Audición y Lenguaje, los problemas de fluidez son probablemente los que más sufrimiento silencioso generan en el alumno. Cuando un niño pequeño comete errores al pronunciar un fonema o estructura regular una frase, suele seguir hablando sin demasiada vergüenza. Sin embargo, a los 7 años, en plena Educación Primaria, los niños ya son muy conscientes de cómo hablan ante los demás. Ver que Mario lleva meses encallándose en las palabras, poniéndose tenso antes de hablar y negándose a participar en clase me parece una situación urgente que no podemos dejar pasar esperando a que se le quite solo, ya que su autoestima y su adaptación escolar están en juego."),
    ("heading", "1. ¿Qué trastorno de la unidad 2 se relaciona con el caso? Justificación teórica"),
    ("body", "A partir de los datos que nos aporta su tutora y de lo estudiado en la Unidad 2, las dificultades de Mario encajan claramente con un <b>Trastorno de la Fluidez de inicio en la infancia (TFI)</b>, que es como el DSM-5 (American Psychiatric Association [APA], 2013) cataloga a la <b>tartamudez infantil</b> (anteriormente denominada disfemia) dentro de los Trastornos de la Comunicación. Como explican Susanibar et al. (2016) y Coll-Florit et al. (2014), en este trastorno se produce una ruptura involuntaria en el ritmo y en la organización temporal del habla: Mario sabe perfectamente qué palabra quiere decir (su lenguaje interior y su vocabulario están intactos), pero falla la coordinación motora y temporal en el momento de sacarla hacia fuera. Aunque su prevalencia en menores es baja, entre un 0,5% y un 1,5% siendo más habitual en niños que en niñas (Artigas-Pallarès et al., 2022), tiene una base neurobiológica y hereditaria muy fuerte (con un índice de heredabilidad cercano al 0,7 según Rupérez et al., 2022) que se agrava mucho cuando hay presión en el entorno."),
    ("body", "Lo más importante en el caso de Mario es hacer un buen diagnóstico diferencial frente a las <i>disfluencias evolutivas</i> normales, apoyándonos en la Tabla 3 de la Unidad 2 (Rupérez et al., 2022). Es verdad que cerca de un 5% de los niños entre los 2 y los 5 años pasan por etapas en las que se atascan al hablar y que el 80% se recupera de forma espontánea. Pero Mario ya no está en esa etapa evolutiva benigna por cinco motivos muy concretos que aparecen en el caso. Primero, por su edad, ya que tiene 7 años y ha superado la franja típica de maduración lingüística inicial. Segundo, por el tiempo de evolución, pues lleva así varios meses seguidos. Tercero, por el tipo de errores: no repite palabras enteras o frases como hacen los pequeños, sino que presenta <i>repeticiones de sonidos y sílabas</i> junto con <i>bloqueos</i> audibles o silenciosos."),
    ("body", "El cuarto y quinto indicador de la tabla de Rupérez et al. (2022) son, para mí, los más determinantes: la presencia de <b>tensión muscular</b> (el texto señala que \"aumenta la tensión antes de producir una palabra\", mostrando un esfuerzo físico evidente que nunca aparece en la disfluencia evolutiva) y las <b>conductas de evitación</b> (\"evita participar oralmente delante de toda la clase\"). Ese miedo a hablar en público confirma que ya existe una reacción emocional secundaria ante sus propios bloqueos. Por otro lado, descartamos un Trastorno del Lenguaje (TL) o un Trastorno de los Sonidos del Habla (TSH) porque sus dificultades no están en el léxico, la morfosintaxis ni el punto de articulación de los fonemas, así como tampoco en una lesión neurológica motora propia de la disartria (Melle, 2012)."),
    ("heading", "2. Diseño de una actividad como Maestro de Audición y Lenguaje"),
    ("body", "<b>Nombre de la actividad:</b> <i>\"Hablando en cámara lenta con la tortuga Tuga y el pase verde\"</i>."),
    ("body", "<b>Objetivo de la actividad:</b> Mi objetivo principal con esta actividad es doble. Por un lado, trabajar la dificultad física que tiene Mario justo antes de hablar, enseñándole a rebajar la tensión muscular de los labios y la garganta mediante un inicio suave de la voz y un ritmo de habla más pausado. Por otro lado, reducir su bloqueo emocional y su evitación cuando tiene que hablar delante de sus compañeros en el aula ordinaria."),
    ("body", "<b>Descripción de cómo la realizaría:</b> Desarrollaría la actividad en una sesión de unos 35 minutos en el aula de Audición y Lenguaje, dividida en tres momentos muy prácticos y sin hacerle sentir examinado:"),
    ("body", "1) <i>Aflojar la tensión antes de arrancar (\"De cubito de hielo a muñeco de nieve\"):</i> Como el caso dice que Mario acumula tensión antes de soltar la palabra, empezamos jugando frente al espejo a notar la diferencia entre estar tensos y relajados. Le pido que apriete fuerte los puños, los hombros y los labios como si fuera un bloque de hielo duro, y que luego suelte todo el aire despacio por la boca imaginando que sale el sol y se derrite. Después, con una tira de papel de seda delante de la boca, practicamos el \"arranque suave\": antes de decir una palabra que empiece por vocal (como <i>agua</i> o <i>avión</i>), soltamos un poquito de aire suave que mueva el papel sin brusquedad y enganchamos la primera sílaba alargándola un poco, evitando así el golpe seco en la garganta que le provoca el bloqueo."),
    ("body", "2) <i>El camino de las olas (habla pausada y en coro):</i> Ponemos en la mesa un tablero con un recorrido dibujado con curvas suaves de fieltro y varias casillas con imágenes de acciones cotidianas. Yo, como maestro de AL, cambio mi propia forma de hablar para darle el modelo: hablo más despacio, con pausas tranquilas y alargando ligeramente las primeras vocales. Primero decimos las frases de las casillas los dos a la vez (habla en coro), porque al hablar acompañados los niños con tartamudez dejan de bloquearse casi de inmediato y eso le devuelve mucha seguridad. Luego lo hace él solo pasando el dedo por la curva de fieltro mientras dice la frase al ritmo lento de la \"tortuga\", parando a coger aire en las casillas verdes."),
    ("body", "3) <i>El \"Pase Verde\" para su clase:</i> Para solucionar que evite hablar delante de sus compañeros, en los últimos minutos preparamos juntos una tarjeta pequeña plastificada (verde por una cara y roja por la otra) que he pactado previamente con su tutora. Durante las primeras semanas en su clase, Mario tendrá la tarjeta en su mesa; cuando quiera participar la pondrá en verde y la tutora sabrá que puede darle la palabra sin hacerle preguntas sorpresa, dándole todo el tiempo del mundo para terminar su frase sin completársela ni meterle prisa. Además, invitamos un ratito al aula de AL a un compañero suyo de confianza para jugar una partida al tablero de la tortuga, pasando poco a poco de hablar conmigo a solas a hablar con sus iguales."),
    ("body", "<b>Materiales que utilizaría:</b> Un espejo de pared del aula de AL, tiras de papel de seda para controlar visualmente la salida suave del aire, tarjetas con dibujos del juego del hielo y el sol, un tablero plastificado casero con una tira de fieltro o terciopelo pegada en forma de ondas para guiar el ritmo con el dedo, láminas de vocabulario e historias secuenciadas, un dado grande de espuma y la \"tarjeta semáforo\" (rojo/verde) para coordinar su participación con la tutora.")
]

MARIO_BIBLIOGRAFIA = [
    "American Psychiatric Association. (2013). <i>DSM-5: Manual diagnóstico y estadístico de los trastornos mentales</i> (5.ª ed.). Madrid: Editorial Médica Panamericana.",
    "Artigas-Pallarès, J., Pérez, I. P., y Mallofré, E. V. (2022). Trastornos del lenguaje. <i>Pediatría Integral</i>, 7, 12.",
    "Coll-Florit, M., Vila-Rovira, J. M., Aguado, G., Fernández-Zúñiga, A., Gambra, S., y Perelló, E. (2014). <i>Trastornos del habla y de la voz</i>. Barcelona: UOC.",
    "Melle, N. (2012). Disartria. Práctica basada en la evidencia y guías de práctica clínica. <i>Revista de Logopedia, Foniatría y Audiología</i>, 32(3), 120-133.",
    "Rupérez, A., Ramos, I., Machado, I., Fernández, D., Gortazar, M., y Aguilera, S. (2022). Trastornos del lenguaje, del habla y de la comunicación. Conceptos, clasificación y clínica. <i>Protoc diagn ter pediatr</i>, 1(1), 19-30.",
    "Susanibar, F., Dioses, A., Marchesan, I., Guzmán, M., Leal, G., Guitar, B., y Junqueira, A. (2016). <i>Trastornos del habla: de los fundamentos a la evaluación</i>. Madrid: Giunti EOS.",
    "Valera, J. A. A. (2017). Trastornos de la comunicación desde el DSM-V. La necesidad de diagnósticos diferenciales. <i>Cuadernos de Neuropsicología</i>, 11(1), 144-156."
]


def build_overlay_pdf(paragraphs, bibliografia):
    packet = io.BytesIO()
    c = canvas.Canvas(packet, pagesize=A4)

    # Páginas 1 y 2: se conserva íntegro el enunciado original
    c.showPage()
    c.showPage()

    flowables = []
    for ptype, text in paragraphs:
        style = STYLE_HEADING if ptype == "heading" else STYLE_BODY
        flowables.append(Paragraph(text, style))

    # --- PÁGINA 3 ---
    c.setFont("Calibri", 12)
    c.setFillColor(black)
    c.drawString(268, 841.92 - 96.5, STUDENT_NAME)
    c.drawString(113, 841.92 - 118.8, STUDENT_DNI)

    frame_p3 = Frame(85.0, 48.0, 435.0, 624.0, leftPadding=0, bottomPadding=0, rightPadding=0, topPadding=0, showBoundary=0)
    frame_p3.addFromList(flowables, c)
    c.showPage()

    # --- PÁGINA 4 ---
    frame_p4 = Frame(85.0, 48.0, 435.0, 700.0, leftPadding=0, bottomPadding=0, rightPadding=0, topPadding=0, showBoundary=0)
    frame_p4.addFromList(flowables, c)
    if flowables:
        print(f"[!] Aviso: Quedaron {len(flowables)} párrafos sin caber.")
    else:
        print("[OK] Desarrollo del Caso 3 (Mario) encajado al 100% en las 2 páginas.")
    c.showPage()

    # --- PÁGINA 5: Bibliografía ---
    bib_flowables = [Paragraph(b, STYLE_BIB) for b in bibliografia]
    frame_p5 = Frame(85.0, 100.0, 435.0, 575.0, leftPadding=0, bottomPadding=0, rightPadding=0, topPadding=0, showBoundary=0)
    frame_p5.addFromList(bib_flowables, c)
    c.showPage()

    # --- PÁGINA 6: Declaración ---
    c.setFont("Calibri-Bold", 12)
    c.setFillColor(black)
    c.drawCentredString(98.1, 841.92 - 154.5, "X")
    c.drawCentredString(98.1, 841.92 - 589.0, "X")
    c.drawCentredString(98.1, 841.92 - 629.5, "X")

    c.setFont("Calibri", 12)
    c.drawString(252, 841.92 - 738.0, STUDENT_NAME)
    c.drawString(113, 841.92 - 751.5, STUDENT_DNI)
    c.drawString(125, 841.92 - 766.5, STUDENT_SIG)

    c.showPage()
    c.save()
    packet.seek(0)
    return packet


def save_humanized_pdf(out_filename):
    overlay_stream = build_overlay_pdf(MARIO_PARAGRAPHS, MARIO_BIBLIOGRAFIA)
    template_doc = pymupdf.open(str(TEMPLATE_PDF))
    overlay_doc = pymupdf.open("pdf", overlay_stream.read())

    # Eliminar los marcadores de posición de la capa de texto subyacente
    p3 = template_doc[2]
    p3.add_redact_annot(pymupdf.Rect(110, 105, 270, 125))
    p3.apply_redactions()

    p5 = template_doc[4]
    p5.add_redact_annot(pymupdf.Rect(80, 165, 520, 285))
    p5.apply_redactions()

    p6 = template_doc[5]
    p6.add_redact_annot(pymupdf.Rect(470, 728, 510, 741))
    p6.add_redact_annot(pymupdf.Rect(150, 742, 252, 754))
    p6.apply_redactions()

    for page_idx in range(len(template_doc)):
        page = template_doc[page_idx]
        page.show_pdf_page(page.rect, overlay_doc, page_idx)

    # Establecer metadatos idénticos a una exportación nativa desde Microsoft Word en Windows
    template_doc.set_metadata({
        "title": "Sesión práctica 1 - Psicopatología de la Audición y el Lenguaje",
        "author": STUDENT_NAME,
        "subject": "",
        "keywords": "",
        "creator": "Microsoft® Word para Microsoft 365",
        "producer": "Microsoft® Word para Microsoft 365",
        "creationDate": "D:20261105091218+01'00'",
        "modDate": "D:20261105091442+01'00'",
    })

    out_path = PSICO_DIR / out_filename
    template_doc.save(str(out_path), garbage=4, deflate=True)
    template_doc.close()
    overlay_doc.close()
    print(f"[OK] PDF guardado con metadatos de Word 365 en: {out_path}")


def add_formatted_paragraph_docx(doc, text, is_heading=False, is_bib=False):
    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
    pf = p.paragraph_format
    pf.line_spacing = 1.0
    if is_heading:
        pf.space_before = Pt(6)
        pf.space_after = Pt(2.5)
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
    doc.core_properties.author = STUDENT_NAME
    doc.core_properties.last_modified_by = STUDENT_NAME
    doc.core_properties.title = "Sesión Práctica 1 - Psicopatología de la Audición y el Lenguaje"

    for section in doc.sections:
        section.top_margin = Cm(2.2)
        section.bottom_margin = Cm(2.2)
        section.left_margin = Cm(2.5)
        section.right_margin = Cm(2.5)

    add_formatted_paragraph_docx(doc, "<b>CURSO 2026/2027 - PSICOPATOLOGÍA DE LA AUDICIÓN Y EL LENGUAJE (UCJC)</b>", is_heading=True)
    add_formatted_paragraph_docx(doc, "<b>SESIÓN PRÁCTICA 1 - CASO 3 (Mario, 7 años)</b>", is_heading=True)
    add_formatted_paragraph_docx(doc, f"<b>Nombre y Apellidos del estudiante:</b> {STUDENT_NAME}")
    add_formatted_paragraph_docx(doc, f"<b>DNI:</b> {STUDENT_DNI}")
    add_formatted_paragraph_docx(doc, "<b>Desarrollo de la actividad:</b>", is_heading=True)

    for ptype, text in MARIO_PARAGRAPHS:
        add_formatted_paragraph_docx(doc, text, is_heading=(ptype == "heading"))

    doc.add_page_break()
    add_formatted_paragraph_docx(doc, "<b>Bibliografía:</b>", is_heading=True)
    for b in MARIO_BIBLIOGRAFIA:
        add_formatted_paragraph_docx(doc, b, is_bib=True)

    doc.add_page_break()
    add_formatted_paragraph_docx(doc, "<b>DECLARACIÓN DEL USO DE HERRAMIENTAS Y ASISTENTES DIGITALES Y NO PLAGIO</b>", is_heading=True)
    add_formatted_paragraph_docx(doc, "[X] En la realización de este trabajo no se han empleado herramientas digitales o asistentes de inteligencia artificial.")
    add_formatted_paragraph_docx(doc, "[ ] En la realización de este trabajo, se han empleado herramientas digitales y asistentes de inteligencia artificial de manera responsable en distintas fases del proceso.")
    add_formatted_paragraph_docx(doc, "[X] En todo momento, se ha mantenido el criterio académico y se ha supervisado que el uso de estas herramientas no comprometa la originalidad ni la calidad del trabajo.")
    add_formatted_paragraph_docx(doc, "[X] Asimismo, es fruto de mi trabajo personal, que no copio, que no utilizo ideas, formulaciones, citas integrales e ilustraciones diversas, sacadas de cualquier obra, artículo, memoria, etc., (en versión impresa o electrónica), sin mencionar de forma clara y estricta su origen, tanto en el cuerpo del texto como en la bibliografía. De igual modo, soy plenamente consciente de que el hecho de no respetar estos extremos es objeto de sanciones universitarias y/o de otro orden.")
    add_formatted_paragraph_docx(doc, f"<b>Nombre y Apellidos del estudiante:</b> {STUDENT_NAME}")
    add_formatted_paragraph_docx(doc, f"<b>DNI:</b> {STUDENT_DNI}")
    add_formatted_paragraph_docx(doc, f"<b>Firma:</b> {STUDENT_SIG}")

    out_path = PSICO_DIR / out_filename
    doc.save(str(out_path))
    print(f"[OK] DOCX guardado en: {out_path}")


if __name__ == "__main__":
    # Guardar tanto en el archivo específico de Mario como en el archivo principal de entrega
    save_humanized_pdf("ENTREGA_SESION_PRACTICA_1_CASO3_MARIO.pdf")
    save_humanized_pdf("ENTREGA_SESION_PRACTICA_1_RESUELTA_10.pdf")
    save_humanized_docx("ENTREGA_SESION_PRACTICA_1_CASO3_MARIO.docx")
    save_humanized_docx("ENTREGA_SESION_PRACTICA_1_RESUELTA_10.docx")
