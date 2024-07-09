import { ITodoCreateItem, ITodoItem } from './../contracts/todo.interface';
import { Injectable } from '@angular/core';
import { ITodoService } from '../contracts/todo.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodoService implements ITodoService {
  public subject = new BehaviorSubject<ITodoItem[]>([]);
  public list$ = this.subject.getValue();

  constructor() {}

  getTodos() {
    return this.list$;
  }

  getTodo(id: string) {
    return this.list$.find((item) => item.id === id);
  }

  createTodo(todo: ITodoCreateItem) {
    const newTodo = { id: Date.now().toString(), ...todo };

    this.list$ = [...this.list$, newTodo];
    this.subject.next(this.list$);

    return true
  }

  updateTodo(id: string, todo: ITodoCreateItem) {
    const find = this.getTodo(id);

    if (!find) {
      return false;
    }

    find.title = todo.title;
    find.description = todo.description;

    console.log(this.list$);

    this.subject.next(this.list$);

    return true
  }

  removeTodo(id: string) {
    const findIndex = this.list$.findIndex((item) => item.id === id);

    if (findIndex === -1) {
      return false;
    }

    this.list$.splice(findIndex, 1);

    this.subject.next(this.list$);

    return true
  }
}
