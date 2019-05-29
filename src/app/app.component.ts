import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayStatus = false;
  clickCounter = 0;

  onToggleDisplay() {
    this.displayStatus = !this.displayStatus;
    this.clickCounter++;
  }

  getColor() {
    return this.clickCounter >= 5 ? 'blue' : 'none';
  }
}
