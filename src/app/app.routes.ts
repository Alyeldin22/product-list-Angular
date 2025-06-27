import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: "cart", loadComponent: () => import('../app/cart-section/cart-section').then(c => c.CartSection) },
  { path: "", loadComponent: () => import('../app/wrapper-section/wrapper-section').then(c => c.WrapperSection) },
  { path: "login", loadComponent: () => import('../app/login/login').then(c => c.Login) },
  { path: "register", loadComponent: () => import('../app/register/register').then(c => c.RegisterComponent) },
  { path: "products/:id", loadComponent: () => import('../app/product-detail-section/product-detail-section').then(c => c.ProductDetailsComponent) },
  { path: "wishlist", loadComponent: () => import('../app/wishlist-section/wishlist-section').then(c => c.WishlistSection) },
  { path: "**", loadComponent: () => import('../app/notfound-section/notfound-section').then(c => c.NotfoundSection) },
];
