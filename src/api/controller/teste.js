const teste = require("../service/teste")

const testeRota = (req, res) => {
    res.send(teste);
}

module.exports = testeRota;