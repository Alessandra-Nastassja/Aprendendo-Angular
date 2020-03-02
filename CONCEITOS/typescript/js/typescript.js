"use strict";
exports.__esModule = true;
var Carro_1 = require("./Carro");
var Concessionaria_1 = require("./Concessionaria");
var Pessoa_1 = require("./Pessoa");
// -------------------------------------------------------------------------------------------------
var carroA = new Carro_1["default"]('Tipo', 4);
var carroB = new Carro_1["default"]('Templa', 4);
var carroC = new Carro_1["default"]('Fusca', 4);
// let listaDeCarro: Array<Carro> = [carroA, carroB, carroC];
var listaDeCarro = [carroA, carroB, carroC];
var concessionariaA = new Concessionaria_1["default"]('Rua A', listaDeCarro);
console.log(concessionariaA.monstrarListaDeCarros());
var pessoaA = new Pessoa_1["default"]('Alessandra', 'Tipo');
console.log(pessoaA.dizerCarroPreferido());
concessionariaA.monstrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == pessoaA.dizerCarroPreferido()) {
        pessoaA.comprarCarro(carro);
    }
});
console.log(pessoaA.dizerCarroQueTem());
