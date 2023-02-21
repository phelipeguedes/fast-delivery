import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";

import { OrderService } from "app/order/order.service";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { RestaurantService } from "app/restaurants/restaurants.service";

@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, RatingComponent, CommonModule,
               FormsModule,  ReactiveFormsModule ]
})

/* retorna todos os módulos (componentes) compartilhados (shared), mais os providers (serviços)
o shared module tem a opção de ser importado só com os módulos (SharedModule) ou com os módulos e os providers (SharedModule.forRoot())
de acordo com a necessidade da funcionalidade da aplicação */
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {ngModule: SharedModule, providers: [ShoppingCartService, RestaurantService, OrderService]}
    }
}