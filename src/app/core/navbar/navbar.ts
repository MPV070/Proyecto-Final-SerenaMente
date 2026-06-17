import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent {
  isLoggedIn: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  checkLoginStatus(): void {
    this.isLoggedIn = !!localStorage.getItem('mockUser');
  }

  navigationToRegister() {
    this.router.navigate(['/registro']);
  }
  navigationToLogin() {
    this.router.navigate(['/login']);
  }
  navigationToPerfil() {
    this.router.navigate(['/perfil-usuario']);
  }
  navigationToRecomendaciones() {
    this.router.navigate(['/recomendaciones']);
  }
}