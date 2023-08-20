import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { environment } from "../../../environments/environment";
import { IMember, ITeamMember } from "../../interfaces/members.interface";

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterCardComponent {
  @Input() character!: ITeamMember;
  public env = environment;
  @Output() lockChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() pinChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  public changeLock(lock: boolean): void {
    this.lockChange.emit(lock);
  }

  public changePin(pin: boolean): void {
    this.pinChange.emit(pin);
  }
}
