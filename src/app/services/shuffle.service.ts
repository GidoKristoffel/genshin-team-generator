import { Injectable } from '@angular/core';
import { IMember, ITeamMember, TTeam } from "../interfaces/members.interface";
import { members } from "../../assets/members";
import { FilterService } from "./filter.service";
import { TeamService } from "./team.service";

@Injectable({
  providedIn: 'root'
})
export class ShuffleService {
  private allMembers: ITeamMember[] = [];
  private travelerIds: number[] = [3, 12, 14, 66];


  constructor(
    private filterService: FilterService,
    private teamService: TeamService,
  ) {
    this.initMembers();
  }

  private initMembers(): void {
    this.allMembers = members.map((member: IMember) => ({...member, locked: false, pinned: false}));
  }

  public generateRandomTeam(): void {
    const lockedMembers: number[] = this.teamService.getLockedMembers();
    const filterMembersIds = this.filterService.getFilterMembersIds();
    let members = this.allMembers.filter((member: ITeamMember) => filterMembersIds.includes(member.id));
    const teamId = this.findIntersection(this.teamService.get().map((item: ITeamMember | null) => item ? item.id : -1), this.travelerIds);
    if (teamId.length < 2) {
      const index = this.teamService.get().findIndex((item: ITeamMember | null) => item && item.id === teamId[0]);
      const teamIdLock = this.teamService.get().length && index !== -1 && this.teamService.get()[index] ? this.teamService.get()[index]?.locked : false;
      if (!teamIdLock) {
        let tempIds = this.shuffleArray(this.findIntersection(filterMembersIds, this.travelerIds));
        members = members.filter((member: ITeamMember) => !this.travelerIds.includes(member.id) || member.id === tempIds[0]);
      } else {
        members = members.filter((member: ITeamMember) => !this.travelerIds.includes(member.id) || member.id === teamId[0]);
      }
    }
    this.saveLockedMembersPosition(members);
    members = this.shuffleTeam(members, lockedMembers.filter((lockedMember) => filterMembersIds.includes(lockedMember)));
    this.resetMembersSettings();
    this.teamService.update([members[0], members[1], members[2], members[3]]);
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

  public updateTeamPosition(team: TTeam): void {
    if (this.arraysAreEqual(this.teamService.get(), team)) {
      this.teamService.update(team);
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


  private saveLockedMembersPosition(members: ITeamMember[]): void {
    this.teamService.get().forEach((item: ITeamMember | null, index: number) => {
      if (item && item.locked) {
        const startIndex = index;
        const endIndex = members.findIndex((i: ITeamMember) => i.id === item.id);
        if (endIndex !== -1) {
          [members[startIndex], members[endIndex]] = [members[endIndex], members[startIndex]];
        }
      }
    });
  }
  private resetMembersSettings(): void {
    this.allMembers.forEach((member: ITeamMember) => {
      const teamIds: number[] = this.teamService.getIds();

      if (!teamIds.includes(member.id)) {
        member.locked = false;
        member.pinned = false;
      }
    });
  }
}
