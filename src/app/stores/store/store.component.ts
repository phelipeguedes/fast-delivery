import { Component, Input, OnInit } from '@angular/core';
import { Store } from 'app/models/store.model';

@Component({
  selector: 'mt-store',
  templateUrl: './store.component.html'
})
export class StoreComponent implements OnInit {

  @Input() store: Store;

  constructor() { }

  ngOnInit() {
    console.log(this.store);
  }

}
