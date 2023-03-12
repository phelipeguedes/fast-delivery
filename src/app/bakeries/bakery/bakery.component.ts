import { Component, Input, OnInit } from '@angular/core';
import { Store } from 'app/models/store.model';

@Component({
  selector: 'mt-bakery',
  templateUrl: './bakery.component.html'
})
export class BakeryComponent implements OnInit {

  @Input() bakery: Store;
  
  constructor() { }

  ngOnInit() {
    console.log(this.bakery)
  }

}
