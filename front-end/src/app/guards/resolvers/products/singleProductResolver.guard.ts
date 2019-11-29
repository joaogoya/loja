import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable, EMPTY, empty } from 'rxjs';
import { ProductsService } from 'src/app/services/products/products.service';
import { Product } from 'src/app/entiets/product';

@Injectable()
export class SingleProductResolver implements Resolve<Product> {

  constructor(
    private productsService: ProductsService,
    private router: Router
    ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product> | Promise<Product> | Product {
    console.log('Resolving the product.');
    return this.productsService.getById(route.params.id).pipe(
      map(result => {
        return result;
       }),
      catchError((err, caught) => {
        console.log(err);
        this.router.navigate(['error']);
        return empty();
      })
    );
  }
}
