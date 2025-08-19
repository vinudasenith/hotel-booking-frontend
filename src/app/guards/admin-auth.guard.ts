import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  UrlTree
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

// Admin Auth Guard
export class AdminAuthGuard implements CanActivate {

  constructor(private router: Router, private toastr: ToastrService) { }

  canActivate(): boolean | UrlTree {
    const role = localStorage.getItem('userRole');
    if (role === 'admin') {
      return true;
    } else {
      this.toastr.error(' Access denied: Admins only');
      return this.router.parseUrl('/home');
    }
  }
}
