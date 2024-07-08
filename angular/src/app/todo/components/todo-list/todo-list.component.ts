import { Component, inject } from '@angular/core';
import { APP_TITLE } from '../../../app.module';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
  title = inject(APP_TITLE)
}
