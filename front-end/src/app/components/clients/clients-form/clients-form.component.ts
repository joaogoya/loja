import { ClientsService } from './../../../services/clients/clients-.service';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.scss']
})
export class ClientsFormComponent implements OnInit {

  public form: FormGroup;
  public toasterInfos = {};
  public showToaster;
  public isEdit = false;
  public formChange = false;
  public id = '';
  public titleMsg = 'Novo cliente';
  public isModalShown = false;
  public navigateRoute = '/clients';


  public client = {
    name: '',
    email: '',
    password: '',
    slug: ''
  };

  constructor(
    private formBuilder: FormBuilder,
    private utilsService: UtilsService,
    private clienstService: ClientsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.setFormBuilder(this.client);
    this.fillFromBase();
  }

  public setFormBuilder(client) {
    this.form = this.formBuilder.group({
      name: [client.name, Validators.required],
      email: [client.email, Validators.required],
      password: [client.password, Validators.required],
      slug: [client.slug, Validators.required]
    });
  }

  public fillFromBase() {
    if (this.activatedRoute.snapshot.params.id) {
      this.formChange = true;
      this.isEdit = true;
      this.id = this.activatedRoute.snapshot.params.id;
      this.isEdit = true;
      this.titleMsg = 'Editar produto';
      this.clienstService.getById(this.id).subscribe(
        res => { this.setFormBuilder(res); },
        err => { this.toasterMsg(false); }
      );
    }
  }

  public applyCssFeedback(input) {
    return this.utilsService.applyCssFeedback(input, this.form);
  }

  public onChanges(): void {
    this.form.valueChanges.subscribe(() => {
      this.formChange = true;
    });
  }

  public showModal() {
    this.isModalShown = true;
  }

  public toasterMsg(succes: boolean) {
    this.toasterInfos = {
      success: succes,
      route: this.navigateRoute
    };
    this.showToaster = true;
  }

  public onSubmit() {
    console.log(this.form.value);
    if (this.form.invalid) {
      this.utilsService.testFormValid(this.form);
    } else {
      if (this.isEdit) {
        this.clienstService.update(this.id, this.form.value).subscribe(
          res => {
            this.toasterMsg(true);
          },
          err => {
            this.toasterMsg(false);
          }
        );
      } else {
        // this.tagsAdjust();
        this.clienstService.save(this.form.value).subscribe(
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
