import { Injectable } from '@angular/core';
import { IRegionFilter } from "../interfaces/filters.interface";
import { regions } from "../../assets/filters";
import { ERegion } from "../interfaces/members.interface";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegionFilterService {
  private filters: IRegionFilter[] = regions;
  private selectedFilters: BehaviorSubject<ERegion[]> = new BehaviorSubject<ERegion[]>([]);

  constructor() {
    this.init();
  }

  public get(): IRegionFilter[] {
    return this.filters;
  }

  public add(id: ERegion): void {
    const selected: ERegion[] = [...this.getSelected(), id].sort();
    this.setSelected(selected);
  }

  public remove(id: ERegion): void {
    const selected: ERegion[] = this.getSelected().filter((region: ERegion) => region !== id);
    this.setSelected(selected);
  }

  public getSelected(): ERegion[] {
    return this.selectedFilters.getValue();
  }

  public setSelected(regions: ERegion[]): void {
    this.selectedFilters.next([...regions]);
  }

  public watchSelected(): Observable<ERegion[]> {
    return this.selectedFilters;
  }

  private init(): void {
    const selected: ERegion[] = this.filters.map((filter) => filter.id);
    this.setSelected(selected);
  }
}
