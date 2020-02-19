import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  /*DATA*/
  @Input() infos;
  public atributes;
  public data = [];

  /* delete item */
  public showDelteModal = false;
  public itemToDelete = {
    component: '',
    data: ''
  };

  /*PAGINATION*/
  public page = 1;
  public pageSize = 10;

  constructor(
    private utilsService: UtilsService,
    private router: Router
    ) {}

  ngOnInit() {
    this.itemToDelete.component = this.infos.component;
    this.dataHandling(this.infos.data);
    this.closeModalSubscriber();
  }

  public dataHandling(values) {
    this.data = [];
    this.atributes = Object.keys(values[0]);
    values.forEach(element => {
      this.data.push(Object.values(element));
    });
  }

  public btnNew() {
    this.router.navigate([this.infos.component + '/form']);
  }

  public btnEdit(item) {
    this.router.navigate([this.infos.component + '/form/' + item[0]]);
  }

  public btnDelete(item: any) {
    this.showDelteModal = true;
    this.itemToDelete.data = item;
  }

  public closeModalSubscriber() {
    this.utilsService.closeModal.subscribe(e => {
      this.showDelteModal = e;
    });
  }
}
