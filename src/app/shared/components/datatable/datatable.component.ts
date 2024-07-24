import { AfterContentInit, Component, ContentChildren, Input, QueryList } from "@angular/core";
import { DATATABLE_INJECT } from "./datatable.constant";
import { DataTableHeadDirective } from "./datatable-head.directive";
import { DataTableBodyDirective } from "./datatable-body.directive";
import { DataTableFootDirective } from "./datatable-foot.directive";
import { DataTableColumnDefineDirective } from "./datatable-column.define.directive";

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
  @Input('data')
  data: any

  private _haveAllOutletAssigned =  false
  private _haveContentInit = false

  public tableHeader?: DataTableHeadDirective
  public tableBody?: DataTableBodyDirective
  public tableFooter?: DataTableFootDirective

  @ContentChildren(DataTableColumnDefineDirective)
  private defined?: QueryList<DataTableColumnDefineDirective>

  constructor() {
  }

  ngAfterContentInit(): void {
    this._haveContentInit = true

    this.outletAssigned()
  }
  // #region Private
  private _render() {
    this._getComlumnDefine()

    // this.tableBody?.view.createComponent(DataTableCellComponent)
  }

  private _getComlumnDefine() {
    this.defined?.forEach(defined => {
      console.log(defined.render(this.data))
    })
  }
  // #endregion

  // #region Public
  public outletAssigned() {
    if(!this._haveAllOutletAssigned && this.tableHeader && this.tableBody && this.tableFooter && this._haveContentInit) {
      this._haveAllOutletAssigned = true

      this._render()
    }
  }

  // #endregion
}
