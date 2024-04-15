import { Controller, Get, Param } from '@nestjs/common';

@Controller('pokemon')
export class PokemonController {
  @Get()
  get9Pokemon() {
    return '9 Pokemon';
  }
  @Get(':id')
  getById(@Param('id') id: number) {
    return `Pokemon with id ${id}`;
  }
}
