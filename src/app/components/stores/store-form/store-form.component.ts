import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mt-store-form',
  templateUrl: '../store-form/store-form.component.html',
  styleUrls: ['../store-form/store-form.component.css']
})
export class StoreFormComponent implements OnInit {

  form: FormGroup

  constructor() { }

  ngOnInit() {
  }

}
