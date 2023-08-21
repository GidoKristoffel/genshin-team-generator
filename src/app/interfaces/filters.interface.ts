import { Type } from "@angular/core";
import {
  CharacterAvailabilityFilterComponent
} from "../components/character-availability-filter/character-availability-filter.component";
import { WeaponFilterComponent } from "../components/weapon-filter/weapon-filter.component";
import { RegionFilterComponent } from "../components/region-filter/region-filter.component";

export interface IFilterTab {
  title: string;
  content: Type<CharacterAvailabilityFilterComponent | WeaponFilterComponent | RegionFilterComponent> | null;
}
