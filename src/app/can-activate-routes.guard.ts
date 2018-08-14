import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateRoutesGuard implements CanActivate {
 /* canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }*/

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }
  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if(this.auth.isSignedIn()){
      if(state.url === '/sign-in'){
        this.router.navigate(['/main/home/dashboard']);
        return true;
      }
      return true;
    }else{
      // not logged in so redirect to login page with the return url and return false
      this.router.navigate(['sign-in'], { queryParams: { returnUrl: state.url }});
      // this.router.navigate(['/sign-in']);
      return false
    }
/*
    if(state.url === '/sign-in'){
      if(this.auth.isSignedIn()){
        this.router.navigate(['/main/home/dashboard']);
        return true;
      }else{
        this.router.navigate(['/sign-in']);
        return false
      }
    }else {
      this.router.navigate(['/sign-in']);
      return false;
    }

    if (state.url !== '/sign-in' && !this.auth.isSignedIn()) {
      this.router.navigate(['/sign-in']);
      return false;
    }else if(state.url === '/sign-in' && this.auth.isSignedIn() ){
      this.router.navigate(['/main/home/dashboard']);
      return true
    }
    return true;
*/
  }
}
