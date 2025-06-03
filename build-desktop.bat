@echo off
echo Building School Management System Desktop App
echo ============================================

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
  echo Node.js is required but not found.
  echo Please install Node.js from https://nodejs.org/
  echo.
  pause
  exit /b 1
)

REM First, install dependencies if needed
if not exist node_modules (
  echo Installing dependencies...
  call npm install
)

REM Run the build script
echo.
echo Running simple build script...
echo.
node simple-build.cjs

REM If the simple build fails, try the alternative script
if %ERRORLEVEL% neq 0 (
  echo.
  echo Simple build failed. Trying alternative build method...
  echo.
  node build-desktop-app.cjs
)

echo.
if %ERRORLEVEL% neq 0 (
  echo There was an error building the desktop app.
) else (
  echo Build completed! Check the desktop-app folder for your application files.
)

pause