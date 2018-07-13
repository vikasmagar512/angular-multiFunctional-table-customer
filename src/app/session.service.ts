import { Injectable } from '@angular/core';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class SessionService {
  public accessToken: string;
  public name: string;

  constructor() {
    // set token if saved in local storage
    var currentUser = JSON.parse(localStorage.getItem('userData'));
    this.accessToken = currentUser && currentUser.accessToken;
    this.name = currentUser && currentUser.name;
  }

  public destroy(): void {
    // clear token remove user from local storage to log user out
    // this.token = null;
    localStorage.removeItem('userData');
    this.accessToken = null;
    this.name = null;
  }
}
