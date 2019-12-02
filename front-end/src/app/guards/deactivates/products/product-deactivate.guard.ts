import { ProductsFormComponent } from '../../../components/products/products-form/products-form.component';
import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { BsModalService } from 'ngx-bootstrap';
import { DeactivateModalComponent } from '../../../shared/deactivate-modal/deactivate-modal.component';

@Injectable()
export class ProductCanDeactivate implements CanDeactivate<ProductsFormComponent> {

    constructor(private modalService: BsModalService) {}

    canDeactivate(
      component: ProductsFormComponent,
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {

      if (component.showToaster) {
        return true;
      } else  {
        const subject = new Subject<boolean>();

        const modal = this.modalService.show(DeactivateModalComponent, {});
        modal.content.subject = subject;

        return subject.asObservable();
      }
  }
}
