export interface Pokemon_Info {
  id: number;
  name: string;
  weight: number;
  height: number;
  stats: { base_stat: number; stat_name: string }[];
  base_experience: number;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
    versions: {
      'generation-v': {
        black_white: {
          animated: {
            front_default: string;
          };
        };
      };
    };
  };
}

export interface PokemonInfoResponse {
  id: number;
  name: string;
  weight: number;
  height: number;
  stats: { base_stat: number; stat_name: string }[];
  base_experience: number;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
    versions: {
      'generation-v': {
        'black-white': {
          animated: {
            front_default: string;
          };
        };
      };
    };
  };
  types: {
    type: {
      url: string;
    };
  }[];
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
