const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const { method } = req;
  const { query, pathName } = url.parse(req.url, true);
  console.log({
    method: method,
    query: query,
    pathName: pathName,
  });
  res.end();
});

server.listen(8080, () => {
  console.log(`server running on 8080`);
});
