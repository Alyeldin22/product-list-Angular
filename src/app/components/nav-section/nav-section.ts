import { Component, inject, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-nav-section',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-section.html',
  styleUrl: './nav-section.scss'
})
export class NavSection {
  cartService = inject(CartService);
  
  cartItemCount = computed(() => {
    const cart = this.cartService.cart();
    return cart.reduce((total, item) => total + item.quantity, 0);
  });
}

