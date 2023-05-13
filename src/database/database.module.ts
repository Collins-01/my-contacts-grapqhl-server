import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        entities: [
          __dirname + '/../**/*.entity.{js,ts}',
          // '/../**/*.entity.ts',
        ],
        migrations: [__dirname + '/../migrations/*{.ts,.js}'],
        cli: {
          migrationsDir: __dirname + '/../migrations',
        },

        migrationsTableName: '',
        synchronize: true,
        // migrationsRun: true,
        extra: {
          // postgis: true,
          charset: 'utf8mb4_unicode_ci',
        },
      }),
    }),
  ],
})
export class DatabaseModule {}
