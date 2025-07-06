import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],  // <-- Important for ngModel and *ngIf
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  handleLogin() {
    if (this.email === 'admin@example.com' && this.password === '123456') {
      alert('✅ Login successful!');
      this.error = '';
    } else {
      this.error = '❌ Invalid email or password';
    }
  }
}
