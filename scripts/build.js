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

// 1. Create www directory
if (fs.existsSync('www')) {
  fs.rmSync('www', { recursive: true, force: true });
}
fs.mkdirSync('www', { recursive: true });

// 2. Copy static files
const filesToCopy = [
  'index.html',
  'style.css',
  'app.js',
  'manifest.json',
  'sw.js',
  'paradox_2026_event_tracker.html',
  'app-debug.apk'
];

filesToCopy.forEach(file => {
  if (fs.existsSync(file)) {
    fs.copyFileSync(file, path.join('www', file));
    console.log(`Copied ${file} to www/`);
  }
});

// 3. Copy img folder
if (fs.existsSync('img')) {
  copyDir('img', 'www/img');
  console.log('Copied img/ directory to www/img');
}

console.log('Build completed successfully!');
