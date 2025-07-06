import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {
  startDate: string = '';
  endDate: string = '';
  selectedCategory: string = '';
  isLoading = false;

  categories = [
    { name: 'Standard' },
    { name: 'Deluxe' },
    { name: 'Suite' }
  ];

  handleBooking() {
    if (!this.startDate || !this.endDate || !this.selectedCategory) {
      alert('Please select all booking options');
      return;
    }
    this.isLoading = true;

    // Simulate booking delay (replace with real API call)
    setTimeout(() => {
      this.isLoading = false;
      alert(`Booked a ${this.selectedCategory} from ${this.startDate} to ${this.endDate}`);
    }, 2000);
  }
}