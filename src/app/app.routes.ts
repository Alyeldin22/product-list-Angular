import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: "", loadComponent: () => import('./components/wrapper-section/wrapper-section').then(c => c.WrapperSection) },
  { path: "products", loadComponent: () => import('./components/wrapper-section/wrapper-section').then(c => c.WrapperSection) },
  { path: "products/:id", loadComponent: () => import('./components/product-detail-section/product-detail-section').then(c => c.ProductDetailsComponent) },
  { path: "cart", loadComponent: () => import('./components/cart-section/cart-section').then(c => c.CartSection) },
  { path: "login", loadComponent: () => import('./components/login/login').then(c => c.Login) },
  { path: "register", loadComponent: () => import('./components/register/register').then(c => c.RegisterComponent) },
  { path: "**", loadComponent: () => import('./components/notfound-section/notfound-section').then(c => c.NotfoundSection) },
];
