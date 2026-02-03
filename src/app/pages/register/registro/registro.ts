import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  standalone: true,
  templateUrl: './registro.html',
  styleUrl: './registro.scss',
})
export class Registro {
  // Form initialization
  registerForm: FormGroup;
  passwordVisible = false;
  confirmPasswordVisible = false;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      nombreCompleto: ['', [Validators.required, Validators.minLength(4), this.twoWordsValidator]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), this.strongPasswordValidator]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  // Getters for easy access in template
  get f() { return this.registerForm.controls; }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  toggleConfirmPasswordVisibility() {
    this.confirmPasswordVisible = !this.confirmPasswordVisible;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form Submitted', this.registerForm.value);
      // TODO: Proceed to next step or backend call
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  // --- Custom Validators ---

  private twoWordsValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    const words = value.trim().split(/\s+/);
    return words.length >= 2 ? null : { twoWords: true };
  }

  private strongPasswordValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';

    // 1. Basic complexity checks
    const hasUpperCase = /[A-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    if (!hasUpperCase || !hasNumber || !hasSpecial) {
      return { weakPassword: 'Debe incluir mayúscula, minusculas, número y símbolo' };
    }

    // 2. Blocklist check (Brute force protection)
    const blocklist = [// Variantes de "password"
      'password',
      'Password',
      'Password1',
      'Password123',
      'Password123!',
      'P@ssw0rd',
      'P@ssword123',

      // Secuencias numéricas
      '123456',
      '1234567',
      '12345678',
      '123456789',
      '1234567890',

      // Teclado
      'qwerty',
      'Qwerty123',
      'Qwerty1234!',
      'Asdfgh!',
      'zxcvbn',

      // Palabras típicas
      'Admin1234!',
      '@Administrat0r',
      'W€lcome',
      'W€lcome123',
      'l3tme1n!',

      // Tus contraseñas ya añadidas
      '@Admin1234',
      'psswD1234!',
      '123456Aa!',
      'Qwerty1234!'
    ];
    if (blocklist.includes(value)) {
      return { blocklisted: 'Esta contraseña es demasiado común' };
    }

    return null;
  }

  private passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }
}
