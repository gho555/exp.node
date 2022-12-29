const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  // Solution 1
  // fs.readFile('text.txt', (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });

  // Solution 2
  // console.log('ok');
  // const readable = fs.createReadStream('text.txt');
  // readable.on('data', (chunk) => {
  //   res.write(chunk);
  // });

  // readable.on('end', () => {
  //   res.end('ok');
  // });

  // readable.on('error', (err) => {
  //   console.log(err);
  //   res.statusCode = 500;
  //   res.end('file not find!');
  // });

  // solution 3
  const readable = fs.createReadStream('text.txt');
  readable.pipe(res);
});

server.listen(8000, '127.0.0.1', () => {
  console.log('listening...');
});
