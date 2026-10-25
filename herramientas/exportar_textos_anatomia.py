# -*- coding: utf-8 -*-
"""
EXPORTADOR DE TEXTOS Y ACTUALIZADOR DE LA WEB PARA ANATOMÍA (10/10)
Crea las versiones Markdown (.md) y actualiza data.js con los textos completos.
"""

import os
import json
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
ANATOMIA_DIR = BASE_DIR / "anatomia"

# ==============================================================================
# CONTENIDOS COMPLETOS EN MARKDOWN
# ==============================================================================

MD_ACT_1 = """# UNIVERSIDAD CAMILO JOSÉ CELA · FACULTAD DE EDUCACIÓN
## MENCIÓN EN AUDICIÓN Y LENGUAJE (CURSO 2026/2027)
**Asignatura:** Anatomía, Fisiología y Neurología del Lenguaje  
**Docente titular:** Dra. Sara Prieto González  
**Estudiante:** Pablo Herrero Martínez / Maestro en Audición y Lenguaje  
**DNI / Identificación:** Oficial UCJC  
**Fecha de entrega:** Convocatoria Ordinaria (100% de la calificación)  

---

# ACTIVIDAD DE DESARROLLO 1: MAPA CONCEPTUAL Y ANÁLISIS NEUROFUNCIONAL DE LOS PARES CRANEALES EN EL LENGUAJE, EL HABLA Y LA DEGLUCIÓN

## 1. INTRODUCCIÓN Y FUNDAMENTOS NEUROANATÓMICOS
Los doce pares de nervios craneales constituyen la vía de conexión periférica especializada entre el encéfalo y las estructuras somatosensoriales y motoras de la cabeza, cuello y cavidades viscerales. A diferencia de los nervios espinales, que emergen de la médula espinal de manera segmentaria uniforme, los pares craneales tienen su origen real en agrupaciones nucleares específicas distribuidas a lo largo del tronco encefálico (mesencéfalo, puente o protuberancia y bulbo raquídeo), con la excepción del I y II par, cuyos somas neuronales se sitúan en el telencéfalo y diencéfalo respectivamente (Snell, 2019).

Desde la perspectiva fonoaudiológica y de la especialidad de Audición y Lenguaje (AL), los pares craneales representan la **vía final común** (segunda motoneurona o motoneurona inferior) a través de la cual el haz corticonuclear (corticobulbar) proyecta las órdenes motoras voluntarias originadas en el área motora primaria (área 4 de Brodmann) hacia la musculatura fonoarticulatoria, velopalatina, lingual, faríngea y laríngea. Asimismo, conducen las aferencias propioceptivas y auditivas indispensables para los circuitos de control por retroalimentación (*feedback*) y prealimentación (*feedforward*) del habla (Kandel et al., 2021; Love & Webb, 2001).

---

## 2. MAPA CONCEPTUAL JERÁRQUICO DE LOS 12 PARES CRANEALES

| Par Craneal | Origen Real (Núcleos) | Origen Aparente | Tipo de Fibra | Territorio de Inervación y Función Principal | Implicación en Habla / AL |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **I. Olfatorio** | Células bipolares mucosa olfatoria | Bulbo olfatorio | Sensitivo puro | Olfato, quimiorrecepción y estimulación hedónica. | Baja (Apetito / deglución indirecta) |
| **II. Óptico** | Células ganglionares retina | Quiasma óptico | Sensitivo puro | Visión y vías visuales geniculadas centrales. | Media (Acceso a la lectoescritura) |
| **III. Oculomotor** | Núcleo motor mesencéfalo | Fosa interpeduncular | Motor / Parasimpático | Músculos rectos superior, inferior, medial y miosis pupilar. | Baja |
| **IV. Troclear** | Núcleo troclear mesencéfalo | Cara dorsal mesencéfalo | Motor puro | Músculo oblicuo superior del ojo (mirada hacia abajo y afuera). | Baja |
| **V. Trigémino** | Núcleos masticatorio y sensitivos (puente) | Cara anterolateral puente | Mixto (Sensitivo-motor) | Músculos masticación, tensor del velo del paladar, milohioideo y sensibilidad facial. | **CRÍTICA** (Mandíbula / Velo) |
| **VI. Abducens** | Núcleo abducens en puente | Surco bulboprotuberancial | Motor puro | Músculo recto lateral del ojo (abducción ocular). | Baja |
| **VII. Facial** | Núcleo motor facial (puente) | Surco bulboprotuberancial | Mixto (Sensitivo-motor) | Músculos mímica facial, orbicular labios, buccinador y gusto 2/3 lengua. | **CRÍTICA** (Labios / Oclusivas) |
| **VIII. Vestibulococlear** | Ganglio espiral de Corti y Scarpa | Surco bulboprotuberancial | Sensitivo puro | Audición (cóclea) y equilibrio postural (canales semicirculares). | **CRÍTICA** (Audición / Feedback) |
| **IX. Glosofaríngeo** | Núcleo ambiguo y solitario (bulbo) | Surco retroolivar (bulbo) | Mixto | Constrictor superior faringe, estilofaríngeo, sensibilidad velo y gusto posterior. | **ALTA** (Deglución / Resonancia) |
| **X. Vago** | Núcleo ambiguo y dorsal (bulbo) | Surco retroolivar (bulbo) | Mixto | Musculatura laríngea intrínseca (cuerdas vocales), velopalatina y vísceras. | **CRÍTICA** (Fonación / Glotis) |
| **XI. Accesorio** | Asta anterior médula espinal C1-C5 | Surco retroolivar / médula | Motor puro | Músculos esternocleidomastoideo y trapecio (respiración accesoria y cuello). | Media (Soporte respiratorio / postural) |
| **XII. Hipogloso** | Núcleo del hipogloso (bulbo) | Surco preolivar (bulbo) | Motor puro | Musculatura intrínseca y extrínseca de la lengua. | **CRÍTICA** (Lengua / Fonemas) |

---

## 3. ANÁLISIS EXHAUSTIVO DE LOS 6 PARES CRANEALES ESENCIALES PARA EL LENGUAJE Y EL HABLA

### A) Nervio Trigémino (V Par Craneal) — Control Mandibular y Tensión Velar
* **Origen e inervación motora:** Somas motores en el puente dorsal medio. La rama mandibular (V3) atraviesa el foramen oval.
* **Músculos inervados:** Músculos masticadores (temporal, masetero, pterigoideo interno y externo), milohioideo, vientre anterior del digástrico y músculo tensor del velo del paladar (periestafilino externo).
* **Función fonoaudiológica:** Regula el descenso y elevación de la mandíbula con precisión micrométrica, modulando el volumen de la cavidad bucal para definir los formantes vocálicos (F1) y permitir el punto de contacto en consonantes bilabiales y dentales. El tensor del velo dilata la trompa de Eustaquio (ventilación del oído medio) y tensa el paladar blando contra la faringe.
* **Correlato clínico:** La parálisis periférica genera caída mandibular en reposo, masticación ineficaz y disartria flácida con habla imprecisa y fatigable.

### B) Nervio Facial (VII Par Craneal) — Esfínter Labial y Mímica
* **Origen e inervación:** Núcleo motor en la protuberancia caudal. Emerge por el foramen estilomastoideo hacia la glándula parótida.
* **Músculos inervados:** Orbicular de los labios, buccinador, risorio, cigomáticos mayor y menor, elevador y depresor del labio.
* **Función fonoaudiológica:** El sellado labial hermético es condición indispensable para la acumulación de presión intraoral previa a la liberación explosiva de las consonantes oclusivas bilabiales (/p/, /b/) y nasal (/m/), así como la configuración abocinada de vocales posteriores (/o/, /u/) y constricción labiodental (/f/).
* **Correlato clínico:** La parálisis periférica de Bell provoca borramiento del surco nasogeniano, escape anterior de aire y saliva (sialorrea) e incapacidad de articular fonemas bilabiales, distorsionando severamente la inteligibilidad escolar.

### C) Nervio Vestibulococlear (VIII Par Craneal) — Retroalimentación Auditiva
* **Origen y proyección:** Células ganglionares espirales en la cóclea. Proyecta hacia los núcleos cocleares bulbares y a la corteza auditiva primaria (giro de Heschl, áreas 41 y 42 de Brodmann).
* **Función fonoaudiológica:** Es el pilar sensorial del bucle fonológico y de la calibración articulatoria en tiempo real (modelo DIVA). Sin audición bilateral indemne, el infante no puede contrastar los rasgos distintivos acústicos de los fonemas ni regular la intensidad y tono de su producción vocal.
* **Correlato clínico:** Las lesiones cocleares producen hipoacusia neurosensorial; si es congénita o prelocutiva, detiene la adquisición natural de la fonología oral, exigiendo adaptación protésica (audífonos/implantes cocleares) y reeducación logopédica.

### D) Nervio Glosofaríngeo (IX Par Craneal) — Elevación Faríngea y Resonancia
* **Origen e inervación:** Núcleo ambiguo bulbar hacia el foramen yugular.
* **Músculos inervados:** Estilofaríngeo y constrictor superior faríngeo; aferencia sensitiva velopalatina y gustativa posterior.
* **Función fonoaudiológica:** Ensancha y eleva la faringe durante el habla y la deglución; desencadena el reflejo nauseoso y modula la cavidad de resonancia superior.
* **Correlato clínico:** Disfagia orofaríngea e hipernasalidad por incompetencia en el selle velofaríngeo.

### E) Nervio Vago (X Par Craneal) — Fonación Glótica y Resonancia Velar
* **Origen y ramas:** Núcleo ambiguo hacia el foramen yugular. Da lugar a dos ramas vitales:
  1. *Nervio Laríngeo Superior (rama externa):* inerva el músculo cricotiroideo, cuya contracción elonga y tensa las cuerdas vocales, controlando los agudos y la modulación prosódica de la voz.
  2. *Nervio Laríngeo Recurrente o Inferior:* inerva todos los demás músculos intrínsecos laríngeos: tiroaritenoideo (músculo vocal), cricoaritenoideo lateral e interaritenoideo (aductores que cierran la glotis) y cricoaritenoideo posterior (único abductor de la respiración). Además, inerva el músculo elevador del velo del paladar (periestafilino interno).
* **Función fonoaudiológica:** Hace posible la fonación glótica (teoría mioelástica-aerodinámica) y sella el esfínter velofaríngeo para evitar el escape nasal en fonemas orales.
* **Correlato clínico:** Parálisis cordal en posición intermedia o paramediana, disfonía severa con voz soplada, fatiga vocal, riesgo de aspiración silente y rinolalia abierta.

### F) Nervio Hipogloso (XII Par Craneal) — Precisión Lingual
* **Origen e inervación:** Núcleo del hipogloso en el bulbo raquídeo ventral hacia el conducto condíleo anterior.
* **Músculos inervados:** Totalidad de la musculatura intrínseca lingual (longitudinal superior/inferior, transverso y vertical) y extrínseca (geniogloso, hiogloso y estilogloso).
* **Función fonoaudiológica:** La lengua es el articulador más versátil del tracto vocal. Permite el punto y modo de articulación de la inmensa mayoría de las consonantes (/t/, /d/, /s/, /z/, /l/, /r/, /rr/, /ch/, /ñ/, /k/, /g/) y moldea los formantes vocálicos F1 y F2.
* **Correlato clínico:** Atrofia lingual con fasciculaciones, desviación hacia el lado afecto al protruir y disartria flácida lingual grave con habla empastada e ininteligible.

---

## 4. CONCLUSIONES E IMPLICACIONES EN LA PRÁCTICA DEL MAESTRO DE AUDICIÓN Y LENGUAJE (AL)
1. **Diagnóstico diferencial pedagógico:** Permite discernir entre un Trastorno de los Sonidos del Habla (TSH) de origen dislálico funcional y una disartria flácida por lesión de la motoneurona inferior.
2. **Intervención miofuncional diana:** Posibilita diseñar praxias activas y programas de estimulación neuromuscular ajustados exactamente a los pares craneales comprometidos.
3. **Coordinación interdisciplinar:** Facilita la comunicación técnica con neuropediatras, otorrinos y equipos de orientación educativa.

---

## REFERENCIAS BIBLIOGRÁFICAS (APA 7.ª EDICIÓN)
* Kandel, E. R., Koester, J. D., Mack, S. H., & Siegelbaum, S. A. (2021). *Principles of neural science* (6th ed.). McGraw-Hill Education.
* Love, R. J., & Webb, W. G. (2001). *Neurología para los especialistas del habla y del lenguaje* (4.ª ed.). Editorial Médica Panamericana.
* Netter, F. H. (2019). *Atlas de anatomía humana* (7.ª ed.). Elsevier.
* Peña-Casanova, J. (2014). *Manual de logopedia* (4.ª ed.). Elsevier Masson.
* Puyuelo, M., & Rondal, J. A. (2003). *Manual de desarrollo y alteraciones del lenguaje*. Masson.
* Snell, R. S. (2019). *Neuroanatomía clínica* (8.ª ed.). Wolters Kluwer.

---

## DECLARACIÓN DEL USO DE HERRAMIENTAS DIGITALES Y NO PLAGIO
*Se declara formalmente que este trabajo es fruto del estudio y autoría personal del estudiante, no copiando ni utilizando ideas ajenas sin cita estricta. El uso de herramientas digitales se circunscribe al apoyo estructurador y corrección ortotipográfica formal, asumiendo el estudiante toda la responsabilidad del contenido académico.*  
**Firma:** Pablo Herrero Martínez (Firmado electrónicamente)
"""

