import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DropdownFormControl } from '../../form-control';

export interface Options {
  value: string;
  text: string;
}

export const OPTIONS_DATA: Options[] = [
  {
    value: 'value1',
    text: 'Value 1'
  },
  {
    value: 'value2',
    text: 'Value 2'
  },
  {
    value: 'value3',
    text: 'Value 3'
  },
];

@Component({
  selector: 'dynamic-form-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() dropdownFormControl: DropdownFormControl;
  @Input() options: Options[];
  toggle = false;
  constructor() { }

  ngOnInit(): void {
    this.options = OPTIONS_DATA;
  }

  toggleDropdown() {
    this.toggle = !this.toggle;
  }

  toggleOffDropdown() {
    this.toggle = false;
  }

  selectedOption(value: any) {
    console.log(value);
    this.formGroup.controls[this.dropdownFormControl.name].setValue(value);
    // this.dropdownFormControl.value = value;
    this.toggleOffDropdown();
  }

  get getSelectedValue() {
    const value =
      this.options
        .find(o => o.value === this.formGroup.get(this.dropdownFormControl.name).value);
    return value;
  }



}
