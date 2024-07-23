import { Directive, ElementRef, inject, ViewContainerRef } from "@angular/core";
import { DATATABLE_INJECT } from "./datatable.constant";
import { DataTableComponent } from "./datatable.component";

@Directive({
  standalone: true,
  selector: '[dataTableFoot]'
})
export class DataTableFootDirective {
  constructor(public element: ElementRef, public view: ViewContainerRef) {
    const table = inject<DataTableComponent>(DATATABLE_INJECT)

    table.tableFooter = this

    table._outletAssigned()
  }
}
