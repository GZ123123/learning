import { Component, Input } from '@angular/core';
import { ITodoItem } from '../../../core/contracts/todo.interface';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss'
})
export class TodoCardComponent {
  @Input({ required: true, alias: 'item' }) data!: ITodoItem
}
