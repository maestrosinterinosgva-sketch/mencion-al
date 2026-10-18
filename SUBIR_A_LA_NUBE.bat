@echo off
chcp 65001 >nul
set PATH=C:\Program Files\nodejs;C:\Users\herri\AppData\Roaming\npm;C:\Users\herri\AppData\Local\Programs\Git\cmd;C:\Users\herri\Desktop\destinos\tools\git\cmd;%PATH%
cd /d "%~dp0"
echo ========================================================
echo   Subiendo Mencion AL (UCJC) a GitHub Pages...
echo ========================================================
echo.
git branch -M main
git add .
git commit -m "Publicacion Web Mencion AL UCJC"
git push -u origin main --force
echo.
echo ========================================================
echo   [OK] Codigo subido a GitHub con exito!
echo   Entra en: https://github.com/maestrosinterinosgva-sketch/mencion-al/settings/pages
echo   Selecciona la rama "main" y pulsa Save.
echo ========================================================
pause
