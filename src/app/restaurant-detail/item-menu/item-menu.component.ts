import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemMenu } from './item-menu.model';

@Component({
  selector: 'mt-item-menu',
  templateUrl: './item-menu.component.html'
})
export class ItemMenuComponent implements OnInit {

  @Input() itemMenu: ItemMenu;
  @Output() addItem = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  addEventEmitter() {
    this.addItem.emit(this.itemMenu);
  }

}
