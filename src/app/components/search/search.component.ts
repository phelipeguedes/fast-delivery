import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { SearchService } from 'app/services/search.service';
import { ItemSearch } from './item-search/item-search.model';
import { Store } from 'app/models/store.model';

@Component({
  selector: 'mt-search',
  templateUrl: '../../components/search/search.component.html',
  styleUrls: ['../../components/search/search.component.css'],
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  searchListening: FormControl;
  
  items: ItemSearch[];
  stores: Store[];
  selectedItem: ItemSearch;

  constructor(private searchService: SearchService, private formBuilder: FormBuilder,  
              private router: Router) { }

  ngOnInit() {
    this.formListening();
    this.listStores();
  }

  formListening() {    
    this.searchListening = this.formBuilder.control('');
    this.searchForm = this.formBuilder.group({ searchListening: this.searchListening });
  }

  listStores() { 
    this.searchService.getStores().subscribe(stores => {
        console.log(stores);
        this.stores = stores;
    });
  }

  getItemSelected(store: Store) {
    console.log(store);
    this.redirectToComponent(store);
  }

  redirectToComponent(store: Store) {
    this.router.navigate([`stores/${store.id}`]);
  }

}
