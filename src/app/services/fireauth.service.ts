import { inject, Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import { createUserWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class FireAuthService {
  fireAuth = inject(Auth);

  // Sign in

  // Sign up user
  signupUser(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): Observable<void> {
    const promise = createUserWithEmailAndPassword(
      this.fireAuth,
      email,
      password
    ).then((reponse) =>
      console.log(reponse.user, { displayName: firstName, lastName: lastName })
    );
    return from(promise);
  }

  // Sign Out
}
