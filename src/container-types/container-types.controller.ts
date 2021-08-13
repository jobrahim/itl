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
  Req,
  Query,
  All,
} from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ContainerTypesService } from './container-types.service';
import { CreateContainerTypeDto } from './dto/create-container-type.dto';
import { UpdateContainerTypeDto } from './dto/update-container-type.dto';

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
        return response.status(HttpStatus.FORBIDDEN).json({ error: 'error' });
      });
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateContainerTypeDto: UpdateContainerTypeDto,
    @Res() response,
  ) {
    this.containerTypesService
      .update(+id, updateContainerTypeDto)
      .then((updateContainer) => {
        return response
          .status(HttpStatus.OK)
          .json({ success: true, message: '' });
    }).catch(() => {
        return response.status(HttpStatus.FORBIDDEN).json({ error: 'error' });
      });
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Res() response) {
    this.containerTypesService
      .remove(+id)
      .then((removeContainer) => {
        return response
          .status(HttpStatus.OK)
          .json({ success: true, message: '' });
    }).catch(() => {
        return response.status(HttpStatus.FORBIDDEN).json({ error: 'error' });
   });
  }

}
