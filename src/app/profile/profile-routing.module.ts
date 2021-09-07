import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  {
    path: 'my-orders',
    loadChildren: () => import('./my-orders/my-orders.module').then( m => m.MyOrdersPageModule)
  },
  {
    path: 'personal-info',
    loadChildren: () => import('./personal-info/personal-info.module').then( m => m.PersonalInfoPageModule)
  },
  {
    path: 'address-info',
    loadChildren: () => import('./address-info/address-info.module').then( m => m.AddressInfoPageModule)
  },
  {
    path: 'saved-card',
    loadChildren: () => import('./saved-card/saved-card.module').then( m => m.SavedCardPageModule)
  },
  {
    path: 'email-change',
    loadChildren: () => import('./email-change/email-change.module').then( m => m.EmailChangePageModule)
  },
  {
    path: 'password-change',
    loadChildren: () => import('./password-change/password-change.module').then( m => m.PasswordChangePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
