import { Component, OnInit } from '@angular/core';
import { Store } from 'app/models/store.model';

import { StoreService } from 'app/services/store.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: '../../components/restaurants/restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: Store[];  

  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.getRestaurants();    
  }

  getRestaurants() {    
    this.storeService.getRestaurants().subscribe(restaurants => {    
      console.log(restaurants);
      this.restaurants = restaurants;
    });
  }

}
