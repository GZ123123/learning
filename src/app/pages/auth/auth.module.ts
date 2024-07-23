import { NgModule } from "@angular/core";
import { AuthRoutingModule } from "./auth-routing";
import { LoginComponent } from "./components/login/login.component";
import { SharedModule } from "shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ LoginComponent ],
  imports: [AuthRoutingModule, SharedModule, ReactiveFormsModule],
  exports: []
})
export class AuthModule { }
