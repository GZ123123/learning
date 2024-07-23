import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { MaterialModule } from './material.module';
import { TableCellComponent } from './components/table-cell/table-cell.component';
import { TableCellDirective } from './components/table-cell/table-cell.directive';

@NgModule({
  declarations: [  ],
  imports: [ CommonModule, MaterialModule, TableComponent, TableCellComponent, TableCellDirective ],
  exports: [ CommonModule, MaterialModule, TableComponent, TableCellComponent, TableCellDirective ]
})
export class SharedModule { }
