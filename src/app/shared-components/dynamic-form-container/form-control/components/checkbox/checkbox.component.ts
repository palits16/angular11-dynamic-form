import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CheckboxFormControl } from '../../form-control';

@Component({
  selector: 'dynamic-form-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() checkboxFormControl: CheckboxFormControl;
  constructor() { }

  ngOnInit(): void {
  }

}
