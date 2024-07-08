import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
  },
  { path: '*', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule {}
