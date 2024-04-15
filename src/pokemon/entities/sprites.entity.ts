import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Sprites } from 'src/interfaces/pokemon.interface';
import { PokemonInfo } from './pokeInfo_entity';

@Entity({ name: 'sprites' })
export class sprites implements Sprites {
  @PrimaryGeneratedColumn()
  id_sprite: number;

  @Column()
  pokemon_id: number;

  @Column('text')
  front_og: string;

  @Column('text')
  animated_front: string;

  @ManyToOne(() => PokemonInfo)
  @JoinColumn({ name: 'pokemon_id' })
  pokemon: PokemonInfo;
}
