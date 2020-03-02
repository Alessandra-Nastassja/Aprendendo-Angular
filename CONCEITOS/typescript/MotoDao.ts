import { DaoInterface } from "./DaoInterface";
import Moto from "./Moto";

export class MotoDao implements DaoInterface{
    nomeTabela:string = 'tbMoto';
    
    inserir(object: Moto): boolean{
        console.log('INSERT');
        return true;
    }

    atualizar(object: Moto): boolean{
        console.log('UPDATE');
        return true;
    }

    remover(id: number): Moto{
        console.log('DELETE');
        return new Moto();
    }

    selecionar(id: number): Moto{
        console.log('SELECT ID');
        return new Moto();
    }

    selecionarTodos(): [any]{
        console.log('SELECT ALL');
        return [new Moto()]
    } 
}