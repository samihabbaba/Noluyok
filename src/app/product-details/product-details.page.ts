import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  product: Product = { id: '1', title: 'Adidas Blue Sweatshirt Originals', category: { id: '1', categoryNamee: 'Male' }, store: { id: '1', storeName: 'Adidas Sportland Ltd.', storeImage: '../../assets/images/adidas.png', isBrand: true }, price: 500, discountPrice: 350, shippingPrice: 0, isFavorite: true, images: ['../../assets/images/cart3.png', '../../assets/images/cart3.png', '../../assets/images/adidas.png'], views: 48, sizes: [{ size: 'Large', stock: 4 }, { size: 'Medium', stock: 6 }, { size: 'Small', stock: 2 }], description: 'The discription is here' }

  constructor() { }

  ngOnInit() {


  }

}
