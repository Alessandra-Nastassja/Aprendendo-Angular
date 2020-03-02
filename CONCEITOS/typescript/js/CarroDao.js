"use strict";
exports.__esModule = true;
var Carro_1 = require("./Carro");
var CarroDao = /** @class */ (function () {
    function CarroDao() {
        this.nomeTabela = 'tbCarro';
    }
    CarroDao.prototype.inserir = function (object) {
        console.log('INSERT');
        return true;
    };
    CarroDao.prototype.atualizar = function (object) {
        console.log('UPDATE');
        return true;
    };
    CarroDao.prototype.remover = function (id) {
        console.log('DELETE');
        return new Carro_1["default"]('', 3);
    };
    CarroDao.prototype.selecionar = function (id) {
        console.log('SELECT ID');
        return new Carro_1["default"]('', 3);
    };
    CarroDao.prototype.selecionarTodos = function () {
        console.log('SELECT ALL');
        return [new Carro_1["default"]('', 3)];
    };
    return CarroDao;
}());
exports.CarroDao = CarroDao;
