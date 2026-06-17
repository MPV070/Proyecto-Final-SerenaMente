import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MockDataService, UserProfile } from '../../services/mock-data.service';
import { FeedNavbarComponent } from '../../components/feed-navbar/feed-navbar';

@Component({
  selector: 'app-perfil-usuario',
  standalone: true,
  imports: [CommonModule, FeedNavbarComponent],
  templateUrl: './perfil-usuario.html',
  styleUrls: ['./perfil-usuario.scss']
})
export class PerfilUsuario implements OnInit {
  user: UserProfile | null = null;

  constructor(
    private mockService: MockDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    this.user = this.mockService.getUserProfile();
    if (!this.user) {
      console.warn('No hay usuario logueado');
    }
  }

  getTagIcon(tagName: string): string {
    const tag = this.mockService.getTags().find(t => t.name.toLowerCase() === tagName.toLowerCase());
    return tag ? tag.icon : '???';
  }

  editProfile(): void {
    console.log('Funcionalidad de editar perfil no implementada actualmente.');
  }

  logout(): void {
    this.mockService.logout();
    this.router.navigate(['/login']);
  }
}