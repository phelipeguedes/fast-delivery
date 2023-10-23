import { HttpClient, HttpEvent, HttpRequest } from "@angular/common/http";
import { API_FAST } from "app/app.api";
import { Store } from "app/models/store.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { ItemMenu } from "app/components/restaurant-detail/item-menu/item-menu.model";
import { error } from "@angular/compiler/src/util";
import { Category } from "app/models/category.model";
import { Subcategory } from "app/models/subcategory.model";
import { Form, FormBuilder, FormGroup } from "@angular/forms";

@Injectable()
export class StoreService {

    stores: Store[] = [];

    constructor(private http: HttpClient){}

    getAllStores(): Observable<Store[]> {
        return this.http.get<Store[]>(`${API_FAST}/stores`);
    }

    getStoreById(id: string): Observable<Store> {
        return this.http.get<Store>(`${API_FAST}/stores/${id}`);
    }

    getBakeries(): Observable<Store[]> {
        return this.http.get<Store[]>(`${API_FAST}/bakeries`);
    }

    getMarkets(): Observable<Store[]> {
      return this.http.get<Store[]>(`${API_FAST}/markets`);
    }

    getDrinksStores(): Observable<Store[]> {
        return this.http.get<Store[]>(`${API_FAST}/drinks`)
    }

    getRestaurants(): Observable<Store[]> {
        return this.http.get<Store[]>(`${API_FAST}/restaurants`);
    }

    saveStore(formData: FormData):Observable<FormData> {
        return this.http.post<FormData>(`${API_FAST}/new-store`, formData);
    }

    showReviews(id: string):Observable<any> {
        return this.http.get(`${API_FAST}/stores/${id}/reviews`);
    }

    showMenuStore(id: string): Observable<ItemMenu[]> {
        return this.http.get<ItemMenu[]>(`${API_FAST}/stores/${id}/menu`)
    }

    getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(`${API_FAST}/categories`);
    }

    getSubcategories(): Observable<Subcategory[]> {
        return this.http.get<Subcategory[]>(`${API_FAST}/subcategories`);
    }
}
