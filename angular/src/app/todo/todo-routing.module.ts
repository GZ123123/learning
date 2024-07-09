import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { NgModule } from '@angular/core';
import { TodoService } from '../core/services/todo.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TodoListComponent,
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [TodoService],
  exports: [RouterModule]
})
export class TodoRoutingModule {}
