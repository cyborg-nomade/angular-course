import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  n = 0;

  onGameStart(n: number) {
    this.n = this.n + n;
  }
}
