import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss'],
})
export class ImageCarouselComponent implements OnInit {
  slideOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: {
      disableOnInteraction: false,
    },
    speed: 300,
    loop: true,
  };
  sliderImages: any[];
  @ViewChild('slider') slider: IonSlides;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.sliderImages = [];
      for (let i of [1, 2, 3]) {
        this.sliderImages.push('../../assets/images/discount-img.jpg');
      }
    }, 2000)
  }
}
