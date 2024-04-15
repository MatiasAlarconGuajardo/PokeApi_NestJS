import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PokemonInfo } from '../entities/pokeInfo_entity';
import { PokeType } from '../entities/poketype.entity';
import { PokeAbility } from '../entities/pokeability.entity';
import { sprites } from '../entities/sprites.entity';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(PokemonInfo)
    private readonly pokemonInfoRepository: Repository<PokemonInfo>,
    @InjectRepository(PokeType)
    private readonly pokeTypeRepository: Repository<PokeType>,
    @InjectRepository(PokeAbility)
    private readonly pokeAbilityRepository: Repository<PokeAbility>,
    @InjectRepository(sprites)
    private readonly spritesRepository: Repository<sprites>,
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
        name: pokemon.poke_name,
        url: `${pokemon.id_pokemon}`,
      }));
      return mapped_data;
    } catch (error) {
      throw new Error(error);
    }
  }

  public async getPokemonInfoByID(id: number): Promise<PokemonInfo> {
    try {
      return await this.pokemonInfoRepository
        .createQueryBuilder('pokemon_info')
        .where({ id_pokemon: id })
        .getOne();
    } catch (error) {
      throw new Error(error);
    }
  }
  public async getPokemonTypeByID(id: number): Promise<PokeType[]> {
    try {
      return await this.pokeTypeRepository
        .createQueryBuilder('poketype')
        .leftJoinAndSelect('poketype.type', 'type')
        .where('poketype.pokemon_id = :id', { id })
        .getMany();
    } catch (error) {
      throw new Error(error);
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
  public async getPokemonSpritesByID(id: number): Promise<sprites> {
    try {
      return await this.spritesRepository
        .createQueryBuilder('sprites')
        .where({ pokemon_id: id })
        .getOne();
    } catch (error) {
      throw new Error(error);
    }
  }
}
