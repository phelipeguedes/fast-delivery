import { Component, EventEmitter, HostBinding, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  stars: number[] = [1, 2, 3, 4, 5];
  rate: number = 0;
  prevRate: number;

  @Output() evaluated = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  evaluateOrder(number: number) {
    this.rate = number;
    this.prevRate = undefined;

    this.evaluated.emit(this.rate);
  }

  setTmpEvaluateOrder(number: number) {
    console.log(this.prevRate)
    if(isNaN(this.prevRate)) 
      this.prevRate = this.rate;

    this.rate = number;
  }

  clearTmpEvaluateOrder() {
    if(this.prevRate != undefined) {
      this.rate = this.prevRate;
      this.prevRate = undefined;
    }
  }
}
