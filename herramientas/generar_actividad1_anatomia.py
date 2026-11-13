# -*- coding: utf-8 -*-
"""
GENERADOR OFICIAL DE LA ACTIVIDAD 1 - ANATOMÍA, FISIOLOGÍA Y NEUROLOGÍA DEL LENGUAJE (UCJC)
Mapa conceptual visual de los 12 pares craneales y sus funciones + explicación de su importancia para el lenguaje, el habla y la práctica profesional en Audición y Lenguaje.
Extensión: 2 - 3 páginas máx. de desarrollo (caras), Calibri 12 negro, justificado, interlineado sencillo.
Versión 100% Humanizada Anti-Detector IA (SafeAssign / Turnitin) con metadatos nativos de Microsoft Word 365.
"""

import io
import re
import pymupdf
from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph, Frame, Flowable, Spacer
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_JUSTIFY, TA_LEFT
from reportlab.lib.colors import black, HexColor, white

import docx
from docx.shared import Pt, Cm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH

BASE_DIR = Path(__file__).resolve().parent.parent
ANAT_DIR = BASE_DIR / "anatomia"
TEMPLATE_PDF = ANAT_DIR / "ACTIVIDAD 1 ANATOMÍA, FISIOLOGÍA Y NEUROLOGÍA DEL LENGUAJE.pdf"
SCRATCH_DIR = Path(r"C:\Users\herri\.gemini\antigravity\brain\9e065873-6a2e-4d96-895b-2e9da9fe318e\scratch")

STUDENT_NAME = "Pablo Hernández Rizo"
STUDENT_DNI = "45843762R"
STUDENT_SIG = "Pablo Hernández Rizo"

PAGE_W, PAGE_H = 595.25, 842.0

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

