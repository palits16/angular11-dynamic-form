import { FormControl, ValidatorFn } from '@angular/forms';

export abstract class InputControl {
    value: any;
    name: string;
    formControl: FormControl;
    title?: string;
}

export enum FORM_CONTROL_TYPE {
    TEXTBOX = 'TEXTBOX',
    CHECKBOX = 'CHECKBOX',
    CHECKBOXGROUP = 'CHECKBOXGROUP',
    RADIOBUTTON = 'RADIOBUTTON',
    RADIOBUTTONGROUP = 'RADIOBUTTONGROUP',
    DROPDOWN = 'DROPDOWN',
}

export class GenericFormControl extends InputControl {
    type: FORM_CONTROL_TYPE;
    values: string[];
    data: any;
    cssClass: string;
    required = false;
    validators: ValidatorFn[] = [];
    inputType: string;
}

export class TextboxFormControl extends GenericFormControl {
    constructor() {
        super();
        this.type = FORM_CONTROL_TYPE.TEXTBOX;
    }
    placeHolder: string;
}

export class CheckboxFormControl extends GenericFormControl {
    constructor() {
        super();
        this.type = FORM_CONTROL_TYPE.CHECKBOX;
    }
}

export class CheckboxGroupFormControl extends GenericFormControl {
    constructor() {
        super();
        this.type = FORM_CONTROL_TYPE.CHECKBOXGROUP;
    }
    listItems: CheckboxFormControl[] = [];
}

export class RadioButtonFormControl extends GenericFormControl {
    constructor() {
        super();
        this.type = FORM_CONTROL_TYPE.RADIOBUTTON;
    }
}

export class RadioButtonGroupFormControl extends GenericFormControl {
    constructor() {
        super();
        this.type = FORM_CONTROL_TYPE.RADIOBUTTONGROUP;
    }
    listItems: RadioButtonFormControl[] = [];
}

export class DropdownFormControl extends GenericFormControl {
    constructor() {
        super();
        this.type = FORM_CONTROL_TYPE.DROPDOWN;
    }
    placeHolder: string;
}

