// import { ConcessionariaDao } from "./ConcessionariaDao";
import Concessionaria from "./Concessionaria";
import Pessoa from "./Pessoa";
// import { PessoaDao } from "./PessoaDao";
// import { CarroDao } from "./CarroDao";
import Carro from "./Carro";
// import { MotoDao } from "./MotoDao";
import Moto from "./Moto";
import { Dao } from "./Dao";

// let dao: ConcessionariaDao = new ConcessionariaDao()
let concessionaria = new Concessionaria('', [])

// let dao1: PessoaDao = new PessoaDao()
let pessoaA: Pessoa = new Pessoa('','');

// let dao2: CarroDao = new CarroDao()
let carroA: Carro = new Carro('', 1);

// let dao3: MotoDao = new MotoDao()
let motoA: Moto = new Moto();

// dao.inserir(concessionariaA)
// dao1.atualizar(pessoaA)
// dao2.inserir(carroA)
// dao3.atualizar(motoA)

let dao: Dao<Concessionaria> = new Dao<Concessionaria>();
dao.inserir(concessionaria)