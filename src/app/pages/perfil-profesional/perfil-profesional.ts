import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MockDataService } from '../../services/mock-data.service';
import { FeedNavbarComponent } from '../../components/feed-navbar/feed-navbar';

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

@Component({
  selector: 'app-perfil-profesional',
  standalone: true,
  imports: [CommonModule, RouterModule, FeedNavbarComponent],
  templateUrl: './perfil-profesional.html',
  styleUrls: ['./perfil-profesional.scss']
})
export class PerfilProfesional implements OnInit {
  professional: ProfessionalProfile | null = null;
  videos: Array<{ url: string; caption: string }> = [];
  notFound = false;

  constructor(
    private route: ActivatedRoute,
    private mockService: MockDataService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const data = this.mockService.getProfessionalById(id);
      if (data) {
        this.professional = {
          id: data.id,
          name: data.name,
          specialty: data.specialty,
          location: data.location,
          photoUrl: data.photoUrl,
          tags: data.tags,
          bio: data.bio,
          specialties: data.specialties,
          whatsappNumber: data.whatsappNumber,
          calendarTitle: data.calendarTitle
        };
      } else {
        this.notFound = true;
      }
    } else {
      this.notFound = true;
    }
    this.loadVideos();
  }

  loadVideos() {
    if (this.professional) {
      this.videos = [
        { url: 'https://www.youtube.com/embed/example1', caption: 'Consejos prácticos para calmar la ansiedad.' },
        { url: 'https://www.youtube.com/embed/example2', caption: 'Estrategias para cuidar tu autoestima.' }
      ];
    }
  }

  openWhatsApp() {
    if (!this.professional) return;
    const phone = this.professional.whatsappNumber.replace(/\D/g, '');
    const text = encodeURIComponent('Hola ' + this.professional.name + ', me gustaría agendar una sesión contigo a través de SerenaMente.');
    const url = 'https://wa.me/' + phone + '?text=' + text;
    window.open(url, '_blank');
  }

  openGoogleCalendar() {
    if (!this.professional) return;
    const title = encodeURIComponent(this.professional.calendarTitle);
    const details = encodeURIComponent('Sesión con ' + this.professional.name + ' reservada desde SerenaMente.');
    const location = encodeURIComponent(this.professional.location || '');
    const url = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + title + '&details=' + details + '&location=' + location;
    window.open(url, '_blank');
  }
}

