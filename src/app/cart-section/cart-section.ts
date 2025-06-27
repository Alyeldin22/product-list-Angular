import { Component, computed, inject } from '@angular/core';
import { CartHandling } from '../services/cart-handling';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-section',
  imports: [RouterModule, CommonModule],
  templateUrl: './cart-section.html',
  styleUrl: './cart-section.scss'
})
export class CartSection {
  cartList = inject(CartHandling);

  cartItems = computed(() => this.cartList.cart());

  increaseQuantity(product: any) {
    this.cartList.addToCart(product);
  }

  decreaseQuantity(productId: number) {
    this.cartList.removeFromCart(productId);
  }

  removeItem(productId: number) {
    const updatedCart = this.cartItems().filter(item => item.id !== productId);
    this.cartList.cart.set(updatedCart);
  }

  clearCart() {
    this.cartList.clearCart();
  }
  getDiscountedPrice(item: any) {
    const discount = item.discountPercentage || 0;
    return item.price - (item.price * discount / 100);
  }

  getSubtotal(item: any) {
    return this.getDiscountedPrice(item) * item.quantity;
  }

  getCartTotal() {
    return this.cartItems().reduce((total, item) => {
      return total + this.getSubtotal(item);
    }, 0);
  }
}
