import { Directive,ElementRef  } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(private el: ElementRef) {
    console.log(Element);
    el.nativeElement.style.backgroundColor = "red";
  }

}
