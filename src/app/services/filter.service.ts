import { Injectable } from '@angular/core';
import { EQuality, IFilterCharacter, IMember } from "../interfaces/members.interface";
import { members } from "../../assets/members";

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private allMembers: IMember[] = members;
  constructor() { }

  public getAllCharacters(): IFilterCharacter[] {
    return this.allMembers.map((member: IMember) => {
      return {
        id: member.id,
        name: member.name,
        icon: member.icon,
        quality: member.quality,
        selected: false,
      };
    });
  }
}
