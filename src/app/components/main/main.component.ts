import { Component } from '@angular/core';
import { IMember } from "../../interfaces/members.interface";
import { members } from "../../../assets/members";
import { environment } from "../../../environments/environment.development";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public env = environment;
  public team: IMember[] = [];
  private allMembers: IMember[] = members;
  private travelerIds: number[] = [3, 12, 14, 66];

  public generateRandomTeam(): void {
    let temp = this.copyAllMembers();
    this.team = this.shuffleArray(temp).slice(0, 4);
  }

  private copyAllMembers(): IMember[] {
    let randTravelerIds = this.shuffleArray(this.travelerIds);
    return this.allMembers
      .filter((member: IMember) => !this.travelerIds.includes(member.id) || randTravelerIds[0] === member.id)
      .map((member: IMember) => ({...member}));
  }

  private shuffleArray<T>(arr: T[]): T[] {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}
