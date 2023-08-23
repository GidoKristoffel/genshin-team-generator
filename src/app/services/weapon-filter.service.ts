import { Injectable } from '@angular/core';
import { IWeaponFilter } from "../interfaces/filters.interface";

@Injectable({
  providedIn: 'root'
})
export class WeaponFilterService {
  private weaponFilters: IWeaponFilter[] = [{
    id: 1,
    src: 'assets/img/weapons/sword.webp',
    title: 'Sword',
  }, {
    id: 2,
    src: 'assets/img/weapons/claymore.webp',
    title: 'Claymore',
  }, {
    id: 3,
    src: 'assets/img/weapons/bow.webp',
    title: 'Bow',
  }, {
    id: 4,
    src: 'assets/img/weapons/catalyst.webp',
    title: 'Catalyst',
  }, {
    id: 5,
    src: 'assets/img/weapons/polearm.webp',
    title: 'Polearm',
  }];

  private selectedWeapons: number[] = [1, 2, 3, 4, 5];

  constructor() { }

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
}
