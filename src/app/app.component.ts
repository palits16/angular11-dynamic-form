import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TEST_DATA } from './app-mock';
import { DynamicFormContainer } from './shared-components/dynamic-form-container/dynamic-form-container';
import { CheckboxFormControl, DropdownFormControl, FORM_CONTROL_TYPE, TextboxFormControl } from './shared-components/dynamic-form-container/form-control/form-control';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dynamic-form';
  formContainer: DynamicFormContainer;
  formType;
  data = TEST_DATA;
  constructor() {}

  ngOnInit() {
    this.formContainer = new DynamicFormContainer();
    TEST_DATA.forEach(controls => {
      const _formControl = this.formControl(controls.type);
      _formControl.inputType = controls.inputType;
      _formControl.cssClass = controls.cssClass;
      _formControl.placeHolder = controls.placeHolder;
      _formControl.name = controls.name;
      _formControl.required = controls.required;
      _formControl.type = controls.type;
      _formControl.title = controls.title;
      _formControl.value = controls.value;
      this.formContainer.formControls.push(_formControl);
    });
    this.formContainer.setFormGroup();
    this.formContainer.formGroup.valueChanges.subscribe(value => {
      console.log(value);
    });
  }

  getFormValue(formGroup: FormGroup) {
    console.log(formGroup.value);
  }

  formControl(type: FORM_CONTROL_TYPE) : any {
    switch(type) {
      case FORM_CONTROL_TYPE.TEXTBOX: {
        const t = new TextboxFormControl();
        return t;
      }
      case FORM_CONTROL_TYPE.CHECKBOX: {
        const t = new CheckboxFormControl();
        return t;
      }
      case FORM_CONTROL_TYPE.DROPDOWN: {
        const t = new DropdownFormControl();
        return t;
      }
      default: {
        return this.formType = new TextboxFormControl();
      }
    }
  }

}
