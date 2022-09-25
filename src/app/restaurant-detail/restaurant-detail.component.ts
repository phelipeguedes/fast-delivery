import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { RestaurantService } from 'app/restaurants/restaurants.service';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant

  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute) { }

  ngOnInit() {

    const id = this.route.snapshot.params['id'];
    console.log(id)
    this.restaurantService.getRestaurant(id).subscribe(restaurant => this.restaurant = restaurant);
  }

}
