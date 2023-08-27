import { Injectable } from '@angular/core';
import { IWeaponFilter } from "../interfaces/filters.interface";
import { weapons } from "../../assets/filters";
import { EWeapon } from "../interfaces/members.interface";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeaponFilterService {
  private weaponFilters: IWeaponFilter[] = weapons;

  private selectedWeapons: BehaviorSubject<EWeapon[]> = new BehaviorSubject<EWeapon[]>([]);

  constructor() {
    this.init();
  }

  public get(): IWeaponFilter[] {
    return this.weaponFilters;
  }

  public setSelected(weapons: EWeapon[]): void {
    this.selectedWeapons.next([...weapons]);
  }

  public add(id: EWeapon): void {
    const selected: EWeapon[] = [...this.getSelected(), id].sort();
    this.setSelected(selected);
  }

  public remove(id: EWeapon): void {
    const selected: EWeapon[] = this.getSelected().filter((weaponId: EWeapon) => weaponId !== id);
    this.setSelected(selected);
  }

  public getSelected(): EWeapon[] {
    return this.selectedWeapons.getValue();
  }

  public watchSelected(): Observable<EWeapon[]> {
    return this.selectedWeapons;
  }

  private init(): void {
    const selected: EWeapon[] = this.weaponFilters.map((weapon: IWeaponFilter) => weapon.id);
    this.setSelected(selected);
  }
}
