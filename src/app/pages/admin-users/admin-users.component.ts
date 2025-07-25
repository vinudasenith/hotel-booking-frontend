import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']

})

export class AdminUsersComponent implements OnInit {

  users: any[] = [];
  loading: boolean = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get<any[]>(`${environment.apiUrl}/users/all`).subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to fetch users:', err);
        this.loading = false;
      }
    });
  }

  handleBlockUser(email: string) {
    this.http.put(`${environment.apiUrl}/users/block/${email}`, null).subscribe({
      next: () => {
        console.log(`User status toggled: ${email}`);
        this.fetchUsers();
      },
      error: (err) => {
        console.error(`Failed to toggle user status for ${email}:`, err);
      }
    });
  }

}
