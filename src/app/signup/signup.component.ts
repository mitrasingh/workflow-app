import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { passwordMatchValidator } from '../shared/utils/passwordMatchValidator';
import { FireAuthService } from '../services/fireauth.service';
import { HeroComponent } from '../shared/components/hero/hero.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, HeroComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  private authService = inject(FireAuthService);
  fb = new FormBuilder();
  submitted = false;
  signupForm = this.fb.nonNullable.group(
    {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    },
    {
      validators: [passwordMatchValidator],
    }
  );

  // Getter to access form control easier and more readable in the template
  get firstName() {
    return this.signupForm.get('firstName');
  }

  get lastName() {
    return this.signupForm.get('lastName');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  onSubmit(): void {
    this.submitted = true;
    const formData = this.signupForm.getRawValue();
    if (this.signupForm.valid) {
      console.log(formData.firstName);
      this.authService.register(
        formData.firstName,
        formData.lastName,
        formData.email,
        formData.password
      );
      console.log('Submitted!');
      this.signupForm.reset();
      this.submitted = false;
    }
  }
}
