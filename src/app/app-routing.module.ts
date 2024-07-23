import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from "pages/error/components/error-404/error-404.component";
import { AuthGuard } from "libs/guards/auth.guard";
import { ProtectedComponent } from "pages/(protected)/protected.component";

const routes: Routes = [
  {
    path: '',
    component: ProtectedComponent,
    loadChildren: () => import('pages/(protected)/protected.module').then(c => c.ProtectedModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('pages/auth/auth.module').then(c => c.AuthModule),
  },
  {
    path: '**',
    component: Error404Component
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
