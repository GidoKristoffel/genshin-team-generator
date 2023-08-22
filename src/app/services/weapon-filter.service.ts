import { Injectable } from '@angular/core';

interface IWeaponFilter {
  id: number;
  src: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class WeaponFilterService {
  private weaponFilters: IWeaponFilter[] = [{
    id: 1,
    src: '',
    title: 'Sword',
  }, {
    id: 2,
    src: '',
    title: 'Claymore',
  }, {
    id: 3,
    src: '',
    title: 'Bow',
  }, {
    id: 4,
    src: '',
    title: 'Catalyst',
  }, {
    id: 5,
    src: '',
    title: 'Polearm',
  }];

  private selectedWeapons: number[] = [];

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
