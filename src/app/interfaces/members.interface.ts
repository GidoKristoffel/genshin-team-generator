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
  id: number;
  name: string;
  icon: string; 
  quality: EQuality;
  elementalType: EElementalType;
  weapon: EWeapon;
  region: ERegion;
}
