import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = false;

  constructor(private router: Router, private location: Location) {}

  isAuthenticated() {
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 200);
    });
  }

  login() {
    this.loggedIn = true;
    this.router.navigate(['/cart']);
  }

  logout() {
    this.loggedIn = false;
    this.router.navigate(['/login']);
  }
}