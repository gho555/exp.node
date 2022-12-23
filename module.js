const fs = require('fs');
const http = require('http');
const url = require('url');
const crypto = require('crypto');
const cluster = require('cluster');
const path = require('path');
const os = require('os');
const process = require('process');
const app = require('express')();
const zlib = require('zlib');
const assert = require('assert');
var vm = require('vm');
const queryString = require('querystring');

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

////////////////////////////////////////////os///////////////////////////////////////////////////////////////////////////////
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
// const totalMemory = os.totalmem();
// const freeMemory = os.freemem();
// const data = os.homedir();
// console.log(data);

////////////////////////////////////////////zlib///////////////////////////////////////////////////////////////////////////////
// const gzip = zlib.createGzip();
// const unzip = zlib.createUnzip();
// const inp = fs.createReadStream('index.js.zip');
// const out = fs.createWriteStream('index2.js');
// // inp.pipe(gzip).pipe(out);
// inp.pipe(unzip).pipe(out);

////////////////////////////////////////////path///////////////////////////////////////////////////////////////////////////////
// const pathObj = path.parse(__filename);
// console.log(pathObj.base);

////////////////////////////////////////////assert///////////////////////////////////////////////////////////////////////////////
// function add(a, b) {
//   return a + b;
// }
// function bigger(a, b) {
//   return a > b;
// }
// var expected = add(1, 2);
// var bigger = bigger(2, 1);
// assert.equal(expected, 3, 'one plus two is three');
// assert(bigger);
// assert(2 < 1, 'two should be bigger than one');
// assert(50 > 70, 'My message goes here');
// assert(50 - 50);
// const a = {
//   person: {
//     name: 'alireza',
//   },
// };
// const b = {
//   person: {
//     name: 'alreza',
//   },
// };

// assert.notDeepEqual(a, b, 'not deep equal');

////////////////////////////////////////////buffer///////////////////////////////////////////////////////////////////////////////
// var buf1 = Buffer.from('abcdefghijkl');
// var buf2 = Buffer.from('HELLO');
// const buf1 = Buffer.alloc(1);
// const buf2 = Buffer.alloc(3);
// const buf3 = Buffer.alloc(2);
// const buf4 = Buffer.allocUnsafe(0);
// buf4.copy(buf, 2);
// console.log(buf4.toString());
// const buf = Buffer.allocUnsafe(15);
// const buf = Buffer.allocUnsafeSlow(15);
// const byt = Buffer.byteLength(buf);
// const arr = [buf1, buf2, buf3];
// console.log(arr);
// console.log(byt);
// const arrayConcat = Buffer.concat(arr);
// console.log(arr.sort(Buffer.compare));
// console.log(Buffer.byteLength(arrayConcat));
// var buf1 = Buffer.from('abcdefghijkl');
// var buf2 = Buffer.from('HELLO');
// buf2.copy(buf1, 2);
// console.log(buf2.toString());

// buf2.copy(buf1, 2);
// console.log(buf2.toString());
// console.log(buf1.toString());
// var buf1 = Buffer.from('hi');
// var buf2 = Buffer.from('world');
// buf2.copy(buf1);
// console.log(buf1.toString());
// console.log(buf2.toString());

////////////////////////////////////////////vm///////////////////////////////////////////////////////////////////////////////
// var myObj = { name: 'John', age: 38 };
// vm.createContext(myObj);

// vm.runInContext('age += 1;', myObj);

// console.log(myObj);

////////////////////////////////////////////vm///////////////////////////////////////////////////////////////////////////////
const q = queryString.parse('year=2018&month=february');
const q1 = queryString.stringify({
  name: 'alireza',
});
console.log(q.month);
console.log(q.year);
console.log(q1);

setImmediate