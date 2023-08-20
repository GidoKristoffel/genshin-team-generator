import { Component } from '@angular/core';
import { ITeamMember } from "../../interfaces/members.interface";
import { ShuffleService } from "../../services/shuffle.service";
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { DragAndDropService } from "../../services/drag-and-drop.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public team: ITeamMember[] = [];

  constructor(
    private shuffleService: ShuffleService,
    private dragAndDropService: DragAndDropService
  ) {}

  public generateRandomTeam(): void {
    const lockedMembers = this.team.filter((member: ITeamMember) => member.locked).map((member: ITeamMember) => member.id);
    this.team = this.shuffleService.generateRandomTeam(lockedMembers);
  }

  public onDrop(event: CdkDragDrop<ITeamMember[]>): void {
    this.team = this.dragAndDropService.moveItemInArray(event, this.team);
    this.shuffleService.updateTeamPosition(this.team);
  }

  public pinChange(pinned: boolean, index: number): void {
    this.team[index].pinned = pinned;
  }

  public lockChange(locked: boolean, index: number): void {
    this.team[index].locked = locked;
  }
}
