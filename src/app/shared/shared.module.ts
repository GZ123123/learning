import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { MaterialModule } from './material.module';
import { DataTableComponent } from './components/datatable/datatable.component';
import { Table2Component } from './components/table-2/table.component';

@NgModule({
  declarations: [  ],
  imports: [ CommonModule, MaterialModule, TableComponent, Table2Component, DataTableComponent ],
  exports: [ CommonModule, MaterialModule, TableComponent, Table2Component, DataTableComponent ]
})
export class SharedModule { }
