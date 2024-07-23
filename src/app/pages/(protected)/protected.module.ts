import { NgModule } from '@angular/core';
import { ProtectedRoutingModule } from './protected-routing.module';
import { ProtectedComponent } from './protected.component';

@NgModule({
  declarations: [ ProtectedComponent ],
  imports: [ ProtectedRoutingModule ],
})
export class ProtectedModule { }
