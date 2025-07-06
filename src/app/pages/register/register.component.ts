import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

  handleRegister() {
    if (this.firstName && this.lastName && this.mobileNumber && this.email && this.password) {
      alert(`✅ Registered successfully as ${this.firstName} ${this.lastName}`);
    } else {
      this.error = '❌ All fields are required';
    }
  }
}
