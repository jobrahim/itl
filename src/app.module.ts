import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContainerTypesController } from './container-types/container-types.controller';
import { ContainerTypesModule } from './container-types/container-types.module';

@Module({
  imports: [ContainerTypesModule],
  controllers: [AppController, ContainerTypesController],
  providers: [AppService],
})
export class AppModule {}
