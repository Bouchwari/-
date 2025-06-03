// Desktop App Builder for School Management System
import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';
import { build } from 'electron-builder';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('=============================================');
console.log('Building School Management System Desktop App');
console.log('=============================================');

// Create icon file from SVG if it doesn't exist
if (!fs.existsSync(path.join(__dirname, 'electron', 'icon.png'))) {
  console.log('Creating icon.png from SVG...');
  
  // We'll use the existing icon from generated-icon.png
  if (fs.existsSync(path.join(__dirname, 'generated-icon.png'))) {
    fs.copyFileSync(
      path.join(__dirname, 'generated-icon.png'), 
      path.join(__dirname, 'electron', 'icon.png')
    );
    console.log('Icon created from generated-icon.png');
  } else {
    console.log('Warning: No icon file found, using default icon');
  }
}

// Step 1: Build the web app
console.log('\nStep 1: Building the web application...');
exec('npm run build', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error building web application: ${error.message}`);
    return;
  }
  
  console.log('Web application built successfully.');
  
  // Step 2: Build the Electron app
  console.log('\nStep 2: Building the Electron desktop application...');
  
  // Configuration
  const builderConfig = {
    appId: 'com.schoolmanagement.app',
    productName: 'ثانوية الوحدة الإعدادية',
    directories: {
      output: 'desktop-app'
    },
    files: [
      'dist/**/*',
      'electron/**/*',
      'package.json'
    ],
    win: {
      target: ['portable', 'nsis'],
      icon: 'electron/icon.png'
    },
    nsis: {
      oneClick: false,
      allowToChangeInstallationDirectory: true,
      createDesktopShortcut: true,
      shortcutName: 'ثانوية الوحدة الإعدادية - إدارة المواد'
    },
    portable: {
      artifactName: 'SchoolManagement.exe'
    }
  };
  
  // Build the app
  build({
    targets: process.platform === 'win32' ? 
      build.Platform.WINDOWS.createTarget() : 
      build.Platform.current().createTarget(),
    config: builderConfig
  })
  .then(() => {
    console.log('\n=============================================');
    console.log('Build completed successfully!');
    console.log('Your desktop application is ready in the "desktop-app" folder.');
    console.log('=============================================');
  })
  .catch((err) => {
    console.error('Error building desktop app:', err);
  });
});