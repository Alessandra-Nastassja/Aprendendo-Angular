import { ConcessionariaInterface } from "./ConcessionariaInterface";
import Carro from "./Carro";

export default class Concessionaria implements ConcessionariaInterface{
    private endereco: string;
    private listaDeCarro: Array<Carro>;

    constructor(endereco: string, listaDeCarro: Array<Carro>){
        this.endereco = endereco;
        this.listaDeCarro = listaDeCarro;
    }

    public fornecerEndereco():string{
        return this.endereco;
    }

    public monstrarListaDeCarros(): Array<Carro>{
        return this.listaDeCarro;
    }

    public fornecerHorarioDeFuncionamento(): string{
        return 'De segunda a sexta das 8h as 18h e sábado das 8h as 12h'
    }
}

// let concessionariaA = new Concessionaria('Rua A');

// console.log(concessionariaA);