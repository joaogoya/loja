import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable, EMPTY, empty } from 'rxjs';
import { Client } from 'src/app/models/clients';
import { ClientsService } from 'src/app/services/clients/clients-.service';

@Injectable()

export class SingleClientResolver implements Resolve<Client> {

  constructor(
    private clientsService: ClientsService,
    private router: Router
    ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Client> | Promise<Client> | Client {
    console.log('Resolving the client.');
    return this.clientsService.getById(route.params.id).pipe(
      map(result => {
        return result;
       }),
      catchError((err, caught) => {
        this.router.navigate(['error']);
        return empty();
      })
    );
  }
}
