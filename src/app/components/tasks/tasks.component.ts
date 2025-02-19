import { Component, OnInit, Output } from '@angular/core';
import { Task } from '../../Task';
import { TaskItemComponent } from "../task-item/task-item.component";
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { AddTaskComponent } from '../add-task/add-task.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-tasks',
  imports: [TaskItemComponent,AddTaskComponent, CommonModule, RouterLink],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit {
  tasks :Task[] = []


  constructor(private taskService:TaskService){}

  trackById(index:number, task:Task){
    return task.id
  }

  ngOnInit(): void {
      this.taskService.getTasks().subscribe((tasks)=>  this.tasks = tasks)
  }

  deleteTaskFunc(task:Task)
  {
    this.taskService.deleteTask(task).subscribe((item)=>{
      this.tasks = this.tasks.filter((it)=> it.id !== task.id)
    })
  }

  updateTaskReminder(task:Task)
  {
    task.reminder = !task.reminder
    this.taskService.updateReminder(task).subscribe()
  }

  postTask(task:Task)
  {
    this.taskService.postTask(task).subscribe(item => this.tasks.push(item))
  }

}
