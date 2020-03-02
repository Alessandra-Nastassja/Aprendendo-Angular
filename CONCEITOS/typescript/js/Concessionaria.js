"use strict";
exports.__esModule = true;
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarro) {
        this.endereco = endereco;
        this.listaDeCarro = listaDeCarro;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.monstrarListaDeCarros = function () {
        return this.listaDeCarro;
    };
    Concessionaria.prototype.fornecerHorarioDeFuncionamento = function () {
        return 'De segunda a sexta das 8h as 18h e sábado das 8h as 12h';
    };
    return Concessionaria;
}());
exports["default"] = Concessionaria;
// let concessionariaA = new Concessionaria('Rua A');
// console.log(concessionariaA);
