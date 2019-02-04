import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from "../../node_modules/@angular/router";
import { Observable } from "../../node_modules/rxjs";
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}
  
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> {
    return this.authService.isAuthentificated()
      .then(
        (authentificated: boolean) => {
          if (authentificated) {
            return true;
          } else {
            this.router.navigate(['/']);
            return false;
          }
        }
      );
  }

  canActivateChild(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> {
    return this.canActivate(route, state);
  }
}