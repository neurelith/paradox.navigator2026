const fs = require('fs');
const path = require('path');

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  let entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    let srcPath = path.join(src, entry.name);
    let destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 1. Create www directory if it doesn't exist
if (!fs.existsSync('www')) {
  fs.mkdirSync('www', { recursive: true });
}

// 2. Copy static files
const filesToCopy = [
  'index.html',
  'style.css',
  'app.js',
  'manifest.json',
  'sw.js'
];

filesToCopy.forEach(file => {
  if (fs.existsSync(file)) {
    fs.copyFileSync(file, path.join('www', file));
    console.log(`Copied ${file} to www/`);
  }
});

// 2.5 Copy compiled Android APK if it exists in native outputs
const apkSourcePath = path.join('android', 'app', 'build', 'outputs', 'apk', 'debug', 'app-debug.apk');
const apkDestPath = path.join('www', 'app-debug.apk');
if (fs.existsSync(apkSourcePath)) {
  fs.copyFileSync(apkSourcePath, apkDestPath);
  console.log('Copied compiled Android APK to www/');
} else {
  console.log('Android APK build artifact not found in native outputs yet; skipping copy.');
}

// 3. Copy img folder
if (fs.existsSync('img')) {
  copyDir('img', 'www/img');
  console.log('Copied img/ directory to www/img');
}

// 4. Copy src folder (contains JSON store)
if (fs.existsSync('src')) {
  copyDir('src', 'www/src');
  console.log('Copied src/ directory to www/src');
}

// 5. Copy css folder (contains local Tabler Icons CSS & fonts)
if (fs.existsSync('css')) {
  copyDir('css', 'www/css');
  console.log('Copied css/ directory to www/css');
}

console.log('Build completed successfully!');
