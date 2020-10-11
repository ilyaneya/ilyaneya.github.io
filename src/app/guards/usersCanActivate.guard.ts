import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable()
export class UsersCanActivateGuard implements CanActivate {
  constructor(private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(localStorage.getItem('token'));
    if (localStorage.getItem('token')) {
      return true;
    } else {
      this.router.navigateByUrl('/auth');
      return false;
    }
  }
}
