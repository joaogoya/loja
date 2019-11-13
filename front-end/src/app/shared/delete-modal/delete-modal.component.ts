import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { UtilsService } from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {

  @ViewChild('autoShownModal', { static: false }) autoShownModal: ModalDirective;
  isModalShown = false;
  @Input('item') toDelete: string;

  constructor(private utilsServie: UtilsService) { }

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
    this.utilsServie.cloeErrorModal();
  }

  public onDelete() {
    this.utilsServie.delete(this.toDelete);
    this.hideModal();
    this.utilsServie.cloeErrorModal();
  }
}
