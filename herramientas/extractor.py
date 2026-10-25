# -*- coding: utf-8 -*-
"""
HERRAMIENTA EXTRACTORA DE MULTIMEDIA Y ACTUALIZADOR DE LA WEB
Mención en Audición y Lenguaje (UCJC)
"""

import os
import sys
import re
import json
import glob
import datetime
from pathlib import Path

# Configurar salida segura utf-8
if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

# Librerías instaladas
try:
    import pymupdf
except ImportError:
    pymupdf = None

try:
    from PIL import Image
except ImportError:
    Image = None

try:
    import cv2
except ImportError:
    cv2 = None

BASE_DIR = Path(__file__).resolve().parent.parent

SUBJECTS_CONFIG = {
    "psicopatologia": {
        "folder": "PSICOPATO",
        "nombre": "Psicopatología de la Audición y el Lenguaje",
        "corto": "Psicopatología AL",
        "profesor": "Dra. Rocío Daniela Concha Ortiz",
        "color": "#6366f1",
        "icono": "🧠"
    },
    "anatomia": {
        "folder": "anatomia",
        "nombre": "Anatomía, Fisiología y Neurología del Lenguaje",
        "corto": "Anatomía y Neurología",
        "profesor": "Sara Prieto González",
        "color": "#ec4899",
        "icono": "🫀"
    },
    "oral": {
        "folder": "TRASTORN. ORAL",
        "nombre": "Evaluación e Intervención en los Trastornos del Lenguaje Oral",
        "corto": "Trastornos Lenguaje Oral",
        "profesor": "Soraya Rodríguez Hernández",
        "color": "#10b981",
        "icono": "🗣️"
    },
    "escrita": {
        "folder": "TRASTORN. ESCR",
        "nombre": "Evaluación e Intervención en los Trastornos de la Lengua Escrita",
        "corto": "Trastornos Lengua Escrita",
        "profesor": "David Sánchez Toribio",
        "color": "#f59e0b",
        "icono": "✍️"
    },
    "saac": {
        "folder": "TIC",
        "nombre": "Sistemas Aumentativos y Alternativos de la Comunicación y las TIC",
        "corto": "SAAC y TIC",
        "profesor": "César López",
        "color": "#06b6d4",
        "icono": "💬"
    }
}

def scan_all_files():
    """Escanea todos los archivos de las 5 carpetas de asignaturas."""
    files_by_type = {
        "videos": [],
        "pdfs": [],
        "images": [],
        "docs": []
    }

    thumbnails_dir = BASE_DIR / "thumbnails"
    thumbnails_dir.mkdir(exist_ok=True)

    print("\n[+] Escaneando archivos multimedia en la carpeta del curso...")

    for asig_id, cfg in SUBJECTS_CONFIG.items():
        folder_path = BASE_DIR / cfg["folder"]
        if not folder_path.exists():
            print(f"  [!] Carpeta no encontrada: {folder_path}")
            continue

        for root, dirs, files in os.walk(folder_path):
            for file in files:
                full_path = Path(root) / file
                rel_path = full_path.relative_to(BASE_DIR).as_posix()
                ext = full_path.suffix.lower()
                size_mb = round(full_path.stat().st_size / (1024 * 1024), 2)

                item = {
                    "id": f"{asig_id}-{file}",
                    "asignaturaId": asig_id,
                    "asignaturaNombre": cfg["nombre"],
                    "nombre": file,
                    "relPath": rel_path,
                    "sizeMb": size_mb,
                    "ext": ext
                }

                if ext in [".mp4", ".mov", ".mkv", ".avi"]:
                    duration_sec = 0
                    width, height = 0, 0
                    fps = 0
                    thumb_rel_path = None

                    if cv2:
                        try:
                            cap = cv2.VideoCapture(str(full_path))
                            if cap.isOpened():
                                total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
                                fps = cap.get(cv2.CAP_PROP_FPS) or 25.0
                                width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
                                height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
                                duration_sec = round(total_frames / fps, 1)

                                # Generar miniatura en el 10% del vídeo
                                frame_target = int(total_frames * 0.1)
                                cap.set(cv2.CAP_PROP_POS_FRAMES, frame_target)
                                ret, frame = cap.read()
                                if ret:
                                    clean_stem = re.sub(r'[^a-zA-Z0-9_\-]', '_', full_path.stem)
                                    clean_stem = re.sub(r'_+', '_', clean_stem).strip('_')
                                    safe_name = f"{asig_id}_{clean_stem}"
                                    thumb_name = f"thumb_{safe_name}.jpg"
                                    thumb_file = thumbnails_dir / thumb_name
                                    thumb_img = cv2.resize(frame, (480, 270))
                                    cv2.imwrite(str(thumb_file), thumb_img)
                                    thumb_rel_path = f"thumbnails/{thumb_name}"
                            cap.release()
                        except Exception as e:
                            print(f"    [!] Error en video {file}: {e}")

                    item["durationSec"] = duration_sec
                    item["durationMin"] = round(duration_sec / 60, 1)
                    item["resolution"] = f"{width}x{height}" if width else "Desconocida"
                    item["fps"] = round(fps, 1)
                    item["thumbnail"] = thumb_rel_path
                    files_by_type["videos"].append(item)

                elif ext == ".pdf":
                    num_pages = 0
                    preview_text = ""
                    if pymupdf:
                        try:
                            doc = pymupdf.open(str(full_path))
                            num_pages = len(doc)
                            if num_pages > 0:
                                preview_text = doc[0].get_text("text")[:600].replace("\n", " ").strip()
                            doc.close()
                        except Exception as e:
                            pass

                    item["numPages"] = num_pages
                    item["previewText"] = preview_text
                    files_by_type["pdfs"].append(item)

                elif ext in [".jpg", ".jpeg", ".png", ".webp"]:
                    width, height = 0, 0
                    if Image:
                        try:
                            with Image.open(str(full_path)) as img:
                                width, height = img.size
                        except Exception:
                            pass
                    item["dimensions"] = f"{width}x{height}" if width else "Desconocida"
                    files_by_type["images"].append(item)

                elif ext in [".doc", ".docx"]:
                    files_by_type["docs"].append(item)

    print(f"  [OK] Videos encontrados: {len(files_by_type['videos'])}")
    print(f"  [OK] PDFs encontrados: {len(files_by_type['pdfs'])}")
    print(f"  [OK] Fotos/Rubricas encontradas: {len(files_by_type['images'])}")
    print(f"  [OK] Documentos Word encontrados: {len(files_by_type['docs'])}")

    return files_by_type

