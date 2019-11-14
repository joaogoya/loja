import { ClientsService } from './../../../services/clients/clients-.service';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.scss']
})
export class ClientsFormComponent implements OnInit {

  public form: FormGroup;
  public toasterInfos = {};
  public showToaster;
  public isEdit;

  public client = {
    name: '',
    email: '',
    password: '',
    slug: ''
  };

  constructor(
    private formBuilder: FormBuilder,
    private utilsService: UtilsService,
    private clientService: ClientsService
  ) { }

  ngOnInit() {
    this.setFormBuilder(this.client);
  }

  public setFormBuilder(client) {
    this.form = this.formBuilder.group({
      name: [client.name, Validators.required],
      email: [client.email, Validators.required],
      password: [client.password, Validators.required],
      slug: [client.slug, Validators.required]
    });
  }

  public applyCssFeedback(input) {
    return this.utilsService.applyCssFeedback(input, this.form);
  }

  public toasterMsg(succes: boolean) {
    this.toasterInfos = {
      success: succes,
      route: '/clients'
    };
    this.showToaster = true;
  }

  public onSubmit() {
    console.log(this.form.value);
    if (this.form.invalid) {
      this.utilsService.testFormValid(this.form);
    } else {
      if (this.isEdit) {
        // this.tagsAdjust();
        // this.productService.update(this.id, this.form.value).subscribe(
        //   res => {
        //     this.toasterMsg(true);
        //   },
        //   err => {
        //     this.toasterMsg(false);
        //   }
        // );
      } else {
        // this.tagsAdjust();
        this.clientService.save(this.form.value).subscribe(
          res => {
            this.toasterMsg(true);
          },
          err => {
            this.toasterMsg(false);
          }
        ); // save.sibscribe
      } // if is save or edit
    }
  }

}
