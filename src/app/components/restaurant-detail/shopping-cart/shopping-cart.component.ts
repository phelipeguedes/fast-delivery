import { Component, OnInit } from '@angular/core';
import { ItemMenu } from '../item-menu/item-menu.model';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  addItem(item: any) {
    return this.shoppingCartService.addItemToCart(item);
  }

  showItems(): any[] {
    return this.shoppingCartService.items;
  }

  removeItem(item: any) {
    return this.shoppingCartService.removeItem(item);
  }

  removeAllItems() {
    return this.shoppingCartService.removeAllItems();
  }

  totalToPay(): number {
    return this.shoppingCartService.sumTotalToPay();
  }

}
