@echo off
chcp 65001 >nul
title Subir Mencion AL (UCJC) a GitHub Pages y Neon Cloud
set PATH=C:\Program Files\nodejs;C:\Users\herri\AppData\Roaming\npm;C:\Users\herri\AppData\Local\Programs\Git\cmd;%PATH%
cd /d "%~dp0"

echo ========================================================
echo   ☁️ Subiendo Mencion AL (UCJC) a GitHub Pages
echo   Repositorio: maestrosinterinosgva-sketch/mencion-al
echo ========================================================
echo.

git init
git config user.name "Pablo"
git config user.email "herrizpab@gmail.com"
git remote remove origin >nul 2>nul
git remote add origin https://github.com/maestrosinterinosgva-sketch/mencion-al.git
git branch -M main
git add .
git commit -m "Publicacion Web Mencion Audicion y Lenguaje UCJC + Neon Cloud"
git push -u origin main --force

echo.
echo ========================================================
echo   [OK] Codigo subido con exito a GitHub!
echo   Tu web estara disponible en:
echo   https://maestrosinterinosgva-sketch.github.io/mencion-al/
echo ========================================================
pause
