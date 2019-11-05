import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../entiets/product';
import { ProductBase } from 'src/app/entiets/product-base';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly baseUrl = '/api/products';

  constructor( private http: HttpClient ) { }

  public getAll() {
    return this.http.get<Product[]>(this.baseUrl);
  }

  public save(product: ProductBase) {
    return this.http.post<ProductBase>(this.baseUrl, product);
  }

}
