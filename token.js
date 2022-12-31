var jwt = require('jsonwebtoken');
const base64url = require('base64url');
const { base64url } = require('base64url');
const signatureFunction = crypto.createsign('RSA-SHA256');
const fs = require('fs');

// jwt.sign(
//   {
//     exp: Math.floor(Date.now() / 1000) + 60 * 60,
//     data: 'foobar',
//   },
//   privateKey,
//   { algorithm: 'RS256' },
//   function (err, token) {
//     console.log(token);
//   },
//   'secret',
// );

// // verify a token asymmetric
// var cert = fs.readFileSync('public.pem');
// jwt.verify(token, 'wrong-secret', function (err, decoded) {
//   // err
//   // decoded undefined
// });

//////////////////////*.base64.*////////////////////////
const headerObj = { alg: 'HS256', typ: 'JWT' };
const payloadObj = { sub: '1234567890', name: 'John Doe', iat: 1516239022 };

const headerObjString = JSON.stringify(headerObj);
const payloadObjString = JSON.stringify(payloadObj);

const base64urlHeader = base64url(headerObjString);
const base64urlPayload = base64url(payloadObjString);

signatureFunction.write(base64urlHeader + '.' + base64urlPayload);
signatureFunction.end();

const JWT =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
const jwtParts = JWT.split('.');

const headerInBase64UrlFormat = jwtParts[0];
const payloadInBase64UrlFormat = jwtParts[1];
const signatureInBase64UrlFormat = jwtParts[2];

const decodedHeader = base64url.decode(headerInBase64UrlFormat);
const decodedPayload = base64url.decode(payloadInBase64UrlFormat);
const decodedSignature = base64url.decode(signatureInBase64UrlFormat);

console.log(decodedHeader);
console.log(decodedPayload);
console.log(decodedSignature);
