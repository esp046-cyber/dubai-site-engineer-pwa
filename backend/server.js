// Optional minimal static server. Run: node backend/server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT = path.resolve(__dirname, '..');
const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript',
  '.json': 'application/json', '.png': 'image/png', '.ico': 'image/x-icon',
  '.md': 'text/markdown', '.xml': 'application/xml', '.txt': 'text/plain', '.svg': 'image/svg+xml'
};

http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split('?')[0]);
  const rel = urlPath === '/' ? 'index.html' : urlPath.replace(/^\/+/, '');
  const filePath = path.resolve(ROOT, rel);
  if (!filePath.startsWith(ROOT + path.sep) && filePath !== ROOT) { res.writeHead(403); return res.end('Forbidden'); }
  fs.readFile(filePath, (err, data) => {
    if (err) {
      return fs.readFile(path.join(ROOT, 'offline.html'), (e, off) => {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(off || 'Not found');
      });
    }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath).toLowerCase()] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(PORT, () => console.log('AGAC server running at http://localhost:' + PORT + '/'));
