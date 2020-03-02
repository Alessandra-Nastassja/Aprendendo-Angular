import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { TemplateFormComponent } from './template-form.component';
import { FormDebugComponent } from '../form-debug/form-debug.component';

@NgModule({
  declarations: [
    TemplateFormComponent,
    FormDebugComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ]
})
export class TemplateFormModule { }
