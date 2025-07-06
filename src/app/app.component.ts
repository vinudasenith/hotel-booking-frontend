import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hotel-booking-frontend';
  isLoginPageOrRegisterPage: boolean = false;
  isHomePage: boolean = false;
  isAdminPage: boolean = false;
  isAdminRoomsPage: boolean = false;
  isAdminUsersPage: boolean = false;
  isAdminBookingsPage: boolean = false;
  isGalleryPage: boolean = false;
  isSpaPage: boolean = false;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const path = event.urlAfterRedirects;
      this.isLoginPageOrRegisterPage = path === '/login' || path === '/register';
      this.isHomePage = path === '/home';
      this.isAdminPage = path === '/admin';
      this.isAdminRoomsPage = path === '/admin/rooms';
      this.isAdminUsersPage = path === '/admin/users';
      this.isAdminBookingsPage = path === '/admin/bookings';
      this.isGalleryPage = path === '/gallery';
      this.isSpaPage = path === '/spa';
    });
  }
}
