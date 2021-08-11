import { Module } from '@nestjs/common';
import { ContainerTypesService } from './container-types.service';
import { ContainerTypesController } from './container-types.controller';
import { AuthModule } from 'src/auth/auth.module';
import { ContainerTypeEntity } from './entities/container-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([ContainerTypeEntity])
  ],
  controllers:[ContainerTypesController],
  providers: [ContainerTypesService]
})
export class ContainerTypesModule {}

