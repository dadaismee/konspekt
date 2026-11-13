const http = require('http');
const fs = require('fs');
const path = require('path');
const { saveLead } = require('./lib/sendToSheets');

const publicDir = path.join(__dirname, 'public');
const port = process.env.PORT || 3000;

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml',
  '.pdf': 'application/pdf',
};

const sendJson = (res, statusCode, payload) => {
  res.writeHead(statusCode, {
    ...cors,
    'Content-Type': 'application/json; charset=utf-8',
    'X-Content-Type-Options': 'nosniff',
  });
  res.end(JSON.stringify(payload));
};

const readJsonBody = (req) =>
  new Promise((resolve, reject) => {
    let body = '';
    let tooLarge = false;

    req.setEncoding('utf8');
    req.on('data', (chunk) => {
      if (tooLarge) return;
      body += chunk;
      if (body.length > 1_000_000) tooLarge = true;
    });
    req.on('end', () => {
      if (tooLarge) {
        const error = new Error('Payload too large');
        error.statusCode = 413;
        reject(error);
        return;
      }
      try {
        resolve(JSON.parse(body || '{}'));
      } catch {
        const error = new Error('Invalid JSON');
        error.statusCode = 400;
        reject(error);
      }
    });
    req.on('error', reject);
  });

const sendFile = (filePath, req, res, statusCode, pathname) => {
  const ext = path.extname(filePath).toLowerCase();
  const isHtml = ext === '.html';
  const isHashedAsset = pathname.startsWith('/static/');

  res.writeHead(statusCode, {
    'Content-Type': contentTypes[ext] || 'application/octet-stream',
    'X-Content-Type-Options': 'nosniff',
    'Cache-Control': isHtml
      ? 'public, max-age=0, must-revalidate'
      : isHashedAsset
        ? 'public, max-age=31536000, immutable'
        : 'public, max-age=86400',
  });

  if (req.method === 'HEAD') {
    res.end();
    return;
  }

  fs.createReadStream(filePath)
    .on('error', () => res.destroy())
    .pipe(res);
};

const send404 = (req, res) => {
  const filePath = path.join(publicDir, '404.html');
  fs.stat(filePath, (err, stat) => {
    if (!err && stat.isFile()) {
      sendFile(filePath, req, res, 404, '/404.html');
      return;
    }
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not found');
  });
};

const serveStatic = (pathname, req, res) => {
  let decoded;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Bad request');
    return;
  }

  const base = path.normalize(path.join(publicDir, decoded));
  if (base !== publicDir && !base.startsWith(publicDir + path.sep)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Forbidden');
    return;
  }

  const candidates = decoded.endsWith('/') ? [path.join(base, 'index.html')] : [base];
  if (!decoded.endsWith('/') && !path.extname(base)) {
    candidates.push(path.join(base, 'index.html'));
  }

  const tryNext = (index) => {
    if (index >= candidates.length) {
      send404(req, res);
      return;
    }
    fs.stat(candidates[index], (err, stat) => {
      if (!err && stat.isFile()) {
        sendFile(candidates[index], req, res, 200, decoded);
        return;
      }
      tryNext(index + 1);
    });
  };

  tryNext(0);
};

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

  if (url.pathname === '/api/sendToSheets') {
    if (req.method === 'OPTIONS') {
      res.writeHead(204, cors);
      res.end();
      return;
    }
    if (req.method !== 'POST') {
      res.writeHead(405, { ...cors, Allow: 'POST' });
      res.end();
      return;
    }

    try {
      const data = await readJsonBody(req);
      const result = await saveLead(data);
      sendJson(res, result.statusCode, { message: result.message });
    } catch (error) {
      console.error('sendToSheets error:', error);
      const statusCode = error.statusCode || 500;
      sendJson(res, statusCode, {
        error: statusCode === 500 ? 'Error updating sheet' : error.message,
      });
    }
    return;
  }

  if (url.pathname === '/health' || url.pathname === '/api/health') {
    res.writeHead(200, {
      ...cors,
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    });
    res.end(JSON.stringify({ ok: true, service: 'konspekt' }));
    return;
  }

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8', Allow: 'GET, HEAD' });
    res.end('Method not allowed');
    return;
  }

  serveStatic(url.pathname, req, res);
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Konspekt server listening on port ${port}`);
});
