import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-professional-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './professional-card.html',
  styleUrls: ['./professional-card.scss'],
})
export class ProfessionalCard {
  @Input() name!: string;
  @Input() description!: string;
  @Input() tags: string[] = [];
  @Input() link?: string | any[];
}
