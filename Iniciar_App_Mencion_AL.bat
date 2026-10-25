@echo off
chcp 65001 >nul
set PATH=C:\Program Files\nodejs;C:\Users\herri\AppData\Local\Programs\Python\Python312;C:\Users\herri\AppData\Local\Programs\Git\cmd;%PATH%
title Mencion Audicion y Lenguaje - UCJC (2026-2027)
cd /d "%~dp0"
echo ======================================================================
echo   Iniciando la aplicacion Web de la Mencion en Audicion y Lenguaje
echo ======================================================================
echo.
echo Abriendo en tu navegador predeterminado (http://localhost:8090)...
start "" "http://localhost:8090/index.html"
echo.
echo Servidor web local activo. Para cerrarlo, simplemente cierra esta ventana.
python -m http.server 8090
