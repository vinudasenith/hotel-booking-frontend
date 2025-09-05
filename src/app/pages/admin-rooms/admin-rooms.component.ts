import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-admin-rooms',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, RouterModule, ToastrModule],
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

  selectedFiles: File[] = [];
  previewUrls: string[] = [];
  isEditMode: boolean = false;

  onFileSelected(event: any): void {
    this.selectedFiles = Array.from(event.target.files);


    this.previewUrls = this.selectedFiles.map(file => URL.createObjectURL(file));
  }

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  //add new room
  async addRoom() {
    const imageUrls: string[] = [];
    const adminEmail = localStorage.getItem('userEmail');

    if (!adminEmail) {
      this.toastr.error('❌ Admin email not found', 'Error');
      return;
    }

    for (let file of this.selectedFiles) {
      const formData = new FormData();
      formData.append('file', file);

      // Upload image
      try {
        const res = await this.http.post(`${environment.apiUrl}/rooms/upload-image`, formData, {
          responseType: 'text',
          headers: {
            email: adminEmail
          }
        }).toPromise();

        if (res) {
          imageUrls.push(res);
        }
      } catch (err) {
        console.error('❌ Image upload failed', err);
      }
    }


    const roomData = {
      roomId: this.roomId,
      category: this.category,
      maxGuests: this.maxGuests,
      price: this.price,
      available: this.available,
      specialDescription: this.description,
      imageUrls: imageUrls
    };

    this.http.post(`${environment.apiUrl}/rooms`, roomData, {
      headers: {
        email: adminEmail
      }
    }).subscribe({
      next: () => {
        this.toastr.success('✅ Room added successfully!');
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
    this.http.get<any[]>(`${environment.apiUrl}/rooms/all`).subscribe({
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
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      responseType: 'text' as const
    };

    this.http.delete(`${environment.apiUrl}/rooms/${roomId}`, headers)
      .subscribe({
        next: () => {
          this.toastr.success('✅ Room deleted successfully!');
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
    this.selectedFiles = [];
    this.previewUrls = [];
  }

  ngOnInit(): void {
    this.getRooms();
  }


}


