import { Component, OnInit } from '@angular/core';
import { FilterService } from "../../services/filter.service";
import { IFilterCharacter } from "../../interfaces/members.interface";
import { environment } from "../../../environments/environment";
import { distinctUntilChanged } from "rxjs";

@Component({
  selector: 'app-character-availability-filter',
  templateUrl: './character-availability-filter.component.html',
  styleUrls: ['./character-availability-filter.component.scss']
})
export class CharacterAvailabilityFilterComponent  implements OnInit {
  public env = environment;
  public characters: IFilterCharacter[] = [];
  public tempCharacters: IFilterCharacter[] = [];
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
        this.characters = this.copyArrayOfObjects(filterMembers);
      });
  }

  public selectAll(): void {
    this.filterService.updateFilterMembersByIds(
      this.characters.map((character: IFilterCharacter) => character.id),
      true
    );
  }

  public reset(): void {
    this.filterService.updateFilterMembersByIds(
      this.characters.map((character: IFilterCharacter) => character.id),
      false
    );
  }

  public mouseDown(index: number, value: boolean): void {
    console.log('mouseDown');
    this.selection = true;
    this.startSelection = index;
    this.selectionValue = value;
    this.tempCharacters = this.copyArrayOfObjects(this.filterService.getFilterMembers().value);
    this.mouseEnter(index);
  }

  public mouseUp(): void {
    console.log('mouseUp');
    this.selection = false;
    this.filterService.updateFilterMembers(this.characters);
  }

  public mouseEnter(index: number): void {
    if (this.selection) {
      for(let i = 0; i < this.characters.length; i++) {
        if (index > this.startSelection) {
          this.characters[i].selected = i >= this.startSelection && i <= index ? this.selectionValue : this.tempCharacters[i].selected;
        } else {
          this.characters[i].selected = i >= index && i <= this.startSelection ? this.selectionValue : this.tempCharacters[i].selected;
        }
      }
    }
  }

  private copyArrayOfObjects<T>(arr: T[]): T[] {
    return arr.map((obj: T) => ({...obj}))
  }

  public trackByFn(index: number, item: IFilterCharacter): any {
    return item.id;
  }
}
