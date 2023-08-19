import { Injectable } from '@angular/core';
import { IMember, ITeamMember } from "../interfaces/members.interface";
import { members } from "../../assets/members";
import { FilterService } from "./filter.service";

@Injectable({
  providedIn: 'root'
})
export class ShuffleService {
  private allMembers: ITeamMember[] = [];
  private travelerIds: number[] = [3, 12, 14, 66];
  public team: ITeamMember[] = [];

  constructor(
    private filterService: FilterService
  ) {
    this.initMembers();
  }

  private initMembers(): void {
    this.allMembers = members.map((member: IMember) => ({...member, locked: false, pinned: false}));
  }

  public generateRandomTeam(lockedMembers: number[]): ITeamMember[] {
    const filterMembersIds = this.filterService.getFilterMembersIds();
    let members = this.allMembers.filter((member: ITeamMember) => filterMembersIds.includes(member.id));
    const teamId = this.findIntersection(this.team.map((item) => item.id), this.travelerIds);
    if (teamId.length < 2) {
      const index = this.team.findIndex((item) => item.id === teamId[0]);
      const teamIdLock = this.team.length && index !== -1 ? this.team[index].locked : false;
      if (!teamIdLock) {
        let tempIds = this.shuffleArray(this.findIntersection(filterMembersIds, this.travelerIds));
        members = members.filter((member: ITeamMember) => !this.travelerIds.includes(member.id) || member.id === tempIds[0]);
      } else {
        members = members.filter((member: ITeamMember) => !this.travelerIds.includes(member.id) || member.id === teamId[0]);
      }
    }
    this.team.forEach((item: ITeamMember, index: number) => {
      if (item.locked) {
        const startIndex = index;
        const endIndex = members.findIndex((i) => i.id === item.id);
        if (endIndex !== -1) {
          [members[startIndex], members[endIndex]] = [members[endIndex], members[startIndex]];
        }
      }
    });
    members = this.shuffleTeam(members, lockedMembers.filter((lockedMember) => filterMembersIds.includes(lockedMember)));
    this.team = members.slice(0, 4);
    const teamIds = this.team.map((item) => item.id);
    this.allMembers.forEach((memberItem: ITeamMember) => {
      if (!teamIds.includes(memberItem.id)) {
        memberItem.locked = false;
        memberItem.pinned = false;
      }
    });
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

  public updateTeamPosition(team: ITeamMember[]): void {
    if (this.arraysAreEqual(this.team, team)) {
      this.team = team;
    }
  }

  private findIntersection(arr1: number[], arr2: number[]): number[] {
    const set1 = new Set(arr1);
    const intersection = arr2.filter(value => set1.has(value));
    return intersection;
  }
  private arraysAreEqual(arr1: any[], arr2: any[]): boolean {
    const a = arr1.map((a) => a.id).sort();
    const b = arr2.map((a) => a.id).sort();
    return a.every((value, index) => value === b[index]);
  }

}
