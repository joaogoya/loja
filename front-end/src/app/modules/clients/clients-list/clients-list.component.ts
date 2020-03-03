import { ClientsService } from './../../../services/clients/clients-.service';
import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/entiets/clients';

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
  public toasterSuccess: boolean;
  component: { component: string; data: { _id: string; name: string; email: string; password: string; slug: string; __v: number; }[]; };

  constructor(
    private clientsService: ClientsService,
    private utilsService: UtilsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAll();
    this.deleteSubscribe();
  }

  private getAll() {
    this.activatedRoute.data.subscribe((data: { clients: Client[] }) => {
      this.infos.data = this.removeAtributes(data.clients);
    });
  }

  public removeAtributes(res) {
    return res.filter(item => {
      delete item.slug;
      delete item.__v;
      return true;
    });
  }

  public toasterMsg(success: boolean) {
    this.toasterSuccess = success;
    this.showToaster = true;
    setTimeout(() => {
      this.router.navigate(['/blank']).then(() => {
        this.router.navigate(['/clients/list']);
      });
    }, 1800);
  }

  public deleteSubscribe() {
    this.utilsService.deleteItem.subscribe(e => {
      this.showToaster = false;
      const id = e.data[0];
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
