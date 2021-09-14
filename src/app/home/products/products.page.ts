import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput, MenuController, PickerController } from '@ionic/angular';
import { ContentAnimation } from 'src/app/animations/search-animation';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';
import { SearchBarService } from 'src/app/services/search-bar/search-bar.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  animations: [ContentAnimation()],
})
export class ProductsPage implements OnInit {
  searchFocused: boolean = false;
  products: Product[];
  @ViewChild('searchBar') searchBar: IonInput;
  sortOptions = [
    { text: 'Önerilen', value: 0, selectedIndex: 0 },
    { text: 'En Düşük Fiyat', value: 0, selectedIndex: 1 },
    { text: 'En Yüksek Fiyat', value: 0, selectedIndex: 2 },
    { text: 'Çok Satanlar', value: 0, selectedIndex: 3 },
    { text: 'En Favoriler', value: 0, selectedIndex: 4 },
    { text: 'En Yeniler', value: 0, selectedIndex: 5 },
  ];

  constructor(
    private searchService: SearchBarService,
    private menuCtrl: MenuController,
    private pickerCtrl: PickerController,
    private productService: ProductService
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.products = this.productService.products;
    }, 1500);
  }

  ionViewWillLeave() {
    this.closeSearch();
  }

  onFocus() {
    this.searchFocused = true;
  }

  closeSearch() {
    this.searchService.blurAndClear(this.searchBar);
    this.searchFocused = false;
  }

  toggleFilterMenu() {
    this.menuCtrl.toggle('filter');
  }

  async openSortPicker() {
    const picker = await this.pickerCtrl.create({
      buttons: [
        {
          text: 'Kapat',
          role: 'cancel',
        },
        {
          text: 'Seç',
          handler: (value) => {
            console.log(value.sorting);
          },
        },
      ],
      columns: [{ name: 'sorting', options: this.sortOptions }],
    });

    picker.columns[0].options.forEach((element) => {
      delete element.selected;
      delete element.duration;
      delete element.transform;
    });

    picker.present();
  }
}
