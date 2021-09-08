import { Injectable } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class SearchBarService {
  constructor() {}

  blurAndClear(searchBar: IonInput) {
    searchBar.getInputElement().then((input) => {
      input.blur();
      searchBar.value = '';
    });
  }
}
