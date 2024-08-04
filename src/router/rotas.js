const express = require("express");
const testeRota = require("../api/controller/teste");
const rotas = express.Router();

rotas.get("/teste", testeRota);

module.exports = rotas;