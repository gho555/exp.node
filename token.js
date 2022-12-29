var jwt = require('jsonwebtoken');

jwt.sign(
  {
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
    data: 'foobar',
  },
  privateKey,
  { algorithm: 'RS256' },
  function (err, token) {
    console.log(token);
  },
  'secret',
);

// verify a token asymmetric
var cert = fs.readFileSync('public.pem');
jwt.verify(token, 'wrong-secret', function (err, decoded) {
  // err
  // decoded undefined
});
