import { Component, Input, OnInit, Output } from '@angular/core';
import { ShoppingCartService } from 'app/components/restaurant-detail/shopping-cart/shopping-cart.service';

@Component({
  selector: 'mt-delivery-costs',
  templateUrl: './delivery-costs.component.html',
  styleUrls: ['./delivery-costs.component.css']
})
export class DeliveryCostsComponent implements OnInit {
  
  @Input() deliveryRate: number = 0;
  @Input() itemsTotalValue: number = 0;

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {
  }

  totalToPay(): number {
    return  this.itemsTotalValue + this.deliveryRate;
  }

}
