import {
  Controller,
  Post,
  Body,
  Res,
  UseGuards,
  Put,
  Param,
  Delete,
  Get,
  Query,
} from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ContainerTypesService } from './container-types.service';
import { CreateContainerTypeDto } from './dto/create-container-type.dto';
import { UpdateContainerTypeDto } from './dto/update-container-type.dto';
import { ContainerTypeEntity } from './entities/container-type.entity';

@Controller('container_types')
export class ContainerTypesController {
  constructor(private readonly containerTypesService: ContainerTypesService) {}

  /**
   * Create Container Type
   * Crea tipo de container
   * Endpoint: /container_types
   * @param createContainerTypeDto
   * @returns
   */
  //@UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Body() createContainerTypeDto: CreateContainerTypeDto,
    @Res() response,
  ) {
    this.containerTypesService
      .create(createContainerTypeDto)
      .then((newContainer) => {
        return response
          .status(HttpStatus.OK)
          .json({ success: true, message: '' });
      })
      .catch(() => {
        return response
          .status(HttpStatus.FORBIDDEN)
          .json({ success: false, error: 'error' });
      });
  }
  /**
   * Modifica el tipo de contenedor
   * @param id
   * @param updateContainerTypeDto
   * @param response
   */
  // @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateContainerTypeDto: UpdateContainerTypeDto,
    @Res() response,
  ) {
    this.containerTypesService
      .update(+id, updateContainerTypeDto)
      .then((updateContainer) => {
        if (updateContainer.affected > 0) {
          return response.status(HttpStatus.OK).json({
            success: true,
            message: 'container modificado correctamente',
          });
        } else {
          return response
            .status(HttpStatus.NO_CONTENT)
            .json({ success: false, message: 'El contenedor no existe' });
        }
      })
      .catch(() => {
        return response
          .status(HttpStatus.FORBIDDEN)
          .json({ succes: false, error: 'error' });
      });
  }
  //@UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string, @Res() response) {
    this.containerTypesService
      .remove(+id)
      .then((removeContainer) => {
        if (removeContainer.affected > 0) {
          return response.status(HttpStatus.OK).json({
            success: true,
            message: 'container eliminado correctamente',
          });
        } else {
          return response
            .status(HttpStatus.NO_CONTENT)
            .json({ success: false, message: 'el contenedor no existe' });
        }
      })
      .catch(() => {
        return response.status(HttpStatus.FORBIDDEN).json({ error: 'error' });
      });
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Res() res) {
    this.containerTypesService
      .findAll()
      .then((list) => res.status(HttpStatus.OK).json(list))
      .catch(() => {
        return res
          .status(HttpStatus.FORBIDDEN)
          .json({ success: false, message: 'Error' });
      });
  }
}
