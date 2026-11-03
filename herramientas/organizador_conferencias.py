# -*- coding: utf-8 -*-
"""
ORGANIZADOR Y CLASIFICADOR AUTOMÁTICO DE CONFERENCIAS / CLASES GRABADAS
Mención en Audición y Lenguaje (UCJC)
"""

import os
import re
import sys
import shutil
import glob
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
DOWNLOADS_DIR = Path(os.path.expanduser("~")) / "Downloads"

SUBJECT_RULES = [
    {
        "id": "anatomia",
        "folder": "anatomia",
        "keywords": ["anatomia", "sara prieto", "prieto gonzalez"],
        "nombre": "Anatomía, Fisiología y Neurología del Lenguaje"
    },
    {
        "id": "psicopatologia",
        "folder": "PSICOPATO",
        "keywords": ["psicopatologia", "rocio daniela", "concha ortiz"],
        "nombre": "Psicopatología de la Audición y el Lenguaje"
    },
    {
        "id": "oral",
        "folder": "TRASTORN. ORAL",
        "keywords": ["lenguaje oral", "trastornos del lenguaje oral", "soraya", "soraya rodriguez"],
        "nombre": "Evaluación e Intervención en los Trastornos del Lenguaje Oral"
    },
    {
        "id": "escrita",
        "folder": "TRASTORN. ESCR",
        "keywords": ["lengua escrita", "trastornos de la lengua escrita", "david sanchez", "toribio"],
        "nombre": "Evaluación e Intervención en los Trastornos de la Lengua Escrita"
    },
    {
        "id": "saac",
        "folder": "TIC",
        "keywords": ["saac", "cesar lopez", "sistemas alternativos", "sistemas aumentativos", "tic"],
        "nombre": "Sistemas Aumentativos y Alternativos de la Comunicación y TIC"
    }
]

def normalize_text(text):
    text = text.lower()
    replacements = (
        ("á", "a"), ("é", "e"), ("í", "i"), ("ó", "o"), ("ú", "u"),
        ("ñ", "n"), ("ü", "u")
    )
    for a, b in replacements:
        text = text.replace(a, b)
    return text

def detect_subject(filename):
    norm = normalize_text(filename)
    for rule in SUBJECT_RULES:
        for kw in rule["keywords"]:
            if normalize_text(kw) in norm:
                return rule
    return None

def detect_session_num(filename):
    norm = normalize_text(filename)
    m = re.search(r'recording\s*(\d+)', norm)
    if m:
        return int(m.group(1))
    m2 = re.search(r'sesi[oó]n\s*(\d+)', norm)
    if m2:
        return int(m2.group(1))
    m3 = re.search(r'clase\s*(\d+)', norm)
    if m3:
        return int(m3.group(1))
    return None

def process_downloads(dry_run=False):
    print("=" * 60)
    print("  BUSCANDO CONFERENCIAS EN DESCARGAS...")
    print("=" * 60)
    
    if not DOWNLOADS_DIR.exists():
        print(f"[!] No se encontró la carpeta de Descargas: {DOWNLOADS_DIR}")
        return []

    moved_files = []
    # Search all .mp4 files in Downloads
    for f in DOWNLOADS_DIR.glob("*.mp4"):
        fname = f.name
        # Skip unrelated videos
        subj = detect_subject(fname)
        if not subj:
            continue

        session_num = detect_session_num(fname)
        target_folder = BASE_DIR / subj["folder"]
        target_folder.mkdir(exist_ok=True)
        
        target_file = target_folder / fname
        
        print(f"\n[+] Encontrada conferencia:")
        print(f"    Archivo: {fname}")
        print(f"    Asignatura detectada: {subj['nombre']} ({subj['folder']}/)")
        print(f"    Sesión detectada: {session_num or 'No especificada'}")
        
        if dry_run:
            print("    [Modo prueba] No se moverá el archivo.")
            continue
            
        try:
            # If target exists and same size, skip
            if target_file.exists() and target_file.stat().st_size == f.stat().st_size:
                print("    [i] Ya existe en el destino con el mismo tamaño.")
            else:
                shutil.move(str(f), str(target_file))
                print(f"    [OK] Movido a: {subj['folder']}/{fname}")
            
            moved_files.append({
                "subjectId": subj["id"],
                "subjectFolder": subj["folder"],
                "filename": fname,
                "relPath": f"{subj['folder']}/{fname}",
                "sessionNum": session_num
            })
        except Exception as e:
            print(f"    [!] Error al mover archivo: {e}")

    return moved_files

if __name__ == "__main__":
    moved = process_downloads(dry_run=False)
    print(f"\nTotal conferencias clasificadas y movidas: {len(moved)}")
