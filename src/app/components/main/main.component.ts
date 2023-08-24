import { Component, OnInit } from '@angular/core';
import { ITeamMember, TTeam } from "../../interfaces/members.interface";
import { ShuffleService } from "../../services/shuffle.service";
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { DragAndDropService } from "../../services/drag-and-drop.service";
import { TeamService } from "../../services/team.service";
import { distinctUntilChanged } from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public team: TTeam = [null, null, null, null];

  constructor(
    private shuffleService: ShuffleService,
    private dragAndDropService: DragAndDropService,
    private teamService: TeamService,
  ) {}

  ngOnInit() {
    this.initTeamWatch();
  }

  public generateRandomTeam(): void {
    this.shuffleService.generateRandomTeam();
  }

  public onDrop(event: CdkDragDrop<ITeamMember[]>): void {
    this.team = this.dragAndDropService.moveItemInArray(event, this.team);
    this.shuffleService.updateTeamPosition(this.team);
  }

  public pinChange(pinned: boolean, index: number): void {
    this.teamService.setPin(pinned, index);
  }

  public lockChange(locked: boolean, index: number): void {
    this.teamService.setLock(locked, index);
  }

  private initTeamWatch(): void {
    this.teamService
      .watch()
      .pipe(distinctUntilChanged())
      .subscribe((team: TTeam) => {
        this.team = team;
      });
  }
}
