import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class UserService {
  private loggedIn = false;

  constructor(public angularfire: AngularFire) {}

  login(email, password) {
    return this.angularfire.auth.login(
    	{
	      email: email,
	      password: password,
	    },
	    {
	      provider: AuthProviders.Password,
	      method: AuthMethods.Password,
	    }
    );
  }
  
  logout() {
    return;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}