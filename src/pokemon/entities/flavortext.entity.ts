import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { PokemonInfo } from '../entities/pokeInfo_entity';

@Entity()
export class FlavorText {
  @PrimaryGeneratedColumn()
  id_flavor: number;

  @Column()
  pokemon_id: number;

  @Column()
  flavorText: string;

  @ManyToOne(() => PokemonInfo)
  @JoinColumn({ name: 'pokemon_id' })
  pokemonInfo: PokemonInfo;
}
