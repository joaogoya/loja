import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../entiets/product';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly baseUrl = '/api/products';

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  public getAll() {
    return this.http.get<Product[]>(this.baseUrl);
  }
}
