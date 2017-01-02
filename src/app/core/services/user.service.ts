import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class UserService {
  private loggedIn = false;

  constructor(public angularfire: AngularFire) {
	this.loggedIn = !!localStorage.getItem('firebase:authUser:AIzaSyCH1lMo5k5sWXk4n4mYhLEdmBIEEOjrdpo:[DEFAULT]');
  }

  login(email, password) {
	let result = this.angularfire.auth.login(
		{
		  email: email,
		  password: password,
		}, {
		  provider: AuthProviders.Password,
		  method: AuthMethods.Password,
		}
	).then((success) => {
		this.loggedIn = true;
	});
	return result;
  }
  
  logout() {
	this.angularfire.auth.logout();
	this.loggedIn = false;
  }

  isLoggedIn() {
	return this.loggedIn;
  }
}