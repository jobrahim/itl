import { ContainerTypeEntity } from '../entities/container-type.entity';

export class FindContainerTypeDto {
  constructor(container: ContainerTypeEntity) {
    this.id = container.id;
    this.isoType = container.isoType;
    this.name = container.name;
  }

  id: number;
  isoType: string;
  name: string;
}
