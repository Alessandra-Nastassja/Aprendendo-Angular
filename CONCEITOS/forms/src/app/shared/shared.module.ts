import { HttpModule } from '@angular/http';
import { DropdownServiceService } from './services/dropdown-service.service';
import { FormDebugComponent } from './../form-debug/form-debug.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    FormDebugComponent,
  ],
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [
    FormDebugComponent
  ],
  providers: [ DropdownServiceService ]
})
export class SharedModule { }
