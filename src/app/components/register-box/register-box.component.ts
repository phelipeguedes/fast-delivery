import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'mt-register-box',
  templateUrl: '../register-box/register-box.component.html',
  styleUrls: ['../register-box/register-box.component.css']
})
export class RegisterBoxComponent implements OnInit {

  @Input() items: string[];
  @Input() url: string;

  constructor() { }

  ngOnInit() {
  }

}
