import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  categories = [
    {
      id: 1,
      name: 'Kadın',
      image: '../../../assets/categories/category-1.png',
    },
    {
      id: 2,
      name: 'Erkek',
      image: '../../../assets/categories/category-2.png',
    },
    { id: 3, name: 'Çocuk', image: '../../../assets/categories/category-3.png' },

  ];

  constructor() {}
}
