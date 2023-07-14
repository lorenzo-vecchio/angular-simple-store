import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAlreadyInCart]'
})

export class AlreadyInCartDirective {

  @Input() set appAlreadyInCart(disabled: boolean) {
    const button = this.elementRef.nativeElement;
    if (disabled) {
      button.disabled = disabled;
      button.classList.remove('btn-outline-secondary')
      button.classList.add('btn-outline-primary');
      button.innerText = '✓';
    }
    else {
      button.disabled = false;
      button.classList.remove('btn-outline-primary');
      button.classList.add('btn-outline-secondary')
    }
  }

  constructor(private elementRef: ElementRef) { }

}