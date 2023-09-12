import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from 'app/models/store.model';
import { StoreService } from 'app/services/store.service';

@Component({
  selector: 'mt-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.css']
})
export class StoreDetailComponent implements OnInit {

  store: Store;

  constructor(private storeService: StoreService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getIdByRoute();
  }

  getIdByRoute() {
    const id = this.route.snapshot.params['id'];
    console.log(id);

    this.storeService.getStoreById(id).subscribe(store => {
      this.store = store;
      console.log(this.store)
    });
  }

}
