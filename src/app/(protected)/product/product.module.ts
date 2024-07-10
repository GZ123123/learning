import { NgModule } from '@angular/core';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { TableComponent } from "../../shared/components/table/table.component";

@NgModule({
  declarations: [ ProductListComponent, ProductItemComponent ],
  imports: [ProductRoutingModule, TableComponent],
})
export class ProductModule { }
