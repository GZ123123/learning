import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from "@angular/core";


@Directive({
  standalone: true,
  selector: '[dataTableDefine]'
})
export class DataTableDefineDirective {
  @Input('dataTableDefine')
  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }
  protected _name!: string;

  constructor(public element: ElementRef, public view: ViewContainerRef) {
  }
}
