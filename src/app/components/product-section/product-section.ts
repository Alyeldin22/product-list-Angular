
import { Component, input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { DiscountPipe } from '../../pipes/discount.pipe';

@Component({
  selector: 'app-product-section',
  standalone: true,
  imports: [CommonModule, RouterLink, DiscountPipe],
  templateUrl: './product-section.html',
  styleUrls: ['./product-section.scss']
})
export class ProductSection {
  _product = input<Product>();
  cartService = inject(CartService);

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  getStockStatus(stock: number): string {
    return stock > 0 ? 'In Stock' : 'Out of Stock';
  }

  getStockStatusClass(stock: number): string {
    return stock > 0 ? 'in-stock' : 'out-of-stock';
  }

  generateStars(rating: number): boolean[] {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating);
    }
    return stars;
  }
}
