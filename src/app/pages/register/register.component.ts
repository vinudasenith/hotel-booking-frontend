import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstName: string = '';
  lastName: string = '';
  mobileNumber: string = '';
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  handleRegister() {
    const registerData = {
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.mobileNumber,
      email: this.email,
      password: this.password,
      role: 'user',
      enabled: true
    };

    this.http.post<any>('http://localhost:8080/api/users/register', registerData).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
        this.error = '';
        alert('✅ Registration successful!');
        this.router.navigate(['/login']);
      },
      error: (error: HttpErrorResponse) => {
        console.error('Registration error:', error);

        if (error.status === 400) {
          this.error = '❌ User already exists';
        } else if (error.status === 409) {
          this.error = '❌ Conflict: Email already registered';
        } else if (error.status === 0) {
          this.error = '❌ Cannot connect to server. Is backend running?';
        } else {
          this.error = `❌ Error: ${error.error || 'Something went wrong. Please try again.'}`;
        }
      }
    });
  }
}
