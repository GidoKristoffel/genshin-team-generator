import { IRegionFilter } from "../app/interfaces/filters.interface";
import { ERegion, EWeapon } from "../app/interfaces/members.interface";

export const weapons = [
  {
    id: EWeapon.Sword,
    src: 'assets/img/weapons/sword.webp',
    title: 'Sword',
  }, {
    id: EWeapon.Claymore,
    src: 'assets/img/weapons/claymore.webp',
    title: 'Claymore',
  }, {
    id: EWeapon.Bow,
    src: 'assets/img/weapons/bow.webp',
    title: 'Bow',
  }, {
    id: EWeapon.Catalyst,
    src: 'assets/img/weapons/catalyst.webp',
    title: 'Catalyst',
  }, {
    id: EWeapon.Polearm,
    src: 'assets/img/weapons/polearm.webp',
    title: 'Polearm',
  }
];

export const regions: IRegionFilter[] = [
  {
    id: ERegion.Mondstadt,
    src: 'assets/img/regions/mondstadt.webp',
    title: 'Mondstadt'
  }, {
    id: ERegion.Liyue,
    src: 'assets/img/regions/liyue.webp',
    title: 'Liyue'
  }, {
    id: ERegion.Inazuma,
    src: 'assets/img/regions/inazuma.webp',
    title: 'Inazuma'
  }, {
    id: ERegion.Sumeru,
    src: 'assets/img/regions/sumeru.webp',
    title: 'Sumeru'
  }, {
    id: ERegion.Fontaine,
    src: 'assets/img/regions/fontaine.webp',
    title: 'Fontaine'
  }, {
    id: ERegion.Natlan,
    src: 'assets/img/regions/unknown.webp',
    title: 'Natlan'
  }, {
    id: ERegion.Snezhnaya,
    src: 'assets/img/regions/unknown.webp',
    title: 'Snezhnaya'
  }, {
    id: ERegion.Other,
    src: 'assets/img/regions/unknown.webp',
    title: 'Other'
  }
];
