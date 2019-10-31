import { Client } from '../../entiets/clients';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private readonly baseUrl = '/api/customer';

  constructor(
    private http: HttpClient
    ) { }

    public getAll() {
      return this.http.get<Client[]>(this.baseUrl);
    }
}
