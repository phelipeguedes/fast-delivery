import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";
import { ItemCart } from "app/restaurant-detail/shopping-cart/item-cart.model";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { Order } from "./order.model";
import { API_MEAT } from '../app.api'
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { OrderDetailComponent } from "./order-detail/order-detail.component";


@Injectable()
export class OrderService {

    constructor(private shoppingCartService: ShoppingCartService, private http: Http, private route: Router) {

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
        const headers = new Headers();

        headers.append('Content-Type', 'application/json');

        // salvando a compra. Transforma o obj compra em json e salva no banco
        return this.http.post(`${API_MEAT}/orders`, JSON.stringify(order),
                    new RequestOptions({headers: headers}))
                    .map(result=>result.json())
                    .map(order => order.id);                    
    }

    clearCartAfterComplete() {
        return this.shoppingCartService.clearCart();
    }

    displayScreamOrderDone() {
        return this.route.navigate(['/order-success-detail']);
    }
}