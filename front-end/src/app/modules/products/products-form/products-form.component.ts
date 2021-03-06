import { Product } from '../../../models/product';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products/products.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ViewChild } from '@angular/core';
import { UtilsService } from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {
  public product: Product = {
    _id: '',
    title: '',
    price: 0,
    active: true,
    description: '',
    slug: '',
    tags: [],
    __v: 0
  };

  public form: FormGroup;
  public isEdit = false;
  public id: '';
  public titleMsg = 'Novo produto';

  public showToaster = false;
  public toasterSuccess: boolean;

  constructor(
    private productService: ProductsService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private utilsService: UtilsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.setFormBuilder(this.product);
    this.fillFromBase();
  }

  /* build and set the form functions */
  public setFormBuilder(product: Product) {
    this.form = this.formBuilder.group({
      title: [
        product.title,
        [Validators.required, Validators.minLength(3), Validators.maxLength(80)]
      ],
      description: [
        product.description,
        [Validators.required, Validators.minLength(10), Validators.maxLength(200)]
      ],
      slug: [product.slug,
        [Validators.required, Validators.minLength(3), Validators.maxLength(80)]
      ],
      active: [product.active, Validators.required],
      price: [product.price, Validators.required],
      tags: [product.tags.toString(), Validators.required]
    });
  }

  public fillFromBase() {
    if (this.activatedRoute.snapshot.params.id) {
      this.id = this.activatedRoute.snapshot.params.id;
      this.isEdit = true;
      this.titleMsg = 'Editar produto';
      this.activatedRoute.data.subscribe( (data: {product: Product} ) => {
        this.setFormBuilder(data.product);
      });
    }
  }

  /* css class validations functions */
  public applyCssFeedback(input) {
    return this.utilsService.applyCssFeedback(input, this.form);
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

  public tagsAdjust() {
    const tags = this.form.get('tags').value.split(',');
    this.form.controls.tags.patchValue(tags);
  }

  public onSubmit() {
    if (this.form.invalid) {
      this.utilsService.testFormValid(this.form);
    } else {
      if (this.isEdit) {
        this.tagsAdjust();
        this.productService.update(this.id, this.form.value).subscribe(
          res => {
            this.toasterMsg(true);
          },
          err => {
            this.toasterMsg(false);
          }
        );
      } else {
        this.tagsAdjust();
        this.productService.save(this.form.value).subscribe(
          res => {
            this.toasterMsg(true);
          },
          err => {
            this.toasterMsg(false);
          }
        ); // save.sibscribe
      } // if is save or edit
    } // if form valid
  }
}
