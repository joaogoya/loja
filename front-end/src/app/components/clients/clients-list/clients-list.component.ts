import { ClientsService } from './../../../services/clients/clients-.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})

export class ClientsListComponent implements OnInit {

  public spinner = true;
  public success = false;

  public error = {
    name: '',
    message: ''
  };

  public infos = {
    component: 'clients',
    btnMessage: 'Novo Cliente',
    data: []
  };

  constructor( private clientsService: ClientsService ) { }

  ngOnInit() {
    this.getAll();
  }

  private getAll() {
    this.clientsService.getAll().subscribe(
      res => {
        this.infos.data = this.removeAtributes(res);
        this.spinner = false;
        this.success = true;
      },
      err => {
        this.spinner = false;
        this.error.name = err.name;
        this.error.message = err.message;
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
