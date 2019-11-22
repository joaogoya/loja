import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products/products.service';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { Product } from 'src/app/entiets/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  public infos = {
    component: 'products',
    btnMessage: 'Novo produto',
    data: [],
    success: true,
    error: {}
  };

  public showToaster = false;
  public toasterInfos = {};

  constructor(
    private productsService: ProductsService,
    private utilsService: UtilsService,
    private activatedRoute: ActivatedRoute
    ) {}

  ngOnInit() {
    this.getAll(this.infos);
    this.deleteSubscribe();
  }

  private getAll(infos) {
    this.productsService.getAll().subscribe(
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

  public removeAtributes(data) {
    return data.filter((item) => {
        delete item.active,
        delete item.slug;
        delete item.__v;
        delete item.description;
        delete item.tags;
        return true;
    });
  }

  /* submission form functions */
  public toasterMsg(succes: boolean) {
    this.getAll(this.infos);
    this.toasterInfos = {
      success: succes,
      route: 'products'
    };
    this.showToaster = true;
  }

  public deleteSubscribe() {
    this.utilsService.deleteItem.subscribe(e => {
      this.showToaster = false;
      const id = e.data[2];
      if (e.component === 'products') {
        this.productsService.delete(id).subscribe(
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
