import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.page.html',
  styleUrls: ['./my-cart.page.scss'],
})
export class MyCartPage implements OnInit {
  cart: CartItem[];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cart = [...this.cartService.cart];
  }

  decrementQuantity(product: CartItem) {
    if (product.quantity !== 1) {
      product.quantity -= 1;
    }
  }

  incrementQuantity(product: CartItem) {
    if (product.quantity !== 20) {
      product.quantity += 1;
    }
  }
}
