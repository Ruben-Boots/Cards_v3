import {Component, Input, OnInit} from '@angular/core';
import {TodoServiceService} from '../todo-service.service';
import {FormBuilder, Validators} from '@angular/forms';
import {Todo} from '../Todo';
import {TodoListComponent} from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
  providers:  [TodoServiceService]
})
export class TodoFormComponent implements OnInit {

  @Input()
  todoList: TodoListComponent;

  constructor(public fb: FormBuilder, private todoService: TodoServiceService) {
  }

  public todoForm = this.fb.group({
    task: ['', Validators.required]
  });

  ngOnInit() {
  }
  public saveTodo(event) {

    const task = this.todoForm.controls['task'].value;

    this.todoService.saveUser(new Todo(0, task)).subscribe(() => this.todoList.getAllTodos()
    );


  }
}
