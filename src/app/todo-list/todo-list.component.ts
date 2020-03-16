import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  Task;

  constructor(public todoApi: TodoService) { }

  ngOnInit() {
    this.Task = this.todoApi.getAllTodo;

    console.log(this.Task);
  }

  deleteTask(index) {
    if (window.confirm('Voulez-vous vraiment supprimer cette tâche?')) { 
      this.todoApi.deleteTask(index)
    }
  }

}
