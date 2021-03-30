import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticated(): boolean {
    const userData = sessionStorage.getItem('userData');
    // true or false
    return userData ? true : false;
  }
}
