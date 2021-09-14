import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {
  cart: any;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cart = this.cartService.cart;
  }
}
