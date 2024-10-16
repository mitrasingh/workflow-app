import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { passwordMatchValidator } from '../shared/utils/passwordMatchValidator';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  submitted = false;
  signupForm = new FormGroup(
    {
      firstName: new FormControl('', {
        validators: [Validators.required],
      }),
      lastName: new FormControl('', {
        validators: [Validators.required],
      }),
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl('', {
        validators: [Validators.required],
      }),
      confirmPassword: new FormControl('', {
        validators: [Validators.required],
      }),
    },
    {
      validators: [passwordMatchValidator],
    }
  );

  onSubmit(): void {
    console.log(this.signupForm.value);
    this.submitted = true;
  }

  // Getter to access form control easier and more readable in the template
  get email() {
    return this.signupForm.get('email');
  }
}
