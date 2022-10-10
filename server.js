const http = require('http');
const app = require('./app');
require('dotenv').config({path:'./config/.env'});

app.set('port', process.env.PORT)
const server = http.createServer(app);

server.listen(process.env.PORT);
