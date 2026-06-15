import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-legal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-legal.component.html',
  styleUrls: ['./register-legal.component.scss']
})
export class RegisterLegalComponent {
  legalForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.legalForm = this.fb.group({
      termsAccepted: [false, Validators.requiredTrue],
      privacyAccepted: [false, Validators.requiredTrue],
      dataTreatmentAccepted: [false, Validators.requiredTrue]
    });
  }

  get f() { return this.legalForm.controls; }

  get allAccepted(): boolean {
    return this.f['termsAccepted'].value &&
           this.f['privacyAccepted'].value &&
           this.f['dataTreatmentAccepted'].value;
  }

  onCreateAccount(): void {
    if (this.legalForm.valid) {
      console.log('Cuenta creada correctamente');
      // Redirigir al feed después del registro
      this.router.navigate(['/feed']);
    }
  }

  onBack(): void {
    this.router.navigate(['/registro/etiquetas']);
  }
}