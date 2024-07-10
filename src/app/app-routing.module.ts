import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from "./error/components/error-404/error-404.component";
import { AuthGuard } from "./auth/guards/auth.guard";
import { ProtectedComponent } from "./(protected)/protected.component";

const routes: Routes = [
  {
    path: '',
    component: ProtectedComponent,
    loadChildren: () => import('./(protected)/protected.module').then(c => c.ProtectedModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(c => c.AuthModule),
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
