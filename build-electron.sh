#!/bin/bash
echo "Building School Management System"
echo "This will package the application as a Windows installer (.exe)"
echo ""

# Skip Node.js check as we're in Replit environment
# which has Node.js available but in a different way

# Build the application
echo "Step 1: Building web application..."
npm run build

echo "Step 2: Building Electron application..."
cd electron
node build.js

echo ""
echo "Build process completed. Check the 'release' folder for the installer."
read -p "Press Enter to continue..."