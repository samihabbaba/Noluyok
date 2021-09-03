import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonInput, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  searchFocused: boolean = false;
  searchIcon: string = 'search-outline';
  @ViewChild('searchBar') searchBar: IonInput;

  constructor() { }

  ngOnInit() {
  }

  onFocus() {
    this.searchFocused = true;
    this.searchIcon = 'arrow-back-outline';
  }

  closeSearch() {
    this.searchBar.getInputElement().then((input) => {
      input.blur();
      this.searchFocused = false;
      this.searchIcon = 'search-outline';
    });
  }

}
