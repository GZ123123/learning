import { Directive, TemplateRef, ViewContainerRef } from "@angular/core";
import { DataTableColumnDefineDirective } from "../datatable-column.define.directive";


@Directive({
  selector: '[dataTableCellDefine]',
  standalone: true
})
export class DataTableCellDefineDirective {
  constructor(columnDefine: DataTableColumnDefineDirective, public template: TemplateRef<any>, public view: ViewContainerRef) {
  }

  public render(data: any) {
    return this.view.createEmbeddedView(this.template, { element: data })
  }
}
