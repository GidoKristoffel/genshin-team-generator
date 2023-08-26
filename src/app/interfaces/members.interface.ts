export enum EQuality {
  Epic = 'epic',
  Legendary = 'legendary'
}

export enum EElementalType {
  Pyro = 'pyro',
  Hydro = 'hydro',
  Dendro = 'dendro',
  Electro = 'electro',
  Anemo = 'anemo',
  Cryo = 'cryo',
  Geo = 'geo',

}

export enum EWeapon {
  Sword = 'sword',
  Claymore = 'claymore',
  Bow = 'bow',
  Catalyst = 'catalyst',
  Polearm = 'polearm',
}

export enum ERegion {
  Mondstadt = 'mondstadt',
  Liyue = 'liyue',
  Inazuma = 'inazuma',
  Snezhnaya = 'snezhnaya',
  Sumeru = 'sumeru',
  Fontaine = 'fontaine',
  Natlan = 'natlan',
  Other = 'other',
}

export interface IMember {
  readonly id: number;
  readonly groupId: EGroup;
  readonly name: string;
  readonly icon: string;
  readonly quality: EQuality;
  readonly elementalType: EElementalType;
  readonly weapon: EWeapon;
  readonly region: ERegion;
}

export interface ITeamMember extends IMember {
  locked: boolean;
  pinned: boolean;
}

export type TTeam = [ITeamMember | null, ITeamMember | null, ITeamMember | null, ITeamMember | null];


export interface IFilterCharacter {
  name: string;
  icon: string;
  id: number;
  quality: EQuality;
  selected: boolean;
}

export enum EGroup {
  Traveler = 'traveler',
  Default = 'default'
}
