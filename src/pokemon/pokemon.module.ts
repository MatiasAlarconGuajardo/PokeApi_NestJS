import { Module } from '@nestjs/common';
import { PokemonService } from './services/pokemon.service';
import { PokemonController } from './controllers/pokemon.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Abilities } from './entities/abilities.entity';
import { PokeAbility } from './entities/pokeability.entity';
import { PokemonInfo } from './entities/pokeInfo_entity';
import { PokeType } from './entities/poketype.entity';
import { Types } from './entities/types.entity';
import { FlavorText } from './entities/flavortext.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PokemonInfo,
      Abilities,
      PokeAbility,
      PokeType,
      Types,
      FlavorText,
    ]),
  ],
  providers: [PokemonService],
  controllers: [PokemonController],
})
export class PokemonModule {}
