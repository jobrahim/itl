import { Module } from '@nestjs/common';
import { ContainerTypesModule } from './container-types/container-types.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContainerTypeEntity } from './container-types/entities/container-type.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `env/${process.env.NODE_ENV || 'local'}.env`,
    }),
    //config typeORM
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get('SQL_HOST'),
        port: +config.get('SQL_PORT'),
        username: config.get('SQL_USER'),
        password: config.get('SQL_PASSWORD'),
        database: config.get('SQL_DATABASE'),
        entities: [ContainerTypeEntity],
        synchronize: true,
        options: {
          encrypt: false,
        },
      }),
      inject: [ConfigService],
    }),
    //end tyoe orm
    ContainerTypesModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
