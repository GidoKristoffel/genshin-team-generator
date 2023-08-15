import { Component, OnInit } from '@angular/core';
import { FilterService } from "../../services/filter.service";
import { EQuality, IFilterCharacter } from "../../interfaces/members.interface";
import { environment } from "../../../environments/environment";

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
    this.characters = this.filterService.getAllCharacters();
  }

  public toggleFilterCharacter(index: number): void {
    this.characters[index].selected = !this.characters[index].selected;
  }

  public selectAll(): void {
    this.characters.forEach((character: IFilterCharacter) => {
      character.selected = true;
    });
  }

  public reset(): void {
    this.characters.forEach((character: IFilterCharacter) => {
      character.selected = false;
    });
  }
}
