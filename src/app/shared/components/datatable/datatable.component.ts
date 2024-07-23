import { AfterContentInit, Component, ContentChildren, inject, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { DATATABLE_INJECT } from "./datatable.constant";
import { DataTableHeadDirective } from "./datatable-head.directive";
import { DataTableBodyDirective } from "./datatable-body.directive";
import { DataTableFootDirective } from "./datatable-foot.directive";
import { DataTableCellComponent } from "./cell/datatable-cell.component";
import { DataTableDefineDirective } from "./datatable-define.directive";
import { AuthService } from "libs/services/auth.service";

@Component({
  imports: [DataTableHeadDirective, DataTableBodyDirective, DataTableFootDirective],
  standalone: true,
  selector: 'data-table',
  template: `
    <table>
      <thead>
        <ng-container *dataTableHead></ng-container>
      </thead>
      <tbody>
        <ng-container *dataTableBody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
        </ng-container>
      </tbody>
      <tfoot>
        <ng-container *dataTableFoot></ng-container>
      </tfoot>
    </table>
  `,
  providers: [{ provide: DATATABLE_INJECT, useExisting: DataTableComponent }]
})
export class DataTableComponent implements AfterContentInit {
  private _haveAllOutletAssigned =  false
  private _haveContentInit = false

  public tableHeader?: DataTableHeadDirective
  public tableBody?: DataTableBodyDirective
  public tableFooter?: DataTableFootDirective

  @ContentChildren(DataTableDefineDirective)
  private defined?: QueryList<DataTableDefineDirective>

  private service = inject(AuthService)

  constructor() {

  }

  ngAfterContentInit(): void {
    this._haveContentInit = true

    this._outletAssigned()
  }

  private _render() {
    console.log('log - this._tr: ', this.defined?.first.name)

    this.tableBody?.view.createComponent(DataTableCellComponent)
  }

  public _outletAssigned() {
    if(!this._haveAllOutletAssigned && this.tableHeader && this.tableBody && this.tableFooter && this._haveContentInit) {
      this._haveAllOutletAssigned = true

      this._render()
    }
  }

}
