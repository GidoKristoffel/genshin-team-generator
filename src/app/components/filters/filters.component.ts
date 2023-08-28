import { ChangeDetectionStrategy, Component, OnInit, Type } from '@angular/core';
import {
  CharacterAvailabilityFilterComponent
} from "../character-availability-filter/character-availability-filter.component";
import { IFilterTab, ITabQuantity, TTabId } from "../../interfaces/filters.interface";
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
  public readonly tabs: IFilterTab[] = [{
    id: TTabId.Characters,
    title: 'Персонажы',
    content: CharacterAvailabilityFilterComponent,
  }, {
    id: TTabId.Weapons,
    title: 'Оружие',
    content: WeaponFilterComponent,
  }, {
    id: TTabId.Regions,
    title: 'Регион',
    content: RegionFilterComponent,
  }];

  public quantity: ITabQuantity = {
    [TTabId.Characters]: 0,
    [TTabId.Weapons]: 0,
    [TTabId.Regions]: 0
  };

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
        this.quantity[TTabId.Characters] = charactersQuantity;
      });
  }

  private initWeaponsCount(): void {
    this.filterQuantityService
      .watchWeapons()
      .pipe(distinctUntilChanged())
      .subscribe((weaponsQuantity: number) => {
        this.quantity[TTabId.Weapons] = weaponsQuantity;
      });
  }

  private initRegionsCount(): void {
    this.filterQuantityService
      .watchRegions()
      .pipe(distinctUntilChanged())
      .subscribe((regionsQuantity: number) => {
        this.quantity[TTabId.Regions] = regionsQuantity;
      });
  }
}
