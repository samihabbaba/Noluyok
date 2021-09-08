import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardSkeletonComponent } from './skeletons/product-card-skeleton/product-card-skeleton.component';
import { BrandsSkeletonComponent } from './skeletons/brands-skeleton/brands-skeleton.component';
import { IonicModule } from '@ionic/angular';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FiltersMenuComponent } from './filters-menu/filters-menu.component';

@NgModule({
  declarations: [
    ProductCardSkeletonComponent,
    BrandsSkeletonComponent,
    SearchResultsComponent,
    ImageCarouselComponent,
    ProductCardComponent,
    FiltersMenuComponent
  ],
  imports: [CommonModule, IonicModule],
  exports: [
    ProductCardSkeletonComponent,
    BrandsSkeletonComponent,
    SearchResultsComponent,
    ImageCarouselComponent,
    ProductCardComponent,
    FiltersMenuComponent
  ],
})
export class SharedModule {}
