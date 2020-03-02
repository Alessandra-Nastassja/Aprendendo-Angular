import Veiculo from "./Veiculo";

export default class Carro extends Veiculo{
    private numeroDePortas: number;

    constructor(modelo: string, numeroDePotas: number){
        super()
        this.modelo = modelo;
        this.numeroDePortas = numeroDePotas
    }
}

// let carroA = new Carro('Templa', 4);

// console.log(carroA);

// carroA.acelerar()

// console.log(carroA)
