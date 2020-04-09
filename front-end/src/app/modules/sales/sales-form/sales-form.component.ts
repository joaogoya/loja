import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients/clients-.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { SalesService } from 'src/app/services/sales/sales.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Sale } from 'src/app/models/sale';

@Component({
  selector: 'app-sales-form',
  templateUrl: './sales-form.component.html',
  styleUrls: ['./sales-form.component.scss']
})
export class SalesFormComponent implements OnInit {
  public allClients = [];
  public allProducts = [];
  public addedProducts = [];
  public form: FormGroup;

  public addProductMsg = false;

  public showToaster = false;
  public toasterSuccess: boolean;

  public id;
  public isEdit = false;
  public titleMsg = 'Nova Venda';

  public randomSale = {
    customer: ''
  };

  constructor(
    private clientsService: ClientsService,
    private productsService: ProductsService,
    private formBuilder: FormBuilder,
    private utilsService: UtilsService,
    private salesService: SalesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.setFormBuilder(this.randomSale);
    this.getAllClients();
    this.getAllProducts();
  }

  public setFormBuilder(sale) {
    this.form = this.formBuilder.group({
      customer: [sale.customer, Validators.required]
    });
  }

  public fillFromBase() {
    if (this.activatedRoute.snapshot.params.id) {
      this.id = this.activatedRoute.snapshot.params.id;
      this.isEdit = true;
      this.titleMsg = 'Editar produto';

      this.activatedRoute.data.subscribe((data: { sale: Sale }) => {
        this.addProductMsg = false;
        data.sale.items.forEach(p => {
          this.allProducts.forEach(e => {
            if (e._id === p.product) {
              const product = {
                active: e.active,
                description: e.description,
                price: p.price,
                slug: e.slug,
                tags: e.tags,
                title: e.title,
                _id: p._id,
                qtd: p.quantity
              };
              this.addedProducts.push(product);
            }
          });
        });
        this.setFormBuilder(data.sale);
      });
    }
  }

  public getAllClients() {
    this.clientsService
      .getAll()
      .subscribe(clients => (this.allClients = clients));
  }

  public getAllProducts() {
    this.productsService.getAll().subscribe(products => {
      products.forEach(p => {
        const product = {
          active: p.active,
          description: p.description,
          price: p.price,
          slug: p.slug,
          tags: p.tags,
          title: p.title,
          _id: p._id,
          qtd: '1'
        };
        this.allProducts.push(product);
      });
      this.fillFromBase();
    });
  }

  public applyCssFeedback(input) {
    return this.utilsService.applyCssFeedback(input, this.form);
  }

  public addProduct(product) {
    this.addedProducts.push(product);
    this.allProducts = this.allProducts.filter(obj => {
      return obj._id !== product._id;
    });
  }

  public removeProduct(product) {
    this.allProducts.push(product);
    this.addedProducts = this.addedProducts.filter(obj => {
      return obj._id !== product._id;
    });
  }

  public onQtdChange(event: any, product) {
    this.addProductMsg = false;
    product.qtd = event.target.value;
    this.allProducts = this.allProducts.filter(obj => {
      return obj._id !== product._id;
    });
    this.allProducts.push(product);
    this.addProduct(product);
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

  public onSubmit() {
    const isEmpty = this.addedProducts === undefined || this.addedProducts.length === 0;
    if (this.form.invalid || isEmpty) {
      this.utilsService.testFormValid(this.form);
      if (isEmpty) {
        this.addProductMsg = true;
      }
    } else {
      const payloadItems = [];
      this.addedProducts.forEach(p => {
        const item = {
          quantity: p.qtd,
          price: p.price,
          product: p._id
        };
        payloadItems.push(item);
      });
      const payload = {
        customer: this.form.get('customer').value,
        items: payloadItems
      };

      if (this.isEdit) {
        this.salesService.update(this.id, payload).subscribe(
          res => {
            this.toasterMsg(true);
          },
          err => {
            this.toasterMsg(false);
          }
        );
      } else {
        this.salesService.save(payload).subscribe(
          res => {
            this.toasterMsg(true);
          },
          err => {
            this.toasterMsg(false);
          }
        );
      }
    }
  }
}
