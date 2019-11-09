import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/services/utils/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public errorMsg = false;

  constructor(
      private utilsService: UtilsService,
      private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.setFormBuilder();
  }

  setFormBuilder() {
      this.form = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      });
  }

  login() {
    if (this.form.valid) {
      this.utilsService.login(this.form.value);
    } else {
      this.errorMsg = true;
    }
  }
}
