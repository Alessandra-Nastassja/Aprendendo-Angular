import Carro from "./Carro";
import Moto from "./Moto";
import Concessionaria from "./Concessionaria";

let carroA = new Carro('Tipo', 4);
let motoA = new Moto();
let concessionariaA =  new Concessionaria('', [])

motoA.acelerar();

console.log(carroA);
console.log(motoA);
console.log(concessionariaA.fornecerHorarioDeFuncionamento());
