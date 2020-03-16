import { Injectable, OnInit } from '@angular/core';

export interface Todo {
  title: string,
  description: string,
  isCompleted: boolean
}

@Injectable({
  providedIn: 'root'
})
export class TodoService implements OnInit {

  public getAllTodo = [
    {
      title: 'un titre',
      description: 'une description',
      isCompleted: false,
    },
    {
      title: 'un titre',
      description: 'une description',
      isCompleted: true,
    },
    {
      title: 'un titre',
      description: 'une description',
      isCompleted: false,
    },
    {
      title: 'un titre',
      description: 'une description',
      isCompleted: true,
    },
  ]


  constructor() { }

  ngOnInit() {
    return this.getAllTodo;
  }

  addTask(task: Todo) {
    this.getAllTodo.push(task)
  }

  deleteTask(index) {
    this.getAllTodo.splice(index, 1)
  }
}
