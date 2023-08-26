import { Injectable } from '@angular/core';
import { members } from "../../assets/members";
import { EGroup, IMember, ITeamMember } from "../interfaces/members.interface";
import { ShuffleService } from "./shuffle.service";

@Injectable({
  providedIn: 'root'
})
export class TravelerService {
  private ids: number[] = [];

  constructor(
    private shuffleService: ShuffleService
  ) {
    this.initIds();
  }

  public getIds(): number[] {
    return this.ids;
  }

  public filter(characters: ITeamMember[]): ITeamMember[] {
    const travelers: ITeamMember[] = characters.filter((character: ITeamMember) => character.groupId === EGroup.Traveler);
    const isLockedTraveler = travelers.some((traveler: ITeamMember) => traveler.locked);
    let filteredCharacters: ITeamMember[];
    if (isLockedTraveler) {
      filteredCharacters = characters.filter((character: ITeamMember) => character.groupId !== EGroup.Traveler || (character.groupId === EGroup.Traveler && character.locked));
    } else {
      const randomTraveler: ITeamMember = this.shuffleService.getRandom(travelers);
      filteredCharacters = characters.filter((character: ITeamMember) => character.groupId !== EGroup.Traveler || (character.groupId === EGroup.Traveler && character.id === randomTraveler.id));
    }
    return filteredCharacters;
  }

  private initIds(): void {
    this.ids = members
      .filter((member: IMember) => member.groupId === EGroup.Traveler)
      .map((member: IMember) => member.id);
  };
}
