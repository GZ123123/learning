import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [  ],
  imports: [ CommonModule, RouterModule, TableComponent ],
  exports: [ CommonModule, RouterModule, TableComponent ]
})
export class SharedModule { }
