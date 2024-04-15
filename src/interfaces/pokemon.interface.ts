export interface Pokemon_Info {
  id_pokemon: number;
  poke_name: string;
  weight: number;
  height: number;
  hp: number;
  atk: number;
  def: number;
  spa: number;
  spd: number;
  speed: number;
  total: number;
  base_xp: number;
  flavortext: string;
}

export interface Pokemon_Abilities {
  id_ability: number;
  ability_name: string;
}

export interface Pokemon_Types {
  id_types: number;
  types_name: string;
}

export interface PokeAbilities {
  id_pokeability: number;
  pokemon_id: number;
  ability_id: number;
}

export interface PokeTypes {
  id_poketype: number;
  pokemon_id: number;
  type_id: number;
}

export interface Sprites {
  id_sprite: number;
  pokemon_id: number;
  front_og: string;
  animated_front: string;
}
