import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface ProfessionalProfile {
  id: string;
  name: string;
  specialty: string;
  location: string;
  photoUrl: string;
  tags: string[];
  bio: string;
  specialties: string[];
  whatsappNumber: string;
  calendarTitle: string;
}

const PROFESSIONALS: Record<string, ProfessionalProfile> = {
  'laura-martinez': {
    id: 'laura-martinez',
    name: 'Laura Martínez',
    specialty: 'Psicóloga especializada en ansiedad y autoestima',
    location: 'Online · España',
    photoUrl: 'assets/images/professionals/laura.jpg',
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
  'javier-torres': {
    id: 'javier-torres',
    name: 'Javier Torres',
    specialty: 'Psicólogo cognitivo-conductual con experiencia en depresión y estrés laboral',
    location: 'Online · España',
    photoUrl: 'assets/images/professionals/javier.jpg',
    tags: ['TCC', 'Depresión', 'Estrés'],
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
  'maria-delgado': {
    id: 'maria-delgado',
    name: 'María Delgado',
    specialty: 'Coach personal enfocada en crecimiento personal y gestión del cambio',
    location: 'Online · España',
    photoUrl: 'assets/images/professionals/maria.jpg',
    tags: ['Crecimiento', 'Motivación', 'Cambio'],
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
  'ana-ruiz': {
    id: 'ana-ruiz',
    name: 'Ana Ruiz',
    specialty: 'Entrenadora personal experta en tonificación y rutinas adaptadas',
    location: 'Barcelona · España',
    photoUrl: 'assets/images/professionals/ana.jpg',
    tags: ['Fitness', 'Tonificación', 'Rutinas'],
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
  'elena-morales': {
    id: 'elena-morales',
    name: 'Elena Morales',
    specialty: 'Nutricionista especializada en alimentación consciente y bienestar digestivo',
    location: 'Madrid · España',
    photoUrl: 'assets/images/professionals/elena.jpg',
    tags: ['Nutrición', 'Digestión', 'Hábitos'],
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
  'claudia-vega': {
    id: 'claudia-vega',
    name: 'Claudia Vega',
    specialty: 'Instructora de yoga enfocada en relajación, respiración y equilibrio',
    location: 'Online · España',
    photoUrl: 'assets/images/professionals/claudia.jpg',
    tags: ['Yoga', 'Relajación', 'Mindfulness'],
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
};

@Component({
  selector: 'app-perfil-profesional',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './perfil-profesional.html',
  styleUrls: ['./perfil-profesional.scss']
})
export class PerfilProfesional implements OnInit {
  professional: ProfessionalProfile | null = null;
  videos: Array<{ url: string; caption: string }> = [];
  notFound = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && PROFESSIONALS[id]) {
      this.professional = PROFESSIONALS[id];
    } else {
      this.notFound = true;
    }

    this.loadVideos();
  }

  loadVideos() {
    this.videos = [
      {
        url: 'assets/videos/ansiedad1.mp4',
        caption: 'Consejos prácticos para calmar la ansiedad en el día a día.'
      },
      {
        url: 'assets/videos/autoestima1.mp4',
        caption: 'Estrategias para cuidar tu autoestima y sentirte más segura.'
      }
    ];
  }

  openWhatsApp() {
    if (!this.professional) {
      return;
    }

    const phone = this.professional.whatsappNumber.replace(/\D/g, '');
    const text = encodeURIComponent(
      `Hola ${this.professional.name}, me gustaría agendar una sesión contigo a través de SerenaMente.`
    );
    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, '_blank');
  }

  openGoogleCalendar() {
    if (!this.professional) {
      return;
    }

    const title = encodeURIComponent(this.professional.calendarTitle);
    const details = encodeURIComponent(
      `Sesión con ${this.professional.name} reservada desde SerenaMente.`
    );
    const location = encodeURIComponent(this.professional.location || '');
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
    window.open(url, '_blank');
  }
}
