import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MockDataService } from '../../../services/mock-data.service';

@Component({
  selector: 'app-register-legal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-legal.component.html',
  styleUrls: ['./register-legal.component.scss']
})
export class RegisterLegalComponent {
  legalForm: FormGroup;
  accountCreated = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private mockService: MockDataService
  ) {
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
      this.mockService.finalizeRegistration();
      this.accountCreated = true;
      console.log('Cuenta creada correctamente');
    }
  }

  onGoToLogin(): void {
    this.router.navigate(['/login']);
  }

  onBack(): void {
    this.router.navigate(['/registro/etiquetas']);
  }
}
