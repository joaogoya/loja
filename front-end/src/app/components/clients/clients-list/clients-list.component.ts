import { ClientsService } from './../../../services/clients/clients-.service';
import { Component, OnInit } from '@angular/core';
import { BroadcastService } from 'src/app/services/broadcast.service';

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


  constructor(
    private clientsService: ClientsService,
    private broadcast: BroadcastService
    ) { }

  ngOnInit() {
    this.getAll(this.infos);
  }

  private getAll(infos) {
    this.clientsService.getAll().subscribe(
      res => {
        infos.data = this.removeAtributes(res);
        this.broadcast.dataComunication(infos);
      },
      err => {
        this.infos.success = false;
        this.infos.error = err;
        this.broadcast.dataComunication(infos);
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
}
