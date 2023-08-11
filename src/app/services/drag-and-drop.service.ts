import { Injectable } from '@angular/core';
import { ITeamMember } from "../interfaces/members.interface";
import { CdkDrag, CdkDragDrop, CdkDropList } from "@angular/cdk/drag-drop";

@Injectable({
  providedIn: 'root'
})
export class DragAndDropService {
  public moveItemInArray(event: CdkDragDrop<ITeamMember[]>, team: ITeamMember[]): ITeamMember[] {
    const tempTeam: ITeamMember[] = [];
    const pinIndexArr: number[] = [];

    team.forEach((member: ITeamMember, index: number) => {
      if (!member.pinned) {
        tempTeam.push(member);
      } else {
        pinIndexArr.push(index);
      }
    });

    const elementToMove = tempTeam.splice(event.previousIndex, 1)[0];
    tempTeam.splice(event.currentIndex, 0, elementToMove);
    pinIndexArr.forEach((item) => tempTeam.splice(item, 0, team[item]));

    return tempTeam;
  }
}
