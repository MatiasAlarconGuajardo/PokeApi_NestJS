import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PokeTypes } from 'src/interfaces/pokemon.interface';
import { PokemonInfo } from './pokeInfo_entity';
import { Types } from './types.entity';

@Entity({ name: 'poketype' })
export class PokeType implements PokeTypes {
  @PrimaryGeneratedColumn()
  id_poketype: number;

  @Column()
  pokemon_id: number;

  @Column()
  type_id: number;

  @ManyToOne(() => PokemonInfo, (pokemon) => pokemon.pokeTypes)
  @JoinColumn({ name: 'pokemon_id' })
  pokemon: PokemonInfo;

  @ManyToOne(() => Types)
  @JoinColumn({ name: 'type_id' })
  type: Types;
}
