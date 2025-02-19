import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  isOnClosed = signal(true)

  toggleIsOnClosed():void
  {
    this.isOnClosed.set(!this.isOnClosed())
  }

  constructor() { }
}
