import { Injectable } from '@angular/core';
import { ITeamMember, TTeam } from "../interfaces/members.interface";
import { BehaviorSubject, Observable } from "rxjs";
import { SharedService } from "./shared.service";

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private team: BehaviorSubject<TTeam> = new BehaviorSubject<TTeam>([null, null, null, null]);

  constructor(
    private sharedService: SharedService
  ) {}

  public watch(): Observable<TTeam> {
    return this.team;
  }

  public get(): TTeam {
    return [...this.team.getValue()];
  }

  public update(team: TTeam): void {
    this.team.next([...team]);
  }

  public setPin(pinned: boolean, index: number): void {
    let team = this.get();
    if (team[index] !== null) {
      team[index]!.pinned = pinned;
      this.update(team);
    }
  }

  public setLock(locked: boolean, index: number): void {
    let team = this.get();
    if (team[index] !== null) {
      team[index]!.locked = locked;
      this.update(team);
    }
  }

  public getLockedMembers(): number[] {
    let lockedMembers: number[] = [];

    this.team.getValue().forEach((member: ITeamMember | null) => {
      if (member?.locked) {
        lockedMembers.push(member.id);
      }
    });

    return lockedMembers;
  }

  public getIds(): number[] {
    const teamIds: number[] = [];
    this.get().forEach((member: ITeamMember | null) => {
      if (member) {
        teamIds.push(member.id);
      }
    });
    return teamIds;
  }

  public updatePosition(team: TTeam): void {
    if (this.sharedService.arraysAreEqual(this.get(), team)) {
      this.update(team);
    }
  }
}
