import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenStorePageRoutingModule } from './open-store-routing.module';

import { OpenStorePage } from './open-store.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenStorePageRoutingModule
  ],
  declarations: [OpenStorePage]
})
export class OpenStorePageModule {}
