import { Component, OnInit } from '@angular/core';
import { SalesService } from './../../../services/sales/sales.service';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss']
})
export class SalesListComponent implements OnInit {
  public spinner = true;
  public success = false;

  public error = {
    name: '',
    message: ''
  };

  public infos = {
    component: 'products',
    btnMessage: 'Novo produto',
    data: []
  };

  constructor(private salesService: SalesService) {}

  ngOnInit() {
    this.getAll();
  }

  private getAll() {
    this.salesService.getAll().subscribe(
      res => {
        this.handleProducts(res);
        console.log(res);
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
