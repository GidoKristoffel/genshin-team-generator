import { Injectable } from '@angular/core';
import { FilterService } from "./filter.service";
import { WeaponFilterService } from "./weapon-filter.service";
import { RegionFilterService } from "./region-filter.service";
import { BehaviorSubject, distinctUntilChanged, Observable } from "rxjs";
import { ERegion, EWeapon, IFilterCharacter } from "../interfaces/members.interface";

@Injectable({
  providedIn: 'root'
})
export class FilterQuantityService {
  private characters: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private weapons: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private regions: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(
    private characterFilterService: FilterService,
    private weaponFilterService: WeaponFilterService,
    private regionFilterService: RegionFilterService
  ) {
    this.init();
  }

  private init(): void {
    this.initCharacters();
    this.initWeapons();
    this.initRegions();
  }

  private initCharacters(): void {
    this.characterFilterService
      .getFilterMembers()
      .pipe(distinctUntilChanged())
      .subscribe((characters: IFilterCharacter[]) => {
        const charactersNumber: number = characters.filter((character: IFilterCharacter) => character.selected).length;
        this.setCharacters(charactersNumber);
      });
  }

  private initWeapons(): void {
    this.weaponFilterService
      .watchSelected()
      .pipe(distinctUntilChanged())
      .subscribe((weapons: EWeapon[]) => {
        this.setWeapons(weapons.length);
      });
  }

  private initRegions(): void {
    this.regionFilterService
      .watchSelected()
      .pipe(distinctUntilChanged())
      .subscribe((regions: ERegion[]) => {
        this.setRegions(regions.length);
      });
  }

  private setCharacters(characters: number): void {
    this.characters.next(characters);
  }

  private setWeapons(weapons: number): void {
    this.weapons.next(weapons);
  }

  private setRegions(regions: number): void {
    this.regions.next(regions);
  }

  public watchCharacters(): Observable<number> {
    return this.characters;
  }

  public watchWeapons(): Observable<number> {
    return this.weapons;
  }

  public watchRegions(): Observable<number> {
    return this.regions;
  }
}
