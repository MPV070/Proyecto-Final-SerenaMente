import { Injectable } from '@angular/core';

export enum ProfessionalType {
  PSICOLOGO = 'psicologo',
  TERAPEUTA = 'terapeuta',
  COACH = 'coach',
  OTRO = 'otro'
}

export enum Modality {
  ONLINE = 'online',
  PRESENCIAL = 'presencial',
  AMBAS = 'ambas'
}

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

export interface Professional {
  id: string;
  name: string;
  specialty: string;
  type: ProfessionalType;
  location: string;
  modalidad: Modality;
  photoUrl: string;
  tags: string[];
  bio: string;
  specialties: string[];
  whatsappNumber: string;
  calendarTitle: string;
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
    { id: 1, name: 'Estrés', icon: '🧘' },
    { id: 2, name: 'Ansiedad', icon: '😰' },
    { id: 3, name: 'Depresión', icon: '😔' },
    { id: 4, name: 'Insomnio', icon: '😴' },
    { id: 5, name: 'Relaciones', icon: '💑' },
    { id: 6, name: 'Trabajo', icon: '💼' },
    { id: 7, name: 'Familia', icon: '👨‍👩‍👧‍👦' },
    { id: 8, name: 'Autoestima', icon: '💪' }
  ];

  private professionals: Professional[] = [
    {
      id: 'laura-martinez',
      name: 'Laura Martínez',
      specialty: 'Psicóloga Clínica',
      type: ProfessionalType.PSICOLOGO,
      location: 'Online - España',
      modalidad: Modality.ONLINE,
      photoUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
      tags: ['ansiedad', 'autoestima', 'estrés'],
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
      type: ProfessionalType.PSICOLOGO,
      location: 'Online - España',
      modalidad: Modality.ONLINE,
      photoUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
      tags: ['depresión', 'estrés', 'trabajo'],
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
      type: ProfessionalType.COACH,
      location: 'Online - España',
      modalidad: Modality.ONLINE,
      photoUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
      tags: ['autoestima', 'motivación', 'trabajo'],
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
      type: ProfessionalType.TERAPEUTA,
      location: 'Barcelona - España',
      modalidad: Modality.PRESENCIAL,
      photoUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
      tags: ['estrés', 'relajación', 'salud'],
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
      type: ProfessionalType.TERAPEUTA,
      location: 'Madrid - España',
      modalidad: Modality.AMBAS,
      photoUrl: 'https://randomuser.me/api/portraits/women/43.jpg',
      tags: ['salud', 'hábitos', 'estrés'],
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
      type: ProfessionalType.TERAPEUTA,
      location: 'Online - España',
      modalidad: Modality.ONLINE,
      photoUrl: 'https://randomuser.me/api/portraits/women/52.jpg',
      tags: ['yoga', 'relajación', 'mindfulness', 'insomnio'],
      bio: 'Con prácticas suaves y conscientes, te ayudo a reconectar con tu cuerpo y tu respiración.',
      specialties: [
        'Yoga restaurativo',
        'Respiración',
        'Relajación',
        'Mindfulness'
      ],
      whatsappNumber: '+34677788899',
      calendarTitle: 'Sesión con Claudia Vega'
    },
    {
      id: 'daniela-rojas',
      name: 'Daniela Rojas',
      specialty: 'Psicóloga Familiar y de Pareja',
      type: ProfessionalType.PSICOLOGO,
      location: 'Madrid - España',
      modalidad: Modality.AMBAS,
      photoUrl: 'https://randomuser.me/api/portraits/women/12.jpg',
      tags: ['familia', 'relaciones', 'autoestima'],
      bio: 'Especializada en dinámicas de pareja y resolución de conflictos familiares en un ambiente seguro y empático.',
      specialties: [
        'Terapia de pareja',
        'Conflictos familiares',
        'Comunicación asertiva',
        'Mediación familiar'
      ],
      whatsappNumber: '+34600111222',
      calendarTitle: 'Sesión con Daniela Rojas'
    },
    {
      id: 'sergio-ramos',
      name: 'Sergio Ramos',
      specialty: 'Coach de Liderazgo y Trabajo',
      type: ProfessionalType.COACH,
      location: 'Barcelona - España',
      modalidad: Modality.AMBAS,
      photoUrl: 'https://randomuser.me/api/portraits/men/15.jpg',
      tags: ['trabajo', 'estrés', 'motivación'],
      bio: 'Te acompaño a potenciar tu desarrollo profesional, gestionar el síndrome de burnout y superar el estrés en el entorno laboral.',
      specialties: [
        'Estrés laboral',
        'Burnout',
        'Liderazgo personal',
        'Crecimiento profesional'
      ],
      whatsappNumber: '+34633222111',
      calendarTitle: 'Sesión con Sergio Ramos'
    },
    {
      id: 'marta-gomez',
      name: 'Marta Gómez',
      specialty: 'Terapeuta del Sueño y Relajación',
      type: ProfessionalType.TERAPEUTA,
      location: 'Sevilla - España',
      modalidad: Modality.ONLINE,
      photoUrl: 'https://randomuser.me/api/portraits/women/28.jpg',
      tags: ['insomnio', 'depresión', 'relajación'],
      bio: 'Ayudo a restaurar el equilibrio en tus ciclos de sueño mediante mindfulness, respiración y terapia cognitivo-conductual para el insomnio.',
      specialties: [
        'Insomnio crónico',
        'Higiene del sueño',
        'Técnicas de relajación',
        'Mindfulness para dormir'
      ],
      whatsappNumber: '+34655444333',
      calendarTitle: 'Sesión con Marta Gómez'
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
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('mockUser', JSON.stringify(this.currentUser));
    }
  }

  login(email: string, password: string): boolean {
    const cleanEmail = (email || '').trim().toLowerCase();

    // Interceptar el usuario de prueba predefinido
    if (cleanEmail === 'prueba@serenamente.com' && password === 'AC00k!e') {
      const testUser = {
        name: 'Perfil Prueba',
        email: 'prueba@serenamente.com',
        password: 'AC00k!e',
        preferences: { modalidad: 'ambas', profesional: 'psicologo' },
        tags: [
          { id: 1, name: 'Estrés', icon: '🧘' },
          { id: 2, name: 'Ansiedad', icon: '😰' },
          { id: 8, name: 'Autoestima', icon: '💪' }
        ]
      };
      this.currentUser = testUser;
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('mockUser', JSON.stringify(testUser));
      }
      return true;
    }

    // Interceptar el segundo usuario de prueba predefinido (Familia y Sueño)
    if (cleanEmail === 'ejemplo@serenamente.com' && password === 'AC00k!e') {
      const testUser = {
        name: 'Perfil Familia y Sueño',
        email: 'ejemplo@serenamente.com',
        password: 'AC00k!e',
        preferences: { modalidad: 'online', profesional: 'terapeuta' },
        tags: [
          { id: 4, name: 'Insomnio' },
          { id: 5, name: 'Relaciones' },
          { id: 7, name: 'Familia'}
        ]
      };
      this.currentUser = testUser;
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('mockUser', JSON.stringify(testUser));
      }
      return true;
    }

    const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('mockUser') : null;
    if (stored) {
      try {
        const user = JSON.parse(stored);
        if (user.email.trim().toLowerCase() === cleanEmail && (!user.password || user.password === password)) {
          this.currentUser = user;
          return true;
        }
      } catch {
        return false;
      }
    }
    return false;
  }

  logout(): void {
    this.currentUser = null;
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('mockUser');
      localStorage.removeItem('selectedTags');
      localStorage.removeItem('preferences');
    }
  }

  getCurrentUser(): any {
    if (this.currentUser) return this.currentUser;
    const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('mockUser') : null;
    if (stored) {
      try {
        this.currentUser = JSON.parse(stored);
      } catch {
        this.currentUser = null;
      }
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

  getRecommendedProfessionals(selectedTags: Tag[], preferences: any): Professional[] {
    const userTagNames = (selectedTags || []).map(t => t.name.toLowerCase());
    const preferredType = preferences?.profesional;
    const preferredModalidad = preferences?.modalidad;

    return this.professionals
      .map(prof => {
        // 1. Contar coincidencia de tags
        let tagMatches = 0;
        if (userTagNames.length > 0 && prof.tags) {
          tagMatches = prof.tags.filter(t => 
            userTagNames.some(ut => ut.includes(t.toLowerCase()) || t.toLowerCase().includes(ut))
          ).length;
        }

        // 2. Coincidencia de Tipo
        let typeMatch = 0;
        if (preferredType && preferredType !== 'nose') {
          if (prof.type === preferredType) {
            typeMatch = 1;
          }
        }

        // 3. Coincidencia de Modalidad
        let modalityMatch = 0;
        if (preferredModalidad) {
          if (preferredModalidad === 'ambas' || prof.modalidad === 'ambas') {
            modalityMatch = 1;
          } else if (prof.modalidad === preferredModalidad) {
            modalityMatch = 1;
          }
        }

        return { professional: prof, tagMatches, typeMatch, modalityMatch };
      })
      .filter(item => {
        if (userTagNames.length > 0) {
          return item.tagMatches > 0;
        }
        return true;
      })
      .sort((a, b) => {
        // Ordenar primero por coincidencia de tags (de mayor a menor)
        if (b.tagMatches !== a.tagMatches) {
          return b.tagMatches - a.tagMatches;
        }
        // Desempate 1: tipo de profesional preferido (coincide primero)
        if (b.typeMatch !== a.typeMatch) {
          return b.typeMatch - a.typeMatch;
        }
        // Desempate 2: modalidad (coincide primero)
        if (b.modalityMatch !== a.modalityMatch) {
          return b.modalityMatch - a.modalityMatch;
        }
        return 0;
      })
      .map(item => item.professional);
  }

  finalizeRegistration(): void {
    const storedUser = typeof localStorage !== 'undefined' ? localStorage.getItem('mockUser') : null;
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        const tagsStored = typeof localStorage !== 'undefined' ? localStorage.getItem('selectedTags') : null;
        const prefsStored = typeof localStorage !== 'undefined' ? localStorage.getItem('preferences') : null;
        
        userData.tags = tagsStored ? JSON.parse(tagsStored) : [];
        userData.preferences = prefsStored ? JSON.parse(prefsStored) : { modalidad: '', profesional: '' };
        
        this.currentUser = userData;
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('mockUser', JSON.stringify(userData));
        }
      } catch (e) {
        console.error('Error finalizing registration', e);
      }
    }
  }

  getUserProfile(): UserProfile | null {
    const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('mockUser') : null;
    if (stored) {
      try {
        const userData = JSON.parse(stored);
        const tagsStored = typeof localStorage !== 'undefined' ? localStorage.getItem('selectedTags') : null;
        const prefsStored = typeof localStorage !== 'undefined' ? localStorage.getItem('preferences') : null;
        return {
          id: 1,
          name: userData.name || 'Usuario',
          email: userData.email || '',
          photoUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
          tags: userData.tags || (tagsStored ? JSON.parse(tagsStored) : []),
          preferences: userData.preferences || (prefsStored ? JSON.parse(prefsStored) : { modalidad: '', profesional: '' }),
          joinDate: new Date().toLocaleDateString('es-ES')
        };
      } catch {
        return null;
      }
    }
    return null;
  }
}