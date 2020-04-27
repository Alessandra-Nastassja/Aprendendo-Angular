import { Observable } from 'rxjs';
import { EstadoBr } from './../shared/models/estado-br';
import { ConsultaCepService } from './../shared/services/consulta-cep.service';
import { DropdownServiceService } from './../shared/services/dropdown-service.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
  providers: [DropdownServiceService]
})
export class DataFormComponent implements OnInit {

  // estados: EstadoBr[];
  estados: Observable<EstadoBr[]>;

  cargos: any[];
  tecnologias: any [];
  newsletterOp: any[];
  frameworks = ['Angular', 'React', 'Vue', 'Sencha'];

  formulario: FormGroup;
  // formulario: FormGroup = new FormGroup({
  //   'nome': new FormControl(null),
  //   'email': new FormControl(null),
  // });

  constructor(
    private http: Http,
    private formBuilder: FormBuilder,
    private dropdownServiceService: DropdownServiceService,
    private consultaCepService: ConsultaCepService) {

    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null),
    //   endereco: new FormGroup({
    //     cep: new FormControl(null)
    //   })
    // })

  }

  ngOnInit() {
    this.getEstados();

    this.getCargos();

    this.getTecnolgias();

    this.getNewsLetter();

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],

      endereco: this.formBuilder.group({
        cep: [null, [Validators.required]],
        numero: [null, [Validators.required]],
        complemento: [null],
        rua: [null, [Validators.required]],
        bairro: [null, [Validators.required]],
        cidade: [null, [Validators.required]],
        estado: [null, [Validators.required]],
      }),

      cargo: [null],
      tecnologias: [null],
      newsletter: ['s'],
      termos: [null, Validators.pattern('true')],
      frameworks: this.buildFrameworks()
    });
  }

  // Pegando os valores do array frameworks
  buildFrameworks() {
    const values = this.frameworks.map(v => new FormControl(false));

    return this.formBuilder.array(values);
  }

  getEstados() {
    // this.dropdownServiceService.getEstadosBr()
    //   .subscribe(
    //     success => {
    //       this.estados = success;

    //       console.log('....', this.estados);
    //     });

    this.estados = this.dropdownServiceService.getEstadosBr();
  }

  getCargos() {
    this.cargos = this.dropdownServiceService.getCargos();
  }

  getTecnolgias() {
    this.tecnologias = this.dropdownServiceService.getTecnolgia();
  }

  getNewsLetter() {
    this.newsletterOp = this.dropdownServiceService.getNewsLetter();
  }

  consultaCEP() {
    const cep = this.formulario.get('endereco.cep').value;

    if (cep != null && cep !== '') {
      this.consultaCepService.consultaCEP(cep)
        .subscribe(
          dados => this.populaDadosForm(dados)
        );
    }

  }


  populaDadosForm(dados) {

    // this.formulario.get('nome').setValue('Ale')

    this.formulario.patchValue({
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

  resetDadosForm() {
    this.formulario.patchValue({
      endereco: {
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null,
      }
    });
  }

  onSubmit() {
    console.log(this.formulario.value);

    let valueSubmit = Object.assign({}, this.formulario.value);

    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
      .map((v, i) => v ? this.frameworks[i] : null)
      .filter(v => v !== null)
    });

    console.log(valueSubmit);


    if (this.formulario.valid) {
      this.http.post('https://httpbin.org/post', JSON.stringify(valueSubmit))
        .map(res => res)
        .subscribe(
          dados => {
            console.log(dados);

            // this.formReset();
          },
          (error: any) => alert(error)
        );
    } else {
      console.error('form invalid');

      this.verificaValidacoes(this.formulario);
    }
  }

  verificaValidacoes(formGroup: FormGroup) {
    // Pega cada propriedade do objeto
    Object.keys(formGroup.controls).forEach((campo) => {
      // console.log(campo);

      const controle = formGroup.get(campo);

      console.log(controle);

      controle.markAsTouched();

      if (controle instanceof FormGroup) {
        this.verificaValidacoes(controle);
      }
    });
  }

  formReset() {
    this.formulario.reset();
  }

  setarCargo() {
    const cargo = {
      nome: 'Dev',
      nivel: 'Pleno',
      desc: 'Dev Pl'
    };

    this.formulario.get('cargo').setValue(cargo);
  }

  setarTecnologias() {
    this.formulario.get('tecnologias').setValue(['java', 'javascript']);
  }

  compararCargos(obj1, obj2) {
    return obj1 && obj2 ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) : obj1 === obj2;
  }
}
