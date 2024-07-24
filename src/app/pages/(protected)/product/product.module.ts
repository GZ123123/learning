import { NgModule } from '@angular/core';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { SharedModule } from 'shared/shared.module';
import { DataTableColumnDefineDirective } from 'shared/components/datatable/datatable-column.define.directive';
import { DataTableCellDefineDirective } from 'shared/components/datatable/cell/datatable-cell.define';

@NgModule({
  declarations: [ ProductListComponent, ProductItemComponent ],
  imports: [ProductRoutingModule, SharedModule, DataTableColumnDefineDirective, DataTableCellDefineDirective],
})
export class ProductModule { }
