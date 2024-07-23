import { inject } from '@angular/core';
import { Component } from '@angular/core';
import { CDK_TABLE, TableComponent } from '../table/table.component';

@Component({
  selector: 'app-table-cell',
  standalone: true,
  imports: [],
  providers: [{provide: 'C_TABLE_CELL', useExisting: TableCellComponent}],
  templateUrl: './table-cell.component.html',
  styleUrl: './table-cell.component.scss'
})
export class TableCellComponent {
  constructor(){
    const table = inject<TableComponent<any>>(CDK_TABLE)

    console.log('log - table: ', table._render())
  }
}
