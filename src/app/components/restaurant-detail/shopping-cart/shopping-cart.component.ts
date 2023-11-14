import { Component, OnInit } from '@angular/core';
import { ItemMenu } from '../item-menu/item-menu.model';
import { ShoppingCartService } from './shopping-cart.service';
import { ConfirmationDialogComponent } from 'app/components/shared/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  addItem(item: any) {
    return this.shoppingCartService.addItemToCart(item);
  }

  showItems(): any[] {
    return this.shoppingCartService.items;
  }

  removeItem(item: any) {
    return this.shoppingCartService.removeItem(item);
  }

  removeAllItems() {

    // janela de diálogo para confirmação da exclusão do registro
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      panelClass: 'my-custom-dialog',
      data: { description: 'Quer mesmo remover todos os itens do carrinho?' }
    });


    dialogRef.afterClosed().subscribe((result: boolean) => {
      // se sim, chama o serviço para remoção de todos os itens
      if(result) {
        return this.shoppingCartService.removeAllItems();
      }
    });

  }

  totalToPay(): number {
    return this.shoppingCartService.sumTotalToPay();
  }

}
