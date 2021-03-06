import { FormGroup } from '@angular/forms';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  public emitData = new EventEmitter();
  public closeModal = new EventEmitter();
  public deleteItem = new EventEmitter();
  public loggerdUser = new EventEmitter<boolean>();
  public reload = new EventEmitter();
  public userAuth = false;

  constructor(private router: Router) {}

  public infos = {
    component: 'products',
    btnMessage: 'Novo produto',
    data: [],
    success: true,
    error: {}
  };

  public cloeErrorModal() {
    this.closeModal.emit(false);
  }

  public delete(obj: any) {
    this.deleteItem.emit(obj);
  }
  
  /* forms error msgs functions */
  public applyCssFeedback(input, form) {
    if (form.get(input).touched) {
      return {
        'is-invalid': !this.testsValidField(input, form),
        'is-valid': this.testsValidField(input, form),
        'has-feedback': form.get(input).touched
      };
    }
  }

  public testsValidField(input, form) {
    return form.get(input).valid && form.get(input).touched;
  }

  public notFound() {
    this.loggerdUser.emit(true);
  }

  public testFormValid(formGrup: FormGroup) {
    Object.keys(formGrup.controls).forEach(campo => {
      const controle = formGrup.get(campo);
      controle.markAsTouched();
      if (controle instanceof FormGroup) {
        this.testFormValid(controle);
      }
    });
  }

}
