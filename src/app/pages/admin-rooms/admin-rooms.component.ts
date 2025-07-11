import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-rooms',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './admin-rooms.component.html',
  styleUrls: ['./admin-rooms.component.css']
})

export class AdminRoomsComponent implements OnInit {
  roomId: number = 0;
  category: string = '';
  maxGuests: number = 1;
  price: number = 0;
  available: boolean = true;
  description: string = '';
  message: string = '';
  rooms: any[] = [];

  constructor(private http: HttpClient) { }

  addRoom() {
    const roomData = {
      roomId: this.roomId,
      category: this.category,
      maxGuests: this.maxGuests,
      price: this.price,
      available: this.available,
      specialDescription: this.description,
    };

    const headers = {
      headers: {
        email: 'admin@example.com'
      }
    };

    this.http.post('http://localhost:8080/api/rooms', roomData, headers).subscribe({
      next: () => {
        this.message = '✅ Room added successfully!';
        this.clearForm();
        this.getRooms();
      },
      error: (err) => {
        console.error(err);
        this.message = '❌ Failed to add room';
      }
    });
  }

  getRooms() {
    this.http.get<any[]>('http://localhost:8080/api/rooms/all').subscribe({
      next: (data) => this.rooms = data,
      error: (err) => {
        console.error('❌ Error fetching rooms:', err);
      }
    });
  }

  deleteRoom(roomId: number) {
    if (!confirm('Are you sure you want to delete this room?')) {
      return;
    }

    const headers = {
      headers: {
        email: 'admin@example.com'
      },
      responseType: 'text' as const
    };

    this.http.delete(`http://localhost:8080/api/rooms/${roomId}`, headers)
      .subscribe({
        next: () => {
          this.message = '✅ Room deleted successfully!';
          this.getRooms();
        },
        error: (err) => {
          console.error('❌ Failed to delete room:', err);
          this.message = '❌ Failed to delete room';
        }
      });
  }

  clearForm() {
    this.roomId = 0;
    this.category = '';
    this.maxGuests = 1;
    this.price = 0;
    this.available = true;
    this.description = '';
  }

  ngOnInit(): void {
    this.getRooms();
  }
}


