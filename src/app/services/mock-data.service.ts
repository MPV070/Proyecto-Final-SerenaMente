import { Injectable } from '@angular/core';

export interface Tag {
  id: number;
  name: string;
  icon: string;
}

export interface UserProfile {
  id: number;
  name: string;
  email: string;
  photoUrl: string;
  tags: Tag[];
  preferences: {
    modalidad: string;
    profesional: string;
  };
  joinDate: string;
}

export interface Recommendation {
  id: number;
  title: string;
  description: string;
  type: 'video' | 'article' | 'exercise';
  url: string;
  tags: string[];
  professionalName: string;
}

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private currentUser: any = null;
  private tags: Tag[] = [
    { id: 1, name: 'Estrés', icon: '\U0001F9D8\uFE0F' },
    { id: 2, name: 'Ansiedad', icon: '\U0001F630' },
    { id: 3, name: 'Depresión', icon: '\U0001F614' },
    { id: 4, name: 'Insomnio', icon: '\U0001F634' },
    { id: 5, name: 'Relaciones', icon: '\U0001F491' },
    { id: 6, name: 'Trabajo', icon: '\U0001F4BC' },
    { id: 7, name: 'Familia', icon: '\U0001F468\u200D\U0001F469\u200D\U0001F467\u200D\U0001F466' },
    { id: 8, name: 'Autoestima', icon: '\U0001F4AA' }
  ];

  private professionals: any[] = [
    {
      id: 'laura-martinez',
      name: 'Laura Martínez',
      specialty: 'Psicóloga Clínica',
      location: 'Online - España',
      photoUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
      tags: ['ansiedad', 'autoestima', 'terapia online'],
      bio: 'Te acompaño a entender tus emociones, gestionar la ansiedad y construir una relación más sana contigo misma.',
      specialties: [
        'Ansiedad y ataques de pánico',
        'Autoestima y autocrítica',
        'Gestión emocional',
        'Terapia online'
      ],
      whatsappNumber: '+34623227167',
      calendarTitle: 'Sesión con Laura Martínez'
    },
    {
      id: 'javier-torres',
      name: 'Javier Torres',
      specialty: 'Psicólogo Cognitivo-Conductual',
      location: 'Online - España',
      photoUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
      tags: ['tcc', 'depresión', 'estrés'],
      bio: 'Acompaño a personas a encontrar herramientas prácticas para manejar el estrés y recuperar equilibrio emocional.',
      specialties: [
        'Depresión',
        'Estrés laboral',
        'Autocuidado emocional',
        'Terapia cognitivo-conductual'
      ],
      whatsappNumber: '+34612345678',
      calendarTitle: 'Sesión con Javier Torres'
    },
    {
      id: 'maria-delgado',
      name: 'María Delgado',
      specialty: 'Coach Personal',
      location: 'Online - España',
      photoUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
      tags: ['crecimiento', 'motivación', 'cambio'],
      bio: 'Te ayudo a diseñar un plan personal que te permita avanzar con seguridad hacia tus metas.',
      specialties: [
        'Objetivos personales',
        'Cambio de hábitos',
        'Motivación',
        'Gestión del cambio'
      ],
      whatsappNumber: '+34698765432',
      calendarTitle: 'Sesión con María Delgado'
    },
    {
      id: 'ana-ruiz',
      name: 'Ana Ruiz',
      specialty: 'Entrenadora Personal',
      location: 'Barcelona - España',
      photoUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
      tags: ['fitness', 'tonificación', 'rutinas'],
      bio: 'Creo entrenamientos personalizados para ayudarte a fortalecer el cuerpo y sentirte con más energía.',
      specialties: [
        'Entrenamiento funcional',
        'Tonificación',
        'Rutinas adaptadas',
        'Bienestar físico'
      ],
      whatsappNumber: '+34611122233',
      calendarTitle: 'Sesión con Ana Ruiz'
    },
    {
      id: 'elena-morales',
      name: 'Elena Morales',
      specialty: 'Nutricionista',
      location: 'Madrid - España',
      photoUrl: 'https://randomuser.me/api/portraits/women/43.jpg',
      tags: ['nutrición', 'digestión', 'hábitos'],
      bio: 'Te acompaño a mejorar tu relación con la comida desde la escucha y el respeto a tu cuerpo.',
      specialties: [
        'Alimentación consciente',
        'Bienestar digestivo',
        'Hábitos saludables',
        'Plan nutricional personalizado'
      ],
      whatsappNumber: '+34644455566',
      calendarTitle: 'Sesión con Elena Morales'
    },
    {
      id: 'claudia-vega',
      name: 'Claudia Vega',
      specialty: 'Instructora de Yoga',
      location: 'Online - España',
      photoUrl: 'https://randomuser.me/api/portraits/women/52.jpg',
      tags: ['yoga', 'relajación', 'mindfulness'],
      bio: 'Con prácticas suaves y conscientes, te ayudo a reconectar con tu cuerpo y tu respiración.',
      specialties: [
        'Yoga restaurativo',
        'Respiración',
        'Relajación',
        'Mindfulness'
      ],
      whatsappNumber: '+34677788899',
      calendarTitle: 'Sesión con Claudia Vega'
    }
  ];

  private recommendations: Recommendation[] = [
    {
      id: 1,
      title: 'Técnicas de respiración para la ansiedad',
      description: 'Aprende a calmar tu mente con estas técnicas simples.',
      type: 'video',
      url: 'https://www.youtube.com/embed/example1',
      tags: ['ansiedad', 'respiración'],
      professionalName: 'Laura Martínez'
    },
    {
      id: 2,
      title: 'Cómo mejorar tu autoestima',
      description: 'Pequeños pasos para sentirte mejor contigo mismo.',
      type: 'article',
      url: '#',
      tags: ['autoestima', 'motivación'],
      professionalName: 'María Delgado'
    },
    {
      id: 3,
      title: 'Rutina de yoga para dormir mejor',
      description: 'Estiramientos suaves antes de dormir.',
      type: 'video',
      url: 'https://www.youtube.com/embed/example2',
      tags: ['insomnio', 'yoga'],
      professionalName: 'Claudia Vega'
    },
    {
      id: 4,
      title: 'Ejercicios para manejar el estrés laboral',
      description: 'Herramientas prácticas para tu día a día.',
      type: 'exercise',
      url: '#',
      tags: ['estrés', 'trabajo'],
      professionalName: 'Javier Torres'
    }
  ];

  register(userData: any): void {
    this.currentUser = {
      ...userData,
      createdAt: new Date().toISOString()
    };
    localStorage.setItem('mockUser', JSON.stringify(this.currentUser));
  }

  login(email: string, password: string): boolean {
    const stored = localStorage.getItem('mockUser');
    if (stored) {
      const user = JSON.parse(stored);
      if (user.email === email) {
        this.currentUser = user;
        return true;
      }
    }
    return false;
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('mockUser');
    localStorage.removeItem('selectedTags');
    localStorage.removeItem('preferences');
  }

  getCurrentUser(): any {
    if (this.currentUser) return this.currentUser;
    const stored = localStorage.getItem('mockUser');
    if (stored) {
      this.currentUser = JSON.parse(stored);
    }
    return this.currentUser;
  }

  isAuthenticated(): boolean {
    return !!this.getCurrentUser();
  }

  getTags(): Tag[] {
    return this.tags;
  }

  getProfessionalById(id: string): any {
    return this.professionals.find(p => p.id === id) || null;
  }

  getAllProfessionals(): any[] {
    return this.professionals;
  }

  getRecommendationsByTags(selectedTags: Tag[]): Recommendation[] {
    if (!selectedTags || selectedTags.length === 0) {
      return this.recommendations;
    }
    const selectedTagNames = selectedTags.map(t => t.name.toLowerCase());
    return this.recommendations.filter(rec =>
      rec.tags.some(tag => selectedTagNames.includes(tag.toLowerCase()))
    );
  }

  getUserProfile(): UserProfile | null {
    const stored = localStorage.getItem('mockUser');
    if (stored) {
      try {
        const userData = JSON.parse(stored);
        const tagsStored = localStorage.getItem('selectedTags');
        const prefsStored = localStorage.getItem('preferences');
        return {
          id: 1,
          name: userData.name || 'Usuario',
          email: userData.email || '',
          photoUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
          tags: tagsStored ? JSON.parse(tagsStored) : [],
          preferences: prefsStored ? JSON.parse(prefsStored) : { modalidad: '', profesional: '' },
          joinDate: new Date().toLocaleDateString('es-ES')
        };
      } catch {
        return null;
      }
    }
    return null;
  }
}