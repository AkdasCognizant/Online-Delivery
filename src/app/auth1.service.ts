import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class Auth1Service {

//   constructor() { }

//   // changes for auth:
//   private isLoggedIn = false;

//   login() {
//     this.isLoggedIn = true;
//   }

//   logout() {
//     this.isLoggedIn = false;
//   }

//   isAuthenticated(): boolean {
//     return this.isLoggedIn;
//   }
// }


@Injectable({
  providedIn: 'root'
})
export class Auth1Service {
  private isLoggedIn = false;

  login(): void {
    this.isLoggedIn = true;
    // localStorage.setItem('customerToken', 'true');
  }

  logout(): void {
    this.isLoggedIn = false;
    // localStorage.removeItem('customerToken');
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
    // return !!localStorage.getItem('customerToken');
  }
}
