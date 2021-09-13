import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmailChangePageRoutingModule } from './email-change-routing.module';

import { EmailChangePage } from './email-change.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmailChangePageRoutingModule,
    SharedModule
  ],
  declarations: [EmailChangePage]
})
export class EmailChangePageModule {}
