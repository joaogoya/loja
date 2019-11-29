import { Product } from './../../../entiets/product';
import { Component, OnInit } from '@angular/core';
import { SalesService } from './../../../services/sales/sales.service';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  public toasterSuccess: boolean;

  constructor(
    private salesService: SalesService,
    private utilsService: UtilsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit() {
    this.getAll();
    this.deleteSubscribe();
  }

  private getAll() {
    this.activatedRoute.data.subscribe( (data: {sales: Product[]} ) => {
      this.infos.data = this.removeAtributes(data.sales);
      localStorage.removeItem('datasales');
      localStorage.setItem('datasales', JSON.stringify(this.infos));
    });
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

  public toasterMsg(success: boolean) {
    this.toasterSuccess = success;
    this.showToaster = true;
    setTimeout(() => {
      this.router.navigate( ['/blank']).then(() => {
        this.router.navigate(['/sales/list']);
      });
    }, 1800);
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
