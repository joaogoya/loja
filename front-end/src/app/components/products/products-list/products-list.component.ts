import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

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

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.getAll();
  }

  private getAll() {
    this.productsService.getAll().subscribe(
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
        delete item.description;
        delete item.tags;
        return true;
    });
  }
}
