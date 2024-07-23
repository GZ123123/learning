import { NgModule } from '@angular/core';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { SharedModule } from 'shared/shared.module';
import { DataTableDefineDirective } from 'shared/components/datatable/datatable-define.directive';

@NgModule({
  declarations: [ ProductListComponent, ProductItemComponent ],
  imports: [ProductRoutingModule, SharedModule, DataTableDefineDirective],
})
export class ProductModule { }