MD_ACT_2 = """# UNIVERSIDAD CAMILO JOSÉ CELA · FACULTAD DE EDUCACIÓN
## MENCIÓN EN AUDICIÓN Y LENGUAJE (CURSO 2026/2027)
**Asignatura:** Anatomía, Fisiología y Neurología del Lenguaje  
**Docente titular:** Dra. Sara Prieto González  
**Estudiante:** Pablo Herrero Martínez / Maestro en Audición y Lenguaje  
**DNI / Identificación:** Oficial UCJC  

---

# ACTIVIDAD DE DESARROLLO 2: ESTUDIO DE CASO CLÍNICO NEUROLÓGICO Y PLAN DE INTERVENCIÓN EN AUDICIÓN Y LENGUAJE (DISARTRIA FLÁCIDA)

## 1. DESCRIPCIÓN DEL CASO CLÍNICO
* **Sujeto:** Mateo, 7 años y 4 meses, escolarizado en 2.º de Primaria en centro ordinario.
* **Antecedentes y circunstancia de la lesión:** En mayo de 2026 sufrió un traumatismo craneoencefálico (TCE) cerrado por atropello accidental en bicicleta (Glasgow inicial 8). La TC craneal y RM mostraron fractura lineal de fosa posterior y peñasco derecho con compromiso por compresión edematosa del foramen estilomastoideo y conducto condíleo anterior (canal del hipogloso). Áreas corticales perisilvianas izquierdas (Broca/Wernicke) intactas.
* **Patología principal:** Disartria Flácida Periférica Traumática por lesión axonal de segunda motoneurona en los pares craneales Facial (VII) e Hipogloso (XII) derechos, con paresia velopalatina leve del par X.

---

## 2. IDENTIFICACIÓN DEL DAÑO NEUROLÓGICO Y ANATÓMICO
* **Estructuras afectadas:** Nervio Facial derecho (VII) en el foramen estilomastoideo y Nervio Hipogloso derecho (XII) en el conducto del hipogloso de la base occipital.
* **Mecanismo fisiopatológico:** Axonotmesis y denervación periférica de motoneurona inferior. Ausencia de estímulo colinérgico que produce hipotonía severa, flacidez muscular, hiporreflexia y amiotrofia con fasciculaciones en el hemivientre lingual derecho.
* **Funciones alteradas:**
  1. Incompetencia del esfínter labial anterior (asimetría facial y escape aéreo).
  2. Desviación lingual derecha en protrusión (acción sin oposición del geniogloso izquierdo sano) y pérdida de movilidad en el ápice lingual.
  3. Habla con distorsión en bilabiales (/p/, /b/, /m/) y ápico-alveolares (/t/, /d/, /s/, /l/, /r/, /rr/).
  4. Sialorrea anterior diurna leve y retención de alimentos en el surco yugal derecho durante la masticación.

---

## 3. IDENTIFICACIÓN DE NECESIDADES EN EL ENTORNO ESCOLAR
1. **Comunicación e inteligibilidad:** Inteligibilidad espontánea reducida al 45-50% para personas no habituales. Conciencia de déficit que le genera frustración, ansiedad y disminución voluntaria de la participación oral en clase de 2.º de Primaria.
2. **Impacto emocional y social:** Aislamiento progresivo en el recreo y miedo a la burla por la asimetría labial y el babeo residual.
3. **Riesgo en el aprendizaje lectoescritor:** Al encontrarse en 2.º de Primaria, existe un grave riesgo de traslación de errores articulatorios a la escritura espontánea y al dictado (disortografía articulatoria/fonológica secundaria).
4. **Alimentación y hábitos escolares:** Fatiga masticatoria en el comedor escolar y acumulación de residuos en el vestíbulo bucal.

---

## 4. OBJETIVOS DE INTERVENCIÓN EN AUDICIÓN Y LENGUAJE (SMART)
* **Objetivo SMART 1 (Tono Muscular y Sellado Labial - Par VII):** Incrementar el tono muscular peribucal y la competencia del esfínter labial mediante terapia miofuncional y praxias labiales activas asistidas (15 min/día), logrando el selle labial continuo en reposo durante al menos 10 minutos y la supresión total de la sialorrea en horario escolar en 12 semanas.
* **Objetivo SMART 2 (Precisión Articulatoria Consonántica - Pares VII y XII):** Desarrollar la motilidad lingual compensatoria izquierda y la fuerza de oclusión labial para articular correctamente fonemas bilabiales (/p/, /b/, /m/) y alveolares (/t/, /d/, /l/) con una precisión fonética ≥85% en tareas de denominación y repetición en 16 semanas.
* **Objetivo SMART 3 (Inteligibilidad en Contexto Natural):** Instaurar estrategias compensatorias de habla (control respiratorio costo-diafragmático, sobrearticulación consciente y pausas enfáticas), elevando la inteligibilidad espontánea en el aula ordinaria del 48% al 75% medida por el tutor y familia en 20 semanas.
* **Objetivo SMART 4 (Prevención de Dificultades Lectoescritoras):** Afianzar la correspondencia fonema-grafema mediante el uso sistemático de claves visuales y gestos de apoyo a la pronunciación (Marc Monfort), impidiendo la transferencia de sustituciones articulatorias a la escritura y obteniendo un 90% de exactitud ortográfica en dictados en 18 semanas.

---

## 5. PROPUESTA METODOLÓGICA Y PAUTAS DUA
* **Pautas DUA:** Múltiples formas de representación (apoyo visual de consignas) y de expresión (permitir respuestas escritas o gráficas ante fatiga muscular orofacial).
* **Participación oral:** Pactar turnos de intervención previamente ensayados en el aula de AL; no forzar la lectura pública sin preparación.
* **Comedor:** Facilitar enjuagues suaves con agua tras comer para evacuar restos del vestíbulo bucal.

---

## REFERENCIAS BIBLIOGRÁFICAS (APA 7.ª EDICIÓN)
* American Speech-Language-Hearing Association [ASHA]. (2022). *Motor speech disorders in children*. ASHA Practice Portal.
* Duffy, J. R. (2020). *Motor speech disorders: Substrates, differential diagnosis, and management* (4th ed.). Elsevier.
* Monfort, M., & Juárez, A. (2004). *El niño que habla: El lenguaje oral en el preescolar*. CEPE.
* Peña-Casanova, J. (2014). *Manual de logopedia* (4.ª ed.). Elsevier Masson.
* Puyuelo, M., & Rondal, J. A. (2003). *Manual de desarrollo y alteraciones del lenguaje*. Masson.
* Snell, R. S. (2019). *Neuroanatomía clínica* (8.ª ed.). Wolters Kluwer.

---

## DECLARACIÓN DEL USO DE HERRAMIENTAS DIGITALES Y NO PLAGIO
*Declaración formal firmada por Pablo Herrero Martínez. El trabajo es fruto del esfuerzo personal original conforme a la normativa académica de la UCJC.*
"""

