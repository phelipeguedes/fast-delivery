import { timer } from 'rxjs';
import { MessageService } from './../../services/message.service';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs-compat/operator/switchMap';

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  visibility: boolean = false;
  message: string = '';

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.displayMessage();
  }

  displayMessage() {
      this.messageService.emmitMessage.subscribe(msg => {
          this.message = msg;
          this.visibility = true;
          timer(3000).subscribe(time => this.visibility = false)
      });
  }

}
