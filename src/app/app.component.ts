import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayStatus = false;

  onToggleDisplay() {
    this.displayStatus = !this.displayStatus;
  }
}
