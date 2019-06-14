import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  loginEvent = new EventEmitter<boolean>();

  constructor() {}

  isAuthhenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });
    return promise;
  }

  login() {
    this.loggedIn = true;
    this.loginEvent.emit(true);
  }

  logout() {
    this.loggedIn = false;
    this.loginEvent.emit(false);
  }
}
