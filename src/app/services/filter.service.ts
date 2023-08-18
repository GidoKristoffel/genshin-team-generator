import { Injectable } from '@angular/core';
import { IFilterCharacter, IMember } from "../interfaces/members.interface";
import { members } from "../../assets/members";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filterMembers: BehaviorSubject<IFilterCharacter[]> = new BehaviorSubject<IFilterCharacter[]>([]);
  constructor() {
    this.initFilterMembers();
  }

  public getFilterMembers(): BehaviorSubject<IFilterCharacter[]> {
    return this.filterMembers;
  }

  public getFilterMembersIds(): number[] {
    return this.filterMembers.getValue()
      .filter((member: IFilterCharacter) => member.selected)
      .map((member: IFilterCharacter) => member.id);
  }

  private initFilterMembers(): void {
    this.filterMembers.next(
      members.map((member: IMember) => {
        return {
          id: member.id,
          name: member.name,
          icon: member.icon,
          quality: member.quality,
          selected: false,
        };
      })
    );
  }

  public updateFilterMembersByIds(ids: number[], selected: boolean): void {
    const temp = this.filterMembers.getValue();
    ids.forEach((id: number) => {
      const index = this.filterMembers.getValue().findIndex((member: IFilterCharacter) => member.id === id);
      if (index !== -1) {
        temp[index].selected = selected;
      }
    });
    this.updateFilterMembers(temp);
  }

  public updateFilterMembers(members: IFilterCharacter[]): void {
    this.filterMembers.next(members);
  }
}
