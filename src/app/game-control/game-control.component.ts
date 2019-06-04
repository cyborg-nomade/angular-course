import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() startEvent = new EventEmitter<number>();
  timerId: NodeJS.Timer;

  constructor() {}

  ngOnInit() {}

  onStart() {
    this.timerId = setInterval(() => {
      this.startEvent.emit(1);
    }, 1000);
  }

  onStop() {
    clearInterval(this.timerId);
  }
}
