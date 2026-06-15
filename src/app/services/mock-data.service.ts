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
    { id: 1, name: 'Estr�s', icon: '\U0001F9D8\uFE0F' },
    { id: 2, name: 'Ansiedad', icon: '\U0001F630' },
    { id: 3, name: 'Depresi?n', icon: '\U0001F614' },
    { id: 4, name: 'Insomnio', icon: '\U0001F634' },
    { id: 5, name: 'Relaciones', icon: '\U0001F491' },
    { id: 6, name: 'Trabajo', icon: '\U0001F4BC' },
    { id: 7, name: 'Familia', icon: '\U0001F468\u200D\U0001F469\u200D\U0001F467\u200D\U0001F466' },
    { id: 8, name: 'Autoestima', icon: '\U0001F4AA' }
  ];

  private professionals: any[] = [
    {
      id: 'laura-martinez',
      name: 'Laura Mart?ez',
      specialty: 'Psic?loga Cl?nica',
      location: 'Online ? Espa?a',
      photoUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
      tags: ['ansiedad', 'autoestima', 'terapia online'],
      bio: 'Te acompa?o a entender tus emociones, gestionar la ansiedad y construir una relaci?n m?s sana contigo misma.',
      specialties: [
        'Ansiedad y ataques de p?nico',
        'Autoestima y autocr?tica',
        'Gesti?n emocional',
        'Terapia online'
      ],
      whatsappNumber: '+34623227167',
      calendarTitle: 'Sesi?n con Laura Mart?ez'
    },
    {
      id: 'javier-torres',
      name: 'Javier Torres',
      specialty: 'Psic?logo Cognitivo-Conductual',
      location: 'Online ? Espa?a',
      photoUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
      tags: ['tcc', 'depresi?n', 'estr?s'],
      bio: 'Acompa?o a personas a encontrar herramientas pr?cticas para manejar el estr?s y recuperar equilibrio emocional.',
      specialties: [
        'Depresi?n',
        'Estr?s laboral',
        'Autocuidado emocional',
        'Terapia cognitivo-conductual'
      ],
      whatsappNumber: '+34612345678',
      calendarTitle: 'Sesi?n con Javier Torres'
    },
    {
      id: 'maria-delgado',
      name: 'Mar?a Delgado',
      specialty: 'Coach Personal',
      location: 'Online ? Espa?a',
      photoUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
      tags: ['crecimiento', 'motivaci?n', 'cambio'],
      bio: 'Te ayudo a dise?ar un plan personal que te permita avanzar con seguridad hacia tus metas.',
      specialties: [
        'Objetivos personales',
        'Cambio de h?bitos',
        'Motivaci?n',
        'Gesti?n del cambio'
      ],
      whatsappNumber: '+34698765432',
      calendarTitle: 'Sesi?n con Mar?a Delgado'
    },
    {
      id: 'ana-ruiz',
      name: 'Ana Ruiz',
      specialty: 'Entrenadora Personal',
      location: 'Barcelona ? Espa?a',
      photoUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
      tags: ['fitness', 'tonificaci?n', 'rutinas'],
      bio: 'Creo entrenamientos personalizados para ayudarte a fortalecer el cuerpo y sentirte con m?s energ?a.',
      specialties: [
        'Entrenamiento funcional',
        'Tonificaci?n',
        'Rutinas adaptadas',
        'Bienestar f?sico'
      ],
      whatsappNumber: '+34611122233',
      calendarTitle: 'Sesi?n con Ana Ruiz'
    },
    {
      id: 'elena-morales',
      name: 'Elena Morales',
      specialty: 'Nutricionista',
      location: 'Madrid ? Espa?a',
      photoUrl: 'https://randomuser.me/api/portraits/women/43.jpg',
      tags: ['nutrici?n', 'digesti?n', 'h?bitos'],
      bio: 'Te acompa?o a mejorar tu relaci?n con la comida desde la escucha y el respeto a tu cuerpo.',
      specialties: [
        'Alimentaci?n consciente',
        'Bienestar digestivo',
        'H?bitos saludables',
        'Plan nutricional personalizado'
      ],
      whatsappNumber: '+34644455566',
      calendarTitle: 'Sesi?n con Elena Morales'
    },
    {
      id: 'claudia-vega',
      name: 'Claudia Vega',
      specialty: 'Instructora de Yoga',
      location: 'Online ? Espa?a',
      photoUrl: 'https://randomuser.me/api/portraits/women/52.jpg',
      tags: ['yoga', 'relajaci?n', 'mindfulness'],
      bio: 'Con pr?cticas suaves y conscientes, te ayudo a reconectar con tu cuerpo y tu respiraci?n.',
      specialties: [
        'Yoga restaurativo',
        'Respiraci?n',
        'Relajaci?n',
        'Mindfulness'
      ],
      whatsappNumber: '+34677788899',
      calendarTitle: 'Sesi?n con Claudia Vega'
    }
  ];

  private recommendations: Recommendation[] = [
    {
      id: 1,
      title: 'T?cnicas de respiraci?n para la ansiedad',
      description: 'Aprende a calmar tu mente con estas t?cnicas simples.',
      type: 'video',
      url: 'https://www.youtube.com/embed/example1',
      tags: ['ansiedad', 'respiraci?n'],
      professionalName: 'Laura Mart?ez'
    },
    {
      id: 2,
      title: 'C?mo mejorar tu autoestima',
      description: 'Peque?os pasos para sentirte mejor contigo mismo.',
      type: 'article',
      url: '#',
      tags: ['autoestima', 'motivaci?n'],
      professionalName: 'Mar?a Delgado'
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
      title: 'Ejercicios para manejar el estr?s laboral',
      description: 'Herramientas pr?cticas para tu d?a a d?a.',
      type: 'exercise',
      url: '#',
      tags: ['estr?s', 'trabajo'],
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