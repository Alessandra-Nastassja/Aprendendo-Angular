"use strict";
exports.__esModule = true;
var Moto_1 = require("./Moto");
var MotoDao = /** @class */ (function () {
    function MotoDao() {
        this.nomeTabela = 'tbMoto';
    }
    MotoDao.prototype.inserir = function (object) {
        console.log('INSERT');
        return true;
    };
    MotoDao.prototype.atualizar = function (object) {
        console.log('UPDATE');
        return true;
    };
    MotoDao.prototype.remover = function (id) {
        console.log('DELETE');
        return new Moto_1["default"]();
    };
    MotoDao.prototype.selecionar = function (id) {
        console.log('SELECT ID');
        return new Moto_1["default"]();
    };
    MotoDao.prototype.selecionarTodos = function () {
        console.log('SELECT ALL');
        return [new Moto_1["default"]()];
    };
    return MotoDao;
}());
exports.MotoDao = MotoDao;
