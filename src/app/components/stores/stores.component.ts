import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Store } from 'app/models/store.model';
import { StoreService } from 'app/services/store.service';

@Component({
  selector: 'mt-stores',
  templateUrl: '../../components/stores/stores.component.html',
  styleUrls: ['../../components/stores/stores.component.css']
})
export class StoresComponent implements OnInit {

  stores: Store[];
  find: any;

  constructor(private storeService: StoreService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: any) => console.log(data));
    this.allStores();
  }

  allStores() {
    this.storeService.getAllStores().subscribe(allStores => {
      console.log(allStores)
      this.stores = allStores;
    });
  }

  /* bakeries() {
    this.storeService.getBakeries().subscribe(bakeries => {
      console.log(bakeries);
      this.stores = bakeries;
    });
  }*/

  restaurants() {
    this.storeService.getRestaurants().subscribe(restaurants => {
      console.log(restaurants);
      this.stores = restaurants;
    });
  }

}
