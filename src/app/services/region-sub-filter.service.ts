import { Injectable } from '@angular/core';
import { TSubRegion, TSubRegions, TSubWeapon, TSubWeapons } from "../interfaces/filters.interface";

@Injectable({
  providedIn: 'root'
})
export class RegionSubFilterService {
  private regions: TSubRegions = [null, null, null, null];

  public get(): TSubRegions {
    return this.regions;
  }

  public set(regions: TSubRegions): void {
    this.regions = [...regions];
  }

  public setByIndex(region: TSubRegion, index: number): void {
    this.regions[index] = region;
  }
}
