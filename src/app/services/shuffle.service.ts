import { Injectable } from '@angular/core';
import { IMember, ITeamMember } from "../interfaces/members.interface";
import { members } from "../../assets/members";

@Injectable({
  providedIn: 'root'
})
export class ShuffleService {
  private allMembers: ITeamMember[] = [];
  private travelerIds: number[] = [3, 12, 14, 66];
  public team: ITeamMember[] = [];

  constructor() {
    let randTravelerIds = this.shuffleArray(this.travelerIds);
    this.allMembers = members
      .filter((member: IMember) => !this.travelerIds.includes(member.id) || randTravelerIds[0] === member.id)
      .map((member: IMember) => ({...member, locked: false, pinned: false}));
  }

  public generateRandomTeam(lockedMembers: number[]): ITeamMember[] {
    this.allMembers = this.copyAllMembers();
    this.team = this.shuffleTeam(this.allMembers, lockedMembers).slice(0, 4);
    return this.team;
  }

  private shuffleArray<T>(arr: T[]): T[] {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  private shuffleTeam(arr: ITeamMember[], locked: number[] = []): ITeamMember[] {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      if (!locked.includes(arr[i].id) && !locked.includes(arr[j].id)) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    return arr;
  }

  private copyAllMembers(): ITeamMember[] {
    let randTravelerIds = this.shuffleArray(this.travelerIds);
    return this.allMembers
      .filter((member: ITeamMember) => !this.travelerIds.includes(member.id) || randTravelerIds[0] === member.id)
      .map((member: ITeamMember) => ({...member, pinned: member.pinned && member.locked}));
  }

  public updateTeamPosition(team: ITeamMember[]): void {
    this.allMembers.splice(0, team.length, ...team);
  }
}
