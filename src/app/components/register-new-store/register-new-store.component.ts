import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mt-register-new-store',
  templateUrl: './register-new-store.component.html'
})
export class RegisterNewStoreComponent implements OnInit {

  listItems: Array<any> = [
    {name: 'Restaurante'},
    {name: 'Padaria'},
    {name: 'Lanchonete'},
    {name: 'Food-truck'}
  ];

  typeRegister: number = 1;
  url: string = '/new-store';
  titleBox = 'Cadastre sua Loja';

  constructor() { }

  ngOnInit() {
  }

}
