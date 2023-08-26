import { Injectable } from '@angular/core';
import { IMember, ITeamMember } from "../interfaces/members.interface";
import { members } from "../../assets/members";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private characters: ITeamMember[] = [];

  constructor() {
    this.initCharacters();
  }

  public get(): ITeamMember[] {
    return this.characters;
  }

  private initCharacters(): void {
    this.characters = members.map((member: IMember) => ({...member, locked: false, pinned: false}));
  }
}
