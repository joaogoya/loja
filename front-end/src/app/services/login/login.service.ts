import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loggerdUser = new EventEmitter<boolean>();

  constructor(private router: Router) { }

   public login(user: any) {
    if (user.email === 'user' && user.password === '1234') {
      this.creaateSession();
      this.router.navigate(['/home']);
    }
  }

  public guardLogin(): boolean {
    return this.checkSession();
  }

  public creaateSession() {
    localStorage.setItem('loggedIn', 'true');
    this.loggerdUser.emit(this.checkSession());
  }

  public checkSession(): boolean {
    return !!localStorage.getItem('loggedIn');
  }

  public destroySession() {
    localStorage.removeItem('loggedIn');
    this.loggerdUser.emit(this.checkSession());
  }
}