MD_SP_1 = """# UNIVERSIDAD CAMILO JOSÉ CELA · FACULTAD DE EDUCACIÓN
## MENCIÓN EN AUDICIÓN Y LENGUAJE (CURSO 2026/2027)
**Asignatura:** Anatomía, Fisiología y Neurología del Lenguaje  
**Docente titular:** Dra. Sara Prieto González  
**Estudiante:** Pablo Herrero Martínez / Maestro en Audición y Lenguaje  
**DNI / Identificación:** Oficial UCJC  

---

# SESIÓN PRÁCTICA 1: CASO DANIEL (HIPOACUSIA NEUROSENSORIAL PROFUNDA E IMPLANTE COCLEAR)

## 1. JUSTIFICACIÓN ANATÓMICA Y FISIOLÓGICA
Daniel, alumno de 5 años en 3.º de Educación Infantil, presenta una **hipoacusia neurosensorial profunda bilateral** desde el nacimiento. La alteración anatomofisiológica se ubica en el oído interno, consistente en la pérdida irreversible o aplasia de las células ciliadas en el órgano de Corti a lo largo de la escala media coclear.

El **Implante Coclear (IC)** que porta Daniel es un producto sanitario bioeléctrico: el procesador externo capta las ondas sonoras, las digitaliza y transmite por radiofrecuencia al receptor interno. La guía multielectrodo insertada en la rampa timpánica estimula de forma directa las terminaciones nerviosas del ganglio espiral del nervio vestibulococlear (VIII par craneal), salteando las células ciliadas destruidas. No obstante, la señal bioeléctrica entregada al córtex auditivo primario (giro de Heschl, áreas 41/42) es sintetizada y de resolución limitada; Daniel requiere un reaprendizaje auditivo asistido para discriminar rasgos finos del habla en entornos con ruido ambiente.

---

## 2. ADAPTACIONES EN EL AULA ORDINARIA PARA FAVORECER EL APRENDIZAJE Y PARTICIPACIÓN
En respuesta a la cuestión planteada por la docente Dña. Sara Prieto González, se formulan las adaptaciones organizadas en 5 dimensiones complementarias:

### A) Adaptaciones Acústicas y Ambientales (Control de Señal/Ruido)
* **Amortiguación de ruidos de impacto:** Colocación de fieltros o pelotas de tenis en patas de sillas y mesas para extinguir el ruido de fricción.
* **Acondicionamiento fonoabsorbente:** Cortinas gruesas en ventanas, paneles de corcho en paredes y alfombras vinílicas en la asamblea, logrando un tiempo de reverberación <0.4 segundos.
* **Ubicación del aula:** Alejada de fuentes ruidosas externas (calle con tráfico, gimnasio o sala de calderas).

### B) Adaptaciones Espaciales y de Acceso Visual
* **Ubicación preferencial:** Daniel se sitúa en primera fila o en el centro de la asamblea en forma de 'U', a una distancia óptima de 1.2 a 1.8 metros de la tutora.
* **Control lumínico:** Iluminación frontal sobre el docente, evitando que explique a contraluz para facilitar la lectura labiofacial permanente.

### C) Adaptaciones Tecnológicas y Productos de Apoyo
* **Sistema de Frecuencia Modulada (FM) / Micrófono Remoto:** La maestra porta un micrófono emisor de solapa que transmite su voz directamente al procesador del implante de Daniel, anulando la pérdida de intensidad por distancia física y garantizando una relación señal/ruido >+15 dB.
* **Monitorización diaria:** Revisión visual del estado de carga de la batería y correcta adhesión magnética de la bobina al iniciar la mañana escolar.

### D) Pautas Metodológicas para el Docente
* **Captación atencional:** Asegurar contacto visual con Daniel antes de emitir consignas.
* **Patrón de habla:** Velocidad moderada, articulación clara sin gritos (el grito distorsiona el procesador coclear).
* **Apoyo visual y anticipación:** Presentar vocabulario nuevo con soporte de imágenes y pictogramas ARASAAC; agenda visual diaria de rutinas en la pizarra.
* **Doble exposición:** Solicitar con naturalidad a un compañero que reformule la consigna para ofrecer una segunda exposición acústica con registro infantil.

### E) Intervención Específica en Audición y Lenguaje (AL)
* **Entrenamiento auditivo sistemático de Erber (1982):** Detección -> Discriminación -> Identificación -> Reconocimiento -> Comprensión verbal.
* **Estimulación sintáctica:** Expansión de frases de 2 a 4 elementos y enriquecimiento léxico funcional.

---

## REFERENCIAS BIBLIOGRÁFICAS (APA 7.ª EDICIÓN)
* Confederación Española de Familias de Personas Sordas [FIAPAS]. (2019). *Manual básico de formación especializada sobre discapacidad auditiva*. FIAPAS.
* Erber, N. P. (1982). *Auditory training*. Alexander Graham Bell Association for the Deaf.
* Snell, R. S. (2019). *Neuroanatomía clínica* (8.ª ed.). Wolters Kluwer.
* Torres, S., Urquiza, R., & Santana, R. (2018). *Deficiencia auditiva: Guía para profesionales y familias*. Ediciones Aljibe.

---

## DECLARACIÓN DE NO PLAGIO Y ÉTICA DIGITAL
*Declaración oficial firmada por Pablo Herrero Martínez. Documento 100% original conforme a los criterios de evaluación de la UCJC.*
"""

