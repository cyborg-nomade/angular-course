import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cummulator = 0;
  numbers = [0];
  oddN = [];
  evenN = [0];

  onGameStarted(n: number) {
    this.cummulator += n;
    this.numbers.push(this.cummulator);

    if (this.cummulator % 2) {
      this.oddN.push(this.cummulator);
    } else {
      this.evenN.push(this.cummulator);
    }
  }
}
