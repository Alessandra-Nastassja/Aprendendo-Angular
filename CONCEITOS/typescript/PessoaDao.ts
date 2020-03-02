import { DaoInterface } from "./DaoInterface";
import Pessoa from "./Pessoa";

export class PessoaDao implements DaoInterface{
    nomeTabela:string = 'tbPessoa';
    
    inserir(object: Pessoa): boolean{
        console.log('INSERT');
        return true;
    }

    atualizar(object: Pessoa): boolean{
        console.log('UPDATE');
        return true;
    }

    remover(id: number): Pessoa{
        console.log('DELETE');
        return new Pessoa('', '');
    }

    selecionar(id: number): Pessoa{
        console.log('SELECT ID');
        return new Pessoa('', '');
    }

    selecionarTodos(): [any]{
        console.log('SELECT ALL');
        return [new Pessoa('', '')]
    } 
}