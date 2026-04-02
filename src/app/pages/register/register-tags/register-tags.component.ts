import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-tags',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-tags.component.html',
  styleUrls: ['./register-tags.component.scss']
})
export class RegisterTagsComponent {
  registerForm: FormGroup;
  tags = [
    { id: 1, name: 'Etiqueta 1' },
    { id: 2, name: 'Etiqueta 2' },
    { id: 3, name: 'Etiqueta 3' },
    { id: 4, name: 'Etiqueta 4' },
    { id: 5, name: 'Etiqueta 5' },
    { id: 6, name: 'Etiqueta 6' },
    { id: 7, name: 'Etiqueta 7' },
    { id: 8, name: 'Etiqueta 8' }
  ];

  constructor(private fb: FormBuilder, private router: Router) {
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
    const selected = this.tags.filter((_, index) => this.isTagSelected(index));
    console.log('Etiquetas seleccionadas:', selected);
    this.router.navigate(['/registro/legal']);
  }

  onBack(): void {
    this.router.navigate(['/register']);
  }
}