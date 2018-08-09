import { Injectable } from '@angular/core';
import {SessionService} from './session.service';

@Injectable(/*{
  providedIn: 'root'
}*/)
export class AuthService {
  public token:string;
  // public accessToken: string;
  // public name: string;
  constructor(
    private session: SessionService,
  ) {
  }

  public isSignedIn() {
    return !!this.session.accessToken;
    // return true;
  }

  public doSignOut() {
    
    this.session.destroy();
  }

  public doSignIn(accessToken: string, name: string) {
    if ((!accessToken) || (!name)) {
      return;
    }
    // store username and jwt token in local storage to keep user logged in between page refreshes
    localStorage.setItem('userData', JSON.stringify({ name, accessToken}));
    // return true to indicate successful login
    // this.session.accessToken = accessToken;
    this.session.accessToken = accessToken;
    this.session.name= name;
  }
}
