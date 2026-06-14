import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-professional-card',
  standalone: false,
  templateUrl: './professional-card.html',
  styleUrls: ['./professional-card.scss'],
})
export class ProfessionalCard {
  @Input() name!: string;
  @Input() description!: string;
  @Input() tags: string[] = [];
}
