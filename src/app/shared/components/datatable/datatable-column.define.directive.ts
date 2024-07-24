import { ContentChildren, Directive, ElementRef, Input, QueryList, ViewContainerRef } from "@angular/core";
import { DataTableCellDefineDirective } from "./cell/datatable-cell.define";


@Directive({
  standalone: true,
  selector: '[dataTableColumnDefine]'
})
export class DataTableColumnDefineDirective {
  @Input('dataTableColumnDefine')
  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }
  protected _name!: string;


  @ContentChildren(DataTableCellDefineDirective) cells!: QueryList<DataTableCellDefineDirective>

  constructor(public element: ElementRef, public view: ViewContainerRef) {
  }

  public render(data: any) {
    return this.cells.map(cell => cell.render(data))
  }
}
