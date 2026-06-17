import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MockDataService, Tag } from '../../../services/mock-data.service';
import { TagsComponent } from '../../../components/tags/tags.component';

@Component({
  selector: 'app-register-tags',
  standalone: true,
  imports: [CommonModule, TagsComponent],
  templateUrl: './register-tags.component.html',
  styleUrls: ['./register-tags.component.scss']
})
export class RegisterTagsComponent {
  selectedTagIds: number[] = [];
  selectedTagsList: Tag[] = [];

  constructor(
    private router: Router,
    private mockService: MockDataService
  ) {
    // Cargar tags guardadas previamente si existen
    if (typeof localStorage !== 'undefined') {
      const storedTags = localStorage.getItem('selectedTags');
      if (storedTags) {
        try {
          this.selectedTagsList = JSON.parse(storedTags);
          this.selectedTagIds = this.selectedTagsList.map(t => t.id);
        } catch (e) {
          console.error('Error parsing stored tags', e);
        }
      }
    }
  }

  onTagsChanged(tags: Tag[]): void {
    this.selectedTagsList = tags;
    this.selectedTagIds = tags.map(t => t.id);
  }

  onContinue(): void {
    if (this.selectedTagIds.length === 3) {
      // Guardar tags en localStorage
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('selectedTags', JSON.stringify(this.selectedTagsList));
      }
      console.log('Etiquetas seleccionadas:', this.selectedTagsList);
      this.router.navigate(['/registro/legal']);
    }
  }

  onBack(): void {
    this.router.navigate(['/registro/preferencias']);
  }
}