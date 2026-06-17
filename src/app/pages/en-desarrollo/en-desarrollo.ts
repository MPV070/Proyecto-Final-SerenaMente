import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-en-desarrollo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './en-desarrollo.html',
  styleUrls: ['./en-desarrollo.scss']
})
export class EnDesarrolloComponent {
  constructor(private router: Router) {}

  goBack(): void {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      window.history.back();
    } else {
      this.router.navigate(['/recomendaciones']);
    }
  }
}
