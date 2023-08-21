import { ChangeDetectionStrategy, Component, Type } from '@angular/core';
import {
  CharacterAvailabilityFilterComponent
} from "../character-availability-filter/character-availability-filter.component";
import { IFilterTab } from "../../interfaces/filters.interface";
import { WeaponFilterComponent } from "../weapon-filter/weapon-filter.component";
import { RegionFilterComponent } from "../region-filter/region-filter.component";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent {
  public readonly tabs: IFilterTab[] = [{
    title: 'Персонажы',
    content: CharacterAvailabilityFilterComponent,
  }, {
    title: 'Оружие',
    content: WeaponFilterComponent,
  }, {
    title: 'Регион',
    content: RegionFilterComponent,
  }];
}
