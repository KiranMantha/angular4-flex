import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() {}

  // ...
  public isAuthenticated(): boolean {

    const token = localStorage.getItem('token');

    // Check whether the token is expired and return
    // true or false
    return token ? true : false;
  }

  public setAuthToken(tokenVal:string):void {
    localStorage.setItem('token', tokenVal);
  }

  public removeAuthToken(): void {
    localStorage.removeItem('token');
  }

}