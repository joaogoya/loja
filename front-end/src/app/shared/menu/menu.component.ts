import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

  constructor( private loginService: LoginService ) { }

  public showMenu = false;

  ngOnInit() {
    this.loginService.loggerdUser.subscribe( e => {
      this.showMenu = true;
    });
  }

  ngOnDestroy() {
    this.loginService.loggerdUser.unsubscribe();
  }
}
