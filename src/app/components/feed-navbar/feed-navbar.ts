import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed-navbar',
  standalone: true,
  imports: [],
  templateUrl: './feed-navbar.html',
  styleUrls: ['./feed-navbar.scss'],
})

export class FeedNavbarComponent {

  constructor(private router: Router) {}

  goToFeed() {
    this.router.navigate(['/feed']);
  }

  goToExplore() {
    this.router.navigate(['/explore']);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }
}