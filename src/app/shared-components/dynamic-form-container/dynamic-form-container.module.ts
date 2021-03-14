import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormContainerComponent } from './dynamic-form-container.component';
import { FormControlModule } from './form-control/form-control.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DynamicFormContainerComponent],
  imports: [
    CommonModule,
    FormControlModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    DynamicFormContainerComponent
  ]
})
export class DynamicFormContainerModule { }
