import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable, EMPTY, empty } from 'rxjs';
import { Sale } from 'src/app/models/sale';
import { SalesService } from 'src/app/services/sales/sales.service';

@Injectable()

export class SingleSaleResolver implements Resolve<Sale> {

  constructor(
    private salesService: SalesService,
    private router: Router
    ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Sale> | Promise<Sale> | Sale {
    console.log('Resolving the sale.');
    return this.salesService.getById(route.params.id).pipe(
      map(result => {
        return result;
       }),
      catchError((err, caught) => {
        this.router.navigate(['errror']);
        return empty();
      })
    );
  }
}
