import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Injectable } from "@angular/core";
import { ProductsFormComponent } from "../components/products/products-form/products-form.component";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class FormDeactivateGuard
  implements CanDeactivate<ProductsFormComponent> {
  constructor() {}

  canDeactivate(
    component: ProductsFormComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log("deactivate");
    return component.deactivateConfirmation();
  }
}
