import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { OrderComponent } from "./order.component";
import { Observable } from "rxjs";


export class LeaveRouterGuard implements CanDeactivate<OrderComponent> {

    canDeactivate(orderComponent: OrderComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        
        // se o pedido não tiver sido finalizado, exibe uma caixa de confirmação, caso o usuário queira sair da página
        if(!orderComponent.checkOrderFinished()) {
            return this.displayConfirmMessage();
        } else {
            return true;
        }
    }

    displayConfirmMessage() {
        return window.confirm('Você quer mesmo desistir do pedido?');
    }
}