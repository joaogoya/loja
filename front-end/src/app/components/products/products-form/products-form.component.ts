import { Product } from './../../../entiets/product';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products/products.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {
  public product: Product = {
    id: '',
    title: '',
    price: 0,
    active: false,
    description: '',
    slug: '',
    tags: [],
    __v: 0
  };

  public form: FormGroup;

  constructor(
    private productService: ProductsService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.setFormBuilder(this.product);
  }

  public setFormBuilder(product: Product) {
    this.form = this.formBuilder.group({
      title: [product.title, Validators.required],
      active: [product.active, Validators.required],
      price: [product.price, Validators.required],
      description: [product.description, Validators.required],
      slug: [product.slug, Validators.required],
      tags: [product.tags, Validators.required]
    });
  }

  /* css class validations */
  private testsValidField(campo) {
    return this.form.get(campo).valid && this.form.get(campo).touched;
  }
  public applyCssFeedback(campo) {
    if (this.form.get(campo).touched) {
      return {
        'is-invalid': !this.testsValidField(campo),
        'is-valid': this.testsValidField(campo),
        'has-feedback': this.form.get(campo).touched
      };
    }
  }
  private testFormValid(formGrup: FormGroup) {
    Object.keys(formGrup.controls).forEach(campo => {
      const controle = formGrup.get(campo);
      controle.markAsTouched();
      if (controle instanceof FormGroup) {
        this.testFormValid(controle);
      }
    });
  }

  public onSubmit() {
    if (this.form.invalid) {
      this.testFormValid(this.form);
    } else {
      const tags = this.form.get('tags').value.split(';');
      this.form.controls.tags.patchValue(tags);

      this.productService.save(this.form.value).subscribe(
        res => {
          this.toastr.success('Suas informações foram salvas com sucesso.', 'Sucesso.', {
            progressBar: true,
            timeOut: 1800,
            positionClass: 'bottom-full-width'
          });
          this.router.navigate(['/products']);
        },
        err => {
          this.toastr.error( 'Houve um erro. Contate o administrador do sistema', 'Erro.', {
            progressBar: true,
            timeOut: 2200,
          });
        }
      );
    }
  }
}
