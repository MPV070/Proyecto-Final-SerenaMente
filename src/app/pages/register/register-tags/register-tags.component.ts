import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MockDataService, Tag } from '../../../services/mock-data.service';

@Component({
  selector: 'app-register-tags',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-tags.component.html',
  styleUrls: ['./register-tags.component.scss']
})
export class RegisterTagsComponent {
  registerForm: FormGroup;
  tags: Tag[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private mockService: MockDataService
  ) {
    this.tags = this.mockService.getTags();
    this.registerForm = this.fb.group({
      selectedTags: this.fb.array([])
    });
    this.initializeTags();
  }

  get selectedTags(): FormArray {
    return this.registerForm.get('selectedTags') as FormArray;
  }

  private initializeTags(): void {
    this.tags.forEach(() => {
      this.selectedTags.push(this.fb.control(false));
    });
  }

  toggleTag(index: number): void {
    const control = this.selectedTags.at(index);
    control.setValue(!control.value);
  }

  isTagSelected(index: number): boolean {
    return this.selectedTags.at(index).value;
  }

  onContinue(): void {
    const selectedTags: Tag[] = [];
    this.tags.forEach((tag, index) => {
      if (this.isTagSelected(index)) {
        selectedTags.push(tag);
      }
    });

    // Guardar tags en localStorage
    localStorage.setItem('selectedTags', JSON.stringify(selectedTags));

    console.log('Etiquetas seleccionadas:', selectedTags);
    this.router.navigate(['/registro/legal']);
  }

  onBack(): void {
    this.router.navigate(['/registro']);
  }
}