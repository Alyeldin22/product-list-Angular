import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductsResponse> {
    console.log('ProductService: Making API call to', this.apiUrl);
    return this.http.get<ProductsResponse>(this.apiUrl).pipe(
      tap(response => console.log('API Response:', response)),
      catchError(this.handleError)
    );
  }

  getProductById(id: number): Observable<Product> {
    console.log('ProductService: Making API call to', `${this.apiUrl}/${id}`);
    return this.http.get<Product>(`${this.apiUrl}/${id}`).pipe(
      tap(response => console.log('API Response:', response)),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API Error:', error);
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      console.error('Client error:', error.error.message);
    } else {
      // Server-side error
      console.error(`Server error: ${error.status}, ${error.message}`);
    }
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
} 