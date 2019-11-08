import { Product } from './../../../entiets/product';
import { Component, OnInit } from '@angular/core';
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
  public isEdit = false;
  public id: '';
  public titleMsg = 'Novo produto';

  constructor(
    private productService: ProductsService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.setFormBuilder(this.product);
    this.fillFromBase();
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

  public fillFromBase() {
    if (this.activatedRoute.snapshot.params.id) {
      this.id = this.activatedRoute.snapshot.params.id;
      this.isEdit = true;
      this.titleMsg = 'Editar produto';
      this.productService.getById(this.id).subscribe(
        res => {
          this.setFormBuilder(res);
        },
        err => {
          this.toastr.error(
            'Houve um erro. Contate o administrador do sistema',
            'Erro.',
            {
              progressBar: true,
              timeOut: 2200
            }
          );
          this.router.navigate(['/products']);
        }
      );
    }
  }

  public deactivateConfirmation(): boolean {
    return confirm('Você realmente desja sair?');
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

  public tagsAdjust() {
    const tags = this.form.get('tags').value.split(';');
    this.form.controls.tags.patchValue(tags);
  }

  public onSubmit() {
    if (this.form.invalid) {
      this.testFormValid(this.form);
    } else {
      if (this.isEdit) {
        this.tagsAdjust();
        this.productService.update(this.id, this.form.value).subscribe(
          res => {
            this.toastr.success(
              'Suas informações foram salvas com sucesso.',
              'Sucesso.',
              {
                progressBar: true,
                timeOut: 1800
              }
            );
            this.router.navigate(['/products']);
          },
          err => {
            this.toastr.error(
              'Houve um erro. Contate o administrador do sistema',
              'Erro.',
              {
                progressBar: true,
                timeOut: 2200
              }
            );
          }
        );
      } else {
        this.tagsAdjust();
        this.productService.save(this.form.value).subscribe(
          res => {
            this.toastr.success(
              'Suas informações foram salvas com sucesso.',
              'Sucesso.',
              {
                progressBar: true,
                timeOut: 1800
              }
            );
            this.router.navigate(['/products']);
          },
          err => {
            this.toastr.error(
              'Houve um erro. Contate o administrador do sistema',
              'Erro.',
              {
                progressBar: true,
                timeOut: 2200
              }
            );
          }
        ); // save.sibscribe
      } // if is save or edit
    }// if form valid
  }
}
