import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../components/shared/shared.module';
import { StoreComponent } from './store/store.component';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';


@NgModule({
  declarations: [StoreComponent],
  imports: [SharedModule, ConfirmationDialogComponent]
})
export class StoreModule { }
