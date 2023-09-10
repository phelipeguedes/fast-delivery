import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { StoreService } from 'app/services/store.service';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>;

  constructor(private storeService: StoreService, private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.reviews = this.storeService.showReviews(this.route.parent.snapshot.params['id']);
    console.log(this.reviews);
  
  }

}
