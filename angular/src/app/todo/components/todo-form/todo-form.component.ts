import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ITodoCreateItem } from '../../../core/contracts/todo.interface';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent {
  form = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('')
  })

  constructor( @Inject(MAT_DIALOG_DATA) data: ITodoCreateItem) {
    this.form.reset(data)
  }

  submit() {
    console.log('form: ', this.form)
  }
}
