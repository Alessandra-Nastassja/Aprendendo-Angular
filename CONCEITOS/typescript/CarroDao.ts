import { DaoInterface } from "./DaoInterface";
import Carro from "./Carro";

export class CarroDao implements DaoInterface{
    nomeTabela: string = 'tbCarro';

    inserir(object: Carro): boolean{
        console.log('INSERT');
        return true;
    }

    atualizar(object: Carro): boolean{
        console.log('UPDATE');
        return true;
    }

    remover(id: number): Carro{
        console.log('DELETE');
        return new Carro('', 3);
    }

    selecionar(id: number): Carro{
        console.log('SELECT ID');
        return new Carro('', 3);
    }

    selecionarTodos(): [any]{
        console.log('SELECT ALL');
        return [new Carro('', 3)]
    }
}