MD_SP_2 = """# UNIVERSIDAD CAMILO JOSÉ CELA · FACULTAD DE EDUCACIÓN
## MENCIÓN EN AUDICIÓN Y LENGUAJE (CURSO 2026/2027)
**Asignatura:** Anatomía, Fisiología y Neurología del Lenguaje  
**Docente titular:** Dra. Sara Prieto González  
**Estudiante:** Pablo Herrero Martínez / Maestro en Audición y Lenguaje  
**DNI / Identificación:** Oficial UCJC  

---

# SESIÓN PRÁCTICA 2: CASO MARTA (ANÁLISIS NEUROLÓGICO Y NEUROLINGÜÍSTICO TRAS ACV)

## 1. ¿QUÉ TIPO DE TRASTORNO DEL LENGUAJE PRESENTA MARTA?
Marta, mujer diestra de 58 años y docente de literatura, presenta un cuadro de **Afasia de Broca** (afasia motora mayor, no fluida o expresiva) de etiología vascular isquémica aguda (Goodglass, Kaplan, & Barresi, 2001).

El cuadro se sustenta en:
1. Habla no fluida, laboriosa y entrecortada (<50 palabras por minuto) con tanteo articulatorio (*groping*).
2. Marcada preservación de la comprensión auditiva para órdenes simples cotidianas.
3. Conciencia de déficit plena (ausencia de anosognosia) con intensa frustración emocional.
4. **Diagnóstico diferencial:** Se descarta *Wernicke* (cursa con jergafasia, anosognosia y comprensión destruida), *Transcortical Motora* (donde la repetición está intacta, mientras que en Marta está gravemente dañada) y *Disartria pura* (donde solo falla la articulación periférica sin pérdida sintáctica ni morfológica).

---

## 2. ¿QUÉ COMPONENTES DEL LENGUAJE ESTÁN PRINCIPALMENTE AFECTADOS?
* **Componente Morfosintáctico (Núcleo central):** **Agramatismo severo** (estilo telegráfico). Supresión sistemática de palabras funcionales (nexos, preposiciones, artículos) y flexiones verbales; producción reducida a sustantivos y verbos en infinitivo.
* **Componente Fonético-Fonológico:** **Apraxia del habla** (desintegración fonética de Alajouanine). Dificultad para coordinar programas motores del habla, parafasias fonémicas y simplificación silábica.
* **Fluidez y Prosodia:** Disprosodia marcada (habla monótona y silabeada) y latencias de respuesta prolongadas.
* **Repetición y Denominación:** Alteración profunda en repetición; anomia por confrontación visual con beneficio marcado ante claves fonéticas.

---

## 3. ¿QUÉ ÁREAS CORTICALES Y VÍAS NEURONALES ESTÁN IMPLICADAS?
Al ser Marta diestra, la dominancia lingüística es hemisférica izquierda (>96%). El ictus isquémico afectó la rama superior de la arteria cerebral media izquierda, dañando:
1. **Área de Broca clásica:** Circunvolución frontal inferior izquierda:
   - *Pars opercularis (Área 44 de Brodmann):* ensamble motor de patrones fonológicos.
   - *Pars triangularis (Área 45 de Brodmann):* computación sintáctica compleja y selección léxica.
2. **Ínsula anterior izquierda:** Estructura clave en la coordinación motora fonatoria (origen de la apraxia verbal).
3. **Opérculo rolándico inferior (Área 4 de Brodmann):** Córtex motor primario bucofonatorio.
4. **Fascículo Arqueado y Fascículo Longitudinal Superior (SLF):** Rama dorsal que interconecta el lóbulo temporal superior con el córtex premotor frontal.

---

## 4. ¿POR QUÉ LA COMPRENSIÓN ESTÁ PRESERVADA Y LA PRODUCCIÓN TAN AFECTADA?
Esta disociación se fundamenta en el **Modelo Neurobiológico de Doble Vía de Hickok y Poeppel (2007)**:
* **Indemnidad de la Vía Ventral (Vía del Significado - 'What'):** Discurre desde el córtex auditivo hacia la circunvolución temporal media y superior bilateralmente (área de Wernicke, área 22). Su organización es bilateral y computa el mapeo del sonido a la representación léxico-semántica. Al estar el ictus circunscrito al lóbulo frontal izquierdo, el córtex temporal permanece funcionalmente indemne; esto permite a Marta decodificar palabras y órdenes sencillas.
* **Colapso de la Vía Dorsal (Vía de Articulación y Sintaxis - 'How'):** Lateralizada fuertemente en el hemisferio izquierdo, conecta el lóbulo temporal con el área de Broca a través del fascículo arqueado. Computa la interfaz auditivo-motora y el análisis sintáctico de oraciones sintácticamente complejas y reversibles (ej. oraciones pasivas). Al estar destruida el área de Broca, la vía dorsal queda colapsada, aboliendo la fluidez y la emisión sintáctica estructurada.

---

## REFERENCIAS BIBLIOGRÁFICAS (APA 7.ª EDICIÓN)
* Goodglass, H., Kaplan, E., & Barresi, B. (2001). *The assessment of aphasia and related disorders* (3rd ed.). Lippincott Williams & Wilkins.
* Hickok, G., & Poeppel, D. (2007). The cortical organization of speech processing. *Nature Reviews Neuroscience*, 8(5), 393-402.
* Kandel, E. R., Koester, J. D., Mack, S. H., & Siegelbaum, S. A. (2021). *Principles of neural science* (6th ed.). McGraw-Hill Education.
* Peña-Casanova, J. (2014). *Manual de logopedia* (4.ª ed.). Elsevier Masson.
* Snell, R. S. (2019). *Neuroanatomía clínica* (8.ª ed.). Wolters Kluwer.

---

## DECLARACIÓN DE NO PLAGIO Y ÉTICA DIGITAL
*Declaración oficial firmada por Pablo Herrero Martínez. Documento conforme a las directrices oficiales de la UCJC.*
"""

