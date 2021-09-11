import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-open-store',
  templateUrl: './open-store.page.html',
  styleUrls: ['./open-store.page.scss'],
})
export class OpenStorePage implements OnInit {
  @ViewChild('slider') slider: IonSlides;

  constructor() { }

  ngOnInit() {
  }

  nextSlide() {
    this.slider.slideNext();
    // this.slider.lockSwipeToNext(true).then((x )=> console.log(x))
  }

  prevSlide() {
    this.slider.slidePrev();
  }

}
