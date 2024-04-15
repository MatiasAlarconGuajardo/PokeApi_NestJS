import { Controller, Get, Param } from '@nestjs/common';
import { PokemonService } from '../services/pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get('all')
  public async getPokemonInfo() {
    return await this.pokemonService.getPokemonInfo();
  }

  @Get(':id')
  public async getPokemonInfoByID(@Param('id') id: number) {
    return await this.pokemonService.getPokemonInfoByID(id);
  }
  @Get('type/:id')
  public async getPokemonTypeByID(@Param('id') id: number) {
    return await this.pokemonService.getPokemonTypeByID(id);
  }
  @Get('abilities/:id')
  public async getPokemonAbilitiesByID(@Param('id') id: number) {
    return await this.pokemonService.getPokemonAbilitiesByID(id);
  }
  @Get('sprites/:id')
  public async getPokemonSpritesByID(@Param('id') id: number) {
    return await this.pokemonService.getPokemonSpritesByID(id);
  }
}
