import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService, CartItem } from '../../services/cart.service';
import { DiscountPipe } from '../../pipes/discount.pipe';

@Component({
  selector: 'app-cart-section',
  standalone: true,
  imports: [CommonModule, RouterModule, DiscountPipe],
  templateUrl: './cart-section.html',
  styleUrl: './cart-section.scss'
})
export class CartSection {
  cartService = inject(CartService);
  
  cartItems = computed(() => this.cartService.cart());
  cartTotal = computed(() => this.cartService.getCartTotal());

  updateQuantity(productId: number, quantity: number) {
    this.cartService.updateQuantity(productId, quantity);
  }

  removeItem(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  getItemTotal(item: CartItem): number {
    return item.price * item.quantity;
  }

  trackByProductId(index: number, item: CartItem): number {
    return item.id;
  }
}
