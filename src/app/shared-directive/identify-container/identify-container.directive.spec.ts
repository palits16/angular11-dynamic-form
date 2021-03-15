import { ElementRef } from "@angular/core";
import { IdentifyContainerDirective } from "./identify-container.directive";

describe('IdentifyContainerDirective', () => {
  it('should create an instance', () => {
    let elementRef: ElementRef;
    const directive = new IdentifyContainerDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
