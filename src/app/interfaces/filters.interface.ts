import { Type } from "@angular/core";
import {
  CharacterAvailabilityFilterComponent
} from "../components/character-availability-filter/character-availability-filter.component";

export interface IFilterTab {
  title: string;
  content: Type<CharacterAvailabilityFilterComponent> | null;
}
