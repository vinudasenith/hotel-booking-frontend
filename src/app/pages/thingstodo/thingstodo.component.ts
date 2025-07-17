import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-thingstodo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './thingstodo.component.html',
  styleUrl: './thingstodo.component.css'
})
export class ThingstodoComponent {

}
