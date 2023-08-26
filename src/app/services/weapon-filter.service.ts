import { Injectable } from '@angular/core';
import { IWeaponFilter } from "../interfaces/filters.interface";
import { weapons } from "../../assets/filters";
import { EWeapon } from "../interfaces/members.interface";

@Injectable({
  providedIn: 'root'
})
export class WeaponFilterService {
  private weaponFilters: IWeaponFilter[] = weapons;

  private selectedWeapons: EWeapon[] = [];

  constructor() {
    this.init();
  }

  public get(): IWeaponFilter[] {
    return this.weaponFilters;
  }

  public add(id: EWeapon): void {
    this.selectedWeapons.push(id);
    this.selectedWeapons.sort();
  }

  public remove(id: EWeapon): void {
    this.selectedWeapons = this.selectedWeapons.filter((weaponId: EWeapon) => weaponId !== id);
  }

  public getSelected(): EWeapon[] {
    return this.selectedWeapons;
  }

  private init(): void {
    this.selectedWeapons = this.weaponFilters.map((weapon: IWeaponFilter) => weapon.id);
  }
}
