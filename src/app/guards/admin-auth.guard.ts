import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  UrlTree
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean | UrlTree {
    const role = localStorage.getItem('userRole');
    if (role === 'admin') {
      return true;
    } else {
      alert('⛔ Access denied: Admins only');
      return this.router.parseUrl('/home');
    }
  }
}
