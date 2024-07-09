import { ITodoItem } from './../../../core/contracts/todo.interface';
import { TodoService } from './../../../core/services/todo.service';
import { Component, inject, OnInit } from '@angular/core';
import { APP_TITLE } from '../../../app.module';
import { MatDialog } from '@angular/material/dialog';
import { TodoFormComponent } from '../todo-form/todo-form.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
  title = inject(APP_TITLE);
  dialog = inject(MatDialog);

  shopItems$: ITodoItem[] = [];

  source = {
    title: 'Todo 1',
    completed: false,
  };

  constructor(private todoService: TodoService) {}

  getTodos() {
    this.shopItems$ = this.todoService.getTodos();
  }

  ngOnInit(): void {
    this.getTodos();

    this.todoService.subject.subscribe(() => this.getTodos());
  }

  create($event: MouseEvent) {
    const dialog = this.dialog.open(TodoFormComponent, {
      data: {
        title: Date.now().toString(),
        description: Date.now().toString(),
      },
    });

    // const newTodo: ITodoCreateItem = {
    //   title: Date.now().toString(),
    //   description: Date.now().toString(),
    // }

    // this.todoService.createTodo(newTodo)
  }
}
