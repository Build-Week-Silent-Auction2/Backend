require('dotenv').config();

const server = require('./server');

const port = process.env.port || 5000;

server.listen(port, () => console.log(' *** Server Listening on port' + port));