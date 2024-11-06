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
import { User } from '../models/user.model';

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
    if (this.signupForm.valid) {
      console.log('Submitted!');
      this.signupForm.reset();
      this.submitted = false;
    }
    // const formData = this.signupForm.getRawValue();
    // const formStatus = this.signupForm.status;
    // if (formStatus === 'VALID') {
    //   console.log(this.signupForm.value);
    // } else {
    //   console.log('Form is not valid');
    //   this.submitted = false;
    // }

    // this.authService
    //   .signupUser(
    //     formData.firstName!,
    //     formData.lastName!,
    //     formData.email!,
    //     formData.password!
    //   )
    //   .subscribe(() => {
    //     console.log('you have signed up!');
    //   });
  }
}
