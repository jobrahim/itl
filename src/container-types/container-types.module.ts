import { Module } from '@nestjs/common';
import { ContainerTypesService } from './container-types.service';
import { ContainerTypesController } from './container-types.controller';
import { ContainerTypeEntity } from './entities/container-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([ContainerTypeEntity])],

  controllers: [ContainerTypesController],
  providers: [ContainerTypesService],
})
export class ContainerTypesModule {}
