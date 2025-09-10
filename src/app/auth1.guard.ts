// // auth1.guard.ts
// import { inject } from '@angular/core';
// import { CanActivateFn } from '@angular/router';
// import { Auth1Service } from './auth1.service';
// import { Router } from '@angular/router';

import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Auth1Service } from "./auth1.service";

// export const auth1Guard: CanActivateFn = (route, state) => {
//   const authService = inject(Auth1Service);
//   const router = inject(Router);

//   if (authService.isLoggedIn()) {
//     return true;
//   } else {
//     router.navigate(['/customerLogin']);
//     return false;
//   }
// };


@Injectable({ providedIn: 'root' })
export class auth1Guard implements CanActivate {
  constructor(private auth: Auth1Service, private router: Router) {}

  canActivate(): boolean {
    if (this.auth.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/commonLogin']);
      return false;
    }
  }
}
