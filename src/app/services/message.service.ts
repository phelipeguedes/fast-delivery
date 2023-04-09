import { Injectable, EventEmitter } from '@angular/core';
import { Message } from 'app/models/message';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  emmitMessage = new EventEmitter<string>();

  constructor() { }

  showMessage(message: string) {
    this.emmitMessage.emit(message);
  }


}
