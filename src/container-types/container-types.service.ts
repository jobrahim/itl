import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContainerTypeDto } from './dto/create-container-type.dto';
import { UpdateContainerTypeDto } from './dto/update-container-type.dto';
import { ContainerTypeEntity } from './entities/container-type.entity';

@Injectable()
export class ContainerTypesService {
  constructor(
    @InjectRepository(ContainerTypeEntity)
    private repository: Repository<ContainerTypeEntity>,
  ) {}

  create(
    createContainerTypeDto: CreateContainerTypeDto,
  ): Promise<ContainerTypeEntity> {
    let container: ContainerTypeEntity = this.repository.create(
      createContainerTypeDto,
    );
    return this.repository.save(container);
  }

  update(
    id: number,
    updateContainerTypeDto: UpdateContainerTypeDto,
  ): Promise<any> {
    return this.repository.update(id, updateContainerTypeDto)

  }

  remove(id: number): Promise<any> {
    return this.repository.delete(id)
  }
}
