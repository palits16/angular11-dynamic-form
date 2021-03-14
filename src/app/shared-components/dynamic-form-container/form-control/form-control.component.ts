import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { FORM_CONTROL_TYPE, GenericFormControl } from './form-control';

@Component({
  selector: 'dynamic-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() genericFormControl: GenericFormControl;
  FORM_CONTROL_TYPE = FORM_CONTROL_TYPE;

  constructor() { }

  ngOnInit(): void {
  }

}
