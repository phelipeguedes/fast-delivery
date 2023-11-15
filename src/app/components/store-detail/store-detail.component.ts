import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from 'app/models/store.model';
import { MessageService } from 'app/services/message.service';
import { StoreService } from 'app/services/store.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'mt-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.css']
})
export class StoreDetailComponent implements OnInit {

  store: Store;

  constructor(private storeService: StoreService, private route: ActivatedRoute, private router: Router,
                 private messageService: MessageService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getIdByRoute();
  }

  getIdByRoute() {
    const id = this.route.snapshot.params['id'];
    console.log(id);

    this.storeService.getStoreById(id).subscribe(store => {
      this.store = store;
      console.log(this.store)
    });
  }

  onEdit(id: string) {
    this.router.navigate([`/edit-store/${id}`]);
  }

  onDelete(id: number) {
    this.storeService.deleteStore(id).subscribe(
      (msgSuccess) => {

        this.messageService.showMessage(msgSuccess.toString());

        setTimeout(() => {
          this.router.navigate(['/stores']);
        }, 2500);
      },
      (msgError) => {
        this.messageService.showMessage(msgError.toString());
      }
    )
  }

  openDialog(id: any): void {

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      panelClass: 'my-custom-dialog',
      data: { description: 'Quer mesmo excluir essa loja?' }
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if(result) {
        this.onDelete(id);
      }
    });

  }

}
