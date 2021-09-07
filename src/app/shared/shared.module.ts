import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardSkeletonComponent } from './skeletons/product-card-skeleton/product-card-skeleton.component';
import { BrandsSkeletonComponent } from './skeletons/brands-skeleton/brands-skeleton.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ProductCardSkeletonComponent, BrandsSkeletonComponent],
  imports: [CommonModule, IonicModule],
  exports: [ProductCardSkeletonComponent, BrandsSkeletonComponent],
})
export class SharedModule { }
