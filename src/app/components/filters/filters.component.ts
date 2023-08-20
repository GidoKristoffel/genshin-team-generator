import { ChangeDetectionStrategy, Component, Type } from '@angular/core';
import {
  CharacterAvailabilityFilterComponent
} from "../character-availability-filter/character-availability-filter.component";
import { IFilterTab } from "../../interfaces/filters.interface";

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
    content: null,
  }, {
    title: 'Регион',
    content: null,
  }];
}
