import { Component, OnInit } from '@angular/core';

import { OrdemCompraService } from "../ordem-compra.service";

import { Pedido } from "../shared/pedido.model";

@Component({
  selector: 'pu-orderm-compra',
  templateUrl: './orderm-compra.component.html',
  styleUrls: ['./orderm-compra.component.scss'],
  providers: [ OrdemCompraService ]
})
export class OrdermCompraComponent implements OnInit {

  public pedido: Pedido = new Pedido('', '', '', '')

  endereco: string = '';
  numero: string = '';
  complemento: string = '';

  formaPagamento: string = '';

  enderecoValido: boolean;
  numeroValido: boolean;
  complementoValido: boolean;
  formaPagamentoValido: boolean;

  enderecoEstadoPrimitivo: boolean = true;
  numeroEstadoPrimitivo: boolean = true;
  completoEstadoPrimitivo: boolean = true;
  formPagamentoEstadoPrimitivo: boolean = true;

  formEstado: string = 'disabled';
  
  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {}

  atualizaEndereco(endereco: string): void{
    this.endereco = endereco;

    this.enderecoEstadoPrimitivo = false;

    if (this.endereco.length > 3) {
      this.enderecoValido = true;
    }else{
      this.enderecoValido = false;
    }

    this.habilitaForm();
  }

  atualizaNumero(numero: string): void{
    this.numero = numero;

    this.numeroEstadoPrimitivo = false;

    if (this.numero.length > 0) {
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }

    this.habilitaForm();
  }

  atualizaComplemento(complemento: string): void{
    this.complemento = complemento;

    this.completoEstadoPrimitivo = false;

    if (this.complemento.length > 0) {
      this.complementoValido = true;
    }

    this.habilitaForm();
  }

  atualizaFormaPagamento(formaPagamento: string): void{
    this.formaPagamento = formaPagamento;

    this.formPagamentoEstadoPrimitivo = false;

    if (this.formaPagamento.length > 0) {
      this.formaPagamentoValido = true;
    } else {
      this.formaPagamentoValido = false;
    }

    this.habilitaForm();
  }

  habilitaForm(): void{
    if (this.enderecoValido === true && this.numeroValido  === true && 
        this.complementoValido  === true && this.formaPagamentoValido  === true) {
        
          this.formEstado = '';
    }else{
      this.formEstado = 'disabled';
    }
  }

  confirmarCompra(): void{
    this.pedido.endereco = this.endereco;
    this.pedido.numero = this.numero;
    this.pedido.complemento = this.complemento;
    this.pedido.formaPagemento = this.formaPagamento;

    this.ordemCompraService.efetivarCompra(this.pedido)
  }

}
