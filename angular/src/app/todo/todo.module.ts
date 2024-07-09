import { NgModule } from '@angular/core';

import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { MaterialModule } from '../shared/material.module';
import { TodoHighlightDirective } from './directives/todo-highlight.directive';
import { TodoSelectDirective } from './directives/todo-select.directive';
import { JsonPipe, NgTemplateOutlet } from '@angular/common';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoListComponent, TodoCardComponent, TodoFormComponent],
  imports: [
    NgTemplateOutlet,
    TodoRoutingModule,
    MaterialModule,
    TodoHighlightDirective,
    TodoSelectDirective,
    ReactiveFormsModule,
    JsonPipe,
  ],
})
export class TodoModule {}
