import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchProudcts {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get('https://dummyjson.com/products');
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`https://dummyjson.com/products/${id}`);
  }
}
