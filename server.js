const http = require('http');
const url = require('url');
var querystring = require('querystring');

const server = http.createServer((req, res) => {
  const { url: reqUrl, method } = req;
  const { search, query, pathname } = url.parse(reqUrl, true);
  const { name } = query;
  console.log('name', name);
  console.log({
    method: method,
    query: query,
    pathName: pathname,
  });
  res.end('ok');
});

server.listen(8080, () => {
  console.log(`server running on 8080`);
});
