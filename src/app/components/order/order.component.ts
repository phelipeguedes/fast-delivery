import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemCart } from 'app/components/restaurant-detail/shopping-cart/item-cart.model';
import { InputComponent } from '../../components/shared/input/input.component';
import { RadioOptions } from '../../components/shared/radio/radio.model.options';
import { isEmpty } from 'rxjs/operator/isEmpty';
import { ItemOrder, Order } from './order.model';
import { OrderService } from './order.service';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  deliveryRate: number = 10;
  formOrder: FormGroup;
  orderId: string;

  emailValidate = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  numberValidate = /^[0-9]*$/

  paymentOptions: RadioOptions[] = [
      {label: 'Dinheiro', value: 'dinheiro'},
      {label: 'Cartão de Crédito', value: 'cartao-credito'},
      {label: 'Cartão de Débito', value: 'cartao-debito'},
      {label: 'PIX', value: 'pix'},
      {label: 'Vale Refeição', value: 'vale-refeicao'},
  ]; 
  static emailCheck: any;

  constructor(private orderService: OrderService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    //this.callForm();
    this.formOrder = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]), 
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberValidate)]),
      complement: this.formBuilder.control(''),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailValidate)]),
      emailConfirm: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailValidate)]),
      paymentOptions: this.formBuilder.control('', [Validators.required])
    }, {validator: OrderComponent.compareFields});
  }

  static compareFields(group: AbstractControl): {[key: string]: boolean} {
    
    let email = group.get('email');
    let emailConfirm = group.get('emailConfirm');

    if(email.value !== emailConfirm.value) {
      return {wrongEmails: true}
    }

    if(!email || !emailConfirm)
      return undefined;
    
    return undefined;
  }

  itemsCart(): ItemCart[] {
    return this.orderService.itemsCart();
  }

  increase(item: ItemCart) {
      return this.orderService.increase(item);
  }

  decrease(item: ItemCart) {
      return this.orderService.decrease(item);
  }

  remove(item: ItemCart) {
      return this.orderService.remove(item);
  }

  itemsTotalValue(): number {
    return this.orderService.itemsTotalValue();
  }

  checkOrder(order: Order) {
    // transformando os itens do carrinho em itens do pedido
    order.item = this.itemsCart().map(
      (objItem:ItemCart) => new ItemOrder(objItem.itemMenu.id, objItem.qtdItens)
    );
    
    console.log(order);

    this.orderService.checkOrder(order)
      .do((orderId: string) => {
        this.orderId = orderId;
      })
      .subscribe((orderId: string) => {
        console.log(`Compra concluída com sucesso! id da compra: ${orderId}`);

      this.orderService.clearCartAfterComplete();
      this.orderService.displayScreamOrderDone();
    });
  }

  checkOrderFinished(): any {

    if(!this.orderId) 
      return undefined;

    return this.orderId;
  }

  callForm() {
    
  }

  
}
