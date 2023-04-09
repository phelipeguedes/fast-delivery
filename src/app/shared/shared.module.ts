import { MessageService } from './../services/message.service';
import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";

import { OrderService } from "app/order/order.service";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { StoreService } from "app/services/store.service";
import { LoginService } from "app/services/login.service";
import { SnackbarComponent } from './snackbar/snackbar.component';
import { RouteGuard } from 'app/security/route.guard';
import { LeaveRouterGuard } from 'app/order/leave-router.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from 'app/security/interceptor';

@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, RatingComponent, CommonModule,
               FormsModule,  ReactiveFormsModule, SnackbarComponent ]
})

/* retorna todos os módulos (componentes) compartilhados (shared), mais os providers (serviços)
o shared module tem a opção de ser importado só com os módulos (SharedModule) ou com os módulos e os providers (SharedModule.forRoot())
de acordo com a necessidade da funcionalidade da aplicação */
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        
        return {ngModule: SharedModule, 
                providers: [ShoppingCartService, 
                            StoreService,
                            OrderService,
                            LoginService,
                            MessageService,
                            RouteGuard,
                            LeaveRouterGuard, 
                            {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true}
                        ]}
    }
}
