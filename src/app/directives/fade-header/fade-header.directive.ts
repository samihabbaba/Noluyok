import { Directive, HostListener, Input, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appFadeHeader]'
})
export class FadeHeaderDirective {

  @Input('appFadeHeader') navObj: any;
  toolbar: any;
  header: any;

  constructor(private domCtrl: DomController) { }


  ngOnInit() {
    this.toolbar = this.navObj.toolbar.el;
    this.header = this.navObj.header.el;
  }

  @HostListener('ionScroll', ['$event']) onContentScroll($event) {
    let scrollTop = $event.detail.scrollTop;

    if (scrollTop >= 255) {
      scrollTop = 255;
    }


    const hexDist = scrollTop.toString(16);

    this.domCtrl.write(() => {
      this.toolbar.style.setProperty('--background', `#ffffff${hexDist}`);

      if (scrollTop === 255) {
        this.header.classList.remove('ion-no-border')
      } else {
        this.header.classList.add('ion-no-border')
      }
    })

  }

}
