import { Directive, ElementRef, inject, ViewContainerRef } from "@angular/core";
import { CDK_TABLE, TableComponent } from "../table/table.component";

@Directive({
  selector: '[table-cell]',
  standalone: true
})
export class TableCellDirective {
  constructor(
    public viewContainer: ViewContainerRef,
    public elementRef: ElementRef,
  ) {
    const table = inject<TableComponent<any>>(CDK_TABLE);
    console.log('log - directive constructor')
    table._render();
  }
}
