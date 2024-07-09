import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTodoHighlight]',
  standalone: true,
})
export class TodoHighlightDirective {
  @Input() appTodoHighlight: string = 'yellow';
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = this.appTodoHighlight;
  }
}
