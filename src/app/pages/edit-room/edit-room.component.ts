import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-edit-room',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, RouterModule, ToastrModule],
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})

export class EditRoomComponent implements OnInit {
  roomId: number = 0;
  category: string = '';
  maxGuests: number = 1;
  price: number = 0;
  available: boolean = true;
  description: string = '';
  previewUrls: string[] = [];
  selectedFiles: File[] = [];
  message: string = '';


  //constructor
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('roomId');
    if (id) {
      this.roomId = +id;
      this.loadRoomDetails();
    }
  }

  // load room details
  loadRoomDetails() {
    this.http.get<any>(`${environment.apiUrl}/rooms/${this.roomId}`).subscribe({
      next: (data) => {
        this.category = data.category;
        this.maxGuests = data.maxGuests;
        this.price = data.price;
        this.available = data.available;
        this.description = data.specialDescription;
        this.previewUrls = data.imageUrls || [];
      },
      error: (err) => {
        console.error('❌ Failed to load room', err);
        this.message = '❌ Failed to load room details';
      }
    });
  }

  onFileSelected(event: any): void {
    this.selectedFiles = Array.from(event.target.files);
    this.previewUrls = this.selectedFiles.map(file => URL.createObjectURL(file));
  }

  // update room
  async updateRoom() {
    const imageUrls: string[] = [];

    for (let file of this.selectedFiles) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const res = await this.http.post(`${environment.apiUrl}/rooms/upload-image`, formData, {
          responseType: 'text',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          }
        }).toPromise();
        if (res) imageUrls.push(res);
      } catch (err) {
        console.error('❌ Image upload failed', err);
      }
    }


    const updatedRoom = {
      roomId: this.roomId,
      category: this.category,
      maxGuests: this.maxGuests,
      price: this.price,
      available: this.available,
      specialDescription: this.description,
      imageUrls: imageUrls.length > 0 ? imageUrls : this.previewUrls
    };

    this.http.put(`${environment.apiUrl}/rooms/${this.roomId}`, updatedRoom, {
      headers: { email: 'admin.fortresshaven@gmail.com' }
    }).subscribe({
      next: () => {
        this.toastr.success(' Room updated successfully!');
        this.router.navigate(['/admin/rooms']);
      },
      error: (err) => {
        console.error('❌ Failed to update room', err);
        this.message = '❌ Update failed';
      }
    });
  }
}
