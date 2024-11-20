import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { passwordMatchValidator } from '../shared/utils/passwordMatchValidator';
import { FireAuthService } from '../services/fireauth.service';
import { HeroComponent } from '../shared/components/hero/hero.component';
import { SignupForm } from './ui/signup-form/signup-form.component';
import { Signup } from '../models/signup.model';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, HeroComponent, SignupForm],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  // private authService = inject(FireAuthService);

  signupUser(signupData: Signup) {
    console.log(signupData);
  }

  onSubmit(): void {
    // this.submitted = true;
    // const formData = this.signupForm.getRawValue();
    // if (this.signupForm.valid) {
    //   console.log(formData.firstName);
    //   this.authService.register(
    //     formData.firstName,
    //     formData.lastName,
    //     formData.email,
    //     formData.password
    //   );
    //   console.log('Submitted!');
    //   this.signupForm.reset();
    //   this.submitted = false;
    // }
  }
}
