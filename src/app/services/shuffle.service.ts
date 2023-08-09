import { Injectable } from '@angular/core';
import { IMember } from "../interfaces/members.interface";
import { members } from "../../assets/members";

@Injectable({
  providedIn: 'root'
})
export class ShuffleService {
  private allMembers: IMember[] = members;
  private travelerIds: number[] = [3, 12, 14, 66];
  public team: IMember[] = [];

  public generateRandomTeam(): IMember[] {
    let temp = this.copyAllMembers();
    this.team = this.shuffleArray(temp).slice(0, 4);
    return this.team;
  }

  private shuffleArray<T>(arr: T[]): T[] {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  private copyAllMembers(): IMember[] {
    let randTravelerIds = this.shuffleArray(this.travelerIds);
    return this.allMembers
      .filter((member: IMember) => !this.travelerIds.includes(member.id) || randTravelerIds[0] === member.id)
      .map((member: IMember) => ({...member}));
  }
}
