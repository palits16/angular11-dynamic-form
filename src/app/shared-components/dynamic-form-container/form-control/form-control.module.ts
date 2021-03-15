import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlComponent } from './form-control.component';
import { TextfieldComponent } from './components/textfield/textfield.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { IdentifyContainerDirective } from 'src/app/shared-directive/identify-container/identify-container.directive';

@NgModule({
  declarations: [
    FormControlComponent,
    TextfieldComponent,
    CheckboxComponent,
    DropdownComponent,
    IdentifyContainerDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormControlComponent,
    TextfieldComponent,
    CheckboxComponent,
    DropdownComponent,
  ]
})
export class FormControlModule { }
