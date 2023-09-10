import { ItemMenu } from "../item-menu/item-menu.model";
import { ItemCart } from "./item-cart.model";


export class ShoppingCartService {

    items: ItemCart[] = [];

    addItemToCart(item: ItemMenu) {
        
        // verifica se um item do menu já está na lista de itens adicionados
        let itemFound = this.items.find((itemOfMenu) => itemOfMenu.itemMenu.id === item.id);
        
        if(itemFound)
            itemFound.qtdItens++;
         else
            this.items.push(new ItemCart(item));        
    }

    /* removeItemOfCart(itemCart: ItemCart) {

        let itemFound = this.items.find((itemOfMenu) => itemOfMenu.itemMenu.id === itemCart.itemMenu.id);
        let itemFromCart: ItemCart;

        if(itemCart.qtdItens > 1)
            itemFound.qtdItens--;
        else
            this.items.splice(this.items.indexOf(itemFromCart), 1);
    } */

    increaseQtdItems(item: ItemCart) {
        item.qtdItens++;
    }

    decreaseQtdItems(item: ItemCart) {
        item.qtdItens--;

        if(item.qtdItens == 0)
            this.removeItem(item);
    }

    removeItem(item:ItemCart) {
        console.log('no sc service')
        this.items.splice(this.items.indexOf(item), 1);
    }

    removeAllItems() {
        let text = 'Quer mesmo remover todos os itens do carrinho?';

        if(confirm(text) == true) 
            this.items.length = 0;
    }

    clearCart() {
        this.items.length = 0;
    }

    sumTotalToPay() {
        return this.items.
                map(item => item.totalValue())
                    .reduce((prevValue, currentValue) => prevValue+currentValue, 0);
    }
}