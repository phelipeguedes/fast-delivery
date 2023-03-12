import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PreloadAllModules, PreloadingStrategy, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {ROUTES} from './app.routes'
import { NgSelectModule } from '@ng-select/ng-select';

import { LocationStrategy, HashLocationStrategy, registerLocaleData } from '@angular/common';
import localePt  from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt');

import { AppComponent } from './app.component';
import { BakeryComponent } from './bakeries/bakery/bakery.component';
import { BakeriesComponent } from './bakeries/bakeries.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component'
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { ItemMenuComponent } from './restaurant-detail/item-menu/item-menu.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { ShoppingCartService } from './restaurant-detail/shopping-cart/shopping-cart.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderService } from './order/order.service';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { SharedModule } from './shared/shared.module';
import { DrinkComponent } from './drinks/drink/drink.component';
import { DrinksComponent } from './drinks/drinks.component';
import { StoreService } from './services/store.service';
import { StoresComponent } from './stores/stores.component';
import { StoreComponent } from './stores/store/store.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './services/search.service';
import { MarketsComponent } from './markets/markets.component';
import { MarketComponent } from './markets/market/market.component';
import { ItemSearchComponent } from './search/item-search/item-search.component';
import { StoreDetailComponent } from './store-detail/store-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    MenuComponent,
    ShoppingCartComponent,
    ItemMenuComponent,
    ReviewsComponent,
    OrderDetailComponent,
    DrinksComponent,
    DrinkComponent,
    BakeriesComponent,
    BakeryComponent,
    StoresComponent,
    StoreComponent,
    SearchComponent,
    MarketsComponent,
    MarketComponent,
    ItemSearchComponent,
    StoreDetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    NgSelectModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [StoreService, SearchService, ShoppingCartService, OrderService, FormBuilder, SearchComponent, {provide: LOCALE_ID, useValue: 'pt'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
