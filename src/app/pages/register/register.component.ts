import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, ToastrModule],
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

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }

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

    this.http.post<any>(`${environment.apiUrl}/users/register`, registerData).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
        this.error = '';
        this.toastr.success('Registration successful!');
        this.router.navigate(['/login']);
      },
      error: (error: HttpErrorResponse) => {
        console.error('Registration error:', error);

        if (error.status === 400) {
          this.toastr.error('User alredy exists');
        } else if (error.status === 409) {
          this.toastr.warning('Conflict: Email already registered');
        } else if (error.status === 0) {
          this.toastr.error('❌ Cannot connect to server. Is backend running?', 'Server Error');
        } else {
          this.toastr.error(
            `❌ ${error.error || 'Something went wrong. Please try again.'}`,
            'Error'
          );
        }
      }
    });
  }
}
