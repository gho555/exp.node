const http = require('http');
// const url = require('url');
const { URL } = require('url');
const server = http.createServer((req, res) => {
  ////////////////////////////////*.req.*//////////////////////////////////////
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

  const url = new URL(urlReq, `http://${req.headers.host}`);


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
  } = url;

  // const objUrl = new URL(urlReq);

  // console.log(objUrl);

  //take a parameter from query
  const name = query?.name;
  const family = query?.family;

  ////////////////////////////////*.res.*//////////////////////////////////////
  //set header
  res.writeHead(404, {
    'Content-type': 'text/json',
    'my-own-header': 'hello world',
  });

  // log data sended from query
  // console.log({
  //   name,
  //   family,
  // });

  // //send result
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
      params,
      hostname,
      hash,
      search,
      query,
      pathname,
      path,
      pathReq,
      href,
      name,
      family,
      xhr,
      cookies,
      accepted,
      headers,
    }),
  );
});

///////////////////////////////////.run.server/////////////////////////////////////////////
server.listen(8080, () => {
  console.log(`server running on 8080`);
});
