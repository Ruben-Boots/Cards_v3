import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Todo} from './Todo';

@Injectable()
export class TodoServiceService {

  constructor(private http: HttpClient) { }


  findAll(): Observable<Todo[]>  {
    return this.http.get('http://localhost:8080/todo')
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  saveUser(todo: Todo) {
    return this.http.post('http://localhost:8080/todo', todo)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }
  delete(id) {
    return this.http.delete('http://localhost:8080/todo/' + id)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

}
