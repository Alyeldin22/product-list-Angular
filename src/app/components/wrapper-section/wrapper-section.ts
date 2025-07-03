import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSection } from "../product-section/product-section";
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-wrapper-section',
  standalone: true,
  imports: [CommonModule, ProductSection],
  templateUrl: './wrapper-section.html',
  styleUrls: ['./wrapper-section.scss']
})
export class WrapperSection implements OnInit {
  products: Product[] = [];
  loading = true;
  error = false;

  private productService = inject(ProductService);

  ngOnInit() {
    console.log('WrapperSection: ngOnInit called');
    this.loadProducts();
  }

  loadProducts() {
    console.log('WrapperSection: loadProducts called');
    this.loading = true;
    this.error = false;
    
    console.log('Loading products...');
    
    this.productService.getProducts().subscribe({
      next: (response) => {
        console.log('Products loaded:', response);
        console.log('Products array length:', response.products?.length);
        this.products = response.products || [];
        this.loading = false;
        console.log('Final products array:', this.products);
      },
      error: (err) => {
        console.error('Error loading products:', err);
        this.error = true;
        this.loading = false;
      }
    });
  }

  trackByProductId(index: number, product: Product): number {
    return product.id;
  }
}
