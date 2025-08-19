import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMobileMenuOpen = false;

  constructor(public authService: AuthService, private router: Router) { }

  // Function to handle logout
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  // Function to toggle the mobile menu
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // Function to close the mobile menu
  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

}
