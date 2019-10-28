import { Product } from './../../entiets/product';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  public spinner = true;
  public page = 1;
  public pageSize = 10;

  constructor(private productsService: ProductsService ) { }

  ngOnInit() {
    this.getAll();
  }

  private getAll() {
    this.productsService.getAll().subscribe(data => {
      this.products = data;
      this.spinner = false;
    });
  }

}
