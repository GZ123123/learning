import { Directive, ElementRef, inject, ViewContainerRef } from "@angular/core";
import { DATATABLE_INJECT } from "./datatable.constant";
import { DataTableComponent } from "./datatable.component";

@Directive({
  standalone: true,
  selector: '[dataTableBody]'
})
export class DataTableHeadDirective {
  constructor(public element: ElementRef, public view: ViewContainerRef) {
    const table = inject<DataTableComponent>(DATATABLE_INJECT)

    table.tableHeader = this

    table.outletAssigned()
  }
}