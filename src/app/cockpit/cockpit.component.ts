import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef
} from '@angular/core';

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

  @ViewChild('serverContentInput', { static: true })
  serverContentInput: ElementRef;

  constructor() {}

  ngOnInit() {}

  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverAdded.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(blueprintNameInput: HTMLInputElement) {
    this.blueprintAdded.emit({
      blueprintName: blueprintNameInput.value,
      blueprintContent: this.serverContentInput.nativeElement.value
    });
  }
}
