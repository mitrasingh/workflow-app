import { Component, output } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Login } from '../../../models/login.model';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginForm {
  formData = output<Login>();
  isSubmitted = false;
  fb = new FormBuilder();

  loginForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  // Getter to access form control easier and more readable in the template
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  emitData(): void {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      this.formData.emit(this.loginForm.getRawValue());
    } else {
      return console.log('error');
    }
  }
}
