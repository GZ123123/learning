import { NgModule } from '@angular/core';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { SharedModule } from '../../shared/shared.module';
import { TableCellComponent } from "../../shared/components/table-cell/table-cell.component";

@NgModule({
  declarations: [ ProductListComponent, ProductItemComponent ],
  imports: [ProductRoutingModule, SharedModule, TableCellComponent],
})
export class ProductModule { }
