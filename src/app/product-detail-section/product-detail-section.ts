import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchProudcts } from '../services/fetch-proudcts';
import { CartHandling } from '../services/cart-handling';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  availabilityStatus: 'In Stock' | 'Low in Stock' | 'Not in Stock';
  images: string[];
  thumbnail: string;
}

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail-section.html',
  styleUrls: ['./product-detail-section.scss']
})
export class ProductDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private productService = inject(FetchProudcts);
  private cartService = inject(CartHandling);

  product!: Product;
  selectedImage = '';
  quantity = 1;
  isInWishlist = false;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.productService.getProductById(id).subscribe((res: Product) => {
        this.product = res;
        this.selectedImage = res.thumbnail || res.images?.[0] || '';
        this.isInWishlist = this.checkWishlist(res.id);
      });
    }
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
    if (this.product.availabilityStatus === 'Not in Stock') return;

    const productWithQty = {
      ...this.product,
      quantity: this.quantity
    };

    this.cartService.addToCart(productWithQty);
  }

  // ✅ WISHLIST METHODS
  toggleWishlist() {
    const wishlist = this.getWishlist();

    if (this.isInWishlist) {
      const updated = wishlist.filter(item => item.id !== this.product.id);
      localStorage.setItem('wishlist', JSON.stringify(updated));
    } else {
      wishlist.push(this.product);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }

    this.isInWishlist = !this.isInWishlist;
  }

  checkWishlist(productId: number): boolean {
    const wishlist = this.getWishlist();
    return wishlist.some(item => item.id === productId);
  }

  getWishlist(): Product[] {
    return JSON.parse(localStorage.getItem('wishlist') || '[]');
  }
}
