import { LoginService } from './../services/login/login.service';
import { Injectable } from '@angular/core';
import {
  CanLoad,
  Router,
  Route,
  UrlSegment
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanLoad {
  constructor(private loginService: LoginService, private router: Router) {}

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean> | boolean {
  //   if (this.loginService.guardLogin()) {
  //     return this.loginService.guardLogin();
  //   }
  //   this.router.navigate(['']);
  //   return false;
  // }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | boolean {
      if (this.loginService.guardLogin()) {
        return this.loginService.guardLogin();
      }
      this.router.navigate(['']);
      return false;
  }
}
