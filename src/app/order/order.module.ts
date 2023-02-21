import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SharedModule } from "app/shared/shared.module";

import { OrderComponent } from "./order.component";
import { ItemsOrderComponent } from "./items-order/items-order.component";
import { DeliveryCostsComponent } from "./delivery-costs/delivery-costs.component";

const Routes: Routes = [
    {path: '', component: OrderComponent}
]

@NgModule({
    declarations:[OrderComponent, ItemsOrderComponent, DeliveryCostsComponent],
    imports: [SharedModule, RouterModule.forChild(Routes)]
})

export class OrderModule{}