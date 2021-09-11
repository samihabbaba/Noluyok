import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BecomeSellerModalComponent } from './become-seller-modal/become-seller-modal.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }


  displayBecomeSellerModal() {
    this.modalCtrl.create({ component: BecomeSellerModalComponent }).then(modalEl => { modalEl.present() })
  }

}
