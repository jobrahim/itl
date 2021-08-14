import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContainerTypeDto } from './dto/create-container-type.dto';
import { FindContainerTypeDto } from './dto/find-container-type.dto';
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
    return this.repository.update(id, updateContainerTypeDto);
  }
  /**
  async index(isoType: string): Promise<FindContainerTypeDto[]> {
    var query =
      'select * from container_type_entity where isoType=' + isoType + '';
    let dtos: FindContainerTypeDto[] = [];
    let containers: ContainerTypeEntity[] = await this.repository.query(query);
    for (const containerTypeEntity of containers) {
      dtos.push(new FindContainerTypeDto(containerTypeEntity));
    }
    return dtos;
  }
*/

  async findAll(): Promise<ContainerTypeEntity[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<FindContainerTypeDto> {
    return new FindContainerTypeDto(await this.repository.findOneOrFail(id));
  }

  remove(id: number): Promise<any> {
    return this.repository.delete(id);
  }
}
