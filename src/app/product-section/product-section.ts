
import { Component, input, inject } from '@angular/core';
import { CartHandling } from '../services/cart-handling';
import { CommonModule } from '@angular/common';
import { Wishlist } from '../store/wishlist';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-product-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-section.html',
  styleUrls: ['./product-section.scss']
})
export class ProductSection {

  _product = input<any>();
  cartService = inject(CartHandling);
  wishtlistt =inject(Wishlist)

toggleCart(product: any) {
  if (product.availabilityStatus === 'Not in Stock') return;

  const inCart = this.cartService.isInCart(product.id);

  if (inCart) {
    this.cartService.removeFromCart(product.id);
  } else {
    this.cartService.addToCart(product);
  }
}


}
