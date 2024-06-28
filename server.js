const http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  // 发送响应数据
  response.end('hello workd');
}).listen(3000);
console.log('server running 3000')