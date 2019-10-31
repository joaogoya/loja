import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sales } from 'src/app/entiets/sales';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  private readonly baseUrl = 'api/order';

  constructor( private http: HttpClient ) { }

  public getAll() {
    return this.http.get<Sales[]>(this.baseUrl);
  }
}
