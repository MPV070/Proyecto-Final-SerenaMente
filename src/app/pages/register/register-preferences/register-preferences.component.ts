import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register-preferences',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './register-preferences.component.html',
    styleUrl: './register-preferences.component.scss'
})
export class RegisterPreferencesComponent {
    preferencesForm: FormGroup;

    constructor(private fb: FormBuilder, private router: Router) {
        this.preferencesForm = this.fb.group({
            modalidad: ['', Validators.required],
            profesional: ['', Validators.required]
        });
    }

    get f() { return this.preferencesForm.controls; }

    onSubmit() {
        if (this.preferencesForm.valid) {
            console.log('Preferences submitted:', this.preferencesForm.value);
            // TODO: Proceed to next step (Emotional Tags)
            // this.router.navigate(['/registro/etiquetas']); 
        } else {
            this.preferencesForm.markAllAsTouched();
        }
    }

    goBack() {
        this.router.navigate(['/registro']);
    }
}
