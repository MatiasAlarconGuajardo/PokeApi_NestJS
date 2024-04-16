import { ConfigModule, ConfigService } from '@nestjs/config';
import { Abilities } from 'src/pokemon/entities/abilities.entity';
import { FlavorText } from 'src/pokemon/entities/flavortext.entity';
import { PokeAbility } from 'src/pokemon/entities/pokeability.entity';
import { PokemonInfo } from 'src/pokemon/entities/pokeInfo_entity';
import { PokeType } from 'src/pokemon/entities/poketype.entity';

import { Types } from 'src/pokemon/entities/types.entity';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

ConfigModule.forRoot({
  envFilePath: `.${process.env.NODE_ENV}.env`,
});

const configService = new ConfigService();

export const DataSourceConfig: DataSourceOptions = {
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USER'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  entities: [Abilities, PokeAbility, PokeType, Types, PokemonInfo, FlavorText],
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
  synchronize: false,
  migrationsRun: true,
  logging: false,
  namingStrategy: new SnakeNamingStrategy(),
};

export const AppDS = new DataSource(DataSourceConfig);
