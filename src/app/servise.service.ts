import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITodo, Todo } from './todo';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiseService {
  deleteData(id: number) {}
  constructor(private http: HttpClient) {}

  getData() {
    return this.http
      .get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(map((res) => res.map((item) => new Todo(item))));
  }
}
