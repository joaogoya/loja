import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-deactivate-modal',
  templateUrl: './deactivate-modal.component.html',
  styleUrls: ['./deactivate-modal.component.scss']
})
export class DeactivateModalComponent implements OnInit {

  @ViewChild('autoShownModal', { static: false }) autoShownModal: ModalDirective;
  @Input('navigateRoute') navigateRoute;
  isModalShown = false;

  constructor() { }

  ngOnInit() {
    this.showModal();
  }

  public showModal(): void {
    this.isModalShown = true;
  }

  public hideModal(): void {
    this.autoShownModal.hide();
  }

  public onHidden(): void {
    this.isModalShown = false;
  }
}
