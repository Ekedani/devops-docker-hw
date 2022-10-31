const http = require('http');
const url = require('url');
const fs = require('fs');

const port = 80;


http.createServer((req, res) => {
    const pathname = url.parse(req.url).pathname;
    
    // Primitive logging
    console.log(`[${new Date().toUTCString()}] INFO: Requested ${req.method} on ${pathname}`)

    if (req.method === 'GET' && pathname === '/favicon.ico') {
        res.writeHead(200, {'Content-Type': 'image/x-icon'});
        fs.createReadStream('./public/favicon.ico').pipe(res);
        return;
    }

    if (req.method === 'GET' && pathname === '/home') {
        fs.readFile('./public/index.html', 'utf-8', (err, file) => {
            if(err){
                res.writeHead(500, {'Content-Type': 'text/html'});
                res.end('<h1>500 Internal Server Error</h1>');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(file);
            }
        })
        return;
    }

    res.writeHead(400, {'Content-Type': 'text/html'});
    res.end('<h1>404 Not Found</h1>');

}).listen(port);

console.log(`[${new Date().toUTCString()}] INFO: Server is listening on port ${port}`)

