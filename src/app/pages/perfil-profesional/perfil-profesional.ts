import { Component } from '@angular/core';

@Component({
  selector: 'app-professional-profile',
  templateUrl: './perfil-profesional.html',
  styleUrls: ['./perfil-profesional.scss']
})
export class ProfessionalProfileComponent {

  professional = {
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
    whatsappNumber: '+34623227167', // en formato internacional
    calendarTitle: 'Sesión con Laura Martínez'
  };

  // WhatsApp con mensaje predefinido
  openWhatsApp() {
    const phone = this.professional.whatsappNumber.replace(/\D/g, '');
    const text = encodeURIComponent(
      `Hola ${this.professional.name}, me gustaría agendar una sesión contigo a través de SerenaMente.`
    );
    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, '_blank');
  }

  // Google Calendar (evento rápido)
  openGoogleCalendar() {
    const title = encodeURIComponent(this.professional.calendarTitle);
    const details = encodeURIComponent(
      `Sesión con ${this.professional.name} reservada desde SerenaMente.`
    );
    const location = encodeURIComponent(this.professional.location || '');
    // Evento "sin fecha" para que el usuario la elija
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
    window.open(url, '_blank');
  }
}
