import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent implements OnInit {

  @Input() margin: boolean;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}


  goBack() {
    this.navCtrl.back()
  }
}
