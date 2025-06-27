import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartHandling {
  private _cart = signal<any[]>([]);

  get cart() {
    return this._cart;
  }

  addToCart(item: any) {
    const cart = this._cart();
    const existingIndex = cart.findIndex(p => p.id === item.id);

    if (existingIndex > -1) {
      const updatedItem = {
        ...cart[existingIndex],
        quantity: (cart[existingIndex].quantity || 1) + 1
      };
      const updatedCart = [...cart];
      updatedCart[existingIndex] = updatedItem;
      this._cart.set(updatedCart);
    } else {
      this._cart.set([...cart, { ...item, quantity: 1 }]);
    }
  }

  removeFromCart(itemId: number) {
    const cart = this._cart();
    const existingIndex = cart.findIndex(p => p.id === itemId);

    if (existingIndex > -1) {
      const currentItem = cart[existingIndex];

      if ((currentItem.quantity || 1) > 1) {
        const updatedItem = { ...currentItem, quantity: currentItem.quantity - 1 };
        const updatedCart = [...cart];
        updatedCart[existingIndex] = updatedItem;
        this._cart.set(updatedCart);
      } else {
        this._cart.set(cart.filter(p => p.id !== itemId));
      }
    }
  }

  isInCart(productId: number): boolean {
    return this._cart().some(item => item.id === productId);
  }

  clearCart() {
    this._cart.set([]);
  }
}
