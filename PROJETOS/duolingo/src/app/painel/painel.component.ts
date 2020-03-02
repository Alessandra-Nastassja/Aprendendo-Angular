import { Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from "./frases-mock";

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit, OnDestroy {

  instrucao: string = 'Traduza a frase: ';

  frases: Frase[] = FRASES;
  fraseTraduzida: string = '';

  rodada: number = 0;
  rodadaFrase: Frase;

  progresso: number = 0;

  tentativas: number = 3;

  @Output() encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.atualizaRodada();
   }

  ngOnInit() {
  }

  ngOnDestroy(){
     
  }

  atualizaResposta(resposta): void{
    this.fraseTraduzida = resposta.target.value;
  }

  verificarResposta(): void{

    if (this.rodadaFrase.frasePtBr == this.fraseTraduzida) {

      this.rodada++;
      
      this.progresso = this.progresso + ( 100 / this.frases.length);

      if (this.rodada === 4) {
        this.encerrarJogo.emit("Vitória!");
      }

      this.atualizaRodada()
    }else{
      this.tentativas--;

      if (this.tentativas === -1) {
        this.encerrarJogo.emit("Perdeu!");
      }
    }
  }

  atualizaRodada(): void{
    this.rodadaFrase = this.frases[this.rodada];
    this.fraseTraduzida = '';
  }

}
