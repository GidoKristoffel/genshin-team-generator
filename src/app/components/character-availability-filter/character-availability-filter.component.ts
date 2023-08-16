import { Component, OnInit } from '@angular/core';
import { FilterService } from "../../services/filter.service";
import { EQuality, IFilterCharacter } from "../../interfaces/members.interface";
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

  public toggleFilterCharacter(index: number, id: number): void {
    this.filterService.updateFilterMembers([id], !this.characters[index].selected);
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
}
