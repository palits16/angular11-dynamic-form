import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GenericFormControl } from './form-control/form-control';

export class DynamicFormContainer {
    formGroup: FormGroup;
    formControls: GenericFormControl[] = [];
    setFormGroup() {
        const group: any = {};
        this.formControls.forEach(control => {
            if (control.required) {
                control.validators.push(Validators.required);
            }
            const formControl = new FormControl(false || '', control.validators);
            group[control.name] = formControl;
            control.formControl = formControl;
            console.log(control.formControl);
        });
        this.formGroup = new FormGroup(group);
    }
    getFormGroup(): FormGroup {
        return this.formGroup;
    }
}