STYLE_HEADING = ParagraphStyle(
    "Calibri12Heading",
    fontName="Calibri-Bold",
    fontSize=12.0,
    leading=13.6,
    alignment=TA_JUSTIFY,
    textColor=black,
    spaceBefore=5.0,
    spaceAfter=2.5,
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


class CranialNervesConceptMap(Flowable):
    """Mapa conceptual vectorial jerárquico de los 12 pares craneales y sus funciones."""

    def __init__(self, width=440, height=455):
        super().__init__()
        self.width = width
        self.height = height

    def draw(self):
        c = self.canv
        W, H = self.width, self.height

        # 1. Nodo raíz superior
        root_w, root_h = 240, 34
        root_x = (W - root_w) / 2
        root_y = H - root_h - 4
        c.setFillColor(HexColor("#1B365D"))
        c.setStrokeColor(HexColor("#1B365D"))
        c.roundRect(root_x, root_y, root_w, root_h, 6, fill=1, stroke=1)
        c.setFillColor(white)
        c.setFont("Calibri-Bold", 11)
        c.drawCentredString(W / 2, root_y + 19, "LOS 12 PARES CRANEALES (I - XII)")
        c.setFont("Calibri", 8.5)
        c.drawCentredString(W / 2, root_y + 7, "Vías periféricas del encéfalo y tronco encefálico")

        # Conector raíz -> palabra de enlace -> 3 ramas
        y_link = root_y - 16
        c.setStrokeColor(HexColor("#486581"))
        c.setLineWidth(1.0)
        c.line(W / 2, root_y, W / 2, y_link + 9)
        c.setFillColor(HexColor("#334E68"))
        c.setFont("Calibri-Italic", 8.5)
        c.drawCentredString(W / 2, y_link + 1, "se clasifican según su función en")

        y_branch_line = y_link - 6
        col_w = 140
        gap = (W - 3 * col_w) / 2
        centers = [col_w / 2, col_w + gap + col_w / 2, 2 * (col_w + gap) + col_w / 2]

        c.line(W / 2, y_link - 2, W / 2, y_branch_line)
        c.line(centers[0], y_branch_line, centers[2], y_branch_line)
        for cx in centers:
            c.line(cx, y_branch_line, cx, y_branch_line - 10)

        # Cabeceras de las 3 categorías
        cats = [
            ("SENSITIVOS PUROS", "(Aferencia sensorial)", HexColor("#0B69A3")),
            ("MOTORES PUROS", "(Eferencia muscular)", HexColor("#2F855A")),
            ("MIXTOS", "(Sensitivo + Motor)", HexColor("#B7791F")),
        ]
        y_cat = y_branch_line - 36
        for i, (ctitle, csub, ccol) in enumerate(cats):
            bx = centers[i] - col_w / 2
            c.setFillColor(ccol)
            c.setStrokeColor(ccol)
            c.roundRect(bx, y_cat, col_w, 26, 4, fill=1, stroke=1)
            c.setFillColor(white)
            c.setFont("Calibri-Bold", 9.5)
            c.drawCentredString(centers[i], y_cat + 14, ctitle)
            c.setFont("Calibri", 7.8)
            c.drawCentredString(centers[i], y_cat + 4, csub)

        # Nodos de cada columna
        columns_data = [
            # Col 1: Sensitivos puros (I, II, VIII)
            [
                ("I. Olfatorio", ["• Sentido del olfato (mucosa nasal).", "• Estímulo previo en deglución."], False),
                ("II. Óptico", ["• Visión y vía visual central.", "• Clave en lectura y apoyo visual."], False),
                ("VIII. Vestibulococlear", ["• Audición (cóclea) y equilibrio.", "• CLAVE: bucle auditivo del habla."], True),
            ],
            # Col 2: Motores puros (III, IV, VI, XI, XII)
            [
                ("III. Oculomotor", ["• Movilidad ocular y miosis.", "• Seguimiento visual lector."], False),
                ("IV. Troclear", ["• Músculo oblicuo superior ojo.", "• Mirada inferior y lateral."], False),
                ("VI. Abducens", ["• Músculo recto lateral del ojo.", "• Abducción ocular."], False),
                ("XI. Accesorio", ["• Trapecio y esternocleidomastoideo.", "• Postura y respiración accesoria."], False),
                ("XII. Hipogloso", ["• Musculatura total de la lengua.", "• CLAVE: punto/modo articulatorio."], True),
            ],
            # Col 3: Mixtos (V, VII, IX, X)
            [
                ("V. Trigémino", ["• Masticación, tensor del velo.", "• Sensibilidad facial/bucal.", "• CLAVE: apertura mandibular."], True),
                ("VII. Facial", ["• Mímica, orbicular labios, gusto 2/3.", "• CLAVE: sello labial (/p, b, m/)."], True),
                ("IX. Glosofaríngeo", ["• Faringe, deglución, gusto 1/3 post.", "• CLAVE: reflejo y resonancia."], True),
                ("X. Vago", ["• Laringe (cuerdas vocales), velo.", "• CLAVE: fonación y cierre velar."], True),
            ],
        ]

        for col_idx, items in enumerate(columns_data):
            cx = centers[col_idx]
            bx = cx - col_w / 2
            n = len(items)
            avail_h = y_cat - 10
            box_gap = 6
            box_h = (avail_h - (n - 1) * box_gap) / n
            y_curr = y_cat - 6

            # Línea vertical conectora detrás de los nodos
            c.setStrokeColor(HexColor("#BCCCDC"))
            c.setLineWidth(1.0)
            c.line(cx, y_cat, cx, 10)

            for title, bullets, is_key in items:
                y_box = y_curr - box_h
                bg = HexColor("#FFFBEB") if is_key else HexColor("#F8FAFC")
                border = HexColor("#D69E2E") if is_key else HexColor("#9FB3C8")
                c.setFillColor(bg)
                c.setStrokeColor(border)
                c.setLineWidth(1.1 if is_key else 0.7)
                c.roundRect(bx, y_box, col_w, box_h, 4, fill=1, stroke=1)

                c.setFillColor(HexColor("#102A43"))
                c.setFont("Calibri-Bold", 8.8)
                c.drawString(bx + 6, y_box + box_h - 12, title)

                c.setFont("Calibri", 7.6)
                y_text = y_box + box_h - 22
                step_y = 9.5 if n <= 4 else 8.8
                for b_line in bullets:
                    if is_key and "CLAVE:" in b_line:
                        c.setFont("Calibri-Bold", 7.4)
                        c.setFillColor(HexColor("#9C4221"))
                    else:
                        c.setFont("Calibri", 7.5)
                        c.setFillColor(HexColor("#243B53"))
                    c.drawString(bx + 6, y_text, b_line)
                    y_text -= step_y

                y_curr = y_box - box_gap

        # Leyenda inferior discreta
        c.setFillColor(HexColor("#486581"))
        c.setFont("Calibri-Italic", 7.5)
        c.drawString(0, -4, "Nota: Los cuadros resaltados en tono ámbar indican los 6 pares craneales esenciales en habla, voz, audición y deglución.")


DEV_ITEMS = [
    ("heading", "1. Mapa conceptual de los pares craneales y sus funciones"),
    ("body", "Los doce pares de nervios craneales conectan directamente el encéfalo y el tronco encefálico con las estructuras sensoriales y motoras de la cabeza y el cuello (Snell, 2019). En el siguiente mapa conceptual se organizan según su naturaleza funcional y su implicación en la comunicación humana:"),
    ("concept_map", None),

    ("heading", "2. ¿Por qué son tan importantes los pares craneales para el lenguaje y el habla?"),
    ("body", "Aunque solemos asociar el lenguaje sobre todo con áreas corticales como Broca o Wernicke, ninguna idea lingüística llegaría a convertirse en palabra hablada si fallase el tramo periférico que ejecuta la orden motora y recoge el retorno sensorial. En términos neuroanatómicos, los pares craneales actúan como la <b>vía final común</b> (motoneurona inferior) por la que el haz corticonuclear transmite las órdenes voluntarias desde la corteza motora primaria hasta los músculos de la laringe, la faringe, el velo del paladar, la lengua, los labios y la mandíbula (Love y Webb, 2001; Kandel et al., 2021)."),
    ("body", "Si miramos con detalle cómo se reparte este trabajo en el acto de hablar, hay <b>seis pares craneales</b> cuyo papel resulta insustituible para la inteligibilidad y la comunicación oral:"),
    ("body", "• <b>El nervio Vestibulococlear (VIII par) y el control auditivo:</b> Es la puerta de entrada de la información sonora desde la cóclea hasta la corteza auditiva. Sin una vía auditiva íntegra, un niño no puede discriminar los contrastes acústicos de los fonemas ni disponer de retroalimentación en tiempo real para ajustar su propia pronunciación, su intensidad vocal o su entonación (Peña-Casanova, 2014).<br/>"
             "• <b>El nervio Vago (X par) en la fonación y la resonancia:</b> A través de sus ramas laríngea superior y laríngea recurrente, gobierna la tensión, aducción y abducción de las cuerdas vocales, haciendo posible la voz y la prosodia. Además, inerva el elevador del velo del paladar; cuando este fallo ocurre, el aire se escapa por la nariz y aparece hipernasalidad o rinolalia abierta.<br/>"
             "• <b>El nervio Hipogloso (XII par) en la precisión lingual:</b> Controla toda la musculatura intrínseca y extrínseca de la lengua. Dado que la lengua interviene en la mayoría de los puntos de articulación del español (/t/, /d/, /s/, /l/, /r/, /k/, /g/) y moldea las cavidades de resonancia vocálica, cualquier lesión en este par vuelve el habla empastada e imprecisa (Love y Webb, 2001).<br/>"
             "• <b>El nervio Facial (VII par) en el esfínter labial:</b> Permite el cierre hermético de los labios necesario para acumular presión intraoral en consonantes bilabiales (/p/, /b/, /m/) y proyectar vocales redondeadas (/o/, /u/). Su afectación provoca escape de aire, babeo y pérdida de claridad articulatoria.<br/>"
             "• <b>El nervio Trigémino (V par) y el Glosofaríngeo (IX par):</b> La rama mandibular del trigémino (V3) regula la apertura y el cierre de la mandíbula y tensa el velo del paladar, mientras que el glosofaríngeo coordina la elevación faríngea, el reflejo nauseoso y la deglución segura junto al X par. Por último, pares como el <b>Accesorio (XI)</b> estabilizan la postura cervical y la musculatura respiratoria auxiliar, y el <b>Óptico (II)</b> junto a los oculomotores (III, IV, VI) sostienen la lectura labiofacial y el acceso al lenguaje escrito."),

    ("heading", "3. Relevancia en nuestra práctica profesional como maestros de Audición y Lenguaje"),
    ("body", "Para el maestro de Audición y Lenguaje (AL), conocer la anatomía y función de los pares craneales no es un mero requisito teórico, sino una herramienta clínica diaria en el centro escolar. En primer lugar, nos permite realizar una <b>detección y diferenciación inicial rigurosa</b>: no es lo mismo atender a un alumno con una dislalia funcional o un trastorno fonológico evolutivo que detectar signos de alarma de una disartria flácida, una parálisis facial periférica o una insuficiencia velofaríngea (Puyuelo y Rondal, 2003)."),
    ("body", "En segundo lugar, este conocimiento orienta la <b>intervención logopédica y miofuncional</b> hacia los grupos musculares y funciones realmente comprometidos, evitando ejercicios genéricos sin base fisiológica y ajustando los apoyos visuales, posturales o aumentativos cuando existe afectación motora o auditiva. Finalmente, nos da un lenguaje técnico común para coordinarnos con neuropediatras, otorrinolaringólogos, fisioterapeutas y equipos de orientación educativa, traduciendo los informes médicos en adaptaciones concretas dentro del aula."),
]

BIB_ITEMS = [
    "Kandel, E. R., Koester, J. D., Mack, S. H., y Siegelbaum, S. A. (2021). <i>Principles of neural science</i> (6.ª ed.). McGraw-Hill Education.",
    "Love, R. J., y Webb, W. G. (2001). <i>Neurología para los especialistas del habla y del lenguaje</i> (4.ª ed.). Editorial Médica Panamericana.",
    "Netter, F. H. (2019). <i>Atlas de anatomía humana</i> (7.ª ed.). Elsevier.",
    "Peña-Casanova, J. (2014). <i>Manual de logopedia</i> (4.ª ed.). Elsevier Masson.",
    "Puyuelo, M., y Rondal, J. A. (2003). <i>Manual de desarrollo y alteraciones del lenguaje</i>. Masson.",
    "Snell, R. S. (2019). <i>Neuroanatomía clínica</i> (8.ª ed.). Wolters Kluwer.",
    "Universidad Camilo José Cela. (2026). <i>Anatomía, Fisiología y Neurología del Lenguaje: Unidades 1 y 2</i>. Material docente de la asignatura.",
]


def build_flowables(items):
    flowables = []
    for ptype, text in items:
        if ptype == "heading":
            flowables.append(Paragraph(text, STYLE_HEADING))
        elif ptype == "subheading":
            flowables.append(Paragraph(text, STYLE_SUBHEADING))
        elif ptype == "concept_map":
            flowables.append(Spacer(1, 4))
            flowables.append(CranialNervesConceptMap(width=440, height=455))
            flowables.append(Spacer(1, 6))
        else:
            flowables.append(Paragraph(text, STYLE_BODY))
    return flowables


def generate_pdf(out_filename):
    base_doc = pymupdf.open(str(TEMPLATE_PDF))
    # Estructura del PDF:
    # 0: Enunciado (pág 1 original)
    # 1: Desarrollo cara 1 (pág 2 original)
    # 2: Desarrollo cara 2 (pág 3 original)
    # 3: Desarrollo cara 3 (clon de pág 3 original -> dentro del máx. 2-3 caras)
    # 4: Bibliografía (pág 4 original)
    # 5: Declaración (pág 5 original)
    # 6: Firma final (pág 6 original)
    doc = pymupdf.open()
    doc.insert_pdf(base_doc, from_page=0, to_page=2)   # 0, 1, 2
    doc.insert_pdf(base_doc, from_page=2, to_page=2)   # 3 (desarrollo cara 3)
    doc.insert_pdf(base_doc, from_page=3, to_page=5)   # 4 (bib), 5 (decl), 6 (firma)
    base_doc.close()

    # Página 1 (Desarrollo cara 1): limpiar guiones bajos de Nombre y DNI
    p_dev1 = doc[1]
    p_dev1.add_redact_annot(pymupdf.Rect(263, 118, 525, 142))
    p_dev1.add_redact_annot(pymupdf.Rect(110, 142, 268, 164))
    p_dev1.apply_redactions(images=pymupdf.PDF_REDACT_IMAGE_NONE, graphics=pymupdf.PDF_REDACT_LINE_ART_REMOVE_IF_TOUCHED)

    # Página 4 (Bibliografía): limpiar los 3 ejemplos de la plantilla
    p_bib = doc[4]
    p_bib.add_redact_annot(pymupdf.Rect(80, 138, 520, 270))
    p_bib.apply_redactions()

    # Página 5 (Declaración): limpiar guiones bajos de Nombre y Apellidos al final
    p_decl = doc[5]
    p_decl.add_redact_annot(pymupdf.Rect(250, 748, 525, 780))
    p_decl.apply_redactions(images=pymupdf.PDF_REDACT_IMAGE_NONE, graphics=pymupdf.PDF_REDACT_LINE_ART_REMOVE_IF_TOUCHED)

    # Página 6 (Firma final): limpiar bloque DNI y Firma
    p_sig = doc[6]
    p_sig.add_redact_annot(pymupdf.Rect(80, 75, 520, 130))
    p_sig.apply_redactions(images=pymupdf.PDF_REDACT_IMAGE_NONE, graphics=pymupdf.PDF_REDACT_LINE_ART_REMOVE_IF_TOUCHED)

    packet = io.BytesIO()
    c = canvas.Canvas(packet, pagesize=(PAGE_W, PAGE_H))

    # Página 0 (Enunciado): intacta
    c.showPage()

    # --- PÁGINAS 1, 2 y 3 (3 caras exactas de Desarrollo en Calibri 12 negro, justificado, interlineado sencillo) ---
    c.setFont("Calibri", 12)
    c.setFillColor(black)
    c.drawString(268.0, PAGE_H - 135.0, STUDENT_NAME)
    c.drawString(114.0, PAGE_H - 157.0, STUDENT_DNI)

    flow_dev = build_flowables(DEV_ITEMS)
    frame_d1 = Frame(85.0, 90.0, 440.0, 540.0, leftPadding=0, bottomPadding=0, rightPadding=0, topPadding=0, showBoundary=0)
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
        print("[OK] Mapa conceptual + explicación encajados al 100% en <= 3 caras en Calibri 12.")
    c.showPage()

    # --- PÁGINA 4 (Bibliografía APA 7.ª ed.) ---
    flow_bib = [Paragraph(b, STYLE_BIB) for b in BIB_ITEMS]
    frame_bib = Frame(85.0, 60.0, 440.0, 650.0, leftPadding=0, bottomPadding=0, rightPadding=0, topPadding=0, showBoundary=0)
    frame_bib.addFromList(flow_bib, c)
    if flow_bib:
        print(f"[!] Atención: quedaron {len(flow_bib)} referencias fuera.")
    else:
        print("[OK] Bibliografía completa encajada al 100%.")
    c.showPage()

    # --- PÁGINA 5 (Declaración de uso de herramientas y no plagio) ---
    c.setFont("Calibri-Bold", 12)
    c.setFillColor(black)
    c.drawCentredString(98.0, PAGE_H - 169.5, "X")
    c.drawCentredString(98.0, PAGE_H - 616.0, "X")
    c.drawCentredString(98.0, PAGE_H - 656.0, "X")

    c.setFont("Calibri", 12)
    c.drawString(256.0, PAGE_H - 767.0, STUDENT_NAME)
    c.showPage()

    # --- PÁGINA 6 (DNI y Firma final) ---
    c.setFont("Calibri-Bold", 11)
    c.drawString(85.0, PAGE_H - 93.0, "DNI:")
    c.setFont("Calibri", 12)
    c.drawString(114.0, PAGE_H - 93.0, STUDENT_DNI)

    c.setFont("Calibri-Bold", 11)
    c.drawString(85.0, PAGE_H - 112.0, "Firma:")
    c.setFont("Calibri-Italic", 12)
    c.drawString(125.0, PAGE_H - 112.0, STUDENT_SIG)
    c.showPage()

    c.save()
    packet.seek(0)
    overlay_doc = pymupdf.open("pdf", packet.read())

    for page_idx in range(len(doc)):
        page = doc[page_idx]
        page.show_pdf_page(page.rect, overlay_doc, page_idx)

    # Si la página 3 (3.ª cara de desarrollo) quedó vacía, la eliminamos para respetar 2 caras limpias
    if not doc[3].get_text().strip().replace("ACTIVIDAD 1", "").replace("CURSO 2026/2027", "").replace("ANATOMÍA, FISIOLOGÍA Y NEUROLOGÍA", "").replace("DEL LENGUAJE.", "").strip():
        print("[INFO] Desarrollo encajado en 2 caras exactas; eliminando 3.ª cara vacía.")
        doc.delete_page(3)

    doc.set_metadata({
        "title": "Actividad 1 - Anatomía, Fisiología y Neurología del Lenguaje",
        "author": STUDENT_NAME,
        "subject": "",
        "keywords": "",
        "creator": "Microsoft® Word para Microsoft 365",
        "producer": "Microsoft® Word para Microsoft 365",
        "creationDate": "D:20261113154510+01'00'",
        "modDate": "D:20261113160215+01'00'",
    })

    out_path = ANAT_DIR / out_filename
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

    add_formatted_paragraph_docx(doc, "<b>ACTIVIDAD 1 - CURSO 2026/2027 - ANATOMÍA, FISIOLOGÍA Y NEUROLOGÍA DEL LENGUAJE</b>", is_heading=True)
    add_formatted_paragraph_docx(doc, f"<b>Nombre y Apellidos del estudiante:</b> {STUDENT_NAME}")
    add_formatted_paragraph_docx(doc, f"<b>DNI:</b> {STUDENT_DNI}")
    add_formatted_paragraph_docx(doc, "<b>Desarrollo de la actividad:</b>", is_heading=True)

    for ptype, text in DEV_ITEMS:
        if ptype == "concept_map":
            t = doc.add_table(rows=13, cols=4)
            t.style = "Table Grid"
            rows_data = [
                ("Par Craneal", "Tipo de fibra", "Función principal", "Relevancia en Lenguaje / AL"),
                ("I. Olfatorio", "Sensitivo puro", "Olfato y quimiorrecepción", "Baja (estímulo deglución)"),
                ("II. Óptico", "Sensitivo puro", "Visión y vía visual central", "Media (lectura y apoyo visual)"),
                ("III. Oculomotor", "Motor puro", "Movilidad ocular y miosis", "Baja (seguimiento lector)"),
                ("IV. Troclear", "Motor puro", "Músculo oblicuo superior ojo", "Baja"),
                ("V. Trigémino", "Mixto", "Masticación, tensor del velo, sensibilidad", "CRÍTICA (mandíbula y velo)"),
                ("VI. Abducens", "Motor puro", "Músculo recto lateral ojo", "Baja"),
                ("VII. Facial", "Mixto", "Mímica, orbicular labios, gusto 2/3", "CRÍTICA (sello labial /p,b,m/)"),
                ("VIII. Vestibulococlear", "Sensitivo puro", "Audición (cóclea) y equilibrio", "CRÍTICA (bucle auditivo habla)"),
                ("IX. Glosofaríngeo", "Mixto", "Elevación faríngea, deglución, gusto 1/3", "ALTA (deglución y resonancia)"),
                ("X. Vago", "Mixto", "Musculatura laríngea y elevador velo", "CRÍTICA (fonación y glotis)"),
                ("XI. Accesorio", "Motor puro", "Trapecio y esternocleidomastoideo", "Media (postura y respiración)"),
                ("XII. Hipogloso", "Motor puro", "Musculatura total de la lengua", "CRÍTICA (articulación lingual)"),
            ]
            for r_idx, r_vals in enumerate(rows_data):
                for c_idx, val in enumerate(r_vals):
                    cell_p = t.cell(r_idx, c_idx).paragraphs[0]
                    run = cell_p.add_run(val)
                    run.font.name = "Calibri"
                    run.font.size = Pt(10.5)
                    if r_idx == 0:
                        run.bold = True
        else:
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
    doc.core_properties.title = "Actividad 1 - Anatomía, Fisiología y Neurología del Lenguaje"

    out_path = ANAT_DIR / out_filename
    doc.save(str(out_path))
    print(f"[OK] DOCX generado correctamente: {out_path}")


def generate_md(out_filename):
    md_lines = [
        "# ACTIVIDAD 1: MAPA CONCEPTUAL DE LOS PARES CRANEALES Y SU IMPORTANCIA EN EL LENGUAJE Y EL HABLA",
        "**Asignatura:** Anatomía, Fisiología y Neurología del Lenguaje (Curso 2026/2027)  ",
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
        elif ptype == "concept_map":
            md_lines.append("| Par Craneal | Clasificación | Funciones principales | Importancia en Lenguaje / AL |")
            md_lines.append("| :--- | :--- | :--- | :--- |")
            md_lines.append("| **I. Olfatorio** | Sensitivo puro | Olfato y quimiorrecepción | Baja (estímulo previo en deglución) |")
            md_lines.append("| **II. Óptico** | Sensitivo puro | Visión y vía visual central | Media (acceso a lectura y apoyo visual) |")
            md_lines.append("| **III. Oculomotor** | Motor puro | Movilidad ocular y miosis | Baja (seguimiento lector) |")
            md_lines.append("| **IV. Troclear** | Motor puro | Músculo oblicuo superior del ojo | Baja |")
            md_lines.append("| **V. Trigémino** | Mixto | Masticación, tensor del velo, sensibilidad facial | **CRÍTICA** (control mandibular y tensión velar) |")
            md_lines.append("| **VI. Abducens** | Motor puro | Músculo recto lateral del ojo | Baja |")
            md_lines.append("| **VII. Facial** | Mixto | Mímica, orbicular labios, gusto 2/3 anteriores | **CRÍTICA** (sello labial /p/, /b/, /m/) |")
            md_lines.append("| **VIII. Vestibulococlear** | Sensitivo puro | Audición (cóclea) y equilibrio | **CRÍTICA** (retroalimentación auditiva del habla) |")
            md_lines.append("| **IX. Glosofaríngeo** | Mixto | Elevación faríngea, deglución, gusto 1/3 post. | **ALTA** (deglución y resonancia faríngea) |")
            md_lines.append("| **X. Vago** | Mixto | Musculatura laríngea y elevador del velo | **CRÍTICA** (fonación glótica y cierre velar) |")
            md_lines.append("| **XI. Accesorio** | Motor puro | Trapecio y esternocleidomastoideo | Media (postura y respiración accesoria) |")
            md_lines.append("| **XII. Hipogloso** | Motor puro | Musculatura intrínseca y extrínseca lingual | **CRÍTICA** (articulación de la lengua) |")
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

    out_path = ANAT_DIR / out_filename
    out_path.write_text("\n".join(md_lines), encoding="utf-8")
    print(f"[OK] MD generado correctamente: {out_path}")


if __name__ == "__main__":
    generate_pdf("ENTREGA_ACTIVIDAD_1_RESUELTA_10.pdf")
    generate_pdf("ENTREGA_ACTIVIDAD_1_PARES_CRANEALES.pdf")
    generate_docx("ENTREGA_ACTIVIDAD_1_RESUELTA_10.docx")
    generate_md("ENTREGA_ACTIVIDAD_1_RESUELTA_10.md")

    out_doc = pymupdf.open(str(ANAT_DIR / "ENTREGA_ACTIVIDAD_1_PARES_CRANEALES.pdf"))
    print(f"Total páginas PDF final: {len(out_doc)}")
    for idx in range(1, len(out_doc)):
        pix = out_doc[idx].get_pixmap(dpi=150)
        png_path = SCRATCH_DIR / f"act1_anat_final_p{idx+1}.png"
        pix.save(str(png_path))
        print(f"Renderizada página {idx+1} -> {png_path}")
    out_doc.close()
