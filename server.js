const http = require('http');
const url = require('url');
var querystring = require('querystring');

const server = http.createServer((req, res) => {
  // take url and method req
  const { url: urlPath, method } = req;
 
  // url.parse
  const {
    query,
    protocol,
    slashes,
    auth,
    host,
    port,
    hostname,
    hash,
    search,
    pathname,
    path,
    href,
  } = url.parse(urlPath, true);

  //take a parameter from query
  const { name } = query;

  //set header
  res.writeHead(404, {
    'Content-type': 'text/json',
    'my-own-header': 'hello world',
  });

  //send result
  res.end(
    JSON.stringify({
      method,
      query,
      urlPath,
      protocol,
      slashes,
      auth,
      host,
      port,
      hostname,
      hash,
      search,
      query,
      pathname,
      path,
      href,
      name,
    }),
  );
});

server.listen(8080, () => {
  console.log(`server running on 8080`);
});
