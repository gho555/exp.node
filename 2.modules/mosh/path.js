const os = require('os');
const fs = require('fs');

const info = os.arch();
const totalmem = os.totalmem();
const freemem = os.freemem();

const readDirFiles = fs.readdirSync('./');
const readDirFilesSync = fs.readdirSync('./');
fs.readdir('./', (err, files) => {
  console.log(files);
});
console.log(readDirFiles);

console.log({
  totalmem,
  freemem,
});
