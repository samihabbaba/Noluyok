import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { ContentAnimation } from '../animations/search-animation';
import { Product } from '../models/product';
import { CategoriesService } from '../services/categories/categories.service';
import { ProductService } from '../services/product/product.service';
import { SearchBarComponent } from '../shared/search-bar/search-bar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  animations: [ContentAnimation()]
})
export class HomePage implements OnInit {
  sliderOptions = {
    slidesPerView: 'auto',
    zoom: false,
    grabCursor: true,
  };
  @ViewChild('searchBar') searchBar: SearchBarComponent;
  searchFocused: boolean = false;

  categories: any[];
  products: Product[];

  constructor(
    private categoriesService: CategoriesService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.categories = this.categoriesService.categories;
    this.products = this.productService.products;
  }

  ionViewWillLeave() {
    this.searchFocused = false;
    this.searchBar.closeSearch();
  }
}
