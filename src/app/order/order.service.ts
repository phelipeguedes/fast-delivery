import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ItemCart } from "app/restaurant-detail/shopping-cart/item-cart.model";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { Order } from "./order.model";
import { API_MEAT } from '../app.api'
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { OrderDetailComponent } from "./order-detail/order-detail.component";
import { map } from "rxjs/internal/operators/map";


@Injectable()
export class OrderService {

    constructor(private shoppingCartService: ShoppingCartService, private http: HttpClient, private route: Router) {

    }

    itemsCart(): ItemCart[] {
        return this.shoppingCartService.items;
    }

    increase(item: ItemCart) {
        console.log('no order service')
        return this.shoppingCartService.increaseQtdItems(item);
    }

    decrease(item: ItemCart) {
        return this.shoppingCartService.decreaseQtdItems(item);
    }

    remove(item: ItemCart) {
        console.log('no order service')
        return this.shoppingCartService.removeItem(item);
    }

    itemsTotalValue(): number {
        return this.shoppingCartService.sumTotalToPay();
    }

    checkOrder(order: Order): Observable<string>{        
        // salvando a compra. Transforma o obj compra em json e salva no banco
        return this.http.post<Order>(`${API_MEAT}/orders`, order)                    
                .pipe(map(order => order.id));                    
    }

    clearCartAfterComplete() {
        return this.shoppingCartService.clearCart();
    }

    displayScreamOrderDone() {
        return this.route.navigate(['/order-success-detail']);
    }
}