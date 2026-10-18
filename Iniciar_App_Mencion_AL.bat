@echo off
chcp 65001 >nul
title Mencion Audicion y Lenguaje - UCJC (2026-2027)
cd /d "%~dp0"
echo Abriendo la aplicacion de la Mencion en Audicion y Lenguaje (UCJC)...
start "" "http://localhost:8090/index.html"
python -m http.server 8090
