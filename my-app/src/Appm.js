let http = require('http');
http.createServer((reject,resolve)=>{
  resolve.writeHead(200, {'Content-Type': 'text/plain'});
  resolve.end('Hello world')
}).listen(5000);
