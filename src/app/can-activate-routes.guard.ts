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
      // debugger
      if(state.url === '/sign-in'){
        this.router.navigate(['/main/home/dashboard']);
        return true;
      }
      return true;
    }else{
      this.router.navigate(['/sign-in'],{queryParams:{returnUrl:state.url}});
      return false
    } 
  }
}
