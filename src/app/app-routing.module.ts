import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./core/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./core/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'show-books',
    loadChildren: () =>
      import('./core/show-books/show-books.module').then(
        (m) => m.ShowBooksModule
      ),
  },
  {
    path: 'order/:id',
    loadChildren: () =>
      import('./core/order/order.module').then((m) => m.OrderModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./core/cart/cart.module').then((m) => m.CartModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      bindToComponentInputs: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
