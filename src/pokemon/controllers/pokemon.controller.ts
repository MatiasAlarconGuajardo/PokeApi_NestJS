import { Controller, Get, Param } from '@nestjs/common';
import { PokemonService } from '../services/pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get('list/:skip?')
  public async getPokemonInfo(@Param('skip') skip: number = 0) {
    const results = await this.pokemonService.getPokemonInfo(skip);
    return { results };
  }

  @Get(':id')
  public async getPokemonInfoByID(@Param('id') id: number) {
    return await this.pokemonService.getPokemonInfoByID(id);
  }
  @Get('type/:id')
  public async getPokemonTypesById(@Param('id') id: number) {
    return await this.pokemonService.getPokemonTypesById(id);
  }
  @Get('abilities/:id')
  public async getPokemonAbilitiesByID(@Param('id') id: number) {
    return await this.pokemonService.getPokemonAbilitiesByID(id);
  }
  @Get('FlavorText/:id')
  public async getPokemonFlavorTextByID(@Param('id') id: number) {
    return await this.pokemonService.getPokemonFlavorTextByID(id);
  }
}
