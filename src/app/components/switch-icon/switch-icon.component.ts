import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-switch-icon',
  templateUrl: './switch-icon.component.html',
  styleUrls: ['./switch-icon.component.scss']
})
export class SwitchIconComponent {
  @Input() defaultIcon: string = '';
  @Input() switchedIcon: string = '';

  @Input() switched: boolean = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();

  public changeIcon(): void {
    this.switched = !this.switched;
    this.change.emit(this.switched);
  }
}
