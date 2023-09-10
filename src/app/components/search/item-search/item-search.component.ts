import { Component, OnInit, Input } from '@angular/core';
import { ItemSearch } from './item-search.model';

@Component({
  selector: 'mt-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.css']
})
export class ItemSearchComponent implements OnInit {

  @Input() itemSearch: ItemSearch

  constructor() { }

  ngOnInit() {
    console.log(this.itemSearch)
  }

}
