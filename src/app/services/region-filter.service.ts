import { Injectable } from '@angular/core';
import { IRegionFilter } from "../interfaces/filters.interface";
import { regions } from "../../assets/filters";

@Injectable({
  providedIn: 'root'
})
export class RegionFilterService {
  private filters: IRegionFilter[] = regions;
  private selectedFilters: number[] = [];

  constructor() {
    this.init();
  }

  public get(): IRegionFilter[] {
    return this.filters;
  }

  public add(id: number): void {
    this.selectedFilters.push(id);
    this.selectedFilters.sort();
  }

  public remove(id: number): void {
    this.selectedFilters = this.selectedFilters.filter((weaponId: number) => weaponId !== id);
  }

  public getSelected(): number[] {
    return this.selectedFilters;
  }

  private init(): void {
    this.selectedFilters = this.filters.map((filter) => filter.id);
  }
}
