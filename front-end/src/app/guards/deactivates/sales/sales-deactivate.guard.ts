import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { BsModalService } from 'ngx-bootstrap';
import { DeactivateModalComponent } from '../../../components/deactivate-modal/deactivate-modal.component';
import { SalesFormComponent } from './../../../modules/sales/sales-form/sales-form.component';

@Injectable()
export class SaleCanDeactivate implements CanDeactivate<SalesFormComponent> {

    constructor(private modalService: BsModalService) {}

    canDeactivate(
      component: SalesFormComponent,
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
