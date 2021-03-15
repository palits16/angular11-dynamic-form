import {
  Directive,
  ElementRef,
  EventEmitter,
  Output,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[identifiedContainer]'
})
export class IdentifyContainerDirective {
  @Output() onClickEmitter: EventEmitter<boolean>;

  constructor(private elementRef: ElementRef) {
    this.onClickEmitter = new EventEmitter<boolean>();
  }

  @HostListener('document: click', ['$event.target'])
  public onClick(targetElement: any) {
    if (!this.elementRef.nativeElement.contains(targetElement)) {
      this.onClickEmitter.emit(true);
    }
  }
}