import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-filters-menu',
  templateUrl: './filters-menu.component.html',
  styleUrls: ['./filters-menu.component.scss'],
})
export class FiltersMenuComponent implements OnInit {
  constructor(private menuController: MenuController) {}

  ngOnInit() {}

  toggleMenu() {
    this.menuController.toggle('filter');
  }

  resetFilters() {}

  applyFilters() {
    this.toggleMenu();
  }
}
