import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { HeroComponent } from '../shared/components/hero/hero.component';
import { LoginForm } from './ui/login-form/login-form.component';
import { Login } from '../models/login.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    SignupComponent,
    HeroComponent,
    LoginComponent,
    LoginForm,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginUser(loginData: Login) {
    console.log(loginData);
  }
}
