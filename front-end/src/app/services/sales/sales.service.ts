import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sales } from 'src/app/entiets/sales';
import { SalesBase } from 'src/app/entiets/saaleBase';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  private readonly baseUrl = 'api/order';

  constructor( private http: HttpClient ) { }

  public getAll() {
    return this.http.get<Sales[]>(this.baseUrl);
  }

  public save(sale: SalesBase) {
    return this.http.post<SalesBase>(this.baseUrl, sale);
  }

  public getById(id: string) {
    return this.http.get<Sales>(this.baseUrl + '/id/' + id);
  }

  public update(id: string, sale: SalesBase) {
    return this.http.put<SalesBase>(this.baseUrl + '/' + id, sale);
  }

  public delete(id: string) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

}
