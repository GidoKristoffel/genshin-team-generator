import { Type } from "@angular/core";
import {
  CharacterAvailabilityFilterComponent
} from "../components/character-availability-filter/character-availability-filter.component";
import { WeaponFilterComponent } from "../components/weapon-filter/weapon-filter.component";
import { RegionFilterComponent } from "../components/region-filter/region-filter.component";
import { ERegion, EWeapon } from "./members.interface";

export interface IFilterTab {
  title: string;
  content: Type<CharacterAvailabilityFilterComponent | WeaponFilterComponent | RegionFilterComponent> | null;
  count: number;
}

export interface IWeaponFilter {
  id: EWeapon;
  src: string;
  title: string;
}

export interface IWeaponFilterSelect extends IWeaponFilter {
  selected: boolean;
}

export interface IRegionFilter {
  id: ERegion;
  src: string;
  title: string;
}

export interface IRegionFilterSelect extends IRegionFilter {
  selected: boolean;
}
