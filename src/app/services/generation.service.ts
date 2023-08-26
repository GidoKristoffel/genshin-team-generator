import { Injectable } from '@angular/core';
import { FilterService } from "./filter.service";
import { TeamService } from "./team.service";
import { ITeamMember } from "../interfaces/members.interface";
import { CharactersService } from "./characters.service";
import { TravelerService } from "./traveler.service";
import { ShuffleService } from "./shuffle.service";
import { SharedService } from "./shared.service";
import { WeaponFilterService } from "./weapon-filter.service";
import { RegionFilterService } from "./region-filter.service";

@Injectable({
  providedIn: 'root'
})
export class GenerationService {
  private members: ITeamMember[] = [];

  constructor(
    private filterService: FilterService,
    private teamService: TeamService,
    private charactersService: CharactersService,
    private travelerService: TravelerService,
    private shuffleService: ShuffleService,
    private sharedService: SharedService,
    private weaponFilterService: WeaponFilterService,
    private regionFilterService: RegionFilterService
  ) {}

  public run(): void {
    this.resetMembers();
    this.filterByAvailableCharacters();
    this.filterByAvailableWeapons();
    this.filterByAvailableRegions();
    this.filterTraveler();
    this.saveLockedTeamMembersPosition();
    this.shuffleMembers();
    this.updateTeam();
  }

  private resetMembers(): void {
    this.members = [];
  }

  private filterByAvailableCharacters(): void {
    this.members =
      this.charactersService
        .get()
        .filter((member: ITeamMember) =>
          this.filterService.getFilterMembersIds().includes(member.id)
        );
  }

  private filterByAvailableWeapons(): void {
    this.members = this.members.filter((member: ITeamMember) => this.weaponFilterService.getSelected().includes(member.weapon));
  }

  private filterByAvailableRegions(): void {
    this.members = this.members.filter((member: ITeamMember) => this.regionFilterService.getSelected().includes(member.region));
  }

  private filterTraveler(): void {
    this.members = this.travelerService.filter(this.members);
  }

  private saveLockedTeamMembersPosition(): void  {
    this.teamService.get().forEach((item: ITeamMember | null, index: number) => {
      if (item && item.locked) {
        const startIndex = index;
        const endIndex = this.members.findIndex((i: ITeamMember) => i.id === item.id);
        if (endIndex !== -1) {
          [this.members[startIndex], this.members[endIndex]] = [this.members[endIndex], this.members[startIndex]];
        }
      }
    });
  }

  private shuffleMembers(): void {
    const lockedMembers: number[] = this.teamService.getLockedMembers();
    const filterMembersIds: number[] = this.filterService.getFilterMembersIds();
    const locked: number[] = this.sharedService.findIntersection(lockedMembers, filterMembersIds);
    this.members = this.shuffleService.shuffleTeam(this.members, locked);
  }

  private updateTeam(): void {
    this.teamService.update([this.members[0], this.members[1], this.members[2], this.members[3]]);
  }
}
