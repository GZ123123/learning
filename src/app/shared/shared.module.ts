import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { MaterialModule } from './material.module';
import { DataTableComponent } from './components/datatable/datatable.component';

@NgModule({
  declarations: [  ],
  imports: [ CommonModule, MaterialModule, TableComponent, DataTableComponent ],
  exports: [ CommonModule, MaterialModule, TableComponent, DataTableComponent ]
})
export class SharedModule { }
