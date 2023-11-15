import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PreloadAllModules, PreloadingStrategy, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ROUTES } from './app.routes'
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LocationStrategy, HashLocationStrategy, registerLocaleData } from '@angular/common';
import localePt  from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt');

import { AppComponent } from './app.component';
import { BakeryComponent } from './components/bakeries/bakery/bakery.component';
import { BakeriesComponent } from './components/bakeries/bakeries.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantComponent } from './components/restaurants/restaurant/restaurant.component'
import { MenuComponent } from './components/restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './components/restaurant-detail/shopping-cart/shopping-cart.component';
import { ItemMenuComponent } from './components/restaurant-detail/item-menu/item-menu.component';
import { ReviewsComponent } from './components/restaurant-detail/reviews/reviews.component';
import { ShoppingCartService } from './components/restaurant-detail/shopping-cart/shopping-cart.service';
import { FormBuilder } from '@angular/forms';
import { OrderService } from './components/order/order.service';
import { OrderDetailComponent } from './components/order/order-detail/order-detail.component';
import { SharedModule } from './components/shared/shared.module';
import { DrinkComponent } from './components/drinks/drink/drink.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { StoreService } from './services/store.service';
import { StoresComponent } from './components/stores/stores.component';
import { StoreComponent } from './components/stores/store/store.component';
import { SearchComponent } from './components/search/search.component';
import { SearchService } from './services/search.service';
import { MarketsComponent } from './components/markets/markets.component';
import { MarketComponent } from './components/markets/market/market.component';
import { ItemSearchComponent } from './components/search/item-search/item-search.component';
import { StoreDetailComponent } from './components/store-detail/store-detail.component';
import { LoginComponent } from './security/login/login.component'
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LinkLoginComponent } from './components/link-login/link-login.component';
import { RouteGuard } from './security/route.guard';
import { LeaveRouterGuard } from './components/order/leave-router.guard';
import { AppErrorHandler } from './app.error-handler';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { RegisterBoxComponent } from './components/register-box/register-box.component';
import { RegisterNewStoreComponent } from './components/register-new-store/register-new-store.component';
import { StoreFormComponent } from './components/stores/store-form/store-form.component';
import { UserService } from './services/user.service';
import { RegisterNewDeliverymanComponent } from './components/register-new-deliveryman/register-new-deliveryman.component';
import { DeliveryManFormComponentComponent } from './components/delivery-man-form-component/delivery-man-form-component.component';

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
    NotFoundComponent,
    LoginComponent,
    LinkLoginComponent,
    RegisterUserComponent,
    RegisterBoxComponent,
    RegisterNewStoreComponent,
    RegisterNewDeliverymanComponent,
    StoreFormComponent,
    DeliveryManFormComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [StoreService, UserService, SearchService, ShoppingCartService, OrderService, FormBuilder, SearchComponent,
              RouteGuard, LeaveRouterGuard, {provide: LOCALE_ID, useValue: 'pt'}, {provide: ErrorHandler, useClass: AppErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
