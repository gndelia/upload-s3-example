let http = require('http');
const url = require('url');
let fs = require('fs');

const PORT=8000;

http.createServer((req, res) => {
    let requestUrl = url.parse(req.url);
    res.writeHead(200);
    let stream = fs.createReadStream(__dirname + (requestUrl.pathname === '/' ? '/index.html' : requestUrl.pathname));
    stream.pipe(res);
    stream.on('error', () => {
        res.writeHead(404);
        res.end();
    })
}).listen(PORT);