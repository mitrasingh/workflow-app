import { inject, Injectable, OnDestroy } from '@angular/core';
import { Auth, authState, User } from '@angular/fire/auth';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FireAuthService implements OnDestroy {
  private auth: Auth = inject(Auth);
  authState$ = authState(this.auth);
  authStateSubscription: Subscription;

  constructor() {
    this.authStateSubscription = this.authState$.subscribe(
      (aUser: User | null) => {
        console.log(aUser);
      }
    );
  }

  ngOnDestroy() {
    this.authStateSubscription.unsubscribe();
  }
}

// Sign in

// Sign up user

// Sign Out
