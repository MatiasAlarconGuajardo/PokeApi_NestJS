import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Pokemon_Types } from 'src/interfaces/pokemon.interface';

@Entity({ name: 'types' })
export class Types implements Pokemon_Types {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  id_types: number;

  @Column()
  types_name: string;
}
