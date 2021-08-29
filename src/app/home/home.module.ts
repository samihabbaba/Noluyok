import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SearchBarComponent } from '../shared/search-bar/search-bar.component';
import { SearchBarDirective } from '../directives/search-bar/search-bar.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, SearchBarComponent,SearchBarDirective]
})
export class HomePageModule {}
