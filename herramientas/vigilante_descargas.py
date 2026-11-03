# -*- coding: utf-8 -*-
"""
VIGILANTE AUTOMÁTICO DE DESCARGAS (BLACKBOARD COLLABORATE)
Monitorea la carpeta de Descargas del usuario. En cuanto detecta un archivo .mp4
completamente descargado de una asignatura, lo clasifica, lo mueve a su carpeta,
genera miniaturas y actualiza la web al instante.
"""

import os
import sys
import time
import subprocess
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
DOWNLOADS_DIR = Path(os.path.expanduser("~")) / "Downloads"

# Añadir herramientas al path
sys.path.insert(0, str(BASE_DIR / "herramientas"))
from organizador_conferencias import detect_subject, process_downloads

def is_file_ready(filepath):
    """Comprueba si el archivo ha terminado de descargarse y no está bloqueado por Chrome."""
    if not os.path.exists(filepath):
        return False
    # Si existe un archivo .crdownload con el mismo nombre base, aún se está descargando
    crdownload = str(filepath) + ".crdownload"
    if os.path.exists(crdownload):
        return False
    
    # Comprobar si podemos abrirlo en modo append (significa que Chrome cerró el archivo)
    try:
        with open(filepath, "ab"):
            pass
        return True
    except (IOError, PermissionError):
        return False

def main_loop():
    print(f"[Vigilante] Monitorizando descargas en: {DOWNLOADS_DIR}")
    print("[Vigilante] Esperando a que descargues conferencias en Blackboard...")
    sys.stdout.flush()

    while True:
        try:
            mp4_files = list(DOWNLOADS_DIR.glob("*.mp4"))
            candidates = []
            for f in mp4_files:
                if detect_subject(f.name):
                    if is_file_ready(f):
                        candidates.append(f)

            if candidates:
                print(f"\n[Vigilante] ¡Detectadas {len(candidates)} grabaciones listas para importar!")
                moved = process_downloads(dry_run=False)
                if moved:
                    print("[Vigilante] Actualizando base de datos, miniaturas y mediateca...")
                    subprocess.run([sys.executable, str(BASE_DIR / "herramientas" / "extractor.py")])
                    print("[Vigilante] [OK] ¡Web actualizada con éxito! Listo para la siguiente descarga.\n")
                    sys.stdout.flush()
        except Exception as e:
            print(f"[Vigilante] Error temporal: {e}")

        time.sleep(4)

if __name__ == "__main__":
    main_loop()
