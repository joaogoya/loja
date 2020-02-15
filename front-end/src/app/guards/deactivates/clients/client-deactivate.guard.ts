import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { BsModalService } from 'ngx-bootstrap';
import { ClientsFormComponent } from './../../../modules/clients/clients-form/clients-form.component';
import { DeactivateModalComponent } from '../../../components/deactivate-modal/deactivate-modal.component';

@Injectable()
export class ClientCanDeactivate implements CanDeactivate<ClientsFormComponent> {

    constructor(private modalService: BsModalService) {}

    canDeactivate(
      component: ClientsFormComponent,
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {

      if (component.showToaster) {
        return true;
      } else {
        const subject = new Subject<boolean>();

        const modal = this.modalService.show(DeactivateModalComponent, {});
        modal.content.subject = subject;

        return subject.asObservable();
      }


  }
}
