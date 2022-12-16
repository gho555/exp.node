const fs = require('fs');
const http = require('http');
const url = require('url');
const crypto = require('crypto');
const cluster = require('cluster');
const os = require('os');
const app = require('express')();

////////////////////////////////////////////fs///////////////////////////////////////////////////////////////////////////////

// (async () => {
//   const data = await fs.readFileSync('./txt/output.txt', 'utf-8');
//   const data1 = await fs.readFileSync('./txt/output.txt', 'utf-8');
//   console.log(data);
//   console.log(data1);
//   console.log('hi');
// })();

////////////////////////////////////////////http///////////////////////////////////////////////////////////////////////////////

// http
//   .createServer((req, res) => {
//     const pathName = req.url;
//     const method = req.method;
//     console.log(__dirname);
//     console.log(__filename);
//     console.log(method);
//     if (pathName === '/' || pathName === '/overview') {
//       res.end('this is the overview');
//     }

//     if (pathName === '/book' && method === 'POST') {
//       res.writeHead(404, {
//         'Content-type': 'text/html',
//         'my-own-header': 'hello world',
//       });
//       res.end('here is nothing!');
//     } else {
//       // const person = {
//       //   name: 'alireza',
//       // };
//       // res.end(JSON.stringify(person));
//       const temp = fs.readFileSync(`${__dirname}/index.html`, 'utf-8');
//       let output = temp.replace(/{%TITLE%}/g, JSON.stringify('alireza'));
//       res.end(output);
//     }
//   })
//   .listen(8000, '127.0.0.1', () => {
//     console.log('server running!');
//   });

////////////////////////////////////////////crypto///////////////////////////////////////////////////////////////////////////////

// console.log(crypto.getHashes());
// const log = crypto.getCiphers();

// const hash = crypto.createHash('sha256').update('your massagre').digest('hex');

// const hash = crypto.createHash('sha1');
// let key = hash.digest().slice(0, 16);

// const iv = crypto.randomBytes(16);
// let key = '123645564564564654564564456789';
// let secret_massage = ':)';
// let cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
// let encrypted = cipher.update(secret_massage, 'utf-8', 'hex');
// encrypted += cipher.final('hex');

// console.log('encrypted:' + encrypted);

// let decipher = crypto.createCipheriv('aes-128-cbc', key, iv);
// let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
// decrypted += decipher.final('utf-8');

// console.log('decrypted:' + decrypted);

// console.log(vi);
// console.log(hash);

// cluster.isMaster;

////////////////////////////////////////////crypto///////////////////////////////////////////////////////////////////////////////

app.get('/', (req, rea) => {
  for (let i = 0; i < ie8; i++) {}
  res.send('ok...');
});
app.listen(3000,()=> console.log(`running server on 127.0.0.1:8000`);)
