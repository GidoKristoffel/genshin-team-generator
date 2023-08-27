import { ChangeDetectionStrategy, Component, OnInit, Type } from '@angular/core';
import {
  CharacterAvailabilityFilterComponent
} from "../character-availability-filter/character-availability-filter.component";
import { IFilterTab } from "../../interfaces/filters.interface";
import { WeaponFilterComponent } from "../weapon-filter/weapon-filter.component";
import { RegionFilterComponent } from "../region-filter/region-filter.component";
import { FilterQuantityService } from "../../services/filter-quantity.service";
import { distinctUntilChanged } from "rxjs";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent implements OnInit {
  public tabs: IFilterTab[] = [{
    title: 'Персонажы',
    content: CharacterAvailabilityFilterComponent,
    count: 0,
  }, {
    title: 'Оружие',
    content: WeaponFilterComponent,
    count: 0,
  }, {
    title: 'Регион',
    content: RegionFilterComponent,
    count: 0,
  }];

  constructor(
    private filterQuantityService: FilterQuantityService
  ) {}

  ngOnInit() {
    this.initCharactersCount();
    this.initWeaponsCount();
    this.initRegionsCount();
  }

  private initCharactersCount(): void {
    this.filterQuantityService
      .watchCharacters()
      .pipe(distinctUntilChanged())
      .subscribe((charactersQuantity: number) => {
        this.tabs[0].count = charactersQuantity;
      });
  }

  private initWeaponsCount(): void {
    this.filterQuantityService
      .watchWeapons()
      .pipe(distinctUntilChanged())
      .subscribe((weaponsQuantity: number) => {
        this.tabs[1].count = weaponsQuantity;
      });
  }

  private initRegionsCount(): void {
    this.filterQuantityService
      .watchRegions()
      .pipe(distinctUntilChanged())
      .subscribe((regionsQuantity: number) => {
        this.tabs[2].count = regionsQuantity;
      });
  }
}
