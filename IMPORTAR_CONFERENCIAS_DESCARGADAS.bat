@echo off
chcp 65001 >nul
set PATH=C:\Program Files\nodejs;C:\Users\herri\AppData\Local\Programs\Python\Python312;C:\Users\herri\AppData\Local\Programs\Git\cmd;%PATH%
cd /d "%~dp0"

title Importar Conferencias Descargadas - Mencion AL UCJC

echo ======================================================================
echo   IMPORTADOR AUTOMÁTICO DE CONFERENCIAS (UCJC BLACKBOARD)
echo ======================================================================
echo.
echo Escaneando la carpeta de Descargas de Windows...
echo Buscando grabaciones de Anatomía, Psicopatología, Oral, Escrita y SAAC...
echo.

python "herramientas\organizador_conferencias.py"

echo.
echo Sincronizando mediateca, miniaturas y web...
python "herramientas\extractor.py"

echo.
echo ======================================================================
echo   [OK] Todas las conferencias han sido clasificadas en sus carpetas
echo   y añadidas a la web.
echo ======================================================================
echo.
pause
