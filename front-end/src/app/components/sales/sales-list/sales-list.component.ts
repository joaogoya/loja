import { Product } from './../../../entiets/product';
import { Component, OnInit } from '@angular/core';
import { SalesService } from './../../../services/sales/sales.service';
import { UtilsService } from 'src/app/services/utils/utils.service';

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

  public showToaster = false;
  public toasterInfos = {};

  constructor(
    private salesService: SalesService,
    private utilsService: UtilsService
    ) {}

  ngOnInit() {
    this.getAll(this.infos);
    this.deleteSubscribe();
  }

  private getAll(infos) {
    this.salesService.getAll().subscribe(
      res => {
        this.handleProducts(res);
        this.infos.data = this.removeAtributes(res);
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
        delete item.status;
        delete item.__v;
        delete item.number;
        delete item.createDate;
        return true;
    });
  }

  public handleProducts(res) {
    let productsNames = [];
    res.map(item => {
      item.customer = item.customer.name;
      productsNames = [];
      item.items.map(e => {
        if (e.product) {
          productsNames.push(e.product.title);
          item.items = productsNames.join('; ');
        } else {
          productsNames = ['sem produtos cadastrados.']
        }
      });
    });
  }

  public toasterMsg(succes: boolean) {
    this.getAll(this.infos);
    this.toasterInfos = {
      success: succes,
      route: 'sales'
    };
    this.showToaster = true;
  }


  public deleteSubscribe() {
    this.utilsService.deleteItem.subscribe(e => {
      this.showToaster = false;
      const id = e.data[0];
      if (e.component === 'sales') {
        this.salesService.delete(id).subscribe(
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
