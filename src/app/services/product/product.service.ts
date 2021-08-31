import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: any[] = [{
    id: '1',title: 'Adidas SweatShirt', price: 200, discountPrice: 125
  }]

  constructor() { }
}
