import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";


const httpOptions = {
  headers:new HttpHeaders({
    'Content-type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {


  apiUrl = "http://localhost:5000/tasks"

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl, httpOptions)
  }

  deleteTask(task:Task):Observable<Task>{
    const taskUrl = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(taskUrl, httpOptions)
  }

  updateReminder(task:Task):Observable<Task>{
    const taskUrl = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(taskUrl, task, httpOptions)
  }

  postTask(task:Task):Observable<Task>
  {
    return this.http.post<Task>(this.apiUrl,task,httpOptions)
  }
}
