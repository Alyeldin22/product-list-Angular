import { Component, OnInit } from '@angular/core';
import { ProductSection } from "../product-section/product-section";
import { FetchProudcts } from '../services/fetch-proudcts';

@Component({
  selector: 'app-wrapper-section',
  standalone: true,
  imports: [ProductSection],
  templateUrl: './wrapper-section.html',
  styleUrls: ['./wrapper-section.scss']
})
export class WrapperSection implements OnInit {
  products: any[]=[];

  constructor(private fetchProducts: FetchProudcts) { }

  ngOnInit() {
    this.fetchProducts.getProducts().subscribe({
      next: data => {
        this.products = (data as any).products
          ;
      },
      error: error => console.log("error", error)
    });
  }
}
