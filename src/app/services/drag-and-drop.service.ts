import { Injectable } from '@angular/core';
import { ITeamMember, TTeam } from "../interfaces/members.interface";
import { CdkDrag, CdkDragDrop, CdkDropList } from "@angular/cdk/drag-drop";

@Injectable({
  providedIn: 'root'
})
export class DragAndDropService {
  public moveItemInArray(event: CdkDragDrop<ITeamMember[]>, team: TTeam): TTeam {
    const tempTeam: (ITeamMember | null)[] = [];
    const pinIndexArr: number[] = [];

    team.forEach((member: ITeamMember | null, index: number) => {
      if (!member || member.pinned) {
        pinIndexArr.push(index);
      } else {
        tempTeam.push(member);
      }
    });

    const elementToMove = tempTeam.splice(event.previousIndex, 1)[0];
    tempTeam.splice(event.currentIndex, 0, elementToMove);
    pinIndexArr.forEach((item: number) => tempTeam.splice(item, 0, team[item]));

    // @ts-ignore
    return tempTeam;
  }
}
