import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

// Service for authentication
export class AuthService {
  isLoggedIn(): boolean {
    return !!localStorage.getItem('userEmail');
  }

  getUserRole(): string | null {
    return localStorage.getItem('userRole');
  }

  logout(): void {
    localStorage.clear();
  }
}
