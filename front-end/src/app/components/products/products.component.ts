import { Product } from './../../entiets/product';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productsService: ProductsService ) { }

  products: Product[];

  ngOnInit() {
    this.getAll();
  }

  private getAll() {
    this.productsService.getAll().subscribe(data => {
      console.table(data);
    });
  }

}
