import { Component, OnInit } from '@angular/core';
import { ContentAnimation } from 'src/app/animations/search-animation';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  animations: [ContentAnimation()]
})
export class ProductsPage implements OnInit {
  searchFocused: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
