import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SharedModule } from "../../components/shared/shared.module";

import { OrderComponent } from "./order.component";
import { ItemsOrderComponent } from "./items-order/items-order.component";
import { DeliveryCostsComponent } from "./delivery-costs/delivery-costs.component";

import { LeaveRouterGuard } from "./leave-router.guard";

const Routes: Routes = [
    {path: '', component: OrderComponent, canDeactivate: [LeaveRouterGuard]}
]

@NgModule({
    declarations:[OrderComponent, ItemsOrderComponent, DeliveryCostsComponent],
    imports: [SharedModule, RouterModule.forChild(Routes)]
})

export class OrderModule{}