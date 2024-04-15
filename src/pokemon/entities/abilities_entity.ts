import { Pokemon_Abilities } from 'src/interfaces/pokemon.interface';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PokeAbility } from './pokeability.entity';

@Entity({ name: 'abilities' })
export class Abilities implements Pokemon_Abilities {
  @PrimaryGeneratedColumn()
  id_ability: number;

  @Column()
  ability_name: string;

  @OneToMany(() => PokeAbility, (pokeAbility) => pokeAbility.ability)
  pokeAbilities: PokeAbility[];
}
