import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [  ],
  imports: [ CommonModule, MaterialModule, TableComponent ],
  exports: [ CommonModule, MaterialModule, TableComponent ]
})
export class SharedModule { }
