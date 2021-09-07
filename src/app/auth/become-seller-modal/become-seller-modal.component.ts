import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-become-seller-modal',
  templateUrl: './become-seller-modal.component.html',
  styleUrls: ['./become-seller-modal.component.scss'],
})
export class BecomeSellerModalComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  dismissModal() {
    this.modalCtrl.dismiss()
  }

}
