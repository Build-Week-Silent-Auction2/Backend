const jtw = require('jsonwebtoken');

const secret = require('./secret');

module.exports = function generateToken(username){
  const payload = {username};
  const options = {expiresIn: '1h'};
  return jtw.sign(payload, secret.jwtSecret, options);
}