import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { OrderDetailComponent } from "./order/order-detail/order-detail.component";
import { OrderComponent } from "./order/order.component";
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
    {path: 'about', component: AboutComponent},
    {path: 'order', component: OrderComponent},
    {path: 'order-success-detail', component: OrderDetailComponent},
    {path: 'rate', component: RatingComponent}
]