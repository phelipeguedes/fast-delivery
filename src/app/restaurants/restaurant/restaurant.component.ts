import { Component, Input, OnInit } from '@angular/core';
import { Store } from 'app/models/store.model';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html'
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant: Store;
  
  constructor() { }

  ngOnInit() {
    console.log(this.restaurant)
  }

}
