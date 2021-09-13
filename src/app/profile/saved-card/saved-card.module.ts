import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavedCardPageRoutingModule } from './saved-card-routing.module';

import { SavedCardPage } from './saved-card.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavedCardPageRoutingModule,
    SharedModule
  ],
  declarations: [SavedCardPage]
})
export class SavedCardPageModule {}
