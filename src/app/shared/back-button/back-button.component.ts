import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
})
export class BackButtonComponent implements OnInit {
  @Input() margin: boolean;
  @Input() defaultUrl: string;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  goBack() {
    if (history.state.navigationId === 1) {
      this.navCtrl.navigateBack(this.defaultUrl);
    } else {
      this.navCtrl.pop();
    }
  }
}
