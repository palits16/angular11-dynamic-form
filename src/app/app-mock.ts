import {
    FORM_CONTROL_TYPE
} from './shared-components/dynamic-form-container/form-control/form-control';

export const TEST_DATA = [
    {
        value: '',
        name: 'textbox1',
        title: 'Textbox',
        type: FORM_CONTROL_TYPE.TEXTBOX,
        cssClass: 'col-md-8',
        placeHolder: 'Type here',
        inputType: 'text',
        required: false
    },
    {
        value: '',
        name: 'textbox2',
        title: 'Textbox',
        type: FORM_CONTROL_TYPE.TEXTBOX,
        cssClass: 'col-md-2',
        placeHolder: 'Type here',
        inputType: 'number',
        required: false
    },
    {
        value: false,
        name: 'checkbox1',
        title: 'Checkbox',
        type: FORM_CONTROL_TYPE.CHECKBOX,
        cssClass: 'col-md-10',
        inputType: 'checkbox',
        required: false,
    },
    {
        value: '',
        name: 'dropdown1',
        title: 'Dropdown',
        type: FORM_CONTROL_TYPE.DROPDOWN,
        cssClass: 'col-md-12',
        inputType: 'text',
        required: false,
        placeHolder: 'Select ...',
    }
];