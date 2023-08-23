import { Injectable } from '@angular/core';
import { IWeaponFilter } from "../interfaces/filters.interface";
import { weapons } from "../../assets/filters";

@Injectable({
  providedIn: 'root'
})
export class WeaponFilterService {
  private weaponFilters: IWeaponFilter[] = weapons;

  private selectedWeapons: number[] = [];

  constructor() {
    this.init();
  }

  public get(): IWeaponFilter[] {
    return this.weaponFilters;
  }

  public add(id: number): void {
    this.selectedWeapons.push(id);
    this.selectedWeapons.sort();
  }

  public remove(id: number): void {
    this.selectedWeapons = this.selectedWeapons.filter((weaponId: number) => weaponId !== id);
  }

  public getSelected(): number[] {
    return this.selectedWeapons;
  }

  private init(): void {
    this.selectedWeapons = this.weaponFilters.map((weapon: IWeaponFilter) => weapon.id);
  }
}
