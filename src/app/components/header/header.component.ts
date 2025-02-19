import { Component, effect, signal } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { UiServiceService } from '../../services/ui-service.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  title: string = 'Tasks';
  counter = signal<number>(0)

  isClosed : boolean = false
  isOnTasksPage: boolean = false;


  constructor(private ui: UiServiceService, private router: Router) {
    // Écoute les changements de route pour détecter si on est sur "/tasks"
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isOnTasksPage = event.url === '/tasks';
      });

    // Met à jour `isClosed` de manière réactive
    effect(() => {
      this.isClosed = this.ui.isOnClosed();
    });
  }

  toggleForm():void
  {
    // this.counter.update(value=>value+1)
    this.ui.toggleIsOnClosed()
  }

  toggleAddTask()
  {
    console.log("hello")
  }

  ngOnInit():void{
    this.isClosed = this.ui.isOnClosed()
  }

}
