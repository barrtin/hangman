import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() email:string;
  @Input() password: string;

  constructor(private userService: UserService, private router: Router) {}

  onSubmit(email, password) {
    this.userService.login(email.value, password.value)
  }
}
