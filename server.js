const http = require('http');
const url = require('url');
var querystring = require('querystring');

const server = http.createServer((req, res) => {
  // take url and method req
  const {
    path: pathReq,
    query: queryReq,
    url: urlReq,
    xhr,
    params,
    method,
    headers,
    accepted,
  } = req;

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
    cookies,
  } = url.parse(urlReq, true);

  //take a parameter from query
  const { name } = query;
  
  //take value form req.params
  const { nameReq } = params;

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
      queryReq,
      urlReq,
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
      pathReq,
      href,
      name,
      xhr,
      nameReq,
      cookies,
      accepted,
      headers,
    }),
  );
});

server.listen(8080, () => {
  console.log(`server running on 8080`);
});
