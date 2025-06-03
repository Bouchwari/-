@echo off
echo Building School Management System
echo This will package the application as a Windows installer (.exe)
echo.

REM Check if Node.js is installed
where node >nul 2>&1
if %ERRORLEVEL% neq 0 (
  echo Node.js is not installed. Please install Node.js and try again.
  exit /b 1
)

REM Build the application
echo Step 1: Building web application...
call npm run build

echo Step 2: Building Electron application...
cd electron
node build.js

echo.
echo Build process completed. Check the 'release' folder for the installer.
pause