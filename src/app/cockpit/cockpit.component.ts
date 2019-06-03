import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverAdded = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() blueprintAdded = new EventEmitter<{
    blueprintName: string;
    blueprintContent: string;
  }>();
  // newServerName = ''; // old solution with two-way databinding
  // newServerContent = ''; // old solution with two-way databinding

  constructor() {}

  ngOnInit() {}

  onAddServer(
    serverNameInput: HTMLInputElement,
    serverContentInput: HTMLInputElement
  ) {
    this.serverAdded.emit({
      serverName: serverNameInput.value,
      serverContent: serverContentInput.value
    });
  }

  onAddBlueprint(
    blueprintNameInput: HTMLInputElement,
    blueprintContentInput: HTMLInputElement
  ) {
    this.blueprintAdded.emit({
      blueprintName: blueprintNameInput.value,
      blueprintContent: blueprintContentInput.value
    });
  }
}
