import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { OrderDetailComponent } from "./order/order-detail/order-detail.component";
import { MenuComponent } from "./restaurant-detail/menu/menu.component";
import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component";
import { ReviewsComponent } from "./restaurant-detail/reviews/reviews.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { RatingComponent } from "./shared/rating/rating.component";

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'restaurants', component: RestaurantsComponent},
    {path: 'restaurants/:id', component: RestaurantDetailComponent,
        children: [
            {path: '', redirectTo: 'menu', pathMatch: 'full'},
            {path: 'menu', component: MenuComponent},
            {path: 'reviews', component: ReviewsComponent}
        ]},
    {path: 'order-success-detail', component: OrderDetailComponent},
    {path: 'rate', component: RatingComponent},
    /* "about" e "order" serão carregados pelo lazy-loading. o path aponta p/ os módulos deles */
    {path: 'about', loadChildren: './about/about.module#AboutModule'},
    {path: 'order', loadChildren: './order/order.module#OrderModule'}
]