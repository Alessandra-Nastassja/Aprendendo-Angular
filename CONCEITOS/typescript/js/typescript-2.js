"use strict";
exports.__esModule = true;
// import { ConcessionariaDao } from "./ConcessionariaDao";
var Concessionaria_1 = require("./Concessionaria");
var Pessoa_1 = require("./Pessoa");
// import { PessoaDao } from "./PessoaDao";
// import { CarroDao } from "./CarroDao";
var Carro_1 = require("./Carro");
// import { MotoDao } from "./MotoDao";
var Moto_1 = require("./Moto");
var Dao_1 = require("./Dao");
// let dao: ConcessionariaDao = new ConcessionariaDao()
var concessionaria = new Concessionaria_1["default"]('', []);
// let dao1: PessoaDao = new PessoaDao()
var pessoaA = new Pessoa_1["default"]('', '');
// let dao2: CarroDao = new CarroDao()
var carroA = new Carro_1["default"]('', 1);
// let dao3: MotoDao = new MotoDao()
var motoA = new Moto_1["default"]();
// dao.inserir(concessionariaA)
// dao1.atualizar(pessoaA)
// dao2.inserir(carroA)
// dao3.atualizar(motoA)
var dao = new Dao_1.Dao();
dao.inserir(concessionaria);
