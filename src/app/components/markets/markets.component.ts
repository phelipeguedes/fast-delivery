import { Component, OnInit } from '@angular/core';
import { Store } from 'app/models/store.model';
import { StoreService } from 'app/services/store.service';

@Component({
  selector: 'mt-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.css']
})
export class MarketsComponent implements OnInit {

  markets: Store[];

  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.getMarkets();
  }

  getMarkets() {
    this.storeService.getMarkets().subscribe(markets => {
      this.markets = markets;
    });      
  }
}
