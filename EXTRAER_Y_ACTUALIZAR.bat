@echo off
chcp 65001 >nul
set PATH=C:\Program Files\nodejs;C:\Users\herri\AppData\Local\Programs\Python\Python312;C:\Users\herri\AppData\Local\Programs\Git\cmd;%PATH%
cd /d "%~dp0"

echo ======================================================================
echo   1. CLASIFICANDO Y ORGANIZANDO CONFERENCIAS DESDE DESCARGAS...
echo ======================================================================
echo.
python "herramientas\organizador_conferencias.py"
echo.

echo ======================================================================
echo   2. EXTRAYENDO METADATOS (VÍDEOS, MINIATURAS, FOTOS Y PDFS)...
echo ======================================================================
echo.
python "herramientas\extractor.py"

echo.
echo ======================================================================
echo   [OK] Proceso terminado.
echo   Se ha generado multimedia_catalog.json y actualizado la base de datos.
echo ======================================================================
echo.
pause
