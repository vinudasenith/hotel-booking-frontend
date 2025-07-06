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


  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const path = event.urlAfterRedirects;
      this.isLoginPageOrRegisterPage = path === '/login' || path === '/register';
      this.isHomePage = path === '/home';


    });
  }
}
