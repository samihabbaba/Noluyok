import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthPageModule),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./checkout/checkout.module').then((m) => m.CheckoutPageModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'payment-success',
    loadChildren: () =>
      import('./payment-success/payment-success.module').then(
        (m) => m.PaymentSuccessPageModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: 'product/:id',
    loadChildren: () =>
      import('./product-details/product-details.module').then(
        (m) => m.ProductDetailsPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