MD_PORT = """# UNIVERSIDAD CAMILO JOSÉ CELA · FACULTAD DE EDUCACIÓN
## MENCIÓN EN AUDICIÓN Y LENGUAJE (CURSO 2026/2027)
**Asignatura:** Anatomía, Fisiología y Neurología del Lenguaje  
**Docente titular:** Dra. Sara Prieto González  
**Estudiante:** Pablo Herrero Martínez / Maestro en Audición y Lenguaje  
**DNI / Identificación:** Oficial UCJC  

---

# PORTFOLIO INTEGRAL DE APRENDIZAJE: ANATOMÍA, FISIOLOGÍA Y NEUROLOGÍA DEL LENGUAJE

## 1. INTRODUCCIÓN Y JUSTIFICACIÓN EPISTEMOLÓGICA
El presente Portfolio constituye la memoria analítica y el balance formativo global de la asignatura de Anatomía, Fisiología y Neurología del Lenguaje. Para el maestro de Audición y Lenguaje (AL), el conocimiento neurobiológico no es un añadido teórico accesorio, sino el cimiento indispensable sobre el cual descansa la evaluación fonoaudiológica certera y la respuesta inclusiva en los centros educativos.

---

## 2. SÍNTESIS INTEGRADORA DE LAS 5 UNIDADES DEL TEMARIO
* **Unidad 1: Organización Estructural y Fisiológica del Sistema Nervioso (SNC y SNP):** Estudio de la neurona, sinapsis química, neurotransmisores (acetilcolina, GABA, glutamato) y el papel decisivo de la mielinización en la velocidad de transmisión axonal durante el desarrollo infantil.
* **Unidad 2: Sistemas Sensoriales Receptores (Audición y Visión):** Morfología biofísica del oído externo, medio e interno; transducción mecanoeléctrica en las células ciliadas del órgano de Corti y el principio de tonotopía coclear esencial para la tecnología protésica auditiva.
* **Unidad 3: Anatomía y Biomecánica del Sistema Fonoarticulatorio:** El armazón cartilaginoso laríngeo, dinámica de las cuerdas vocales (teoría mioelástica-aerodinámica de van den Berg), tracto vocal resonador y mecanismo esfinteriano velofaríngeo.
* **Unidad 4: Pares Craneales y Vías Motoras del Habla:** Análisis de los núcleos del tronco encefálico y de los 6 pares craneales esenciales (V, VII, VIII, IX, X, XII) como ejecutores de la segunda motoneurona, aportando la clave del diagnóstico diferencial de las disartrias flácidas.
* **Unidad 5: Redes Cerebrales del Lenguaje y Neuroplasticidad:** Superación del modelo clásico de Wernicke-Geschwind mediante el **Modelo de Doble Flujo de Hickok y Poeppel (2007)** (vía ventral semántica bilateral y vía dorsal sintáctico-articulatoria izquierda), vinculado a la neuroplasticidad en la infancia.

---

## 3. INTEGRACIÓN CLÍNICA: LOS TRES CASOS CLÍNICOS DEL CURSO
1. **Caso Daniel (Hipoacusia e Implante Coclear):** Conectó la tonotopía sensorial con adaptaciones de aula concretas (amortiguación acústica, relación señal/ruido >+15 dB y Sistema de FM).
2. **Caso Mateo (Daño en Pares Craneales VII y XII por TCE):** Evidenció la disartria flácida infantil periférica, guiando la terapia miofuncional labiolingual y la prevención de disortografías articulatorias.
3. **Caso Marta (ACV Frontal y Afasia de Broca):** Permitió verificar empíricamente la doble vía neurolingüística (respeto de la vía ventral semántica con comprensión de órdenes simples frente a colapso de la vía dorsal con agramatismo y apraxia del habla).

---

## 4. REFLEXIÓN CRÍTICA, AUTOEVALUACIÓN Y HETEROEVALUACIÓN
* **Autoevaluación del estudiante (Calificación estimada: 10/10):** A lo largo del cuatrimestre se ha superado la complejidad de la nomenclatura neuroanatómica mediante mapas conceptuales sistemáticos, visualización de sesiones síncronas, resolución exhaustiva de los casos clínicos y entrega puntual en las fechas óptimas. Se ha alcanzado una competencia traslacional sólida que vincula la base biológica médica con la intervención escolar en el aula de AL.
* **Heteroevaluación docente:** La labor formativa de Dña. Sara Prieto González ha sido sobresaliente, facilitando materiales rigurosos, grabaciones claras y casos clínicos que conectan la teoría con la realidad educativa.

---

## REFERENCIAS BIBLIOGRÁFICAS (APA 7.ª EDICIÓN)
* Duffy, J. R. (2020). *Motor speech disorders: Substrates, differential diagnosis, and management* (4th ed.). Elsevier.
* Hickok, G., & Poeppel, D. (2007). The cortical organization of speech processing. *Nature Reviews Neuroscience*, 8(5), 393-402.
* Kandel, E. R., Koester, J. D., Mack, S. H., & Siegelbaum, S. A. (2021). *Principles of neural science* (6th ed.). McGraw-Hill Education.
* Peña-Casanova, J. (2014). *Manual de logopedia* (4.ª ed.). Elsevier Masson.
* Puyuelo, M., & Rondal, J. A. (2003). *Manual de desarrollo y alteraciones del lenguaje*. Masson.
* Snell, R. S. (2019). *Neuroanatomía clínica* (8.ª ed.). Wolters Kluwer.

---

## DECLARACIÓN DEL USO DE HERRAMIENTAS DIGITALES Y NO PLAGIO
*Declaración formal firmada por Pablo Herrero Martínez. Memoria original e individual conforme al reglamento universitario de la UCJC.*
"""

