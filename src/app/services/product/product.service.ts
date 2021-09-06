import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: any[] = [
    {
      id: '1',
      title: 'Adidas SweatShirt',
      price: 200,
      discountPrice: 125,
      shippingPrice: 0,
      store: { id: '1', storeName: 'Who TF Ltd.' },
      category: { id: '1', categoryName: 'Erkek' },
      images: ['../../../assets/images/cart3.png'],
      isFavorite: false,
    },

    {
      id: '1',
      title: 'Adidas SweatShirt',
      price: 200,
      discountPrice: 0,
      shippingPrice: 10,
      store: { id: '1', storeName: 'Who TF Ltd.' },
      category: { id: '1', categoryName: 'Erkek' },
      images: ['../../../assets/images/cart3.png'],
      isFavorite: true,
    },
    {
      id: '1',
      title: 'Adidas SweatShirt',
      price: 200,
      discountPrice: 125,
      shippingPrice: 0,
      store: { id: '1', storeName: 'Who TF Ltd.' },
      category: { id: '1', categoryName: 'Erkek' },
      images: ['../../../assets/images/adidas.png'],
      isFavorite: false,
    },

    {
      id: '1',
      title: 'Adidas SweatShirt',
      price: 200,
      discountPrice: 0,
      shippingPrice: 10,
      store: { id: '1', storeName: 'Who TF Ltd.' },
      category: { id: '1', categoryName: 'Erkek' },
      images: ['../../../assets/like.png'],
      isFavorite: true,
    },
  ];

  constructor() {}
}
