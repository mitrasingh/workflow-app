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
  submitStatus = false;
  loginSubmitted = output<Login>();
  fb = new FormBuilder();

  loginForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  // Getter to access form control easier and more readable in the template
  get email() {
    return this.loginForm.get('email');
  }
}
