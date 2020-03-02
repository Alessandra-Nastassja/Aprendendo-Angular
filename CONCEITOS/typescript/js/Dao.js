"use strict";
exports.__esModule = true;
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = '';
    }
    Dao.prototype.inserir = function (object) {
        console.log('INSERT');
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log('UPDATE');
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log('DELETE');
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log('SELECT ID');
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log('SELECT ALL');
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
