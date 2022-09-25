import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API_MEAT } from '../app.api'
import { Restaurant } from "./restaurant/restaurant.model";
import { ErrorHandler } from '../app.error-handler';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ItemMenu } from 'app/restaurant-detail/item-menu/item-menu.model';

@Injectable()
export class RestaurantService {
    
    rests: Restaurant[] = [];
    
    constructor(private http: Http){}

    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${API_MEAT}/restaurants`)
            .map(res => res.json())
            .catch((error: any) => ErrorHandler.handleError(error));
    }

    getRestaurant(id: string): Observable<Restaurant> {
        return this.http.get(`${API_MEAT}/restaurants/${id}`)
                .map(res => res.json())
                .catch((error: any) => ErrorHandler.handleError(error));
    } 

    showReviews(id: string): Observable<any> {
        return this.http.get(`${API_MEAT}/restaurants/${id}/reviews`)
                .map(res => res.json())
                .catch((error: any) => ErrorHandler.handleError(error));
    }

    showMenuRestaurant(id: string): Observable<ItemMenu[]> {
        return this.http.get(`${API_MEAT}/restaurants/${id}/menu`)
                .map(res => res.json())
                .catch((error: any) => ErrorHandler.handleError(error));
    }
}