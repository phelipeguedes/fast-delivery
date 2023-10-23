import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../components/shared/shared.module';
import { StoreComponent } from './store/store.component';

@NgModule({
  declarations: [StoreComponent],
  imports: [SharedModule]
})
export class StoreModule { }
