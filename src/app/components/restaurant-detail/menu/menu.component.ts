import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'app/services/store.service';
import { Observable } from 'rxjs/Observable';
import { ItemMenu } from '../item-menu/item-menu.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: ItemMenu[] = [];

  constructor(private storeService: StoreService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.storeService.showMenuStore(this.route.parent.snapshot.params['id'])
    .subscribe(menu => this.menu = menu)
    console.log(this.menu);
  }

  addItemMenu(item: ItemMenu) {
    console.log(item);
  }
}
