@echo off
chcp 65001 >nul
set PATH=C:\Program Files\nodejs;C:\Users\herri\AppData\Local\Programs\Python\Python312;C:\Users\herri\AppData\Local\Programs\Git\cmd;%PATH%
cd /d "%~dp0"

echo ======================================================================
echo   HERRAMIENTA EXTRACTORA DE DATOS (VIDEOS, FOTOS Y PDFS) - MENCION AL
echo ======================================================================
echo.
echo Escaneando carpetas de asignaturas y extrayendo metadatos...
echo.

python "herramientas\extractor.py"

echo.
echo ======================================================================
echo   [OK] Proceso terminado.
echo   Se ha generado multimedia_catalog.json y actualizado la base de datos.
echo ======================================================================
echo.
pause
