import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mt-register-new-store',
  templateUrl: './register-new-store.component.html',
  styleUrls: ['./register-new-store.component.css']
})
export class RegisterNewStoreComponent implements OnInit {

  listItems: Array<any> = [
    {name: 'Restaurante'},
    {name: 'Padaria'},
    {name: 'Lanchonete'},
    {name: 'Food-truck'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
