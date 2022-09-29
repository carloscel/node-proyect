//const express = require('express');
require('dotenv').config();

const Server = require('./models/Server')
const server = new Server();

server.listen();

//const app = express();
/*
app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(process.env.PORT, () => {
    console.log('Example')
})

*/