const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const resDir = path.join('android', 'app', 'src', 'main', 'res');

const sizes = {
  'mipmap-mdpi': { legacy: 48, round: 48, foreground: 108 },
  'mipmap-hdpi': { legacy: 72, round: 72, foreground: 162 },
  'mipmap-xhdpi': { legacy: 96, round: 96, foreground: 216 },
  'mipmap-xxhdpi': { legacy: 144, round: 144, foreground: 324 },
  'mipmap-xxxhdpi': { legacy: 192, round: 192, foreground: 432 }
};

// Target background color to key out: RGB (245, 242, 227)
const targetR = 245;
const targetG = 242;
const targetB = 227;

async function getTransparentLogo() {
  const img = sharp('img/icon-512.png');
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  
  const outBuf = Buffer.alloc(info.width * info.height * 4);
  
  for (let i = 0; i < info.width * info.height; i++) {
    const r = data[i * 3];
    const g = data[i * 3 + 1];
    const b = data[i * 3 + 2];
    
    const dist = Math.sqrt(
      Math.pow(r - targetR, 2) +
      Math.pow(g - targetG, 2) +
      Math.pow(b - targetB, 2)
    );
    
    outBuf[i * 4] = r;
    outBuf[i * 4 + 1] = g;
    outBuf[i * 4 + 2] = b;
    
    if (dist < 18) {
      outBuf[i * 4 + 3] = 0;
    } else if (dist < 48) {
      const ratio = (dist - 18) / 30;
      outBuf[i * 4 + 3] = Math.round(ratio * 255);
    } else {
      outBuf[i * 4 + 3] = 255;
    }
  }
  
  return sharp(outBuf, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4
    }
  }).png();
}

async function getRoundIcon() {
  // SVG Mask for round cropping
  const mask = Buffer.from(
    `<svg width="512" height="512"><circle cx="256" cy="256" r="256" fill="white"/></svg>`
  );
  return sharp('img/icon-512.png')
    .composite([{ input: mask, blend: 'dest-in' }])
    .png();
}

async function run() {
  console.log('Generating legacy, round, and adaptive Android icons...');
  
  const transparentLogo = await getTransparentLogo();
  const transparentLogoBuffer = await transparentLogo.toBuffer();
  
  const roundIcon = await getRoundIcon();
  const roundIconBuffer = await roundIcon.toBuffer();
  
  for (const [folder, config] of Object.entries(sizes)) {
    const folderPath = path.join(resDir, folder);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
    
    // 1. Generate Legacy Icon
    const legacyPath = path.join(folderPath, 'ic_launcher.png');
    await sharp('img/icon-512.png')
      .resize(config.legacy, config.legacy)
      .toFile(legacyPath);
    console.log(`Generated legacy icon: ${legacyPath} (${config.legacy}x${config.legacy})`);
    
    // 2. Generate Round Icon
    const roundPath = path.join(folderPath, 'ic_launcher_round.png');
    await sharp(roundIconBuffer)
      .resize(config.round, config.round)
      .toFile(roundPath);
    console.log(`Generated round icon: ${roundPath} (${config.round}x${config.round})`);
    
    // 3. Generate Adaptive Foreground Icon
    // Adaptive foreground requires the logo to be centered and scaled inside a safe zone (~65% of size)
    const foregroundPath = path.join(folderPath, 'ic_launcher_foreground.png');
    const logoSize = Math.round(config.foreground * 0.65);
    const padding = Math.round((config.foreground - logoSize) / 2);
    
    await sharp(transparentLogoBuffer)
      .resize(logoSize, logoSize)
      .extend({
        top: padding,
        bottom: config.foreground - logoSize - padding,
        left: padding,
        right: config.foreground - logoSize - padding,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .toFile(foregroundPath);
    console.log(`Generated adaptive foreground icon: ${foregroundPath} (${config.foreground}x${config.foreground})`);
  }
  
  console.log('Android icon generation complete!');
}

run().catch(err => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
