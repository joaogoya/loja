import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-sample-modal',
  templateUrl: './deactivate-modal.component.html',
  styleUrls: ['./deactivate-modal.component.scss']
})
export class DeactivateModalComponent {

  subject: Subject<boolean>;

  constructor(public bsModalRef: BsModalRef) { }

  action(value: boolean) {
    this.bsModalRef.hide();
    this.subject.next(value);
    this.subject.complete();
  }

}
