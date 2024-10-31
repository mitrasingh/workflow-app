import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { passwordMatchValidator } from '../shared/utils/passwordMatchValidator';
import { FireAuthService } from '../services/fireauth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  private authService = inject(FireAuthService);
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
        validators: [Validators.required, Validators.minLength(6)],
      }),
      confirmPassword: new FormControl('', {
        validators: [Validators.required],
      }),
    },
    {
      validators: [passwordMatchValidator],
    }
  );

  // Getter to access form control easier and more readable in the template
  get email() {
    return this.signupForm.get('email');
  }

  onSubmit(): void {
    const formData = this.signupForm.value;
    console.log(formData);
    this.authService
      .signupUser(
        formData.firstName!,
        formData.lastName!,
        formData.email!,
        formData.password!
      )
      .subscribe(() => {
        console.log('you have signed up!');
      });
  }
}
