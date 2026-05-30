/**
 * Paradox Navigator — Image Optimizer
 * Converts event cover photos to compressed WebP thumbnails.
 * 
 * Usage: node scripts/optimize-images.js
 * Requires: npm install sharp
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SOURCE_DIR = path.join(__dirname, '..', 'events media');
const OUTPUT_DIR = path.join(__dirname, '..', 'img', 'events');
const MAX_WIDTH = 600;
const QUALITY = 80;

const CATEGORIES = ['culturals', 'sports', 'technical'];

function sanitizeFilename(name) {
  return name
    .replace(/^Copy of /i, '')          // Remove "Copy of " prefix
    .replace(/\.avif\.jpg$/i, '.webp')  // .avif.jpg → .webp
    .replace(/\.jpeg$/i, '.webp')       // .jpeg → .webp
    .replace(/\.jpg$/i, '.webp')        // .jpg → .webp
    .replace(/\.png$/i, '.webp')        // .png → .webp
    .replace(/\s+/g, '-')               // spaces → hyphens
    .replace(/[()]/g, '')               // remove parens
    .toLowerCase();
}

async function optimizeImage(inputPath, outputPath) {
  try {
    const metadata = await sharp(inputPath).metadata();
    const needsResize = metadata.width > MAX_WIDTH;

    let pipeline = sharp(inputPath);
    if (needsResize) {
      pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
    }

    await pipeline
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    const inputSize = fs.statSync(inputPath).size;
    const outputSize = fs.statSync(outputPath).size;
    const saved = ((1 - outputSize / inputSize) * 100).toFixed(1);

    console.log(
      `  ✓ ${path.basename(inputPath)} → ${path.basename(outputPath)}` +
      `  (${(inputSize / 1024).toFixed(0)}KB → ${(outputSize / 1024).toFixed(0)}KB, -${saved}%)`
    );

    return { input: inputPath, output: outputPath, inputSize, outputSize };
  } catch (err) {
    console.error(`  ✗ FAILED: ${path.basename(inputPath)} — ${err.message}`);
    return null;
  }
}

async function main() {
  console.log('╔══════════════════════════════════════════════╗');
  console.log('║  Paradox Navigator — Image Optimizer         ║');
  console.log('╚══════════════════════════════════════════════╝\n');

  let totalInput = 0;
  let totalOutput = 0;
  let fileCount = 0;
  let failures = 0;

  for (const category of CATEGORIES) {
    const srcDir = path.join(SOURCE_DIR, category);
    const outDir = path.join(OUTPUT_DIR, category);

    if (!fs.existsSync(srcDir)) {
      console.log(`⚠ Source directory not found: ${srcDir}`);
      continue;
    }

    fs.mkdirSync(outDir, { recursive: true });

    const files = fs.readdirSync(srcDir).filter(f => /\.(jpg|jpeg|png|avif)$/i.test(f));
    console.log(`\n📂 ${category}/ (${files.length} files)`);

    for (const file of files) {
      const inputPath = path.join(srcDir, file);
      const outputName = sanitizeFilename(file);
      const outputPath = path.join(outDir, outputName);

      const result = await optimizeImage(inputPath, outputPath);
      if (result) {
        totalInput += result.inputSize;
        totalOutput += result.outputSize;
        fileCount++;
      } else {
        failures++;
      }
    }
  }

  console.log('\n══════════════════════════════════════════════');
  console.log(`📊 Results: ${fileCount} files optimized, ${failures} failures`);
  console.log(`   Input:  ${(totalInput / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Output: ${(totalOutput / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Saved:  ${((1 - totalOutput / totalInput) * 100).toFixed(1)}%`);
  console.log('══════════════════════════════════════════════\n');

  // Generate the mapping for app.js
  console.log('📋 EVENT_COVERS mapping (copy to app.js):\n');
  console.log('const EVENT_COVERS = {');
  for (const category of CATEGORIES) {
    const outDir = path.join(OUTPUT_DIR, category);
    if (!fs.existsSync(outDir)) continue;
    const files = fs.readdirSync(outDir).filter(f => f.endsWith('.webp'));
    for (const file of files) {
      const key = file
        .replace('.webp', '')
        .replace(/-/g, ' ')
        .replace(/\b\w/g, c => c); // keep lowercase
      console.log(`  "${key}": "img/events/${category}/${file}",`);
    }
  }
  console.log('};\n');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
