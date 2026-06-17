import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent
  ]
})
export class App {
  protected readonly title = signal('Proyecto-Final-SerenaMente');
  showNavbar = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects || event.url;
        const hideNavbarRoutes = ['/feed', '/recomendaciones', '/perfil-usuario', '/perfil-profesional'];
        this.showNavbar = !hideNavbarRoutes.some(route => url.startsWith(route));
      }
    });
  }
}
