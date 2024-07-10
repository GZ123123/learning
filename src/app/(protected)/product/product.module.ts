import { NgModule } from '@angular/core';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ ProductListComponent, ProductItemComponent ],
  imports: [ProductRoutingModule, SharedModule],
})
export class ProductModule { }
