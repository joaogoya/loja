import { ClientBase } from '../../models/clientsBase';
import { Client } from '../../models/clients';
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

    public save(client: ClientBase) {
      return this.http.post<ClientBase>(this.baseUrl, client);
    }

    public getById(id: string) {
      return this.http.get<Client>(this.baseUrl + '/id/' + id);
    }

    public update(id: string, client: ClientBase) {
      return this.http.put<ClientBase>(this.baseUrl + '/' + id, client);
    }

    public delete(id: string) {
      return this.http.delete(this.baseUrl + '/' + id);
    }
}
