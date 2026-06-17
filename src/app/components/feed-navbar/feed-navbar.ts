import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-feed-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './feed-navbar.html',
  styleUrls: ['./feed-navbar.scss'],
})

export class FeedNavbarComponent {}
