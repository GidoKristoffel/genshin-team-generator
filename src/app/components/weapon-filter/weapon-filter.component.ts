import { Component, OnInit } from '@angular/core';
import { WeaponFilterService } from "../../services/weapon-filter.service";
import { IWeaponFilterSelect } from "../../interfaces/filters.interface";

@Component({
  selector: 'app-weapon-filter',
  templateUrl: './weapon-filter.component.html',
  styleUrls: ['./weapon-filter.component.scss']
})
export class WeaponFilterComponent implements OnInit {
  public filters: IWeaponFilterSelect[] = [];

  constructor(
    private weaponFilterService: WeaponFilterService
  ) {}

  ngOnInit() {
    this.initFilter();
  }

  private initFilter(): void {
    this.filters = this.weaponFilterService.get().map((filter) => ({ ... filter, selected: true }));
  }

  public toggleFilter(id: number, index: number): void {
    this.filters[index].selected = !this.filters[index].selected;

    if (this.filters[index].selected) {
      this.weaponFilterService.add(id);
    } else {
      this.weaponFilterService.remove(id);
    }
  }
}
