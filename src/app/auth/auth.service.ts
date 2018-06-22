import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    // TODO
  }

  signinUser(email: string, password: string) {
    // TODO
    this.router.navigate(['/']);
  }

  getToken() {
    // TODO
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    // TODO
    this.token = null;
  }
}
