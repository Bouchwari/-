@echo off
echo Starting School Management System in development mode
echo.

REM Check if Node.js is installed
where node >nul 2>&1
if %ERRORLEVEL% neq 0 (
  echo Node.js is not installed. Please install Node.js and try again.
  exit /b 1
)

REM Run the server and Electron concurrently
echo Starting application...
npx concurrently "npm run dev" "npx electron electron/main.js"