import { DaoInterface } from "./DaoInterface";

export class Dao<T> implements DaoInterface<T>{
    nomeTabela:string = '';
    
    inserir(object: T): boolean{
        console.log('INSERT');
        return true;
    }

    atualizar(object: T): boolean{
        console.log('UPDATE');
        return true;
    }

    remover(id: number): T{
        console.log('DELETE');
        return Object();
    }

    selecionar(id: number): T{
        console.log('SELECT ID');
        return Object();
    }

    selecionarTodos(): [T]{
        console.log('SELECT ALL');
        return [Object()]
    } 
}