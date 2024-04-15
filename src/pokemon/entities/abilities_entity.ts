import { Pokemon_Abilities } from 'src/interfaces/pokemon.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'abilities' })
export class Abilities implements Pokemon_Abilities {
  @PrimaryGeneratedColumn()
  id_ability: number;

  @Column()
  ability_name: string;
}
