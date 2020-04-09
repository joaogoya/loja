import { ClientsService } from './../../../services/clients/clients-.service';
import { UtilsService } from 'src/app/services/utils/utils.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/clients';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.scss']
})

export class ClientsFormComponent implements OnInit {
  public form: FormGroup;
  public toasterInfos = {};
  public isEdit = false;
  public id = '';
  public titleMsg = 'Novo cliente';

  public client = {
    name: '',
    email: '',
    password: '',
    slug: ''
  };

  public showToaster = false;
  public toasterSuccess: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private utilsService: UtilsService,
    private clienstService: ClientsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.setFormBuilder(this.client);
    this.fillFromBase();
  }

  public setFormBuilder(client) {
    this.form = this.formBuilder.group({
      name: [
        client.name,
        [Validators.required, Validators.minLength(3), Validators.maxLength(80)]
      ],
      email: [client.email, Validators.required],
      password: [
        client.password,
        [Validators.required, Validators.minLength(6), Validators.maxLength(10)]
      ],
      slug: [client.slug, Validators.required]
    });
  }

  public fillFromBase() {
    if (this.activatedRoute.snapshot.params.id) {
      this.isEdit = true;
      this.id = this.activatedRoute.snapshot.params.id;
      this.isEdit = true;
      this.titleMsg = 'Editar produto';
      this.activatedRoute.data.subscribe((data: { client: Client }) => {
        this.setFormBuilder(data.client);
      });
    }
  }

  public applyCssFeedback(input) {
    return this.utilsService.applyCssFeedback(input, this.form);
  }

  public toasterMsg(success: boolean) {
    this.toasterSuccess = success;
    this.showToaster = true;
    setTimeout(() => {
      this.router.navigate( ['/blank']).then(() => {
        this.router.navigate(['/clients/list']);
      });
    }, 1800);
  }

  public onSubmit() {
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
