const express = require('express');

const middleware = require('./middleware/'); // incomplete

server = express();

middleware(server);

//* import routes



// * use routes



// * sanity

server.get('/', (req,res) =>{
  res.status(200).json({message: "Hellow World"})
});

module.exports = server;
