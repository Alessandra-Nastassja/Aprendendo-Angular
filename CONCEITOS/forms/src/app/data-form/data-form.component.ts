import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

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

  constructor(private formBuilder: FormBuilder) {

    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null),
    // })

    this.formulario = this.formBuilder.group({
      nome: [null], 
      email: [null]
    })

   }

  ngOnInit() {
  }

}
