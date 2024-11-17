import { Component, output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SignupComponent } from '../../../signup/signup.component';
import { Login } from '../../../models/login.model';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, SignupComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginForm {
  submitted = false;
  loginSubmitted = output<Login>();
  loginForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      validators: [Validators.required],
    }),
  });

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);
    this.loginForm.reset();
    this.submitted = false;
  }

  // Getter to access form control easier and more readable in the template
  get email() {
    return this.loginForm.get('email');
  }
}
