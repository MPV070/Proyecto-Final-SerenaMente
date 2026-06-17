import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MockDataService } from '../../../services/mock-data.service';

@Component({
  selector: 'app-registro',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  standalone: true,
  templateUrl: './registro.html',
  styleUrls: ['./registro.scss']
})
export class Registro {
  registerForm: FormGroup;
  passwordVisible = false;
  confirmPasswordVisible = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private mockService: MockDataService
  ) {
    this.registerForm = this.fb.group({
      nombreCompleto: ['', [Validators.required, Validators.minLength(4), this.twoWordsValidator]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), this.strongPasswordValidator]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  get f() { return this.registerForm.controls; }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  toggleConfirmPasswordVisibility() {
    this.confirmPasswordVisible = !this.confirmPasswordVisible;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const userData = {
        name: this.registerForm.value.nombreCompleto,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password
      };
      this.mockService.register(userData);
      this.router.navigate(['/registro/preferencias']);
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  private twoWordsValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    const words = value.trim().split(/\s+/);
    return words.length >= 2 ? null : { twoWords: true };
  }

  private strongPasswordValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    const hasUpperCase = /[A-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecial = /[!@#$%^&*(),.?::{}|<>]/.test(value);

    if (!hasUpperCase || !hasNumber || !hasSpecial) {
      return { weakPassword: 'Debe incluir mayuscula, minusculas, numero y simbolo' };
    }

    const blocklist = [
      'Password1!', 'Password123!', 'P@ssw0rd!', 'P@ssword123!',
      'Admin123!', 'Welcome1!', 'Qwerty123!', 'Test1234!'
    ];
    if (blocklist.includes(value)) {
      return { blocklisted: 'Esta contrase�a es demasiado comun' };
    }

    return null;
  }

  private passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }
}