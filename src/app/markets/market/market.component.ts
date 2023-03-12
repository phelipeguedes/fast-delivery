import { Component, Input, OnInit } from '@angular/core';
import { Store } from 'app/models/store.model';

@Component({
  selector: 'mt-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  @Input() market: Store;

  constructor() { }

  ngOnInit() {
  }

}
