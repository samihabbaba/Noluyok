import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories/categories.service';

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
  constructor(private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.categories = this.categoriesService.categories;
  }

}
