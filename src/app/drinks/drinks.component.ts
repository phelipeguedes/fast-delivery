import { Component, OnInit } from "@angular/core";
import { Store } from '../models/store.model'
import { StoreService } from "app/services/store.service";

@Component({
    selector: 'mt-drinks',
    templateUrl: './drinks.component.html'
})
export class DrinksComponent implements OnInit {

    drinks: Store[];

    constructor(private storeService: StoreService) { }

    ngOnInit(): void {
        
        this.storeService.getDrinksStores().subscribe(drinksStore => {
            console.log(drinksStore);
            this.drinks = drinksStore;
        });
    }
}