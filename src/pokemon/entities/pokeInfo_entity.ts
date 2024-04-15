import { Pokemon_Info } from 'src/interfaces/pokemon.interface';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PokeType } from './poketype.entity';
import { PokeAbility } from './pokeability.entity';
import { sprites } from './sprites.entity';

@Entity({ name: 'pokemon_info' })
export class PokemonInfo implements Pokemon_Info {
  @PrimaryGeneratedColumn()
  id_pokemon: number;

  @Column({ length: 15 })
  poke_name: string;

  @Column()
  weight: number;

  @Column()
  height: number;

  @Column()
  hp: number;

  @Column()
  atk: number;

  @Column()
  def: number;

  @Column()
  spa: number;

  @Column()
  spd: number;

  @Column()
  speed: number;

  @Column()
  total: number;

  @Column()
  base_xp: number;

  @Column('text')
  flavortext: string;

  @OneToMany(() => PokeType, (pokeType) => pokeType.pokemon_id)
  pokeTypes: PokeType[];

  @OneToMany(() => PokeAbility, (pokeAbility) => pokeAbility.pokemon_id)
  pokeAbilities: PokeAbility[];

  @OneToOne(() => sprites, (sprites) => sprites.pokemon_id)
  sprites: sprites;
}
