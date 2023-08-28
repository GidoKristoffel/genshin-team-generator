import { Injectable } from '@angular/core';
import { TSubWeapon, TSubWeapons } from "../interfaces/filters.interface";

@Injectable({
  providedIn: 'root'
})
export class WeaponSubFilterService {
  private weapons: TSubWeapons = [null, null, null, null];

  public get(): TSubWeapons {
    return this.weapons;
  }

  public set(weapons: TSubWeapons): void {
    this.weapons = [...weapons];
  }

  public setByIndex(weapon: TSubWeapon, index: number): void {
    this.weapons[index] = weapon;
  }
}
