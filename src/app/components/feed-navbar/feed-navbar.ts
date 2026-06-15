import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-feed-navbar',
  standalone: false,
  templateUrl: './feed-navbar.html',
  styleUrl: './feed-navbar.scss',
})

export class FeedNavbarComponent {

  constructor(private router: Router) {}

  goToFeed() {
    this.router.navigate(['/feed']);
  }

  goToExplore() {
    this.router.navigate(['/explore']); // si no existe, lo creas luego
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }
}
