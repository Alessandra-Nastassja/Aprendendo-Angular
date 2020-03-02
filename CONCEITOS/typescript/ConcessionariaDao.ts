import { DaoInterface } from "./DaoInterface";
import Concessionaria from "./Concessionaria";

export class ConcessionariaDao implements DaoInterface{
    nomeTabela:string = 'tbConcessionaria';
    
    inserir(object: Concessionaria): boolean{
        console.log('INSERT');
        return true;
    }

    atualizar(object: Concessionaria): boolean{
        console.log('UPDATE');
        return true;
    }

    remover(id: number): Concessionaria{
        console.log('DELETE');
        return new Concessionaria('', []);
    }

    selecionar(id: number): Concessionaria{
        console.log('SELECT ID');
        return new Concessionaria('', []);
    }

    selecionarTodos(): [any]{
        console.log('SELECT ALL');
        return [new Concessionaria('', [])]
    } 
}