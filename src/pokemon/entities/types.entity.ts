import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Pokemon_Types } from 'src/interfaces/pokemon.interface';

@Entity({ name: 'types' })
export class Types implements Pokemon_Types {
  @PrimaryGeneratedColumn()
  id_types: number;

  @Column({ length: 50 })
  types_name: string;
}
