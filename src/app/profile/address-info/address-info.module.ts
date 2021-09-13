import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddressInfoPageRoutingModule } from './address-info-routing.module';

import { AddressInfoPage } from './address-info.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddressInfoPageRoutingModule,
    SharedModule,
  ],
  declarations: [AddressInfoPage],
})
export class AddressInfoPageModule {}
