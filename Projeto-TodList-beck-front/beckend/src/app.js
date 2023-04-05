/* eslint-disable linebreak-style */

const express = require('express');
const router = require('./router');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use(router)/* Dessa forma toda requisição que for feita irá cair para dentro do router e é dentro dele que estará as rotas */;
module.exports = app;