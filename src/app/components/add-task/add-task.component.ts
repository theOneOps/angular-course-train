import { Component, Output, EventEmitter, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../Task';
import { UiServiceService } from '../../services/ui-service.service';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
  text: string = '';
  day: string = '';
  reminder: boolean = false;

  isDisplayed:boolean = true;

  @Output() saveTask:EventEmitter<Task> = new EventEmitter()


  constructor(private ui: UiServiceService){
    effect(() => {
      this.isDisplayed = !this.ui.isOnClosed();
    });
  }

  onSubmit()
  {
    if (this.text === '')
    {
      alert('name is a required field !')
      return
    }

    const newtask : Task = {
      text:this.text,
      day:this.day, 
      reminder:this.reminder
    }

    this.saveTask.emit(newtask)

    this.text = ""
    this.day = ""
    this.reminder = false
  }

  ngOnInit():void
  {
    this.isDisplayed = !this.ui.isOnClosed()
  }

}
