import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAlreadyInCart]'
})

export class AlreadyInCartDirective {

  @Input() set appAlreadyInCart(disabled: boolean) {
    if (disabled) {
      const button = this.elementRef.nativeElement;
      button.disabled = disabled;
      button.className = 'btn btn-sm btn-outline-primary';
      button.innerText = '✓';
    }
  }

  constructor(private elementRef: ElementRef) { }

}