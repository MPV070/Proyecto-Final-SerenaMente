import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar';
import { FeedNavbarComponent } from './components/feed-navbar/feed-navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FeedNavbarComponent
  ]
})
export class App implements OnInit {
  protected readonly title = signal('Proyecto-Final-SerenaMente');
  isLoggedIn = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkLoginStatus();
      }
    });
  }

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  checkLoginStatus(): void {
    if (typeof localStorage !== 'undefined') {
      this.isLoggedIn = !!localStorage.getItem('mockUser');
    } else {
      this.isLoggedIn = false;
    }
  }
}
