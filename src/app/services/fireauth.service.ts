import { Injectable } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class FireAuthService {
  private user: User | null = null;
  constructor(private auth: Auth) {}
}

// Listen to auth state changes

// Sign in

// Sign up user

// Sign Out
