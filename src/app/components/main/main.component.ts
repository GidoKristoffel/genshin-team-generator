import { Component } from '@angular/core';
import { IMember } from "../../interfaces/members.interface";
import { ShuffleService } from "../../services/shuffle.service";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public team: IMember[] = [];

  constructor(
    private shuffleService: ShuffleService
  ) {}

  public generateRandomTeam(): void {
    this.team = this.shuffleService.generateRandomTeam();
  }

  public onItemDrop(event: CdkDragDrop<IMember[]>): void {
    moveItemInArray(this.team, event.previousIndex, event.currentIndex);
  }
}
