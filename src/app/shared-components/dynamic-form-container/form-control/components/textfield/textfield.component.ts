import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { TextboxFormControl } from '../../form-control';

@Component({
  selector: 'dynamic-form-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.css']
})
export class TextfieldComponent implements OnInit {
  @Input() formGroup:FormGroup;
  @Input() textboxFormControl:TextboxFormControl;
  
  constructor() { }

  ngOnInit(): void {
  }

}
