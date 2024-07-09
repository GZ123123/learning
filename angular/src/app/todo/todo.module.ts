import { TodoListComponent } from './components/todo-list/todo-list.component';
import { NgModule } from '@angular/core';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { MaterialModule } from '../shared/material.module';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ TodoListComponent, TodoCardComponent, TodoFormComponent ],
  imports: [ TodoRoutingModule, MaterialModule, ReactiveFormsModule  ],
})
export class TodoModule { }
