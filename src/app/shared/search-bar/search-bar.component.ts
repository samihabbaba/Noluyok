import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
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
  @Output() onSearchFocus = new EventEmitter<any>();
  @Output() onSearchBlur = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onFocus() {
    this.searchFocused = true;
    this.searchIcon = 'arrow-back-outline';
    this.onSearchFocus.emit();
  }

  // onBlur() {
  //   this.searchFocused = false;
  //   this.searchIcon = 'search-outline';
  //   this.onSearchBlur.emit();
  // }

  closeSearch() {
    this.searchBar.getInputElement().then((input) => {
      input.blur();
      this.searchFocused = false;
      this.searchIcon = 'search-outline';
      this.onSearchBlur.emit();
    });
  }

}
