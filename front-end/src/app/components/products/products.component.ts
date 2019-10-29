import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

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
        this.infos.data = res;
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
}
