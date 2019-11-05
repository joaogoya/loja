import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loggerdUser = new EventEmitter<boolean>();
  public userAuth = false;

  constructor( private router: Router ) { }

  public login( user: any ) {
    if (user.email === 'user' && user.password === '1234') {
      this.loggerdUser.emit(true);
      this.userAuth = true;
      this.router.navigate(['/products']);
    }
  }

  public guardLogin(): boolean {
      // return this.userAuth;
      return true;
  }

}
