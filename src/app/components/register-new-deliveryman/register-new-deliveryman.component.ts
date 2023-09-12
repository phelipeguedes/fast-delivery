import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-register-new-deliveryman',
  templateUrl: './register-new-deliveryman.component.html'
})
export class RegisterNewDeliverymanComponent implements OnInit {

  listItems: Array<any> = [
    {name: 'Fazer entregas'},
    {name: 'Entregador'},
    {name: 'Entregadora'}    
  ]
  
  typeRegister: number = 2;
  url: string = '/new-deliveryman';
  titleBox = 'Cadastrar entregador'

  constructor() { }

  ngOnInit() {
  }

}
