import { Component } from '@angular/core';

@Component({
  selector: 'app-profesionales',
  standalone: false,
  templateUrl: './profesionales.html',
  styleUrls: ['./profesionales.scss'],
})
export class Profesionales {
  psychologists = [
    {
      id: 'laura-martinez',
      name: 'Laura Martínez',
      description: 'Psicóloga especializada en ansiedad, autoestima y gestión emocional.',
      tags: ['Ansiedad', 'Autoestima', 'Terapia Online']
    },
    {
      id: 'javier-torres',
      name: 'Javier Torres',
      description: 'Psicólogo cognitivo-conductual con experiencia en depresión y estrés laboral.',
      tags: ['TCC', 'Depresión', 'Estrés']
    }
  ];

  coachs = [
    {
      id: 'maria-delgado',
      name: 'María Delgado',
      description: 'Coach personal enfocada en crecimiento personal y gestión del cambio.',
      tags: ['Crecimiento', 'Motivación', 'Cambio']
    }
  ];

  trainers = [
    {
      id: 'ana-ruiz',
      name: 'Ana Ruiz',
      description: 'Entrenadora personal experta en tonificación y rutinas adaptadas.',
      tags: ['Fitness', 'Tonificación', 'Rutinas']
    }
  ];

  nutrition = [
    {
      id: 'elena-morales',
      name: 'Elena Morales',
      description: 'Nutricionista especializada en alimentación consciente y bienestar digestivo.',
      tags: ['Nutrición', 'Digestión', 'Hábitos']
    }
  ];

  activities = [
    {
      id: 'claudia-vega',
      name: 'Claudia Vega',
      description: 'Instructora de yoga enfocada en relajación, respiración y equilibrio.',
      tags: ['Yoga', 'Relajación', 'Mindfulness']
    }
  ];
}
