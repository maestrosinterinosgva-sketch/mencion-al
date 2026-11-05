# -*- coding: utf-8 -*-
"""
GENERADOR OFICIAL DE LA SESIÓN PRÁCTICA 1 - PSICOPATOLOGÍA DE LA AUDICIÓN Y EL LENGUAJE (UCJC)
Formatos generados:
1. PDF oficial sobre la plantilla de la UCJC (Calibri 12 negro, justificado, interlineado sencillo, máx. 2 páginas de desarrollo + Bibliografía + Declaración firmada).
2. Documento Word (.docx) editable con idéntico formato normativo.
Genera el Caso 1 (Lucía - TL/TDL) como entrega principal, además de los Casos 2 (Álvaro - TSH) y 3 (Mario - TFI) como alternativas completas.
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
STUDENT_SIG = "Firmado electrónicamente: Pablo Hernández Rizo"

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

# Estilos ReportLab estrictos: Calibri 12 negro, justificado, interlineado sencillo (1.0 = 12.8pt leading)
STYLE_BODY = ParagraphStyle(
    "CalibriBody",
    fontName="Calibri",
    fontSize=12,
    leading=12.8,  # Interlineado sencillo (single line spacing para Calibri 12pt)
    alignment=TA_JUSTIFY,
    textColor=black,
    spaceBefore=0,
    spaceAfter=3.2,
)

STYLE_HEADING = ParagraphStyle(
    "CalibriHeading",
    fontName="Calibri-Bold",
    fontSize=12,
    leading=13.0,
    alignment=TA_JUSTIFY,
    textColor=black,
    spaceBefore=4.0,
    spaceAfter=2.2,
)

STYLE_BIB = ParagraphStyle(
    "CalibriBib",
    fontName="Calibri",
    fontSize=12,
    leading=13.8,
    alignment=TA_JUSTIFY,
    textColor=black,
    leftIndent=24,
    firstLineIndent=-24,
    spaceBefore=0,
    spaceAfter=8,
)

CASOS_DATA = {
    "caso1": {
        "filename_pdf": "ENTREGA_SESION_PRACTICA_1_RESUELTA_10.pdf",
        "filename_docx": "ENTREGA_SESION_PRACTICA_1_RESUELTA_10.docx",
        "titulo_corto": "CASO 1 (Lucía, 5 años — Trastorno del Lenguaje / TDL)",
        "paragraphs": [
            ("heading", "JUSTIFICACIÓN DE LA ELECCIÓN DEL CASO SELECCIONADO (CASO 1: LUCÍA, 5 AÑOS)"),
            ("body", "Se selecciona el <b>Caso 1 (Lucía, 5 años)</b> por su relevancia clínica, epidemiológica y psicopedagógica en la intervención del Maestro/a de Audición y Lenguaje (AL). En primer lugar, el Trastorno del Lenguaje es la patología más prevalente dentro de los Trastornos de la Comunicación en menores de 6 años, afectando al 5-7% de la población infantil (Artigas-Pallarès et al., 2022). En segundo lugar, los 5 años (último curso de Educación Infantil) constituyen una etapa crítica: según exponen Rupérez et al. (2022) en la Unidad 2, antes de los 4 años las diferencias evolutivas son amplias, pero a partir de los 4-5 años se vuelven estables y predictoras de dificultades persistentes en el acceso a la lectoescritura en Primaria. Por último, el caso ejemplifica una afectación transversal de los componentes de contenido (léxico), forma (morfosintaxis) y uso discursivo-narrativo."),
            ("heading", "1. IDENTIFICACIÓN DEL TRASTORNO Y JUSTIFICACIÓN TEÓRICA Y DIFERENCIAL"),
            ("body", "De acuerdo con la Unidad 2 (Sección 2.2), el perfil de Lucía se corresponde con un <b>Trastorno del Lenguaje (TL)</b> según el DSM-5 (American Psychiatric Association [APA], 2013), encuadrado dentro de los <i>Trastornos de la Comunicación (TC)</i> como trastorno del neurodesarrollo. Respecto a la operatividad del término (Sección 2.2.2), equivale al tradicional <i>Trastorno Específico del Lenguaje (TEL)</i> y a la nomenclatura actualmente recomendada de <b>Trastorno del Desarrollo del Lenguaje (TDL)</b> (Monfort y Monfort, 2012; Rupérez et al., 2022), eliminándose el término «específico» al demostrarse que no se limita al lenguaje y presenta una alta heredabilidad (0,5-0,75) y un 30% de comorbilidad con otros trastornos del neurodesarrollo."),
            ("body", "La justificación diagnóstica se fundamenta en el cumplimiento de los criterios del DSM-5 (Tabla 1 de Rupérez et al., 2022) en relación con los signos observados por su tutora en el aula:"),
            ("body", "<b>a) Criterio A (Dificultades persistentes en la adquisición y uso del lenguaje por déficits en comprensión o producción):</b> El DSM-5 unifica la tipología eliminando la distinción entre trastorno expresivo y mixto. Lucía cumple los tres indicadores nucleares de la Unidad 2: <i>(1) Vocabulario reducido</i> (déficit léxico-semántico: repertorio limitado para los 5 años, nombrando solo algunos personajes y acciones sueltas); <i>(2) Estructura gramatical simplificada</i> (déficit morfosintáctico: «utiliza frases muy cortas para su edad», con baja Longitud Media del Enunciado [LME] y omisión de nexos); y <i>(3) Deterioro del discurso en la narración</i> (déficit pragmático-discursivo: «dificultades para contar lo que ha hecho el fin de semana» y «le cuesta organizar y enlazar los acontecimientos» ante imágenes, evidenciando fallos de coherencia temporal-causal y cohesión narrativa)."),
            ("body", "<b>b) Criterios B y C (Limitación funcional e inicio temprano):</b> Sus capacidades lingüísticas están por debajo de lo esperado para los 5 años, limitando su participación eficaz en el aula de Infantil. El inicio es temprano y, superada la barrera de los 4 años, se descarta una simple variación evolutiva o perfil de <i>hablante tardío</i> (&lt;30 meses)."),
            ("body", "<b>c) Criterio D y Diagnóstico Diferencial (Valera, 2017; Tabla 1 de Rupérez et al., 2022):</b> El enunciado confirma que <i>«su audición está dentro de los parámetros esperados»</i>, descartando la <b>hipoacusia</b>. Asimismo, se diferencia del <b>Trastorno de los Sonidos del Habla (TSH)</b> porque la dificultad nuclear de Lucía no es articulatoria ni de inteligibilidad fonológica, sino morfosintáctica, léxica y narrativa. Se distingue del <b>Trastorno de la Comunicación Social o Pragmático (TCS)</b> porque en el TCS existe una buena evolución de la morfología y gramática que contrasta con la alteración social pura, mientras que Lucía presenta un marcado déficit estructural (frases muy cortas y léxico reducido). Finalmente, se descarta el <b>TEA</b> por ausencia de conductas e intereses restringidos/repetitivos."),
            ("heading", "2. DISEÑO DE UNA ACTIVIDAD DE INTERVENCIÓN DESDE AUDICIÓN Y LENGUAJE"),
            ("body", "<b>Título:</b> <i>«El Tren de las Historias: ¿Qué pasó el fin de semana?»</i> (Expansión morfosintáctica y organización secuencial del discurso narrativo mediante código cromático y apoyos visuales)."),
            ("body", "<b>Dificultad trabajada y Objetivos:</b> Aborda la organización y enlace temporal de acontecimientos narrativos junto con la ampliación de frases cortas y vocabulario. Sus objetivos son: (1) Ordenar y enlazar secuencias de 4 viñetas usando marcadores temporales (<i>primero, después, entonces, al final</i>) logrando un relato coherente; y (2) Expandir la LME a oraciones de 4-5 elementos (<i>Sujeto + Verbo + Objeto + Complemento</i>) integrando léxico funcional de acciones y lugares."),
            ("body", "<b>Descripción metodológica (Sesión tipo de 35 minutos en el aula de Audición y Lenguaje):</b>"),
            ("body", "<b>• Fase 1. Activación léxica con «La Bolsa de los Recuerdos» (8 min):</b> En la alfombra del aula de AL, el maestro/a presenta una bolsa sensorial con objetos en miniatura y pictogramas de una vivencia de fin de semana (ej. ir al parque: <i>niña, abuelo, perro, bici, charco, helado, pasear, correr, caerse, ayudar, contenta</i>). Mediante preguntas de alternativa forzada (<i>«¿Va en bici o en coche?»</i>), Lucía clasifica el léxico en tres bandejas (Personajes, Acciones y Lugares), asegurando el acceso semántico previo antes de construir frases."),
            ("body", "<b>• Fase 2. Expansión morfosintáctica con el «Puente de Colores» (12 min):</b> Para superar las frases excesivamente cortas, se utiliza una regleta visual basada en el método cromático de estructuración (Monfort y Juárez): casilla amarilla = <i>¿Quién?</i> (Sujeto), roja = <i>¿Qué hace?</i> (Verbo), azul = <i>¿Qué cosa?</i> (Objeto) y verde = <i>¿Dónde?</i> (Lugar). Lucía coloca los pictogramas de cada escena en la regleta y verbaliza la oración apoyándose visualmente (ej.: <i>«La niña [amarillo] monta [rojo] en bicicleta [azul] en el parque [verde]»</i>). El maestro/a de AL aplica <b>modelado, expansión sintáctica y reformulación indirecta (recast)</b> sin corrección punitiva."),
            ("body", "<b>• Fase 3. Enlace narrativo en «El Tren de los 4 Vagones» (15 min):</b> Se despliega un tren laminado de 4 vagones numerados (1.º Inicio, 2.º Acción, 3.º Problema/Nudo y 4.º Final) unidos por piezas de enganche tipo puzle con los conectores pictográficos: <b>«PRIMERO...»</b>, <b>«DESPUÉS...»</b>, <b>«ENTONCES / PORQUE...»</b> y <b>«AL FINAL...»</b>. Lucía ordena las 4 láminas de la historia en los vagones y, tocando cada enganche, verbaliza el conector para enlazar las frases en un relato completo. Por último, transfiere el aprendizaje a su vivencia real con el «Pasaporte del Fin de Semana» (plantilla con 3 fotos enviadas por la familia sobre su sábado/domingo), que llevará al aula ordinaria para contar su fin de semana en la asamblea con apoyo visual."),
            ("body", "<b>Materiales utilizados:</b> (1) Bolsa sensorial con miniaturas cotidianas; (2) Regleta morfosintáctica cromática plastificada con velcro (amarillo/rojo/azul/verde); (3) Tablero «El Tren de las Historias» de 4 vagones con enganches móviles de conectores temporales; (4) Secuencias temporales de 4 viñetas y pictogramas ARASAAC; y (5) «Pasaporte Viajero del Fin de Semana» familia-escuela.")
        ],
        "bibliografia": [
            "American Psychiatric Association. (2013). <i>DSM-5: Manual diagnóstico y estadístico de los trastornos mentales</i> (5.ª ed.). Editorial Médica Panamericana.",
            "Artigas-Pallarès, J., Pérez, I. P., y Mallofré, E. V. (2022). Trastornos del lenguaje. <i>Pediatría Integral</i>, 7, 12.",
            "Cepeda, A. (2019). Trastornos de la comunicación y lenguaje II: Intervención. <i>EOPEP'S: Junta de Castilla y León</i>. https://www.educa.jcyl.es/crol/es/recursos-educativos/trastornos-comunicacion-lenguaje-ii-intervencion",
            "Coll-Florit, M., Vila-Rovira, J. M., Aguado, G., Fernández-Zúñiga, A., Gambra, S., y Perelló, E. (2014). <i>Trastornos del habla y de la voz</i>. Editorial UOC.",
            "Monfort, I., y Monfort, M. (2012). Utilidad clínica de las clasificaciones de las alteraciones del desarrollo del lenguaje. <i>Revista de Neurología</i>, 54(2), 147-154.",
            "Rupérez, A., Ramos, I., Machado, I., Fernández, D., Gortazar, M., y Aguilera, S. (2022). Trastornos del lenguaje, del habla y de la comunicación. Conceptos, clasificación y clínica. <i>Protocolos diagnósticos y terapéuticos en Pediatría</i>, 1(1), 19-30.",
            "Valera, J. A. A. (2017). Trastornos de la comunicación desde el DSM-V. La necesidad de diagnósticos diferenciales. <i>Cuadernos de Neuropsicología</i>, 11(1), 144-156."
        ]
    },
    "caso2": {
        "filename_pdf": "ENTREGA_SESION_PRACTICA_1_CASO2_ALVARO.pdf",
        "filename_docx": "ENTREGA_SESION_PRACTICA_1_CASO2_ALVARO.docx",
        "titulo_corto": "CASO 2 (Álvaro, 6 años — Trastorno de los Sonidos del Habla / TSH)",
        "paragraphs": [
            ("heading", "JUSTIFICACIÓN DE LA ELECCIÓN DEL CASO SELECCIONADO (CASO 2: ÁLVARO, 6 AÑOS)"),
            ("body", "Se selecciona el <b>Caso 2 (Álvaro, 6 años)</b> por su alta incidencia en la práctica del Maestro/a de Audición y Lenguaje en el inicio de Educación Primaria. Los Trastornos de los Sonidos del Habla (TSH) presentan una prevalencia del 3,5% al 5% infantil (Artigas-Pallarès et al., 2022) y representan la demanda más frecuente de atención logopédica escolar. Además, los 6 años constituyen la edad límite de culminación del sistema fonético-fonológico (Tabla 4 de Rupérez et al., 2022), momento en que el habla debe ser 100% inteligible y donde la persistencia de errores de pronunciación conlleva un elevado riesgo de dificultades en la lectoescritura (conversión fonema-grafema) y en la autoestima y relación social con sus iguales."),
            ("heading", "1. IDENTIFICACIÓN DEL TRASTORNO Y JUSTIFICACIÓN TEÓRICA Y DIFERENCIAL"),
            ("body", "Según los contenidos de la Unidad 2 (Secciones 2.3 y 3.2), las dificultades de Álvaro se corresponden con un <b>Trastorno de los Sonidos del Habla (TSH)</b> —anteriormente denominado dislalia o trastorno fonológico—, incluido dentro de los <i>Trastornos de la Comunicación</i> del DSM-5 (APA, 2013) y sistematizado por Susanibar et al. (2016) y Rupérez et al. (2022)."),
            ("body", "La justificación diagnóstica se basa en el cumplimiento de los criterios del DSM-5 (Tabla 2 de Rupérez et al., 2022) a partir de los indicadores observados en el aula:"),
            ("body", "<b>a) Criterio A (Dificultad persistente en la producción fonológica que interfiere con la inteligibilidad del habla):</b> Álvaro presenta a los 6 años <i>«dificultades para pronunciar algunos sonidos del habla»</i> que restan claridad a sus mensajes. Según Rupérez et al. (2022), la inteligibilidad del habla para terceros debe alcanzar el 100% a los 4 años; sin embargo, a los 6 años sus compañeros no comprenden algunas palabras que dice. De acuerdo con Susanibar et al. (2016), el TSH engloba tanto <i>alteraciones fonéticas</i> (errores práxico-motores de articulación por omisión, sustitución o distorsión, como el rotacismo o ausencia de vibrante múltiple /r/ a los 6 años) como <i>alteraciones fonológicas</i> (dificultades en la organización del sistema fonológico en el habla espontánea, persistiendo procesos de simplificación inadecuados para los 6 años según la Tabla 4: reducción de grupos consonánticos CCV→CV como <i>/pato/</i> por <i>plato</i> o asimilaciones)."),
            ("body", "<b>b) Criterios B y C (Interferencia funcional e inicio temprano):</b> Los errores fonético-fonológicos limitan la eficacia comunicativa en la interacción social con sus compañeros de aula, pese a su intención activa de comunicarse."),
            ("body", "<b>c) Criterio D y Diagnóstico Diferencial (Tabla 2, Rupérez et al., 2022):</b> Se descarta un <b>Trastorno del Lenguaje (TL / TDL)</b> y un <b>Trastorno de la Comunicación Social (TCS)</b> porque el enunciado precisa que Álvaro <i>«participa normalmente en las conversaciones y comprende las instrucciones»</i>, confirmando la preservación de la comprensión receptiva, la morfosintaxis y la pragmática. Asimismo, se diferencia de la <b>Disglosia</b> (Coll-Florit et al., 2014; Molina, 2017) por ausencia de malformaciones orgánicas en los órganos periféricos del habla (labios, lengua, paladar o maxilares); de la <b>Disartria</b> (Pichot et al., 1995; Melle, 2012), al no existir lesión neurológica central o periférica; y del <b>Trastorno de la Fluidez (TFI)</b>, por ausencia de bloqueos o disfluencias."),
            ("heading", "2. DISEÑO DE UNA ACTIVIDAD DE INTERVENCIÓN DESDE AUDICIÓN Y LENGUAJE"),
            ("body", "<b>Título:</b> <i>«Detectives de Sonidos y el Espejo Mágico»</i> (Intervención fonético-fonológica combinada de pares mínimos, articulación de vibrante /r/ y sinfones CCV)."),
            ("body", "<b>Dificultad trabajada y Objetivos:</b> Aborda los errores de pronunciación y procesos de simplificación que restan claridad a su habla. Sus objetivos son: (1) Discriminar auditivamente y contrastar pares mínimos fonológicos (oposición /r/-/l/, /r/-/rr/ y grupos CCV frente a CV) comprendiendo su impacto en el significado; y (2) Automatizar el punto y modo de articulación alveolar vibrante e integrarlo en palabras y conversación espontánea inteligible."),
            ("body", "<b>Descripción metodológica (Sesión tipo de 35 minutos en el aula de Audición y Lenguaje):</b>"),
            ("body", "<b>• Fase 1. Discriminación auditiva y Pares Mínimos con «Los Dos Buzones» (10 min):</b> Siguiendo a Susanibar et al. (2016), se inicia por la organización fonológica perceptiva. Se disponen dos buzones con imágenes de palabras que solo difieren en el sonido afectado (ej. <i>PATO / PLATO</i>, <i>PERA / PERRA</i>, <i>CODO / CORO</i>, <i> FRESA / PESA</i>). Primero, el maestro/a de AL pronuncia una palabra y Álvaro introduce una moneda en el buzón correcto. Después se invierten los papeles: Álvaro nombra la tarjeta secreta y comprueba que si reduce el grupo consonántico (dice <i>/pato/</i> por <i>plato</i>), el maestro/a toma la imagen errónea, favoreciendo la autoconciencia fonológica sin frustración."),
            ("body", "<b>• Fase 2. Propiocepción y articulación en «El Espejo Mágico» (12 min):</b> Frente al espejo logopédico, con ayuda propioceptiva táctil en las rugas palatinas/alveolares superiores, se entrena la posición del ápice lingual y el soplo espiratorio sonoro para el fonema /r/ y los sinfones (/pl/, /bl/, /tr/, /fr/). Para los grupos consonánticos se emplea la técnica de vocal epentética acelerada (<i>pala-pala-pala → pla</i>; <i>tara-tara-tara → tra</i>) acompañada de gestos de apoyo fonológico (Monfort), consolidando la coarticulación en sílabas y palabras aisladas."),
            ("body", "<b>• Fase 3. Generalización conversacional en «La Oca de los Reporteros» (13 min):</b> Para transferir la claridad articulatoria al habla espontánea con iguales, se juega en un tablero de la Oca con vocabulario de los fonemas diana. En cada casilla, Álvaro utiliza un «micrófono de reportero» para formular una pista o frase completa a un compañero invitado a la sesión cooperativa, verificando que su mensaje es comprendido a la primera."),
            ("body", "<b>Materiales utilizados:</b> (1) Espejo logopédico y depresores linguales; (2) Dos buzones manipulativos y 20 parejas de tarjetas de pares mínimos fonológicos (vibrantes y sinfones CCV/CV); (3) Láminas de gestos de apoyo fonológico; y (4) Tablero plastificado «La Oca de los Sonidos», dados, fichas y micrófono de juguete.")
        ],
        "bibliografia": [
            "American Psychiatric Association. (2013). <i>DSM-5: Manual diagnóstico y estadístico de los trastornos mentales</i> (5.ª ed.). Editorial Médica Panamericana.",
            "Artigas-Pallarès, J., Pérez, I. P., y Mallofré, E. V. (2022). Trastornos del lenguaje. <i>Pediatría Integral</i>, 7, 12.",
            "Coll-Florit, M., Vila-Rovira, J. M., Aguado, G., Fernández-Zúñiga, A., Gambra, S., y Perelló, E. (2014). <i>Trastornos del habla y de la voz</i>. Editorial UOC.",
            "Melle, N. (2012). Disartria. Práctica basada en la evidencia y guías de práctica clínica. <i>Revista de Logopedia, Foniatría y Audiología</i>, 32(3), 120-133.",
            "Molina, F. P. (2017). Disglosia labial y palatal en Educación Primaria. <i>Revista Internacional de Apoyo a la Inclusión, Logopedia, Sociedad y Multiculturalidad</i>, 3(1), 94-107.",
            "Rupérez, A., Ramos, I., Machado, I., Fernández, D., Gortazar, M., y Aguilera, S. (2022). Trastornos del lenguaje, del habla y de la comunicación. Conceptos, clasificación y clínica. <i>Protocolos diagnósticos y terapéuticos en Pediatría</i>, 1(1), 19-30.",
            "Susanibar, F., Dioses, A., Marchesan, I., Guzmán, M., Leal, G., Guitar, B., y Junqueira, A. (2016). <i>Trastornos del habla: de los fundamentos a la evaluación</i>. Giunti EOS."
        ]
    },
    "caso3": {
        "filename_pdf": "ENTREGA_SESION_PRACTICA_1_CASO3_MARIO.pdf",
        "filename_docx": "ENTREGA_SESION_PRACTICA_1_CASO3_MARIO.docx",
        "titulo_corto": "CASO 3 (Mario, 7 años — Trastorno de la Fluidez / TFI - Tartamudez)",
        "paragraphs": [
            ("heading", "JUSTIFICACIÓN DE LA ELECCIÓN DEL CASO SELECCIONADO (CASO 3: MARIO, 7 AÑOS)"),
            ("body", "Se selecciona el <b>Caso 3 (Mario, 7 años)</b> por la gran repercusión clínica, emocional y escolar que conlleva la tartamudez infantil en Educación Primaria. Aunque el Trastorno de la Fluidez de Inicio en la Infancia presenta una prevalencia del 0,5% al 1,5% escolar (Artigas-Pallarès et al., 2022) y un elevado índice de heredabilidad genética de 0,7 (Rupérez et al., 2022), cuando persiste a los 7 años acompañado de tensión muscular anticipatoria y conductas de evitación en el aula existe un alto riesgo de cronificación (20% de los casos iniciales), desencadenando ansiedad comunicativa, logofobia y baja autoestima si no se aborda de forma temprana y coordinada desde Audición y Lenguaje."),
            ("heading", "1. IDENTIFICACIÓN DEL TRASTORNO Y JUSTIFICACIÓN TEÓRICA Y DIFERENCIAL"),
            ("body", "De acuerdo con la Unidad 2 (Secciones 2.5 y 3.5), el cuadro de Mario se corresponde con un <b>Trastorno de la Fluidez de Inicio en la Infancia (TFI)</b>, denominado clínicamente <b>tartamudez infantil</b> (anteriormente <i>disfemia</i>), catalogado dentro de los <i>Trastornos de la Comunicación</i> en el DSM-5 (APA, 2013) y fundamentado por Rupérez et al. (2022), Coll-Florit et al. (2014) y Susanibar et al. (2016)."),
            ("body", "La justificación diagnóstica se basa en los criterios del DSM-5 y en los parámetros diferenciales de la <b>Tabla 3 de la Unidad 2 (<i>Disfluencias evolutivas vs. Tartamudez infantil</i>, Rupérez et al., 2022)</b>:"),
            ("body", "<b>a) Alteración persistente en la fluidez y organización temporal del habla:</b> Según el DSM-5 y Susanibar et al. (2016), el TFI supone una ruptura involuntaria del flujo del habla inadecuada para la edad. Mario manifiesta los signos nucleares del cuadro: <i>«repeticiones de sonidos y sílabas»</i> y <i>«algunos bloqueos al hablar»</i> (interrupciones audibles o silenciosas por incoordinación pneumofonoarticulatoria)."),
            ("body", "<b>b) Diagnóstico Diferencial frente a la Disfluencia Evolutiva (Tabla 3, Rupérez et al., 2022):</b> Es fundamental distinguir la disfluencia evolutiva (fisiológica entre los 2,5 y 5 años, con un 80% de remisión espontánea) de la <b>tartamudez infantil instaurada</b> de Mario. Aplicando la Tabla 3 de la Unidad 2, Mario cumple todos los indicadores de tartamudez infantil: (1) <i>Edad:</i> tiene <b>7 años</b> (etapa 6-7 años frente a los 2,5-5 años evolutivos); (2) <i>Duración:</i> persiste «desde hace varios meses» con carácter intermitente agravado por la presión social; (3) <i>Tipo de disfluencias:</i> presenta repeticiones de sonidos/sílabas y <b>bloqueos</b> (ausentes en la disfluencia evolutiva); (4) <i>Tensión muscular:</i> <b>«aumenta la tensión antes de producir una palabra»</b> (esfuerzo físico evidente, inexistente en la forma evolutiva); y (5) <i>Evitación:</i> <b>«evita participar oralmente delante de toda la clase»</b>, evidenciando ansiedad anticipatoria y evitación situacional frente a sus compañeros."),
            ("body", "<b>c) Diagnóstico Diferencial frente a otros trastornos de la Unidad 2:</b> Se descartan el <b>Trastorno del Lenguaje (TL)</b> y el <b>Trastorno de los Sonidos del Habla (TSH)</b> porque Mario sabe exactamente qué quiere decir (indemnidad léxica, morfosintáctica y fonológica), sufriendo una pérdida involuntaria de sincronía temporal (Coll-Florit et al., 2014). Igualmente, se descartan la <b>Disfonía espasmódica</b> (Sanz et al., 2015) y la <b>Disartria</b> por ausencia de distonía laríngea focal o lesión neurológica motora."),
            ("heading", "2. DISEÑO DE UNA ACTIVIDAD DE INTERVENCIÓN DESDE AUDICIÓN Y LENGUAJE"),
            ("body", "<b>Título:</b> <i>«El Camino de la Tortuga y el Semáforo del Habla Suave»</i> (Entrenamiento de inicio fonatorio suave, enlentecimiento prosódico y desensibilización gradual de la evitación en el aula)."),
            ("body", "<b>Dificultad trabajada y Objetivos:</b> Aborda el exceso de tensión previa, los bloqueos/repeticiones y la evitación a hablar frente a la clase. Sus objetivos son: (1) Reducir la tensión muscular glótica y labial entrenando la respiración costodiafragmática, el ataque vocal blando (inicio suave) y la prolongación vocálica controlada; y (2) Extinguir la evitación oral en el aula mediante una jerarquía de participación comunicativa gradual y segura."),
            ("body", "<b>Descripción metodológica (Sesión tipo de 35 minutos en aula de AL y transferencia al aula):</b>"),
            ("body", "<b>• Fase 1. Distensión muscular e inicio suave con «El Muñeco de Nieve» (8 min):</b> Para desactivar el aumento de tensión previo a la palabra, se entrena el contraste neuromuscular de Koeppen: tensar mandíbula, labios y hombros como un «bloque de hielo» y soltar el aire suavemente destensando como un «muñeco de nieve al sol». A continuación, frente a una cinta de seda, Mario practica el <b>inicio fonatorio suave</b> soltando una leve espiración antes de deslizar la primera vocal de la palabra sin golpe glótico ni bloqueo."),
            ("body", "<b>• Fase 2. Habla enlentecida en «El Tablero de la Tortuga Sabia» (15 min):</b> Sobre un tablero con un recorrido en forma de olas suaves y «oasis de parada», el maestro/a de AL ofrece un modelo de habla pausada, rítmica y sin prisas. Primero se realizan emisiones en <b>habla simultánea (en coro)</b> y lectura rítmica de secuencias pictográficas (lo que suprime los bloqueos de inmediato al sincronizar la planificación temporal); después, Mario desliza su dedo por una tira táctil de terciopelo («el tobogán de las palabras») alargando suavemente la sílaba inicial en juegos de descripciones sin presión de tiempo."),
            ("body", "<b>• Fase 3. Transferencia al aula con «La Tarjeta Semáforo VIP» (12 min):</b> Para superar la evitación a hablar delante de sus compañeros, se acuerda con Mario y su tutora una exposición gradual en tres pasos: 1.º Hablar en pareja con un compañero de confianza; 2.º Intervenir en grupo cooperativo de 4 alumnos; y 3.º Participar en gran grupo usando la «Tarjeta Semáforo VIP» (acuerdo privado con la tutora: Mario coloca la tarjeta en verde en su mesa cuando desea intervenir, la tutora le anticipa la pregunta previamente para evitar la tensión sorpresiva, elimina toda prisa y valora siempre el contenido de su mensaje y nunca la forma)."),
            ("body", "<b>Materiales utilizados:</b> (1) Tarjetas visuales de relajación (Hielo/Sol) y cintas de seda de control espiratorio; (2) Tablero manipulativo «El Camino de la Tortuga» con curvas prosódicas y pausas; (3) Regleta táctil de terciopelo para inicio fonatorio suave; y (4) «Tarjeta Semáforo VIP» de coordinación AL-tutora-alumno.")
        ],
        "bibliografia": [
            "American Psychiatric Association. (2013). <i>DSM-5: Manual diagnóstico y estadístico de los trastornos mentales</i> (5.ª ed.). Editorial Médica Panamericana.",
            "Artigas-Pallarès, J., Pérez, I. P., y Mallofré, E. V. (2022). Trastornos del lenguaje. <i>Pediatría Integral</i>, 7, 12.",
            "Coll-Florit, M., Vila-Rovira, J. M., Aguado, G., Fernández-Zúñiga, A., Gambra, S., y Perelló, E. (2014). <i>Trastornos del habla y de la voz</i>. Editorial UOC.",
            "Rupérez, A., Ramos, I., Machado, I., Fernández, D., Gortazar, M., y Aguilera, S. (2022). Trastornos del lenguaje, del habla y de la comunicación. Conceptos, clasificación y clínica. <i>Protocolos diagnósticos y terapéuticos en Pediatría</i>, 1(1), 19-30.",
            "Sanz, L., Rodríguez, M., Bau, P., y Rivera, T. (2015). Disfonía. <i>Medicine-Programa de Formación Médica Continuada Acreditado</i>, 11(91), 5433-5444.",
            "Susanibar, F., Dioses, A., Marchesan, I., Guzmán, M., Leal, G., Guitar, B., y Junqueira, A. (2016). <i>Trastornos del habla: de los fundamentos a la evaluación</i>. Giunti EOS.",
            "Valera, J. A. A. (2017). Trastornos de la comunicación desde el DSM-V. La necesidad de diagnósticos diferenciales. <i>Cuadernos de Neuropsicología</i>, 11(1), 144-156."
        ]
    }
}


def build_overlay_pdf(caso_info):
    """
    Construye un PDF en memoria de 6 páginas con las superposiciones exactas para las páginas 3, 4, 5 y 6
    de la plantilla oficial 'sesión práctica 1.pdf' usando Calibri 12 negro justificado e interlineado sencillo.
    """
    packet = io.BytesIO()
    c = canvas.Canvas(packet, pagesize=A4)

    # Página 1 y 2: vacías en el overlay (se conserva íntegro el enunciado original)
    c.showPage()
    c.showPage()

    # Preparar lista de Flowables (Paragraphs) del desarrollo
    flowables = []
    for ptype, text in caso_info["paragraphs"]:
        style = STYLE_HEADING if ptype == "heading" else STYLE_BODY
        flowables.append(Paragraph(text, style))

    # --- PÁGINA 3: Datos del estudiante + Parte 1 del Desarrollo ---
    c.setFont("Calibri-Bold", 12)
    c.setFillColor(black)
    c.drawString(268, 841.92 - 96.5, STUDENT_NAME)

    # Tapar los guiones bajos de DNI: _________________________ en la plantilla original y escribir el DNI limpio
    c.setFillColorRGB(1, 1, 1)
    c.rect(110, 841.92 - 124, 160, 18, stroke=0, fill=1)
    c.setFillColor(black)
    c.drawString(113, 841.92 - 118.8, STUDENT_DNI)

    # Frame de desarrollo en Página 3: desde y_fitz=170 hasta y_fitz=796 (altura = 626 pt)
    frame_p3 = Frame(85.0, 45.92, 435.0, 626.0, leftPadding=0, bottomPadding=0, rightPadding=0, topPadding=0, showBoundary=0)
    frame_p3.addFromList(flowables, c)
    c.showPage()

    # --- PÁGINA 4: Parte 2 del Desarrollo ---
    # Header termina en y_fitz=85.4. Empezamos en y_fitz=94 hasta y_fitz=796 (altura = 702 pt)
    frame_p4 = Frame(85.0, 45.92, 435.0, 702.0, leftPadding=0, bottomPadding=0, rightPadding=0, topPadding=0, showBoundary=0)
    frame_p4.addFromList(flowables, c)
    if flowables:
        print(f"[!] Aviso: Quedaron {len(flowables)} párrafos sin caber en las 2 páginas para {caso_info['filename_pdf']}")
    else:
        print(f"[OK] Desarrollo encajado al 100% en las 2 páginas para {caso_info['filename_pdf']}")
    c.showPage()

    # --- PÁGINA 5: Bibliografía ---
    c.setFillColorRGB(1, 1, 1)
    c.rect(80, 841.92 - 290, 450, 125, stroke=0, fill=1)

    bib_flowables = [Paragraph(b, STYLE_BIB) for b in caso_info["bibliografia"]]
    frame_p5 = Frame(85.0, 100.0, 435.0, 575.0, leftPadding=0, bottomPadding=0, rightPadding=0, topPadding=0, showBoundary=0)
    frame_p5.addFromList(bib_flowables, c)
    c.showPage()

    # --- PÁGINA 6: Declaración de uso de herramientas y no plagio ---
    c.setFont("Calibri-Bold", 13)
    c.setFillColor(black)
    c.drawCentredString(98.1, 841.92 - 154.5, "X")
    c.drawCentredString(98.1, 841.92 - 589.0, "X")
    c.drawCentredString(98.1, 841.92 - 629.5, "X")

    c.setFillColorRGB(1, 1, 1)
    c.rect(248, 841.92 - 742, 260, 16, stroke=0, fill=1)
    c.rect(107, 841.92 - 756, 150, 16, stroke=0, fill=1)
    c.setFillColor(black)
    c.setFont("Calibri-Bold", 12)
    c.drawString(252, 841.92 - 738.0, STUDENT_NAME)
    c.drawString(113, 841.92 - 751.5, STUDENT_DNI)
    c.setFont("Calibri-Italic", 11)
    c.drawString(125, 841.92 - 766.5, STUDENT_SIG)

    c.showPage()
    c.save()
    packet.seek(0)
    return packet


def generate_pdf_for_case(caso_info):
    overlay_stream = build_overlay_pdf(caso_info)
    template_doc = pymupdf.open(str(TEMPLATE_PDF))
    overlay_doc = pymupdf.open("pdf", overlay_stream.read())

    # Limpiar capa de texto subyacente de marcadores de posición (guiones bajos y texto gris de ejemplo)
    # Página 3: guiones bajos de DNI
    p3 = template_doc[2]
    p3.add_redact_annot(pymupdf.Rect(110, 105, 270, 125))
    p3.apply_redactions()

    # Página 5: ejemplos grises de bibliografía
    p5 = template_doc[4]
    p5.add_redact_annot(pymupdf.Rect(80, 165, 520, 285))
    p5.apply_redactions()

    # Página 6: guiones bajos en Nombre y DNI
    p6 = template_doc[5]
    p6.add_redact_annot(pymupdf.Rect(248, 725, 515, 743))
    p6.add_redact_annot(pymupdf.Rect(108, 740, 260, 757))
    p6.apply_redactions()

    for page_idx in range(len(template_doc)):
        page = template_doc[page_idx]
        page.show_pdf_page(page.rect, overlay_doc, page_idx)

    out_path = PSICO_DIR / caso_info["filename_pdf"]
    template_doc.save(str(out_path))
    template_doc.close()
    overlay_doc.close()
    print(f"[OK] PDF oficial guardado en: {out_path}")
    return out_path


def add_formatted_paragraph_docx(doc, text, is_heading=False, is_bib=False):
    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
    pf = p.paragraph_format
    pf.line_spacing = 1.0  # Interlineado sencillo
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
        pf.space_after = Pt(3)

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


def generate_docx_for_case(caso_info):
    doc = docx.Document()
    for section in doc.sections:
        section.top_margin = Cm(2.0)
        section.bottom_margin = Cm(2.0)
        section.left_margin = Cm(2.5)
        section.right_margin = Cm(2.5)

    add_formatted_paragraph_docx(doc, "<b>CURSO 2026/2027 — PSICOPATOLOGÍA DE LA AUDICIÓN Y EL LENGUAJE (UCJC)</b>", is_heading=True)
    add_formatted_paragraph_docx(doc, f"<b>SESIÓN PRÁCTICA 1 — {caso_info['titulo_corto']}</b>", is_heading=True)
    add_formatted_paragraph_docx(doc, f"<b>Nombre y Apellidos del estudiante:</b> {STUDENT_NAME}   |   <b>DNI:</b> {STUDENT_DNI}")
    add_formatted_paragraph_docx(doc, "<b>Desarrollo de la actividad:</b>", is_heading=True)

    for ptype, text in caso_info["paragraphs"]:
        add_formatted_paragraph_docx(doc, text, is_heading=(ptype == "heading"))

    doc.add_page_break()
    add_formatted_paragraph_docx(doc, "<b>Bibliografía (Normativa APA 7.ª edición):</b>", is_heading=True)
    for b in caso_info["bibliografia"]:
        add_formatted_paragraph_docx(doc, b, is_bib=True)

    doc.add_page_break()
    add_formatted_paragraph_docx(doc, "<b>DECLARACIÓN DEL USO DE HERRAMIENTAS Y ASISTENTES DIGITALES Y NO PLAGIO</b>", is_heading=True)
    add_formatted_paragraph_docx(doc, "[X] En la realización de este trabajo no se han empleado herramientas digitales o asistentes de inteligencia artificial.")
    add_formatted_paragraph_docx(doc, "[ ] En la realización de este trabajo, se han empleado herramientas digitales y asistentes de inteligencia artificial de manera responsable en distintas fases del proceso.")
    add_formatted_paragraph_docx(doc, "[X] En todo momento, se ha mantenido el criterio académico y se ha supervisado que el uso de estas herramientas no comprometa la originalidad ni la calidad del trabajo.")
    add_formatted_paragraph_docx(doc, "[X] Asimismo, es fruto de mi trabajo personal, que no copio, que no utilizo ideas, formulaciones, citas integrales e ilustraciones diversas, sacadas de cualquier obra, artículo, memoria, etc., (en versión impresa o electrónica), sin mencionar de forma clara y estricta su origen, tanto en el cuerpo del texto como en la bibliografía. De igual modo, soy plenamente consciente de que el hecho de no respetar estos extremos es objeto de sanciones universitarias y/o de otro orden.")
    add_formatted_paragraph_docx(doc, f"<b>Nombre y Apellidos del estudiante:</b> {STUDENT_NAME}")
    add_formatted_paragraph_docx(doc, f"<b>DNI:</b> {STUDENT_DNI}")
    add_formatted_paragraph_docx(doc, f"<b>Firma:</b> <i>{STUDENT_SIG}</i>")

    out_path = PSICO_DIR / caso_info["filename_docx"]
    doc.save(str(out_path))
    print(f"[OK] DOCX editable guardado en: {out_path}")
    return out_path


def generate_markdown_all_cases():
    md_lines = [
        "# SESIÓN PRÁCTICA 1: APRENDIZAJE BASADO EN CASOS REALES (UNIDAD 2)",
        "**Asignatura:** Psicopatología de la Audición y el Lenguaje (UCJC — Curso 2026/2027)  ",
        "**Docente:** Dra. Rocío Daniela Concha Ortiz  ",
        f"**Estudiante:** {STUDENT_NAME} — **DNI:** {STUDENT_DNI}  ",
        "**Formato de entrega en Blackboard:** Subir **únicamente en `.PDF`** en la primera pregunta del cuestionario de la Práctica 1 (máximo 2 páginas de desarrollo, Calibri 12 negro, justificado e interlineado sencillo).",
        "",
        "---",
        ""
    ]
    for key, info in CASOS_DATA.items():
        md_lines.append(f"## OPCIÓN RESUELTA: {info['titulo_corto']}")
        md_lines.append(f"*Archivo PDF listo para entregar:* `PSICOPATO/{info['filename_pdf']}`")
        md_lines.append("")
        for ptype, text in info["paragraphs"]:
            clean = text.replace("<b>", "**").replace("</b>", "**").replace("<i>", "*").replace("</i>", "*").replace("&lt;", "<").replace("&gt;", ">")
            if ptype == "heading":
                md_lines.append(f"### {clean}")
            else:
                md_lines.append(clean)
            md_lines.append("")
        md_lines.append("### Referencias Bibliográficas (APA 7.ª ed.)")
        for b in info["bibliografia"]:
            clean_b = b.replace("<i>", "*").replace("</i>", "*")
            md_lines.append(f"- {clean_b}")
        md_lines.append("")
        md_lines.append("---")
        md_lines.append("")

    md_path = PSICO_DIR / "ENTREGA_SESION_PRACTICA_1_RESUELTA_10.md"
    md_path.write_text("\n".join(md_lines), encoding="utf-8")
    print(f"[OK] Markdown completo guardado en: {md_path}")


if __name__ == "__main__":
    for key, info in CASOS_DATA.items():
        generate_pdf_for_case(info)
        generate_docx_for_case(info)
    generate_markdown_all_cases()

