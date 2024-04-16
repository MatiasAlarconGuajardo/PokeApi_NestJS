import {
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PokeAbilities } from 'src/interfaces/pokemon.interface';
import { Abilities } from './abilities.entity';
import { PokemonInfo } from './pokeInfo_entity';

@Entity({ name: 'pokeability' })
export class PokeAbility implements PokeAbilities {
  @PrimaryGeneratedColumn()
  id_pokeability: number;

  @Column()
  pokemon_id: number;

  @Column()
  ability_id: number;

  @ManyToOne(() => PokemonInfo)
  @JoinColumn({ name: 'pokemon_id' })
  pokemon: PokemonInfo;

  @ManyToOne(() => Abilities)
  @JoinColumn({ name: 'ability_id' })
  ability: Abilities;
}
