import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MockDataService } from '../../services/mock-data.service';

@Component({
  selector: 'app-feed-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './feed-navbar.html',
  styleUrls: ['./feed-navbar.scss'],
})
export class FeedNavbarComponent {
  constructor(
    private mockService: MockDataService,
    private router: Router
  ) {}

  onBrandClick(): void {
    this.mockService.logout();
    this.router.navigate(['/']);
  }
}
