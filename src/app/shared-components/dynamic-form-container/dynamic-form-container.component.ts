import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DynamicFormContainer } from './dynamic-form-container';
import { FormControlComponent } from './form-control/form-control.component';

@Component({
  selector: 'dynamic-form-container',
  templateUrl: './dynamic-form-container.component.html',
  styleUrls: ['./dynamic-form-container.component.css']
})
export class DynamicFormContainerComponent implements OnInit {
  @Input() dynamicFormContainer: DynamicFormContainer;
  constructor() { }

  ngOnInit(): void {
  }

  trackFormControl(index, formControl: FormControlComponent) {
    return formControl;
  }

}
