import { TodoListComponent } from './components/todo-list/todo-list.component';
import { NgModule } from '@angular/core';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [ TodoListComponent, TodoCardComponent ],
  imports: [ TodoRoutingModule, MaterialModule ],
})
export class TodoModule { }
