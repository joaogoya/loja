import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products/products.service';
import { BroadcastService } from 'src/app/services/broadcast/broadcast.service';

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

  constructor(
    private productsService: ProductsService,
    private broadcast: BroadcastService
    ) {}

  ngOnInit() {
    this.getAll(this.infos);
  }

  private getAll(infos) {
    this.productsService.getAll().subscribe(
      res => {
        infos.data = this.removeAtributes(res);
        this.broadcast.dataComunication(infos);
      },
      err => {
        this.infos.success = false;
        this.infos.error = err;
        this.broadcast.dataComunication(infos);
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
