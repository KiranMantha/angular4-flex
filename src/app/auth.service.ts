import { Injectable } from '@angular/core';
import { User } from './Models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User;
  constructor() { }

  public isAuthenticated(): boolean {

    const token = localStorage.getItem('token');

    // Check whether the token is expired and return
    // true or false
    return token ? true : false;
  }

  public setAuthToken(tokenVal: string, user: User): void {
    localStorage.setItem('token', tokenVal);
    this.user = user;
  }

  public removeAuthToken(): void {
    localStorage.removeItem('token');
    this.user = null;
  }

  public getCurrentUser(): User {
    return this.user;
  }
}