import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenStorePage } from './open-store.page';

const routes: Routes = [
  {
    path: '',
    component: OpenStorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenStorePageRoutingModule {}
