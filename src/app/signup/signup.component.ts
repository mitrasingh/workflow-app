import { Component, inject } from '@angular/core';
import { FireAuthService } from '../services/fireauth.service';
import { SignupForm } from './ui/signup-form/signup-form.component';
import { Signup } from '../models/signup.model';
import { HeroComponent } from '../shared/components/hero/hero.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [SignupForm, HeroComponent],
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
