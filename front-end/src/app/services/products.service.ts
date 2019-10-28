import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Product } from '../entiets/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly baseUrl = '/api/products';

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get<Product[]>(this.baseUrl);
  }
}
