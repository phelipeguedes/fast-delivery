import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppErrorHandler } from "../app.error-handler";

import { API_FAST, APP_URL } from "app/app.api";
import { ItemSearch } from 'app/components/search/item-search/item-search.model';
import { StoreService } from './store.service';
import { Store } from 'app/models/store.model';

@Injectable()
export class SearchService {

  itemSearch: Observable<ItemSearch[]>;

  constructor(private http: HttpClient, private storeService: StoreService) { }

  searchAll(search?: string): Observable<ItemSearch[]> {
    console.log(search)

    let params: HttpParams = null;

    if(search) {
      params = new HttpParams().append('q', search);
      console.log(params)
    }

    return this.http.get<ItemSearch[]>(`${API_FAST}/stores`, {params: params});    
  } 

  getStores(): Observable<Store[]> {
      return this.storeService.getAllStores();
  }

}
