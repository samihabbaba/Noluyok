import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SearchBarComponent } from '../shared/search-bar/search-bar.component';
import { SearchBarDirective } from '../directives/search-bar/search-bar.directive';
import { ImageCarouselComponent } from '../shared/image-carousel/image-carousel.component';
import { ProductCardComponent } from '../shared/product-card/product-card.component';
import { SearchResultsComponent } from '../shared/search-results/search-results.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule,
  ],
  declarations: [
    HomePage,
    SearchBarComponent,
    SearchResultsComponent,
    SearchBarDirective,
    ImageCarouselComponent,
    ProductCardComponent,
  ],
  exports: [ProductCardComponent],
})
export class HomePageModule {}
