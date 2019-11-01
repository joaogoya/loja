import { Component, OnInit } from '@angular/core';
import { SalesService } from './../../../services/sales/sales.service';
import { BroadcastService } from 'src/app/services/broadcast/broadcast.service';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss']
})
export class SalesListComponent implements OnInit {

  public infos = {
    component: 'sales',
    btnMessage: 'Nova venda',
    data: [],
    success: true,
    error: {}
  };

  constructor(
    private salesService: SalesService,
    private broadcast: BroadcastService
    ) {}

  ngOnInit() {
    this.getAll(this.infos);
  }

  private getAll(infos) {
    this.salesService.getAll().subscribe(
      res => {
        this.handleProducts(res);
        this.infos.data = this.removeAtributes(res);
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
        delete item.status;
        delete item.__v;
        delete item.number;
        delete item.created;
        return true;
    });
  }

  public handleProducts(res) {
    let productsNames = [];
    res.map(item => {
      item.customer = item.customer.name;
      productsNames = [];
      item.items.map(e => {
        productsNames.push(e.product.title);
        item.items = productsNames.join('; ');
      });
    });
  }
}
