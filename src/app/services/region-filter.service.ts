import { Injectable } from '@angular/core';
import { IRegionFilter } from "../interfaces/filters.interface";
import { regions } from "../../assets/filters";
import { ERegion } from "../interfaces/members.interface";

@Injectable({
  providedIn: 'root'
})
export class RegionFilterService {
  private filters: IRegionFilter[] = regions;
  private selectedFilters: ERegion[] = [];

  constructor() {
    this.init();
  }

  public get(): IRegionFilter[] {
    return this.filters;
  }

  public add(id: ERegion): void {
    this.selectedFilters.push(id);
    this.selectedFilters.sort();
  }

  public remove(id: ERegion): void {
    this.selectedFilters = this.selectedFilters.filter((region: ERegion) => region !== id);
  }

  public getSelected(): ERegion[] {
    return this.selectedFilters;
  }

  private init(): void {
    this.selectedFilters = this.filters.map((filter) => filter.id);
  }
}
