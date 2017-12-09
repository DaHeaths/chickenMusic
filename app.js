const http = require('http');

const hostname = '120.79.16.22';
const port = 8081;

const server = http.createServer((req,res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('vovteam\n');
});

server.listen(port, hostname,() => {
  console.log('服务器运行在http://${hostname}:${port}/');
});
