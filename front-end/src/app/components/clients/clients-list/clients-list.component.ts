import { ClientsService } from './../../../services/clients/clients-.service';
import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})

export class ClientsListComponent implements OnInit {

  public infos = {
    component: 'clients',
    btnMessage: 'Novo Cliente',
    data: [],
    success: true,
    error: {}
  };

  public showToaster = false;
  public toasterInfos = {};

  constructor(
    private clientsService: ClientsService,
    private utilsService: UtilsService
    ) { }

  ngOnInit() {
    this.getAll(this.infos);
    this.deleteSubscribe();
  }

  private getAll(infos) {
    this.clientsService.getAll().subscribe(
      res => {
        infos.data = this.removeAtributes(res);
        this.utilsService.dataComunication(infos);
      },
      err => {
        this.infos.success = false;
        this.infos.error = err;
        this.utilsService.dataComunication(infos);
      }
    );
  }

  public removeAtributes(res) {
    return res.filter((item) => {
        delete item.slug;
        delete item.__v;
        return true;
    });
  }

  public toasterMsg(succes: boolean) {
    this.getAll(this.infos);
    this.toasterInfos = {
      success: succes,
      route: 'clients'
    };
    this.showToaster = true;
  }

  public deleteSubscribe() {
    this.utilsService.deleteItem.subscribe(e => {
      this.showToaster = false;
      const id = e.data[2];
      if (e.component === 'clients') {
        this.clientsService.delete(id).subscribe(
          res => {
            this.toasterMsg(true);
          },
          err => {
            this.toasterMsg(false);
          }
        );
      }
    });
  }

}
