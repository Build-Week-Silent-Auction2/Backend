const jwt = require('jsonwebtoken');

const secret = require('../auth/secret');

module.exports = (req, res, next) =>{
  const token = req.headers.authorization;

  if(token){
    jwt.verify(token, secret.jwtSecret, (err, decodedToken) =>{
      if(err){
        res.status(401).json({error: "Invalid Credensials"})
      } else{
        req.decodedToken = decodedToken;
        next();
      }
    })
  } else{
    res.status(401).json({error: "You must be logged in before you can enter."})
  }
};