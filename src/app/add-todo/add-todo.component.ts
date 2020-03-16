import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  public todoForm: FormGroup ;

  constructor(public todoApi: TodoService) { }

  ngOnInit() {
    this.todoApi.getAllTodo;

    this.todoForm = new FormGroup({
      title: new FormControl(),
      description: new FormControl()
    });
  }

  get title() {
    return this.todoForm.get('title');
  }

  get description() {
    return this.todoForm.get('description');
  }

  ResetForm(){
    this.todoForm.reset();
  }

  submitTodoData(){
    this.todoApi.addTask(this.todoForm.value);

    this.ResetForm();
  }

}