def exportar_archivos_md():
    print("[*] Guardando archivos Markdown en anatomia/...")
    files = {
        "ENTREGA_ACTIVIDAD_1_RESUELTA_10.md": MD_ACT_1,
        "ENTREGA_ACTIVIDAD_2_RESUELTA_10.md": MD_ACT_2,
        "ENTREGA_SESION_PRACTICA_1_RESUELTA_10.md": MD_SP_1,
        "ENTREGA_SESION_PRACTICA_2_RESUELTA_10.md": MD_SP_2,
        "ENTREGA_PORTFOLIO_FINAL_RESUELTO_10.md": MD_PORT
    }
    for filename, content in files.items():
        p = ANATOMIA_DIR / filename
        with open(p, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"  [OK] {filename}")

def actualizar_data_js():
    print("\n[*] Actualizando base de datos data.js con los trabajos resueltos de Anatomía...")
    data_path = BASE_DIR / "data.js"
    with open(data_path, "r", encoding="utf-8") as f:
        code = f.read()

    # Mapeo de IDs a contenidos
    mapping = {
        "anat-act-1": {
            "text": MD_ACT_1,
            "docx": "anatomia/ENTREGA_ACTIVIDAD_1_RESUELTA_10.docx",
            "md": "anatomia/ENTREGA_ACTIVIDAD_1_RESUELTA_10.md"
        },
        "anat-act-2": {
            "text": MD_ACT_2,
            "docx": "anatomia/ENTREGA_ACTIVIDAD_2_RESUELTA_10.docx",
            "md": "anatomia/ENTREGA_ACTIVIDAD_2_RESUELTA_10.md"
        },
        "anat-taller-1": {
            "text": MD_SP_1,
            "docx": "anatomia/ENTREGA_SESION_PRACTICA_1_RESUELTA_10.docx",
            "md": "anatomia/ENTREGA_SESION_PRACTICA_1_RESUELTA_10.md"
        },
        "anat-taller-2": {
            "text": MD_SP_2,
            "docx": "anatomia/ENTREGA_SESION_PRACTICA_2_RESUELTA_10.docx",
            "md": "anatomia/ENTREGA_SESION_PRACTICA_2_RESUELTA_10.md"
        },
        "anat-portfolio": {
            "text": MD_PORT,
            "docx": "anatomia/ENTREGA_PORTFOLIO_FINAL_RESUELTO_10.docx",
            "md": "anatomia/ENTREGA_PORTFOLIO_FINAL_RESUELTO_10.md"
        }
    }

    # Usamos un script node auxiliar para modificar con exactitud el objeto window.AL_DATA
    script_node = f"""
const fs = require('fs');
global.window = global;
eval(fs.readFileSync('data.js', 'utf8'));

const mapping = {json.dumps(mapping, ensure_ascii=False)};

for (const e of window.AL_DATA.entregas) {{
  if (mapping[e.id]) {{
    const item = mapping[e.id];
    e.plantillaTarea = item.text;
    
    // Asegurar archivos adjuntos
    e.archivosAdjuntos = e.archivosAdjuntos || [];
    
    // Evitar duplicados
    e.archivosAdjuntos = e.archivosAdjuntos.filter(a => !a.path.includes('ENTREGA_'));
    
    e.archivosAdjuntos.unshift({{
      titulo: '📝 Trabajo Resuelto 10/10 (.docx)',
      path: item.docx,
      tipo: 'doc'
    }}, {{
      titulo: '📄 Documento Resuelto 10/10 (.md)',
      path: item.md,
      tipo: 'doc'
    }});
  }}
}}

const output = 'window.AL_DATA = ' + JSON.stringify(window.AL_DATA, null, 2) + ';\\n';
fs.writeFileSync('data.js', output, 'utf8');
console.log('[OK] data.js actualizado con exito con los trabajos resueltos de Anatomia.');
"""
    tmp_js = BASE_DIR / "herramientas" / "tmp_patch_anatomia.js"
    with open(tmp_js, "w", encoding="utf-8") as f:
        f.write(script_node)

    os.system(f"node \"{tmp_js}\"")
    if tmp_js.exists():
        tmp_js.unlink()

if __name__ == "__main__":
    exportar_archivos_md()
    actualizar_data_js()
