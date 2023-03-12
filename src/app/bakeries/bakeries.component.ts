import { Component, OnInit } from "@angular/core"
import { Store } from '../models/store.model'
import { StoreService } from "app/services/store.service"

@Component({
    selector: 'mt-bakeries',
    templateUrl: './bakeries.component.html'
})
export class BakeriesComponent implements OnInit {

    bakeries: Store[];

    constructor(private storeService: StoreService) {}

    ngOnInit(): void {

        this.storeService.getBakeries().subscribe(bakeries => {
            console.log(bakeries);
            this.bakeries = bakeries;
        });
    }
}