import { Component, OnInit } from '@angular/core';
import { FilterService } from "../../services/filter.service";
import { EQuality } from "../../interfaces/members.interface";
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-character-availability-filter',
  templateUrl: './character-availability-filter.component.html',
  styleUrls: ['./character-availability-filter.component.scss']
})
export class CharacterAvailabilityFilterComponent  implements OnInit {
  public env = environment;
  public characters: { name: string; icon: string; id: number; quality: EQuality }[] = [];
  constructor(
    private filterService: FilterService
  ) {}

  ngOnInit() {
    this.characters = this.filterService.getAllCharacters();
  }
}
