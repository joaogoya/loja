import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor( private loginService: LoginService ) { }

  public showMenu = false;

  ngOnInit() {
    this.showMenu = this.loginService.checkSession();
    this.loginService.loggerdUser.subscribe( e => {
      this.showMenu = e;
    });
  }

  ngOnDestroy() {
    this.loginService.loggerdUser.unsubscribe();
  }

}
