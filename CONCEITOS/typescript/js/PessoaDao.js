"use strict";
exports.__esModule = true;
var Pessoa_1 = require("./Pessoa");
var PessoaDao = /** @class */ (function () {
    function PessoaDao() {
        this.nomeTabela = 'tbPessoa';
    }
    PessoaDao.prototype.inserir = function (object) {
        console.log('INSERT');
        return true;
    };
    PessoaDao.prototype.atualizar = function (object) {
        console.log('UPDATE');
        return true;
    };
    PessoaDao.prototype.remover = function (id) {
        console.log('DELETE');
        return new Pessoa_1["default"]('', '');
    };
    PessoaDao.prototype.selecionar = function (id) {
        console.log('SELECT ID');
        return new Pessoa_1["default"]('', '');
    };
    PessoaDao.prototype.selecionarTodos = function () {
        console.log('SELECT ALL');
        return [new Pessoa_1["default"]('', '')];
    };
    return PessoaDao;
}());
exports.PessoaDao = PessoaDao;
