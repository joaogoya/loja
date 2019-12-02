import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  public showMenu = false;

  ngOnInit() {
    this.showMenu = this.loginService.checkSession();
    this.loginService.loggerdUser.subscribe( e => {
      this.showMenu = e;
    });
  }

  public btnLogout(){
    this.loginService.destroySession();
    this.router.navigate(['']);
  }

  ngOnDestroy() {
    this.loginService.loggerdUser.unsubscribe();
  }
}
