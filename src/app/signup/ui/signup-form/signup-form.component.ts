import { Component, output } from '@angular/core';
import { Signup } from '../../../models/signup.model';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordMatchValidator } from '../../../shared/utils/passwordMatchValidator';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css',
})
export class SignupForm {
  formData = output<Signup>();
  isSubmitted = false;
  fb = new FormBuilder();

  signupForm = this.fb.nonNullable.group(
    {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    },
    { validators: passwordMatchValidator }
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

  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }

  emitData(): void {
    this.isSubmitted = true;
    if (this.signupForm.valid) {
      this.formData.emit(this.signupForm.getRawValue());
    } else {
      return console.log('error');
    }
  }
}
