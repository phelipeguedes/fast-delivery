import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'app/restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { ItemMenu } from '../item-menu/item-menu.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<ItemMenu[]>;
  
  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute) { }

  ngOnInit() {
  
    this.menu = this.restaurantService.showMenuRestaurant(this.route.parent.snapshot.params['id']);
    console.log(this.menu);
  
  }

  addItemMenu(item: ItemMenu) {
    console.log(item);
  }
}
