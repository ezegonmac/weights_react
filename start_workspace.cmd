@echo off

start cmd /k "code ."
start "" "%PROGRAMFILES%\Git\bin\sh.exe"

cd weights_react

npm start