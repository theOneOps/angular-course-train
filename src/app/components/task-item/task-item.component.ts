import { Component,Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-task-item',
  imports: [FontAwesomeModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
  @Input() task?:Task;
  @Output() deleteTask = new EventEmitter()
  @Output() updateTask = new EventEmitter()
  faTimes = faTimes

  onDelete(task:Task)
  {
    this.deleteTask.emit(task)
  }

  onUpdate(task:Task)
  {
    this.updateTask.emit(task)
  }


}
