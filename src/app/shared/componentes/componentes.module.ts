import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputsComponent } from './inputs/inputs.component';
import { FormBuilder, FormGroup } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputsComponent,
    FormGroup,
    FormBuilder
  ],
  exports: [
    InputsComponent,
    FormGroup,
    FormBuilder
  ]
})
export class ComponentesModule { }
