import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  roomId: number = 0;
  price: number = 0;
  checkInDate: string = '';
  checkOutDate: string = '';
  guestName: string = '';
  guestEmail: string = '';
  guestPhone: string = '';
  notes: string = '';
  totalAmount: number = 0;
  numberOfNights: number = 0;

  constructor(private router: Router, private http: HttpClient, private location: Location) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras.state as { room: any };
    if (state?.room) {
      this.roomId = state.room.roomId;
      this.price = state.room.price;
    }
  }

  ngOnInit(): void { }

  calculateTotal() {
    if (this.checkInDate && this.checkOutDate) {
      const checkIn = new Date(this.checkInDate);
      const checkOut = new Date(this.checkOutDate);
      const diff = (checkOut.getTime() - checkIn.getTime()) / (1000 * 3600 * 24);
      this.numberOfNights = diff > 0 ? diff : 0;
      this.totalAmount = this.numberOfNights * this.price;
    }
  }


  submitBooking() {

    const loggedUser = localStorage.getItem('userRole');
    if (!loggedUser) {
      alert('❌ You must be logged in to book a room.');
      this.router.navigate(['/login']);
      return;
    }


    if (
      !this.checkInDate ||
      !this.checkOutDate ||
      !this.guestName.trim() ||
      !this.guestEmail.trim() ||
      !this.guestPhone.trim()
    ) {
      alert('❌ Please fill in all required fields.');
      return;
    }
    const booking = {
      roomId: this.roomId,
      checkInDate: this.checkInDate,
      checkOutDate: this.checkOutDate,
      guestName: this.guestName,
      guestEmail: this.guestEmail,
      guestPhone: this.guestPhone,
      notes: this.notes,
      status: 'pending'
    };

    this.http.post(`${environment.apiUrl}/bookings`, booking).subscribe({
      next: () => {
        alert('✅ Booking Successful!');
        this.router.navigate(['/']);
      },
      error: () => {
        alert('❌ Booking Failed.');
      }
    });
  }
}
