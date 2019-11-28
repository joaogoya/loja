import { Product } from './../../../entiets/product';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products/products.service';
import { UtilsService } from 'src/app/services/utils/utils.service';

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
  public toasterSuccess: boolean;

  constructor(
    private productsService: ProductsService,
    private utilsService: UtilsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit() {
    this.getAll();
    this.deleteSubscribe();
  }

  private getAll() {
    this.activatedRoute.data.subscribe( (data: {products: Product[]} ) => {
        this.infos.data = this.removeAtributes(data.products);
        localStorage.removeItem('dataproducts');
        localStorage.setItem('dataproducts', JSON.stringify(this.infos));
      },
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
  public toasterMsg(success: boolean) {
    this.toasterSuccess = success;
    this.showToaster = true;
    setTimeout(() => {
      this.router.navigate( ['/blank']).then(() => {
        this.router.navigate(['/products/list']);
      });
    }, 1800);
  }

  public deleteSubscribe() {
    this.utilsService.deleteItem.subscribe(e => {
      this.showToaster = false;
      const id = e.data[0];
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