def build_multimedia_catalog(files_by_type):
    """Guarda un catálogo JSON y un script JS para que la web lo consulte offline u online."""
    catalog_path = BASE_DIR / "multimedia_catalog.json"
    js_catalog_path = BASE_DIR / "multimedia_catalog.js"
    data = {
        "lastUpdated": datetime.datetime.now().isoformat(),
        "totalVideos": len(files_by_type["videos"]),
        "totalPdfs": len(files_by_type["pdfs"]),
        "totalImages": len(files_by_type["images"]),
        "totalDocs": len(files_by_type["docs"]),
        "files": files_by_type
    }
    with open(catalog_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    with open(js_catalog_path, "w", encoding="utf-8") as f:
        f.write("window.MULTIMEDIA_CATALOG = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n")
    print(f"[OK] Catalogo multimedia generado en: {catalog_path.name} y {js_catalog_path.name}")
    return data

def update_data_study_paths():
    """Actualiza data_study.js verificando que todos los PDFs de las 25 unidades usen sus prefijos."""
    study_path = BASE_DIR / "data_study.js"
    if not study_path.exists():
        return
    with open(study_path, "r", encoding="utf-8") as f:
        content = f.read()

    replacements = [
        ('"Psicopatología de la audición y el lenguaje_Unidad ', '"PSICOPATO/Psicopatología de la audición y el lenguaje_Unidad '),
        ('"Anatomía Fisiología y Neurología del Lenguaje_Unidad ', '"anatomia/Anatomía Fisiología y Neurología del Lenguaje_Unidad '),
        ('"Evaluación e intervención en los trastornos del lenguaje oral_Unidad ', '"TRASTORN. ORAL/Evaluación e intervención en los trastornos del lenguaje oral_Unidad '),
        ('"Evaluación e intervención en los trastornos del lengua escrita Unidad ', '"TRASTORN. ESCR/Evaluación e intervención en los trastornos del lengua escrita Unidad '),
        ('"Los sistemas alternativos y aumentativos Unidad ', '"TIC/Los sistemas alternativos y aumentativos Unidad ')
    ]

    for old_s, new_s in replacements:
        content = content.replace(old_s, new_s)

    with open(study_path, "w", encoding="utf-8") as f:
        f.write(content)
    print("[OK] data_study.js verificado y actualizado con prefijos de carpetas.")

def generate_gitignore():
    """Asegura que .gitignore ignore *.mp4 y temporales para GitHub Pages."""
    gitignore_path = BASE_DIR / ".gitignore"
    rules = [
        "# Archivos pesados que exceden el limite de 100MB de GitHub",
        "*.mp4",
        "*.mov",
        "*.avi",
        "*.mkv",
        "# Archivos temporales y caches",
        "node_modules/",
        "__pycache__/",
        "*.pyc",
        ".env",
        ".DS_Store",
        "Thumbs.db"
    ]
    with open(gitignore_path, "w", encoding="utf-8") as f:
        f.write("\n".join(rules) + "\n")
    print("[OK] .gitignore configurado (*.mp4 excluidos para subir a GitHub sin limite de tamano).")

def generate_ics_calendar():
    """Genera el archivo Calendario_Mencion_AL_UCJC_herrizpab.ics con todas las fechas oficiales."""
    ics_path = BASE_DIR / "Calendario_Mencion_AL_UCJC_herrizpab.ics"
    
    events = [
        ("psico-taller-1", "Psicopatologia AL: Taller Practico 1 (Caso Real)", "20261106T235900", "Entrega caso Lucia, Alvaro o Mario (max 2 pag PDF)"),
        ("anat-taller-1", "Anatomia: Taller Practico 1 (Caso Daniel)", "20261106T235900", "Adaptaciones de aula para Daniel (5 anos, implante coclear)"),
        ("oral-taller-1", "Trastornos Oral: Taller Practico 1 (TEA Sensorial)", "20261106T235900", "Casos Martin, Ismael y Alicia con Elena Perez Gutierrez"),
        ("escr-taller-1", "Trastornos Escrita: Taller Practico 1 (Video Nino 8-9 anos)", "20261106T235900", "Analisis de lectura de palabras y recomendaciones familiares"),
        ("saac-taller-1", "SAAC y TIC: Taller Practico 1 (Caso Alex)", "20261106T235900", "Ficha de analisis critico (1 pag PDF) + cuestionario"),
        
        ("anat-act-1", "Anatomia: Actividad 1 (Mapa Conceptual Pares Craneales)", "20261113T235900", "Mapa conceptual pares craneales y su relacion con el lenguaje (2-3 caras)"),
        ("psico-act-1", "Psicopatologia AL: Actividad 1 (Video 60s Unidad 3)", "20261113T235900", "Video informativo max 60 segundos + cita verbal y subtitulos"),
        ("oral-act-1", "Trastornos Oral: Actividad 1 (Caso Marco)", "20261113T235900", "Caso Marco (5a 8m) y propuesta preventiva de aula (2-3 pag)"),
        ("saac-act-1", "SAAC y TIC: Actividad 1 (Caso Sara 8 anos)", "20261113T235900", "Caso Sara (55 dB, FM, Bimodal) actividad de 10 min (2-4 caras)"),
        ("escr-act-1", "Trastornos Escrita: Actividad 1 (Caso Nino 8 anos)", "20261126T235900", "Analisis de lectura en video nino 8 anos (max 2 caras)"),
        
        ("psico-taller-2", "Psicopatologia AL: Taller Practico 2 (Aula de Acogida)", "20261204T235900", "Diseno Aula de Acogida con plano y 8 apartados (max 3 pag)"),
        ("anat-taller-2", "Anatomia: Taller Practico 2 (Caso Marta)", "20261204T235900", "Caso Marta (58 anos, afasia de Broca, 4 preguntas con evidencia)"),
        ("oral-taller-2", "Trastornos Oral: Taller Practico 2 (Disfemia)", "20261204T235900", "Analisis de testimonio real sobre disfemia y estrategias en el aula"),
        ("escr-taller-2", "Trastornos Escrita: Taller Practico 2 (Videos Paciente TCE)", "20261204T235900", "Analisis de numeros y lectura en paciente con TCE (max 1,5 caras)"),
        ("saac-taller-2", "SAAC y TIC: Taller Practico 2 (Aula Accesible DUA)", "20261204T235900", "Ficha diseno aula accesible DUA (1 pag con boceto) + cuestionario"),
        
        ("escr-act-2", "Trastornos Escrita: Actividad 2 (Analisis 2 Muestras)", "20261203T235900", "Analisis de 6 fallos en las 2 imagenes de escritura libre (2-3 caras)"),
        ("anat-act-2", "Anatomia: Actividad 2 (Caso Clinico Ficticio)", "20261211T235900", "Caso clinico ficticio de dano neurologico/anatomico (2-3 caras)"),
        ("psico-act-2", "Psicopatologia AL: Actividad 2 (Poster Cientifico)", "20261211T235900", "Poster de congreso (1 cara) + justificacion (1 cara) de 1 articulo"),
        ("oral-act-2", "Trastornos Oral: Actividad 2 (Caso Laura - Tabla pag 3)", "20261211T235900", "Completar SOLO la tabla de pag 3 sobre el caso de Laura (fisura palatina)"),
        ("saac-act-2", "SAAC y TIC: Actividad 2 (AsTeRICS Grid o SymboTalk)", "20270121T235900", "Analisis critico de herramienta CAA para TEA (2-4 caras)"),
        
        ("escr-portfolio", "Trastornos Escrita: Portfolio Final (Canva 2 min)", "20270103T235900", "Presentacion Canva grabada de 2 minutos (P1 aprendizajes, P2 evolucion)"),
        ("psico-portfolio", "Psicopatologia AL: Portfolio Final (Memoria 7 pag)", "20270115T235900", "Memoria individual en Word/PDF de max 7 paginas (3 capitulos)"),
        ("anat-portfolio", "Anatomia: Portfolio Final (Memoria 2-3 pag)", "20270115T235900", "Memoria en Word/PDF de 2-3 paginas con autoevaluacion"),
        ("oral-portfolio", "Trastornos Oral: Portfolio Final (Canva con voz)", "20270115T235900", "Canva (10-15 diapositivas) grabada con voz y heteroevaluacion"),
        ("saac-portfolio", "SAAC y TIC: Portfolio Final (Portafolio 6 apartados)", "20270121T235900", "Portafolio en PDF (4-6 paginas o 6-10 diapositivas)"),
        
        ("examen-general", "EXAMENES FINALES ORDINARIOS (Todas las Asignaturas)", "20270205T090000", "Examenes online tipo test en Blackboard con Proctoring")
    ]
    
    lines = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//Mencion AL UCJC//Calendario Oficial herrizpab//ES",
        "CALSCALE:GREGORIAN",
        "METHOD:PUBLISH",
        "X-WR-CALNAME:Mencion AL UCJC 2026-27 (Pablo Herrero)",
        "X-WR-TIMEZONE:Europe/Madrid"
    ]
    
    for uid, summary, dtend, desc in events:
        lines.extend([
            "BEGIN:VEVENT",
            f"UID:{uid}@ucjc.mencional.es",
            f"DTSTAMP:{datetime.datetime.now().strftime('%Y%m%dT%H%M%SZ')}",
            f"DTSTART:{dtend}",
            f"DTEND:{dtend}",
            f"SUMMARY:{summary}",
            f"DESCRIPTION:{desc}",
            "LOCATION:Campus Virtual Blackboard UCJC",
            "STATUS:CONFIRMED",
            "END:VEVENT"
        ])
        
    lines.append("END:VCALENDAR")
    
    with open(ics_path, "w", encoding="utf-8") as f:
        f.write("\r\n".join(lines) + "\r\n")
    
    ics_universal = BASE_DIR / "Calendario_Mencion_AL_UCJC.ics"
    with open(ics_universal, "w", encoding="utf-8") as f:
        f.write("\r\n".join(lines) + "\r\n")
    print(f"[OK] Calendarios iCalendar generados: {ics_path.name} y {ics_universal.name}")

def main():
    print("=" * 60)
    print("  HERRAMIENTA EXTRACTORA MULTIMEDIA - MENCION AL UCJC")
    print("=" * 60)
    
    files_by_type = scan_all_files()
    build_multimedia_catalog(files_by_type)
    update_data_study_paths()

    # Ejecutar actualizador de data.js con NodeJS
    print("\n[+] Sincronizando base de datos data.js...")
    try:
        import subprocess
        res = subprocess.run(["node", str(BASE_DIR / "herramientas" / "apply_official_updates.js")], capture_output=True, text=True)
        if res.returncode == 0:
            print(res.stdout.strip())
        else:
            print(f"  [!] Advertencia actualizando data.js: {res.stderr}")
    except Exception as e:
        print(f"  [!] No se pudo ejecutar apply_official_updates.js: {e}")

    generate_gitignore()
    generate_ics_calendar()
    
    print("\n" + "=" * 60)
    print("  [OK] EXTRACCION Y SINCRONIZACION COMPLETADA CON EXITO!")
    print("=" * 60)

if __name__ == "__main__":
    main()
