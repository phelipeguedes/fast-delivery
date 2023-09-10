import { OutputEmitter } from '@angular/compiler/src/output/abstract_emitter';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemCart } from 'app/components/restaurant-detail/shopping-cart/item-cart.model';

@Component({
  selector: 'mt-items-order',
  templateUrl: './items-order.component.html'
})
export class ItemsOrderComponent implements OnInit {

  @Input() items: ItemCart;

  @Output() increaseQtd = new EventEmitter<ItemCart>();
  @Output() decreaseQtd = new EventEmitter<ItemCart>();
  @Output() removeItem = new EventEmitter<ItemCart>();

  constructor() { }

  ngOnInit() {
  }

  increaseQtdEmitt(item: ItemCart) {
    this.increaseQtd.emit(item);
  }

  decreaseQtdEmitt(item: ItemCart) {
    this.decreaseQtd.emit(item);
  }

  removeItemEmitt(item: ItemCart) {
    let text = 'Quer mesmo remover esse item da lista de pedidos?';

    if(confirm(text) == true)
      this.removeItem.emit(item);
  }

}
