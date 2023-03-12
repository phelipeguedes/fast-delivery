import { Routes } from "@angular/router";
import { BakeriesComponent } from "./bakeries/bakeries.component";
import { DrinksComponent } from "./drinks/drinks.component";
import { HomeComponent } from "./home/home.component";
import { MarketsComponent } from "./markets/markets.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { OrderDetailComponent } from "./order/order-detail/order-detail.component";
import { MenuComponent } from "./restaurant-detail/menu/menu.component";
import { ReviewsComponent } from "./restaurant-detail/reviews/reviews.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { ItemSearchComponent } from "./search/item-search/item-search.component";
import { RatingComponent } from "./shared/rating/rating.component";
import { StoreDetailComponent } from "./store-detail/store-detail.component";
import { StoreComponent } from "./stores/store/store.component";
import { StoresComponent } from "./stores/stores.component";

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'stores', component: StoresComponent},
    {path: 'restaurants', component: RestaurantsComponent},
    {path: 'drinks', component: DrinksComponent},
    {path: 'bakeries', component: BakeriesComponent},
    {path: 'markets', component: MarketsComponent},
    {path: 'restaurants/:id', component: StoreDetailComponent,
        children: [
            {path: '', redirectTo: 'menu', pathMatch: 'full'},
            {path: 'menu', component: MenuComponent},
            {path: 'reviews', component: ReviewsComponent}
        ]
    },
    {path: 'drinks/:id', component: StoreDetailComponent,
        children: [
            {path: '', redirectTo: 'menu', pathMatch: 'full'},
            {path: 'menu', component: MenuComponent},
            {path: 'reviews', component: ReviewsComponent}
        ]
    },
    {path: 'bakeries/:id', component: StoreDetailComponent,
        children: [
            {path: '', redirectTo: 'menu', pathMatch: 'full'},
            {path: 'menu', component: MenuComponent},
            {path: 'reviews', component: ReviewsComponent}
        ]
    },
    {path: 'markets/:id', component: StoreDetailComponent,
        children: [
            {path: '', redirectTo: 'menu', pathMatch: 'full'},
            {path: 'menu', component: MenuComponent},
            {path: 'reviews', component: ReviewsComponent}
        ]
    },
    {path: 'stores/:id', component: StoreDetailComponent,
        children: [
            {path: '', redirectTo: 'menu', pathMatch: 'full'},
            {path: 'menu', component: MenuComponent},
            {path: 'reviews', component: ReviewsComponent}
        ]
    },
    {path: '**', component: NotFoundComponent},
 
    {path: 'order-success-detail', component: OrderDetailComponent},
    {path: 'rate', component: RatingComponent},
    /* "about" e "order" serão carregados pelo lazy-loading. o path aponta p/ os módulos deles */
    {path: 'about', loadChildren: './about/about.module#AboutModule'},
    {path: 'order', loadChildren: './order/order.module#OrderModule'}
]