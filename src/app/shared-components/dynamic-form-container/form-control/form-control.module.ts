import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlComponent } from './form-control.component';
import { TextfieldComponent } from './components/textfield/textfield.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormControlComponent,
    TextfieldComponent,
    CheckboxComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormControlComponent,
    TextfieldComponent,
    CheckboxComponent
  ]
})
export class FormControlModule { }
