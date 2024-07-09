import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[select]', // select element that have attribute: select
  standalone: true,
})
export class TodoSelectDirective {
  @Input({ required: true }) selectFrom!: Object;

  constructor(
    private templateRef: TemplateRef<any>, // child node in react
    private viewContainerRef: ViewContainerRef // current node
  ) {}
  async ngOnInit() {
    this.viewContainerRef.createEmbeddedView(this.templateRef, {
      $implicit: this.selectFrom,
    });
  }
}
