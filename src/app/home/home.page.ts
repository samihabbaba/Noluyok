import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CategoriesService } from '../services/categories/categories.service';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  brandSliderOptions = {
    slidesPerView: 'auto',
    zoom: false,
    grabCursor: true,
  };
  categories: any[];
  products: Product[];
  constructor(
    private categoriesService: CategoriesService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.categories = this.categoriesService.categories;
    this.products = this.productService.products;
  }
}
