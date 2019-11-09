import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../../shared/authentication.service';

@Component({
  selector: 'ssc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  email: string;
  password: string;
  constructor(public authenticationService: AuthenticationService) {}

  ngOnInit() {}

  onSignIn() {
    this.authenticationService.SignIn(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  onSignUp() {
    this.authenticationService.SignUp(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  onLogout() {
    this.authenticationService.SignOut();
  }
}
