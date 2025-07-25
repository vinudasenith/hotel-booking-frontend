import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-admin-bookings',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './admin-bookings.component.html',
  styleUrls: ['./admin-bookings.component.css']
})
export class AdminBookingsComponent implements OnInit {
  booking: any[] = [];
  loading = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchBookings();
  }

  fetchBookings() {
    this.loading = true;
    this.http.get<any[]>(`${environment.apiUrl}/bookings/all`).subscribe({
      next: (data) => {
        this.booking = data;
        this.loading = false;
      },
      error: (err) => {
        console.error("❌ Failed to fetch bookings", err);
        this.loading = false;
      }
    });
  }

  changeStatus(bookingId: string, newStatus: string) {
    const selectedBooking = this.booking.find(b => b.bookingId === bookingId);

    if (!selectedBooking) {
      alert('Booking not found');
      return;
    }


    const updatedBooking = { ...selectedBooking, status: newStatus };

    this.http.put(`${environment.apiUrl}/bookings/${bookingId}`, updatedBooking)
      .subscribe({
        next: () => this.fetchBookings(),
        error: err => alert('❌ Failed to update status')
      });
  }

}
