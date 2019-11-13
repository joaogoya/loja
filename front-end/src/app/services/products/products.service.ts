import { ProductBase } from './../../entiets/product-base';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../entiets/product';

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

  public getById(id: string) {
    return this.http.get<Product>(this.baseUrl + '/id/' + id);
  }

  public update(id: string, product: ProductBase) {
    return this.http.put<ProductBase>(this.baseUrl + '/' + id, product);
  }

  public delete(id: string) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

}
