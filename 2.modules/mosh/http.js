const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/about') {
    res.write('ok');
    res.end();
  }
});

server.listen(3000);
