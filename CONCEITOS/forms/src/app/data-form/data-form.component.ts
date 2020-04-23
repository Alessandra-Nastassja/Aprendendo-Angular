import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;
  // formulario: FormGroup = new FormGroup({
  //   'nome': new FormControl(null),
  //   'email': new FormControl(null),
  // });

  constructor(private http: Http, private formBuilder: FormBuilder) {

    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null),
    // })

   }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required]], 
      email: [null, [Validators.required, Validators.email]]
    })
  }

  onSubmit(){
    console.log(this.formulario.value);

    this.http.post("https://httpbin.org/post", JSON.stringify(this.formulario.value))
    .map(res => res)
    .subscribe(
      dados => {
        console.log(dados);

        // this.formReset();
      }
    )
    
  }

  formReset(){
    this.formulario.reset();
  }

}
