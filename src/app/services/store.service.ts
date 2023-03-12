import { HttpClient } from "@angular/common/http";
import { API_MEAT } from "app/app.api";
import { Store } from "app/models/store.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { ItemMenu } from "app/restaurant-detail/item-menu/item-menu.model";

@Injectable()
export class StoreService {

    stores: Store[] = [];

    constructor(private http: HttpClient){}

    getAllStores(): Observable<Store[]> {
        return this.http.get<Store[]>(`${API_MEAT}/stores`);
    }

    getStoreById(id: string): Observable<Store> {
        return this.http.get<Store>(`${API_MEAT}/stores/${id}`);
    }

    getBakeries(): Observable<Store[]> {
        return this.http.get<Store[]>(`${API_MEAT}/stores?category=bakery`);
    }

    getDrinksStores(): Observable<Store[]> {
        return this.http.get<Store[]>(`${API_MEAT}/stores?category=drinks`)
    }

    getMarkets(): Observable<Store[]> {
        return this.http.get<Store[]>(`${API_MEAT}/stores?category=market`);
    }

    getRestaurants(): Observable<Store[]> {
        return this.http.get<Store[]>(`${API_MEAT}/stores?category=restaurant`);
    }

    showReviews(id: string):Observable<any> {
        return this.http.get(`${API_MEAT}/stores/${id}/reviews`);
    }

    showMenuStore(id: string): Observable<ItemMenu[]> {
        return this.http.get<ItemMenu[]>(`${API_MEAT}/stores/${id}/menu`)
    }
}