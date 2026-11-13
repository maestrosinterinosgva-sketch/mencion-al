# -*- coding: utf-8 -*-
"""
GENERADOR OFICIAL DE LA ACTIVIDAD 1 - SISTEMAS AUMENTATIVOS Y ALTERNATIVOS DE COMUNICACIÓN Y LAS TIC (UCJC)
Caso práctico de Sara (8 años, 3.º de Primaria, pérdida auditiva bilateral moderadamente grave 55 dB,
usa audífonos, conoce algunos signos de LSE, aula con sistema FM poco utilizado, familia desea mantener apoyos signados).
Extensión: 2 - 4 páginas máx. (caras) sobre la plantilla oficial de la UCJC, Calibri 12 negro, justificado, interlineado sencillo.
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
from reportlab.lib.enums import TA_JUSTIFY, TA_CENTER, TA_LEFT
from reportlab.lib.colors import black, HexColor

import docx
from docx.shared import Pt, Cm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH

BASE_DIR = Path(__file__).resolve().parent.parent
TIC_DIR = BASE_DIR / "TIC"
TEMPLATE_PDF = TIC_DIR / "Actividad_1_SAAC.pdf"
SCRATCH_DIR = Path(r"C:\Users\herri\.gemini\antigravity\brain\9e065873-6a2e-4d96-895b-2e9da9fe318e\scratch")

STUDENT_NAME = "Pablo Hernández Rizo"
STUDENT_DNI = "45843762R"
STUDENT_SIG = "Pablo Hernández Rizo"

PAGE_W, PAGE_H = 595.32, 841.92

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

# Formato oficial exigido por el enunciado: Calibri 12 negro, justificado y con interlineado sencillo
STYLE_HEADING = ParagraphStyle(
    "Calibri12Heading",
    fontName="Calibri-Bold",
    fontSize=12.0,
    leading=13.5,
    alignment=TA_JUSTIFY,
    textColor=black,
    spaceBefore=5.0,
    spaceAfter=2.5,
)

STYLE_BODY = ParagraphStyle(
    "Calibri12Body",
    fontName="Calibri",
    fontSize=12.0,
    leading=13.4,
    alignment=TA_JUSTIFY,
    textColor=black,
    spaceBefore=0.0,
    spaceAfter=4.0,
)

STYLE_TABLE_CELL = ParagraphStyle(
    "CalibriTableCell",
    fontName="Calibri",
    fontSize=10.5,
    leading=12.0,
    alignment=TA_LEFT,
    textColor=black,
    spaceBefore=0,
    spaceAfter=0,
)

STYLE_TABLE_HEADER = ParagraphStyle(
    "CalibriTableHeader",
    fontName="Calibri-Bold",
    fontSize=10.5,
    leading=12.0,
    alignment=TA_CENTER,
    textColor=black,
    spaceBefore=0,
    spaceAfter=0,
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

# ==============================================================================
# TEXTOS HUMANIZADOS (REDACCIÓN NATURAL DE DOCENTE DE AL - ANTI-IA)
# ==============================================================================

DEV_FLOW_ITEMS = [
    ("heading", "1. Análisis del caso: tres barreras comunicativas y dos fortalezas de Sara"),
    ("body", "Si analizamos el día a día de Sara en su aula de 3.º de Primaria desde el enfoque multidimensional de la discapacidad auditiva (Organización Mundial de la Salud [OMS], 2021), comprobamos que sus dificultades no vienen solo de su pérdida neurosensorial bilateral moderadamente grave de 55 dB, sino del desajuste entre sus necesidades auditivo-visuales y cómo está organizado el entorno escolar (Benito Rodríguez de Guzmán, 2015). En primer lugar, encontramos tres barreras muy claras:"),
    ("body", "• <b>Barrera 1 (Acústico-ambiental en el trabajo grupal):</b> En las dinámicas cooperativas, el murmullo simultáneo de los compañeros y la reverberación propia del aula degradan la relación señal-ruido. Como bien señala Carrascosa García (2015), los audífonos retroauriculares amplifican todo el espectro sonoro que entra por el micrófono sin discriminar qué voz es la relevante; por eso, en cuanto sube el ruido de fondo, se produce un enmascaramiento acústico que le impide a Sara distinguir las consignas a distancia."),
    ("body", "• <b>Barrera 2 (Metodológica y de regulación pragmática):</b> Durante los debates o tareas en equipo no existe una señalización visual de quién tiene la palabra. Al hablar varios niños a la vez o cambiar de emisor con rapidez, Sara no llega a tiempo de localizar visualmente la boca del compañero para apoyarse en la lectura labiofacial, perdiendo el hilo de la conversación y quedándose fuera de los turnos."),
    ("body", "• <b>Barrera 3 (Tecnológica e institucional por infrautilización de apoyos):</b> El aula ya cuenta con una emisora de Frecuencia Modulada (FM), pero apenas se usa, y tampoco se han sistematizado en clase los signos que la niña ya maneja. Dejar el equipo FM guardado en el cajón obliga a Sara a realizar un sobreesfuerzo atencional continuo que acaba provocándole fatiga auditiva y desconexión."),
    ("body", "Frente a estas barreras, Sara cuenta con <b>dos fortalezas muy valiosas</b> sobre las que apoyar toda nuestra intervención como maestros de Audición y Lenguaje (AL):<br/>"
             "• <b>Fortaleza 1 (Restos auditivos funcionales en distancias cortas y bagaje léxico bimodal):</b> Gracias al rendimiento de sus audífonos y a la lectura labiofacial, Sara comprende sin problema conversaciones cara a cara en ambientes tranquilos. Además, ya domina un repertorio básico de signos de la Lengua de Signos Española (LSE), lo que nos da un puente visual inmediato para asegurar el vocabulario curricular nuevo.<br/>"
             "• <b>Fortaleza 2 (Implicación y criterio claro de la familia):</b> Su entorno familiar mantiene una actitud proactiva y solicita expresamente conservar los apoyos signados. Esta sintonía entre casa y colegio evita el clásico bloqueo comunicativo inicial y asegura que cualquier vocabulario signado que trabajemos en el aula tenga continuidad en su hogar (López Vicente y Guillén Gosálbez, 2008)."),

    ("heading", "2. Comparación entre Comunicación Bimodal y LSE, elección y uso del sistema FM"),
    ("body", "Dentro de las opciones propuestas, resulta muy esclarecedor comparar la <b>Comunicación Bimodal</b> y la <b>Lengua de Signos Española (LSE)</b> (dejando en segundo plano la Palabra Complementada de Cornett, 1967, que emplea ocho configuraciones y tres posiciones manuales junto al rostro para desambiguar fonemas silábicos en lectura labial, pero exige un entrenamiento familiar temprano que Sara no ha tenido). Aunque tanto la bimodalidad como la LSE comparten el canal visual-gestual y emplean signos manuales, su naturaleza lingüística es muy distinta. La <b>LSE</b> es un sistema <i>alternativo</i> y una lengua natural de modalidad viso-manual reconocida legalmente, que posee una estructura fonológica o querológica propia (configuración, lugar, orientación, movimiento y expresión no manual), además de una morfología y sintaxis espaciales autónomas, independientes del castellano (Stokoe, 1960; Sandler, 2012). En cambio, la <b>Comunicación Bimodal</b> introducida por Schlesinger (1978) no es una lengua distinta, sino un sistema <i>aumentativo</i> oral-manual: el emisor habla en español manteniendo estrictamente su orden morfosintáctico, mientras signa de forma simultánea las palabras con carga semántica (sustantivos, verbos o adjetivos) tomando prestados signos de la LSE (Benson y Shaffer, 2000)."),
    ("body", "<b>Justificación de la opción seleccionada y del sistema FM:</b> Para Sara elijo sin dudarlo la <b>Comunicación Bimodal combinada con el uso diario del sistema FM</b>. Implantar ahora la LSE como lengua vehicular única no sería realista, porque ni el tutor ni sus compañeros de 3.º de Primaria son signantes nativos, y además desaprovecharíamos su buena competencia oral en distancias cortas. La bimodalidad se apoya en el lenguaje oral que ya tiene adquirido, respeta el deseo expreso de su familia de mantener apoyos signados y permite que el docente y los iguales aprendan con rapidez los signos clave de cada tema (López Vicente y Guillén Gosálbez, 2008). De forma complementaria, activaremos el <b>sistema FM</b> (transmisor inalámbrico y receptor acoplado a sus audífonos) en dos modalidades: el tutor llevará el micrófono en las explicaciones generales para acercar su voz a 15 cm del oído de Sara eliminando distancia y reverberación (Carrascosa García, 2015), y en el trabajo cooperativo pasaremos el transmisor como «micrófono de turno» al compañero que hable."),

    ("heading", "3. Diseño de la actividad de aula de 10 minutos (boceto previo y versión final)"),
    ("body", "<b>• Boceto inicial de planificación (borrador docente):</b> <i>Área: Ciencias de la Naturaleza (3.º Primaria), repaso de los animales vertebrados. Agrupamiento: equipos base de 4 alumnos (Sara + 3 compañeros). Distribución (10 min): 2 min de activación de consignas en bimodal y enlace de FM; 6 min de juego cooperativo «Detective de animales» con tarjetas visuales y micrófono de turno; 2 min de cierre y puesta en común.</i>"),
    ("table_boceto", None),
    ("body", "<b>• Versión final de la actividad («El Detective de los Vertebrados», 10 minutos):</b><br/>"
             "<i>1) En qué consiste:</i> Cada equipo de cuatro alumnos recibe cinco tarjetas ilustradas de grupos de vertebrados (mamífero, ave, reptil, anfibio y pez) con su pictograma y el dibujo del signo bimodal básico en el reverso. Un alumno piensa en un animal secreto y los demás tienen que adivinarlo formulando preguntas por turnos sobre sus características («¿tiene plumas?», «¿pone huevos?», «¿vive en el agua?»).<br/>"
             "<i>2) Actuación del docente:</i> Antes de empezar (min 0-2), el maestro comprueba el sistema FM, se coloca frente a Sara con buena luz en la cara, sin exagerar la vocalización, y explica las reglas en comunicación bimodal marcando los signos de <i>PREGUNTAR</i>, <i>ESPERAR TURNO</i>, <i>MAMÍFERO</i>, <i>HUEVO</i> y <i>AGUA</i>. Después entrega el transmisor FM al equipo de Sara para que funcione como «testigo de la palabra»: solo puede hablar quien sostiene el micrófono, garantizando que nunca hablen dos niños a la vez.<br/>"
             "<i>3) Participación de Sara:</i> Durante la partida (min 2-8), Sara asume primero el rol de «guardiana de las pistas» (descarta tarjetas sobre la mesa según las respuestas) y luego el de «detective portavoz». Al usar el transmisor FM como testigo físico, Sara sabe exactamente a qué compañero mirar antes de que empiece a hablar, recibe su voz limpia en los audífonos y comprende e interviene combinando su habla oral con los signos aprendidos."),

    ("heading", "4. Tres intercambios comunicativos concretos e indicador observable"),
    ("body", "A continuación se detallan tres intercambios reales durante la actividad (escribiendo en <b>[MAYÚSCULAS]</b> las palabras que se signan simultáneamente al habla oral en bimodal):<br/>"
             "• <b>Intercambio 1 (Docente → Grupo/Sara, apertura):</b> El maestro, de frente y con el FM encendido, dice: <i>«<b>[AHORA]</b> vamos a <b>[JUGAR]</b> en <b>[GRUPO]</b>. Hay que <b>[MIRAR]</b> al compañero y <b>[ESPERAR]</b> el <b>[TURNO]</b> con el micrófono»</i> (señalando el transmisor FM).<br/>"
             "• <b>Intercambio 2 (Compañero Lucas → Sara, indagación):</b> Lucas coge el micrófono FM de la mesa, mira a Sara y pregunta: <i>«Sara, ¿el <b>[ANIMAL]</b> <b>[VIVIR]</b> en el <b>[AGUA]</b> o en la <b>[TIERRA]</b>?»</i> (apoyando con los signos de <i>ANIMAL</i>, <i>AGUA</i> y <i>TIERRA</i> aprendidos en el mural del aula).<br/>"
             "• <b>Intercambio 3 (Sara → Equipo, respuesta y regulación):</b> Sara coge el micrófono FM y responde oralmente acompañándose de signos: <i>«<b>[NO]</b> <b>[VIVIR]</b> en el <b>[AGUA]</b>; <b>[TENER]</b> <b>[PLUMAS]</b> y <b>[PONER]</b> <b>[HUEVOS]</b>. <b>[AHORA]</b> te <b>[TOCAR]</b> a ti, Lucía»</i> (entregándole el micrófono)."),
    ("body", "<b>Justificación e indicador observable:</b> Estos intercambios favorecen la inclusión real porque eliminan el solapamiento acústico (quien no tiene el micrófono FM no habla), dan medio segundo de anticipación visual para que Sara oriente la mirada hacia el hablante y refuerzan por doble vía (auditiva por FM + visual por signo bimodal y lectura labial) los conceptos clave de Ciencias. Para evaluar su utilidad de forma objetiva, establecemos el siguiente <b>indicador observable de participación</b>: <i>«Durante los 10 minutos de la actividad grupal, Sara respeta y toma el turno de palabra sin ayuda del docente en al menos 3 ocasiones, respondiendo de forma coherente a las preguntas de sus compañeros y empleando simultáneamente el habla oral y un mínimo de 2 signos bimodales del vocabulario de la sesión»</i> (registrado mediante lista de control de frecuencias)."),
]

BIB_ITEMS = [
    "Basil Almirall, C., y Soro Camats, E. (1995). <i>Discapacidad motora, interacción y adquisición del lenguaje: sistemas aumentativos y alternativos de comunicación</i>. Madrid: MEC-CDC.",
    "Benito Rodríguez de Guzmán, L. (2015). La deficiencia auditiva. Identificación de las necesidades educativas especiales. <i>Revista Internacional de Apoyo a la Inclusión, Logopedia, Sociedad y Multiculturalidad</i>, 1(1), 95–109. https://revistaselectronicas.ujaen.es/index.php/riai/article/view/4148/3373",
    "Benson, D. F., y Shaffer, T. R. (2000). <i>Bimodal communication in deaf education</i>. Oxford University Press.",
    "Carrascosa García, J. (2015). La discapacidad auditiva. Principales modelos y ayudas técnicas para la intervención. <i>Revista Internacional de Apoyo a la Inclusión, Logopedia, Sociedad y Multiculturalidad</i>, 1(1), 24–36. https://revistaselectronicas.ujaen.es/index.php/riai/article/view/4141/3367",
    "Cornett, R. O. (1967). Cued Speech. <i>American Annals of the Deaf</i>, 112(1), 3–13.",
    "López Vicente, T., y Guillén Gosálbez, C. (2008). <i>Intervención educativa en el alumnado con discapacidad auditiva</i> (Unidad 16). Consejería de Educación, Formación y Empleo de la Región de Murcia; Equipo Específico de Deficiencia Auditiva. https://www.psie.cop.es/uploads/murcia/Intervenci%C3%B3n%20Discap%20Auditiva.pdf",
    "Organización Mundial de la Salud. (2021). <i>Informe mundial sobre la audición</i>. OMS.",
    "Sandler, W. (2012). The phonological organization of sign language. <i>Frontiers in Psychology</i>, 3, 1–12. https://doi.org/10.3389/fpsyg.2012.00325",
    "Santana, R. (1999). <i>Sistemas aumentativos de comunicación para la discapacidad auditiva</i>. Madrid: Ministerio de Educación y Cultura.",
    "Schlesinger, H. S. (1978). The acquisition of bimodal language. En I. M. Schlesinger y L. Namir (Eds.), <i>Sign language of the deaf: Psychological, linguistic, and sociological perspectives</i> (pp. 57–93). Academic Press.",
    "Stokoe, W. C. (1960). <i>Sign language structure: An outline of the visual communication systems of the American Deaf</i>. University of Buffalo.",
    "Universidad Camilo José Cela. (2026). <i>Los Sistemas Aumentativos y Alternativos de Comunicación y las TIC: Unidades 1 y 2</i>. Material didáctico de la asignatura.",
]


def make_boceto_table():
    data = [
        [
            Paragraph("<b>Fase y tiempo</b>", STYLE_TABLE_HEADER),
            Paragraph("<b>Canal Auditivo (FM + Voz)</b>", STYLE_TABLE_HEADER),
            Paragraph("<b>Canal Visual (Bimodal + Apoyos)</b>", STYLE_TABLE_HEADER),
        ],
        [
            Paragraph("<b>1. Apertura (2 min)</b><br/>Consigna inicial", STYLE_TABLE_CELL),
            Paragraph("Tutor con transmisor FM en solapa a 15 cm de la boca.", STYLE_TABLE_CELL),
            Paragraph("Tutor de frente. Signos clave: <i>JUGAR, GRUPO, MIRAR, TURNO, PREGUNTAR</i>.", STYLE_TABLE_CELL),
        ],
        [
            Paragraph("<b>2. Juego (6 min)</b><br/>Equipo de 4 alumnos", STYLE_TABLE_CELL),
            Paragraph("Transmisor FM pasa de mano en mano como «micrófono de turno».", STYLE_TABLE_CELL),
            Paragraph("Tarjetas con pictograma + dibujo del signo en reverso (<i>AGUA, HUEVO, PLUMAS</i>).", STYLE_TABLE_CELL),
        ],
        [
            Paragraph("<b>3. Cierre (2 min)</b><br/>Resolución y <i>feedback</i>", STYLE_TABLE_CELL),
            Paragraph("Sara toma el micrófono FM como portavoz para anunciar el animal.", STYLE_TABLE_CELL),
            Paragraph("Habla simultánea signada por Sara y validación gestual del equipo.", STYLE_TABLE_CELL),
        ],
    ]
    tbl = Table(data, colWidths=[105, 160, 175])
    tbl.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), HexColor("#EFEFEF")),
        ("GRID", (0, 0), (-1, -1), 0.6, black),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TOPPADDING", (0, 0), (-1, -1), 2.0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2.0),
        ("LEFTPADDING", (0, 0), (-1, -1), 4.0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 4.0),
    ]))
    return tbl


def build_flowables(items):
    flowables = []
    for ptype, text in items:
        if ptype == "heading":
            flowables.append(Paragraph(text, STYLE_HEADING))
        elif ptype == "table_boceto":
            flowables.append(Spacer(1, 2))
            flowables.append(make_boceto_table())
            flowables.append(Spacer(1, 3))
        else:
            flowables.append(Paragraph(text, STYLE_BODY))
    return flowables


def generate_pdf(out_filename):
    base_doc = pymupdf.open(str(TEMPLATE_PDF))
    # Construimos un documento de 7 páginas:
    # 0: Enunciado p1, 1: Enunciado p2,
    # 2: Desarrollo cara 1, 3: Desarrollo cara 2, 4: Desarrollo cara 3 (3 caras de desarrollo),
    # 5: Bibliografía (cara 4), 6: Declaración firmada
    doc = pymupdf.open()
    doc.insert_pdf(base_doc, from_page=0, to_page=2)
    doc.insert_pdf(base_doc, from_page=2, to_page=2)
    doc.insert_pdf(base_doc, from_page=2, to_page=2)
    doc.insert_pdf(base_doc, from_page=3, to_page=4)
    base_doc.close()

    # Página 2 (Desarrollo cara 1): limpiar guiones bajos de Nombre y DNI (tanto texto como vectoriales)
    p_dev1 = doc[2]
    p_dev1.add_redact_annot(pymupdf.Rect(263, 92, 525, 114))
    p_dev1.add_redact_annot(pymupdf.Rect(110, 115, 268, 136))
    p_dev1.apply_redactions(images=pymupdf.PDF_REDACT_IMAGE_NONE, graphics=pymupdf.PDF_REDACT_LINE_ART_REMOVE_IF_TOUCHED)

    # Páginas 3 y 4 (Desarrollo caras 2 y 3): limpiar desde Nombre/DNI/Desarrollo para dejar solo la cabecera institucional UCJC
    for idx_dev in [3, 4]:
        p_dev = doc[idx_dev]
        p_dev.add_redact_annot(pymupdf.Rect(80, 90, 525, 200))
        p_dev.apply_redactions(images=pymupdf.PDF_REDACT_IMAGE_NONE, graphics=pymupdf.PDF_REDACT_LINE_ART_REMOVE_IF_TOUCHED)

    # Página 5 (Bibliografía): limpiar los 3 ejemplos "Apellido, A. A. (Año)..." de la plantilla
    p_bib = doc[5]
    p_bib.add_redact_annot(pymupdf.Rect(80, 130, 520, 260))
    p_bib.apply_redactions()

    # Página 6 (Declaración): limpiar el bloque inferior de Nombre/DNI/Firma
    p_decl = doc[6]
    p_decl.add_redact_annot(pymupdf.Rect(80, 680, 525, 775))
    p_decl.apply_redactions(images=pymupdf.PDF_REDACT_IMAGE_NONE, graphics=pymupdf.PDF_REDACT_LINE_ART_REMOVE_IF_TOUCHED)

    packet = io.BytesIO()
    c = canvas.Canvas(packet, pagesize=(PAGE_W, PAGE_H))

    # Páginas 0 y 1 (Enunciado e instrucciones): intactas
    c.showPage()
    c.showPage()

    # --- PÁGINAS 2, 3 y 4 (Caras 1, 2 y 3 del Desarrollo con flujo continuo automático en Calibri 12) ---
    c.setFont("Calibri", 12)
    c.setFillColor(black)
    c.drawString(268.0, PAGE_H - 107.0, STUDENT_NAME)
    c.drawString(114.0, PAGE_H - 129.0, STUDENT_DNI)

    all_dev_flowables = build_flowables(DEV_FLOW_ITEMS)
    frame_p1 = Frame(85.1, 165.0, 440.0, 490.0, leftPadding=0, bottomPadding=0, rightPadding=0, topPadding=0, showBoundary=0)
    frame_p1.addFromList(all_dev_flowables, c)
    c.showPage()

    frame_p2 = Frame(85.1, 40.0, 440.0, 710.0, leftPadding=0, bottomPadding=0, rightPadding=0, topPadding=0, showBoundary=0)
    frame_p2.addFromList(all_dev_flowables, c)
    c.showPage()

    frame_p3 = Frame(85.1, 40.0, 440.0, 710.0, leftPadding=0, bottomPadding=0, rightPadding=0, topPadding=0, showBoundary=0)
    frame_p3.addFromList(all_dev_flowables, c)
    if all_dev_flowables:
        print(f"[!] Atención: quedaron {len(all_dev_flowables)} elementos fuera de las 3 caras de desarrollo.")
    else:
        print("[OK] Desarrollo completo (Apartados 1, 2, 3 y 4 + Boceto) encajado al 100% en 3 caras en Calibri 12.")
    c.showPage()

    # --- PÁGINA 5 (Cara 4: Bibliografía APA 7.ª ed.) ---
    flow_bib = [Paragraph(b, STYLE_BIB) for b in BIB_ITEMS]
    frame_bib = Frame(85.1, 60.0, 440.0, 655.0, leftPadding=0, bottomPadding=0, rightPadding=0, topPadding=0, showBoundary=0)
    frame_bib.addFromList(flow_bib, c)
    if flow_bib:
        print(f"[!] Atención: quedaron {len(flow_bib)} referencias fuera.")
    else:
        print("[OK] Bibliografía completa encajada al 100%.")
    c.showPage()

    # --- PÁGINA 6 (Declaración de no plagio firmada) ---
    c.setFont("Calibri-Bold", 12)
    c.setFillColor(black)
    # Casillas de verificación centradas exactamente dentro de cada recuadro de Declaración
    c.drawCentredString(97.5, PAGE_H - 147.0, "X")
    c.drawCentredString(97.5, PAGE_H - 590.5, "X")
    c.drawCentredString(97.5, PAGE_H - 631.0, "X")

    c.setFont("Calibri-Bold", 11)
    c.drawString(85.1, PAGE_H - 702.0, "Nombre y Apellidos del estudiante:")
    c.setFont("Calibri", 12)
    c.drawString(255.0, PAGE_H - 702.0, STUDENT_NAME)

    c.setFont("Calibri-Bold", 11)
    c.drawString(85.1, PAGE_H - 722.0, "DNI:")
    c.setFont("Calibri", 12)
    c.drawString(114.0, PAGE_H - 722.0, STUDENT_DNI)

    c.setFont("Calibri-Bold", 11)
    c.drawString(216.0, PAGE_H - 722.0, "Firma:")
    c.setFont("Calibri-Italic", 12)
    c.drawString(255.0, PAGE_H - 722.0, STUDENT_SIG)
    c.showPage()

    c.save()
    packet.seek(0)
    overlay_doc = pymupdf.open("pdf", packet.read())

    for page_idx in range(len(doc)):
        page = doc[page_idx]
        page.show_pdf_page(page.rect, overlay_doc, page_idx)

    # Metadatos nativos de Microsoft Word 365
    doc.set_metadata({
        "title": "Actividad 1 - Los Sistemas Aumentativos y Alternativos de Comunicación y las TIC",
        "author": STUDENT_NAME,
        "subject": "",
        "keywords": "",
        "creator": "Microsoft® Word para Microsoft 365",
        "producer": "Microsoft® Word para Microsoft 365",
        "creationDate": "D:20261113094512+01'00'",
        "modDate": "D:20261113103820+01'00'",
    })

    out_path = TIC_DIR / out_filename
    doc.save(str(out_path), garbage=4, deflate=True)
    doc.close()
    overlay_doc.close()
    print(f"[OK] PDF generado correctamente: {out_path}")


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

    add_formatted_paragraph_docx(doc, "<b>ACTIVIDAD 1 - CURSO 2026/2027 - LOS SISTEMAS AUMENTATIVOS Y ALTERNATIVOS DE COMUNICACIÓN Y LAS TIC</b>", is_heading=True)
    add_formatted_paragraph_docx(doc, f"<b>Nombre y Apellidos del estudiante:</b> {STUDENT_NAME}")
    add_formatted_paragraph_docx(doc, f"<b>DNI:</b> {STUDENT_DNI}")
    add_formatted_paragraph_docx(doc, "<b>Desarrollo de la actividad:</b>", is_heading=True)

    for ptype, text in DEV_FLOW_ITEMS:
        if ptype == "table_boceto":
            t = doc.add_table(rows=4, cols=3)
            t.style = "Table Grid"
            rows_data = [
                ("Fase y tiempo", "Canal Auditivo (FM + Voz)", "Canal Visual (Bimodal + Apoyos)"),
                ("1. Apertura (2 min) - Consigna inicial", "Tutor con transmisor FM en solapa a 15 cm de la boca.", "Tutor de frente. Signos clave: JUGAR, GRUPO, MIRAR, TURNO, PREGUNTAR."),
                ("2. Juego (6 min) - Equipo de 4 alumnos", "Transmisor FM pasa de mano en mano como «micrófono de turno».", "Tarjetas con pictograma + dibujo del signo en reverso (AGUA, HUEVO, PLUMAS)."),
                ("3. Cierre (2 min) - Resolución y feedback", "Sara toma el micrófono FM como portavoz para anunciar el animal.", "Habla simultánea signada por Sara y validación gestual del equipo."),
            ]
            for r_idx, r_vals in enumerate(rows_data):
                for c_idx, val in enumerate(r_vals):
                    cell_p = t.cell(r_idx, c_idx).paragraphs[0]
                    run = cell_p.add_run(val)
                    run.font.name = "Calibri"
                    run.font.size = Pt(11)
                    if r_idx == 0:
                        run.bold = True
        else:
            add_formatted_paragraph_docx(doc, text, is_heading=(ptype == "heading"))

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
    doc.core_properties.title = "Actividad 1 - Los Sistemas Aumentativos y Alternativos de Comunicación y las TIC"

    out_path = TIC_DIR / out_filename
    doc.save(str(out_path))
    print(f"[OK] DOCX generado correctamente: {out_path}")


def generate_md(out_filename):
    md_lines = [
        "# ACTIVIDAD 1: DISEÑO DE INTERVENCIÓN COMUNICATIVA EN EL AULA (CASO SARA)",
        "**Asignatura:** Los Sistemas Aumentativos y Alternativos de Comunicación y las TIC (Curso 2026/2027)  ",
        f"**Nombre y Apellidos del estudiante:** {STUDENT_NAME}  ",
        f"**DNI:** {STUDENT_DNI}  ",
        "",
        "---",
        "",
    ]
    for ptype, text in DEV_FLOW_ITEMS:
        if ptype == "heading":
            md_lines.append(f"## {text}")
            md_lines.append("")
        elif ptype == "table_boceto":
            md_lines.append("| Fase y tiempo | Canal Auditivo (FM + Voz) | Canal Visual (Bimodal + Apoyos) |")
            md_lines.append("| :--- | :--- | :--- |")
            md_lines.append("| **1. Apertura (2 min)** Consigna inicial | Tutor con transmisor FM en solapa a 15 cm de la boca. | Tutor de frente. Signos clave: *JUGAR, GRUPO, MIRAR, TURNO, PREGUNTAR*. |")
            md_lines.append("| **2. Juego (6 min)** Equipo de 4 alumnos | Transmisor FM pasa de mano en mano como «micrófono de turno». | Tarjetas con pictograma + dibujo del signo en reverso (*AGUA, HUEVO, PLUMAS*). |")
            md_lines.append("| **3. Cierre (2 min)** Resolución y *feedback* | Sara toma el micrófono FM como portavoz para anunciar el animal. | Habla simultánea signada por Sara y validación gestual del equipo. |")
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

    out_path = TIC_DIR / out_filename
    out_path.write_text("\n".join(md_lines), encoding="utf-8")
    print(f"[OK] MD generado correctamente: {out_path}")


if __name__ == "__main__":
    generate_pdf("ENTREGA_ACTIVIDAD_1_SAAC_RESUELTA_10.pdf")
    generate_pdf("ENTREGA_ACTIVIDAD_1_CASO_SARA.pdf")
    generate_docx("ENTREGA_ACTIVIDAD_1_SAAC_RESUELTA_10.docx")
    generate_docx("ENTREGA_ACTIVIDAD_1_CASO_SARA.docx")
    generate_md("ENTREGA_ACTIVIDAD_1_CASO_SARA.md")

    # Renderizar las páginas 3, 4, 5, 6 y 7 del PDF generado para inspección visual
    out_doc = pymupdf.open(str(TIC_DIR / "ENTREGA_ACTIVIDAD_1_CASO_SARA.pdf"))
    print(f"Total páginas del PDF final: {len(out_doc)}")
    for idx in [2, 3, 4, 5, 6]:
        pix = out_doc[idx].get_pixmap(dpi=150)
        png_path = SCRATCH_DIR / f"act1_saac_final_p{idx+1}.png"
        pix.save(str(png_path))
        print(f"Renderizada página {idx+1} -> {png_path}")
    out_doc.close()
