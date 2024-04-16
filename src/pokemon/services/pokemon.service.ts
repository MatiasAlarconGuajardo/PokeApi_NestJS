import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PokemonInfo } from '../entities/pokeInfo_entity';
import { PokeType } from '../entities/poketype.entity';
import { PokeAbility } from '../entities/pokeability.entity';
import { FlavorText } from '../entities/flavortext.entity';
import {
  FlavorTextResponse,
  PokemonInfoResponse,
} from 'src/interfaces/pokemon.interface';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(PokemonInfo)
    private readonly pokemonInfoRepository: Repository<PokemonInfo>,
    @InjectRepository(PokeType)
    private readonly pokeTypeRepository: Repository<PokeType>,
    @InjectRepository(PokeAbility)
    private readonly pokeAbilityRepository: Repository<PokeAbility>,
    @InjectRepository(FlavorText)
    private readonly FlavorTextRepository: Repository<FlavorText>,
  ) {}

  public async getPokemonInfo(
    skip: number = 0,
  ): Promise<{ name: string; url: string }[]> {
    try {
      const data = await this.pokemonInfoRepository.find({
        skip: skip,
        take: 9,
      });
      const mapped_data = data.map((pokemon) => ({
        name: pokemon.name,
        url: `${pokemon.id}`,
      }));
      return mapped_data;
    } catch (error) {
      throw new Error(error);
    }
  }

  public async getPokemonInfoByID(
    id_query: number,
  ): Promise<PokemonInfoResponse> {
    try {
      const data = await this.pokemonInfoRepository
        .createQueryBuilder('pokemon_info')
        .where('pokemon_info.id = :id_query', { id_query })
        .getOne();

      if (!data) {
        throw new Error('Pokemon no encontrado');
      }

      const typeIds = await this.getPokemonTypesById(data.id);

      const types = typeIds.map((typeId) => ({
        type: {
          url: `types/${typeId}/`,
        },
      }));

      const mapped_data: PokemonInfoResponse = {
        id: data.id,
        name: data.name,
        weight: data.weight,
        height: data.height,
        stats: [
          { base_stat: data.hp, stat_name: 'hp' },
          { base_stat: data.atk, stat_name: 'atk' },
          { base_stat: data.def, stat_name: 'def' },
          { base_stat: data.spa, stat_name: 'spa' },
          { base_stat: data.spd, stat_name: 'spd' },
          { base_stat: data.speed, stat_name: 'speed' },
        ],
        base_experience: data.base_xp,
        sprites: {
          other: {
            'official-artwork': {
              front_default: data.front_og,
            },
          },
          versions: {
            'generation-v': {
              'black-white': {
                animated: {
                  front_default: data.animated_front,
                },
              },
            },
          },
        },
        types: types,
      };
      return mapped_data;
    } catch (error) {
      throw new Error(error);
    }
  }

  public async getPokemonTypesById(id: number): Promise<number[]> {
    try {
      const pokeTypes = await this.pokeTypeRepository
        .createQueryBuilder('poketype')
        .leftJoinAndSelect('poketype.type', 'type')
        .where('poketype.pokemon_id = :id', { id })
        .getMany();
      return pokeTypes.map((pokeType) => pokeType.type.id_types);
    } catch (error) {
      throw new Error('Error al obtener los tipos de Pokémon');
    }
  }

  public async getPokemonAbilitiesByID(id: number): Promise<PokeAbility[]> {
    try {
      return await this.pokeAbilityRepository
        .createQueryBuilder('pokeAbility')
        .leftJoinAndSelect('pokeAbility.ability', 'ability')
        .where('pokeAbility.pokemon_id = :id', { id })
        .getMany();
    } catch (error) {
      throw new Error(error);
    }
  }
  public async getPokemonFlavorTextByID(
    id: number,
  ): Promise<FlavorTextResponse> {
    try {
      const data = await this.FlavorTextRepository.createQueryBuilder(
        'flavor_text',
      )
        .where({ pokemon_id: id })
        .getOne();
      const mapped_data: FlavorTextResponse = {
        flavor_text_entries: [
          {
            language: {
              name: 'es',
            },
            flavor_text: data.flavortext,
          },
        ],
      };

      return mapped_data;
    } catch (error) {
      throw new Error(error);
    }
  }

  public async getTypes(
    id: number,
  ): Promise<{ names: { language: { name: string }; name: string }[] }> {
    try {
      const data = await this.pokeTypeRepository
        .createQueryBuilder('poketype')
        .leftJoinAndSelect('poketype.type', 'type')
        .where('poketype.pokemon_id = :id', { id })
        .getMany();

      const typeNames = data.map((type) => ({
        language: {
          name: 'es',
        },
        name: type.type.types_name,
      }));

      return { names: typeNames };
    } catch (error) {
      throw new Error(error);
    }
  }
}
