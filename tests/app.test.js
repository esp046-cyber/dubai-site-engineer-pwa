// Run with: node tests/app.test.js   (exits non-zero on failure)
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
let failed = 0;
function check(name, cond) {
  if (cond) console.log('PASS  ' + name);
  else { console.error('FAIL  ' + name); failed++; }
}

const tips = JSON.parse(fs.readFileSync(path.join(root, 'api/tips.json'), 'utf8'));
const CATS = ['EDC', 'REGULATIONS', 'CONCRETE', 'FOUNDATIONS', 'QAQC', 'MANAGEMENT'];

check('tip array has exactly 120 items', tips.length === 120);
check('all categories are valid', tips.every(t => CATS.includes(t.cat)));
check('each category has 20 tips', CATS.every(c => tips.filter(t => t.cat === c).length === 20));
check('ids are unique 1..120', new Set(tips.map(t => t.id)).size === 120 && tips.every((t, i) => t.id === i + 1));
check('every tip has title and description', tips.every(t => t.title && t.desc));
check('no LaTeX markers in tips', tips.every(t => !/\$|\\text|\\pm/.test(t.title + t.desc)));

const script = fs.readFileSync(path.join(root, 'script.js'), 'utf8');
check('script.js registers the service worker', /serviceWorker\.register\(\s*['"]service-worker\.js['"]/.test(script));
const m = script.match(/const tipsData = (\[[\s\S]*?\n\]);/);
check('embedded tips match api/tips.json', !!m && JSON.stringify(JSON.parse(m[1])) === JSON.stringify(tips));

const sw = fs.readFileSync(path.join(root, 'service-worker.js'), 'utf8');
const listed = [...sw.matchAll(/'([^']+\.[a-z]+)'/g)].map(x => x[1]).filter(f => !f.includes('agac-dubai'));
check('every cached asset exists on disk', listed.every(f => fs.existsSync(path.join(root, f))));

const manifest = JSON.parse(fs.readFileSync(path.join(root, 'manifest.json'), 'utf8'));
check('manifest is standalone', manifest.display === 'standalone');
check('manifest theme color is #D4AF37', manifest.theme_color === '#D4AF37');
check('manifest icons exist', manifest.icons.every(i => fs.existsSync(path.join(root, i.src))));

if (failed) { console.error('\n' + failed + ' test(s) failed'); process.exit(1); }
console.log('\nAll tests passed');
