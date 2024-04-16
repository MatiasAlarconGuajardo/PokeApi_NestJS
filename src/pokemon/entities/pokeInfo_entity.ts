import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PokeType } from './poketype.entity';
import { PokeAbility } from './pokeability.entity';
import { FlavorText } from './flavortext.entity';

@Entity({ name: 'pokemon_info' })
export class PokemonInfo implements PokemonInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 15 })
  name: string;

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
  base_xp: number;

  @Column()
  front_og: string;

  @Column()
  animated_front: string;

  @OneToMany(() => PokeType, (pokeType) => pokeType.pokemon)
  pokeTypes: PokeType[];

  @OneToMany(() => PokeAbility, (pokeAbility) => pokeAbility.pokemon)
  pokeAbilities: PokeAbility[];

  @OneToMany(() => FlavorText, (flavorText) => flavorText.pokemonInfo)
  flavorTexts: FlavorText[];

  @OneToMany(() => PokeType, (pokeType) => pokeType.pokemon)
  types: PokeType[];
}
