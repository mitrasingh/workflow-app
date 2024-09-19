import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl(''),
  });

  onSubmit(): void {
    console.log(
      `email: ${this.loginForm.value.email}, password: ${this.loginForm.value.password}`
    );
  }

  get email() {
    return this.loginForm.get('email');
  }
}
