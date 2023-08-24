import { Component, OnInit } from '@angular/core';
import { RegionFilterService } from "../../services/region-filter.service";
import { IRegionFilter, IRegionFilterSelect } from "../../interfaces/filters.interface";

@Component({
  selector: 'app-region-filter',
  templateUrl: './region-filter.component.html',
  styleUrls: ['./region-filter.component.scss']
})
export class RegionFilterComponent implements OnInit {
  public filters: IRegionFilterSelect[] = [];

  constructor(
    private regionFilterService: RegionFilterService
  ) {}

  ngOnInit() {
    this.filtersInit();
  }

  private filtersInit(): void {
    this.filters = this.regionFilterService.get().map((filter: IRegionFilter) => ({...filter, selected: true}));
  }

  public toggleFilter(id: number, index: number): void {
    this.filters[index].selected = !this.filters[index].selected;

    if (this.filters[index].selected) {
      this.regionFilterService.add(id);
    } else {
      this.regionFilterService.remove(id);
    }
  }
}
