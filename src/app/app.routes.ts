import { SnackbarComponent } from './components/shared/snackbar/snackbar.component';
import { LoginComponent } from './security/login/login.component';
import { Routes } from "@angular/router";
import { BakeriesComponent } from "./components/bakeries/bakeries.component";
import { DrinksComponent } from "./components/drinks/drinks.component";
import { HomeComponent } from "./components/home/home.component";
import { MarketsComponent } from "./components/markets/markets.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { OrderDetailComponent } from "./components/order/order-detail/order-detail.component";
import { MenuComponent } from "./components/restaurant-detail/menu/menu.component";
import { ReviewsComponent } from "./components/restaurant-detail/reviews/reviews.component";
import { RestaurantsComponent } from "./components/restaurants/restaurants.component";
import { ItemSearchComponent } from "./components/search/item-search/item-search.component";
import { RatingComponent } from "./components/shared/rating/rating.component";
import { StoreDetailComponent } from "./store-detail/store-detail.component";
import { StoreComponent } from "./components/stores/store/store.component";
import { StoresComponent } from "./components/stores/stores.component";
import { RegisterUserComponent } from "./components/register-user/register-user.component";
import { RouteGuard } from './security/route.guard';
import { RegisterNewStoreComponent } from './components/register-new-store/register-new-store.component';
import { StoreFormComponent } from './components/stores/store-form/store-form.component'

export const ROUTES: Routes = [

    {path: 'login', component: LoginComponent},
    {path: 'login/:url', component: LoginComponent},
    {path: 'register-user', component: RegisterUserComponent},
    {path: 'new-store', component: StoreFormComponent},
    {path: 'edit-store/:id', component: StoreFormComponent},

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

    {path: 'snackbar', component: SnackbarComponent},
    {path: 'order-success-detail', component: OrderDetailComponent},
    {path: 'rate', component: RatingComponent},

    /* "about" e "order" serão carregados pelo lazy-loading. o path aponta p/ os módulos deles */
    {path: 'about', loadChildren: './about/about.module#AboutModule'},

    /* canload só permite realizar compras p/ quem estar autenticado */
    {path: 'order', loadChildren: './components/order/order.module#OrderModule', canLoad: [RouteGuard], canActivate: [RouteGuard]}, 

    {path: '**', component: NotFoundComponent}
]
