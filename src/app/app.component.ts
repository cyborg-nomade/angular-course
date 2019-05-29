import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayStatus = false;
  clickCounter = [];

  onToggleDisplay() {
    this.displayStatus = !this.displayStatus;
    // this.clickCounter.push(this.clickCounter.length + 1);
    this.clickCounter.push(new Date());
  }

  getColor(index: number) {
    return index >= 5 ? 'blue' : 'none';
  }
}
