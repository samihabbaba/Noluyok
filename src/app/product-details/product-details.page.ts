import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { Product } from '../models/product';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  sliderOptions = {
    slidesPerView: 'auto',
    zoom: false,
    grabCursor: true,
  };
  products: Product[];
  selectedSize: number;
  selectedColor: number;
  activeVariation: string = 'size';


  product: Product = {
    id: '1', title: 'Adidas Blue Sweatshirt Originals', category: { id: '1', categoryNamee: 'Male' }, store: { id: '1', storeName: 'Adidas Sportland Ltd.', storeImage: '../../assets/images/adidas.png', isBrand: true, storeRating: 9.4, estShipping: 3 }, price: 500, discountPrice: 360, shippingPrice: 0, isFavorite: true, images: ['../../assets/images/cart3.png', '../../assets/images/cart3.png', '../../assets/images/adidas.png'], views: 48, sizes: [{ size: 'Large', stock: 4 }, { size: 'Medium', stock: 6 }, { size: 'Small', stock: 2 }, { size: 'Large', stock: 4 }, { size: 'Medium', stock: 6 }, { size: 'Small', stock: 2 }], availableColors: ['Black', 'White', 'Blue'], description: `A wonderful serenity has taken possession of my entire soul, like
  these sweet mornings of spring which I enjoy with my whole heart. I
  am alone, and feel the charm of existence in this spot, which was
  created for the bliss of souls like mine.` , tags: ['Ücretsiz kargo', 'Mavi', 'Penye kumaş', 'Yakalı', 'Dar kesim', 'Yüksek Kalite']}

  constructor(private animationCtrl: AnimationController, private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.products;
  }



  segmentChanged(e: any) {
    this.activeVariation = e.detail.value;

    if (this.activeVariation == 'color') {
      this.animationCtrl.create()
        .addElement(document.querySelector('.sizes'))
        .duration(500)
        .iterations(1)
        .fromTo('transform', 'translateX(0px)', 'translateX(100%)')
        .fromTo('opacity', '1', '0.2')
        .play();

      this.animationCtrl.create()
        .addElement(document.querySelector('.colors'))
        .duration(500)
        .iterations(1)
        .fromTo('transform', 'translateX(-100%)', 'translateX(0)')
        .fromTo('opacity', '0.2', '1')
        .play();
    } else {
      this.animationCtrl.create()
        .addElement(document.querySelector('.sizes'))
        .duration(500)
        .iterations(1)
        .fromTo('transform', 'translateX(100%)', 'translateX(0)')
        .fromTo('opacity', '0.2', '1')
        .play();

      this.animationCtrl.create()
        .addElement(document.querySelector('.colors'))
        .duration(500)
        .iterations(1)
        .fromTo('transform', 'translateX(0px)', 'translateX(-100%)')
        .fromTo('opacity', '1', '0.2')
        .play();
    }
  }

  changeSize(size: number) {
    this.selectedSize = size;
  }

  changeColor(color: number) {
    this.selectedColor = color;
  }
}
