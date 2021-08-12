import { Controller, Post, Body, Res } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { ContainerTypesService } from './container-types.service';
import { CreateContainerTypeDto } from './dto/create-container-type.dto';

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
}
