import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: CartItem[] = [
    {
      product: { id: '1', name: 'Men T-shirt', price: 32, discountPrice: 26 },
      store: { id: '1', name: 'Lotto LTD' },
      quantity: 2,
    },

    {
      product: { id: '1', name: 'Men T-shirt', price: 32, discountPrice: 0 },
      store: { id: '1', name: 'Lotto LTD' },
      quantity: 2,
    },

    {
      product: { id: '1', name: 'Men T-shirt', price: 32, discountPrice: 26 },
      store: { id: '1', name: 'Lotto LTD' },
      quantity: 2,
    },
    {
      product: { id: '1', name: 'Men T-shirt', price: 32, discountPrice: 26 },
      store: { id: '1', name: 'Lotto LTD' },
      quantity: 2,
    },
  ];
  constructor() {}
}
