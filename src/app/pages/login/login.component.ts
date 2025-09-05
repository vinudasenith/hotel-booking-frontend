import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from "../../../environments/environment";
import { ToastrService } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, ToastrModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }

  // Function to handle user login
  handleLogin() {
    const loginData = {
      email: this.email,
      password: this.password
    };

    this.http.post<any>(`${environment.apiUrl}/users/login`, loginData).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        this.error = '';
        this.toastr.success('Login successful!');

        // Store user data in local storage
        localStorage.setItem('userEmail', response.user.email);
        localStorage.setItem('userRole', response.user.role);

        // Redirect user to appropriate page
        if (response.user.role == 'admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/home']);
        }

      },

      // Handle login error
      error: (error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.error = '❌ Invalid email or password';
          this.toastr.error(this.error, 'Authentication Failed');
        } else {
          this.error = '❌ Something went wrong. Please try again.';
          this.toastr.error(this.error, 'Error');
        }
      }
    });
  }
}
