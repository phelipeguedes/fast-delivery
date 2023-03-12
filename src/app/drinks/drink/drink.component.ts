import { Component, Input, OnInit } from '@angular/core';
import { Store } from 'app/models/store.model';

@Component({
  selector: 'mt-drink',
  templateUrl: './drink.component.html'
})
export class DrinkComponent implements OnInit {

  @Input() drink: Store;

  constructor() { }

  ngOnInit() {
    console.log(this.drink)
  }

}
