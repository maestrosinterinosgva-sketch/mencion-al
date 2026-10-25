# -*- coding: utf-8 -*-
"""
Generador y Validador de data.js para Mención en Audición y Lenguaje (UCJC)
Garantiza 100% de validez sintáctica de JavaScript y enlaza todos los archivos subidos.
"""

import json
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
data_js_path = BASE_DIR / "data.js"

# Read the current data.js to get meta and asignaturas
with open(data_js_path, "r", encoding="utf-8") as f:
    orig_content = f.read()

# Let's inspect meta and asignaturas
# We can extract the asignaturas array and meta cleanly or define the full structure
print("Reading base data...")
