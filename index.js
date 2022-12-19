const fs = require('fs');
const http = require('http');
const url = require('url');
const crypto = require('crypto');
const cluster = require('cluster');
const os = require('os');
const process = require('process');
const app = require('express')();
const zlib = require('zlib');

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
// const numCpu = os.cpus().length;
// console.log('numCpu:' + numCpu);

// app.get('/', (req, res) => {
//   for (let i = 0; i < ie8; i++) {
//     //a infinitive loop for execute log process
//   }
//   res.send(`ok...${process.pid}`);
// });

// if (cluster.isMaster) {
//   for (let i = 0; i < numCpu; i++) {
//     cluster.fork();
//   }
//   cluster.on('exit', (worker, code, signal) => {
//     console.log(
//       `worker ${worker.process.pid} code ${code} signal ${signal} died`,
//     );
//     cluster.fork();
//   });
// } else {
//   app.listen(3000, () => 
//     console.log(`running server ${process.pid} on 127.0.0.1:8000`),
//   );
// }

////////////////////////////////////////////zlib///////////////////////////////////////////////////////////////////////////////
// const gzip = zlib.createGzip();
// const unzip = zlib.createUnzip();
// const inp = fs.createReadStream('index.js.zip');
// const out = fs.createWriteStream('index2.js');
// // inp.pipe(gzip).pipe(out);

// inp.pipe(unzip).pipe(out);
