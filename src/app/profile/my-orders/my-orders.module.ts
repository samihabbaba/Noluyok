import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyOrdersPage } from './my-orders.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { MyOrdersPageRoutingModule } from './my-orders-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyOrdersPageRoutingModule,
    SharedModule
  ],
  declarations: [MyOrdersPage]
})
export class MyOrdersPageModule {}
