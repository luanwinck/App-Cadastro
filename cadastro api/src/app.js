const express = require('express');
const app = express();
const router = express.Router();
//Rotas
const index = require('./routes/index');
const personRoute = require('./routes/personRoute');
app.use('/', index);
app.use('/persons', personRoute);
module.exports = app;

// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//   res.status(201).send({
//     title: "Teste",
//     text: "texto teste"
// });
// });

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });

// module.exports = app