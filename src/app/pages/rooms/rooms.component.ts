import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})

export class RoomsComponent implements OnInit {
  rooms: any[] = [];
  loading: boolean = true;

  constructor(private http: HttpClient) { }

  // Fetch all rooms
  ngOnInit(): void {
    this.http.get<any[]>(`${environment.apiUrl}/rooms/all`).subscribe({
      next: (data) => {
        this.rooms = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('❌ Error fetching rooms:', err);
        this.loading = false;
      }
    });
  }
}

