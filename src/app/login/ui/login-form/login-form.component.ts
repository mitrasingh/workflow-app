import { Component, output, signal } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
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
  submitStatus = false;
  loginSubmitted = output<Login>();
  fb = new FormBuilder();

  loginForm = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  // onSubmit(): void {
  //   this.submitted = true;
  //   if (this.loginForm.invalid) {
  //     return;
  //   }
  //   console.log(this.loginForm.value);
  //   this.loginForm.reset();
  //   this.submitted = false;
  // }

  // Getter to access form control easier and more readable in the template
  get email() {
    return this.loginForm.get('email');
  }
}
