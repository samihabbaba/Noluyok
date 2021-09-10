import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput, MenuController } from '@ionic/angular';
import { ContentAnimation } from 'src/app/animations/search-animation';
import { SearchBarService } from 'src/app/services/search-bar/search-bar.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  animations: [ContentAnimation()],
})
export class ProductsPage implements OnInit {
  searchFocused: boolean = false;
  @ViewChild('searchBar') searchBar: IonInput;
  @ViewChild('header') header: any;

  constructor(
    private searchService: SearchBarService,
    private menuController: MenuController
  ) {}

  ngOnInit() {}

  ionViewWillLeave() {
    this.closeSearch();
    // this.header.el.classList.add('ion-no-border');
  }

  onFocus() {
    this.searchFocused = true;
  }

  closeSearch() {
    this.searchService.blurAndClear(this.searchBar);
    this.searchFocused = false;
  }

  toggleFilterMenu() {
    this.menuController.toggle('filter');
  }
}
