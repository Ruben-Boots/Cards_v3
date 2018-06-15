import { Component, OnInit } from '@angular/core';
import {Todo} from '../Todo';
import {TodoServiceService} from '../todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers:  [TodoServiceService]
})
export class TodoListComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoServiceService) {
  }

  ngOnInit() {
    this.getAllTodos();
  }

  getAllTodos() {
    this.todoService.findAll().subscribe(
      todos => {
        this.todos = todos;
      },
      err => {
        console.log(err);
      }
    );
  }
  delete(id) {
    this.todoService.delete(id).subscribe(
      () => this.getAllTodos()
    );
  }
}
