import { Injectable } from '@angular/core';
import {
  CanLoad,
  Router,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { UtilsService } from '../services/utils/utils.service';
import { LoginService } from '../services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanLoad {
  constructor(
    private loginService: LoginService,
    private router: Router
    ) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | boolean {
    if (this.loginService.guardLogin()) {
      return this.loginService.guardLogin();
    }
    this.router.navigate(['']);
    return false;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.loginService.guardLogin()) {
      return this.loginService.guardLogin();
    }
    this.router.navigate(['']);
    return false;
  }
}
