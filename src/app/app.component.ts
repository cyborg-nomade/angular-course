import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean;
  loginText: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.loggedIn;
    if (this.isLoggedIn) {
      this.loginText = 'You are logged in';
    } else {
      this.loginText = 'You are not logged in';
    }
    this.authService.loginEvent.subscribe((loginState: boolean) => {
      this.isLoggedIn = loginState;
      if (this.isLoggedIn) {
        this.loginText = 'You are logged in';
      } else {
        this.loginText = 'You are not logged in';
      }
    });
  }
}
