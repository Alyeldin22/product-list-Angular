import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { DiscountPipe } from '../../pipes/discount.pipe';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, DiscountPipe],
  templateUrl: './product-detail-section.html',
  styleUrls: ['./product-detail-section.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | null = null;
  selectedImage = '';
  quantity = 1;
  loading = true;
  error = false;

  route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  cartService = inject(CartService);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.loadProduct(id);
    }
  }

  retry() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.loadProduct(id);
    }
  }

  loadProduct(id: number) {
    this.loading = true;
    this.error = false;

    this.productService.getProductById(id).subscribe({
      next: (product) => {
        this.product = product;
        this.selectedImage = product.thumbnail || product.images?.[0] || '';
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading product:', err);
        this.error = true;
        this.loading = false;
      }
    });
  }

  selectImage(image: string) {
    this.selectedImage = image;
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart() {
    if (this.product && this.product.stock > 0) {
      this.cartService.addToCart(this.product, this.quantity);
    }
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
