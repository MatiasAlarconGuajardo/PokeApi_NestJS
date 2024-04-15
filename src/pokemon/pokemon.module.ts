import { Module } from '@nestjs/common';
import { PokemonService } from './services/pokemon.service';
import { PokemonController } from './controllers/pokemon.controller';

@Module({
  providers: [PokemonService],
  controllers: [PokemonController],
})
export class PokemonModule {}
