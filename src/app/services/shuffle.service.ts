import { Injectable } from '@angular/core';
import { ITeamMember } from "../interfaces/members.interface";

@Injectable({
  providedIn: 'root'
})
export class ShuffleService {
  private shuffleArray<T>(arr: T[]): T[] {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  public shuffleTeam(arr: ITeamMember[], locked: number[] = []): ITeamMember[] {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      if (!locked.includes(arr[i].id) && !locked.includes(arr[j].id)) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    return arr;
  }


  public getRandom<T>(array: T[]): T {
    const index = Math.floor(Math.random() * array.length);
    const item = array[index];
    return item;
  }
}
