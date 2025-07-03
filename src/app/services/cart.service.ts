import { Injectable, signal } from '@angular/core';
import { Product } from './product.service';

export interface CartItem extends Product {
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cart = signal<CartItem[]>([]);

  get cart() {
    return this._cart;
  }

  addToCart(product: Product, quantity: number = 1) {
    const cart = this._cart();
    const existingIndex = cart.findIndex(item => item.id === product.id);

    if (existingIndex > -1) {
      const updatedItem = {
        ...cart[existingIndex],
        quantity: cart[existingIndex].quantity + quantity
      };
      const updatedCart = [...cart];
      updatedCart[existingIndex] = updatedItem;
      this._cart.set(updatedCart);
    } else {
      this._cart.set([...cart, { ...product, quantity }]);
    }
  }

  removeFromCart(productId: number) {
    const cart = this._cart();
    this._cart.set(cart.filter(item => item.id !== productId));
  }

  updateQuantity(productId: number, quantity: number) {
    const cart = this._cart();
    const existingIndex = cart.findIndex(item => item.id === productId);
    
    if (existingIndex > -1) {
      if (quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        const updatedItem = { ...cart[existingIndex], quantity };
        const updatedCart = [...cart];
        updatedCart[existingIndex] = updatedItem;
        this._cart.set(updatedCart);
      }
    }
  }

  clearCart() {
    this._cart.set([]);
  }

  getCartTotal(): number {
    return this._cart().reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  }

  isInCart(productId: number): boolean {
    return this._cart().some(item => item.id === productId);
  }
} 