import { Component, OnInit } from '@angular/core';
import { FilterService } from "../../services/filter.service";
import { EQuality, IFilterCharacter } from "../../interfaces/members.interface";
import { environment } from "../../../environments/environment";
import { distinctUntilChanged } from "rxjs";
import * as buffer from "buffer";

@Component({
  selector: 'app-character-availability-filter',
  templateUrl: './character-availability-filter.component.html',
  styleUrls: ['./character-availability-filter.component.scss']
})
export class CharacterAvailabilityFilterComponent  implements OnInit {
  public env = environment;
  public characters: IFilterCharacter[] = [];
  private selection: boolean = false;
  private selectionValue: boolean = false;
  private startSelection!: number;
  constructor(
    private filterService: FilterService
  ) {}

  ngOnInit() {
    this.filterService.getFilterMembers()
      .pipe(distinctUntilChanged())
      .subscribe((filterMembers: IFilterCharacter[]) => {
        this.characters = filterMembers;
    });
  }

  public selectAll(): void {
    this.filterService.updateFilterMembers(
      this.characters.map((character: IFilterCharacter) => character.id),
      true
    );
  }

  public reset(): void {
    this.filterService.updateFilterMembers(
      this.characters.map((character: IFilterCharacter) => character.id),
      false
    );
  }

  public mouseDown(index: number, value: boolean): void {
    this.selection = true;
    this.startSelection = index;
    this.selectionValue = value;
    this.mouseMove(index);
  }

  public mouseUp(): void {
    this.selection = false;
  }

  public mouseMove(index: number): void {
    if (this.selection) {
      let ids = [];
      if (index > this.startSelection) {
        for (let i = this.startSelection; i <= index; i++) {
          ids.push(this.characters[i].id);
        }
      } else {
        for (let i = index; i <= this.startSelection; i++) {
          ids.push(this.characters[i].id);
        }
      }
      this.filterService.updateFilterMembers(ids, this.selectionValue);
    }
  }
}
