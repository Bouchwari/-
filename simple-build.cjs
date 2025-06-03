const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const builder = require('electron-builder');

console.log('=============================================');
console.log('Simple School Management System Builder');
console.log('=============================================');

// Make sure electron folder has an icon.png
const iconPath = path.join(__dirname, 'electron', 'icon.png');
if (!fs.existsSync(iconPath)) {
  const generatedIconPath = path.join(__dirname, 'generated-icon.png');
  if (fs.existsSync(generatedIconPath)) {
    fs.copyFileSync(generatedIconPath, iconPath);
    console.log('Copied generated-icon.png to electron/icon.png');
  } else {
    console.log('Warning: No icon file found');
  }
}

// Step 1: Build the web application
console.log('\nStep 1: Building web application...');
exec('npm run build', (error, stdout, stderr) => {
  if (error) {
    console.error('Error building web app:', error);
    return;
  }
  
  console.log('Web app built successfully!');
  
  // Step 2: Build the Electron app
  console.log('\nStep 2: Building desktop app...');
  
  const config = {
    directories: {
      output: 'desktop-build'
    },
    files: [
      'dist/**/*',
      'electron/**/*'
    ],
    win: {
      target: 'portable'
    }
  };
  
  builder.build({
    config: config
  })
  .then(() => {
    console.log('\nDesktop app built successfully!');
    console.log('Check the desktop-build folder for your application.');
  })
  .catch(err => {
    console.error('Error building desktop app:', err);
  });
});