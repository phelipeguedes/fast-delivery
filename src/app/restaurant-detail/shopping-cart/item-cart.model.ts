import { ItemMenu } from "../item-menu/item-menu.model";

export class ItemCart {

    constructor(public itemMenu: ItemMenu, public qtdItens: number = 1) {}

    totalValue(): number {
        return this.itemMenu.price * this.qtdItens;
    }
}