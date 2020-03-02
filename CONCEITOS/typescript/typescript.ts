import Carro from "./Carro";
import Concessionaria from "./Concessionaria";
import Pessoa from "./Pessoa";

// -------------------------------------------------------------------------------------------------

let carroA = new Carro('Tipo', 4)
let carroB = new Carro('Templa', 4)
let carroC = new Carro('Fusca', 4)

// let listaDeCarro: Array<Carro> = [carroA, carroB, carroC];
let listaDeCarro: Carro[] = [carroA, carroB, carroC];

let concessionariaA = new Concessionaria('Rua A', listaDeCarro)

console.log(concessionariaA.monstrarListaDeCarros());

let pessoaA = new Pessoa('Alessandra', 'Tipo')

console.log(pessoaA.dizerCarroPreferido());

concessionariaA.monstrarListaDeCarros().map((carro: Carro) => {
    if (carro['modelo'] == pessoaA.dizerCarroPreferido()) {
        pessoaA.comprarCarro(carro)
    }    
})

console.log(pessoaA.dizerCarroQueTem());
