import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MockDataService, UserProfile } from '../../services/mock-data.service';

@Component({
  selector: 'app-perfil-usuario',
  standalone: true,
  imports: [CommonModule],
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

  getModalidadLabel(modalidad: string): string {
    const map: { [key: string]: string } = {
      'online': 'Online 💻',
      'presencial': 'Presencial 🏢',
      'ambas': 'Ambas (Online y Presencial) 🔄'
    };
    return map[modalidad] || modalidad || 'No especificada';
  }

  getProfesionalLabel(profesional: string): string {
    const map: { [key: string]: string } = {
      'psicologo': 'Psicólogo Clínico 🧠',
      'terapeuta': 'Terapeuta 💬',
      'coach': 'Coach Emocional ✨',
      'nose': 'No lo sé todavía ❓'
    };
    return map[profesional] || profesional || 'No especificado';
  }

  editProfile(): void {
    console.log('Funcionalidad de editar perfil no implementada actualmente.');
  }

  logout(): void {
    this.mockService.logout();
    this.router.navigate(['/login']);
  }
}