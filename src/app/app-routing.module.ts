import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from "./error/components/error-404/error-404.component";
import { AuthGuard } from "./auth/guards/auth.guard";

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(c => c.AuthModule),
  },
  {
    path: '',
    loadChildren: () => import('./(protected)/protected.module').then(c => c.ProtectedModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: Error404Component
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
