import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductDetailsPageRoutingModule } from './product-details-routing.module';

import { ProductDetailsPage } from './product-details.page';
import { HideHeaderDirective } from '../directives/hide-header/hide-header.directive';
import { FadeHeaderDirective } from '../directives/fade-header/fade-header.directive';
import { SeperatorComponent } from './seperator/seperator.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductDetailsPageRoutingModule,
    SharedModule
  ],
  declarations: [ProductDetailsPage, HideHeaderDirective, FadeHeaderDirective, SeperatorComponent]
})
export class ProductDetailsPageModule { }
