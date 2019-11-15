import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients/clients-.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-sales-form',
  templateUrl: './sales-form.component.html',
  styleUrls: ['./sales-form.component.scss']
})
export class SalesFormComponent implements OnInit {

  public allClients = [];
  public allProducts = [];
  public addedProducots = [];

  constructor(
    private clientsService: ClientsService,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.getAllClients();
    this.getAllProducts();
  }
  public getAllClients() {
    this.clientsService.getAll().subscribe(clients => this.allClients = clients);
  }

  public getAllProducts() {
    this.productsService.getAll().subscribe(products => this.allProducts = products);
  }

  public addProduct(product) {
    this.addedProducots.push(product);
    this.allProducts = this.allProducts.filter(( obj ) => {
      return obj._id !== product._id;
    });
  }

  public removeProduct(product) {
    this.allProducts.push(product);
    this.addedProducots = this.addedProducots.filter(( obj ) => {
      return obj._id !== product._id;
    });
  }
}
