import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-switch-icon',
  templateUrl: './switch-icon.component.html',
  styleUrls: ['./switch-icon.component.scss']
})
export class SwitchIconComponent {
  @Input() defaultIcon: string = '';
  @Input() switchedIcon: string = '';

  @Input() isSwitched: boolean = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();

  public changeIcon(): void {
    this.isSwitched = !this.isSwitched;
    this.change.emit(this.isSwitched);
  }

}
