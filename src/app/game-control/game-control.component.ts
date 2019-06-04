import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() startEvent = new EventEmitter<number>();
  n: NodeJS.Timer;

  constructor() {}

  ngOnInit() {}

  onStart() {
    this.n = setInterval(() => {
      this.startEvent.emit(1);
    }, 1000);
  }

  onStop() {
    clearInterval(this.n);
  }
}
