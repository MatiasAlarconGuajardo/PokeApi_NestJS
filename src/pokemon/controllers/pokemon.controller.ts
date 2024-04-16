import { Controller, Get, Param } from '@nestjs/common';
import { PokemonService } from '../services/pokemon.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}
  @ApiTags('pokemon')
  @Get('list/:skip?')
  public async getPokemonInfo(@Param('skip') skip: number = 0) {
    const results = await this.pokemonService.getPokemonInfo(skip);
    return { results };
  }
  @ApiTags('pokemon')
  @Get(':id')
  public async getPokemonInfoByID(@Param('id') id: number) {
    return await this.pokemonService.getPokemonInfoByID(id);
  }
  @ApiTags('Types')
  @Get('type/:id')
  public async getPokemonTypesById(@Param('id') id: number) {
    return await this.pokemonService.getPokemonTypesById(id);
  }
  @ApiTags('Types')
  @Get('types/:id')
  public async getTypeNameById(@Param('id') id: number) {
    return await this.pokemonService.getTypeNameById(id);
  }
  @ApiTags('Abilities')
  @Get('abilities/:id')
  public async getPokemonAbilitiesById(@Param('id') id: number) {
    return await this.pokemonService.getPokemonAbilitiesById(id);
  }
  @ApiTags('Abilities')
  @Get('ability/:id')
  public async getAbilityNameById(@Param('id') id: number) {
    return await this.pokemonService.getAbilityNameById(id);
  }
  @ApiTags('FlavorText')
  @Get('FlavorText/:id')
  public async getPokemonFlavorTextByID(@Param('id') id: number) {
    return await this.pokemonService.getPokemonFlavorTextByID(id);
  }
}
