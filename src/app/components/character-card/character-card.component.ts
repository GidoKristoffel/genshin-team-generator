import { Component, Input } from '@angular/core';
import { environment } from "../../../environments/environment";
import { IMember } from "../../interfaces/members.interface";

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent {
  @Input() character!: IMember;
  public env = environment;
}
