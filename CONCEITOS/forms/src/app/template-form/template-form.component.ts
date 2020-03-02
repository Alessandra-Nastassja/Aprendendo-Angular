import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http"
import "rxjs/add/operator/map";

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  }

  constructor(private http: Http) { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);
    
    this.http.post("https://httpbin.org/post", JSON.stringify(form.value))
    .map(res => res)
    .subscribe(
      dados => console.log(dados)
      
    )
  }

  consultaCEP(cep, form) {
    cep = cep.replace(/\D/g, '');

    if (cep != "") {
      var validacep = /^[0-9]{8}/;

      if (validacep.test(cep)) {
        this.resetDadosForm(form);

        return this.http.get(`http://viacep.com.br/ws/${cep}/json`)
          .map(dados => dados.json())
          .subscribe(
            dados => this.populaDadosForm(dados, form)
          )
      }
    }
  }

  populaDadosForm(dados, formulario) {
    formulario.form.patchValue({
      endereco: {
        // cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
    }
    });
  }

  resetDadosForm(formulario) {
    formulario.form.patchValue({
      endereco: {
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null,
    }
    });
  }
}