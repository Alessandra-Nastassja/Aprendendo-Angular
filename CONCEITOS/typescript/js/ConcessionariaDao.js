"use strict";
exports.__esModule = true;
var Concessionaria_1 = require("./Concessionaria");
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nomeTabela = 'tbConcessionaria';
    }
    ConcessionariaDao.prototype.inserir = function (object) {
        console.log('INSERT');
        return true;
    };
    ConcessionariaDao.prototype.atualizar = function (object) {
        console.log('UPDATE');
        return true;
    };
    ConcessionariaDao.prototype.remover = function (id) {
        console.log('DELETE');
        return new Concessionaria_1["default"]('', []);
    };
    ConcessionariaDao.prototype.selecionar = function (id) {
        console.log('SELECT ID');
        return new Concessionaria_1["default"]('', []);
    };
    ConcessionariaDao.prototype.selecionarTodos = function () {
        console.log('SELECT ALL');
        return [new Concessionaria_1["default"]('', [])];
    };
    return ConcessionariaDao;
}());
exports.ConcessionariaDao = ConcessionariaDao;
