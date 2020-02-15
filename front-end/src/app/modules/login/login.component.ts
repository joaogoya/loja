import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public errorMsg = false;

  constructor(
      private loginService: LoginService,
      private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.loginService.destroySession();
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
      this.loginService.login(this.form.value);
    } else {
      this.errorMsg = true;
    }
  }
}
